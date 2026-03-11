import type { Preview } from '@storybook/vue3';
import '../src/components/ag/styles/ag-tokens.css';
import '../src/components/ag/styles/ag-tokens-dark.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
