<template>
  <div class="framework-example">
    <VueTabs
      aria-label="Framework code examples"
      @tab-change="handleTabChange"
    >
      <!-- Vue Tab -->
      <VueTab panel="panel-vue">
        <div class="flex-inline items-center">
          <span class="framework-icon">Vue</span>
        </div>
      </VueTab>

      <!-- Lit Tab -->
      <VueTab panel="panel-lit">
        <div class="flex-inline items-center">
          <span class="framework-icon">Lit</span>
        </div>
      </VueTab>

      <!-- React Tab -->
      <VueTab panel="panel-react">
        <div class="flex-inline items-center">
          <span class="framework-icon">React</span>
        </div>
      </VueTab>

      <!-- Vue Panel -->
      <VueTabPanel panel="panel-vue">
        <details class="preview-details" open>
          <summary>Live Preview</summary>
          <div class="preview">
            <slot name="vue" />
          </div>
        </details>
        <details v-if="vueCode" class="code-details" open>
          <summary>View Vue Code</summary>
          <div v-if="highlightedVueCode" v-html="highlightedVueCode"></div>
          <pre v-else><code class="language-vue">{{ vueCode }}</code></pre>
        </details>
      </VueTabPanel>

      <!-- Lit Panel -->
      <VueTabPanel panel="panel-lit">
        <details class="preview-details" open>
          <summary>Live Preview</summary>
          <div class="preview">
            <slot name="lit" />
          </div>
        </details>
        <details v-if="litCode" class="code-details" open>
          <summary>View Lit / Web Component Code</summary>
          <div v-if="highlightedLitCode" v-html="highlightedLitCode"></div>
          <pre v-else><code class="language-javascript">{{ litCode }}</code></pre>
        </details>
      </VueTabPanel>

      <!-- React Panel -->
      <VueTabPanel panel="panel-react">
        <div class="react-note">
          <p>
            <strong>Interactive Preview:</strong> To see this example in action, select Open in CodePen (NPM package style) or Open in StackBlitz (CLI local components) to launch an interactive playground.
          </p>
        </div>
        <details v-if="reactCode" class="code-details" open>
          <summary>View React Code</summary>
          <div v-if="highlightedReactCode" v-html="highlightedReactCode"></div>
          <pre v-else><code class="language-tsx">{{ reactCode }}</code></pre>
        </details>
        <div v-if="reactCode" class="stackblitz-section">
          <div class="playground-buttons">
            <ag-button
              v-if="codepenUrl"
              variant="monochrome"
              shape="rounded"
              @click="openInCodePen"
              title="Open interactive React playground in CodePen"
            >
              <ag-icon size="18">
                <svg width="18" height="18" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor; stroke: none;">
                  <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z"/>
                </svg>
              </ag-icon>
              <span class="mis2">Open in CodePen</span>
            </ag-button>
            <ag-button
              variant="primary"
              shape="rounded"
              @click="openInStackBlitz"
              title="Open interactive React playground in StackBlitz"
            >
              <ag-icon size="18" no-fill>
                <Zap :size="18" />
              </ag-icon>
              <span class="mis2">Open in StackBlitz</span>
            </ag-button>
          </div>
        </div>
      </VueTabPanel>
    </VueTabs>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import VueTabs, { VueTab, VueTabPanel } from "agnosticui-core/tabs/vue"
import { codeToHtml } from 'shiki'
import sdk from '@stackblitz/sdk'
import { Zap } from 'lucide-vue-next'
// Import web components for the StackBlitz button
import 'agnosticui-core/button'
import 'agnosticui-core/icon'

// CodePen URLs keyed by the component prop value (lowercase kebab-case).
// Add an entry here as each CodePen is created — the button only renders
// when a mapping exists for the current component.
const CODEPEN_URLS = {
  'button': 'https://codepen.io/editor/roblevin/pen/019ccb59-c544-7086-9728-a39bf626d1c9?file=%2Fscript.js&orientation=left&show=split',
}

