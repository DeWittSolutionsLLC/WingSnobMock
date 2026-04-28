import { useState } from 'react'
import './Locations.css'

const LOCATIONS = [
  {
    id: 1,
    city: 'Livonia',
    state: 'MI',
    address: '28408 Five Mile Rd, Livonia, MI 48154',
    phone: '(734) 237-0800',
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: 'Original',
    open: true,
  },
  {
    id: 2,
    city: 'Detroit',
    state: 'MI',
    address: 'Detroit, MI',
    phone: null,
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 3,
    city: 'Ann Arbor',
    state: 'MI',
    address: 'Ann Arbor, MI',
    phone: null,
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 4,
    city: 'Lansing',
    state: 'MI',
    address: 'Lansing, MI',
    phone: null,
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 5,
    city: 'Columbus',
    state: 'OH',
    address: 'Columbus, OH',
    phone: null,
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 6,
    city: 'Schaumburg',
    state: 'IL',
    address: 'Schaumburg, IL',
    phone: null,
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 7,
    city: 'Frisco',
    state: 'TX',
    address: 'Frisco, TX',
    phone: null,
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 8,
    city: 'Katy',
    state: 'TX',
    address: 'Katy, TX',
    phone: null,
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 9,
    city: 'Delavan',
    state: 'WI',
    address: 'Delavan, WI',
    phone: null,
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 10,
    city: 'Phoenix',
    state: 'AZ',
    address: 'Phoenix, AZ',
    phone: null,
    hours: 'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 12pm–9pm',
    tag: null,
    open: true,
  },
  {
    id: 11,
    city: 'Tampa',
    state: 'FL',
    address: 'Tampa, FL',
    phone: null,
    hours: 'Coming Soon',
    tag: 'Opening Soon',
    open: false,
  },
  {
    id: 12,
    city: 'St. Louis',
    state: 'MO',
    address: 'St. Louis, MO',
    phone: null,
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
          <p className="section-label" data-animate="blur-in">70+ Locations Across 9 States</p>
          <h1 className="section-title" data-animate="blur-in" data-delay="80">Find Your<br />Wing Snob</h1>
          <p className="section-subtitle" data-animate="fade-up" data-delay="160">
            From Michigan to Texas — we're spreading the flavor nationwide. Use the search below or visit us online to order pickup or delivery.
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
              <p>Interactive map — 70+ Wing Snob locations across 9 states</p>
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
                      {loc.phone && (
                        <div className="location-detail">
                          <span>📞</span>
                          <p>{loc.phone}</p>
                        </div>
                      )}
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

      {/* Catering */}
      <section className="food-truck-banner">
        <div className="container food-truck-banner__inner">
          <div data-animate="fade-left">
            <p className="section-label">Be Snobby With Your Event</p>
            <h2 className="section-title">Wing Snob Catering</h2>
            <p className="section-subtitle">
              Bringing better wings to your event, festival, or corporate gathering.
              Let us know your date, location, and guest count — we'll handle the rest.
            </p>
            <a href="https://www.wingsnob.com/catering" className="btn-gold" style={{ marginTop: '28px' }}>Book Catering</a>
          </div>
          <div className="food-truck-visual" data-animate="fade-right" data-delay="150">🍗</div>
        </div>
      </section>
    </div>
  )
}
