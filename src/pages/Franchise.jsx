import { useState } from 'react'
import './Franchise.css'

const WHY_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
      </svg>
    ),
    title: 'Small Footprint',
    desc: '1,200–1,500 sq ft locations. Low overhead, high throughput — less rent, more profit.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'A Playbook That Works',
    desc: '50+ franchisees have followed the same documented system — from lease signing to grand opening week.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Real Tech, Not Buzzwords',
    desc: 'Appfront POS, loyalty integration, and digital ordering — wired in from day one, not bolted on later.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Seven Ways to Make Money',
    desc: 'Dine-in, pickup, DoorDash, Uber Eats, catering, food truck, and corporate orders — all under one roof.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Two Weeks, You\'re Ready',
    desc: '2-week intensive at Wing Snob University. Then ongoing ops support — you call, we pick up.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'We Handle Marketing',
    desc: '2% brand fund goes to national campaigns, social, and influencer drops — you focus on the store.',
  },
]

const STEPS = [
  { num: '01', title: 'Submit Inquiry', desc: 'Fill out our franchise inquiry form. Our team reviews every application within 5 business days.' },
  { num: '02', title: 'Discovery Call', desc: 'Hop on a 30-minute call with our franchise development team to discuss your market and vision.' },
  { num: '03', title: 'Review the FDD', desc: 'Receive our Franchise Disclosure Document and review with your attorney and financial advisor.' },
  { num: '04', title: 'Sign & Fund', desc: 'Execute your franchise agreement and secure your location and investment funds.' },
  { num: '05', title: 'Training & Open', desc: 'Complete 2-week training, build out your location, and open your Wing Snob with our full support.' },
]

const INVESTMENT = [
  { label: 'Total Investment Range', value: '$195K – $352K' },
  { label: 'Average Unit Volume (2023)', value: '$950,487' },
  { label: 'Year-over-Year Growth', value: '50%+' },
  { label: 'Locations Open', value: '70+' },
  { label: 'States', value: '9' },
  { label: 'Founded', value: '2017 · Livonia, MI' },
]

