import type { Preview } from '@storybook/web-components-vite'
import "agnosticui-core/styles/tokens.css";
import "agnosticui-core/styles/tokens-dark.css";

// Apply base background and text colors to the entire preview
const style = document.createElement('style');
style.textContent = `
  html, body {
    background-color: var(--ag-background-primary);
    color: var(--ag-text-primary);
    margin: 0;
    padding: 0;
  }

  /* Override Storybook Docs styles for dark mode */
  [data-theme="dark"] .sbdocs,
  [data-theme="dark"] .sbdocs-wrapper,
  [data-theme="dark"] .sbdocs-content {
    background-color: var(--ag-background-primary) !important;
    color: var(--ag-text-primary) !important;
  }

  [data-theme="dark"] .sbdocs h1,
  [data-theme="dark"] .sbdocs h2,
  [data-theme="dark"] .sbdocs h3,
  [data-theme="dark"] .sbdocs h4,
  [data-theme="dark"] .sbdocs h5,
  [data-theme="dark"] .sbdocs h6,
  [data-theme="dark"] .sbdocs p,
  [data-theme="dark"] .sbdocs a,
  [data-theme="dark"] .sbdocs li {
    color: var(--ag-text-primary) !important;
  }

  [data-theme="dark"] .sbdocs pre,
  [data-theme="dark"] .sbdocs code {
    background-color: var(--ag-background-secondary) !important;
    color: var(--ag-text-primary) !important;
  }
`;
document.head.appendChild(style);

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
