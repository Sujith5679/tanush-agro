# Tanush Group of Companies — Website Specification

## 1. Project Overview

### Company

**Tanush Group of Companies**

Tanush Group of Companies is a diversified business group founded by **Tanush Raju**, headquartered in **Vellore, Tamil Nadu, India**.

The group operates across multiple business verticals:

1. Tanush Agro Traders
2. Tanush Cafe
3. Tanush Resort
4. Tanush Restaurant
5. Tanush Electricals
6. Tanush Logistics

The website is intended to be a **corporate showcase and digital presence**, not an e-commerce platform.

The primary purpose is to:

* Introduce Tanush Group
* Showcase its businesses
* Establish credibility
* Present its capabilities and work
* Showcase locations and experiences
* Provide contact information
* Create a professional foundation for future expansion

There should be **no shopping cart, checkout, online product sales, or e-commerce functionality**.

---

# 2. Core Website Objective

The website should answer four questions quickly:

### Who are we?

Tanush Group of Companies is a diversified business group operating across trade, hospitality, renewable energy/electricals and logistics.

### What do we do?

The group operates six business verticals serving different markets.

### Where do we operate?

The group's primary presence is in and around **Vellore and Odugathur, Tamil Nadu**, with agricultural trading extending to domestic and international markets.

### How can someone contact us?

Provide direct access to:

* Phone
* WhatsApp
* Email — placeholder until provided
* Business locations
* Social media — placeholder until provided

---

# 3. Target Audience

The website should serve multiple audiences.

### Customers

People looking for:

* Agricultural products
* Cafe
* Resort
* Restaurant
* Solar/electrical products
* Logistics services

### Business Partners

* Farmers
* Suppliers
* Buyers
* Export partners
* Hospitality partners
* Solar/electrical partners
* Logistics partners

### Corporate / Institutional Visitors

People evaluating Tanush Group as a business organization.

### General Visitors

People discovering the company through search engines or social media.

---

# 4. Design Direction

## Overall Style

The website should feel:

* Modern
* Premium
* Clean
* Trustworthy
* Professional
* Warm
* Business-focused
* Visually rich

Avoid making it look like an outdated traditional corporate website.

Avoid:

* Excessive gradients
* Generic corporate stock photos
* Overly complicated dashboards
* Too many colors
* Excessive text
* Crowded layouts
* E-commerce-style product cards

The website should communicate:

> **A modern business group with multiple ventures and a strong local foundation.**

---

# 5. Brand System

Brand assets will be supplied later.

### Logo

Placeholder:

`/assets/branding/logo.svg`

The implementation should support:

* Light logo
* Dark logo
* Favicon
* Mobile logo
* Footer logo

### Colors

Do not hardcode the final brand colors.

Create a centralized theme system so colors can easily be changed when the final branding is provided.

Example:

```css
:root {
  --color-primary: ...;
  --color-secondary: ...;
  --color-accent: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-muted: ...;
}
```

### Typography

Use a modern sans-serif typography system.

Recommended direction:

* Primary: Inter / Geist / Manrope
* Secondary/accent font can be introduced later if required by branding.

Typography should have:

* Strong large headings
* Comfortable body text
* Clear hierarchy
* Good mobile readability

---

# 6. Technology Stack

## Frontend

Use:

* React
* TypeScript
* Vite
* Tailwind CSS

Recommended supporting libraries:

* Framer Motion — animations
* Lucide React — icons
* React Router — routing if multiple pages are implemented

Do not introduce unnecessary libraries.

---

# 7. Website Architecture

Recommended structure:

```text
/
├── Home
├── About
├── Businesses
│   ├── Tanush Agro Traders
│   ├── Tanush Cafe
│   ├── Tanush Resort
│   ├── Tanush Restaurant
│   ├── Tanush Electricals
│   └── Tanush Logistics
├── Our Work
├── Gallery
└── Contact
```

However, the first release should prioritize the homepage.

Business detail pages can initially use a reusable template with placeholder content.

---

# 8. Navigation

Desktop navigation:

```text
Logo

Home
About
Businesses
Our Work
Gallery
Contact

[ Get in Touch ]
```

### Businesses

Dropdown/mega-menu:

```text
Tanush Agro Traders
Tanush Cafe
Tanush Resort
Tanush Restaurant
Tanush Electricals
Tanush Logistics
```

Mobile:

```text
☰

Home
About
Businesses
Our Work
Gallery
Contact

[ Get in Touch ]
```

