import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
    // When enabled, CSS imported in async chunks will be inlined into the async
    // chunk itself and inserted when the chunk is loaded.
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'agnostic-helpers',
      // formats: ['es', 'iife', 'umd', 'cjs'],
      // Doing this in rollup instead
      fileName: (format) => `agnostic-helpers.${format}.js`,
    },
    rollupOptions: {
      output: [{
        format: "esm",
        esModule: true,
        exports: "named",
      }, {
        format: "umd",
        // inlineDynamicImports: true,
        interop: "esModule",
        exports: "named",
      }, {
        format: 'cjs',
        exports: "named",
      }],
    },
  },
  plugins: [],
});
