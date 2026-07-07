// Raw palette values. No semantic meaning, no light/dark labeling — that
// happens in src/tokens/semantic.ts and src/themes/*. Group by hue family,
// name descriptively but not by role (e.g. `clay500`, not `accent`).
//
// Sources:
// - personal-compass: src/tokens/colors.ts (`colors` + `darkColors`) — hex verbatim.
// - tasty-tomes: src/app/globals.css (OKLCH) — converted to hex via the OKLab/sRGB
//   matrices (Björn Ottosson's oklab reference implementation), rounded to the
//   nearest hex byte. Each converted value is commented with its source OKLCH string.

export const white = '#FFFFFF' as const

// --- Warm neutrals (personal-compass, light mode) ---
export const cream50 = '#FAF7F2' as const // colors.background
export const cream100 = '#F2EAE0' as const // colors.surface
export const cream200 = '#E8DDD3' as const // colors.border
export const espresso900 = '#2C1A10' as const // colors.text.primary
export const espresso700 = '#7A6355' as const // colors.text.secondary
export const stone500 = '#8A8785' as const // colors.text.muted

// --- Warm neutrals (personal-compass, dark mode) ---
export const espresso950 = '#1C1410' as const // darkColors.background
export const espresso850 = '#2A1F17' as const // darkColors.surface
export const espresso750 = '#3D2E24' as const // darkColors.border
export const ivory50 = '#F5EFE8' as const // darkColors.text.primary
export const tan400 = '#C4A882' as const // darkColors.text.secondary
export const umber400 = '#8A7565' as const // darkColors.text.muted

// --- Brand accent (personal-compass, shared light/dark) ---
export const clay500 = '#E07B39' as const // colors.accent / darkColors.accent / habit.sleep

// --- Habit palette (personal-compass, shared light/dark) ---
export const rust600 = '#B5341A' as const // habit.exercise
export const forest500 = '#3D8C5F' as const // habit.meditation
export const gold500 = '#C9A227' as const // habit.creative
export const teal600 = '#2E86AB' as const // habit.water
export const violet500 = '#6B4C9A' as const // habit.reading
export const terracotta500 = '#C97B5A' as const // habit.journal
export const moss500 = '#5C8A4A' as const // habit.walk
export const magenta500 = '#C94B8A' as const // habit.gratitude
export const indigo500 = '#4A6FA5' as const // habit.focus

// --- Cool neutrals (tasty-tomes, light mode) ---
// background & card share `white` above: oklch(1 0 0)
export const slate200 = '#E2E8F0' as const // --border: oklch(0.929 0.013 255.508)
export const slate500 = '#62748E' as const // --muted-foreground: oklch(0.554 0.046 257.417)
export const slate900 = '#0F172B' as const // --primary: oklch(0.208 0.042 265.755)

// --- Cool neutrals (tasty-tomes, dark mode) ---
export const slate950 = '#020618' as const // --background (dark): oklch(0.129 0.042 264.695)
export const slate50 = '#F8FAFC' as const // --foreground (dark): oklch(0.984 0.003 247.858)
export const slate400 = '#90A1B9' as const // --muted-foreground (dark): oklch(0.704 0.04 256.788)
export const whiteAlpha10 = '#FFFFFF1A' as const // --border (dark): oklch(1 0 0 / 10%)

// --- Destructive red (tasty-tomes; inline oklch, not a named Tailwind stop) ---
export const scarlet600 = '#E7000B' as const // --destructive (light): oklch(0.577 0.245 27.325)
export const scarlet400 = '#FF6467' as const // --destructive (dark): oklch(0.704 0.191 22.216)

// --- Status family stops (tasty-tomes; Tailwind v4 default palette, not overridden
// in globals.css — these are the framework's stable documented values, referenced
// by var name only, e.g. `--success: var(--color-green-600)`) ---
export const green50 = '#F0FDF4' as const
export const green200 = '#BBF7D0' as const
export const green600 = '#16A34A' as const
export const green700 = '#15803D' as const
export const amber50 = '#FFFBEB' as const
export const amber300 = '#FCD34D' as const
export const amber600 = '#D97706' as const
export const amber800 = '#92400E' as const
export const blue50 = '#EFF6FF' as const
export const blue200 = '#BFDBFE' as const
export const blue600 = '#2563EB' as const
export const blue700 = '#1D4ED8' as const
export const blue800 = '#1E40AF' as const
export const red50 = '#FEF2F2' as const
export const red300 = '#FCA5A5' as const
export const red700 = '#B91C1C' as const
