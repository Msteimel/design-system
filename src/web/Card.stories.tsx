import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'
import { Text } from './Text'

const meta = {
  title: 'Foundation/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Flat: Story = {
  args: {
    elevated: false,
    children: (
      <>
        <Text as="h3" variant="heading">
          Chocolate Chip Cookies
        </Text>
        <Text variant="body">Cream the butter and sugar until light and fluffy.</Text>
      </>
    ),
  },
}

export const Elevated: Story = {
  args: {
    elevated: true,
    children: (
      <>
        <Text as="h3" variant="heading">
          Chocolate Chip Cookies
        </Text>
        <Text variant="body">Cream the butter and sugar until light and fluffy.</Text>
      </>
    ),
  },
}
