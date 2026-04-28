import { useState } from 'react'
import './Perks.css'

const TIERS = [
  {
    id: 'snob',
    name: 'Snob',
    emoji: '🍗',
    range: '0–199 pts',
    color: '#888',
    benefits: [
      'Earn 10 pts per $1 spent',
      'Birthday reward (free 6pc)',
      'Exclusive member offers',
      'Early access to new sauces',
    ],
  },
  {
    id: 'king',
    name: 'Wing King',
    emoji: '👑',
    range: '200–499 pts',
    color: '#F5A623',
    benefits: [
      'Everything in Snob tier',
      'Earn 12 pts per $1 spent',
      'Free side on every 5th order',
      'Priority pickup queue',
      'Wing King exclusive sauces',
    ],
  },
  {
    id: 'boss',
    name: 'Sauce Boss',
    emoji: '🔥',
    range: '500+ pts',
    color: '#D62B2B',
    benefits: [
      'Everything in Wing King tier',
      'Earn 15 pts per $1 spent',
      'Free 10pc monthly',
      'Sauce Boss early access drops',
      'Dedicated customer line',
      'Sauce Lab taste-test invites',
    ],
  },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Sign Up Free', desc: 'Create your account in the app or online. Takes 60 seconds.' },
  { step: '02', title: 'Order & Earn', desc: 'Every dollar you spend earns you points. No scanner needed.' },
  { step: '03', title: 'Level Up', desc: 'Hit tier thresholds to unlock better rewards and perks.' },
  { step: '04', title: 'Redeem', desc: 'Cash in points for free wings, sauces, sides, and more.' },
]

