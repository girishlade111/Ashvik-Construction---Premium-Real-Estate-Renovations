# Ashvik Construction — Premium Real Estate & Renovations

A premium, minimal, and fast marketing website for **Ashvik Construction** — specialists in
government-officer bungalow renovations and premium real estate sales/rentals across Mumbai.

🌐 **Live site:** https://ashvik-construction-mumbai.netlify.app

## Features

- **Home page** — hero section with premium dark/gold branding, featured properties, testimonials
- **Properties** — searchable listing of flats, apartments, and villas for sale and rent
- **Property cards** — image carousel (swipe on touch devices, arrows + pagination dots on desktop)
- **Price history chart** — animated SVG line chart showing historical price trends for properties listed for sale
- **Services** — renovation and construction service offerings
- **Portfolio** — completed projects showcase
- **About & Contact** — company info, enquiry/contact form, sticky contact widget
- **Admin dashboard** — internal dashboard view for managing listings
- **Multi-language UI** — English / regional language toggle

## Tech Stack

- React 19 + TypeScript
- Vite 6 (build tooling)
- Tailwind CSS (via CDN) + Google Fonts (Inter, Playfair Display)
- Zero-backend: fully client-side, sample data in `constants.ts`

## Quick Start

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev      # start dev server (default http://localhost:3000)
npm run build    # production build -> dist/
```

No environment variables are required — the app ships with built-in sample data.

## Project Structure

```
├── index.html            # HTML shell + SEO meta tags
├── index.tsx             # React entry point
├── App.tsx               # App shell: navigation state, language toggle
├── types.ts              # Shared TypeScript types (Property, Project, Page, Language)
├── constants.ts          # Sample properties, projects, testimonials, price history
├── components/           # Reusable UI: Header, Footer, PropertyCard, ProjectCard,
│                         #   PriceHistoryChart, SearchBar, ContactForm, StickyContact, ...
├── pages/                # Home, Properties, Services, Portfolio, About, Contact,
│                         #   AdminDashboard
└── vite.config.ts        # Vite config (@ alias, dev server)
```

## Deployment

Static production build (`npm run build`) — deployed to Netlify as a static site
(`https://ashvik-construction-mumbai.netlify.app`). Any static host (GitHub Pages,
Cloudflare Pages) works the same way: serve the `dist/` directory.

## License

All rights reserved — Ashvik Construction.

---

Built by Girish Lade · https://ladestack.in
