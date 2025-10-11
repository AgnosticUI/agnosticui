import type { Preview } from '@storybook/vue3-vite'
import "agnosticui-core/styles/tokens.css";
import "agnosticui-core/styles/tokens-dark.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' }
        ],
        dynamicTitle: true,
      },
    },
  },
};

// Apply data-theme attribute to html element when theme changes
export const decorators = [
  (Story: any, context: any) => {
    const theme = context.globals.theme || 'light';

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    });

    return Story();
  }
];

export default preview;
