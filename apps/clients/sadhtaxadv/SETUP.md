# Consulting Website Setup Guide

This Astro.js project is configured with Tailwind CSS, TinaCMS, and SEO-friendly features for a professional consulting website.

## 🚀 Stack

- **Astro.js 5.15.4** - Static Site Generator
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **TinaCMS** - Git-backed headless CMS
- **SEO Features** - Meta tags, Open Graph, Schema.org structured data

## 📁 Project Structure

```
apps/clients/sadhtaxadv/
├── src/
│   ├── components/
│   │   └── SEO.astro          # SEO meta tags component
│   ├── content/
│   │   ├── config.ts          # Content collections schema
│   │   └── services/          # Service pages (MDX)
│   ├── layouts/
│   │   └── Layout.astro       # Base layout with SEO
│   └── pages/
│       ├── index.astro        # Homepage
│       └── services/
│           └── [slug].astro   # Dynamic service pages
├── tina/
│   └── config.ts              # TinaCMS configuration
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind configuration
└── .env.example               # Environment variables template
```

## 🛠️ Getting Started

### 1. Install Dependencies

Dependencies are hoisted to the root, so run:

```bash
npm install
```

### 2. Run Development Server

#### Without TinaCMS (Astro only):
```bash
npx nx run apps-clients-sadhtaxadv:dev
```

Or directly:
```bash
cd apps/clients/sadhtaxadv
npm run dev:astro
```

#### With TinaCMS:
First, set up TinaCMS credentials (see TinaCMS Setup below), then:
```bash
cd apps/clients/sadhtaxadv
npm run dev
```

The site will be available at `http://localhost:4321/` (or next available port).

### 3. Build for Production

```bash
npx nx run apps-clients-sadhtaxadv:build
```

## 🎨 Tailwind CSS

Tailwind is configured with a custom color palette:

- Primary colors: `primary-50` through `primary-900` (blue scale)
- Configured in `tailwind.config.mjs`
- Auto-scans all `.astro`, `.html`, `.jsx`, `.tsx`, `.md`, `.mdx` files

### Using Tailwind

```astro
<div class="bg-primary-600 text-white p-4 rounded-lg">
  Styled with Tailwind
</div>
```

## 📝 TinaCMS Setup

### Local Development (No Auth Required)

For local development, TinaCMS will work without credentials. Just run:

```bash
npm run dev
```

Access the CMS at `http://localhost:4321/admin`

### Production Setup

1. Create a free account at [tina.io](https://tina.io)
2. Create a new project
3. Get your Client ID and Token
4. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
5. Add your credentials to `.env`:
   ```
   TINA_CLIENT_ID=your_client_id
   TINA_TOKEN=your_token
   PUBLIC_SITE_URL=https://yourdomain.com
   ```

### Content Collections

Three content collections are configured:

1. **Services** (`src/content/services/`)
   - Title, description, icon, order
   - Perfect for service offerings

2. **Posts** (`src/content/posts/`)
   - Title, description, author, tags, featured image
   - For blog posts

3. **Pages** (`src/content/pages/`)
   - Generic pages with title and description

### Adding Content

#### Via TinaCMS:
1. Start dev server with `npm run dev`
2. Navigate to `http://localhost:4321/admin`
3. Create/edit content through the visual editor

#### Manually:
Create `.mdx` files in the appropriate content folder:

```mdx
---
title: My Service
description: A great service we offer
order: 1
---

## Service Details

Your content here...
```

## 🔍 SEO Features

### Meta Tags
The `SEO.astro` component handles:
- Title and description
- Open Graph tags (Facebook)
- Twitter Card tags
- Canonical URLs
- Schema.org structured data

### Sitemap
Automatically generated at `/sitemap-index.xml`

Update your domain in `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://yourdomain.com', // Change this
  // ...
})
```

### Using SEO Component

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Page Title"
  description="Page description for SEO"
  image="/og-image.jpg"
  type="website"
>
  <!-- Content -->
</Layout>
```

## 🎯 Available Scripts

From the monorepo root:

```bash
# Development server (without TinaCMS)
npx nx run apps-clients-sadhtaxadv:dev

# Build for production
npx nx run apps-clients-sadhtaxadv:build

# Preview production build
npx nx run apps-clients-sadhtaxadv:preview

# Type checking
npx nx run apps-clients-sadhtaxadv:typecheck
```

From the project directory (`apps/clients/sadhtaxadv`):

```bash
# Dev with TinaCMS
npm run dev

# Dev without TinaCMS
npm run dev:astro

# Build
npm run build

# Preview
npm run preview
```

## 📦 Next Steps

1. **Update branding**:
   - Replace `Your Consulting Firm` in `src/components/SEO.astro`
   - Update site URL in `astro.config.mjs`
   - Add your logo and favicon

2. **Add more content**:
   - Create service pages in `src/content/services/`
   - Add blog posts in `src/content/posts/`
   - Create static pages in `src/content/pages/`

3. **Customize design**:
   - Update Tailwind theme in `tailwind.config.mjs`
   - Modify layouts in `src/layouts/`
   - Add components in `src/components/`

4. **Setup TinaCMS**:
   - Create account at tina.io
   - Configure environment variables
   - Invite team members to edit content

5. **Deploy**:
   - Deploy to Vercel, Netlify, or Cloudflare Pages
   - Set environment variables in your hosting platform
   - Configure domain and SSL

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TinaCMS Documentation](https://tina.io/docs)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)

## ⚠️ Notes

- The project uses npm workspaces (monorepo setup)
- Dependencies are hoisted to root `package.json`
- Always run `npm install` from the root directory
- TinaCMS requires Node.js 18 or higher
