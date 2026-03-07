import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        actions:    resolve(__dirname, 'pages/actions.html'),
        forms:      resolve(__dirname, 'pages/forms.html'),
        feedback:   resolve(__dirname, 'pages/feedback.html'),
        navigation: resolve(__dirname, 'pages/navigation.html'),
        overlays:   resolve(__dirname, 'pages/overlays.html'),
        layout:     resolve(__dirname, 'pages/layout.html'),
        display:    resolve(__dirname, 'pages/display.html'),
      },
    },
  },
});
