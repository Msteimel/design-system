// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card } from './Card'

describe('Card', () => {
  it('has no box-shadow when flat', () => {
    render(
      <Card>
        <p>Recipe summary</p>
      </Card>,
    )
    const card = screen.getByText('Recipe summary').parentElement
    expect(card).toHaveStyle({ boxShadow: 'none' })
  })

  it('applies the shadow token when elevated', () => {
    render(
      <Card elevated>
        <p>Recipe summary</p>
      </Card>,
    )
    const card = screen.getByText('Recipe summary').parentElement
    expect(card).toHaveStyle({ boxShadow: 'var(--ds-shadow)' })
  })
})