export default {
  name: "FrameworkExample",
  components: {
    VueTabs,
    VueTab,
    VueTabPanel,
    Zap,
  },
  props: {
    component: {
      type: String,
      required: true,
    },
    vueCode: {
      type: String,
      default: '',
    },
    litCode: {
      type: String,
      default: '',
    },
    reactCode: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const highlightedVueCode = ref('')
    const highlightedLitCode = ref('')
    const highlightedReactCode = ref('')

    const codepenUrl = computed(() => CODEPEN_URLS[props.component] || null)

    onMounted(async () => {
      // Note: Lit components are imported directly in the example files (e.g., ButtonLitExamples.js)
      // No need to dynamically import here since they're already loaded

      // Highlight Vue code
      if (props.vueCode) {
        try {
          highlightedVueCode.value = await codeToHtml(props.vueCode, {
            lang: 'vue',
            themes: {
              light: 'github-light-high-contrast',
              dark: 'github-dark-high-contrast',
            },
          })
        } catch (error) {
          console.error('Failed to highlight Vue code:', error)
        }
      }

      // Highlight Lit code
      if (props.litCode) {
        try {
          highlightedLitCode.value = await codeToHtml(props.litCode, {
            lang: 'javascript',
            themes: {
              light: 'github-light-high-contrast',
              dark: 'github-dark-high-contrast',
            },
          })
        } catch (error) {
          console.error('Failed to highlight Lit code:', error)
        }
      }

      // Highlight React code
      if (props.reactCode) {
        try {
          highlightedReactCode.value = await codeToHtml(props.reactCode, {
            lang: 'tsx',
            themes: {
              light: 'github-light-high-contrast',
              dark: 'github-dark-high-contrast',
            },
          })
        } catch (error) {
          console.error('Failed to highlight React code:', error)
        }
      }
    })

    const handleTabChange = (detail) => {
      // Optional: track analytics or other side effects
    }

    const openInStackBlitz = () => {
      // Build HTML template to avoid Vue parser conflicts
      const indexHtml = [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '  <head>',
        '    <meta charset="UTF-8" />',
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
        `    <title>AgnosticUI ${props.component} - React</title>`,
        '    <style>',
        '      /* Use AgnosticUI theme tokens for background and text colors */',
        '      body {',
        '        margin: 0;',
        '        padding: 1rem;',
        '        background: var(--ag-background-primary);',
        '        color: var(--ag-text-primary);',
        '        transition: background 0.2s ease, color 0.2s ease;',
        '      }',
        '      .theme-toggle-container {',
        '        position: fixed;',
        '        top: 1rem;',
        '        right: 1rem;',
        '        z-index: 1000;',
        '      }',
        '      .theme-icon { display: inline-block; }',
        '      [data-theme="dark"] .theme-icon-sun { display: inline-block; }',
        '      [data-theme="dark"] .theme-icon-moon { display: none; }',
        '      .theme-icon-sun { display: none; }',
        '      .theme-icon-moon { display: inline-block; }',
        '    <\/style>',
        '  </head>',
        '  <body>',
        '    <div class="theme-toggle-container">',
        '      <ag-button id="theme-toggle" shape="circle" bordered title="Toggle theme">',
        '        <ag-icon size="18" no-fill class="theme-icon theme-icon-moon">',
        '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">',
        '            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
        '          <\/svg>',
        '        <\/ag-icon>',
        '        <ag-icon size="18" no-fill class="theme-icon theme-icon-sun">',
        '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">',
        '            <circle cx="12" cy="12" r="4"/>',
        '            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/>',
        '          <\/svg>',
        '        <\/ag-icon>',
        '      <\/ag-button>',
        '    <\/div>',
        '    <div id="root"></div>',
        '    <script type="module" src="/src/main.jsx"><\/script>',
        '    <script>',
        '      // Detect system preference and set initial theme',
        '      (function() {',
        '        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;',
        '        const html = document.documentElement;',
        '        if (prefersDark) {',
        '          html.setAttribute("data-theme", "dark");',
        '        }',
        '',
        '        // Wait for web components to load',
        '        customElements.whenDefined("ag-button").then(() => {',
        '          const toggleBtn = document.getElementById("theme-toggle");',
        '          if (toggleBtn) {',
        '            toggleBtn.addEventListener("click", () => {',
        '              const isDark = html.getAttribute("data-theme") === "dark";',
        '              if (isDark) {',
        '                html.removeAttribute("data-theme");',
        '              } else {',
        '                html.setAttribute("data-theme", "dark");',
        '              }',
        '            });',
        '          }',
        '        });',
        '      })();',
        '    <\/script>',
        '  </body>',
        '</html>'
      ].join('\n')

      const mainJsx = [
        "import React from 'react'",
        "import ReactDOM from 'react-dom/client'",
        "import App from './App.jsx'",
        "import 'agnosticui-core/styles/tokens.css'",
        "import 'agnosticui-core/styles/tokens-dark.css'",
        "import './utilities.css'",
        "// Import web components for theme toggle button",
        "import 'agnosticui-core/button'",
        "import 'agnosticui-core/icon'",
        `// Import web component for ${props.component} (if needed for React wrappers)`,
        `import 'agnosticui-core/${props.component}'`,
        '',
        "ReactDOM.createRoot(document.getElementById('root')).render(",
        '  <React.StrictMode>',
        '    <App />',
        '  </React.StrictMode>',
        ')'
      ].join('\n')

      const utilitiesCss = `.flex {
  display: flex;
}
.flex-inline {
  display: inline-flex;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}

.text-center {
  text-align: center;
}

.full-width {
  width: 100%;
}
.full-w-h {
  width: 100%;
  height: 100%;
}

/* Margin block start */
.mbs0 { margin-block-start: var(--ag-space-0); }
.mbs1 { margin-block-start: var(--ag-space-1); }
.mbs2 { margin-block-start: var(--ag-space-2); }
.mbs3 { margin-block-start: var(--ag-space-3); }
.mbs4 { margin-block-start: var(--ag-space-4); }
.mbs5 { margin-block-start: var(--ag-space-5); }
.mbs6 { margin-block-start: var(--ag-space-6); }
.mbs8 { margin-block-start: var(--ag-space-8); }

/* Margin block end */
.mbe0 { margin-block-end: var(--ag-space-0); }
.mbe1 { margin-block-end: var(--ag-space-1); }
.mbe2 { margin-block-end: var(--ag-space-2); }
.mbe3 { margin-block-end: var(--ag-space-3); }
.mbe4 { margin-block-end: var(--ag-space-4); }
.mbe5 { margin-block-end: var(--ag-space-5); }
.mbe6 { margin-block-end: var(--ag-space-6); }
.mbe8 { margin-block-end: var(--ag-space-8); }

/* Margin inline start */
.mis0 { margin-inline-start: var(--ag-space-0); }
.mis1 { margin-inline-start: var(--ag-space-1); }
.mis2 { margin-inline-start: var(--ag-space-2); }
.mis3 { margin-inline-start: var(--ag-space-3); }
.mis4 { margin-inline-start: var(--ag-space-4); }
.mis5 { margin-inline-start: var(--ag-space-5); }
.mis6 { margin-inline-start: var(--ag-space-6); }
.mis8 { margin-inline-start: var(--ag-space-8); }

/* Margin inline end */
.mie0 { margin-inline-end: var(--ag-space-0); }
.mie1 { margin-inline-end: var(--ag-space-1); }
.mie2 { margin-inline-end: var(--ag-space-2); }
.mie3 { margin-inline-end: var(--ag-space-3); }
.mie4 { margin-inline-end: var(--ag-space-4); }
.mie5 { margin-inline-end: var(--ag-space-5); }
.mie6 { margin-inline-end: var(--ag-space-6); }
.mie8 { margin-inline-end: var(--ag-space-8); }

.stacked {
  display: flex;
  flex-direction: column;
  gap: var(--ag-space-4);
}

.stacked-mobile {
  display: flex;
  flex-direction: column;
  gap: var(--ag-space-4);
}

@media (min-width: 768px) {
  .stacked-mobile {
    flex-direction: row;
    flex-wrap: wrap;
  }
}`

      const viteConfig = [
        "import { defineConfig } from 'vite'",
        "import react from '@vitejs/plugin-react'",
        '',
        'export default defineConfig({',
        '  plugins: [react()],',
        '  optimizeDeps: {',
        '    exclude: [\'agnosticui-core\', \'lit\', \'@lit/react\'],',
        '  },',
        '})'
      ].join('\n')

      // Create StackBlitz project configuration
      sdk.openProject({
        title: `AgnosticUI ${props.component} - React Example`,
        description: `Interactive React example for AgnosticUI ${props.component} component`,
        template: 'node',
        files: {
          'package.json': JSON.stringify({
            name: `agnosticui-${props.component}-react`,
            version: '1.0.0',
            dependencies: {
              'react': '^19.2.0',
              'react-dom': '^19.2.0',
              'agnosticui-core': 'latest',
              'lit': '^3.3.1',
              '@lit/react': '^1.0.8',
              '@floating-ui/dom': '^1.7.4',
              'focus-trap': '^7.6.6',
              'lucide-react': '^0.468.0'
            },
            devDependencies: {
              '@vitejs/plugin-react': '^5.1.1',
              'vite': '^7.2.4'
            },
            scripts: {
              'dev': 'vite',
              'build': 'vite build',
              'preview': 'vite preview'
            }
          }, null, 2),
          'index.html': indexHtml,
          'src/main.jsx': mainJsx,
          'src/App.jsx': props.reactCode,
          'src/utilities.css': utilitiesCss,
          'vite.config.js': viteConfig,
        },
        settings: {
          compile: {
            trigger: 'auto',
            clearConsole: false,
          },
        },
      })
    }

    const openInCodePen = () => {
      if (codepenUrl.value) window.open(codepenUrl.value, '_blank', 'noopener,noreferrer')
    }

    return {
      codepenUrl,
      handleTabChange,
      highlightedVueCode,
      highlightedLitCode,
      highlightedReactCode,
      openInCodePen,
      openInStackBlitz,
    }
  },
}
</script>

