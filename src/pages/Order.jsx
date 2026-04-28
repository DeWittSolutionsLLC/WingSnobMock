import { useState } from 'react'
import { SAUCES, HEAT_LABELS, HEAT_COLORS } from '../data/sauces'
import './Order.css'

const WING_TYPES = [
  { id: 'traditional', label: 'Traditional', desc: 'Classic bone-in, crispy skin' },
  { id: 'boneless', label: 'Boneless', desc: 'All-white-meat, no bones' },
  { id: 'cauliflower', label: 'Cauliflower', desc: 'Plant-based, crispy florets' },
]

const SIZES = [
  { qty: 6, price: 9.99 },
  { qty: 10, price: 15.99 },
  { qty: 15, price: 22.99 },
  { qty: 20, price: 28.99 },
  { qty: 50, price: 64.99 },
]

const SIDES = [
  { id: 's1', name: 'Classic Fries', price: 3.49 },
  { id: 's2', name: 'Seasoned Fries', price: 3.99 },
  { id: 's3', name: 'Mac & Cheese', price: 4.49 },
  { id: 's4', name: 'Coleslaw', price: 2.99 },
  { id: 's5', name: 'Corn on the Cob', price: 2.99 },
  { id: 's6', name: 'Cheesecake Bites', price: 5.99 },
]

