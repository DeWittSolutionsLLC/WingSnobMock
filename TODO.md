# Order.jsx Sauce Selection Update Plan

## Task: Add button selection for sauces and update CSS for the order page

### Current State:
- Order.jsx uses a `<select>` dropdown for sauce selection in the customizer modal
- Order.css has unused CSS for button-based sauce selection (`.sauce-select-grid`)

### Implementation Steps:

## 1. Update Order.jsx
- [ ] Replace the `<select>` dropdown with a button grid
- [ ] Use SAUCES data to render clickable sauce buttons
- [ ] Add heat level indicators using HEAT_LABELS and HEAT_COLORS
- [ ] Allow selection/deselection of sauces (toggle)
- [ ] Update the "Add to Order" logic to handle selected sauces

## 2. Update Order.css
- [ ] Add styles for sauce button grid within the customizer modal
- [ ] Style sauce buttons with color indicators
- [ ] Add selected state styling
- [ ] Ensure responsive behavior

### Files to Edit:
1. `src/pages/Order.jsx` - Replace dropdown with button grid
2. `src/pages/Order.css` - Add modal sauce button styles

### Dependencies:
- Uses existing `SAUCES`, `HEAT_LABELS`, `HEAT_COLORS` from `../data/sauces`
- Uses existing CSS classes from Order.css
