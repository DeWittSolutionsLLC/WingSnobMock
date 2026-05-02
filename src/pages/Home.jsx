import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAUCES, HEAT_LABELS, HEAT_COLORS } from '../data/sauces'
import wingHeroImg from '../assets/ws-traditional.webp'
import truckImg from '../assets/ws-truck.webp'
import bonelessImg from '../assets/ws-boneless.webp'
import cauliImg from '../assets/ws-cauli.webp'
import tendersImg from '../assets/ws-tenders.webp'
import minisImg from '../assets/ws-minis.webp'
import sandoImg from '../assets/ws-sando.webp'
import sidesImg from '../assets/ws-sides.webp'
import cheesecakeImg from '../assets/ws-cheesecake.webp'
import './Home.css'

const MARQUEE_SAUCES = SAUCES.filter(s => s.id !== 1)

const MENU_SHOWCASE = [
  {
    slug: 'traditional',
    label: 'Wings',
    name: 'Traditional Wings',
    tag: 'The Classic',
    desc: 'Bone-in, made-to-order. Crispy outside, juicy inside. Toss in any of our 20 sauces or rubs.',
    detail: 'Available in 6, 10, 15, and 20 piece.',
    img: wingHeroImg,
  },
  {
    slug: 'boneless',
    label: 'Wings',
    name: 'Boneless Wings',
    tag: 'All Meat',
    desc: 'No bones. All flavor. Same crispy perfection, just without the work.',
    detail: 'Available in 6, 10, 15, and 20 piece.',
    img: bonelessImg,
  },
  {
    slug: 'cauli',
    label: 'Plant-Based',
    name: 'Cauli Wings',
    tag: 'Plant-Based',
    desc: 'Cauliflower florets fried golden, tossed in your choice of sauce. The plant-based flex.',
    detail: 'Available in 6 and 12 piece.',
    img: cauliImg,
  },
  {
    slug: 'tenders',
    label: 'Tenders',
    name: 'Chicken Tenders',
    tag: 'Crispy & Thick',
    desc: 'Hand-breaded, double-dipped in seasoning. No shortcuts — these are real tenders.',
    detail: 'Available in 3 and 5 piece meals.',
    img: tendersImg,
  },
  {
    slug: 'sliders',
    label: 'Mini Sliders',
    name: 'Mini Sliders',
    tag: 'Two-Bite Perfection',
    desc: 'Sauced crispy chicken packed into soft slider buns. Perfect for sharing. Or not.',
    detail: 'Comes in pairs. Choose your sauce.',
    img: minisImg,
  },
  {
    slug: 'sando',
    label: 'Sandwiches',
    name: 'Chicken Sandos',
    tag: 'The Move',
    desc: 'Thick-cut chicken breast, crispy or grilled, loaded your way. The sandwich that started debates.',
    detail: 'Classic, Spicy, or BBQ build.',
    img: sandoImg,
  },
  {
    slug: 'sides',
    label: 'Sides',
    name: 'Sides & Fries',
    tag: 'Stack the Tray',
    desc: 'Loaded fries, street corn, mac & cheese, coleslaw — sides that upgrade every order.',
    detail: 'All sides made fresh to order.',
    img: sidesImg,
  },
  {
    slug: 'desserts',
    label: 'Desserts',
    name: 'Sweet Finishers',
    tag: 'End on a High Note',
    desc: 'Cheesecake bites, funnel cake sticks, and seasonal picks. Because every great meal deserves a proper ending.',
    detail: 'Ask about seasonal specials.',
    img: cheesecakeImg,
  },
]

const WHY_CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5 5 9c0 5 4 9 7 11 3-2 7-6 7-11 0-4-3-7-7-7z"/>
        <path d="M12 6c-2 0-3.5 1.5-3.5 3.5"/>
      </svg>
    ),
    title: 'Better Wings',
    text: 'Made-to-order, never frozen. From bone-in traditional to cauli wings — quality is non-negotiable.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
      </svg>
    ),
    title: '20 Sauces & Rubs',
    text: 'From Garlic Parmesan to Blazin Q — 20 handcrafted flavors covering every corner of the heat map.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Metro Detroit's Best",
    text: "Voted Best Chicken Wings in Metro Detroit. Started as a single location — now 70+ strong across 9 states.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Snob Perks App',
    text: 'Order, earn rewards, and unlock exclusive deals. Download the Wing Snob app and get a free fry just for joining.',
  },
]

