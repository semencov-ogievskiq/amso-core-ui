import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../Typography';
 
const meta: Meta<typeof Typography> = {
  title: 'BaseComponents/Typography',
  component: Typography,
  args: {
    children: "This is an example of the text from your landing page"
  }
};
 
export default meta;

type Story = StoryObj<typeof Typography>;
 
export const Default: Story = {};

export const Variants: Story = {
  args: {
    variant: "h1"
  },
  parameters: {
    controls: { include: ["variant"] },
  },
};

export const Colors: Story = {
  args: {
    color: "primary"
  },
  parameters: {
    controls: { include: ["color"] },
  },
};

export const Transform: Story = {
  args: {
    transform: "uppercase"
  },
  parameters: {
    controls: { include: ["transform"] },
  },
};

export const NoWrap: Story = {
  args: {
    style: { width: "100px"},
    noWrap: true
  },
  parameters: {
    controls: { include: ["noWrap"] },
  },
};

