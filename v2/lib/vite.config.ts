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
        glob.sync('src/**/*.{ts,tsx,vue,svelte}').map(file => [
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.ts becomes nested/foo
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo.ts becomes /project/src/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      name: 'AgnosticUICore',
      formats: ['es']
    },
    rollupOptions: {
      external: ['lit', 'react', 'react-dom', 'vue', 'svelte'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
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
