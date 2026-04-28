import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/ws-logo.webp'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Wing Snob" className="navbar__logo-img" />
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/order">Order</NavLink></li>
          <li><NavLink to="/locations">Locations</NavLink></li>
          <li><NavLink to="/perks">Snob Perks</NavLink></li>
          <li><NavLink to="/franchise">Franchise</NavLink></li>
        </ul>

        <div className="navbar__actions">
          <Link to="/order" className="btn-primary navbar__cta">Order Now</Link>
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          <ul>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/order">Order</NavLink></li>
            <li><NavLink to="/locations">Locations</NavLink></li>
            <li><NavLink to="/perks">Snob Perks</NavLink></li>
            <li><NavLink to="/franchise">Franchise</NavLink></li>
          </ul>
          <Link to="/order" className="btn-primary">Order Now</Link>
        </div>
      )}
    </nav>
  )
}
