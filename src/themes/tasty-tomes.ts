import type { Theme } from '../tokens/semantic'
import {
  white,
  slate200,
  slate500,
  slate900,
  slate950,
  slate50,
  slate400,
  whiteAlpha10,
  scarlet600,
  scarlet400,
  green50,
  green200,
  green600,
  green700,
  amber50,
  amber300,
  amber600,
  amber800,
  blue50,
  blue200,
  blue600,
  blue700,
  blue800,
  red50,
  red300,
  red700,
} from '../tokens/primitive'

/**
 * tasty-tomes's Theme. Maps shadcn CSS custom properties (src/app/globals.css)
 * to semantic roles:
 *   --background -> background   --card -> surface   --border -> border
 *   --foreground -> text.primary --muted-foreground -> text.muted (and
 *   text.secondary, since tasty-tomes has no distinct secondary text token)
 *   --primary -> accent          --destructive -> destructive
 * Light values from `:root`, dark values from `.dark`.
 */
export const tastyTomesTheme: Theme = {
  light: {
    background: white,
    surface: white,
    border: slate200,
    text: { primary: slate950, secondary: slate500, muted: slate500 },
    accent: slate900,
    destructive: scarlet600,
  },
  dark: {
    background: slate950,
    surface: slate900,
    border: whiteAlpha10,
    text: { primary: slate50, secondary: slate400, muted: slate400 },
    accent: slate200,
    destructive: scarlet400,
  },
}

/**
 * tasty-tomes's status color families (success/warning/info/destructive-surface)
 * and link colors, added June 2026 (ticket 0017). These are tasty-tomes-specific
 * extensions, NOT part of the core `Theme` — a future phase may promote shared
 * extensions into `Theme`.
 */
export const tastyTomesStatusColors = {
  success: green600,
  successSurface: green50,
  successBorder: green200,
  successSurfaceForeground: green700,
  warning: amber600,
  warningSurface: amber50,
  warningBorder: amber300,
  warningSurfaceForeground: amber800,
  info: blue600,
  infoSurface: blue50,
  infoBorder: blue200,
  infoSurfaceForeground: blue700,
  destructiveSurface: red50,
  destructiveBorder: red300,
  destructiveSurfaceForeground: red700,
  link: blue600,
  linkHover: blue800,
} as const
