import { useState } from 'react'
import './Locations.css'

const LOCATIONS = [
  {
    id: 1,
    city: 'Livonia',
    state: 'MI',
    address: '29201 Plymouth Rd, Livonia, MI 48150',
    phone: '(734) 555-0192',
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: 'Original',
    open: true,
  },
  {
    id: 2,
    city: 'Detroit',
    state: 'MI',
    address: '4120 Woodward Ave, Detroit, MI 48201',
    phone: '(313) 555-0187',
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–12am · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 3,
    city: 'Chicago',
    state: 'IL',
    address: '845 N Michigan Ave, Chicago, IL 60611',
    phone: '(312) 555-0234',
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 4,
    city: 'Columbus',
    state: 'OH',
    address: '1421 N High St, Columbus, OH 43201',
    phone: '(614) 555-0155',
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 5,
    city: 'Indianapolis',
    state: 'IN',
    address: '5632 E 82nd St, Indianapolis, IN 46250',
    phone: '(317) 555-0211',
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 6,
    city: 'Nashville',
    state: 'TN',
    address: '2014 Broadway, Nashville, TN 37203',
    phone: '(615) 555-0199',
    hours: 'Mon–Thu 11am–11pm · Fri–Sat 11am–12am · Sun 12pm–10pm',
    tag: null,
    open: true,
  },
  {
    id: 7,
    city: 'Atlanta',
    state: 'GA',
    address: '789 Peachtree St NE, Atlanta, GA 30308',
    phone: '(404) 555-0168',
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: 'Opening Soon',
    open: false,
  },
  {
    id: 8,
    city: 'Dallas',
    state: 'TX',
    address: '3201 Knox St, Dallas, TX 75205',
    phone: '(214) 555-0177',
    hours: 'Coming Soon',
    tag: 'Opening Soon',
    open: false,
  },
]

export default function Locations() {
  const [search, setSearch] = useState('')

  const filtered = LOCATIONS.filter(loc =>
    loc.city.toLowerCase().includes(search.toLowerCase()) ||
    loc.state.toLowerCase().includes(search.toLowerCase()) ||
    loc.address.toLowerCase().includes(search.toLowerCase())
  )

  const openLocations = filtered.filter(l => l.open)
  const comingSoon = filtered.filter(l => !l.open)

  return (
    <div className="locations-page">
      {/* Hero */}
      <section className="locations-hero">
        <div className="container">
          <p className="section-label" data-animate="blur-in">50+ Locations & Growing</p>
          <h1 className="section-title" data-animate="blur-in" data-delay="80">Find Your<br />Wing Snob</h1>
          <p className="section-subtitle" data-animate="fade-up" data-delay="160">
            From Michigan to Tennessee — we're spreading the flavor everywhere.
          </p>
          <div className="locations-search" data-animate="fade-up" data-delay="240">
            <span className="locations-search__icon">🔍</span>
            <input
              type="text"
              placeholder="Search by city or state..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="locations-search__input"
            />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <div className="locations-map">
        <div className="container">
          <div className="map-placeholder" data-animate="scale-up">
            <div className="map-placeholder__inner">
              <span className="map-placeholder__icon">📍</span>
              <p>Interactive map — 50+ Wing Snob locations across the US</p>
              <p className="map-placeholder__sub">Connect Google Maps API for live map</p>
            </div>
            {LOCATIONS.filter(l => l.open).map(loc => (
              <div
                key={loc.id}
                className="map-pin"
                style={{
                  top: `${20 + (loc.id * 9) % 60}%`,
                  left: `${15 + (loc.id * 13) % 70}%`,
                }}
                title={loc.city}
              >
                📍
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Cards */}
      <section className="locations-list">
        <div className="container">
          {openLocations.length > 0 && (
            <>
              <h2 className="locations-list__heading">Open Now</h2>
              <div className="locations-grid">
                {openLocations.map((loc, i) => (
                  <div key={loc.id} className="location-card" data-animate="fade-up" data-delay={String(i * 80)}>
                    <div className="location-card__header">
                      <div>
                        <h3>{loc.city}, {loc.state}</h3>
                        <p className="location-card__address">{loc.address}</p>
                      </div>
                      {loc.tag && (
                        <span className="location-card__tag location-card__tag--original">{loc.tag}</span>
                      )}
                    </div>
                    <div className="location-card__details">
                      <div className="location-detail">
                        <span>🕐</span>
                        <p>{loc.hours}</p>
                      </div>
                      <div className="location-detail">
                        <span>📞</span>
                        <p>{loc.phone}</p>
                      </div>
                    </div>
                    <div className="location-card__actions">
                      <a href="#" className="btn-primary location-card__btn">Get Directions</a>
                      <a href="#" className="btn-secondary location-card__btn">Order Pickup</a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {comingSoon.length > 0 && (
            <>
              <h2 className="locations-list__heading" style={{ marginTop: '60px' }}>Coming Soon</h2>
              <div className="locations-grid">
                {comingSoon.map((loc, i) => (
                  <div key={loc.id} className="location-card location-card--soon" data-animate="fade-up" data-delay={String(i * 100)}>
                    <div className="location-card__header">
                      <div>
                        <h3>{loc.city}, {loc.state}</h3>
                        <p className="location-card__address">{loc.address}</p>
                      </div>
                      <span className="location-card__tag location-card__tag--soon">Coming Soon</span>
                    </div>
                    <div className="location-card__details">
                      <div className="location-detail">
                        <span>🕐</span>
                        <p>{loc.hours}</p>
                      </div>
                    </div>
                    <div className="location-card__actions">
                      <button className="btn-secondary location-card__btn" disabled>Notify Me</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <div className="locations-empty">
              <p>No locations found for "{search}".</p>
              <p>New spots are opening soon — check back!</p>
            </div>
          )}
        </div>
      </section>

      {/* Food Truck */}
      <section className="food-truck-banner">
        <div className="container food-truck-banner__inner">
          <div data-animate="fade-left">
            <p className="section-label">Wing Snob on Wheels</p>
            <h2 className="section-title">The Food Truck</h2>
            <p className="section-subtitle">
              Bringing Wing Snob to festivals, events, and corporate catering near you.
              Book us for your next event.
            </p>
            <a href="#" className="btn-gold" style={{ marginTop: '28px' }}>Book the Truck</a>
          </div>
          <div className="food-truck-visual" data-animate="fade-right" data-delay="150">🚚</div>
        </div>
      </section>
    </div>
  )
}
