import type { StorybookConfig } from '@storybook/vue3-vite';
import type { InlineConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/components/ag/**/*.mdx',
    '../src/components/ag/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/vue3-vite',
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
