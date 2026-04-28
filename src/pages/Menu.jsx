import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAUCES, HEAT_LABELS, HEAT_COLORS } from '../data/sauces'
import traditionalImg from '../assets/WingSnobTraditional.webp'
import bonelessImg from '../assets/WingSnobBoneless.webp'
import cauliImg from '../assets/WingSnobCauli.webp'
import friesImg from '../assets/WingSnobFries.webp'
import './Menu.css'

const WING_TYPES = ['Traditional', 'Boneless', 'Cauli Wings']

const WING_IMAGES = {
  Traditional: traditionalImg,
  Boneless: bonelessImg,
  'Cauli Wings': cauliImg,
}

const SIZES = [
  { qty: 6, price: 9.99 },
  { qty: 10, price: 15.99 },
  { qty: 15, price: 22.99 },
  { qty: 20, price: 28.99 },
  { qty: 50, price: 64.99 },
]

const TENDER_SIZES = [
  { qty: 5, price: 10.99 },
  { qty: 10, price: 18.99 },
  { qty: 20, price: 34.99, label: 'Family' },
]

const SLIDERS = [
  { name: 'Single Slider', desc: 'Crispy chicken breast on a toasted brioche bun with pickles and house sauce.', price: 4.99, emoji: '🍔' },
  { name: '3-Pack', desc: 'Three sliders — perfect for sharing, or not.', price: 12.99, emoji: '🍔' },
  { name: '6-Pack', desc: 'Six sliders. The move for a crowd.', price: 23.99, emoji: '🍔' },
]

const SANDOS = [
  { name: 'Classic Sando', desc: 'Crispy chicken, lettuce, tomato, pickles, house sauce on a toasted brioche bun.', price: 11.99, emoji: '🥪' },
  { name: 'Spicy Sando', desc: 'Same as the classic, hit with your sauce of choice from the Sauce Lab.', price: 12.49, emoji: '🥪' },
  { name: 'Nashville Hot Sando', desc: 'Bone-dry Nashville heat, coleslaw, pickles. Not for the faint of heart.', price: 12.99, emoji: '🥪' },
]

const SIDES = [
  { name: 'Loaded Fries', desc: 'Hand-cut fries loaded with cheese sauce, bacon, jalapeños, and ranch.', price: 7.99, emoji: '🍟' },
  { name: 'Classic Fries', desc: 'Golden, hand-cut, perfectly salted.', price: 3.49, emoji: '🍟' },
  { name: 'Seasoned Fries', desc: 'Our signature house seasoning blend.', price: 3.99, emoji: '🍟' },
  { name: 'Mac & Cheese', desc: 'Creamy, three-cheese blend.', price: 4.49, emoji: '🧀' },
  { name: 'Coleslaw', desc: 'Cool and tangy — the perfect wing companion.', price: 2.99, emoji: '🥗' },
  { name: 'Corn on the Cob', desc: 'Grilled, seasoned, buttered.', price: 2.99, emoji: '🌽' },
  { name: 'Celery & Ranch', desc: 'Classic cool-down. Ranch house-made daily.', price: 1.99, emoji: '🥬' },
]

const DESSERTS = [
  { name: 'Cheesecake Bites', desc: 'Fried cheesecake bites with strawberry dipping sauce.', price: 5.99, emoji: '🍰' },
]

const DRINKS = [
  { name: 'Lemonade', desc: 'Fresh-squeezed, house-made.', price: 2.99, emoji: '🍋' },
  { name: 'Sweet Tea', desc: 'Southern-style. Brewed daily.', price: 2.49, emoji: '🧋' },
  { name: 'Fountain Soda', desc: 'Pepsi products.', price: 2.49, emoji: '🥤' },
  { name: 'Water Bottle', desc: '16.9 fl oz.', price: 1.49, emoji: '💧' },
]

