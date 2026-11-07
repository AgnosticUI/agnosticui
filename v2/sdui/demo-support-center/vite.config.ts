// v2/sdui/demo-support-center/vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      /**
       * Traverses all local frontend /api/ chat requests smoothly 
       * back to our standalone Hono Node API process.
       */
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      }
    }
  }
});
