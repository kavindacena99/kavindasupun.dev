# Kavinda Supun — Portfolio

## Overview

The personal portfolio of Kavinda Supun Dissanayake, a Software Engineer and AI Engineer based in Sri Lanka. The site presents selected engineering work, professional experience, technical capabilities, and freelance services for software and AI solutions.

Live portfolio: [kavindasupun-dev.vercel.app](https://kavindasupun-dev.vercel.app/)

## Professional Focus

- Software, backend, and API engineering
- Full-stack web and Flutter mobile applications
- Agentic AI and retrieval-augmented generation
- Business systems and workflow automation
- Deployment-minded, security-focused engineering

## Design Philosophy

The interface uses a restrained Liquid Glass-inspired visual system: translucent material is reserved for navigation, important controls, featured work, and calls to action. Solid surfaces carry longer content for dependable contrast and readability. The palette uses warm neutral surfaces and muted sage accents in light mode, with graphite surfaces and warm off-white text in dark mode.

## Technology Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- CSS custom properties
- Inline SVG icons

The project intentionally remains a small single-page frontend without a router, backend, authentication service, database, CMS, or contact-form service.

## Project Structure

```text
frontend/
├── public/                 Static public assets
├── src/
│   ├── assets/             Portfolio imagery
│   ├── components/         Page sections and reusable UI
│   ├── content/            Centralized portfolio content
│   ├── hooks/              Theme behavior
│   ├── projects/           Long-form project documents
│   ├── App.jsx             Page composition and active navigation
│   ├── index.css           Theme tokens and visual system
│   └── main.jsx            React entry point
├── index.html              SEO and document metadata
├── package.json            Scripts and dependencies
└── vite.config.js          Vite, React, and Tailwind configuration
```

## Theme System

Light and dark theme tokens are defined in `frontend/src/index.css`. The `useTheme` hook:

- Uses the operating-system color preference on a first visit
- Persists a manual selection in `localStorage`
- Applies the active theme to the root document
- Updates the browser color scheme and theme color

## Liquid Glass-Inspired UI

Reusable classes such as `glass-nav`, `glass-card`, `glass-button`, `glass-pill`, and `glass-modal` define the material consistently. A semi-opaque fallback is provided for browsers without `backdrop-filter`, and blur is reduced on smaller screens.

## Featured Projects

1. Location-Based Human–Leopard Conflict Alert System
2. Loan Management & Operations System
3. AI Study Notes RAG Assistant

The wildlife project includes an accessible full-screen architecture document with detailed service, API, notification, and geographic-processing diagrams.

## Local Development

### Installation

```bash
cd frontend
npm install
```

### Available Scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run preview  # Preview the production build
```

## Production Build

Vite writes the static production site to `frontend/dist`. The configured relative base supports static hosting while the canonical public URL remains the Vercel deployment.

## Editing Portfolio Content

Personal information, navigation, services, principles, projects, experience, education, skills, and contact links are centralized in `frontend/src/content/portfolio.js`.

Keep factual claims verifiable. Do not add employment dates, employers, metrics, client names, testimonials, certifications, or project links unless they are confirmed for public use.

## Adding or Updating Projects

Project cards are generated from `portfolioContent.projects.items`. Each entry should describe:

- The problem
- The system that was built
- The engineering contribution
- Technical highlights
- The verified technology stack
- Public links only when they exist

Architecture documents can be connected in `frontend/src/components/Projects.jsx`. The existing wildlife document lives in `frontend/src/projects/wildcat.jsx` and contains trusted static HTML only; never pass user-controlled content into its HTML rendering path.

## Accessibility

The portfolio includes semantic sections, visible keyboard focus, active-navigation state, reduced-motion handling, descriptive image text, keyboard-operable navigation, and focus management for the architecture dialog. New interactions should preserve keyboard access and meaningful labels.

## Deployment

The application is a static Vite site and can be deployed to Vercel or another static host. No server-side environment variables are required by the portfolio frontend. If external services are added later, never store private keys or service credentials in client-side code.

## Maintenance Notes

- Keep content in `portfolio.js` where practical.
- Preserve the shared theme tokens and glass utilities rather than duplicating surface styles.
- Keep project claims and URLs factual.
- Run lint and a production build before deployment.
- Review the architecture modal after changes to global styling or focus behavior.
