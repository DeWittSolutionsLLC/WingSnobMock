export const SAUCES = [
  // ── No Heat ──
  { id: 1,  name: 'Naked',                      color: '#5A5A5A', heat: 0, type: 'sauce', desc: 'No sauce, no rub — just the wing. Pure and simple.' },
  { id: 2,  name: 'Garlic Parmesan',            color: '#C8CA78', heat: 0, type: 'sauce', desc: 'Garlic butter tossed in and sprinkled with real Parmesan.' },
  { id: 3,  name: 'Honey BBQ',                  color: '#6B2A08', heat: 0, type: 'sauce', desc: 'A classic, smooth honey BBQ sauce. Crowd-pleaser every time.' },
  { id: 4,  name: 'Teriyaki',                   color: '#2E1A0A', heat: 0, type: 'sauce', desc: 'Asian-inspired teriyaki — sweet, savory, sticky.' },
  { id: 5,  name: 'Snobby Q',                   color: '#8B3A18', heat: 0, type: 'sauce', desc: 'Our signature BBQ. Smoky, tangy, and a little bit snobbier.' },
  { id: 6,  name: 'Awesome Sauce',              color: '#E87B2E', heat: 0, type: 'sauce', desc: 'House-crafted and hard to describe. Just trust us on this one.' },
  { id: 7,  name: 'Lemon Pepper Sauce',         color: '#E8D44D', heat: 0, type: 'sauce', desc: 'Bright, citrusy lemon pepper in a saucy, buttery finish.' },
  { id: 8,  name: 'Lemon Pepper Dry Rub',       color: '#D4C850', heat: 0, type: 'dry',   desc: 'Zesty lemon peel and coarse cracked pepper. Classic dry rub.' },

  // ── Medium ──
  { id: 9,  name: 'Buffalo',                    color: '#E05010', heat: 1, type: 'sauce', desc: 'The original. Cayenne-forward with a buttery, tangy finish.' },
  { id: 10, name: 'Buffalo Parmesan',           color: '#D06828', heat: 1, type: 'sauce', desc: 'Classic buffalo heat finished with fresh Parmesan cheese.' },
  { id: 11, name: 'Buffalo Lemon Pepper',       color: '#D4903A', heat: 1, type: 'sauce', desc: 'Buffalo sauce brightened up with a hit of lemon pepper.' },

  // ── Hot ──
  { id: 12, name: 'Cajun Dry Rub',              color: '#7A3808', heat: 2, type: 'dry',   desc: 'Bold Southern spice blend — paprika, garlic, and real heat.' },
  { id: 13, name: 'Hot Honey BBQ',              color: '#C87820', heat: 2, type: 'sauce', desc: 'Classic honey BBQ with a slow, building heat. Addictive.' },
  { id: 14, name: 'Sweet Chili',                color: '#C84040', heat: 2, type: 'sauce', desc: 'Sweet meets heat in a sticky, vibrant chili glaze.' },
  { id: 15, name: 'Smokey Apple Chipotle Rub',  color: '#7A5030', heat: 2, type: 'dry',   desc: 'Smoky chipotle with a hint of sweet apple. Bold dry rub.' },

  // ── Extra Hot ──
  { id: 16, name: 'Jamaican Jerk',              color: '#C44A20', heat: 3, type: 'sauce', desc: 'Authentic Jamaican spice blend with real Scotch Bonnet heat.' },
  { id: 17, name: 'Mango Habanero',             color: '#E84020', heat: 3, type: 'sauce', desc: 'Spicy habanero with a hint of sweet mango to cool the burn.' },
  { id: 18, name: 'Nashville Hot Dry Rub',      color: '#A03818', heat: 3, type: 'dry',   desc: 'Nashville-style cayenne dry rub. Sweet, tangy, serious heat.' },

  // ── Danger Zone ──
  { id: 19, name: 'Blazin Q',                   color: '#991010', heat: 4, type: 'sauce', desc: 'Our hottest BBQ. Sweet up front, then it punches you in the face.' },
  { id: 20, name: 'Hot AF Sauce',               color: '#CC1A1A', heat: 4, type: 'sauce', desc: 'A straight habanero sauce. No gimmicks. Not for the weak.' },
]

export const HEAT_LABELS = ['Mild', 'Medium', 'Hot', 'Extra Hot', 'Danger Zone']
export const HEAT_COLORS = ['#4CAF50', '#FFC107', '#FF9800', '#FF5722', '#D62B2B']
