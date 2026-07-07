# @msteimel/design-system

Shared design tokens and foundation components for Mitch's apps (currently `personal-compass` and `tasty-tomes`), published as a single installable package with platform adapters for web (Tailwind/CSS custom properties) and native (NativeWind).

```
Primitive tokens  →  Semantic tokens (Theme)  →  Per-app Themes
   raw palette         named roles                personal-compass, tasty-tomes
```

Primitives are the raw values (hex colors, spacing scale, type scale) with no meaning attached. Semantic tokens assign roles (`background`, `accent`, `text.primary`, …) via the `Theme` interface. Each consuming app supplies its own theme object satisfying that interface, which platform adapters then translate into a Tailwind `theme.extend` object or CSS custom properties.

See [`tasks/QUEUE.md`](tasks/QUEUE.md) for the task queue and workflow for contributing new work.
