import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span>🔥</span> WING<span className="footer__logo-accent">SNOB</span>
            </Link>
            <p className="footer__tagline">Fresh. Never Frozen.</p>
            <p className="footer__desc">
              Serving bold flavors from our Sauce Lab since 2017.
              50+ locations and growing across the country.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram" className="footer__social-link">IG</a>
              <a href="#" aria-label="TikTok" className="footer__social-link">TK</a>
              <a href="#" aria-label="Twitter/X" className="footer__social-link">X</a>
              <a href="#" aria-label="Facebook" className="footer__social-link">FB</a>
            </div>
          </div>

          <div className="footer__nav-group">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/order">Order Online</Link></li>
              <li><Link to="/locations">Find a Location</Link></li>
              <li><Link to="/perks">Snob Perks</Link></li>
            </ul>
          </div>

          <div className="footer__nav-group">
            <h4>Company</h4>
            <ul>
              <li><Link to="/franchise">Franchise</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer__nav-group">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Allergen Info</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Wing Snob. All rights reserved.</p>
          <p className="footer__made">Wing Snob® is a registered trademark. All flavors reserved.</p>
        </div>
      </div>
    </footer>
  )
}
