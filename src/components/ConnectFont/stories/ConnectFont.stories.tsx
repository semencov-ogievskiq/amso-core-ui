import type { Meta, StoryObj } from '@storybook/react';
import { ConnectFont } from '../ConnectFont';
 
const meta: Meta<typeof ConnectFont> = {
  title: 'Technical/ConnectFont',
  component: ConnectFont,
};
 
export default meta;

type Story = StoryObj<typeof ConnectFont>;
 
export const Default: Story = {
  args: {
    connectBaseFont: true
  },
  render: args => (
    <>
      <ConnectFont {...args}/>
      <h1 style={{ fontFamily: 'Roboto'}}>Use base font Roboto</h1>
    </>
  )
};

export const CdnFont: Story = {
  args: {
    url: 'https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet'
  },
  render: args => (
    <>
      <ConnectFont {...args}/>
      <h1 style={{ fontFamily: '"Edu AU VIC WA NT Pre"'}}>Use font "Edu AU VIC WA NT Pre"</h1>
    </>
  )
};