Navigation should remain clean and minimal.

---

# 9. Homepage

## Section 1 — Hero

The hero should immediately establish Tanush as a group rather than one individual business.

### Suggested copy

**Building Businesses. Creating Value.**

> Tanush Group of Companies is a diversified business group operating across agricultural trade, hospitality, renewable energy and logistics.

Primary CTA:

**Explore Our Businesses**

Secondary CTA:

**Get in Touch**

### Visual direction

Use a full-width visual treatment.

Possible approaches:

### Option A — Multi-business visual

A cinematic composition combining subtle imagery representing:

* Agriculture
* Hospitality
* Solar
* Transportation

### Option B — Dynamic business showcase

Large hero image/video with changing business categories.

Example:

```text
AGRICULTURAL TRADE
        ↓
HOSPITALITY
        ↓
RENEWABLE ENERGY
        ↓
LOGISTICS
```

The final direction should depend on available photography.

Do not use generic stock photography if authentic company photography is available.

---

# 10. Introduction Section

## Heading

**One Group. Multiple Businesses.**

Content:

> Tanush Group of Companies brings together diverse businesses built around trade, hospitality, energy and logistics. From agricultural products sourced directly from farmers to hospitality experiences, solar solutions and road transportation, the group continues to build businesses that serve people and communities across different sectors.

Include a subtle founder/company introduction:

**Founded by Tanush Raju**

**Based in Vellore, Tamil Nadu**

Additional information can be added later.

---

# 11. Business Portfolio

## Heading

**Our Businesses**

Subtitle:

> Diverse ventures. One growing group.

Display six business cards.

Each card should contain:

* Business name
* Category
* Short description
* Image
* Explore button/arrow
* Optional location

---

## 11.1 Tanush Agro Traders

### Category

**Agricultural Trade & Exports**

### Description

> Tanush Agro Traders works with agricultural products sourced directly from farmers, serving domestic markets across India and international export markets.

### International / Export Products

* Cashew
* Sambrani
* Oothabathi
* Coconut
* Sarees

### Domestic Products

* Onion
* Garlic
* Potato
* Coconut
* Cashew
* Jaggery
* Dry Grapes

### Key differentiator

**Directly sourced from farmers**

### Visual direction

Use:

* Agricultural imagery
* Farmers
* Produce
* Packaging
* Trading/export imagery

Actual company photography should replace placeholder imagery when available.

---

# 12. Tanush Cafe

### Category

**Cafe & Hospitality**

### Location

**Odugathur District**

### Description

> A relaxed village-style cafe bringing the comfort of the countryside together with dishes inspired by the city.

The visual identity should communicate:

* Village atmosphere
* Relaxed environment
* Modern food
* Casual social experience

Potential future sections:

* Gallery
* Signature dishes
* Location
* Customer experience
* Opening hours

Do not invent menu items until provided.

---

# 13. Tanush Resort

### Category

**Farm Stay & Hospitality**

### Location

**Odugathur District**

### Description

> A farm-stay experience surrounded by the calm atmosphere of village life, designed for guests looking for a relaxed getaway.

### Current facilities

* 6 rooms
* Swimming pool
* PlayStation lounge
* Farm/village surroundings

### Visual direction

This should be one of the most visually immersive sections of the website.

Use:

* Landscape photography
* Farm imagery
* Rooms
* Pool
* Lounge
* Village surroundings

Future information can include:

* Room types
* Pricing
* Activities
* Food
* Events
* Booking/contact information

Do not show pricing until supplied.

---

# 14. Tanush Restaurant

### Category

**Restaurant & Dining**

### Location

**Odugathur District**

### Description

> A local dining destination serving a range of vegetarian and non-vegetarian dishes in a comfortable restaurant setting.

### Current positioning

* Vegetarian food
* Non-vegetarian food
* Regular restaurant dishes

Future content:

* Menu
* Signature dishes
* Gallery
* Opening hours
* Events
* Contact
* Location

---

# 15. Tanush Electricals

### Category

**Solar & Electrical Solutions**

### Current offering

**Solar AC and other electrical products**

### Description

> Tanush Electricals focuses on solar-powered and electrical solutions, with solar air-conditioning currently forming part of its offering.

The website should be designed so additional products/services can easily be added later.

Potential future categories:

```text
Solar AC
Solar Products
Electrical Products
Installation
Maintenance
Commercial Solutions
Residential Solutions
```

