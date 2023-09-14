import type { Preview } from "@storybook/react";
import '../src/index.css'

export const globalTypes = {
  dataTheme: {
    defaultValue: "rainforest",
  },
  dataThemes: {
    defaultValue: {
      list: [
        { name: "green", dataTheme: "green" },
        { name: "red", dataTheme: "red" },
        { name: "blue", dataTheme: "blue" },
      ],
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
