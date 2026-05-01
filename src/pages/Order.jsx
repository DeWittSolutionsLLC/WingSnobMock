import { useState } from 'react'
import { SAUCES, HEAT_LABELS, HEAT_COLORS } from '../data/sauces'
import './Order.css'

const MENU_DATA = {
  wings: [
    { id: 'traditional', label: 'Traditional Wings', desc: 'Classic bone-in', sizes: [{ qty: 6, price: 9.99 }, { qty: 10, price: 15.99 }, { qty: 20, price: 28.99 }] },
    { id: 'boneless', label: 'Boneless Wings', desc: '100% white meat', sizes: [{ qty: 6, price: 8.99 }, { qty: 10, price: 13.99 }, { qty: 20, price: 24.99 }] },
    { id: 'cauli', label: 'Cauli Wings', desc: 'Plant-based florets', sizes: [{ qty: 8, price: 10.99 }, { qty: 16, price: 19.99 }] },
    { id: 'tenders', label: 'Chicken Tenders', desc: 'Hand-breaded', sizes: [{ qty: 3, price: 7.99 }, { qty: 5, price: 11.99 }] },
  ],
  sandwiches: [
    { id: 'sando', label: 'The Sando', desc: 'Classic chicken sandwich', price: 8.49 },
    { id: 'slider', label: 'Mini Sliders', desc: '2 per order', price: 6.99 },
  ],
  sides: [
    { id: 'fries', label: 'Classic Fries', price: 3.49 },
    { id: 'seasoned', label: 'Seasoned Fries', price: 3.99 },
    { id: 'mac', label: 'Mac & Cheese', price: 4.49 },
    { id: 'slaw', label: 'Coleslaw', price: 2.99 },
  ],
  drinks_desserts: [
    { id: 'soda', label: 'Fountain Soda', price: 2.49 },
    { id: 'water', label: 'Bottled Water', price: 1.99 },
    { id: 'cheesecake', label: 'Cheesecake Bites', price: 5.99 },
  ]
}

export default function Order() {
  const [cart, setCart] = useState([])
  const [activeItem, setActiveItem] = useState(null) // For the customization "modal"
  const [placed, setPlaced] = useState(false)

  // Subtotal Calculation
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
          <button className="btn-primary" onClick={() => {setCart([]); setPlaced(false)}}>Start New Order</button>
        </div>
      </div>
    )
  }

  return (
    <div className="order-page">
      <div className="container order-layout">
        
        {/* Menu Section */}
        <div className="menu-explorer">
          <section className="menu-section">
            <h3>Wings & Tenders</h3>
            <div className="menu-grid">
              {MENU_DATA.wings.map(type => (
                <div key={type.id} className="menu-card" onClick={() => setActiveItem({ ...type, type: 'wings', selectedSize: type.sizes[0], sauces: [] })}>
                  <h4>{type.label}</h4>
                  <p>{type.desc}</p>
                  <span className="price-tag">From <span className="price-tag--highlight">${type.sizes[0].price}</span></span>
                </div>
              ))}
            </div>
          </section>

          <section className="menu-section">
            <h3>Sandwiches & More</h3>
            <div className="menu-grid">
              {MENU_DATA.sandwiches.map(item => (
                <div key={item.id} className="menu-card" onClick={() => addToCart({ ...item, totalPrice: item.price })}>
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                  <span className="price-tag"><span className="price-tag--highlight">${item.price.toFixed(2)}</span></span>
                </div>
              ))}
            </div>
          </section>

          <section className="menu-section">
            <h3>Sides, Drinks & Sweets</h3>
            <div className="menu-grid">
              {[...MENU_DATA.sides, ...MENU_DATA.drinks_desserts].map(item => (
                <div key={item.id} className="menu-card" onClick={() => addToCart({ ...item, totalPrice: item.price })}>
                  <h4>{item.label}</h4>
                  <span className="price-tag"><span className="price-tag--highlight">${item.price.toFixed(2)}</span></span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Floating Customizer (Simple Modal) */}
        {activeItem && (
          <div className="customizer-overlay">
            <div className="customizer-modal">
              <h3>Customize {activeItem.label}</h3>
              
              <div className="option-group">
                <label>Select Size</label>
                <div className="size-chips">
                  {activeItem.sizes.map(s => (
                    <button 
                      key={s.qty} 
                      className={activeItem.selectedSize.qty === s.qty ? 'active' : ''}
                      onClick={() => setActiveItem({...activeItem, selectedSize: s})}
                    >
                      {s.qty}pc - ${s.price}
                    </button>
                  ))}
                </div>
              </div>

<div className="option-group">
                <label>Choose Sauce{activeItem.sauces.length > 0 && <span className="sauce-count"> ({activeItem.sauces.length} selected)</span>}</label>
                <div className="sauce-grid">
                  {SAUCES.map(sauce => (
                    <button
                      key={sauce.id}
                      className={`sauce-btn ${activeItem.sauces.includes(sauce.name) ? 'active' : ''}`}
                      onClick={() => {
                        const isSelected = activeItem.sauces.includes(sauce.name)
                        const newSauces = isSelected
                          ? activeItem.sauces.filter(s => s !== sauce.name)
                          : [...activeItem.sauces, sauce.name]
                        setActiveItem({...activeItem, sauces: newSauces})
                      }}
                    >
                      <span className="sauce-color" style={{ backgroundColor: sauce.color }}>
                        {sauce.type === 'dry' && <span className="dry-texture"></span>}
                      </span>
                      <span className="sauce-name">{sauce.name}</span>
                      {sauce.heat > 0 && (
                        <span className="sauce-heat" style={{ color: HEAT_COLORS[sauce.heat] }}>
                          {HEAT_LABELS[sauce.heat]}
                        </span>
                      )}
                      {activeItem.sauces.includes(sauce.name) && (
                        <span className="sauce-check">✓</span>
                      )}
                    </button>
                  ))}
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
                    totalPrice: activeItem.selectedSize.price
                  })}
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cart Sidebar */}
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