import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta = {
  title: 'Foundation/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { label: 'Save recipe', variant: 'primary' },
}

export const Secondary: Story = {
  args: { label: 'Save recipe', variant: 'secondary' },
}

export const Ghost: Story = {
  args: { label: 'Save recipe', variant: 'ghost' },
}

export const Small: Story = {
  args: { label: 'Save recipe', size: 'sm' },
}

export const Medium: Story = {
  args: { label: 'Save recipe', size: 'md' },
}

export const Large: Story = {
  args: { label: 'Save recipe', size: 'lg' },
}

export const Disabled: Story = {
  args: { label: 'Save recipe', disabled: true },
}