Do not claim installation, manufacturing, dealership, or distribution unless confirmed.

---

# 16. Tanush Logistics

### Category

**Road Transportation**

### Description

> Tanush Logistics provides road transportation services supporting the movement of goods across destinations.

Current confirmed service:

**Road Transport**

Future information can include:

* Fleet
* Routes
* Service areas
* Vehicle types
* Warehousing
* Industries served

Do not claim these until confirmed.

---

# 17. Business Portfolio Interaction

Business cards should have subtle interaction.

On hover:

* Image zooms slightly
* Card moves upward slightly
* Arrow transitions
* Overlay becomes visible

Example:

```text
┌──────────────────────────────┐
│                              │
│        BUSINESS IMAGE        │
│                              │
│                              │
├──────────────────────────────┤
│ TANUSH AGRO TRADERS          │
│ Agricultural Trade & Exports │
│                              │
│ Explore Business       →     │
└──────────────────────────────┘
```

On mobile, remove hover-dependent interactions.

---

# 18. Our Work

Create a visual showcase section.

## Heading

**Our Work**

Subtitle:

> A closer look at the businesses, projects and experiences behind Tanush Group.

This section should eventually contain real photographs.

Possible categories:

```text
All
Agriculture
Hospitality
Solar
Logistics
```

Example cards:

```text
Agricultural Trading
Direct sourcing & commodity trade

Hospitality
Cafe & resort experiences

Solar
Solar & electrical solutions

Logistics
Road transportation
```

Initially, placeholder content/images are acceptable.

---

# 19. Group Story / About Section

## Heading

**Growing Across Industries**

The narrative should focus on the group's journey and diversification.

Suggested structure:

```text
01
The Beginning

02
Agricultural Trade

03
Hospitality

04
Solar & Electricals

05
Logistics

06
The Road Ahead
```

The exact history should be added once provided by the company.

Do not invent founding dates or historical milestones.

---

# 20. Founder Section

## Founder

**Tanush Raju**

### Position

**Founder — Tanush Group of Companies**

Use a professional founder photograph when available.

Suggested placeholder copy:

> Tanush Group of Companies was founded by Tanush Raju with a vision of building and growing businesses across diverse sectors while creating long-term value for customers, partners and communities.

This copy should be reviewed by the company before production.

---

# 21. Locations

Create a dedicated location section.

### Current locations

**Vellore, Tamil Nadu**

Tanush Group headquarters.

**Odugathur District, Tamil Nadu**

Current hospitality businesses:

* Tanush Cafe
* Tanush Resort
* Tanush Restaurant

Additional locations can be added later.

Potential visual:

```text
              TAMIL NADU

                   ● Vellore
                   │
                   │
                   ● Odugathur
```

A Google Maps integration can be added once exact addresses are provided.

---

# 22. Group Capabilities

Create a visual section showing the diversity of the group.

```text
AGRICULTURE
Direct farmer sourcing
Domestic & international trade

HOSPITALITY
Cafe
Restaurant
Farm stay

ENERGY
Solar AC
Electrical products

LOGISTICS
Road transportation
```

This section should communicate the breadth of Tanush Group without overwhelming users.

---

# 23. Gallery

## Heading

**Inside Tanush**

A large image gallery showcasing:

* Agricultural products
* Farmers
* Trading operations
* Cafe
* Resort
* Restaurant
* Solar products
* Logistics
* Team
* Locations

Use a modern masonry/grid layout.

When photos are uploaded, images should be categorized.

---

# 24. Contact Section

## Heading

**Let's Connect**

Suggested copy:

> Whether you're looking to work with us, explore our businesses, or simply learn more about Tanush Group, we'd be happy to hear from you.

### Contact information

**Tanush Group of Companies**

Vellore, Tamil Nadu, India

**Phone**

+91 95244 30044

Additional fields to add later:

* Email
* WhatsApp
* Office address
* Social media
* Google Maps

### CTAs

**Call Us**

**WhatsApp Us**

**Send an Enquiry**

---

# 25. Footer

Footer structure:

```text
┌────────────────────────────────────────────────────┐
│                                                    │
│ TANUSH                                             │
│ GROUP OF COMPANIES                                 │
│                                                    │
│ Building Businesses. Creating Value.              │
│                                                    │
│ Businesses              Company       Connect      │
│ ──────────              ───────      ───────      │
│ Agro Traders            About        Phone        │
│ Cafe                    Our Work     WhatsApp     │
│ Resort                  Gallery      Instagram    │
│ Restaurant              Contact                    │
│ Electricals                                          │
│ Logistics                                            │
│                                                    │
├────────────────────────────────────────────────────┤
│ © 2026 Tanush Group of Companies                  │
│ All Rights Reserved                               │
└────────────────────────────────────────────────────┘
```

