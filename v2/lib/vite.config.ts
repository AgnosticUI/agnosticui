import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import { extname, relative } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: Object.fromEntries(
        glob.sync('src/**/*.{ts,tsx,vue,svelte}', { ignore: ['**/*.spec.ts'] }).map(file => [
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      name: 'AgnosticUICore',
      formats: ['es']
    },
    rollupOptions: {
      external: ['lit', 'react', 'react-dom', 'vue', 'svelte'],
      output: {
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          // Check for .css is sufficient because:
          // 1. Web component interactive styles are trapped inside JS string-literals (Lit css`` tokens)
          // 2. Web component structural loader styles are swallowed inline via `?inline` string queries
          // 3. This leaves only global sheets (handled by gatekeeper below) and raw server-fallback CSS Modules
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            // Gatekeeper: Keep intentional standalone global assets isolated
            if (assetInfo.name.includes('table') || assetInfo.name.includes('nav-button')) {
              return 'styles/[name][extname]';
            }
            // Catch-all: Route all isomorphic component layout CSS Modules into one unified cached file
            return 'styles/framework-components[extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    }
  },
  plugins: [
    dts(),
    react(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ag-')
        }
      }
    }),
    svelte({
      compilerOptions: {
        customElement: false
      }
    })
  ],
});
