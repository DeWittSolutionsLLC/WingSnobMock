import { Link } from 'react-router-dom'
import { SAUCES, HEAT_LABELS, HEAT_COLORS } from '../data/sauces'
import wingHeroImg from '../assets/WingSnobTraditional.webp'
import './Home.css'

const FEATURED_SAUCES = SAUCES.slice(0, 8)

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="section-label" data-animate="blur-in">Est. 2017 · Livonia, Michigan</p>
            <h1 className="hero__title" data-animate="blur-in" data-delay="80">
              We Just Have<br />
              <span className="hero__title-accent">Better Wings.</span>
            </h1>
            <p className="hero__subtitle" data-animate="fade-up" data-delay="200">
              16 handcrafted sauces & rubs. Made-to-order in 70+ locations across 9 states. One obsession: flavor.
            </p>
            <div className="hero__actions" data-animate="fade-up" data-delay="300">
              <Link to="/order" className="btn-primary">Order Now</Link>
              <Link to="/locations" className="btn-secondary">Find a Location</Link>
            </div>
          </div>
          <div className="hero__image" data-animate="fade-right" data-delay="150">
            <img src={wingHeroImg} alt="Wing Snob traditional wings" className="hero__wing-img" />
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>↓</span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container stats-bar__inner">
          <div className="stat" data-animate="scale-up" data-delay="0">
            <span className="stat__number">70+</span>
            <span className="stat__label">Locations</span>
          </div>
          <div className="stat__divider" />
          <div className="stat" data-animate="scale-up" data-delay="100">
            <span className="stat__number">16</span>
            <span className="stat__label">Sauces & Rubs</span>
          </div>
          <div className="stat__divider" />
          <div className="stat" data-animate="scale-up" data-delay="200">
            <span className="stat__number">9</span>
            <span className="stat__label">States</span>
          </div>
          <div className="stat__divider" />
          <div className="stat" data-animate="scale-up" data-delay="300">
            <span className="stat__number">2017</span>
            <span className="stat__label">Est. Livonia, MI</span>
          </div>
        </div>
      </section>

      {/* Why Wing Snob */}
      <section className="why-section">
        <div className="container">
          <div className="why-section__header" data-animate="fade-up">
            <p className="section-label">Why Wing Snob</p>
            <h2 className="section-title">More Than Just<br />Better Wings</h2>
            <p className="section-subtitle">
              Born in Livonia, MI in 2017 — voted Best Chicken Wings in Metro Detroit and growing into a national brand.
            </p>
          </div>
          <div className="why-grid">
            {[
              { icon: '🍗', title: 'Better Wings', text: 'Made-to-order, never frozen. From bone-in traditional to cauli wings — quality is non-negotiable.' },
              { icon: '🧪', title: '16 Sauces & Rubs', text: 'From Lemon Butter to Habanero Heat — 16 handcrafted flavors that cover every corner of the flavor map.' },
              { icon: '🏆', title: 'Metro Detroit\'s Best', text: 'Voted Best Chicken Wings in Metro Detroit. Started as a single location — now 70+ strong across 9 states.' },
              { icon: '📱', title: 'Snob Perks App', text: 'Order, earn rewards, and unlock exclusive deals. Download the Wing Snob app and get a free fry just for joining.' },
            ].map((card, i) => (
              <div className="why-card" key={card.title} data-animate="fade-up" data-delay={String(i * 100)}>
                <div className="why-card__icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sauce Lab Preview */}
      <section className="sauce-preview">
        <div className="container">
          <div className="sauce-preview__header" data-animate="fade-up">
            <p className="section-label">The Sauce Lab</p>
            <h2 className="section-title">16 Sauces & Rubs</h2>
            <p className="section-subtitle">
              From Lemon Butter to Habanero Heat — handcrafted flavors at every heat level.
              Mix up to 2 per order.
            </p>
          </div>
          <div className="sauce-grid">
            {FEATURED_SAUCES.map((sauce, i) => (
              <div key={sauce.id} className="sauce-card" data-animate="scale-up" data-delay={String(Math.min(i * 60, 420))}>
                <div
                  className="sauce-card__bowl"
                  style={{ background: sauce.color }}
                >
                  {sauce.type === 'dry' && <div className="sauce-card__dry-texture" />}
                </div>
                <p className="sauce-card__name">{sauce.name}</p>
                <div
                  className="sauce-card__heat"
                  style={{ color: HEAT_COLORS[sauce.heat] }}
                >
                  {'🌶'.repeat(sauce.heat || 1).slice(0, sauce.heat ? sauce.heat : 0)}
                  {sauce.heat === 0 ? '✦ Mild' : HEAT_LABELS[sauce.heat]}
                </div>
              </div>
            ))}
          </div>
          <div className="sauce-preview__cta" data-animate="fade-up">
            <Link to="/menu" className="btn-secondary">See All 16 Sauces & Rubs</Link>
            <Link to="/order" className="btn-primary">Start Your Order</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <div className="container">
          <div className="how-section__header" data-animate="fade-up">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Wings in 3 Steps</h2>
          </div>
          <div className="how-steps">
            <div className="how-step" data-animate="fade-up" data-delay="0">
              <div className="how-step__number">01</div>
              <h3>Choose Your Style</h3>
              <p>Traditional bone-in, boneless, or cauliflower. You pick the base.</p>
            </div>
            <div className="how-step__arrow" data-animate="fade-up" data-delay="100">→</div>
            <div className="how-step" data-animate="fade-up" data-delay="150">
              <div className="how-step__number">02</div>
              <h3>Pick Your Sauce</h3>
              <p>Select up to 2 flavors from the Sauce Lab. Mix or double-down.</p>
            </div>
            <div className="how-step__arrow" data-animate="fade-up" data-delay="200">→</div>
            <div className="how-step" data-animate="fade-up" data-delay="300">
              <div className="how-step__number">03</div>
              <h3>Add Your Sides</h3>
              <p>Fries, mac, coleslaw — round out your order and enjoy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Snob Perks Teaser */}
      <section className="perks-teaser">
        <div className="container perks-teaser__inner">
          <div className="perks-teaser__text" data-animate="fade-left">
            <p className="section-label">Snob Perks</p>
            <h2 className="section-title">Get Rewarded<br />For Being a Snob</h2>
            <p className="section-subtitle">
              Earn points on every order. Unlock free wings, exclusive sauces,
              and Sauce Boss status. The more you order, the more you get.
            </p>
            <Link to="/perks" className="btn-gold">Join Snob Perks</Link>
          </div>
          <div className="perks-teaser__tiers" data-animate="fade-right" data-delay="100">
            <div className="tier-card tier-card--snob">
              <div className="tier-card__badge">🍗</div>
              <h4>Snob</h4>
              <p>0–199 pts</p>
            </div>
            <div className="tier-card tier-card--king">
              <div className="tier-card__badge">👑</div>
              <h4>Wing King</h4>
              <p>200–499 pts</p>
            </div>
            <div className="tier-card tier-card--boss">
              <div className="tier-card__badge">🔥</div>
              <h4>Sauce Boss</h4>
              <p>500+ pts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="franchise-cta">
        <div className="container franchise-cta__inner">
          <div className="franchise-cta__content" data-animate="fade-left">
            <p className="section-label">Own a Wing Snob</p>
            <h2 className="section-title">Be Part of the<br />Fastest Growing<br />Wing Brand</h2>
            <p className="section-subtitle">
              Low overhead, proven systems, and 50%+ year-over-year growth.
              Initial investment starting at $195K — far below the industry average.
            </p>
            <Link to="/franchise" className="btn-gold">Learn More</Link>
          </div>
          <div className="franchise-cta__metrics">
            {[
              { value: '$195K', label: 'Starting Investment' },
              { value: '$950K', label: 'Avg Unit Volume' },
              { value: '70+', label: 'Open Locations' },
              { value: '50%+', label: 'YoY Growth' },
            ].map((m, i) => (
              <div className="metric" key={m.label} data-animate="scale-up" data-delay={String(i * 80)}>
                <span className="metric__value">{m.value}</span>
                <span className="metric__label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
