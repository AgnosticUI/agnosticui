import type { AstroIntegration } from 'astro';
export default function createPlugin(): AstroIntegration {
  return {
    name: '@astrojs/agnostic-astro',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        // Ideally, we only import the common.min.css once and before build-time
        injectScript('page', `import 'agnostic-css/public/css-dist/common.min.css';`);
      },
    },
  };
}
