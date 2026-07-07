import { describe, expect, it } from 'vitest'
import type { Theme } from './semantic'
import { personalCompassTheme, personalCompassHabitColors } from '../themes/personal-compass'
import { tastyTomesTheme, tastyTomesStatusColors } from '../themes/tasty-tomes'

describe('Theme structural compliance', () => {
  it('personalCompassTheme satisfies Theme', () => {
    const check: Theme = personalCompassTheme
    expect(check).toBeDefined()
    for (const mode of ['light', 'dark'] as const) {
      const tokens = personalCompassTheme[mode]
      expect(typeof tokens.background).toBe('string')
      expect(typeof tokens.surface).toBe('string')
      expect(typeof tokens.border).toBe('string')
      expect(typeof tokens.text.primary).toBe('string')
      expect(typeof tokens.text.secondary).toBe('string')
      expect(typeof tokens.text.muted).toBe('string')
      expect(typeof tokens.accent).toBe('string')
      expect(typeof tokens.destructive).toBe('string')
    }
  })

  it('tastyTomesTheme satisfies Theme', () => {
    const check: Theme = tastyTomesTheme
    expect(check).toBeDefined()
    for (const mode of ['light', 'dark'] as const) {
      const tokens = tastyTomesTheme[mode]
      expect(typeof tokens.background).toBe('string')
      expect(typeof tokens.surface).toBe('string')
      expect(typeof tokens.border).toBe('string')
      expect(typeof tokens.text.primary).toBe('string')
      expect(typeof tokens.text.secondary).toBe('string')
      expect(typeof tokens.text.muted).toBe('string')
      expect(typeof tokens.accent).toBe('string')
      expect(typeof tokens.destructive).toBe('string')
    }
  })

  it('personalCompassHabitColors has all 10 habit keys, not part of Theme', () => {
    const keys = Object.keys(personalCompassHabitColors)
    expect(keys).toHaveLength(10)
    expect(keys).toEqual(
      expect.arrayContaining([
        'sleep',
        'exercise',
        'meditation',
        'creative',
        'water',
        'reading',
        'journal',
        'walk',
        'gratitude',
        'focus',
      ]),
    )
  })

  it('tastyTomesStatusColors carries the status families, not part of Theme', () => {
    expect(tastyTomesStatusColors.success).toMatch(/^#/)
    expect(tastyTomesStatusColors.warning).toMatch(/^#/)
    expect(tastyTomesStatusColors.info).toMatch(/^#/)
    expect(tastyTomesStatusColors.destructiveSurface).toMatch(/^#/)
    expect(tastyTomesStatusColors.link).toMatch(/^#/)
  })
})
