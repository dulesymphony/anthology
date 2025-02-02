import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

// The default export, Meta, contains metadata about this component’s stories
// Each argType takes a set of parameters that isn’t necessarily about the argument or prop itself,
// but more about how you’d want Storybook to render the control in the table.
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    // values that you can pass and default values
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'Text to display on the button',
      table: {
        disable: true,
      },
    },
    variant: {
      name: 'Variant',
      description: 'Variant of the button',
      control: 'select',
    },
    size: {
      name: 'Size',
      control: 'select',
      description: 'Size of the button',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the button',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
};

export default meta;

// Each named export is a story. You’ll need at least one named export if you want to see anything.
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'large',
  },
};
