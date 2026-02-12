# Project: JIMBA - Premium Ghanaian Smock Heritage Brand Website

## Project Purpose
Building a luxury heritage website for JIMBA using Next.js. The site showcases traditional Northern Ghanaian handwoven smocks for professionals while maintaining scalable cultural legitimacy and brand authority.

**Design Reference**: palmer-dinnerware.com (refined minimalism, high-impact imagery, elegant typography, smooth interactions)

**Brand Core**: "Woven heritage. Worn with purpose." – Professionals carrying African identity into modern leadership spaces with dignity and authenticity.

---

## Brand Strategy Context
Reference: JIMBA_Brand_Strategy_Playbook.pdf (in project root)

### Brand Definition
- **Position**: Premium cultural authority for working professionals (not ultra-luxury)
- **Archetype**: The Custodian (protecting Northern craftsmanship, translating to modern dignity)
- **Customer Signal**: "I am modern, but I know where I come from"
- **Core Lines**:
  - Heritage Line: Traditional silhouettes for ceremonies/authority (550–600 GHS)
  - Statesman Line: Refined professional wear for offices (700–850 GHS)
  - Future Line: Contemporary global fashion using smock fabric (900–1,200 GHS)

### Market Position
- First 500 customers: Known professionals
- Leverage: Fugu Wednesday visibility + referral networks
- Sales channels: WhatsApp Business (primary), Instagram showroom, credibility website
- Key audiences: Professionals, institutions, diaspora, gifting

### Brand Values
- Preserve Northern weaving traditions economically
- Place African identity inside modern power spaces
- Build globally respected African heritage label over time
- Institutional demand (government, corporate adoption)

---

## Tech Stack

### Core Framework
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (strict mode required)
- **Styling**: Tailwind CSS + custom CSS modules for animations
- **Database**: Supabase (for future CMS/order management)
- **Authentication**: NextAuth.js (for future admin panel)

### Frontend Libraries
- **Image Optimization**: next/image (critical for performance in Ghana)
- **Form Handling**: React Hook Form + Zod validation
- **State Management**: React Context (minimal) or Zustand if needed
- **UI Components**: Custom component library (no shadcn/ui—build proprietary design)
- **Animations**: Framer Motion for smooth scroll reveals and interactions
- **Icons**: Heroicons or custom SVG

### Development Tools
- **Package Manager**: npm or pnpm
- **Code Quality**: ESLint + Prettier
- **Type Checking**: TypeScript strict mode
- **Testing**: Jest + React Testing Library (optional for Phase 1)
- **Deployment**: Vercel (native Next.js support, fast CDN for Africa region)

### Performance Priorities
- Image optimization (WebP, AVIF, responsive sizes)
- Code splitting by route
- Font subsetting (Ghanaian users on limited bandwidth)
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- Mobile-first build (Ghana = 80%+ mobile traffic)

---

## Project Structure

