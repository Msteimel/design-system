import { describe, expect, it } from 'vitest'
import { createTailwindTheme } from './tailwind'
import { personalCompassTheme } from '../themes/personal-compass'

describe('createTailwindTheme', () => {
  const result = createTailwindTheme(personalCompassTheme)

  it('maps light + dark color roles to the expected class names', () => {
    expect(result.colors.accent).toBe(personalCompassTheme.light.accent)
    expect(result.colors['dark-background']).toBe(personalCompassTheme.dark.background)
    expect(result.colors.background).toBe(personalCompassTheme.light.background)
    expect(result.colors.surface).toBe(personalCompassTheme.light.surface)
    expect(result.colors.border).toBe(personalCompassTheme.light.border)
    expect(result.colors['text-primary']).toBe(personalCompassTheme.light.text.primary)
    expect(result.colors['text-secondary']).toBe(personalCompassTheme.light.text.secondary)
    expect(result.colors['text-muted']).toBe(personalCompassTheme.light.text.muted)
    expect(result.colors['dark-surface']).toBe(personalCompassTheme.dark.surface)
    expect(result.colors['dark-border']).toBe(personalCompassTheme.dark.border)
    expect(result.colors['dark-text-primary']).toBe(personalCompassTheme.dark.text.primary)
    expect(result.colors['dark-text-secondary']).toBe(personalCompassTheme.dark.text.secondary)
    expect(result.colors['dark-text-muted']).toBe(personalCompassTheme.dark.text.muted)
    expect(result.colors['dark-accent']).toBe(personalCompassTheme.dark.accent)
  })

  it('converts spacing and radius scales to px strings', () => {
    expect(result.spacing['4']).toBe('16px')
    expect(result.borderRadius.md).toBe('12px')
    expect(result.borderRadius.full).toBe('9999px')
  })

  it('converts font sizes to px strings', () => {
    expect(result.fontSize.base).toBe('16px')
    expect(result.fontSize['2xl']).toBe('32px')
  })
})
