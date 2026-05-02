import { useState } from 'react'
import truckImg from '../assets/ws-truck.webp'
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
      <section className="locations-hero" data-section="locations-hero" data-section-label="Find Us">
        <div className="container">
          <p className="section-label" data-animate="blur-in">70+ Locations Across 9 States</p>
          <h1 className="section-title" data-animate="blur-in" data-delay="80">Find Your<br />Wing Snob</h1>
          <p className="section-subtitle" data-animate="fade-up" data-delay="160">
            Detroit to Dallas. Livonia to Phoenix. 70+ spots and still going — search below to find the one closest to you.
          </p>
          <div className="locations-search" data-animate="fade-up" data-delay="240">
            <span className="locations-search__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
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
              <span className="map-placeholder__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
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
              />
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
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                        </span>
                        <p>{loc.hours}</p>
                      </div>
                      {loc.phone && (
                        <div className="location-detail">
                          <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                          </span>
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
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                        </span>
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
            <p className="section-label">Book the Truck</p>
            <h2 className="section-title">Wing Snob Catering</h2>
            <p className="section-subtitle">
              Weddings, festivals, tailgates, company events — the truck shows up ready.
              Tell us the date and headcount, and we take it from there.
            </p>
            <a href="https://www.wingsnob.com/catering" className="btn-gold" style={{ marginTop: '28px' }}>Book Catering</a>
          </div>
          <div className="food-truck-visual" data-animate="fade-right" data-delay="150">
            <img src={truckImg} alt="Wing Snob food truck" className="food-truck-img photo-float" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  )
}
