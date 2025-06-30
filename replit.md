# Home Sweet Home Care - Replit Project Guide

## Overview

This is a full-stack web application for Home Sweet Home Care, a compassionate in-home care service provider serving seniors in Sarasota, Manatee County, and Lakewood Ranch, Florida. The application combines a modern React frontend with an Express.js backend, utilizing PostgreSQL for data storage and featuring innovative AI companionship services alongside traditional care offerings.

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
- **Home**: Hero carousel, services overview, testimonials, FAQ
- **Services**: Detailed service descriptions with AI companionship feature
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
- **Call-to-Action Button**: Always-visible tap-to-call functionality for mobile and desktop
- **Responsive Design**: Mobile-first approach with breakpoint-specific behaviors
- **SEO Optimization**: Helmet integration for meta tags and structured data
- **Accessibility**: ARIA labels and semantic HTML throughout

## Changelog

- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.