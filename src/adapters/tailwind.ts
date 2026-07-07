import type { Theme } from '../tokens/semantic'
import { spacing, radius } from '../tokens/spacing'
import { fontSizes } from '../tokens/typography'

const px = (n: number) => `${n}px` as const

/** Tailwind 3 `theme.extend` object for NativeWind consumers. */
export function createTailwindTheme(theme: Theme) {
  return {
    colors: {
      background: theme.light.background,
      surface: theme.light.surface,
      border: theme.light.border,
      'text-primary': theme.light.text.primary,
      'text-secondary': theme.light.text.secondary,
      'text-muted': theme.light.text.muted,
      accent: theme.light.accent,
      'dark-background': theme.dark.background,
      'dark-surface': theme.dark.surface,
      'dark-border': theme.dark.border,
      'dark-text-primary': theme.dark.text.primary,
      'dark-text-secondary': theme.dark.text.secondary,
      'dark-text-muted': theme.dark.text.muted,
      'dark-accent': theme.dark.accent,
    },
    spacing: Object.fromEntries(Object.entries(spacing).map(([key, value]) => [key, px(value)])),
    borderRadius: Object.fromEntries(Object.entries(radius).map(([key, value]) => [key, px(value)])),
    fontSize: Object.fromEntries(Object.entries(fontSizes).map(([key, value]) => [key, px(value)])),
  }
}
