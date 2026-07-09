import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text'

const meta = {
  title: 'Foundation/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Heading: Story = {
  args: { variant: 'heading', children: 'Chocolate Chip Cookies' },
}

export const Body: Story = {
  args: { variant: 'body', children: 'Cream the butter and sugar until light and fluffy.' },
}

export const Label: Story = {
  args: { variant: 'label', children: 'Original Author' },
}

export const Caption: Story = {
  args: { variant: 'caption', children: 'Serves 4 · 25 minutes' },
}

export const WeightMatrix: Story = {
  args: { children: 'Weight matrix' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-spacing-2)' }}>
      <Text variant="body" weight="regular">
        Regular weight body text
      </Text>
      <Text variant="body" weight="medium">
        Medium weight body text
      </Text>
      <Text variant="body" weight="semibold">
        Semibold weight body text
      </Text>
      <Text variant="body" weight="bold">
        Bold weight body text
      </Text>
    </div>
  ),
}
