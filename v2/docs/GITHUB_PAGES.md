YES, the showcase can be deployed to GitHub Pages, but it needs a base configuration in vite.config.ts.

  Current State

  The showcase is a Vite + React SPA with:
  - ✅ Client-side routing (React Router)
  - ✅ Static build output via npm run build
  - ❌ Missing base path for GitHub Pages subdirectory deployment

  What's Needed for GitHub Pages

  1. Update vite.config.ts

  Add base configuration for your repository:

  export default defineConfig(({ mode }) => ({
    base: '/agnosticui/',  // Replace with your repo name
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }));

  2. Handle Client-Side Routing

  GitHub Pages serves a 404 for routes like /button/react because those don't exist as physical files. Two solutions:

  Option A: Hash Router (Simplest)
  // showcase/src/main.tsx
  import { HashRouter } from 'react-router-dom';

  // URLs become: https://user.github.io/agnosticui/#/button/react

  Option B: 404.html Trick (Cleaner URLs)
  Create showcase/public/404.html that redirects to index.html:
  <!DOCTYPE html>
  <html>
    <head>
      <script>
        sessionStorage.redirect = location.href;
      </script>
      <meta http-equiv="refresh" content="0;URL='/agnosticui'">
    </head>
  </html>

  Then in your app, read sessionStorage.redirect and navigate to the correct route.

  3. GitHub Actions Workflow

  Create .github/workflows/deploy-showcase.yml:
  name: Deploy Showcase to GitHub Pages

  on:
    push:
      branches: [main]  # or master
    workflow_dispatch:

  permissions:
    contents: read
    pages: write
    id-token: write

  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4

        - uses: actions/setup-node@v4
          with:
            node-version: '20'

        - name: Build lib
          run: |
            cd v2/lib
            npm ci
            npm run build

        - name: Build showcase
          run: |
            cd v2/showcase
            npm ci
            npm run build

        - name: Setup Pages
          uses: actions/configure-pages@v4

        - name: Upload artifact
          uses: actions/upload-pages-artifact@v3
          with:
            path: 'v2/showcase/dist'

        - name: Deploy to GitHub Pages
          uses: actions/deploy-pages@v4

  4. Repository Settings

  Enable GitHub Pages in repo settings:
  - Go to Settings → Pages
  - Source: GitHub Actions

  Build Test
  ⎿  > vite_react_shadcn_ts@0.0.0 build
     > vite build
     … +21 lines (ctrl+o to expand)

⏺ ✅ The showcase builds successfully and produces static assets in dist/.

  Summary

  YES - The showcase can be deployed to GitHub Pages. It's already build-ready, you just need:

  1. Add base path to vite.config.ts (e.g., base: '/agnosticui/')
  2. Handle routing - Either use HashRouter or the 404.html redirect trick
  3. Set up GitHub Actions workflow to build lib → build showcase → deploy
  4. Enable GitHub Pages in repository settings

  The build is production-ready (629KB main bundle - could be optimized with code splitting later, but functional). Would you like me to
  create the vite.config.ts update and GitHub Actions workflow file?
