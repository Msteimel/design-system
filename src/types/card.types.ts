import type { ReactNode } from 'react'

// Platform-agnostic Card contract.
export interface CardBaseProps {
  elevated?: boolean
  children: ReactNode
}
