/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        actions: resolve(__dirname, 'pages/actions.html'),
        forms: resolve(__dirname, 'pages/forms.html'),
        feedback: resolve(__dirname, 'pages/feedback.html'),
        navigation: resolve(__dirname, 'pages/navigation.html'),
        overlays: resolve(__dirname, 'pages/overlays.html'),
        layout: resolve(__dirname, 'pages/layout.html'),
        display: resolve(__dirname, 'pages/display.html')
      }
    }
  },
  optimizeDeps: {
    noDiscovery: true,
    holdUntilCrawlEnd: false,
    include: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client', 'lit', 'lit/decorators.js', 'lit/directives/if-defined.js', '@lit/react', '@floating-ui/dom', 'focus-trap']
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});