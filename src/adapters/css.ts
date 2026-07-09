import type { Theme } from '../tokens/semantic'
import { spacing, radius } from '../tokens/spacing'
import { fontSizes } from '../tokens/typography'
import { shadow } from '../tokens/elevation'

const px = (n: number) => `${n}px`

/** CSS custom properties for web consumers (Tailwind v4 / plain CSS). */
export function createCSSVars(theme: Theme): string {
  const rootLines = [
    `  --ds-background: ${theme.light.background};`,
    `  --ds-surface: ${theme.light.surface};`,
    `  --ds-border: ${theme.light.border};`,
    `  --ds-text-primary: ${theme.light.text.primary};`,
    `  --ds-text-secondary: ${theme.light.text.secondary};`,
    `  --ds-text-muted: ${theme.light.text.muted};`,
    `  --ds-accent: ${theme.light.accent};`,
    `  --ds-destructive: ${theme.light.destructive};`,
    `  --ds-radius-sm: ${px(radius.sm)};`,
    `  --ds-radius-md: ${px(radius.md)};`,
    `  --ds-radius-lg: ${px(radius.lg)};`,
    `  --ds-shadow: ${shadow};`,
    ...Object.entries(spacing).map(([key, value]) => `  --ds-spacing-${key}: ${px(value)};`),
    ...Object.entries(fontSizes).map(([key, value]) => `  --ds-font-size-${key}: ${px(value)};`),
  ]

  const darkLines = [
    `  --ds-background: ${theme.dark.background};`,
    `  --ds-surface: ${theme.dark.surface};`,
    `  --ds-border: ${theme.dark.border};`,
    `  --ds-text-primary: ${theme.dark.text.primary};`,
    `  --ds-text-secondary: ${theme.dark.text.secondary};`,
    `  --ds-text-muted: ${theme.dark.text.muted};`,
    `  --ds-accent: ${theme.dark.accent};`,
    `  --ds-destructive: ${theme.dark.destructive};`,
  ]

  return [':root {', ...rootLines, '}', '', '.dark {', ...darkLines, '}', ''].join('\n')
}
