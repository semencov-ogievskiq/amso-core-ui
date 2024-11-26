import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { Typography } from '../../Typography';
 
const meta: Meta<typeof ThemeProvider> = {
  title: 'Technical/ThemeProvider',
  component: ThemeProvider,
  render: args => (
    <ThemeProvider {...args}>
      <Typography color="info" variant="h3">Typography color="info"</Typography>
    </ThemeProvider>
  )
};
 
export default meta;

type Story = StoryObj<typeof ThemeProvider>;
 
export const Default: Story = {
  args: {
    theme: {
      textColors: {
        info: "#ff317e"
      }
    }
  }, 
};