export default function Franchise() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '', state: '', investment: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (formData.name && formData.email) {
      setSubmitted(true)
    }
  }

  return (
    <div className="franchise-page">
      {/* Hero */}
      <section className="franchise-hero" >
        <div className="container">
          <p className="section-label" data-animate="blur-in">Franchise Opportunity</p>
          <h1 className="franchise-hero__title" data-animate="blur-in" data-delay="80">
            Own a<br />
            <span className="franchise-hero__accent">Wing Snob</span>
          </h1>
          <p className="section-subtitle" data-animate="fade-up" data-delay="200">
            One spot in Livonia, MI. Voted Best Wings in Metro Detroit before year two.
            Now 70+ locations, 9 states, and 50%+ growth every single year.
          </p>
          <div className="franchise-hero__actions" data-animate="fade-up" data-delay="300">
            <a href="#inquire" className="btn-gold">Start Your Inquiry</a>
            <a href="#investment" className="btn-secondary">View Investment</a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="franchise-stats">
        <div className="container franchise-stats__inner">
          <div className="fstat" data-animate="scale-up" data-delay="0">
            <span className="fstat__value">70+</span>
            <span className="fstat__label">Open Locations</span>
          </div>
          <div className="fstat__div" />
          <div className="fstat" data-animate="scale-up" data-delay="80">
            <span className="fstat__value">9</span>
            <span className="fstat__label">States</span>
          </div>
          <div className="fstat__div" />
          <div className="fstat" data-animate="scale-up" data-delay="160">
            <span className="fstat__value">$195K</span>
            <span className="fstat__label">Min. Investment</span>
          </div>
          <div className="fstat__div" />
          <div className="fstat" data-animate="scale-up" data-delay="240">
            <span className="fstat__value">$950K</span>
            <span className="fstat__label">Avg Unit Volume</span>
          </div>
          <div className="fstat__div" />
          <div className="fstat" data-animate="scale-up" data-delay="320">
            <span className="fstat__value">50%+</span>
            <span className="fstat__label">YoY Growth</span>
          </div>
        </div>
      </section>

      {/* Why Wing Snob */}
      <section className="franchise-why">
        <div className="container">
          <p className="section-label">Why Wing Snob</p>
          <h2 className="section-title">Built Different<br />From the Start</h2>
          <p className="section-subtitle">
            No corporate bloat. No 200-page menu. Wing Snob University gets you running in two weeks —
            with a product that already won Best Wings in Metro Detroit before we franchised anything.
          </p>
          <div className="franchise-why-grid">
            {WHY_ITEMS.map((item, i) => (
              <div key={item.title} className="franchise-why-card" data-animate="fade-up" data-delay={String(i * 80)}>
                <div className="franchise-why-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="franchise-investment" id="investment">
        <div className="container">
          <div className="franchise-investment__inner">
            <div>
              <p className="section-label">Investment Overview</p>
              <h2 className="section-title">What You're<br />Actually Paying</h2>
              <p className="section-subtitle">
                Most competitors run $300K–$750K to get in the door. Here's exactly what Wing Snob costs —
                nothing hidden, nothing inflated.
              </p>
            </div>
            <div className="investment-table">
              {INVESTMENT.map((row, i) => (
                <div key={row.label} className="investment-row" data-animate="fade-left" data-delay={String(i * 70)}>
                  <span className="investment-row__label">{row.label}</span>
                  <span className="investment-row__value">{row.value}</span>
                </div>
              ))}
              <div className="investment-note">
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </span>
                <p>
                  Total investment varies by location, buildout costs, and market.
                  Our team will provide a detailed breakdown during your discovery call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Open */}
      <section className="franchise-steps">
        <div className="container">
          <p className="section-label">The Process</p>
          <h2 className="section-title">5 Steps to<br />Grand Opening</h2>
          <div className="franchise-steps-list">
            {STEPS.map((step, i) => (
              <div key={step.num} className="franchise-step" data-animate="fade-up" data-delay={String(i * 100)}>
                <div className="franchise-step__number">{step.num}</div>
                <div className="franchise-step__content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && <div className="franchise-step__connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="franchise-testimonial">
        <div className="container">
          <div className="testimonial-card" data-animate="scale-up">
            <div className="testimonial-card__quote">"</div>
            <p className="testimonial-card__text">
              I opened my first Wing Snob in Columbus in 2022. Within 8 months I'd recouped
              my initial costs and was profitable. The support system is real — they don't
              just take your royalty check, they're in the trenches with you.
            </p>
            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">JR</div>
              <div>
                <strong>James R.</strong>
                <span>Wing Snob Columbus, OH — Franchisee since 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="franchise-inquiry" id="inquire">
        <div className="container">
          <div className="franchise-inquiry__inner">
            <div className="franchise-inquiry__text" data-animate="fade-left">
              <p className="section-label">Get Started</p>
              <h2 className="section-title">Let's Talk<br />Shop</h2>
              <p className="section-subtitle">
                Fill out the form and our franchise development team gets back to you
                in 5 business days. No hard sell — just a real conversation.
              </p>
              <div className="franchise-inquiry__faq">
                <h4>Common Questions</h4>
                <div className="faq-item">
                  <strong>Do I need restaurant experience?</strong>
                  <p>Not required. Our training program is designed to set up first-timers and veterans alike.</p>
                </div>
                <div className="faq-item">
                  <strong>Can I own multiple locations?</strong>
                  <p>Yes — we offer multi-unit agreements and actively encourage growth-minded franchisees.</p>
                </div>
                <div className="faq-item">
                  <strong>How long until I open?</strong>
                  <p>Typically 9–14 months from signed agreement to grand opening, depending on your market.</p>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="franchise-inquiry__success">
                <div className="franchise-inquiry__success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
                <h3>Inquiry Received!</h3>
                <p>
                  Thank you, {formData.name}! Our franchise development team will
                  reach out to {formData.email} within 5 business days.
                </p>
              </div>
            ) : (
              <form className="franchise-form" onSubmit={handleSubmit} data-animate="fade-right" data-delay="100">
                <h3>Franchise Inquiry</h3>
                <div className="franchise-form__row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your name" value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="you@example.com" value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                </div>
                <div className="franchise-form__row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="(555) 000-0000" value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Target City</label>
                    <input type="text" placeholder="e.g. Chicago" value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Available Investment Capital</label>
                  <select value={formData.investment}
                    onChange={e => setFormData({ ...formData, investment: e.target.value })}>
                    <option value="">Select a range</option>
                    <option value="150-350k">$150K – $350K</option>
                    <option value="350-600k">$350K – $600K</option>
                    <option value="600k+">$600K+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell Us About Yourself</label>
                  <textarea
                    placeholder="Brief background — business experience, why Wing Snob, your market..."
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Inquiry
                </button>
                <p className="franchise-form__disclaimer">
                  This inquiry does not constitute an offer to sell a franchise.
                  Franchise offerings are made by Franchise Disclosure Document only.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
