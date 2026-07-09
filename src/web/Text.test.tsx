// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Text } from './Text'

describe('Text', () => {
  it('renders a <p> by default', () => {
    render(<Text>Ingredients</Text>)
    const node = screen.getByText('Ingredients')
    expect(node.tagName).toBe('P')
  })

  it('renders the element passed via `as`', () => {
    render(<Text as="h1">Chocolate Chip Cookies</Text>)
    const node = screen.getByText('Chocolate Chip Cookies')
    expect(node.tagName).toBe('H1')
  })

  it('renders span and label elements via `as`', () => {
    render(
      <>
        <Text as="span">inline note</Text>
        <Text as="label">Original Author</Text>
      </>,
    )
    expect(screen.getByText('inline note').tagName).toBe('SPAN')
    expect(screen.getByText('Original Author').tagName).toBe('LABEL')
  })
})
