import { Link } from 'react-router-dom'
import { SAUCES, HEAT_LABELS, HEAT_COLORS } from '../data/sauces'
import './Home.css'

const FEATURED_SAUCES = SAUCES.slice(0, 8)

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__content">
          <p className="section-label">Est. 2017 · Livonia, Michigan</p>
          <h1 className="hero__title">
            Fresh.<br />
            <span className="hero__title-accent">Never Frozen.</span>
          </h1>
          <p className="hero__subtitle">
            18 signature sauces. Made-to-order wings. One obsession: flavor.
          </p>
          <div className="hero__actions">
            <Link to="/order" className="btn-primary">Order Now</Link>
            <Link to="/locations" className="btn-secondary">Find a Location</Link>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>↓</span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container stats-bar__inner">
          <div className="stat">
            <span className="stat__number">50+</span>
            <span className="stat__label">Locations</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__number">16</span>
            <span className="stat__label">Signature Sauces</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__number">100%</span>
            <span className="stat__label">Fresh Daily</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__number">3</span>
            <span className="stat__label">Wing Styles</span>
          </div>
        </div>
      </section>

      {/* Why Wing Snob */}
      <section className="why-section">
        <div className="container">
          <div className="why-section__header">
            <p className="section-label">Why Wing Snob</p>
            <h2 className="section-title">We're Not Your<br />Average Wing Spot</h2>
            <p className="section-subtitle">
              Built to disrupt legacy chains with smaller kitchens, fresher ingredients,
              and a Sauce Lab that actually excites you.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card__icon">🍗</div>
              <h3>Always Fresh</h3>
              <p>Never frozen, never compromised. Our wings go from delivery to fryer — period.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon">🧪</div>
              <h3>The Sauce Lab</h3>
              <p>16 handcrafted flavors from mild dry rubs to bone-melting heat. Your order, your rules.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon">⚡</div>
              <h3>Made Fast</h3>
              <p>Small-footprint kitchens engineered for speed. Dine-in, takeout, or delivery — all fast.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon">📱</div>
              <h3>Order Your Way</h3>
              <p>App, web, walk-in, DoorDash or UberEats. We meet you wherever you're ordering from.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sauce Lab Preview */}
      <section className="sauce-preview">
        <div className="container">
          <div className="sauce-preview__header">
            <p className="section-label">The Sauce Lab</p>
            <h2 className="section-title">Pick Your Poison</h2>
            <p className="section-subtitle">
              From zero-heat dry rubs to sauces that'll make you question your life choices.
              Mix up to 2 per order.
            </p>
          </div>
          <div className="sauce-grid">
            {FEATURED_SAUCES.map(sauce => (
              <div key={sauce.id} className="sauce-card">
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
          <div className="sauce-preview__cta">
            <Link to="/menu" className="btn-secondary">See All 16 Sauces</Link>
            <Link to="/order" className="btn-primary">Start Your Order</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <div className="container">
          <div className="how-section__header">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Wings in 3 Steps</h2>
          </div>
          <div className="how-steps">
            <div className="how-step">
              <div className="how-step__number">01</div>
              <h3>Choose Your Style</h3>
              <p>Traditional bone-in, boneless, or cauliflower. You pick the base.</p>
            </div>
            <div className="how-step__arrow">→</div>
            <div className="how-step">
              <div className="how-step__number">02</div>
              <h3>Pick Your Sauce</h3>
              <p>Select up to 2 flavors from the Sauce Lab. Mix or double-down.</p>
            </div>
            <div className="how-step__arrow">→</div>
            <div className="how-step">
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
          <div className="perks-teaser__text">
            <p className="section-label">Snob Perks</p>
            <h2 className="section-title">Get Rewarded<br />For Being a Snob</h2>
            <p className="section-subtitle">
              Earn points on every order. Unlock free wings, exclusive sauces,
              and Sauce Boss status. The more you order, the more you get.
            </p>
            <Link to="/perks" className="btn-gold">Join Snob Perks</Link>
          </div>
          <div className="perks-teaser__tiers">
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
          <div className="franchise-cta__content">
            <p className="section-label">Own a Wing Snob</p>
            <h2 className="section-title">Be Part of the<br />Fastest Growing<br />Wing Brand</h2>
            <p className="section-subtitle">
              Low overhead. High throughput. Initial investment from $340K.
              Join 50+ franchisees already cashing in on the wing revolution.
            </p>
            <Link to="/franchise" className="btn-gold">Learn More</Link>
          </div>
          <div className="franchise-cta__metrics">
            <div className="metric">
              <span className="metric__value">$340K</span>
              <span className="metric__label">Starting Investment</span>
            </div>
            <div className="metric">
              <span className="metric__value">1,500</span>
              <span className="metric__label">Avg Sq Ft</span>
            </div>
            <div className="metric">
              <span className="metric__value">6%</span>
              <span className="metric__label">Royalty Fee</span>
            </div>
            <div className="metric">
              <span className="metric__value">100+</span>
              <span className="metric__label">Locations in Pipeline</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
