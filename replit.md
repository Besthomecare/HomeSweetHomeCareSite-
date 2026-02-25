# Home Sweet Home Care - Replit Project Guide

## Overview

This is a full-stack web application for Home Sweet Home Care, a compassionate in-home care service provider serving seniors in Sarasota, Manatee County, and Lakewood Ranch, Florida. The application combines a modern React frontend with an Express.js backend, utilizing PostgreSQL for data storage and featuring traditional in-home care services with a focus on senior-friendly design and accessibility.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds
- **SEO**: react-helmet-async for page titles and meta tags

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon serverless PostgreSQL
- **AI Integration**: OpenAI (gpt-5-mini model) with function calling for callback requests
- **Email**: Resend for transactional emails
- **API Design**: RESTful endpoints with JSON responses
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error middleware

### Key Components

#### Database Schema
- **Users Table**: Basic user authentication structure
- **Contact Forms Table**: Lead capture and inquiry management
- **Consultations Table**: Chatbot-submitted callback requests (name, phone, address, notes, status)
- **Schema Location**: `shared/schema.ts` for type safety across frontend/backend

#### API Endpoints
- `POST /api/contact`: Contact form submission with validation, reCAPTCHA, and email notifications
- `GET /api/contact`: Retrieve contact form submissions (admin endpoint)
- `POST /api/chat`: AI chatbot endpoint with function calling — handles Q&A and callback requests (rate-limited: 20 requests/minute per IP)

#### Frontend Pages
- **Home**: Senior-friendly design with video background hero, above-the-fold lead form, trust badges, services list, service area, and FAQ accordion
- **Services**: Six traditional care services with personalized care plans and flexible scheduling options
- **About**: Company mission, values, caregiver information
- **Contact**: Contact form with Resend email integration
- **Careers**: Employment opportunities and application process
- **FAQ**: Frequently asked questions
- **Privacy**: Privacy policy and data handling

#### AI Chatbot
- **Backend**: `server/chatbot.ts` — OpenAI client with function calling (1 tool: request_callback)
- **Frontend**: `client/src/components/chat-widget.tsx` — Floating chat bubble (bottom-right corner) on all pages
- **Model**: gpt-5-mini — uses `AI_INTEGRATIONS_OPENAI_API_KEY` (Replit) or `OPENAI_API_KEY` (external deployment)
- **Rate Limiting**: 20 messages per minute per IP address
- **Capabilities**:
  - Company Q&A (services, areas, hours, FAQs, pricing info)
  - Callback requests (collects name/phone/address conversationally, saves to DB, emails team)

## Data Flow

1. **User Interaction**: Users navigate through the site and interact with forms
2. **Form Submission**: Contact forms are validated client-side using Zod schemas
3. **API Processing**: Backend validates and stores form data in PostgreSQL
4. **Email Notification**: Resend sends business notification and customer auto-reply
5. **Response Handling**: Success/error states are managed with toast notifications
6. **Chatbot Q&A**: Users ask questions via floating chat widget; AI responds with company knowledge
7. **Chatbot Callbacks**: AI collects customer info conversationally, saves to consultations table, and notifies business via email

## External Dependencies

### Core Dependencies
- **Database**: Neon serverless PostgreSQL with connection pooling
- **AI**: OpenAI (env vars: `AI_INTEGRATIONS_OPENAI_API_KEY` or `OPENAI_API_KEY`; optionally `AI_INTEGRATIONS_OPENAI_BASE_URL`)
- **Email**: Resend for transactional emails (env var: RESEND_API_KEY)
- **UI Framework**: Radix UI for accessible component primitives
- **Styling**: Tailwind CSS with custom theme implementation
- **Analytics**: Google Analytics with cookie consent system

### Development Tools
- **TypeScript**: Full type safety across the application
- **ESBuild**: Fast bundling for production builds
- **Drizzle Kit**: Database migrations and schema management
- **Vite Plugins**: Custom theme handling and development overlays

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` - Starts development server with hot reloading
- **Database**: `npm run db:push` - Pushes schema changes to database
- **Type Checking**: `npm run check` - Validates TypeScript across the project

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild compiles server code to `dist/index.js`
- **Database**: Drizzle migrations stored in `./migrations` directory
- **Environment**: Requires `DATABASE_URL` environment variable
- **Deployment**: Currently on Render.com via GitHub

### Key Features
- **Senior-Friendly Design**: 18px base font size, high contrast, large buttons, generous spacing
- **Video Background Hero**: Autoplaying background video with lead form above the fold
- **Lead Form**: Comprehensive free care assessment form with all required fields
- **AI Chatbot**: Floating chat widget with Q&A and callback request collection
- **Simplified Navigation**: Sticky header with prominent call CTA
- **Compact Footer**: Essential contact info and links in streamlined layout
- **Responsive Design**: Mobile-first approach with breakpoint-specific behaviors
- **SEO Optimization**: Updated meta tags targeting "In-Home Senior Care in Sarasota & Bradenton"
- **Accessibility**: WCAG AA compliant with ARIA labels and semantic HTML throughout

## Changelog

- February 25, 2026 (session 3). Removed Google Calendar integration from chatbot: Deleted server/calendar.ts and server/google-calendar-client.ts. Removed check_availability and schedule_appointment tools from chatbot. Dropped calendarEventId and appointmentTime columns from consultations table. Chatbot now only offers callback requests (collect info, save to DB, email team, tell customer "we'll call you"). Also fixed OpenAI client to initialize lazily so server doesn't crash on Render when API key env var is missing — falls back to OPENAI_API_KEY.
- February 25, 2026 (session 2). Added callback request feature to chatbot, fixed layout conflicts: Chat widget z-index bumped to z-[60] so header never overlaps it. Chat bubble now shifts up when cookie consent banner is visible to avoid crowding. Added consultations table to DB for callback requests. Chatbot uses OpenAI function calling with request_callback tool. Business notification emails sent for callback requests.
- February 25, 2026. Removed Google Calendar booking feature, added AI chatbot: Removed "Book Free Consult" buttons from header and how-to-get-started section. Replaced calendar links with contact page navigation. Fixed remaining broken tel: link in CTA section. Added AI-powered chat widget (gpt-5-mini via Replit AI Integrations) with comprehensive company knowledge, floating on all pages. Added rate limiting (20 req/min per IP) on chat endpoint. Cleaned up 17 orphaned dead code files. Fixed react-helmet imports across 6 pages to use react-helmet-async.
- January 8, 2026. Standardized all pages and components for consistent design.
- November 24, 2025. Simplified services page.
- November 17, 2025. Complete homepage redesign.
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
Plan before acting — explicit approval required before making changes.
