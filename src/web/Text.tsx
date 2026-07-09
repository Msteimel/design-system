import type { CSSProperties, JSX } from 'react'
import type { TextBaseProps, TextVariant, TextWeight } from '../types/text.types'
import { fontWeights } from '../tokens/typography'

export type TextElement = 'p' | 'span' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface TextProps extends TextBaseProps {
  /** Semantic element to render. Defaults to `p`. */
  as?: TextElement
}

const sizeVar: Record<TextVariant, string> = {
  heading: 'var(--ds-font-size-xl)',
  body: 'var(--ds-font-size-base)',
  label: 'var(--ds-font-size-sm)',
  caption: 'var(--ds-font-size-xs)',
}

const defaultWeight: Record<TextVariant, TextWeight> = {
  heading: 'semibold',
  body: 'regular',
  label: 'medium',
  caption: 'regular',
}

const colorVar: Record<TextVariant, string> = {
  heading: 'var(--ds-text-primary)',
  body: 'var(--ds-text-primary)',
  label: 'var(--ds-text-primary)',
  caption: 'var(--ds-text-secondary)',
}

export function Text({ as, variant = 'body', weight, children }: TextProps) {
  const Tag = (as ?? 'p') as keyof JSX.IntrinsicElements
  const resolvedWeight = weight ?? defaultWeight[variant]
  const style: CSSProperties = {
    fontSize: sizeVar[variant],
    fontWeight: fontWeights[resolvedWeight],
    color: colorVar[variant],
  }

  return <Tag style={style}>{children}</Tag>
}
