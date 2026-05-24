# TaxBuddy Website Structure & Design Plan

**Date:** 2026-05-23
**Status:** Draft v2
**Depends on:** [Website Transition Spec](taxbuddy-website-transition-spec.md) (hosting decided: Azure Static Web Apps)
**Brand reference:** [TaxBuddy Brand Guide](https://www.notion.so/369e8655637781efaebdd8fc2c8f85b9) (Notion)

---

## Design foundation

### Color system

Primary brand color: **Slate Blue `#6A5ACD`** (CSS named color, true periwinkle family).

Full color system documented in the [Notion Brand Guide](https://www.notion.so/369e8655637781efaebdd8fc2c8f85b9). Key tokens for the website:

| Role | Token | Hex |
|------|-------|-----|
| Primary button / links | primary-600 | `#6A5ACD` |
| Button hover | primary-700 | `#5244A8` |
| Accent (labels, highlights) | accent-amber | `#C8962E` |
| Accent hover | accent-amber-dark | `#8A6520` |
| Accent light (backgrounds) | accent-amber-light | `#F5ECD8` |
| Tertiary (reserved) | tertiary-teal | `#1D7A6A` |
| Heading text | neutral-ink | `#141220` |
| Body text | neutral-muted | `#4A4660` |
| Secondary text | neutral-slate | `#6E6A82` |
| Page tint background | primary-50 | `#F6F5FB` |
| Card/section background | primary-100 | `#ECEAF7` |
| Borders | neutral-border | `#E5E4EB` |
| Dark sections (hero, CTA, footer) | neutral-ink | `#141220` |
| Badge/pill text | primary-700 | `#5244A8` |
| Badge/pill background | primary-100 | `#ECEAF7` |

**Accent color usage:** Warm amber is used sparingly for personality — section labels on dark backgrounds, step numbers, decorative accents, hover highlights. It is not a second primary. The cool/warm tension between Slate Blue and amber creates a retro, intentional feel. Deep teal is held in reserve as a tertiary if a third color is needed (e.g., success states, secondary feature categories).

### Typography

- Headlines: Instrument Serif (Google Fonts CDN)
- Body: Instrument Sans (Google Fonts CDN)
- Fallback stack: Georgia, 'Times New Roman', serif (headlines) / system-ui, sans-serif (body)
- Display: 32-36px / weight 400
- H1: 28px / weight 400
- H2: 22px / weight 400
- H3: 18px / weight 500 (Instrument Sans, not Serif — used for smaller structural headings)
- Body: 16px / weight 400 / line-height 1.7
- Small: 13-14px / weight 400
- Labels/overlines: 11-12px / weight 500 / letter-spacing 0.5-1px / uppercase (Instrument Sans)
- Only two weights: 400 and 500. No bold (700).

**Typography rationale:** Instrument Serif + Instrument Sans are a matched superfamily — they share vertical metrics and spacing logic, so switching between headline and body feels intentional rather than jarring. The serif headlines give TaxBuddy an editorial, hand-designed quality that distinguishes it from template-built AI company websites. Both fonts are served via Google Fonts CDN (no download or license cost). Georgia sits in the fallback stack for the same warm serif personality if fonts fail to load.

**Design reference sites:** Legora (legora.com) and Harvey AI (harvey.ai) — both legal AI startups selling to professional services firms — use similar serif+sans pairings with warm accent colors on dark sections. TaxBuddy's approach draws from this pattern while using a distinctive color palette (Slate Blue + amber vs. their darker/warmer schemes). Penny (yourlastbusyseason.com), a direct competitor, uses a warm cream palette and friendly tone — TaxBuddy differentiates with more structure, editorial typography, and a confident rather than cozy voice.

### Design principles

1. **Crafted over templated.** Serif headlines, warm accents, and intentional typography signal that this site was designed, not generated. Every choice should feel deliberate.
2. **Direct over aspirational.** Lead with what TaxBuddy does, how it works, and why it matters. Layer story and vision on top of that functional base.
3. **Accessible, not salesy.** Let interested firms self-select. Don't push; present clearly.
4. **Professional warmth.** Serious enough for a firm partner, approachable enough for a solo practitioner. The retro/editorial personality adds character without undermining trust.
5. **Retro-modern personality.** Subtle aged quality through typography and warm accent color — not through literal vintage textures or illustrations. Think vintage letterpress updated for screens.

---

## Site map

```
taxbuddy.online/
├── / ........................ Homepage (hero + workflow + features + CTA)
├── /product ................. Product detail (deeper workflow, screenshots, security section)
├── /about ................... Founder story, mission, values
├── /blog .................... Blog listing (hidden in nav until content exists)
│   └── /blog/[slug] ......... Individual blog posts
└── /contact ................. Contact form / demo booking
```

### Navigation

**Header:** TaxBuddy wordmark (Instrument Serif) | Product | About | [Book a demo] (primary button)

**Footer:** TaxBuddy wordmark | Product | About | Blog | Contact | Privacy | Terms | LinkedIn

**Notes:**
- Blog link hidden from header nav until posts exist. Present in footer only.
- Security is a section within the Product page, not a standalone page. Keeps the site lean while still addressing firm concerns.
- "Book a demo" is the persistent CTA in the header, not "Sign up" or "Try free."
- No pricing page at launch. Pricing is handled through demo conversations.
- Sub-pages should be short and focused. The homepage does the heavy lifting; interior pages provide depth for those who seek it.

---

## Page-by-page content plan

### Homepage `/`

The homepage is the direct+functional core. Every section earns its place by answering a question a visiting firm owner would have.

**Section 1 — Hero**
- Badge pill: "Built for Canadian tax firms"
- Headline: Agentic T1 filing that works the way your firm does
- Subhead: 1-2 sentences on the core flow (upload → AI processes → you review)
- CTA: [Book a demo] primary + [See how it works] secondary
- No background image. Clean gradient from primary-50 to white.

*Design: centered text, generous padding, no clutter. Badge → headline → subhead → CTAs.*

**Section 2 — Workflow visualization**
- Dark background (neutral-ink `#141220`)
- Section label in amber (`#C8962E`), uppercase, small: "HOW IT WORKS"
- Headline in Instrument Serif, light text: "Three steps. You stay in control."
- 3-panel flow: Client intake → AI processing → Your review
- Each panel: Tabler icon in amber, step number in amber ("01", "02", "03"), title in Instrument Serif, description in Instrument Sans
- This section should communicate "I understand what this product does" in 5 seconds.

*Design: horizontal 3-column on desktop, vertical stack on mobile. Each panel is a rounded card on dark bg with subtle white border. Amber accents (step numbers, icons, section label) create warmth against the dark background — this is the primary location where the accent color earns its keep.*

**Section 3 — Three feature cards**
- Document intake: "Clients upload slips and docs through a secure portal. No more email chains and lost PDFs."
- AI-prepared returns: "Agents extract data, classify slips, populate schedules, and flag discrepancies. Full audit trail."
- You stay in control: "Every return goes through your review. You have decision-making authority on all deliverables."

*Design: 3 equal cards, each with icon (from Tabler icon set), title in Instrument Serif, description in Instrument Sans. Border, no fill. Icon sits in a primary-100 rounded square.*

**Section 4 — Pain point / social proof**
- Pull a real quote or insight from customer discovery discussions
- Frame as "What we hear from firms every season"
- Tinted background (primary-50 or primary-100)

*Design: centered quote in Instrument Serif italic with attribution in Instrument Sans. Simple. As real testimonials come in, this section evolves into a carousel or grid. The italic cut of Instrument Serif is particularly elegant here — loose and calligraphic.*

**Section 5 — Trust signals grid**
- 2x2 grid of compact feature cards with icons:
  - Encrypted and secure: "PII redacted, Azure-hosted, no model training on your data"
  - Canadian-first: "CRA forms, Canadian tax rules, T1 schedules from day one"
  - Full audit trail: "Every extraction, classification, and calculation is logged and citable"
  - Scale your capacity: "Handle more clients without proportionally growing headcount"

*Design: 2-column grid, each card has icon + title + one-line description. Light borders.*

**Section 6 — Bottom CTA**
- Dark background section (neutral-ink)
- Headline: "Ready to see it in action?"
- Subhead: "Book a 15-minute demo. See your workflow, not a generic pitch."
- CTA: [Book a demo] primary + [Contact us] ghost button

*Design: centered, dark bg, high contrast. Mirror the hero CTA structure.*

**Section 7 — Footer**
- TaxBuddy wordmark in Instrument Serif + copyright
- Nav links: Product | About | Blog | Contact
- Legal: Privacy | Terms
- Social: LinkedIn

---

### Product page `/product`

Goes deeper than the homepage on how TaxBuddy works. Should be short and focused — the homepage does the selling, this page provides depth for those who want it.

**Section 1 — Product hero**
- Headline in Instrument Serif: "How TaxBuddy works"
- Brief positioning statement in Instrument Sans

**Section 2 — Detailed workflow**
- Expanded version of the homepage workflow visualization
- Step 1: Client intake — what clients see, how documents are collected, supported formats
- Step 2: AI processing — what the agents do (extraction, classification, schedule population), what gets flagged
- Step 3: Practitioner review — review interface, approval flow, audit trail access

Each step gets its own row with description on one side, product screenshot/mockup on the other (alternating left/right). Step numbers and labels use amber accent on dark backgrounds where applicable.

**Section 3 — Feature deep dives**
- Expandable sections or anchor-linked blocks covering:
  - Supported slip types (T4, T5, T2202, etc.)
  - Document handling and OCR
  - Agent processing pipeline
  - Review and approval workflow
  - Audit trail and citations

**Section 4 — Security and data handling**
- Integrated into the product page as a full section (not a separate page)
- Section label in amber: "SECURITY"
- Content areas: infrastructure overview (Azure-hosted, encrypted at rest and in transit), data handling (PII redaction, no SSN collection), AI data policy (no model training on client data, data isolation), access controls (client-practitioner separation)
- Compliance roadmap (SOC 2 intent, current certifications if any)
- Clean, scannable design. Trust signal icons with expanded descriptions.

**Section 5 — CTA**
- Same pattern as homepage bottom CTA

---

### About page `/about`

**Section 1 — Mission**
- Reframe the founder quote from the current site
- Nathan's story: accounting student at University of Waterloo, spent a season inside a firm, saw the pain firsthand
- Why TaxBuddy exists: "I built what I wished existed during tax season"
- This personal narrative is a differentiator — lean into it, don't hide behind corporate language

**Section 2 — Vision**
- Where TaxBuddy is headed (agentic tax workflows, expanding beyond T1)
- "We're building the infrastructure for the future of Canadian tax preparation"

**Section 3 — Values**
- Accuracy over speed
- Practitioner authority (AI assists, you decide)
- Canadian-first design
- Transparency in how AI processes data

---

### Blog `/blog`

**Structure:**
- Listing page with cards (title, date, excerpt, category tag)
- Individual post pages rendered from markdown files in the repo
- Categories: Product updates, Tax insights, Company news

**Launch state:** Hidden from main navigation. Link in footer only. No posts at launch — the infrastructure is ready for when content is produced.

**Content strategy alignment:** Per the Notion branding notes, planned content channels include LinkedIn (primary) and short-form social. Blog posts can be longer-form versions of LinkedIn content, tax season insights, and product updates.

---

### Contact page `/contact`

- Contact form (name, email, firm name, message)
- "Or email us directly at nathan@taxbuddy.online"
- Optional: Calendly embed for demo booking (if set up)
- No phone number required in form (lower friction)

---

## Responsive design

- **Desktop:** Full layouts as described above. Max content width: 1120px, centered.
- **Tablet:** Stack 3-column layouts to 2 columns. Reduce padding.
- **Mobile:** Single column throughout. Hamburger nav. Workflow visualization stacks vertically. Feature cards stack. CTAs go full-width.

Target: Lighthouse mobile performance score > 90.

---

## Component library (for implementation)

Reusable components to build across all pages:

| Component | Description |
|-----------|-------------|
| `NavBar` | Logo + nav links + CTA button. Sticky on scroll. |
| `HeroBanner` | Badge + headline + subhead + CTA group. Supports light/dark bg. |
| `FeatureCard` | Icon + title + description. Border variant and filled variant. |
| `WorkflowPanel` | Dark-bg panel with step cards and arrows. |
| `TrustGrid` | 2x2 icon + text grid for trust signals. |
| `CTABanner` | Dark-bg CTA section with headline + subhead + buttons. |
| `Badge` | Pill component. primary-100 bg, primary-700 text. |
| `Button` | Primary, secondary (outline), tertiary (tinted) variants. |
| `Footer` | Logo + nav columns + legal + social links. |
| `BlogCard` | Thumbnail + title + date + excerpt + category tag. |
| `ContactForm` | Name, email, firm name, message fields + submit. |
| `PageHeader` | Title + optional subhead for interior pages. |
| `ExpandableSection` | Click-to-expand for FAQ and feature deep dives. |
| `SectionDivider` | Subtle divider between page sections. |

---

## Messaging framework

### Positioning statement
TaxBuddy is agentic tax preparation software that automates T1 filing for Canadian accounting firms. Clients upload documents, AI agents extract and classify data, and practitioners review and approve returns with full audit trails.

### Headline hierarchy
- **Primary:** "Agentic T1 filing that works the way your firm does"
- **Supporting:** "Your expertise leads. AI handles the rest."
- **Functional:** "Upload. Process. Review. File."

### Key messages (by audience concern)

| Concern | Message |
|---------|---------|
| "Will AI replace me?" | "You have decision-making authority on all deliverables. TaxBuddy prepares; you approve." |
| "Is my client data safe?" | "Azure-hosted, PII encrypted, no model training on your data. Full audit trail on every action." |
| "Does this actually work for Canadian tax?" | "Built CRA-first. T1 schedules, Canadian slips, Canadian tax rules from day one." |
| "Can this scale?" | "Handle more clients without proportionally growing headcount. Agents work in parallel." |
| "What if it gets something wrong?" | "Every extraction and classification is logged and citable. Discrepancies are flagged for your review." |

### Words we use
Agents, prepare, review, approve, audit trail, practitioners, firms, clients, documents, slips, returns, schedules

### Words we avoid
AI-powered (overused), disrupting, revolutionary, replace, chatbot, magic, effortless, guaranteed

---

## Implementation notes

### Framework
Decision pending (Next.js for stack consistency vs. Astro for lighter marketing site). See [Transition Spec](taxbuddy-website-transition-spec.md) open questions.

### Hosting
Azure Static Web Apps (Free tier). GitHub repo with GitHub Actions CI/CD.

### Contact form backend
Azure Function handling form submissions. Initial delivery: email notification to nathan@taxbuddy.online. Future: store in Notion database or dedicated leads table.

### Analytics
Lightweight — Plausible or Azure Application Insights. No heavy third-party scripts.

### Demo booking
Options: Calendly embed on contact page, or Cal.com (open source alternative). Defer decision until first implementation sprint.

---

## Open decisions

| Decision | Options | Notes |
|----------|---------|-------|
| Framework | Next.js vs. Astro | Blocks implementation start |
| Demo booking tool | Calendly vs. Cal.com vs. form-only | Can launch with form-only, add scheduling later |
| Blog CMS | Markdown files vs. Notion-as-CMS | Markdown files for v1, revisit if volume increases |
| Founder photo | Include on About page or not | Personal presence is a differentiator at this stage |
| Product screenshots | Real product UI vs. mockups | Depends on current state of app.taxbuddy.online |

### Resolved decisions

| Decision | Resolution | Date |
|----------|-----------|------|
| Hosting | Azure Static Web Apps (Free tier) | 2026-05-22 |
| Primary color | Slate Blue `#6A5ACD` | 2026-05-22 |
| Typography | Instrument Serif (headlines) + Instrument Sans (body) via Google Fonts CDN | 2026-05-23 |
| Accent color | Warm amber `#C8962E` | 2026-05-23 |
| Tertiary color | Deep teal `#1D7A6A` (reserved) | 2026-05-23 |
| Pricing page | Removed — pricing handled through demos | 2026-05-23 |
| Security page | Merged into Product page as a section | 2026-05-23 |

---

## Phasing

### Phase 1 — Minimum viable site (Week 1-2)
- Homepage (all 7 sections)
- Contact page with working form
- Basic About page (founder story + mission)
- Nav + footer components
- Google Fonts integration (Instrument Serif + Instrument Sans)
- Mobile responsive
- Deploy to Azure SWA with custom domain

### Phase 2 — Product depth (Week 3)
- Product page with detailed workflow and integrated security section
- Refine homepage based on feedback from first demo conversations

### Phase 3 — Content infrastructure (Week 4+)
- Blog infrastructure (listing + post template)
- First blog post(s)
- Unhide blog from navigation
- Analytics setup
- SEO basics (meta tags, sitemap, robots.txt)