```
jimba-website/
├── public/
│   ├── images/
│   │   ├── products/          # Product photography (optimized)
│   │   ├── weavers/           # Weaver portraits
│   │   ├── process/           # Weaving process images
│   │   ├── hero/              # Hero section backgrounds
│   │   └── collections/       # Collection-specific images
│   ├── fonts/                 # Custom font files (if using self-hosted)
│   └── icons/                 # SVG icons
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles + CSS variables
│   │   ├── (routes)/
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── collections/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/page.tsx
│   │   │   ├── shop/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [product-id]/page.tsx
│   │   │   ├── weavers/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [weaver-id]/page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── journal/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/page.tsx
│   │   ├── api/
│   │   │   ├── contact/route.ts       # Contact form submission
│   │   │   ├── whatsapp/route.ts      # WhatsApp integration (future)
│   │   │   └── products/route.ts      # Product data endpoint (future CMS)
│   │   └── robots.txt / sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── NavBar.module.css
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedCollections.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── WeaverProfiles.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── *.module.css
│   │   ├── ui/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── WeaverCard.tsx
│   │   │   ├── CollectionCard.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── *.module.css
│   │   └── common/
│   │       ├── Logo.tsx
│   │       ├── Badge.tsx
│   │       └── LoadingSpinner.tsx
│   ├── data/
│   │   ├── products.json      # Product catalog
│   │   ├── weavers.json       # Weaver profiles
│   │   ├── collections.json   # Collection metadata
│   │   └── navigation.json    # Nav structure
│   ├── lib/
│   │   ├── constants.ts       # Brand constants, pricing tiers
│   │   ├── utils.ts           # Utility functions
│   │   ├── cn.ts              # Classname merger
│   │   ├── api.ts             # API client helpers
│   │   └── types.ts           # TypeScript interfaces
│   ├── styles/
│   │   ├── animations.css     # Keyframe animations
│   │   ├── typography.css     # Font declarations, sizing
│   │   ├── colors.css         # CSS variables for brand palette
│   │   └── responsive.css     # Media query helpers
│   └── hooks/
│       ├── useInView.ts       # Scroll reveal hook
│       ├── useScrollPosition.ts
│       └── useWindowSize.ts
├── .env.local                 # Local environment variables (DO NOT COMMIT)
├── .env.example               # Template for env variables
├── .gitignore                 # Git ignore rules
├── CLAUDE.md                  # This file (Claude Code context)
├── JIMBA_Brand_Strategy_Playbook.pdf  # Brand reference
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Dependencies
├── package-lock.json          # Dependency lock file
└── README.md                  # Project documentation
```

---

## Design System & Aesthetics

### Color Palette (CSS Variables)
```css
/* Brand Colors - Earth tones reflecting Ghanaian textiles */
--color-primary: #8B4513;        /* Rich brown (weaving tradition) */
--color-secondary: #D2691E;      /* Chocolate */
--color-accent: #C41E3A;         /* Deep burgundy (cultural statement) */
--color-gold: #D4AF37;           /* Subtle gold accent */

/* Neutrals */
--color-white: #FFFFFF;
--color-off-white: #F8F7F5;      /* Warm white */
--color-gray-light: #E8E6E1;
--color-gray-medium: #8B8680;
--color-dark: #1A1815;

/* Typography */
--font-display: 'Playfair Display', serif;      /* Bold, distinctive headlines */
--font-body: 'Crimson Text', serif;             /* Refined body text */
--font-sans: 'Inter', system-ui, sans-serif;    /* Accessibility fallback */

/* Spacing */
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-2xl: 4rem;

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 12px rgba(0,0,0,0.1);
--shadow-lg: 0 12px 24px rgba(0,0,0,0.15);
```

### Typography
- **Display Font**: Playfair Display (serif) — Headlines, brand statements
- **Body Font**: Crimson Text (serif) — Long-form content, stories
- **Sans-serif Fallback**: Inter — UI elements, navigation
- **Font Hierarchy**: 
  - H1: 3.5rem (hero)
  - H2: 2.5rem (section headers)
  - H3: 1.75rem (subsections)
  - Body: 1.125rem
  - Small: 0.875rem

### Design Direction
- **Aesthetic**: Refined minimalism with maximalist storytelling
- **Hero Section**: Full viewport, centered text over stunning smock photography
- **Product Gallery**: Clean grid (2-3 cols desktop, 1-2 mobile), hover scale animations
- **Spacing**: Generous negative space to emphasize quality and craft
- **Motion**: Smooth scroll reveals, subtle fade-ins, elegant hover states
- **Photography**: High-quality, detailed close-ups of weaving, professional portraits of weavers
- **CTAs**: Elegant, never aggressive—"Contact Us," "Learn More," "See Collection"

### Reference Benchmarks
- **palmer-dinnerware.com**: Minimal hero, refined grid, generous spacing
- **Key learnings**: Less is more, quality over quantity, let imagery speak

---

## Key Features to Build

### Phase 1 (MVP - Weeks 1-4)
- [ ] Home page with hero + featured collections
- [ ] About page (brand story, cultural mission)
- [ ] Shop/Collections page (all three product lines)
- [ ] Product detail pages (with weaver attribution)
- [ ] Contact form (email integration)
- [ ] Responsive mobile design
- [ ] Performance optimization (Core Web Vitals)

