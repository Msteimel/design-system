import type { ReactNode } from 'react'

// Platform-agnostic Text contract.
export type TextVariant = 'heading' | 'body' | 'label' | 'caption'
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold'

export interface TextBaseProps {
  variant?: TextVariant
  weight?: TextWeight
  children: ReactNode
}
