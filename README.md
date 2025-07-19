# InnovateLab Waitlist Application

## Overview

This is a full-stack TypeScript application featuring a modern waitlist landing page for InnovateLab, a fictional team collaboration platform. The application includes a beautiful animated frontend built with React and a robust Express.js backend with PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: React Hook Form for form handling, TanStack Query for server state
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL storage
- **API Design**: RESTful endpoints with JSON responses
- **Development**: Hot reloading with Vite middleware integration

### Database Schema
- **waitlist_entries**: Stores user waitlist submissions (id, fullName, email, createdAt)
- **users**: Basic user table for future authentication (id, username, password)
- **Validation**: Zod schemas for type-safe data validation
- **ORM**: Drizzle ORM with PostgreSQL dialect

## Key Components

### Frontend Components
- **HeroSection**: Main landing area with gradient background and call-to-action
- **WaitlistForm**: Form component with validation and success states
- **FeaturesSection**: Showcases platform features with icons and descriptions
- **TeamSection**: Statistics display with real waitlist count integration
- **FloatingElements**: Animated background elements for visual appeal

### Backend Services
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Waitlist API**: Create entries, retrieve stats, email duplicate prevention
- **Route Handlers**: RESTful endpoints with proper error handling
- **Middleware**: Request logging, JSON parsing, CORS handling

### UI System
- **Design System**: Custom Tailwind configuration with CSS variables
- **Component Library**: Comprehensive shadcn/ui component collection
- **Theme**: Light/dark mode support with neutral color palette
- **Typography**: Inter font family with responsive sizing
- **Responsive Design**: Mobile-first approach with breakpoint handling

## Data Flow

1. **User Interaction**: User fills out waitlist form on frontend
2. **Form Validation**: Client-side validation with React Hook Form and Zod
3. **API Request**: Form submission triggers POST to `/api/waitlist`
4. **Server Processing**: Express route validates data and checks for duplicates
5. **Database Operation**: Drizzle ORM inserts new waitlist entry to PostgreSQL
6. **Response Handling**: Success/error response sent back to client
7. **UI Updates**: Toast notifications and form state updates based on response
8. **Stats Display**: Real-time waitlist count fetched and displayed

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Database**: Drizzle ORM with Neon Database serverless PostgreSQL
- **Validation**: Zod for runtime type checking and validation

### UI and Styling
- **Component Library**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion for smooth transitions
- **Utilities**: Class variance authority for component variants

### Development Tools
- **Build System**: Vite with TypeScript support
- **Code Quality**: TypeScript strict mode configuration
- **Development**: Hot reloading and error overlay plugins
- **Session Storage**: Connect-pg-simple for PostgreSQL session storage

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend integration
- **Hot Reloading**: Vite middleware mounted on Express for seamless development
- **Database**: Neon Database with connection string from environment variables
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Production Build
- **Frontend Build**: Vite builds React app to static files
- **Backend Build**: esbuild compiles Express server to single bundle
- **Static Serving**: Express serves built frontend files in production
- **Database Migrations**: Drizzle migrations manage schema changes
- **Environment Configuration**: Production environment variables for database and secrets

### Build Process
1. **Frontend Compilation**: Vite builds React app with TypeScript compilation
2. **Backend Bundling**: esbuild creates optimized server bundle
3. **Asset Management**: Static assets served from Express in production
4. **Database Setup**: Drizzle push command applies schema changes
5. **Process Management**: Single Node.js process serves both frontend and API

### Scalability Considerations
- **Database**: Serverless PostgreSQL scales automatically with Neon
- **Session Storage**: PostgreSQL-backed sessions for horizontal scaling
- **Static Assets**: Can be moved to CDN for better performance
- **API Architecture**: Stateless design enables easy horizontal scaling
- **Caching**: TanStack Query provides client-side caching for better UX