### Phase 2 (Enhancement - Weeks 5-8)
- [ ] Weavers page (individual profiles + stories)
- [ ] Blog/Journal section (heritage storytelling)
- [ ] WhatsApp integration for order inquiries
- [ ] Email newsletter signup
- [ ] Instagram feed integration (optional)
- [ ] Analytics & SEO refinement

### Phase 3 (Scale - Future)
- [ ] E-commerce backend (Supabase + Stripe)
- [ ] Admin CMS (Sanity.io or Payload CMS)
- [ ] Order management system
- [ ] Inventory tracking
- [ ] Customer accounts/profiles

---

## Content & Data Structure

### Products Data (src/data/products.json)
```json
{
  "products": [
    {
      "id": "statesman-001",
      "name": "Royal Blue Statesman",
      "collection": "statesman",
      "price": 750,
      "priceCurrency": "GHS",
      "description": "A refined professional smock in royal blue traditional patterns...",
      "images": ["statesman-001-1.jpg", "statesman-001-2.jpg"],
      "weaver": {
        "id": "weaver-001",
        "name": "Alhaji Mohammed",
        "region": "Tamale",
        "story": "Master weaver with 30 years of experience in double-weave technique..."
      },
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "materials": "100% handwoven cotton",
      "careInstructions": "...",
      "symbolism": "The indigo represents authority and trust in Northern traditions..."
    }
  ]
}
```

### Weavers Data (src/data/weavers.json)
```json
{
  "weavers": [
    {
      "id": "weaver-001",
      "name": "Alhaji Mohammed",
      "age": 58,
      "region": "Tamale, Northern Region",
      "yearsExperience": 30,
      "specialization": "Double-weave indigo",
      "bio": "Master weaver representing third generation of craftspeople...",
      "portraitImage": "alhaji-mohammed.jpg",
      "processImages": ["process-1.jpg", "process-2.jpg"],
      "story": "Detailed narrative about their craft, family, cultural significance..."
    }
  ]
}
```

### Collections Data (src/data/collections.json)
```json
{
  "collections": [
    {
      "id": "heritage",
      "name": "Heritage Line",
      "description": "Strictly traditional silhouettes for ceremonies and authority...",
      "priceRange": "550–600 GHS",
      "targetAudience": "Early professionals seeking accessible premium heritage",
      "heroImage": "heritage-hero.jpg",
      "products": ["heritage-001", "heritage-002"]
    }
  ]
}
```

---

## Code Conventions & Standards

### TypeScript
```typescript
// Always use strict mode
// Define interfaces for all data structures
interface Product {
  id: string;
  name: string;
  price: number;
  priceCurrency: "GHS" | "USD" | "EUR";
  description: string;
  weaver: Weaver;
}

interface Weaver {
  id: string;
  name: string;
  region: string;
  bio: string;
  yearsExperience: number;
}

// Use const assertions for literals
export const COLLECTIONS = {
  HERITAGE: "heritage",
  STATESMAN: "statesman",
  FUTURE: "future",
} as const;
```

### React Components
- **Functional components only**—use hooks exclusively
- **Naming convention**: PascalCase for components, camelCase for utilities
- **Props interface**: Always define with `interface ComponentProps { }`
- **Error boundaries**: Wrap data-fetching components
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation tested

### CSS Modules
```typescript
// Use CSS Modules for component-scoped styling
import styles from './ProductCard.module.css';

export function ProductCard() {
  return <div className={styles.container}> ... </div>;
}
```

- **Naming**: `camelCase` for class names in CSS
- **BEM-lite**: Use descriptive nested selectors when needed
- **Tailwind**: Use for utility classes, CSS Modules for complex components
- **Animations**: Define in `styles/animations.css`, apply via classes

### File Naming
- Components: `PascalCase` (Header.tsx)
- Utilities: `camelCase` (useScrollReveal.ts)
- Data files: `camelCase` (products.json)
- Styles: `kebab-case` (animations.css) or `PascalCase.module.css`
- Types: Same file or `types.ts`

### Imports Organization
```typescript
// 1. React & Next.js
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 2. Third-party libraries
import { motion } from 'framer-motion';

// 3. Local components
import { Header } from '@/components/layout/Header';

// 4. Types
import type { Product } from '@/lib/types';

// 5. Data & utilities
import { products } from '@/data/products.json';
import { cn } from '@/lib/utils';
```

