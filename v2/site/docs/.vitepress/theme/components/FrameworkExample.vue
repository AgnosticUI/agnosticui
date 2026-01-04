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
            <strong>Interactive Preview:</strong> Click the "Open in StackBlitz" button below to see this example running live in an interactive playground.
          </p>
        </div>
        <details v-if="reactCode" class="code-details" open>
          <summary>View React Code</summary>
          <div v-if="highlightedReactCode" v-html="highlightedReactCode"></div>
          <pre v-else><code class="language-tsx">{{ reactCode }}</code></pre>
        </details>
        <div v-if="reactCode" class="stackblitz-section">
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
      </VueTabPanel>
    </VueTabs>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import VueTabs, { VueTab, VueTabPanel } from "agnosticui-core/tabs/vue"
import { codeToHtml } from 'shiki'
import sdk from '@stackblitz/sdk'
import { Zap } from 'lucide-vue-next'

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
        '',
        "ReactDOM.createRoot(document.getElementById('root')).render(",
        '  <React.StrictMode>',
        '    <App />',
        '  </React.StrictMode>,',
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
              'react': '^18.2.0',
              'react-dom': '^18.2.0',
              'agnosticui-core': 'latest',
            },
            devDependencies: {
              '@vitejs/plugin-react': '^4.0.0',
              'vite': '^5.0.0'
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

    return {
      handleTabChange,
      highlightedVueCode,
      highlightedLitCode,
      highlightedReactCode,
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
.code-details :deep(.shiki),
.code-details :deep(.shiki span) {
  color: var(--shiki-light) !important;
  background-color: var(--shiki-light-bg) !important;
}

.dark .code-details :deep(.shiki),
.dark .code-details :deep(.shiki span) {
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

/* StackBlitz Integration */
.stackblitz-section {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
</style>
