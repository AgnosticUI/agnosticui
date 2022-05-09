import path from 'path';
import * as url from 'url';
const cwd = url.fileURLToPath(new URL('.', import.meta.url));

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()],
  build: {
    minify: 'esbuild',
    // When enabled, CSS imported in async chunks will be inlined into the async
    // chunk itself and inserted when the chunk is loaded.
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(cwd, 'src/components/index.ts'),
      name: 'agnostic-vue',
      // formats: ['es', 'iife', 'umd', 'cjs'],
      // Doing this in rollup instead
      fileName: (format) => `agnostic-vue.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // Add external deps here
      //   globals: {
      //     vue: 'Vue',
      //   },
      // },
      output: [{
        format: "esm",
        esModule: true,
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }, {
        format: "umd",
        // inlineDynamicImports: true,
        interop: "esModule",
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }, {
        format: 'cjs',
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }],
    },
  },
})
