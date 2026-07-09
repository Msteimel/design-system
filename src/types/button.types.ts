// Platform-agnostic Button contract. Web adds `onClick`; native adds
// `onPress` and `accentColor` (see phase-3 spec §3.8) — extend per platform
// in the component files, not here.
export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonBaseProps {
  label: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
}