export default function Order() {
  const [step, setStep] = useState(1)
  const [wingType, setWingType] = useState(null)
  const [size, setSize] = useState(null)
  const [sauces, setSauces] = useState([])
  const [sides, setSides] = useState([])
  const [placed, setPlaced] = useState(false)

  const maxSauces = size && size.qty <= 6 ? 1 : 2

  function toggleSauce(sauce) {
    if (sauces.find(s => s.id === sauce.id)) {
      setSauces(sauces.filter(s => s.id !== sauce.id))
    } else if (sauces.length < maxSauces) {
      setSauces([...sauces, sauce])
    }
  }

  function toggleSide(side) {
    if (sides.find(s => s.id === side.id)) {
      setSides(sides.filter(s => s.id !== side.id))
    } else {
      setSides([...sides, side])
    }
  }

  const subtotal = (size ? size.price : 0) + sides.reduce((acc, s) => acc + s.price, 0)
  const tax = subtotal * 0.06
  const total = subtotal + tax

  function canProceed() {
    if (step === 1) return !!wingType
    if (step === 2) return !!size
    if (step === 3) return sauces.length > 0
    return true
  }

  if (placed) {
    return (
      <div className="order-success">
        <div className="order-success__inner">
          <div className="order-success__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h2>Order Placed!</h2>
          <p>Your Wing Snob order is being prepared. You'll receive a confirmation shortly.</p>
          <div className="order-success__summary">
            <p><strong>{size?.qty}pc {wingType?.label} Wings</strong></p>
            {sauces.map(s => <p key={s.id}>• {s.name}</p>)}
            {sides.map(s => <p key={s.id}>• {s.name}</p>)}
            <div className="order-success__total">Total: <span>${total.toFixed(2)}</span></div>
          </div>
          <button className="btn-primary" onClick={() => { setPlaced(false); setStep(1); setWingType(null); setSize(null); setSauces([]); setSides([]) }}>
            Order Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="order-page">
      <div className="container order-layout">
        {/* Left: Steps */}
        <div className="order-steps">
          {/* Step Indicator */}
          <div className="step-indicator">
            {[1,2,3,4].map(n => (
              <div key={n} className={`step-dot ${step >= n ? 'step-dot--active' : ''} ${step > n ? 'step-dot--done' : ''}`}>
                <div className="step-dot__circle">{step > n ? '✓' : n}</div>
                <span>{['Wing Style','Size','Sauce','Sides'][n-1]}</span>
              </div>
            ))}
          </div>

          {/* Step 1 — Wing Type */}
          {step === 1 && (
            <div className="step-panel">
              <h2 className="step-panel__title">Choose Your Style</h2>
              <div className="wing-type-grid">
                {WING_TYPES.map(type => (
                  <button
                    key={type.id}
                    className={`wing-type-btn ${wingType?.id === type.id ? 'wing-type-btn--active' : ''}`}
                    onClick={() => setWingType(type)}
                  >
                    <strong>{type.label}</strong>
                    <span>{type.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Size */}
          {step === 2 && (
            <div className="step-panel">
              <h2 className="step-panel__title">Pick Your Size</h2>
              <div className="size-select-grid">
                {SIZES.map(s => (
                  <button
                    key={s.qty}
                    className={`size-select-btn ${size?.qty === s.qty ? 'size-select-btn--active' : ''}`}
                    onClick={() => setSize(s)}
                  >
                    <span className="size-select-btn__qty">{s.qty}<small>pc</small></span>
                    <span className="size-select-btn__price">${s.price.toFixed(2)}</span>
                    <span className="size-select-btn__note">{s.qty <= 6 ? '1 sauce' : '2 sauces'}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 — Sauces */}
          {step === 3 && (
            <div className="step-panel">
              <h2 className="step-panel__title">
                Pick Your Sauce{maxSauces > 1 ? 's' : ''}
                <span className="step-panel__sub"> — up to {maxSauces}</span>
              </h2>
              <div className="sauce-select-grid">
                {SAUCES.map(sauce => {
                  const selected = !!sauces.find(s => s.id === sauce.id)
                  const disabled = !selected && sauces.length >= maxSauces
                  return (
                    <button
                      key={sauce.id}
                      className={`sauce-select-btn ${selected ? 'sauce-select-btn--active' : ''} ${disabled ? 'sauce-select-btn--disabled' : ''}`}
                      onClick={() => toggleSauce(sauce)}
                      disabled={disabled}
                    >
                      <div className="sauce-select-btn__bowl" style={{ background: sauce.color }}>
                        {sauce.type === 'dry' && <div className="sauce-dry-tex" />}
                      </div>
                      <span className="sauce-select-btn__name">{sauce.name}</span>
                      <span className="sauce-select-btn__heat" style={{ color: HEAT_COLORS[sauce.heat] }}>
                        {HEAT_LABELS[sauce.heat]}
                      </span>
                      {selected && <div className="sauce-select-btn__check">✓</div>}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 4 — Sides */}
          {step === 4 && (
            <div className="step-panel">
              <h2 className="step-panel__title">Add Sides <span className="step-panel__sub">— optional</span></h2>
              <div className="sides-select-grid">
                {SIDES.map(side => {
                  const selected = !!sides.find(s => s.id === side.id)
                  return (
                    <button
                      key={side.id}
                      className={`side-select-btn ${selected ? 'side-select-btn--active' : ''}`}
                      onClick={() => toggleSide(side)}
                    >
                      <span className="side-select-btn__name">{side.name}</span>
                      <span className="side-select-btn__price">${side.price.toFixed(2)}</span>
                      {selected && <div className="side-select-btn__check">✓</div>}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step Navigation */}
          <div className="step-nav">
            {step > 1 && (
              <button className="btn-secondary" onClick={() => setStep(step - 1)}>← Back</button>
            )}
            {step < 4 ? (
              <button
                className="btn-primary"
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                style={{ marginLeft: 'auto' }}
              >
                Continue →
              </button>
            ) : (
              <button
                className="btn-primary"
                onClick={() => setPlaced(true)}
                style={{ marginLeft: 'auto' }}
              >
                Place Order · ${total.toFixed(2)}
              </button>
            )}
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="order-summary" data-parallax="0.06">
          <h3 className="order-summary__title">Your Order</h3>

          {!wingType && !size && sauces.length === 0 && sides.length === 0 ? (
            <p className="order-summary__empty">Nothing here yet — start building your order.</p>
          ) : (
            <div className="order-summary__items">
              {wingType && size && (
                <div className="summary-item">
                  <span>{size.qty}pc {wingType.label} Wings</span>
                  <span>${size.price.toFixed(2)}</span>
                </div>
              )}
              {wingType && !size && (
                <div className="summary-item summary-item--muted">
                  <span>{wingType.label} Wings</span>
                  <span>—</span>
                </div>
              )}
              {sauces.length > 0 && (
                <div className="summary-group">
                  <p className="summary-group__label">Sauces</p>
                  {sauces.map(s => (
                    <div key={s.id} className="summary-item summary-item--indent">
                      <span>• {s.name}</span>
                      <span>incl.</span>
                    </div>
                  ))}
                </div>
              )}
              {sides.length > 0 && (
                <div className="summary-group">
                  <p className="summary-group__label">Sides</p>
                  {sides.map(s => (
                    <div key={s.id} className="summary-item summary-item--indent">
                      <span>• {s.name}</span>
                      <span>${s.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {subtotal > 0 && (
            <div className="order-summary__totals">
              <div className="summary-line">
                <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Tax (6%)</span><span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-line summary-line--total">
                <span>Total</span><span>${total.toFixed(2)}</span>
              </div>
            </div>
          )}

          <div className="order-summary__delivery">
            <p>Pickup or delivery available</p>
            <p>Track via app or DoorDash / Uber Eats</p>
          </div>
        </div>
      </div>
    </div>
  )
}
