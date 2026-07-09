// Compile-only check for the native components (phase-3 spec §3.16).
// `react-native` can't run under a plain Node/jsdom vitest environment
// without a Metro/Expo runtime, so this validates the exported component
// and prop shapes purely at the type level — `tsc --noEmit` (part of
// `npm run check`) resolves this file, but nothing here is ever rendered.
// Visual/behavioral verification happens in the personal-compass simulator
// during phase 4.
import { Button, Card, Text } from './index'
import type { ButtonProps } from './Button'
import type { CardProps } from './Card'
import type { TextProps } from './Text'

const buttonProps: ButtonProps = { label: 'Save recipe', variant: 'primary', size: 'md', onPress: () => {} }
const textProps: TextProps = { variant: 'body', children: 'Ingredients' }
const cardProps: CardProps = { elevated: true, children: 'Ingredients' }

export const __nativeTypeCheck = { Button, Card, Text, buttonProps, textProps, cardProps }