The year should be generated dynamically.

---

# 26. Visual Design System

## Layout

Use generous whitespace.

Recommended:

* Max-width: 1280–1440px
* Large section spacing
* Large editorial typography
* Asymmetric layouts where appropriate
* Large photography

Avoid making every section a standard centered container.

---

# 27. Animation

Animations should be subtle and premium.

Use Framer Motion.

Recommended:

### Page load

* Logo fade
* Hero text reveal
* Image scale/fade

### Scroll

* Section reveal
* Image reveal
* Staggered business cards

### Hover

* Image scale
* Arrow movement
* Card elevation

### Business transition

When entering a business page:

* Hero image reveal
* Text slide/fade

Avoid:

* Excessive bouncing
* Large spinning animations
* Long transitions
* Animations that delay access to content

Animation duration:

Approximately:

```text
200ms – 700ms
```

depending on interaction.

---

# 28. Responsive Design

The website must be designed mobile-first.

Breakpoints should support:

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop

### Mobile

Business cards should become a single-column or horizontal-scroll layout depending on the section.

Hero should remain readable.

Navigation becomes a mobile menu.

Large desktop layouts should collapse gracefully rather than simply shrinking.

---

# 29. Image Strategy

The site should prioritize **real Tanush Group photography**.

Image placeholders should be used during development.

Required image categories:

```text
branding/
  logo
  favicon

agro/
  products
  farmers
  sourcing
  export
  warehouse

cafe/
  exterior
  interior
  food
  atmosphere

resort/
  exterior
  rooms
  pool
  farm
  lounge
  surroundings

restaurant/
  exterior
  interior
  food

electricals/
  solar-ac
  products
  installations

logistics/
  trucks
  transportation
  operations

group/
  founder
  team
  company
```

Images should be optimized for web performance.

Use responsive image sizes.

---

# 30. Content Management Approach

Most company information will be added later.

Therefore, **do not hardcode business content throughout React components**.

Create structured data.

Example:

```typescript
export interface Business {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  location?: string;
  image: string;
  services?: string[];
  products?: string[];
  featured?: boolean;
}
```

Business data:

```typescript
const businesses: Business[] = [
  {
    id: "agro-traders",
    name: "Tanush Agro Traders",
    category: "Agricultural Trade & Exports",
    shortDescription: "...",
    description: "...",
    location: "Vellore, Tamil Nadu",
    image: "/assets/agro/hero.jpg",
    featured: true
  }
];
```

This allows content to be updated without restructuring the UI.

---

# 31. Reusable Components

Create reusable components.

```text
components/
├── Navbar
├── Footer
├── Hero
├── SectionHeading
├── BusinessCard
├── BusinessGrid
├── BusinessHero
├── ImageReveal
├── Gallery
├── CTA
├── ContactSection
├── LocationSection
├── FounderSection
└── ScrollReveal
```

---

# 32. Recommended React Structure

```text
src/
│
├── assets/
│   ├── branding/
│   ├── agro/
│   ├── cafe/
│   ├── resort/
│   ├── restaurant/
│   ├── electricals/
│   ├── logistics/
│   └── group/
│
├── components/
│
├── data/
│   ├── businesses.ts
│   ├── company.ts
│   └── navigation.ts
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Businesses.tsx
│   ├── BusinessDetail.tsx
│   ├── OurWork.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
│
├── layouts/
│
├── hooks/
│
├── lib/
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# 33. Business Detail Template

All businesses should use a reusable detail-page template.

Example:

```text
Business Hero
       ↓
Introduction
       ↓
What We Do
       ↓
Products / Services
       ↓
Capabilities
       ↓
Gallery
       ↓
Location
       ↓
