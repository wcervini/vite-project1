# Vite Project

## Dev

```
pnpm dev
```

## Build

```
pnpm build
```

Runs `tsc` then `vite build` — both steps are required.

## Stack

- Vite 8 + Tailwind CSS v4 (`@tailwindcss/vite` plugin, not PostCSS)
- TypeScript with `verbatimModuleSyntax` and `erasableSyntaxOnly`
- No tests configured