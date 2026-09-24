# SAB Builders Website

A React and Vite website for SAB Builders and Trading Inc., featuring company information, services, projects, galleries, and contact details.

## Requirements

- Node.js 18 or newer
- npm

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at the local URL shown by Vite, usually `http://localhost:3000`.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This is a frontend-only Vite application. It can be deployed to Vercel, Netlify, or another static hosting provider.

For Vercel or Netlify, use:

- Build command: `npm run build`
- Output directory: `dist`

The app uses client-side routing, so the hosting provider must support SPA fallback rewrites for routes such as `/projects/1`.

## Current Scope

- Project and service content is stored in `src/data/content.ts`.
- Project images and video are stored in `src/assets/images`.
- The contact form is currently visual only and does not submit data to a backend.
- No API keys, database, or server-side API are required by the current app.