Contact CTA
```

Not every business needs every section.

For example:

### Agro Traders

```text
Hero
About
Export Products
Domestic Products
Farmer Sourcing
Operations
Gallery
Contact
```

### Resort

```text
Hero
About
Rooms
Facilities
Experience
Gallery
Location
Contact
```

### Electricals

```text
Hero
About
Solar AC
Electrical Products
Solutions
Projects
Gallery
Contact
```

The template should support optional sections.

---

# 34. SEO

Implement basic technical SEO from the beginning.

Homepage:

**Title**

`Tanush Group of Companies | Vellore, Tamil Nadu`

Suggested description:

> Tanush Group of Companies is a diversified business group based in Vellore, Tamil Nadu, with businesses spanning agricultural trade, hospitality, solar and electrical products, and logistics.

Business pages should have unique titles.

Examples:

```text
Tanush Agro Traders | Agricultural Trade & Exports
Tanush Cafe | Odugathur
Tanush Resort | Farm Stay in Odugathur
Tanush Restaurant | Odugathur
Tanush Electricals | Solar & Electrical Products
Tanush Logistics | Road Transportation
```

Do not make unsupported claims such as "best", "leading", or "No. 1".

---

# 35. Social Sharing

Implement Open Graph metadata.

When the website is shared on:

* WhatsApp
* LinkedIn
* Facebook
* X

it should show:

* Tanush Group logo
* Hero image
* Page title
* Description

Create:

```text
og-image.jpg
```

at approximately:

```text
1200 × 630
```

---

# 36. Accessibility

The website should follow basic accessibility principles.

Requirements:

* Semantic HTML
* Proper heading hierarchy
* Alt text for images
* Keyboard navigation
* Visible focus states
* Adequate contrast
* Buttons with meaningful labels
* Avoid text embedded inside images where possible

---

# 37. Performance

Target:

* Fast initial load
* Optimized images
* Lazy-loaded gallery images
* Code splitting where appropriate
* Avoid unnecessarily large libraries
* Responsive image formats
* Minimal JavaScript for static content

Aim for strong Lighthouse scores.

---

# 38. Contact Functionality

Initial version:

```text
Phone → tel:+919524430044
WhatsApp → WhatsApp link
Email → mailto:...
```

Email is currently a placeholder.

Future contact form:

```text
Name
Email
Phone
Business of Interest
Message
Submit
```

The contact form should not be implemented until a backend/email service is selected.

---

# 39. Future Expansion

The architecture must allow Tanush Group to expand.

Potential future businesses:

```text
Tanush [Future Business]
Tanush [Future Business]
Tanush [Future Business]
```

Adding a new business should require changing the business data rather than redesigning the homepage.

Potential future features:

* Online resort booking
* Restaurant reservations
* Business enquiry forms
* Product catalogue
* Export enquiry system
* Project portfolio
* Careers
* News/blog
* Investor/company information
* Admin CMS
* Analytics
* WhatsApp integration

These are **not part of the initial implementation**.

---

# 40. Initial Homepage Information Architecture

The final homepage flow should be approximately:

```text
┌───────────────────────────────┐
│ NAVIGATION                    │
├───────────────────────────────┤
│                               │
│ HERO                          │
│ Building Businesses.          │
│ Creating Value.               │
│                               │
│ [Explore Businesses]          │
│ [Get in Touch]                │
│                               │
├───────────────────────────────┤
│                               │
│ ONE GROUP.                    │
│ MULTIPLE BUSINESSES.          │
│                               │
│ Company introduction          │
│                               │
├───────────────────────────────┤
│                               │
│ OUR BUSINESSES                │
│                               │
│ Agro     Cafe     Resort      │
│                               │
│ Restaurant Electricals        │
│ Logistics                     │
│                               │
├───────────────────────────────┤
│                               │
│ OUR WORK                      │
│                               │
│ Visual project showcase       │
│                               │
├───────────────────────────────┤
│                               │
│ OUR STORY                     │
│                               │
│ Group journey                 │
│                               │
├───────────────────────────────┤
│                               │
│ FOUNDER                       │
│ Tanush Raju                   │
│                               │
├───────────────────────────────┤
│                               │
│ OUR REACH                     │
│ Vellore / Odugathur / Global  │
│                               │
├───────────────────────────────┤
│                               │
│ GALLERY                       │
│                               │
├───────────────────────────────┤
│                               │
│ LET'S CONNECT                 │
│ +91 95244 30044               │
│                               │
├───────────────────────────────┤
│ FOOTER                        │
└───────────────────────────────┘
```

---

# 41. Content Placeholder Rules

Information not yet supplied must use clearly identifiable placeholders.

Example:

```text
[ADD COMPANY EMAIL]
[ADD EXACT ADDRESS]
[ADD INSTAGRAM]
[ADD FOUNDER PHOTO]
[ADD COMPANY HISTORY]
[ADD CERTIFICATIONS]
```

Do **not** fabricate:

* Revenue
* Employee count
* Customer count
* Export volume
* Years of experience
* Certifications
* Awards
* Countries served
* Fleet size
* Hotel ratings
* Restaurant ratings
* Product specifications

until the company provides them.

---

# 42. Tone of Voice

Content should feel:

**Confident but not exaggerated.**

**Professional but not corporate-heavy.**

**Warm but not overly casual.**

**Modern but grounded in the group's local roots.**

Avoid phrases such as:

* "World's best"
* "Industry-leading"
* "Unmatched"
* "No. 1"
* "Revolutionary"

unless independently substantiated and intentionally approved by the company.

Preferred language:

* Growing
* Building
* Trusted
* Direct
* Quality
* Reliable
* Diverse
* Local
* Connected
* Sustainable

---

# 43. Primary Brand Message

The website should consistently communicate this concept:

> **One group. Multiple businesses. A shared vision for growth.**

Supporting concept:

> From agricultural trade and hospitality to solar solutions and logistics, Tanush Group of Companies brings together diverse businesses under one growing organization.

---

# 44. Current Verified Company Information

Use the following information as the initial source of truth:

| Field                  | Information                                                 |
| ---------------------- | ----------------------------------------------------------- |
| Company                | Tanush Group of Companies                                   |
| Founder                | Tanush Raju                                                 |
| Headquarters           | Vellore, Tamil Nadu                                         |
| Phone                  | +91 95244 30044                                             |
| Business Model         | Diversified business group                                  |
| Agro sourcing          | Directly from farmers                                       |
| Agro export products   | Cashew, Sambrani, Oothabathi, Coconut, Sarees               |
| Agro domestic products | Onion, Garlic, Potato, Coconut, Cashew, Jaggery, Dry Grapes |
| Cafe                   | Village-style cafe with city-style dishes                   |
| Cafe location          | Odugathur District                                          |
| Resort                 | Farm-stay                                                   |
| Resort location        | Odugathur District                                          |
| Resort rooms           | 6                                                           |
| Resort facilities      | Swimming Pool, PlayStation Lounge                           |
| Resort environment     | Village/farm surroundings                                   |
| Restaurant             | Vegetarian & non-vegetarian dishes                          |
| Restaurant location    | Odugathur District                                          |
| Electricals            | Solar AC and other electrical products                      |
| Logistics              | Road transportation                                         |

---

# 45. Development Priority

## Phase 1 — Core Website

Build:

* Navbar
* Hero
* About/Group introduction
* Business portfolio
* Business detail template
* Our Work
* Founder
* Gallery
* Location
* Contact
* Footer
* Responsive design
* Animations
* SEO foundation

## Phase 2 — Real Content

Replace placeholders with:

* Logo
* Brand colors
* Company photography
* Founder photograph
* Business photographs
* Exact addresses
* Email
* Social media
* Company history
* Additional business information

## Phase 3 — Advanced Features

Potential additions:

* Resort booking
* Restaurant reservation
* Contact/enquiry backend
* CMS
* Analytics
* Business-specific pages
* Project management/showcase
* Careers
* Blog/news

---

# 46. Definition of Done

The initial website is considered complete when:

* Tanush Group is immediately understandable as a diversified business group.
* All six businesses are clearly showcased.
* The website works on mobile, tablet and desktop.
* The design feels modern and premium.
* Real company content can easily replace placeholders.
* Business information is driven by structured data.
* Business detail pages use reusable components.
* Contact information is easily accessible.
* Phone CTA works.
* WhatsApp CTA can be enabled once the preferred WhatsApp number is confirmed.
* Images are optimized.
* Basic SEO is implemented.
* Accessibility fundamentals are implemented.
* Animations are smooth but not excessive.
* No unsupported business claims are presented.
* No e-commerce functionality is included.
* The architecture allows additional Tanush businesses to be added later.

---

# 47. Final Design Principle

The website should not feel like a collection of six unrelated business websites.

The visitor should leave with the impression:

**Tanush is the group.**

**Agro Traders, Cafe, Resort, Restaurant, Electricals and Logistics are the businesses that make up that group.**

The visual system, navigation, typography, photography and storytelling should therefore maintain a consistent Tanush identity while allowing each business to have its own character.

The website should feel like the digital headquarters of a **growing business group**, not simply a company profile page.
