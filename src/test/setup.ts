// Shared vitest setup: jest-dom matchers + testing-library DOM cleanup
// between tests. Runs for every test file (including non-jsdom ones, where
// it's a no-op) so web component tests don't leak DOM state across `it`s.
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
