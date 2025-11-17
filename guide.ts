// my-next-app/
// ├─ app/
// │  ├─ layout.tsx              # root layout (shared UI like header/footer)
// │  ├─ page.tsx                # homepage
// │  ├─ head.tsx                # default <head>
// │  ├─ error.tsx               # global error boundary
// │  ├─ loading.tsx             # global loading UI (server components)
// │  ├─ (auth)/                 # optional grouping route (parallel/segment)
// │  │  ├─ layout.tsx
// │  │  └─ login/page.tsx
// │  └─ dashboard/
// │     ├─ layout.tsx
// │     ├─ page.tsx
// │     └─ settings/
// │        └─ page.tsx
// ├─ components/                # presentational UI components (stateless)
// │  ├─ ui/                     # small, reusable building-block components
// │  │  ├─ Button.tsx
// │  │  └─ Avatar.tsx
// │  └─ layout/                 # higher-level components used by pages/layouts
// │     ├─ Header.tsx
// │     └─ Footer.tsx
// ├─ features/                  # domain/feature-based components (optional)
// │  └─ auth/
// │     ├─ LoginForm.tsx
// │     └─ useAuth.ts
// ├─ hooks/                     # custom React hooks
// │  └─ useDebouncedValue.ts
// ├─ lib/                       # third-party client/server wrappers & api clients
// │  ├─ api.ts                  # fetch wrappers, axios instances
// │  └─ prisma.ts               # prisma client (if using prisma)
// ├─ services/                  # business logic, integrations (stripe, sentry)
// ├─ store/                     # state management (zustand/redux/toolkit)
// ├─ utils/                     # small pure helper functions
// │  └─ formatDate.ts
// ├─ styles/                    # global styles, variables (if not using tailwind only)
// │  ├─ globals.css
// │  └─ tailwind.css
// ├─ public/                    # static assets (images, fonts)
// ├─ prisma/ (optional)         # prisma schema and migrations
// ├─ tests/                     # unit / integration tests (jest / vitest)
// ├─ e2e/                       # e2e tests (cypress / playwright)
// ├─ scripts/                   # handy developer scripts
// ├─ .env.local
// ├─ next.config.js
// ├─ tsconfig.json
// ├─ package.json
// └─ README.md
