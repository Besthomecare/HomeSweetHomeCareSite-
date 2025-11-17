# Home Sweet Home Care - Design Guidelines

## Design Approach
**Reference Inspiration:** Mayo Clinic's professional healthcare aesthetic - clean, trustworthy, organized with purposeful use of whitespace. Additional influence from modern healthcare leaders (Kaiser Permanente's clarity, Cleveland Clinic's warmth).

**Core Principle:** Approachable professionalism that prioritizes readability and trust over visual complexity.

---

## Typography System

**Font Stack:**
- Primary: Inter or Source Sans Pro (Google Fonts)
- Headings: 600-700 weight, body: 400-500 weight

**Hierarchy:**
- Hero Headline: 48px (mobile) / 72px (desktop)
- Section Headings: 36px (mobile) / 52px (desktop)
- Subsection Titles: 24px (mobile) / 32px (desktop)
- Body Text: 19px base (exceptional readability for seniors)
- Small Text/Captions: 16px minimum
- Button Text: 18px, 600 weight

**Line Heights:** 1.6-1.7 for all body text, 1.2-1.3 for headings

---

## Layout & Spacing

**Tailwind Units:** Use 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section Padding: py-16 (mobile), py-24 (desktop)
- Component Spacing: mb-8 to mb-16 between elements
- Inner Content: px-6 (mobile), px-8 (desktop), max-w-6xl containers

**Grid Strategy:**
- Services/Features: Single column mobile, 2-column tablet, 3-column desktop
- Testimonials: Single column mobile, 2-column desktop
- Team Members: 2-column mobile, 4-column desktop

---

## Page Sections (8 comprehensive sections)

**1. Navigation Bar**
- Sticky header with generous padding (py-6)
- Logo left, phone number prominent right
- "Get Started" CTA button (large, 48px height minimum)
- Mobile: Hamburger menu with full-screen overlay

**2. Hero Section (with Large Image)**
- 85vh height on desktop, auto-height mobile
- Full-width background image showing caregiver with senior (warm, genuine moment)
- Dark overlay (40% opacity) for text contrast
- Centered content with blurred background button treatment
- Headline + 2-line subheadline + two CTAs ("Schedule Consultation" primary, "Learn More" secondary)
- Trust badge strip below: "Licensed & Insured | 15+ Years Experience | 24/7 Availability"

**3. Services Overview**
- 3-column grid of core services (Personal Care, Companionship, Medical Support, Meal Preparation, Transportation, Housekeeping)
- Each card: large icon (3rem), title, 2-3 sentence description
- Subtle borders, generous padding (p-8)

**4. Why Choose Us**
- 2-column layout: Left side image (caregiver interaction), Right side 4 key differentiators
- Each differentiator: icon, bold title, description paragraph
- Emphasize certifications, experience, personalized approach

**5. How It Works (Process)**
- Horizontal timeline/stepper: 4 steps
- Each step numbered, titled, with brief explanation
- Visual connectors between steps on desktop

**6. Testimonials & Stories**
- 2-column cards with family photos (if available, otherwise initials/avatars)
- Quote, name, relationship ("Daughter of client"), location
- 4-6 testimonials total, generous whitespace between

**7. Care Team Introduction**
- Brief intro paragraph about caregivers
- 4-column grid of team photos with names and certifications
- "Meet Our Full Team" link

**8. Contact/CTA Section**
- Split layout: Left form (Name, Phone, Email, Message), Right contact info
- Include: phone, email, office hours, response time commitment
- Large "Request Free Consultation" submit button
- Small print: privacy assurance

**Footer:** 4-column grid - Services quick links, Resources, Contact, Certifications/badges. Newsletter signup optional. Copyright, privacy policy.

---

## Component Specifications

**Buttons:**
- Primary: Solid background, 16px horizontal padding, 12px vertical, rounded-lg
- Secondary: Border style, matching padding
- Hover states: subtle scale/shadow transforms
- Blurred background for buttons on images: backdrop-blur-md with semi-transparent background

**Cards:**
- border width 1px, rounded-xl, padding p-8
- Subtle shadow on hover (shadow-md)

**Icons:**
- Font Awesome 6 (CDN)
- Size: 2.5rem for feature sections, 1.5rem inline

**Forms:**
- Large input fields: py-4, px-6, rounded-lg
- Labels above inputs, 16px, 600 weight
- Clear focus states with thick border

---

## Images

**Hero Section:** Full-width image of diverse caregiver with senior in home setting - natural lighting, genuine smiles, warmth. Horizontal orientation, 1920x1080 minimum.

**Why Choose Us Section:** Image showing caregiver assisting senior with daily activity (cooking, reading, walking) - authentic, not stock-looking. 800x600.

**Testimonials:** Family photo style headshots - circular crops, warm expressions. 200x200.

**Team Section:** Professional headshots with consistent background treatment. Square format, 400x400.

**Additional:** Consider lifestyle images throughout showing various care scenarios - use sparingly but strategically to break up text-heavy sections.

---

## Accessibility Implementation

- Minimum contrast ratio 4.5:1 for body text, 3:1 for large text
- Focus indicators: 3px outline, high contrast
- Semantic HTML structure with proper heading hierarchy
- Alt text for all images (descriptive, purposeful)
- Form labels explicitly associated with inputs
- Skip navigation link
- ARIA labels for icon-only buttons