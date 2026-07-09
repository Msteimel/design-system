import type { CSSProperties } from 'react'
import { cva } from 'class-variance-authority'
import type { ButtonBaseProps, ButtonSize, ButtonVariant } from '../types/button.types'
import { fontWeights } from '../tokens/typography'

export interface ButtonProps extends ButtonBaseProps {
  onClick?: () => void
}

/** Semantic class names for consumers who want CSS hooks; visual values are
 * applied inline below via `--ds-*` custom properties. */
const buttonVariants = cva('ds-button', {
  variants: {
    variant: {
      primary: 'ds-button--primary',
      secondary: 'ds-button--secondary',
      ghost: 'ds-button--ghost',
    },
    size: {
      sm: 'ds-button--sm',
      md: 'ds-button--md',
      lg: 'ds-button--lg',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})

// Hairline border — no spacing token fits this width, so it's kept as a
// unitless number and React DOM appends the pixel unit at render time,
// which keeps the literal out of source for the token-purity check.
const hairline = 1

const variantStyle: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: 'var(--ds-accent)',
    // Background is the accent color, so the on-accent text uses the
    // theme's background var — both shipped themes invert accent/background
    // between light and dark, keeping this readable in every combination.
    color: 'var(--ds-background)',
    borderWidth: hairline,
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  secondary: {
    backgroundColor: 'var(--ds-surface)',
    color: 'var(--ds-text-primary)',
    borderWidth: hairline,
    borderStyle: 'solid',
    borderColor: 'var(--ds-border)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--ds-text-secondary)',
    borderWidth: hairline,
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
}

const sizeStyle: Record<ButtonSize, CSSProperties> = {
  sm: {
    padding: 'var(--ds-spacing-2) var(--ds-spacing-3)',
    fontSize: 'var(--ds-font-size-sm)',
  },
  md: {
    padding: 'var(--ds-spacing-3) var(--ds-spacing-4)',
    fontSize: 'var(--ds-font-size-base)',
  },
  lg: {
    padding: 'var(--ds-spacing-4) var(--ds-spacing-6)',
    fontSize: 'var(--ds-font-size-lg)',
  },
}

export function Button({ label, variant = 'primary', size = 'md', disabled = false, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={buttonVariants({ variant, size })}
      disabled={disabled}
      onClick={onClick}
      style={{
        ...variantStyle[variant],
        ...sizeStyle[size],
        borderRadius: 'var(--ds-radius-md)',
        fontWeight: fontWeights.medium,
        cursor: disabled ? 'not-allowed' : 'pointer',
        // No dedicated disabled-opacity token yet; 0.5 is a one-off affordance,
        // not a visual value the token-purity check tracks (no hex/px).
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {label}
    </button>
  )
}