const WEEKLY_DEALS = [
  {
    name: '8 Piece Smash Box',
    desc: '8 traditional or boneless wings your way, plus a side of fries.',
    price: 13.99,
    tag: 'Best Value',
    icon: '🍗',
  },
  {
    name: '3 Tender Meal Deal',
    desc: '3 crispy tenders, fries, and a drink. The perfect solo move.',
    price: 10.99,
    tag: 'Fan Fave',
    icon: '🍖',
  },
  {
    name: 'Loaded Fry Meal',
    desc: 'Loaded fries with cheese sauce, bacon, jalapeños, and ranch. No further explanation needed.',
    price: 11.99,
    tag: null,
    icon: '🍟',
  },
  {
    name: '20 for $20',
    desc: '20 wings, any 2 sauces or rubs. The Snob-approved group order.',
    price: 20.00,
    tag: 'Group Deal',
    icon: '🔥',
  },
]

export default function Home() {
  const [hoveredSauce, setHoveredSauce] = useState(null)

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__inner">
          <div className="hero__text" >
            <p className="section-label" data-animate="blur-in">Est. 2017 · Livonia, Michigan</p>
            <h1 className="hero__title" data-animate="blur-in" data-delay="80">
              We Just Have<br />
              <span className="hero__title-accent">Better Wings.</span>
            </h1>
            <p className="hero__subtitle" data-animate="fade-up" data-delay="200">
              20 sauces & rubs. Made-to-order. 70+ locations across 9 states — and still spreading.
            </p>
            <div className="hero__actions" data-animate="fade-up" data-delay="300">
              <Link to="/order" className="btn-primary order-btn">Order Now</Link>
              <Link to="/locations" className="btn-secondary">Find a Location</Link>
            </div>
          </div>
          <div className="hero__image" data-animate="fade-right" data-delay="150">
            <img src={wingHeroImg} alt="Wing Snob traditional wings" className="hero__wing-img photo-float" />
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>↓</span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar has-grain">
        <div className="container stats-bar__inner">
          <div className="stat" data-animate="scale-up" data-delay="0">
            <span className="stat__number">70+</span>
            <span className="stat__label">Locations</span>
          </div>
          <div className="stat__divider" />
          <div className="stat" data-animate="scale-up" data-delay="100">
            <span className="stat__number">20</span>
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

      {/* Weekly Deals */}
      <section className="deals-section has-grain">
        <div className="container">
          <div className="deals-header" data-animate="fade-up">
            <p className="section-label">This Week</p>
            <h2 className="section-title dark">Weekly Deals</h2>
            <p className="section-subtitle">Limited time. Stack the savings. Ends Sunday.</p>
          </div>
          <div className="deals-grid">
            {WEEKLY_DEALS.map((deal, i) => (
              <div className="deal-card" key={deal.name} data-animate="fade-up" data-delay={String(i * 80)}>
                {deal.tag && <span className="deal-card__tag">{deal.tag}</span>}
                <span className="deal-card__icon">{deal.icon}</span>
                <h3 className="deal-card__name">{deal.name}</h3>
                <p className="deal-card__desc">{deal.desc}</p>
                <div className="deal-card__footer">
                  <span className="deal-card__price">${deal.price.toFixed(2)}</span>
                  <Link to="/order" className="btn-primary deal-card__btn">Order Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Showcase — sticky scrollytelling */}
      <section className="menu-showcase" data-scroll-cards="8">
        <div className="menu-showcase__inner">
          <div className="menu-showcase__stack">
            {MENU_SHOWCASE.map((item, i) => (
              <div key={item.slug} className="menu-showcase-card" data-scroll-card>
                <div className="menu-showcase-card__img-wrap">
                  <img src={item.img} alt={item.name} loading="lazy" />
                </div>
                <div className="menu-showcase-card__info" data-num={`0${i + 1}`}>
                  <span className="menu-showcase-card__label">{item.label}</span>
                  <span className="menu-showcase-card__tag">{item.tag}</span>
                  <h2 className="menu-showcase-card__name">{item.name}</h2>
                  <p className="menu-showcase-card__desc">{item.desc}</p>
                  <p className="menu-showcase-card__detail">{item.detail}</p>
                  <Link to="/menu" className="btn-primary menu-showcase-card__cta">See Full Menu</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-showcase__nav">
            <p className="section-label menu-showcase__section-label">The Menu</p>
            <div className="menu-showcase__dots">
              {MENU_SHOWCASE.map((_, i) => (
                <div key={i} className="menu-dot" data-scroll-dot />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sauce Lab Preview */}
      <section className="sauce-preview-section">
        <div className="container">
          <div className="sauce-preview__header" data-animate="fade-up">
            <p className="section-label">The Sauce Lab</p>
            <h2 className="section-title">20 Sauces & Rubs</h2>
            <p className="section-subtitle">
              From Lemon Butter to Mango Habanero — handcrafted flavors at every heat level.
              Mix up to 2 per order.
            </p>
          </div>
          <div className="sauce-marquee">
            <div className="sauce-marquee__track sauce-marquee__track--fwd">
              {[...MARQUEE_SAUCES, ...MARQUEE_SAUCES].map((sauce, i) => (
                <div key={i} className="sauce-marquee__item">
                  <span className="sauce-marquee__dot" style={{ background: sauce.color }} />
                  <span className="sauce-marquee__name">{sauce.name}</span>
                  <span className="sauce-marquee__heat" style={{ color: HEAT_COLORS[sauce.heat] }}>{HEAT_LABELS[sauce.heat]}</span>
                </div>
              ))}
            </div>
            <div className="sauce-marquee__track sauce-marquee__track--rev">
              {[...MARQUEE_SAUCES, ...MARQUEE_SAUCES].map((sauce, i) => (
                <div key={i} className="sauce-marquee__item">
                  <span className="sauce-marquee__dot" style={{ background: sauce.color }} />
                  <span className="sauce-marquee__name">{sauce.name}</span>
                  <span className="sauce-marquee__heat" style={{ color: HEAT_COLORS[sauce.heat] }}>{HEAT_LABELS[sauce.heat]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="sauce-preview__cta" data-animate="fade-up">
            <Link to="/menu" className="btn-secondary">See All 20 Sauces & Rubs</Link>
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
              <p>Traditional bone-in, Boneless,Tenders, Cauliflower and More.</p>
            </div>
            <div className="how-step__arrow" data-animate="fade-up" data-delay="100">→</div>
            <div className="how-step" data-animate="fade-up" data-delay="150">
              <div className="how-step__number">02</div>
              <h3>Pick Your Sauce</h3>
              <p>Select your flavors either on the wings or on the side.</p>
            </div>
            <div className="how-step__arrow" data-animate="fade-up" data-delay="200">→</div>
            <div className="how-step" data-animate="fade-up" data-delay="300">
              <div className="how-step__number">03</div>
              <h3>Add Your Sides</h3>
              <p>Loaded fries, street corn, mac & cheese — stack your tray right.</p>
            </div>
          </div>
          <div className="how-section__cta" data-animate="fade-up" data-delay="400">
            <Link to="/order" className="btn-primary">Start Your Order</Link>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="catering-section has-grain">
        <div className="container catering-section__inner">
          <div className="catering-section__text" data-animate="fade-left">
            <p className="section-label">Plan Your Event</p>
            <h2 className="section-title dark">With the Truck!</h2>
            <p className="section-subtitle">
              Weddings, graduations, tailgates, office parties — we'll pull up with the truck and handle it.
              You worry about the guest list. We've got the wings.
            </p>
            <a href="https://www.wingsnob.com/catering" className="btn-gold">Book Catering</a>
          </div>
          <div className="catering-section__image" data-animate="fade-right" data-delay="150">
            <img src={truckImg} alt="Wing Snob catering truck" className="catering-truck-img" loading="lazy" />
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
              Earn points every time you order. Stack enough and your regulars eat free.
              Sauce Boss status is real, and it comes with real perks.
            </p>
            <Link to="/perks" className="btn-gold">Join Snob Perks</Link>
          </div>
          <div className="perks-teaser__tiers" data-animate="fade-right" data-delay="100">
            <div className="tier-card tier-card--snob">
              <div className="tier-card__badge">S</div>
              <h4>Snob</h4>
              <p>0–199 pts</p>
            </div>
            <div className="tier-card tier-card--king">
              <div className="tier-card__badge">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M2 20h20v2H2v-2zm2-4l3-8 5 5 5-5 3 8H4z"/>
                </svg>
              </div>
              <h4>Wing King</h4>
              <p>200–499 pts</p>
            </div>
            <div className="tier-card tier-card--boss">
              <div className="tier-card__badge">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M13.5 .67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                </svg>
              </div>
              <h4>Sauce Boss</h4>
              <p>500+ pts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="franchise-cta has-grain">
        <div className="container franchise-cta__inner">
          <div className="franchise-cta__content" data-animate="fade-left">
            <p className="section-label">Own a Wing Snob</p>
            <h2 className="section-title dark">Be Part of the<br />Fastest Growing<br />Wing Brand</h2>
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
