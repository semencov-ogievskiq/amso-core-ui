import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '../Loader';
import { LOADER_COLORS, LOADER_SIZES } from '../constants';
 
const meta: Meta<typeof Loader> = {
  title: 'BaseComponents/Loader',
  component: Loader
};
 
export default meta;

type Story = StoryObj<typeof Loader>;
 
export const Default: Story = {
  args: {}
};

export const Colors: Story = {
  args: {
    size: LOADER_SIZES.X_LARGE,
    color: LOADER_COLORS.PRIMARY
  },
  parameters: {
    controls: { include: ["color"] },
  },
};

export const Sizes: Story = {
  args: {
    size: LOADER_SIZES.X_LARGE,
    color: LOADER_COLORS.PRIMARY
  },
  parameters: {
    controls: { include: ["size"] },
  },
};