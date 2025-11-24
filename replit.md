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

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon serverless PostgreSQL
- **API Design**: RESTful endpoints with JSON responses
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error middleware

### Key Components

#### Database Schema
- **Users Table**: Basic user authentication structure
- **Contact Forms Table**: Lead capture and inquiry management
- **Schema Location**: `shared/schema.ts` for type safety across frontend/backend

#### API Endpoints
- `POST /api/contact`: Contact form submission with validation
- `GET /api/contact`: Retrieve contact form submissions (admin endpoint)

#### Frontend Pages
- **Home**: Senior-friendly redesign with video background hero, above-the-fold lead form, trust badges, core values, services list, service area, and FAQ accordion
- **Services**: Simplified senior-friendly design showcasing six traditional care services with personalized care plans and flexible scheduling options
- **About**: Company mission, values, caregiver information
- **Contact**: Contact form with HubSpot integration
- **Careers**: Employment opportunities and application process
- **FAQ**: Frequently asked questions
- **Privacy**: Privacy policy and data handling

## Data Flow

1. **User Interaction**: Users navigate through the site and interact with forms
2. **Form Submission**: Contact forms are validated client-side using Zod schemas
3. **API Processing**: Backend validates and stores form data in PostgreSQL
4. **External Integration**: HubSpot forms handle lead capture and CRM integration
5. **Response Handling**: Success/error states are managed with toast notifications

## External Dependencies

### Core Dependencies
- **Database**: Neon serverless PostgreSQL with connection pooling
- **UI Framework**: Radix UI for accessible component primitives
- **Styling**: Tailwind CSS with custom theme implementation
- **Forms**: HubSpot embedded forms for lead capture
- **Analytics**: Replit development tools and error tracking

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

### Key Features
- **Senior-Friendly Design**: 18px base font size, high contrast, large buttons, generous spacing
- **Video Background Hero**: Autoplaying background video with lead form above the fold
- **Lead Form**: Comprehensive free care assessment form with all required fields
- **Simplified Navigation**: Sticky header with prominent call and booking CTAs
- **Compact Footer**: Essential contact info and links in streamlined layout
- **Responsive Design**: Mobile-first approach with breakpoint-specific behaviors
- **SEO Optimization**: Updated meta tags targeting "In-Home Senior Care in Sarasota & Bradenton"
- **Accessibility**: WCAG AA compliant with ARIA labels and semantic HTML throughout

## Changelog

- November 24, 2025. Simplified services page: Removed all AI companionship content and streamlined services page to match homepage's senior-friendly design. Fixed nested anchor tag accessibility issue in Link component. Services now feature six traditional care offerings: Companionship, Transportation & Errands, Medication Reminders, Light Housekeeping, Meal Preparation, and Observation & Reporting.
- November 17, 2025. Complete homepage redesign: Implemented senior-friendly design with video background hero, above-the-fold lead form, trust badges, core values section, bulleted services list, service area display, FAQ accordion, and compact footer. Removed testimonials and AI companionship from homepage. Updated header to simplified sticky design with prominent CTAs. Increased base font to 18px for better readability.
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.