export default function Menu() {
  const [activeWingType, setActiveWingType] = useState('Traditional')
  const [activeSauceFilter, setActiveSauceFilter] = useState('All')

  const sauceFilters = ['All', 'Sauce', 'Dry Rub', 'Mild', 'Hot']

  const filteredSauces = SAUCES.filter(s => {
    if (activeSauceFilter === 'All') return true
    if (activeSauceFilter === 'Sauce') return s.type === 'sauce'
    if (activeSauceFilter === 'Dry Rub') return s.type === 'dry'
    if (activeSauceFilter === 'Mild') return s.heat <= 1
    if (activeSauceFilter === 'Hot') return s.heat >= 3
    return true
  })

  return (
    <div className="menu-page">
      {/* Page Hero */}
      <section className="menu-hero">
        <div className="container">
          <p className="section-label">The Menu</p>
          <h1 className="section-title">Built for Flavor.<br />Made for You.</h1>
          <p className="section-subtitle">
            Every order is made fresh to order. Pick your style, pick your sauce, enjoy.
          </p>
          <Link to="/order" className="btn-primary" style={{ marginTop: '28px' }}>Start Your Order</Link>
        </div>
      </section>

      {/* Wings Section */}
      <section className="menu-section">
        <div className="container">
          <div className="menu-section__header">
            <h2 className="section-title">Wings</h2>
            <p className="section-subtitle">Choose your style, then pick your size. Mix up to 2 sauces per order.</p>
          </div>

          <div className="wing-type-tabs">
            {WING_TYPES.map(type => (
              <button
                key={type}
                className={`wing-tab ${activeWingType === type ? 'wing-tab--active' : ''}`}
                onClick={() => setActiveWingType(type)}
              >
                {type === 'Traditional' && '🍗 '}
                {type === 'Boneless' && '🍖 '}
                {type === 'Cauli Wings' && '🥦 '}
                {type}
              </button>
            ))}
          </div>

          <div className="wing-type-showcase">
            <div className="wing-type-desc">
              {activeWingType === 'Traditional' && (
                <p>Classic bone-in wings — crispy skin, juicy meat. The original Wing Snob experience.</p>
              )}
              {activeWingType === 'Boneless' && (
                <p>All the flavor, none of the bones. Tender, all-white-meat bites tossed in your sauce.</p>
              )}
              {activeWingType === 'Cauli Wings' && (
                <p>Our plant-based option — crispy cauliflower florets that hold sauce just as well as the real thing.</p>
              )}
            </div>
            <img
              src={WING_IMAGES[activeWingType]}
              alt={`${activeWingType} wings`}
              className="wing-type-photo"
            />
          </div>

          <div className="size-grid">
            {SIZES.map(size => (
              <div key={size.qty} className="size-card">
                <div className="size-card__qty">{size.qty}<span>pc</span></div>
                <div className="size-card__price">${size.price.toFixed(2)}</div>
                <p className="size-card__note">
                  {size.qty <= 10 ? 'Up to 1 sauce' : 'Up to 2 sauces'}
                </p>
                <Link to="/order" className="btn-primary size-card__btn">Order</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sauce Lab */}
      <section className="menu-section menu-section--dark">
        <div className="container">
          <div className="menu-section__header">
            <p className="section-label">The Sauce Lab</p>
            <h2 className="section-title">16 Signature Flavors</h2>
            <p className="section-subtitle">
              Handcrafted from scratch. From zero heat to calling-your-mom levels of spicy.
            </p>
          </div>

          <div className="sauce-filters">
            {sauceFilters.map(f => (
              <button
                key={f}
                className={`filter-btn ${activeSauceFilter === f ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveSauceFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="sauce-lab-grid">
            {filteredSauces.map(sauce => (
              <div key={sauce.id} className="sauce-lab-card">
                <div
                  className="sauce-lab-card__bowl"
                  style={{ background: sauce.color }}
                >
                  {sauce.type === 'dry' && <div className="sauce-dry-texture" />}
                </div>
                <div className="sauce-lab-card__info">
                  <div className="sauce-lab-card__top">
                    <h4>{sauce.name}</h4>
                    <span
                      className="sauce-lab-card__badge"
                      style={{ background: sauce.type === 'dry' ? 'rgba(245,166,35,0.15)' : 'rgba(214,43,43,0.15)', color: sauce.type === 'dry' ? 'var(--gold)' : 'var(--red-light)' }}
                    >
                      {sauce.type === 'dry' ? 'Dry Rub' : 'Sauce'}
                    </span>
                  </div>
                  <p className="sauce-lab-card__desc">{sauce.desc}</p>
                  <div className="sauce-lab-card__heat">
                    <span className="sauce-lab-card__heat-label" style={{ color: HEAT_COLORS[sauce.heat] }}>
                      {HEAT_LABELS[sauce.heat]}
                    </span>
                    <div className="heat-dots">
                      {[0,1,2,3,4].map(i => (
                        <div
                          key={i}
                          className="heat-dot"
                          style={{ background: i <= sauce.heat ? HEAT_COLORS[sauce.heat] : 'rgba(255,255,255,0.1)' }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chicken Tenders */}
      <section className="menu-section">
        <div className="container">
          <div className="menu-section__header">
            <h2 className="section-title">Chicken Tenders</h2>
            <p className="section-subtitle">Crispy, all-white-meat tenders. Tossed or dipped in any Sauce Lab flavor.</p>
          </div>
          <div className="size-grid size-grid--3">
            {TENDER_SIZES.map(size => (
              <div key={size.qty} className="size-card">
                <div className="size-card__qty">{size.qty}<span>pc</span></div>
                {size.label && <p className="size-card__tag">{size.label}</p>}
                <div className="size-card__price">${size.price.toFixed(2)}</div>
                <p className="size-card__note">Up to 2 sauces</p>
                <Link to="/order" className="btn-primary size-card__btn">Order</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chicken Minis & Sliders */}
      <section className="menu-section menu-section--dark">
        <div className="container">
          <div className="menu-section__header">
            <h2 className="section-title">Chicken Minis & Sliders</h2>
            <p className="section-subtitle">Crispy chicken breast on a toasted brioche bun. Sauce 'em up from the Sauce Lab.</p>
          </div>
          <div className="extras-grid">
            {SLIDERS.map(item => (
              <div key={item.name} className="extras-card">
                <span className="extras-card__emoji">{item.emoji}</span>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
                <span className="extras-card__price">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sandos */}
      <section className="menu-section">
        <div className="container">
          <div className="menu-section__header">
            <h2 className="section-title">Sandos</h2>
            <p className="section-subtitle">Full-size crispy chicken sandwiches on a toasted brioche bun. Pick your heat.</p>
          </div>
          <div className="extras-grid">
            {SANDOS.map(item => (
              <div key={item.name} className="extras-card">
                <span className="extras-card__emoji">{item.emoji}</span>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
                <span className="extras-card__price">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sides */}
      <section className="menu-section menu-section--dark">
        <div className="container">
          <div className="sides-header">
            <h2 className="section-title">Sides</h2>
            <img src={friesImg} alt="Wing Snob fries" className="sides-photo" />
          </div>
          <div className="extras-grid">
            {SIDES.map(item => (
              <div key={item.name} className="extras-card">
                <span className="extras-card__emoji">{item.emoji}</span>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
                <span className="extras-card__price">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desserts & Drinks */}
      <section className="menu-section">
        <div className="container">
          <div className="menu-dd-grid">
            <div>
              <h2 className="section-title" style={{ marginBottom: '28px' }}>Desserts</h2>
              <div className="extras-grid extras-grid--col1">
                {DESSERTS.map(item => (
                  <div key={item.name} className="extras-card">
                    <span className="extras-card__emoji">{item.emoji}</span>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                    </div>
                    <span className="extras-card__price">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-title" style={{ marginBottom: '28px' }}>Drinks</h2>
              <div className="extras-grid extras-grid--col1">
                {DRINKS.map(item => (
                  <div key={item.name} className="extras-card">
                    <span className="extras-card__emoji">{item.emoji}</span>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                    </div>
                    <span className="extras-card__price">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="menu-cta">
        <div className="container menu-cta__inner">
          <h2 className="section-title">Ready to Order?</h2>
          <p className="section-subtitle">Skip the wait — order online and pick up or get it delivered.</p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link to="/order" className="btn-primary">Order Online</Link>
            <Link to="/locations" className="btn-secondary">Find a Location</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
