// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders a <button> whose accessible name is the label', () => {
    render(<Button label="Save recipe" />)
    expect(screen.getByRole('button', { name: 'Save recipe' })).toBeInTheDocument()
  })

  it('fires onClick when pressed', () => {
    const onClick = vi.fn()
    render(<Button label="Save recipe" onClick={onClick} />)

    fireEvent.click(screen.getByRole('button', { name: 'Save recipe' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('respects disabled via the disabled attribute, not class-only', () => {
    const onClick = vi.fn()
    render(<Button label="Save recipe" disabled onClick={onClick} />)

    const button = screen.getByRole('button', { name: 'Save recipe' })
    expect(button).toBeDisabled()

    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })
})
