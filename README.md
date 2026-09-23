# ☕ Cardamom House — Lisbon Menu Page

> **Frontend Trial Task — Cardamom House Brunch Café, Lisbon**  
> Built with Next.js 15 (App Router), React 19, TypeScript (Strict), and Tailwind CSS v4.

---

## 🌟 Live Demo & Preview

- **Vercel Deployment**: [cardamom-house-menu.vercel.app](https://cardamom-house-menu.vercel.app)
- **3 URL States Demo**:
  - `?state=open` *(Default)* — Café is open (Tuesday 11:30), Today's Special is available.
  - `?state=closed` — Café is closed (Monday), displays friendly notification banner with next opening time (Tuesday at 08:00).
  - `?state=special-sold-out` — Café is open, but Today's Special (Saffron French Toast) is sold out (dimmed card, sold-out pill badges).

---

## 🛠️ Tech Stack & Tools

- **Framework**: Next.js 16 (App Router with Server Components & Suspense)
- **Library**: React 19
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS v4 with custom design tokens (`@theme`)
- **Typography**: Google Fonts — Cormorant Garamond (Serif headers) & Inter (Clean sans body)

---

## ✨ Features & Requirements Implemented

1. **Hero Section**: Restaurant name, tagline, address details, and dynamic status pill showing whether the café is open or closed today.
2. **Today's Special**: Visually highlighted featured surface using brand amber `#B45309`, displaying chef's recommendation blurb and price. Gracefully updates in `special-sold-out` state.
3. **Sticky Category Navigation**: Smooth-scrolling category navigation bar with dynamic scrollspy (`IntersectionObserver`) highlighting the active category as the user scrolls.
4. **Dietary Filter**: Interactive filter buttons (`All`, `Vegetarian`, `Gluten-Free`) letting users instantly filter visible menu items across categories.
5. **Menu Grid**: Clean 2-column (desktop) / 1-column (mobile) layout displaying item name, description, price formatted in EUR (€), and subtle dietary badges (`V`, `GF`, `Spicy 🌶️`).
6. **Weekly Opening Hours**: Full weekly schedule table with today's row highlighted via a `TODAY` badge and amber accent border. Muted styling for closed days.
7. **Footer**: Quick contact info, phone, Instagram link (`@cardamomhouse`), directions via Google Maps, and single-click print support.
8. **Print Layout**: Custom `@media print` stylesheet optimizing the menu into a clean, 1-page printable menu (hiding navigation & demo controls).
9. **Accessibility**: Semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<footer>`), visible focus states, high contrast ratios, screen-reader friendly attributes, and `@media (prefers-reduced-motion: reduce)` support.
10. **Interactive State Switcher**: Floating glassmorphism bar at the bottom for reviewers to quickly toggle between `open`, `closed`, and `special-sold-out` demo states.

---

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/cardamom-house-menu.git
cd cardamom-house-menu
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build & Linting Verification
```bash
# Type check and build production output
npm run build

# Run ESLint check
npm run lint
```

---

## 🧠 Design Decisions & Trade-Offs

### 1. Brand Color & Aesthetic
- Chosen palette: Warm ivory background (`#F8F4EE`), deep espresso typography (`#2B211B`), and warm amber (`#B45309`) accents.
- Reflects Cardamom House's identity in Santos/Bica, Lisbon — feeling like a warm, artisanal boutique café rather than a generic digital template.

### 2. State Management & URL Parameters
- State is driven by URL query parameters (`?state=open|closed|special-sold-out`), making every state directly bookmarkable and shareable.
- Server Components handle server-side state derivation (`deriveState`), rendering optimal HTML for fast mobile loads standing outside the café.

### 3. Client vs Server Boundary
- The core page is rendered as a Next.js Server Component for performance and SEO.
- Interactive features (scrollspy nav, dietary filtering, demo switcher) are cleanly isolated into lightweight Client Components.

---

## 🔮 What I'd Build Next (Future Enhancements)

1. **Automatic Lisbon Timezone Detection**: Integrate real-time `Europe/Lisbon` timezone logic so the open status updates automatically based on live wall-clock time.
2. **Bilingual Support (PT / EN)**: Add a quick language toggle for Portuguese locals and international travelers.
3. **High-Res Food Photography**: Add lazy-loaded food photography with Blurhash placeholder skeletons.
4. **Order / Table Wait Time Indicator**: Display live estimated wait times during busy weekend brunch hours.

---

## 📹 Submission Video Walkthrough Outline

- **30-Second Demo**: Overview of the responsive mobile layout, state toggles (`open`, `closed`, `special-sold-out`), dietary filtering, and scrollspy navigation.
- **Proud Decision**: Using pure CSS `@theme` variables combined with Next.js Server Component state derivation to achieve sub-second load performance on mobile networks.
- **Decision to Revisit**: Adding client-side local storage or cookie persistence for dietary preferences across page refreshes.
- **Question Wish**: Clarification on whether international currency switching (e.g. USD/GBP display for tourists) or table ordering is planned for future phases.
