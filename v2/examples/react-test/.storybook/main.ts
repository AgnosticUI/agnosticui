import type { StorybookConfig } from '@storybook/react-vite';
import type { InlineConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/components/ag/**/*.mdx',
    '../src/components/ag/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config): Promise<InlineConfig> {
    // Remove noDiscovery so Storybook can pre-bundle its own dependencies.
    // The main app uses noDiscovery for performance, but Storybook needs discovery on.
    if (config.optimizeDeps) {
      config.optimizeDeps.noDiscovery = false;
    }
    return config;
  },
};
export default config;