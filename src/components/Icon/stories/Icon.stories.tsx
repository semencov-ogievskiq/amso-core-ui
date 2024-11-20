import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../Icon';
import { ICON_COLORS, ICON_SIZES } from '../constants';
 
const meta: Meta<typeof Icon> = {
  title: 'Base/Icon',
  component: Icon,
  render: args => (
    <Icon {...args} viewBox='0 -960 960 960'>
      <path d="M126-86v-126h708v126H126Zm187-186q-78 0-132.5-54.5T126-459v-415h663q51.56 0 88.28 37T914-749v120q0 51-36.72 88T789-504h-61v45q0 78-55.22 132.5Q617.55-272 540-272H313Zm1-126h225q25.99 0 44.49-18.21Q602-434.42 602-460v-288H252v288q0 25.58 18.21 43.79T314-398Zm414-231h60v-120h-60v120ZM314-398h-62 350-288Z"/>
    </Icon>
  )
};
 
export default meta;

type Story = StoryObj<typeof Icon>;
 
export const Default: Story = {
  args: {}
};

export const Colors: Story = {
  args: {
    size: ICON_SIZES.X_LARGE,
    color: ICON_COLORS.PRIMARY
  },
  parameters: {
    controls: { include: ["color"] },
  },
};

export const Fill: Story = {
  args: {
    size: ICON_SIZES.X_LARGE,
    color: ICON_COLORS.PRIMARY
  },
  parameters: {
    controls: { include: ["fill"] },
  },
};

export const Sizes: Story = {
  args: {
    size: ICON_SIZES.X_LARGE,
    color: ICON_COLORS.PRIMARY
  },
  parameters: {
    controls: { include: ["size"] },
  },
};