---

## Next.js Configuration

### next.config.ts
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression & performance
  compress: true,
  swcMinify: true,

  // Headers for security & caching
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for old URLs (if migrating)
  async redirects() {
    return [];
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default nextConfig;
```

### Metadata & SEO
```typescript
// src/app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JIMBA – Premium Ghanaian Smock Brand',
  description: 'Woven heritage. Worn with purpose. Discover authentic Northern Ghanaian smocks for professionals.',
  keywords: 'Ghanaian smock, heritage fashion, African apparel, professional wear',
  openGraph: {
    title: 'JIMBA',
    description: 'Premium heritage smocks for African professionals',
    image: '/og-image.jpg',
    type: 'website',
  },
};
```

---

## Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Production build
npm run start            # Run production build locally
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript check
npm run format           # Format code with Prettier

# Database/CMS (Phase 2+)
npm run seed             # Seed initial data
npm run migrate          # Run database migrations

# Deployment
npm run deploy           # Deploy to Vercel (if configured)
```

---

## Environment Variables (.env.local)

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://jimba.example.com
NEXT_PUBLIC_BRAND_NAME=JIMBA

# Email (Resend or SendGrid)
RESEND_API_KEY=your_api_key_here
NEXT_PUBLIC_CONTACT_EMAIL=hello@jimba.com

# Analytics (Google Analytics, Mixpanel, etc.)
NEXT_PUBLIC_GA_ID=G_XXXXXXX

# Future: E-commerce
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx

# Future: CMS
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=xxxxx
SUPABASE_SERVICE_ROLE_KEY=xxxxx

# Future: WhatsApp Integration
WHATSAPP_BUSINESS_PHONE_NUMBER_ID=xxxxx
WHATSAPP_ACCESS_TOKEN=xxxxx
```

---

## Page Routes & Structure

| Route | Purpose | Components |
|-------|---------|------------|
| `/` | Home | Hero, Featured Collections, Brand Intro, CTA |
| `/about` | Brand Story | Heritage Story, Cultural Mission, Values, Team |
| `/collections` | Collection Overview | All Three Lines (Heritage, Statesman, Future) |
| `/shop` | Product Catalog | Product Grid, Filters, Pricing |
| `/shop/[product-id]` | Product Detail | Images, Weaver Story, Specs, CTAs |
| `/weavers` | Artisan Profiles | Grid of Weavers, Individual Stories |
| `/weavers/[weaver-id]` | Weaver Profile | Biography, Portfolio, Process Photos |
| `/contact` | Contact Page | Form, WhatsApp Link, Email, Location |
| `/journal` | Blog/Stories | Heritage Articles, Cultural Content |
| `/journal/[slug]` | Blog Post | Long-form storytelling |

---

## Performance Targets (Ghana Context)

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTFB (Time to First Byte)**: < 500ms

### Image Optimization
- Use `next/image` for all product/weaver photos
- Provide multiple image sizes (mobile: 640px, tablet: 1080px, desktop: 1920px)
- Use WebP/AVIF with JPEG fallback
- Lazy load below-fold images

### Code Splitting
- Route-based code splitting (Next.js automatic)
- Dynamic imports for non-critical sections
- Tree-shake unused Tailwind classes

### Bandwidth Awareness
- 3G throttling on mobile devices (test regularly)
- Remove unused fonts, libraries
- Minimize third-party scripts

---

## Styling Strategy

### Tailwind CSS
- Primary styling tool for layout, spacing, responsive design
- Configure with brand color palette
- Customize with `tailwind.config.ts`

### CSS Modules
- Use for component-specific styles
- Complex animations (scroll reveals, hover effects)
- BEM-lite naming convention

### Custom CSS
- `styles/animations.css` — Keyframe animations
- `styles/typography.css` — Font declarations, sizes
- `styles/colors.css` — CSS custom properties

### Example Animation (animations.css)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

.fadeInUp-delay-1 { animation-delay: 0.1s; }
.fadeInUp-delay-2 { animation-delay: 0.2s; }
.fadeInUp-delay-3 { animation-delay: 0.3s; }
```

