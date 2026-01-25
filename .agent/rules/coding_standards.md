---
trigger: always_on
---

# Senior Engineering Standards: Next.js Portfolio

## 1. Core Principles
- **Self-Documenting Code:** Strictly **no comments**. Use intent-revealing naming conventions.
- **Server-First:** Default to React Server Components (RSC). Use `'use client'` only at the leaf nodes for interactivity.
- **Composition over Inheritance:** Build small, atomic components and compose them.
- **DRY vs AHA:** Avoid Hasty Abstractions, but keep the code DRY where patterns are obvious.

## 2. Technical Stack Rules
- **Framework:** Next.js 15+ (App Router).
- **Language:** Strict TypeScript. No `any`, no `@ts-ignore`.
- **Styling:** Tailwind CSS (Modern Utility-First).
- **Validation:** Zod for all data schemas and environment variables.
- **Components:** Radix UI / Shadcn patterns.

## 3. Implementation Patterns

### 3.1 Components
- Small files (< 100 lines).
- Destructure props.
- Use `cn()` utility for conditional classes.
- Prefer `const` arrow functions for components.

### 3.2 Logic & State
- **Early Returns:** Guard clauses first; main logic last.
- **Server Actions:** All mutations must use Next.js Server Actions.
- **Data Fetching:** Fetch at the page/layout level via `await` in RSC.
- **No useEffect:** Avoid `useEffect` for data fetching; use `Suspense` and Server Components.

### 3.3 TypeScript
- Use `interface` for object shapes.
- Use `type` for unions/intersections.
- Enforce exhaustive type checking in `switch` statements.

## 4. Design System (Dark Modern UI)
- **Background:** Primary background `#000000` or `#050505`.
- **Contrast:** Use a secondary slate/zinc for cards (`muted` or `accent` colors).
- **Typography:** Sans-serif (Geist or Inter). Use `tracking-tight` for headings.
- **Gradients:** Use `bg-gradient-to-br` with subtle opacity for the "AI" aesthetic.

## 5. Performance & SEO
- **Images:** Mandatory `next/image`. Always provide `alt` text.
- **Metadata:** Use the Metadata API (static or dynamic) in every `page.tsx`.
- **Loading:** Use `loading.tsx` and `Skeleton` components for perceived performance.

## 6. Prohibited Practices
- No `console.log` in production-ready code.
- No `barrel files` (index.ts) unless required for library exports (slows down fast refresh).
- No default exports for components; use named exports.
- No `React.FC` or `React.ReactNode` if the type can be inferred or defined more strictly.