export default function Perks() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('snob')

  function handleSubmit(e) {
    e.preventDefault()
    if (formData.name && formData.email) {
      setSubmitted(true)
    }
  }

  const activeTier = TIERS.find(t => t.id === activeTab)

  return (
    <div className="perks-page">
      {/* Hero */}
      <section className="perks-hero">
        <div className="container">
          <p className="section-label" data-animate="blur-in">Snob Perks</p>
          <h1 className="perks-hero__title" data-animate="blur-in" data-delay="80">
            Get Rewarded<br />
            <span style={{ color: 'var(--gold)' }}>For Being a Snob</span>
          </h1>
          <p className="section-subtitle" data-animate="fade-up" data-delay="200">
            Order, earn, and unlock exclusive deals through the Wing Snob app.
            Sign up and get a free order of fries — no purchase needed.
          </p>
          <div className="perks-hero__actions" data-animate="fade-up" data-delay="300">
            <a href="#join" className="btn-gold">Join for Free</a>
            <a href="https://www.wingsnob.com/download" className="btn-secondary">Download the App</a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="perks-how">
        <div className="container">
          <p className="section-label" data-animate="fade-up">How It Works</p>
          <h2 className="section-title" data-animate="fade-up" data-delay="60">4 Steps to Free Wings</h2>
          <div className="perks-how-grid">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className="perks-how-card" data-animate="fade-up" data-delay={String(i * 100)}>
                <div className="perks-how-card__step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="perks-tiers" id="tiers">
        <div className="container">
          <p className="section-label">Membership Tiers</p>
          <h2 className="section-title">Three Levels.<br />Endless Rewards.</h2>

          <div className="tier-tabs" data-animate="fade-up">
            {TIERS.map(tier => (
              <button
                key={tier.id}
                className={`tier-tab ${activeTab === tier.id ? 'tier-tab--active' : ''}`}
                style={activeTab === tier.id ? { borderColor: tier.color, color: tier.color } : {}}
                onClick={() => setActiveTab(tier.id)}
              >
                <span>{tier.emoji}</span>
                <span>{tier.name}</span>
                <span className="tier-tab__range">{tier.range}</span>
              </button>
            ))}
          </div>

          {activeTier && (
            <div className="tier-detail" style={{ '--tier-color': activeTier.color }} data-animate="scale-up" data-delay="100">
              <div className="tier-detail__left">
                <div className="tier-detail__badge">{activeTier.emoji}</div>
                <h3>{activeTier.name}</h3>
                <p className="tier-detail__range">{activeTier.range}</p>
                <p className="tier-detail__desc">
                  {activeTier.id === 'snob' && 'Start earning the moment you join. Every Wing Snob order puts you closer to your next reward.'}
                  {activeTier.id === 'king' && 'You\'ve proven yourself. Wing King status means bigger earnings and exclusive access.'}
                  {activeTier.id === 'boss' && 'The highest honor in the wing game. Sauce Boss is reserved for those who truly never settle.'}
                </p>
              </div>
              <div className="tier-detail__benefits">
                <h4>Benefits</h4>
                <ul>
                  {activeTier.benefits.map((b, i) => (
                    <li key={i}>
                      <span className="benefit-check" style={{ color: activeTier.color }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tier Comparison */}
          <div className="tier-all-cards">
            {TIERS.map((tier, i) => (
              <div key={tier.id} className="tier-all-card" style={{ '--tc': tier.color }} data-animate="scale-up" data-delay={String(i * 100)}>
                <div className="tier-all-card__emoji">{tier.emoji}</div>
                <h4>{tier.name}</h4>
                <p>{tier.range}</p>
                <ul>
                  {tier.benefits.slice(0, 3).map((b, i) => (
                    <li key={i}><span>✓</span>{b}</li>
                  ))}
                  {tier.benefits.length > 3 && (
                    <li className="tier-all-card__more">+{tier.benefits.length - 3} more perks</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points Value */}
      <section className="perks-value">
        <div className="container">
          <div className="perks-value__inner">
            <div className="perks-value__text" data-animate="fade-left">
              <p className="section-label">Points Value</p>
              <h2 className="section-title">Your Points,<br />Your Way</h2>
              <p className="section-subtitle">
                100 points = $1 in Wing Snob credit. Redeem anytime
                on any item in the app or at the counter.
              </p>
            </div>
            <div className="perks-value__examples">
              {[
                { pts: '500 pts', reward: 'Free 6pc Wings 🍗' },
                { pts: '300 pts', reward: 'Free Side 🍟' },
                { pts: '200 pts', reward: 'Free Drink 🥤' },
                { pts: '1000 pts', reward: 'Free 10pc Wings 🎉' },
              ].map((ex, i) => (
                <div className="reward-example" key={ex.pts} data-animate="fade-right" data-delay={String(i * 80)}>
                  <span className="reward-example__pts">{ex.pts}</span>
                  <span className="reward-example__arrow">→</span>
                  <span className="reward-example__reward">{ex.reward}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="perks-signup" id="join">
        <div className="container">
          <div className="perks-signup__inner">
            {submitted ? (
              <div className="perks-signup__success">
                <div className="perks-signup__success-icon">🔥</div>
                <h2>Welcome to the Squad!</h2>
                <p>
                  You're officially a Wing Snob. Check your email for a confirmation
                  and your first 100 bonus points.
                </p>
              </div>
            ) : (
              <>
                <div className="perks-signup__text" data-animate="fade-left">
                  <p className="section-label">Join Free</p>
                  <h2 className="section-title">Start Earning Today</h2>
                  <p className="section-subtitle">
                    Download the Wing Snob app or sign up online. Get exclusive daily deals, member-only offers, and rewards on every order.
                  </p>
                  <div className="perks-signup__bonus">
                    <span>🍟</span>
                    <p>Sign up and get a <strong>FREE order of fries</strong> — no purchase required.</p>
                  </div>
                </div>
                <form className="perks-form" onSubmit={handleSubmit} data-animate="fade-right" data-delay="100">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone (optional)</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                    Join Snob Perks — It's Free
                  </button>
                  <p className="perks-form__disclaimer">
                    By joining you agree to receive Wing Snob marketing emails. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