---

## Important Brand Notes for Claude

### Messaging Priorities
- Every product must include weaver attribution
- Use language: "Woven heritage. Worn with purpose."
- Avoid aggressive marketing—positioning is subtle cultural authority
- Emphasize authenticity, craftsmanship, institutional adoption
- Pricing not emphasized until product detail page

### Design Restrictions
- Do NOT use generic AI aesthetics (avoid Inter-only, purple gradients, etc.)
- DO use serif fonts (Playfair Display + Crimson Text)
- DO emphasize photography over graphics
- DO use earth tones reflecting Ghanaian textiles
- DO create breathing room (white space)

### Content Tone
- Professional but warm
- Storytelling-focused (especially weavers)
- Emphasize tradition + modernity balance
- Avoid fake urgency or scarcity language

### Mobile-First Considerations
- Most traffic from Ghana (80%+ mobile)
- Low bandwidth assumptions
- Touch-friendly buttons (48px minimum)
- Readable text on small screens (no tiny fonts)

---

## Deployment & Hosting

### Recommended: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel deploy

# Production
vercel deploy --prod
```

**Why Vercel**:
- Native Next.js support
- Automatic image optimization
- CDN with African region support
- Environment variable management
- Automatic deployments from Git

### Alternative: Self-Hosted
- Railway, Render, or custom VPS
- Requires manual deployment pipeline
- More control, more maintenance

### DNS & Domain
- Point domain to Vercel (CNAME records)
- Set up SSL certificate (automatic with Vercel)
- Consider Cloudflare for additional CDN/DDoS protection

---

## Git Workflow

```bash
# Clone and setup
git clone <repo-url>
cd jimba-website
npm install

# Create feature branch
git checkout -b feature/component-name

# Commit convention
git commit -m "feat: add ProductCard component"
# Types: feat, fix, docs, style, refactor, test, chore

# Push and create PR
git push origin feature/component-name
```

### .gitignore
```
node_modules/
.next/
out/
.env.local
.env.*.local
*.log
.DS_Store
.idea/
.vscode/
dist/
build/
JIMBA_Brand_Strategy_Playbook.pdf
```

---

## Notes for Claude Code

### When Building Features
1. Always reference the brand strategy playbook for messaging and positioning
2. Ensure all product displays include weaver name and origin
3. Use data files (products.json, weavers.json) instead of hardcoding
4. Create reusable components—maintain DRY principle
5. Test responsive design (mobile first)
6. Optimize images before committing (use ImageOptim or Squoosh)
7. Use TypeScript strict mode—no `any` types
8. Add ARIA labels and semantic HTML for accessibility
9. Consider WhatsApp integration early (key sales channel)
10. Keep Ghana's mobile/bandwidth constraints in mind

### When I Say "Polish This"
- Improve animations and transitions
- Add hover states to interactive elements
- Enhance typography hierarchy
- Improve white space and breathing room
- Add scroll-reveal animations
- Refine color contrast for accessibility

### When I Need Iterations
- I may ask to change specific sections
- Use comments or TODOs for incomplete work
- Keep component APIs stable (avoid breaking changes)
- Test all changes before committing

---

## Success Criteria (MVP)

- [ ] Home page loads in <2.5s on 3G
- [ ] All images responsive and optimized
- [ ] Mobile responsiveness (tested on iPhone + Android)
- [ ] Product cards beautiful and functional
- [ ] Contact form working with email notification
- [ ] SEO metadata complete and correct
- [ ] Accessibility score >90 (Lighthouse)
- [ ] Performance score >85 (Lighthouse)
- [ ] TypeScript strict mode, no errors
- [ ] Weaver stories prominently featured
- [ ] Brand aesthetic cohesive across all pages
- [ ] Ready for social media sharing (OG images)

---

## Questions for Claude Code?
Use `#` command during session to add refinements to this file as you build.
Example:
```
# Always use framer-motion for scroll reveals
# Test images at 3G speeds before committing
# Keep hero section under 200KB total size
```

**Happy building! JIMBA is going to be stunning. 🌍**
