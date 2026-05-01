import { useState } from 'react'
import { SAUCES, HEAT_LABELS, HEAT_COLORS } from '../data/sauces'
import './Order.css'

const MENU_DATA = {
  wings: [
    {
      id: 'traditional',
      label: 'Traditional Wings',
      desc: 'Classic bone-in wings — crispy skin, juicy meat',
      sizes: [
        { qty: 6,  price: 9.99  },
        { qty: 10, price: 15.99 },
        { qty: 15, price: 22.99 },
        { qty: 20, price: 28.99 },
        { qty: 50, price: 64.99 },
      ],
    },
    {
      id: 'boneless',
      label: 'Boneless Wings',
      desc: '100% white meat, tossed in your sauce',
      sizes: [
        { qty: 6,  price: 9.99  },
        { qty: 10, price: 15.99 },
        { qty: 15, price: 22.99 },
        { qty: 20, price: 28.99 },
        { qty: 50, price: 64.99 },
      ],
    },
    {
      id: 'cauli',
      label: 'Cauli Wings',
      desc: 'Crispy plant-based cauliflower florets',
      sizes: [
        { qty: 6,  price: 9.99  },
        { qty: 10, price: 15.99 },
        { qty: 15, price: 22.99 },
        { qty: 20, price: 28.99 },
        { qty: 50, price: 64.99 },
      ],
    },
    {
      id: 'tenders',
      label: 'Chicken Tenders',
      desc: 'Crispy all-white-meat tenders, tossed or dipped',
      sizes: [
        { qty: 5,  price: 10.99 },
        { qty: 10, price: 18.99 },
        { qty: 20, price: 34.99 },
      ],
    },
  ],
  sliders: [
    { id: 'slider-single', label: 'Single Slider',   desc: 'Crispy chicken breast on a toasted brioche bun with pickles and house sauce.', price: 4.99  },
    { id: 'slider-3',      label: 'Slider 3-Pack',   desc: 'Three sliders — perfect for sharing, or not.',                                 price: 12.99 },
    { id: 'slider-6',      label: 'Slider 6-Pack',   desc: 'Six sliders. The move for a crowd.',                                           price: 23.99 },
  ],
  sandos: [
    { id: 'classic-sando',   label: 'Classic Sando',       desc: 'Crispy chicken, lettuce, tomato, pickles, house sauce on a toasted brioche bun.',                                          price: 11.99 },
    { id: 'spicy-sando',     label: 'Spicy Sando',         desc: 'Same as the classic, hit with your sauce of choice from the Sauce Lab.',                                                  price: 12.49 },
    { id: 'buffalo-sando',   label: 'Buffalo Ranch Sando', desc: 'Crispy chicken tossed in Buffalo sauce, topped with ranch and pickles on a toasted brioche bun.',                         price: 12.99 },
    { id: 'boom-boom-sando', label: 'Boom Boom Sando',     desc: 'Crispy chicken tossed in Boom Boom sauce, topped with pickles and an onion ring on a toasted brioche bun.',              price: 12.99 },
    { id: 'big-texan-sando', label: 'Big Texan Sando',     desc: 'Crispy chicken with Boom Boom Sauce drizzled on top, topped with coleslaw and pickles on a toasted brioche bun.',       price: 13.49 },
  ],
  sides: [
    { id: 'loaded-fries',  label: 'Loaded Fries',          desc: 'Fries loaded with cheese sauce, bacon, jalapeños, and ranch.',              price: 7.99 },
    { id: 'fries',         label: 'Fries',                  desc: 'Golden, perfectly seasoned fries.',                                         price: 3.49 },
    { id: 'mac',           label: 'Mac & Cheese',           desc: 'Creamy, cheesy, comforting.',                                               price: 4.49 },
    { id: 'street-corn',   label: 'Street Corn',            desc: 'Seasoned corn with a bold kick — Snob style.',                             price: 3.99 },
    { id: 'pretzels',      label: 'Soft Pretzels & Cheese', desc: 'Warm soft pretzels served with a side of creamy cheese sauce.',             price: 5.99 },
    { id: 'onion-rings',   label: 'Onion Rings',            desc: 'Thick-cut, crispy, golden onion rings.',                                   price: 3.99 },
    { id: 'slaw',          label: 'Coleslaw',               desc: 'Cool and tangy — the perfect wing companion.',                             price: 2.99 },
    { id: 'veggie',        label: 'Veggie Sticks & Ranch',  desc: 'Crisp celery and carrot sticks served with ranch dressing.',               price: 3.49 },
    { id: 'cornbread',     label: 'Cornbread',              desc: 'Sweet, buttery cornbread — a Southern classic.',                           price: 3.99 },
  ],
  desserts: [
    { id: 'cheesecake', label: 'Cheesecake Bites',      desc: 'Fried cheesecake bites with strawberry dipping sauce.', price: 5.99 },
    { id: 'cookies',    label: 'Choc Chip Cookies',     desc: 'Warm, gooey chocolate chip cookies.',                   price: 2.00 },
  ],
  drinks: [
    { id: 'lemonade', label: 'Lemonade',      desc: 'Fresh-squeezed, house-made.', price: 2.99 },
    { id: 'soda',     label: 'Fountain Soda', desc: 'Pepsi products.',             price: 2.49 },
    { id: 'water',    label: 'Water Bottle',  desc: '16.9 fl oz.',                 price: 1.49 },
  ],
}

