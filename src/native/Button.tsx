import { Pressable, type ViewStyle } from 'react-native'
import { Text } from './Text'
import type { ButtonBaseProps, ButtonSize, ButtonVariant } from '../types/button.types'
import type { TextWeight } from '../types/text.types'

export interface ButtonProps extends ButtonBaseProps {
  onPress?: () => void
  /**
   * Dynamic accent for the `primary` variant (e.g. an app's user-selected
   * habit color). Applied as an inline `backgroundColor` so the DS stays
   * decoupled from any consuming app's store. Falls back to the static
   * `bg-accent` theme class when omitted.
   */
  accentColor?: string
}

const containerClasses: Record<ButtonVariant, string> = {
  primary: 'rounded-full items-center justify-center bg-accent',
  secondary:
    'rounded-full items-center justify-center bg-surface dark:bg-dark-surface border border-border dark:border-dark-border',
  ghost: 'rounded-full items-center justify-center',
}

const labelColorClasses: Record<ButtonVariant, string> = {
  primary: 'text-white',
  secondary: 'text-text-primary dark:text-dark-text-primary',
  ghost: 'text-text-secondary dark:text-dark-text-secondary',
}

const labelWeight: Record<ButtonVariant, TextWeight> = {
  primary: 'semibold',
  secondary: 'medium',
  ghost: 'medium',
}

// Spacing scale — className names match the keys `createTailwindTheme` emits
// into `spacing`, which NativeWind resolves to the token pixel values.
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2',
  md: 'px-6 py-3',
  lg: 'px-8 py-4',
}

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onPress,
  accentColor,
}: ButtonProps) {
  const inlineStyle: ViewStyle | undefined =
    variant === 'primary' && accentColor ? { backgroundColor: accentColor } : undefined

  const classes = [
    containerClasses[variant],
    sizeClasses[size],
    'active:opacity-70',
    disabled ? 'opacity-50' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      className={classes}
      style={inlineStyle}
    >
      <Text variant="label" weight={labelWeight[variant]} className={labelColorClasses[variant]}>
        {label}
      </Text>
    </Pressable>
  )
}
