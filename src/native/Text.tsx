import { Text as RNText, type TextProps as RNTextProps } from 'react-native'
import type { TextBaseProps, TextVariant, TextWeight } from '../types/text.types'

export interface TextProps extends TextBaseProps, Omit<RNTextProps, 'children'> {
  className?: string
}

// Font-size scale — className names match the keys `createTailwindTheme`
// emits into `fontSize` (xs/sm/base/lg/xl), which NativeWind resolves to
// the token pixel values.
const sizeClasses: Record<TextVariant, string> = {
  heading: 'text-xl',
  body: 'text-base',
  label: 'text-sm',
  caption: 'text-xs',
}

const weightClasses: Record<TextWeight, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

const defaultWeight: Record<TextVariant, TextWeight> = {
  heading: 'semibold',
  body: 'regular',
  label: 'medium',
  caption: 'regular',
}

const colorClasses: Record<TextVariant, string> = {
  heading: 'text-text-primary dark:text-dark-text-primary',
  body: 'text-text-primary dark:text-dark-text-primary',
  label: 'text-text-primary dark:text-dark-text-primary',
  caption: 'text-text-secondary dark:text-dark-text-secondary',
}

export function Text({ variant = 'body', weight, className = '', children, ...props }: TextProps) {
  const resolvedWeight = weight ?? defaultWeight[variant]
  const classes = [sizeClasses[variant], weightClasses[resolvedWeight], colorClasses[variant], className]
    .filter(Boolean)
    .join(' ')

  return (
    <RNText className={classes} {...props}>
      {children}
    </RNText>
  )
}
