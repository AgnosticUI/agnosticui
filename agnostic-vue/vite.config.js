import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
    // When enabled, CSS imported in async chunks will be inlined into the async
    // chunk itself and inserted when the chunk is loaded.
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
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
  // For local dev
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //   },
  // },
  plugins: [vue()]
});
