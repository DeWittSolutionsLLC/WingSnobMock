import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToast from './components/ScrollToast'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Locations from './pages/Locations'
import Perks from './pages/Perks'
import Franchise from './pages/Franchise'
import './App.css'

function ScrollAnimator() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    let observer
    let rafId

    const parallaxEls = document.querySelectorAll('[data-parallax]')

    const updateParallax = () => {
      // existing parallax
      parallaxEls.forEach(el => {
        const factor = parseFloat(el.dataset.parallax || '0')
        if (!factor) return
        const offset = window.scrollY * factor
        el.style.setProperty('--parallax-y', `${offset}px`)
      })

      // global scroll progress (drives progress bar)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll > 0) {
        document.documentElement.style.setProperty('--page-progress', String(window.scrollY / maxScroll))
      }

      // hero scroll-out: fades text/image as hero leaves viewport
      const hero = document.querySelector('.hero')
      if (hero) {
        const b = hero.getBoundingClientRect().bottom
        const out = Math.max(0, Math.min(1, 1 - b / (window.innerHeight * 0.75)))
        hero.style.setProperty('--hero-out', String(out))
      }

      // sticky scrollytelling sections
      document.querySelectorAll('[data-scroll-cards]').forEach(section => {
        const rect = section.getBoundingClientRect()
        const scrollRange = section.offsetHeight - window.innerHeight
        if (scrollRange <= 0) return
        const scrolled = Math.max(0, Math.min(scrollRange, -rect.top))
        const count = parseInt(section.dataset.scrollCards, 10) || 4
        const idx = Math.min(count - 1, Math.floor((scrolled / scrollRange) * count))

        section.querySelectorAll('[data-scroll-card]').forEach((card, i) => {
          card.classList.toggle('is-active', i === idx)
          card.classList.toggle('is-past', i < idx)
        })
        section.querySelectorAll('[data-scroll-dot]').forEach((dot, i) => {
          dot.classList.toggle('is-active', i === idx)
        })
      })

      rafId = undefined
    }

    const handleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(updateParallax)
    }

    const timer = setTimeout(() => {
      const els = document.querySelectorAll('[data-animate]')

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const delay = parseInt(entry.target.dataset.delay || '0', 10)
              entry.target.style.transitionDelay = delay + 'ms'
              entry.target.classList.add('is-visible')
            } else {
              entry.target.style.transitionDelay = '0ms'
              entry.target.classList.remove('is-visible')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
      )

      els.forEach(el => observer.observe(el))
    }, 60)

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateParallax()

    let tiltTarget = null
    const onTiltMove = e => {
      const card = e.target.closest('.deal-card, .metric, .tier-card, .sauce-lab-card')
      if (tiltTarget && tiltTarget !== card) {
        tiltTarget.style.transform = ''
        tiltTarget.style.transition = 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        tiltTarget = null
      }
      if (!card) return
      tiltTarget = card
      const rect = card.getBoundingClientRect()
      const rx = -((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * 7
      const ry = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * 7
      card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px) scale3d(1.02, 1.02, 1.02)`
      card.style.transition = 'transform 0.08s linear'
    }
    document.addEventListener('mousemove', onTiltMove)

    return () => {
      clearTimeout(timer)
      observer?.disconnect()
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', onTiltMove)
      if (tiltTarget) { tiltTarget.style.transform = ''; tiltTarget = null }
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollAnimator />
      <Navbar />
      <main className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/perks" element={<Perks />} />
          <Route path="/franchise" element={<Franchise />} />
        </Routes>
      </main>
      <ScrollProgress />
      <ScrollToast />
      <Footer />
    </BrowserRouter>
  )
}

export default App
