import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToast from './components/ScrollToast'
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
      parallaxEls.forEach(el => {
        const factor = parseFloat(el.dataset.parallax || '0')
        if (!factor) return
        const offset = window.scrollY * factor
        el.style.setProperty('--parallax-y', `${offset}px`)
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

    return () => {
      clearTimeout(timer)
      observer?.disconnect()
      window.removeEventListener('scroll', handleScroll)
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
      <ScrollToast />
      <Footer />
    </BrowserRouter>
  )
}

export default App
