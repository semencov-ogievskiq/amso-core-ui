import React from 'react'
import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from '@emotion/react';
import { ConnectFont } from '../src'

const lightTheme = {}
const darkTheme = {}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(fill|stroke)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        lightTheme,
        darkTheme
      },
      defaultTheme: 'lightTheme',
      Provider: ThemeProvider,
    }),
    (Story) => (
      <>
        <ConnectFont connectBaseFont/>
        <Story />
      </>
    ),
  ],
};

export default preview;
