import { describe, expect, it } from 'vitest'
import { createCSSVars } from './css'
import { tastyTomesTheme } from '../themes/tasty-tomes'

describe('createCSSVars', () => {
  const output = createCSSVars(tastyTomesTheme)

  it('contains the root background var', () => {
    expect(output).toContain('--ds-background:')
  })

  it('contains a .dark block', () => {
    expect(output).toContain('.dark {')
  })

  it('contains the radius-md var at 12px', () => {
    expect(output).toContain('--ds-radius-md: 12px')
  })

  it('light and dark background values differ', () => {
    expect(tastyTomesTheme.light.background).not.toBe(tastyTomesTheme.dark.background)
  })

  it('matches the locked snapshot format', () => {
    expect(output).toMatchSnapshot()
  })
})
