# Cloudflare React + Workers Starter Template

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/havoc7701/layer7-minimalist-construction-page)

A production-ready full-stack starter template for Cloudflare Pages and Workers. Built with React, Vite, Tailwind CSS, shadcn/ui, and Hono. Features a modern UI, API routes, error handling, theming, and seamless deployment to Cloudflare.

## Features

- **Frontend**: React 18 with Vite for fast development and builds
- **Styling**: Tailwind CSS + shadcn/ui components (pre-configured, customizable)
- **Backend**: Hono API routes powered by Cloudflare Workers
- **Data Fetching**: Tanstack React Query with automatic error reporting
- **State Management**: Zustand and Immer for performant state
- **UI/UX**: Dark/Light theme, responsive design, animations, sidebar layout
- **Developer Experience**: Hot reload, TypeScript, ESLint, error boundaries
- **Production Ready**: Optimized builds, CORS, logging, health checks
- **Cloudflare Native**: Pages for static assets, Workers for API, single deploy

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons |
| **Backend** | Hono, Cloudflare Workers, Cloudflare KV/Durable Objects ready |
| **Data/State** | Tanstack React Query, Zustand, Zod, React Hook Form |
| **UI Components** | Radix UI primitives, Framer Motion, Sonner Toasts |
| **Utilities** | clsx, tailwind-merge, date-fns, UUID |
| **Dev Tools** | ESLint, Bun, Wrangler |

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed (≥1.0)
- [Cloudflare CLI (Wrangler)](https://developers.cloudflare.com/workers/wrangler/install/) (optional for local dev)
- Cloudflare account (free tier sufficient)

### Installation

1. Clone or download the repository
2. Install dependencies:

```bash
bun install
```

### Development

1. Start the development server:

```bash
bun dev
```

- Frontend: http://localhost:3000 (Vite HMR)
- Backend: API routes at http://localhost:3000/api/*

2. Type generation for Workers bindings:

```bash
bun cf-typegen
```

3. Add custom API routes in `worker/userRoutes.ts` (do not edit `worker/index.ts`)

4. Build for production:

```bash
bun build
```

Preview the build:

```bash
bun preview
```

## Usage Examples

### Frontend Development

- Use shadcn/ui components from `@/components/ui/*`
- Custom pages in `src/pages/*`
- Layouts: `AppLayout.tsx` for sidebar
- Hooks: `useTheme`, `useMobile`
- Routing: React Router DOM

Example page in `src/main.tsx`:

```tsx
import { HomePage } from '@/pages/HomePage'
```

### Backend API Routes

Add routes in `worker/userRoutes.ts`:

```ts
app.get('/api/test', (c) => c.json({ success: true, data: { name: 'API works' } }));
```

Auto-reloads in dev. Protected by CORS and error handling.

### Error Reporting

Client errors automatically POST to `/api/client-errors` with full stack traces.

## Deployment

### Deploy to Cloudflare Pages + Workers

1. **Login to Cloudflare**:

```bash
bunx wrangler login
```

2. **Deploy** (builds + deploys frontend & backend):

```bash
bun run deploy
```

3. **Custom Domain** (optional):

```bash
bunx wrangler pages deploy --project-name=your-project dist
```

Configuration in `wrangler.jsonc`. Assets served via Pages, API via Workers.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/havoc7701/layer7-minimalist-construction-page)

## Project Structure

```
├── src/              # React frontend
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── pages/        # Page components
│   └── hooks/        # Custom hooks
├── worker/           # Hono API routes (Cloudflare Workers)
├── public/           # Static assets
├── tailwind.config.js # Theme & animations
└── vite.config.ts    # Vite + Cloudflare plugin
```

## Customization

- **Theme**: Edit `tailwind.config.js` and `src/index.css`
- **Components**: Add via `npx shadcn@latest add <component>`
- **Routes**: Extend `userRoutes.ts`
- **Sidebar**: Customize `src/components/app-sidebar.tsx`
- **Remove Demo**: Replace `src/pages/HomePage.tsx`

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server |
| `bun build` | Build for production |
| `bun lint` | Run ESLint |
| `bun preview` | Preview production build |
| `bun deploy` | Deploy to Cloudflare |
| `bun cf-typegen` | Generate Worker types |

## Contributing

1. Fork the repo
2. `bun install`
3. Create a feature branch
4. `bun dev` for testing
5. Submit PR

## License

MIT License. See [LICENSE](LICENSE) for details.

---

⭐ **Star on GitHub** · 💬 **Join Discord** · 🐛 **Bug Reports**