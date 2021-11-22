import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
    // When enabled, CSS imported in async chunks will be inlined into the async
    // chunk itself and inserted when the chunk is loaded.
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'agnosticvue',
      formats: ['es', 'iife', 'umd', 'cjs'],
      fileName: (format) => `agnosticvue.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  // For local dev
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //   },
  // },
  plugins: [vue()]
})
