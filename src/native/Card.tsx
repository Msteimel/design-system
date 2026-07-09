import { View, type ViewProps } from 'react-native'
import type { CardBaseProps } from '../types/card.types'

export interface CardProps extends CardBaseProps, Omit<ViewProps, 'children'> {}

export function Card({ elevated = false, children, className = '', ...props }: CardProps) {
  const classes = [
    'bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-md p-4',
    elevated ? 'shadow-md' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <View className={classes} {...props}>
      {children}
    </View>
  )
}