<style scoped>
.framework-example {
  margin: 2rem 0;
}

/* Override tab panel padding for better alignment */
.framework-example ::v-deep(ag-tab-panel)::part(ag-tab-panel) {
  padding: 0;
}

.framework-icon {
  font-weight: 600;
  font-size: 0.9rem;
}

.preview {
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-top: 1rem;
}

.preview-details {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.code-details {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.preview-details summary,
.code-details summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--vp-c-brand);
  user-select: none;
  list-style: none;
}

.preview-details summary::-webkit-details-marker,
.code-details summary::-webkit-details-marker {
  display: none;
}

.preview-details summary::before,
.code-details summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.2s ease;
}

.preview-details[open] summary::before,
.code-details[open] summary::before {
  transform: rotate(90deg);
}

/* Shiki generated code blocks */
.code-details :deep(pre) {
  margin-top: 1rem;
  margin-bottom: 0;
  overflow-x: auto;
  max-width: 100%;
  border-radius: 6px;
  padding: 1rem !important;
}

.code-details :deep(code) {
  font-size: 0.875rem;
}

/* Theme switching for Shiki dual-theme mode */
/* Light mode uses inline color styles from Shiki (no override needed) */

/* Dark mode: override with CSS variables */
html[data-theme="dark"] .code-details :deep(.shiki),
html[data-theme="dark"] .code-details :deep(.shiki span) {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
}

/* Fallback for non-highlighted code */
.code-details > pre {
  margin-top: 1rem;
  margin-bottom: 0;
  overflow-x: auto;
  max-width: 100%;
}

.code-details > pre code {
  font-size: 0.875rem;
  white-space: pre;
  display: block;
}

/* React Panel Note */
.react-note {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border-left: 4px solid var(--vp-c-brand);
}

.react-note p {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
}

/* Playground buttons (CodePen + StackBlitz) */
.stackblitz-section {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.playground-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ag-space-3);
}
</style>

<style>
/* Override VitePress global h2 styles within framework examples (non-scoped for specificity) */
.framework-example h2 {
  margin-top: 0 !important;
  border-top: none !important;
}
</style>
