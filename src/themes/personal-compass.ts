import type { Theme } from '../tokens/semantic'
import {
  cream50,
  cream100,
  cream200,
  espresso900,
  espresso700,
  stone500,
  espresso950,
  espresso850,
  espresso750,
  ivory50,
  tan400,
  umber400,
  clay500,
  rust600,
  forest500,
  gold500,
  teal600,
  violet500,
  terracotta500,
  moss500,
  magenta500,
  indigo500,
} from '../tokens/primitive'

/**
 * personal-compass's Theme. Colors sourced from that app's src/tokens/colors.ts
 * (`colors` for light, `darkColors` for dark), referenced from primitive.ts
 * rather than re-typed as hex.
 *
 * personal-compass has no dedicated destructive/error color — `habit.exercise`
 * (rust600) is the closest existing red-toned primitive in its palette and is
 * reused here rather than inventing a new hex value.
 */
export const personalCompassTheme: Theme = {
  light: {
    background: cream50,
    surface: cream100,
    border: cream200,
    text: { primary: espresso900, secondary: espresso700, muted: stone500 },
    accent: clay500,
    destructive: rust600,
  },
  dark: {
    background: espresso950,
    surface: espresso850,
    border: espresso750,
    text: { primary: ivory50, secondary: tan400, muted: umber400 },
    accent: clay500,
    destructive: rust600,
  },
}

/**
 * personal-compass's 10-key habit color map. App-specific — not part of the
 * core `Theme` contract.
 */
export const personalCompassHabitColors = {
  sleep: clay500,
  exercise: rust600,
  meditation: forest500,
  creative: gold500,
  water: teal600,
  reading: violet500,
  journal: terracotta500,
  walk: moss500,
  gratitude: magenta500,
  focus: indigo500,
} as const

export type HabitColorKey = keyof typeof personalCompassHabitColors
