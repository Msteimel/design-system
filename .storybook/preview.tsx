import type { Preview } from '@storybook/react-vite'
import { useEffect } from 'react'
import { createCSSVars, personalCompassTheme, tastyTomesTheme } from '../src/tokens'

// Proves the foundation components restyle purely via `--ds-*` custom
// properties: swapping the injected stylesheet is the only thing the
// toolbar control does — no component code changes per theme.
const themes = {
  'tasty-tomes': tastyTomesTheme,
  'personal-compass': personalCompassTheme,
} as const

type ThemeName = keyof typeof themes

const STYLE_ELEMENT_ID = 'ds-theme-vars'

function applyTheme(themeName: ThemeName) {
  let styleEl = document.getElementById(STYLE_ELEMENT_ID)
  if (!(styleEl instanceof HTMLStyleElement)) {
    styleEl = document.createElement('style')
    styleEl.id = STYLE_ELEMENT_ID
    document.head.appendChild(styleEl)
  }
  styleEl.textContent = createCSSVars(themes[themeName])
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  initialGlobals: {
    theme: 'tasty-tomes' satisfies ThemeName,
  },
  globalTypes: {
    theme: {
      description: 'Design system theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'tasty-tomes', title: 'Tasty Tomes' },
          { value: 'personal-compass', title: 'Personal Compass' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeName = context.globals.theme as ThemeName
      useEffect(() => {
        applyTheme(themeName)
      }, [themeName])
      return <Story />
    },
  ],
};

export default preview;