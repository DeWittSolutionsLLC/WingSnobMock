import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './ScrollToast.css'

const MESSAGES = [
  { headline: 'Hungry yet?', sub: "You've been browsing long enough." },
  { headline: 'Feeling snobby?', sub: 'Real wing lovers know when to order.' },
  { headline: 'Still browsing?', sub: 'The wings are waiting.' },
  { headline: "Your stomach called.", sub: 'We picked up.' },
]

const ELIGIBLE = ['/', '/menu']

// 0.0 = top of page, 1.0 = very bottom
const SCROLL_TRIGGER = 0.35

export default function ScrollToast() {
  const location = useLocation()
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [msg, setMsg] = useState(MESSAGES[0])
  const triggered = useRef(false)

  const isEligible = ELIGIBLE.includes(location.pathname)

  useEffect(() => {
    setVisible(false)
    setDismissed(false)
    triggered.current = false
    setMsg(MESSAGES[Math.floor(Math.random() * MESSAGES.length)])
  }, [location.pathname])

  useEffect(() => {
    if (!isEligible || dismissed) return

    const handleScroll = () => {
      if (triggered.current) return
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (scrolled / total >= SCROLL_TRIGGER) {
        triggered.current = true
        setVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isEligible, dismissed])

  if (!isEligible) return null

  const handleClose = () => {
    setVisible(false)
    setTimeout(() => setDismissed(true), 400)
  }

  const handleOrder = () => {
    navigate('/order')
    handleClose()
  }

  return (
    <div className={`scroll-toast${visible ? ' scroll-toast--visible' : ''}`} role="dialog" aria-live="polite">
      <button className="scroll-toast__close" onClick={handleClose} aria-label="Dismiss">✕</button>
      <p className="scroll-toast__headline">{msg.headline}</p>
      <p className="scroll-toast__sub">{msg.sub}</p>
      <button className="scroll-toast__cta" onClick={handleOrder}>Order Now</button>
    </div>
  )
}
