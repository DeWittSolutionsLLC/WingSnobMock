import { useState } from 'react'
import './Franchise.css'

const WHY_ITEMS = [
  {
    emoji: '📐',
    title: 'Small Footprint',
    desc: '1,200–1,500 sq ft locations. Low overhead, high throughput — less rent, more profit.',
  },
  {
    emoji: '🚀',
    title: 'Proven System',
    desc: '50+ successful franchisees. A fully documented playbook from day 1 to grand opening.',
  },
  {
    emoji: '📱',
    title: 'Tech-Enabled',
    desc: 'Appfront POS, loyalty integration, and digital ordering built in from the start.',
  },
  {
    emoji: '💰',
    title: 'Multi-Channel Revenue',
    desc: 'Dine-in, pickup, DoorDash, Uber Eats, catering, and branded food truck options.',
  },
  {
    emoji: '🎓',
    title: 'Full Training',
    desc: '2-week intensive training program. Ongoing support from our ops team, always.',
  },
  {
    emoji: '📣',
    title: 'National Marketing',
    desc: '2% brand fund drives national campaigns, social, and influencer marketing for you.',
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
  { label: 'Initial Franchise Fee', value: '$35,000' },
  { label: 'Total Investment Range', value: '$340K – $616K' },
  { label: 'Royalty Fee', value: '6% of gross sales' },
  { label: 'Brand Fund', value: '2% of gross sales' },
  { label: 'Liquid Capital Required', value: '$150,000' },
  { label: 'Net Worth Required', value: '$350,000' },
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
      <section className="franchise-hero">
        <div className="container">
          <p className="section-label" data-animate="blur-in">Franchise Opportunity</p>
          <h1 className="franchise-hero__title" data-animate="blur-in" data-delay="80">
            Own a<br />
            <span className="franchise-hero__accent">Wing Snob</span>
          </h1>
          <p className="section-subtitle" data-animate="fade-up" data-delay="200">
            Join the fastest-growing wing brand in America. Low overhead,
            proven systems, and a product people are obsessed with.
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
            <span className="fstat__value">50+</span>
            <span className="fstat__label">Open Locations</span>
          </div>
          <div className="fstat__div" />
          <div className="fstat" data-animate="scale-up" data-delay="80">
            <span className="fstat__value">100+</span>
            <span className="fstat__label">In Pipeline</span>
          </div>
          <div className="fstat__div" />
          <div className="fstat" data-animate="scale-up" data-delay="160">
            <span className="fstat__value">$340K</span>
            <span className="fstat__label">Min. Investment</span>
          </div>
          <div className="fstat__div" />
          <div className="fstat" data-animate="scale-up" data-delay="240">
            <span className="fstat__value">2017</span>
            <span className="fstat__label">Founded</span>
          </div>
          <div className="fstat__div" />
          <div className="fstat" data-animate="scale-up" data-delay="320">
            <span className="fstat__value">1,500</span>
            <span className="fstat__label">Avg Sq Ft</span>
          </div>
        </div>
      </section>

      {/* Why Wing Snob */}
      <section className="franchise-why">
        <div className="container">
          <p className="section-label">Why Wing Snob</p>
          <h2 className="section-title">The Anti-Legacy<br />Franchise Model</h2>
          <p className="section-subtitle">
            Built to outperform traditional wing chains with a leaner model, a better product,
            and a brand that actually resonates with the next generation.
          </p>
          <div className="franchise-why-grid">
            {WHY_ITEMS.map((item, i) => (
              <div key={item.title} className="franchise-why-card" data-animate="fade-up" data-delay={String(i * 80)}>
                <div className="franchise-why-card__icon">{item.emoji}</div>
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
              <h2 className="section-title">Clear Numbers.<br />No Surprises.</h2>
              <p className="section-subtitle">
                We believe in full transparency. Here's exactly what it takes
                to own a Wing Snob franchise.
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
                <span>ℹ️</span>
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
              <h2 className="section-title">Ready to Own<br />Your Market?</h2>
              <p className="section-subtitle">
                Submit your inquiry and a member of our franchise development
                team will reach out within 5 business days.
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
                <div className="franchise-inquiry__success-icon">🎉</div>
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
