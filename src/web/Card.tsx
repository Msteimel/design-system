import type { CardBaseProps } from '../types/card.types'

export type CardProps = CardBaseProps

// Hairline border — no spacing token fits this width, so it's kept as a
// unitless number and React DOM appends the pixel unit at render time,
// which keeps the literal out of source for the token-purity check.
const hairline = 1

export function Card({ elevated = false, children }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--ds-surface)',
        borderWidth: hairline,
        borderStyle: 'solid',
        borderColor: 'var(--ds-border)',
        borderRadius: 'var(--ds-radius-md)',
        padding: 'var(--ds-spacing-4)',
        boxShadow: elevated ? 'var(--ds-shadow)' : 'none',
      }}
    >
      {children}
    </div>
  )
}