function getSauceLimit(qty) {
  if (qty <= 6) return 1
  if (qty < 20) return 2
  return 4
}

export default function Order() {
  const [cart, setCart] = useState([])
  const [activeItem, setActiveItem] = useState(null)
  const [quickAddItem, setQuickAddItem] = useState(null)
  const [placed, setPlaced] = useState(false)

  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0)
  const tax = subtotal * 0.06
  const total = subtotal + tax

  const addToCart = (item) => {
    setCart([...cart, { ...item, cartId: Date.now() }])
    setActiveItem(null)
  }

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId))
  }

  if (placed) {
    return (
      <div className="order-success">
        <div className="order-success__inner">
          <h2>🔥 Order Received!</h2>
          <p>We're getting your wings ready. Estimated time: 15-20 mins.</p>
          <button className="btn-primary" onClick={() => { setCart([]); setPlaced(false) }}>Start New Order</button>
        </div>
      </div>
    )
  }

  const sauceLimit = activeItem ? getSauceLimit(activeItem.selectedSize.qty) : 0

  return (
    <div className="order-page">
      <div className="container order-layout">

        {/* ── Menu ── */}
        <div className="menu-explorer">

          <section className="menu-section">
            <h3>Wings & Tenders</h3>
            <div className="menu-grid">
              {MENU_DATA.wings.map(type => (
                <div
                  key={type.id}
                  className="menu-card"
                  onClick={() => setActiveItem({ ...type, selectedSize: type.sizes[0], sauces: [] })}
                >
                  <h4>{type.label}</h4>
                  <p>{type.desc}</p>
                  <span className="price-tag">From <span className="price-tag--highlight">${type.sizes[0].price}</span></span>
                </div>
              ))}
            </div>
          </section>

          <section className="menu-section">
            <h3>Minis & Sliders</h3>
            <div className="menu-grid">
              {MENU_DATA.sliders.map(item => (
                <div key={item.id} className="menu-card" onClick={() => setQuickAddItem({ ...item, totalPrice: item.price })}>
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                  <span className="price-tag"><span className="price-tag--highlight">${item.price.toFixed(2)}</span></span>
                </div>
              ))}
            </div>
          </section>

          <section className="menu-section">
            <h3>Sandos</h3>
            <div className="menu-grid">
              {MENU_DATA.sandos.map(item => (
                <div key={item.id} className="menu-card" onClick={() => setQuickAddItem({ ...item, totalPrice: item.price })}>
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                  <span className="price-tag"><span className="price-tag--highlight">${item.price.toFixed(2)}</span></span>
                </div>
              ))}
            </div>
          </section>

          <section className="menu-section">
            <h3>Sides</h3>
            <div className="menu-grid">
              {MENU_DATA.sides.map(item => (
                <div key={item.id} className="menu-card" onClick={() => setQuickAddItem({ ...item, totalPrice: item.price })}>
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                  <span className="price-tag"><span className="price-tag--highlight">${item.price.toFixed(2)}</span></span>
                </div>
              ))}
            </div>
          </section>

          <section className="menu-section">
            <h3>Desserts</h3>
            <div className="menu-grid">
              {MENU_DATA.desserts.map(item => (
                <div key={item.id} className="menu-card" onClick={() => setQuickAddItem({ ...item, totalPrice: item.price })}>
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                  <span className="price-tag"><span className="price-tag--highlight">${item.price.toFixed(2)}</span></span>
                </div>
              ))}
            </div>
          </section>

          <section className="menu-section">
            <h3>Drinks</h3>
            <div className="menu-grid">
              {MENU_DATA.drinks.map(item => (
                <div key={item.id} className="menu-card" onClick={() => setQuickAddItem({ ...item, totalPrice: item.price })}>
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                  <span className="price-tag"><span className="price-tag--highlight">${item.price.toFixed(2)}</span></span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ── Wing / Tender Customizer ── */}
        {activeItem && (
          <div className="customizer-overlay" onClick={() => setActiveItem(null)}>
            <div className="customizer-modal" onClick={e => e.stopPropagation()}>
              <h3>Customize {activeItem.label}</h3>

              <div className="option-group">
                <label>Select Size</label>
                <div className="size-chips">
                  {activeItem.sizes.map(s => {
                    const limit = getSauceLimit(s.qty)
                    return (
                      <button
                        key={s.qty}
                        className={activeItem.selectedSize.qty === s.qty ? 'active' : ''}
                        onClick={() => setActiveItem({
                          ...activeItem,
                          selectedSize: s,
                          sauces: activeItem.sauces.slice(0, getSauceLimit(s.qty)),
                        })}
                      >
                        {s.qty}pc · ${s.price} · {limit} sauce{limit > 1 ? 's' : ''}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="option-group">
                <label>
                  Choose Sauce
                  <span className="sauce-count"> ({activeItem.sauces.length}/{sauceLimit})</span>
                </label>
                <div className="sauce-grid">
                  {SAUCES.map(sauce => {
                    const isSelected = activeItem.sauces.includes(sauce.name)
                    const atLimit = !isSelected && activeItem.sauces.length >= sauceLimit
                    return (
                      <button
                        key={sauce.id}
                        className={`sauce-btn ${isSelected ? 'active' : ''}`}
                        disabled={atLimit}
                        onClick={() => {
                          const newSauces = isSelected
                            ? activeItem.sauces.filter(s => s !== sauce.name)
                            : [...activeItem.sauces, sauce.name]
                          setActiveItem({ ...activeItem, sauces: newSauces })
                        }}
                      >
                        <span className="sauce-color" style={{ backgroundColor: sauce.color }}>
                          {sauce.type === 'dry' && <span className="dry-texture" />}
                        </span>
                        <span className="sauce-name">{sauce.name}</span>
                        {sauce.heat > 0 && (
                          <span className="sauce-heat" style={{ color: HEAT_COLORS[sauce.heat] }}>
                            {HEAT_LABELS[sauce.heat]}
                          </span>
                        )}
                        {isSelected && <span className="sauce-check">✓</span>}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setActiveItem(null)}>Cancel</button>
                <button
                  className="btn-primary"
                  disabled={!activeItem.sauces.length}
                  onClick={() => addToCart({
                    label: `${activeItem.selectedSize.qty}pc ${activeItem.label}`,
                    details: activeItem.sauces.join(', '),
                    totalPrice: activeItem.selectedSize.price,
                  })}
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Quick Add Popup ── */}
        {quickAddItem && (
          <div className="customizer-overlay" onClick={() => setQuickAddItem(null)}>
            <div className="quick-add-modal" onClick={e => e.stopPropagation()}>
              <h3>{quickAddItem.label}</h3>
              {quickAddItem.desc && <p className="quick-add-modal__desc">{quickAddItem.desc}</p>}
              <p className="quick-add-modal__price">${quickAddItem.totalPrice.toFixed(2)}</p>
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setQuickAddItem(null)}>Cancel</button>
                <button className="btn-primary" onClick={() => { addToCart(quickAddItem); setQuickAddItem(null) }}>Add to Order</button>
              </div>
            </div>
          </div>
        )}

        {/* ── Cart Sidebar ── */}
        <div className="order-summary">
          <h3 className="order-summary__title">Your Bag ({cart.length})</h3>
          <div className="cart-items">
            {cart.length === 0 && <p className="empty-msg">Your bag is empty. Add some wings!</p>}
            {cart.map(item => (
              <div key={item.cartId} className="cart-item">
                <div>
                  <strong>{item.label}</strong>
                  {item.details && <small>{item.details}</small>}
                </div>
                <div className="cart-item-right">
                  <span>${item.totalPrice.toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.cartId)}>✕</button>
                </div>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <div className="order-summary__totals">
              <div className="summary-line"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="summary-line"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
              <div className="summary-line total"><span>Total</span><span>${total.toFixed(2)}</span></div>
              <button className="btn-primary checkout-btn" onClick={() => setPlaced(true)}>Checkout</button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
