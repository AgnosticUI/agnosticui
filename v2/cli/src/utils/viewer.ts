/**
 * Viewer app template generation utilities for `ag view`
 *
 * Generates a lightweight Vite-powered component viewer app in
 * .agnosticui-viewer/ that renders all ejected components using
 * the project's own framework (React, Vue, or Lit/vanilla).
 */
import path from 'node:path';
import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import type { Framework, AgnosticUIConfig } from '../types/index.js';
import { ensureDir } from './files.js';

// ---------------------------------------------------------------------------
// Component render defaults
// ---------------------------------------------------------------------------

const TEXT_CHILD_COMPONENTS = new Set([
  'Alert', 'Badge', 'BadgeFx', 'Button', 'ButtonFx', 'Card',
  'Kbd', 'Link', 'Mark', 'MessageBubble', 'Tag',
]);

// React-specific minimal renders for form/display components
const REACT_SPECIFIC: Record<string, string> = {
  Avatar:         '<ReactAvatar text="AG" />',
  Checkbox:       '<ReactCheckbox id="viewer-cb" label="Checkbox" />',
  Collapsible:    '<ReactCollapsible><span slot="summary">Toggle details</span><div>Content goes here.</div></ReactCollapsible>',
  CopyButton:     '<ReactCopyButton text="ag add button" />',
  Divider:        '<ReactDivider />',
  EmptyState:     '<ReactEmptyState />',
  Flex:           '<ReactFlex><span>Item 1</span><span>Item 2</span><span>Item 3</span></ReactFlex>',
  IconButton:     '<ReactIconButton aria-label="settings"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></ReactIconButton>',
  IconButtonFx:   '<ReactIconButtonFx aria-label="settings"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/></svg></ReactIconButtonFx>',
  Input:          '<ReactInput id="viewer-input" label="Label" type="text" />',
  Loader:         '<ReactLoader />',
  Progress:       '<ReactProgress value={50} max={100} />',
  ProgressRing:   '<ReactProgressRing value={50} />',
  Radio:          '<ReactRadio id="viewer-radio" label="Radio" name="viewer-group" />',
  Rating:         '<ReactRating value={3} />',
  ScrollProgress: '<ReactScrollProgress />',
  ScrollToButton: '<ReactScrollToButton />',
  Select:         '<ReactSelect id="viewer-select" label="Select" />',
  SkeletonLoader: '<ReactSkeletonLoader />',
  Slider:         '<ReactSlider id="viewer-slider" label="Slider" min={0} max={100} value={50} />',
  Spinner:        '<ReactSpinner />',
  Toggle:         '<ReactToggle id="viewer-toggle" label="Toggle" />',
  VisuallyHidden: '<ReactVisuallyHidden>Screen reader only text</ReactVisuallyHidden>',
};

// Vue-specific minimal renders
const VUE_SPECIFIC: Record<string, { props: string; slot: string }> = {
  Avatar:         { props: 'text="AG"', slot: '' },
  Checkbox:       { props: 'id="viewer-cb" label="Checkbox"', slot: '' },
  CopyButton:     { props: 'text="ag add button"', slot: '' },
  Divider:        { props: '', slot: '' },
  EmptyState:     { props: '', slot: '' },
  IconButton:     { props: 'aria-label="settings"', slot: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/></svg>' },
  IconButtonFx:   { props: 'aria-label="settings"', slot: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/></svg>' },
  Input:          { props: 'id="viewer-input" label="Label" type="text"', slot: '' },
  Loader:         { props: '', slot: '' },
  Progress:       { props: ':value="50" :max="100"', slot: '' },
  ProgressRing:   { props: ':value="50"', slot: '' },
  Radio:          { props: 'id="viewer-radio" label="Radio" name="viewer-group"', slot: '' },
  Rating:         { props: ':value="3"', slot: '' },
  ScrollProgress: { props: '', slot: '' },
  ScrollToButton: { props: '', slot: '' },
  Select:         { props: 'id="viewer-select" label="Select"', slot: '' },
  SkeletonLoader: { props: '', slot: '' },
  Slider:         { props: 'id="viewer-slider" label="Slider" :min="0" :max="100" :value="50"', slot: '' },
  Spinner:        { props: '', slot: '' },
  Toggle:         { props: 'id="viewer-toggle" label="Toggle"', slot: '' },
  VisuallyHidden: { props: '', slot: 'Screen reader only text' },
};

// Lit/vanilla minimal HTML renders (uses ag-* tag names)
const LIT_SPECIFIC: Record<string, (tag: string) => string> = {
  Avatar:         (tag) => `<${tag} text="AG"></${tag}>`,
  Checkbox:       (tag) => `<${tag} id="viewer-cb" label="Checkbox"></${tag}>`,
  CopyButton:     (tag) => `<${tag} text="ag add button"></${tag}>`,
  Divider:        (tag) => `<${tag}></${tag}>`,
  EmptyState:     (tag) => `<${tag}></${tag}>`,
  Input:          (tag) => `<${tag} id="viewer-input" label="Label" type="text"></${tag}>`,
  Loader:         (tag) => `<${tag}></${tag}>`,
  Progress:       (tag) => `<${tag} value="50" max="100"></${tag}>`,
  ProgressRing:   (tag) => `<${tag} value="50"></${tag}>`,
  Radio:          (tag) => `<${tag} id="viewer-radio" label="Radio" name="viewer-group"></${tag}>`,
  Rating:         (tag) => `<${tag} value="3"></${tag}>`,
  ScrollProgress: (tag) => `<${tag}></${tag}>`,
  ScrollToButton: (tag) => `<${tag}></${tag}>`,
  Select:         (tag) => `<${tag} id="viewer-select" label="Select"></${tag}>`,
  SkeletonLoader: (tag) => `<${tag}></${tag}>`,
  Slider:         (tag) => `<${tag} id="viewer-slider" label="Slider" min="0" max="100" value="50"></${tag}>`,
  Spinner:        (tag) => `<${tag}></${tag}>`,
  Toggle:         (tag) => `<${tag} id="viewer-toggle" label="Toggle"></${tag}>`,
  VisuallyHidden: (tag) => `<${tag}>Screen reader only text</${tag}>`,
};

function toKebabCase(name: string): string {
  return name.replace(/([A-Z])/g, (match, char, offset) =>
    (offset > 0 ? '-' : '') + char.toLowerCase()
  );
}

function getAgTagName(name: string): string {
  return `ag-${toKebabCase(name)}`;
}

function getReactRender(name: string): string {
  const wrapper = `React${name}`;
  if (TEXT_CHILD_COMPONENTS.has(name)) return `<${wrapper}>${name}</${wrapper}>`;
  if (REACT_SPECIFIC[name]) return REACT_SPECIFIC[name];
  return `<${wrapper} />`;
}

function getVueRenderBlock(name: string): string {
  const wrapper = `Vue${name}`;
  if (TEXT_CHILD_COMPONENTS.has(name)) {
    return `<${wrapper}>${name}</${wrapper}>`;
  }
  const specific = VUE_SPECIFIC[name];
  if (specific) {
    if (specific.slot) {
      return `<${wrapper}${specific.props ? ' ' + specific.props : ''}>${specific.slot}</${wrapper}>`;
    }
    return `<${wrapper}${specific.props ? ' ' + specific.props : ''} />`;
  }
  return `<${wrapper} />`;
}

function getLitRenderHtml(name: string): string {
  const tag = getAgTagName(name);
  if (TEXT_CHILD_COMPONENTS.has(name)) return `<${tag}>${name}</${tag}>`;
  const specificFn = LIT_SPECIFIC[name];
  if (specificFn) return specificFn(tag);
  return `<${tag}></${tag}>`;
}

// ---------------------------------------------------------------------------
// Public: detect optional theme file
// ---------------------------------------------------------------------------

export function detectThemeFile(componentsAbsPath: string): boolean {
  return existsSync(path.join(componentsAbsPath, 'styles', 'ag-theme.css'));
}

// ---------------------------------------------------------------------------
// Template generators
// ---------------------------------------------------------------------------

function generatePackageJson(framework: Framework): string {
  const deps: Record<string, string> = {
    'lit': '^3.0.0',
    'focus-trap': '^7.0.0',
    '@floating-ui/dom': '^1.0.0',
  };
  const devDeps: Record<string, string> = {
    'vite': '^5.0.0',
    'typescript': '^5.0.0',
  };

  if (framework === 'react') {
    deps['react'] = '^18.0.0';
    deps['react-dom'] = '^18.0.0';
    deps['@lit/react'] = '^1.0.0';
    devDeps['@vitejs/plugin-react'] = '^4.0.0';
    devDeps['@types/react'] = '^18.0.0';
    devDeps['@types/react-dom'] = '^18.0.0';
  } else if (framework === 'vue') {
    deps['vue'] = '^3.0.0';
    devDeps['@vitejs/plugin-vue'] = '^5.0.0';
    deps['@lit/react'] = '^1.0.0'; // needed by some ag-ref core files
  } else {
    // lit / svelte / other
    deps['@lit/react'] = '^1.0.0'; // pulled in by reference lib React wrappers if resolved
  }

  return JSON.stringify({
    name: 'agnosticui-viewer',
    version: '1.0.0',
    private: true,
    type: 'module',
    scripts: { dev: 'vite' },
    dependencies: deps,
    devDependencies: devDeps,
  }, null, 2) + '\n';
}

function generateTsConfig(framework: Framework): string {
  return JSON.stringify({
    compilerOptions: {
      target: 'ES2020',
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      moduleResolution: 'bundler',
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      ...(framework === 'react' ? { jsx: 'react-jsx' } : {}),
      strict: false,
      experimentalDecorators: true,
      useDefineForClassFields: false,
    },
    include: ['src'],
  }, null, 2) + '\n';
}

function generateViteConfig(
  framework: Framework,
  componentsAbsPath: string,
  refLibAbsPath: string,
): string {
  const refComponentsPath = path.join(refLibAbsPath, 'src', 'components');
  const agRefAlias = JSON.stringify(refComponentsPath);
  const agComponentsAlias = JSON.stringify(componentsAbsPath);

  const optimizeIncludes = framework === 'react'
    ? `['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client', 'lit', 'lit/decorators.js', '@lit/react', '@floating-ui/dom', 'focus-trap']`
    : framework === 'vue'
    ? `['vue', 'lit', 'lit/decorators.js', '@floating-ui/dom', 'focus-trap']`
    : `['lit', 'lit/decorators.js', '@floating-ui/dom', 'focus-trap']`;

  const pluginImport = framework === 'react'
    ? `import react from '@vitejs/plugin-react'`
    : framework === 'vue'
    ? `import vue from '@vitejs/plugin-vue'`
    : '';

  const pluginUsage = framework === 'react'
    ? `react()`
    : framework === 'vue'
    ? `vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('ag-') } } })`
    : '';

  const pluginsLine = pluginUsage
    ? `  plugins: [${pluginUsage}],\n`
    : '';

  return `import { defineConfig } from 'vite'
${pluginImport ? pluginImport + '\n' : ''}
export default defineConfig({
${pluginsLine}  resolve: {
    alias: {
      '@ag-ref': ${agRefAlias},
      '@ag-components': ${agComponentsAlias},
    },
    dedupe: ['lit', 'focus-trap', '@floating-ui/dom'],
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
  optimizeDeps: {
    noDiscovery: true,
    holdUntilCrawlEnd: false,
    include: ${optimizeIncludes},
  },
})
`;
}

function generateIndexHtml(framework: Framework): string {
  const scriptSrc = framework === 'react' ? '/src/main.tsx' : '/src/main.ts';
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AgnosticUI Component Viewer</title>
  </head>
  <body>
    ${framework === 'react' || framework === 'vue' ? '<div id="root"></div>' : ''}
    <script type="module" src="${scriptSrc}"></script>
  </body>
</html>
`;
}

function generateReactMain(): string {
  return `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
`;
}

function generateVueMain(): string {
  return `import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#root')
`;
}

function generateLitMain(): string {
  return `import './App'
`;
}

// ---------------------------------------------------------------------------
// React App (App.tsx)
// ---------------------------------------------------------------------------

function generateReactApp(
  installedComponents: Record<string, { version: string; added: string; files: string[] }>,
  componentsPath: string,
  hasTheme: boolean,
): string {
  const names = Object.keys(installedComponents).sort();

  const componentImports = names
    .map(n => `import { React${n} } from '@ag-components/${n}/react/React${n}'`)
    .join('\n');

  const themeImport = hasTheme
    ? `import '@ag-components/styles/ag-theme.css'`
    : '';

  const componentEntries = names.map(n => {
    const meta = installedComponents[n];
    const snippet = `import { React${n} } from '${componentsPath}/${n}/react/React${n}'`;
    const render = getReactRender(n);
    return `  {
    name: ${JSON.stringify(n)},
    version: ${JSON.stringify(meta.version)},
    addedDate: ${JSON.stringify(meta.added)},
    files: ${JSON.stringify(meta.files)},
    importSnippet: ${JSON.stringify(snippet)},
    render: () => (${render}),
  }`;
  }).join(',\n');

  return `// Auto-generated by \`ag view\`. Do not edit manually.
import { useState } from 'react'
import { ReactHeader } from '@ag-ref/Header/react/ReactHeader'
import { ReactTabs, ReactTab, ReactTabPanel } from '@ag-ref/Tabs/react/ReactTabs'
import { ReactCopyButton } from '@ag-ref/CopyButton/react/ReactCopyButton'
import '@ag-components/styles/ag-tokens.css'
import '@ag-components/styles/ag-tokens-dark.css'
${themeImport}
import './viewer.css'

${componentImports}

type ComponentInfo = {
  name: string
  version: string
  addedDate: string
  files: string[]
  importSnippet: string
  render: () => any
}

const COMPONENTS: ComponentInfo[] = [
${componentEntries}
]

export default function App() {
  const [selected, setSelected] = useState(COMPONENTS[0]?.name ?? '')
  const [activeTab, setActiveTab] = useState(0)
  const current = COMPONENTS.find(c => c.name === selected) ?? COMPONENTS[0]

  return (
    <div className="av-layout">
      <ReactHeader>
        <span className="av-brand">AgnosticUI Component Viewer</span>
      </ReactHeader>
      <div className="av-body">
        <aside className="av-sidebar">
          <div className="av-overview">
            <p>Browse your ejected components. Click a name to preview.</p>
            <p>
              Add more with <code>ag add &lt;name&gt;</code>.{' '}
              <a
                href="https://www.agnosticui.com/installation.html#agnosticui-cli-recommended"
                target="_blank"
                rel="noopener noreferrer"
              >
                CLI docs →
              </a>
            </p>
          </div>
          <nav className="av-nav">
            {COMPONENTS.map(c => (
              <button
                key={c.name}
                onClick={() => { setSelected(c.name); setActiveTab(0) }}
                className={\`av-nav-item\${c.name === selected ? ' av-nav-item--active' : ''}\`}
              >
                {c.name}
              </button>
            ))}
          </nav>
        </aside>
        <main className="av-main">
          {current && (
            <>
              <h2 className="av-component-title">{current.name}</h2>
              <ReactTabs
                activeTab={activeTab}
                ariaLabel={\`\${current.name} tabs\`}
                onTabChange={(e: any) => setActiveTab(e.detail.activeTab)}
              >
                <ReactTab slot="tab" panel="preview">Preview</ReactTab>
                <ReactTab slot="tab" panel="html">HTML</ReactTab>
                <ReactTab slot="tab" panel="info">Info</ReactTab>
                <ReactTabPanel slot="panel" id="preview">
                  <div className="av-preview">{current.render()}</div>
                </ReactTabPanel>
                <ReactTabPanel slot="panel" id="html">
                  <div className="av-code-block">
                    <pre><code>{current.importSnippet}</code></pre>
                    <ReactCopyButton text={current.importSnippet} size="sm" />
                  </div>
                </ReactTabPanel>
                <ReactTabPanel slot="panel" id="info">
                  <div className="av-info">
                    <dl>
                      <dt>Version</dt>
                      <dd>{current.version}</dd>
                      <dt>Added</dt>
                      <dd>{new Date(current.addedDate).toLocaleDateString()}</dd>
                    </dl>
                  </div>
                </ReactTabPanel>
              </ReactTabs>
            </>
          )}
        </main>
      </div>
    </div>
  )
}
`;
}

// ---------------------------------------------------------------------------
// Vue App (App.vue)
// ---------------------------------------------------------------------------

function generateVueApp(
  installedComponents: Record<string, { version: string; added: string; files: string[] }>,
  componentsPath: string,
  hasTheme: boolean,
): string {
  const names = Object.keys(installedComponents).sort();

  const componentImports = names
    .map(n => `import Vue${n} from '@ag-components/${n}/vue/Vue${n}.vue'`)
    .join('\n');

  const themeImport = hasTheme
    ? `import '@ag-components/styles/ag-theme.css'` : '';

  const componentMapEntries = names
    .map(n => `    ${JSON.stringify(n)}: Vue${n}`)
    .join(',\n');

  const componentDataEntries = names.map(n => {
    const meta = installedComponents[n];
    const snippet = `import Vue${n} from '${componentsPath}/${n}/vue/Vue${n}.vue'`;
    return `    {
      name: ${JSON.stringify(n)},
      version: ${JSON.stringify(meta.version)},
      addedDate: ${JSON.stringify(meta.added)},
      files: ${JSON.stringify(meta.files)},
      importSnippet: ${JSON.stringify(snippet)},
    }`;
  }).join(',\n');

  // Build per-component v-if render blocks
  const previewBlocks = names.map((n, i) => {
    const block = getVueRenderBlock(n);
    const condition = i === 0 ? `v-if="current?.name === ${JSON.stringify(n)}"` : `v-else-if="current?.name === ${JSON.stringify(n)}"`;
    return `          <template ${condition}>${block}</template>`;
  }).join('\n');

  return `<!-- Auto-generated by \`ag view\`. Do not edit manually. -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { VueHeader } from '@ag-ref/Header/vue'
import { VueTabs, VueTab, VueTabPanel } from '@ag-ref/Tabs/vue'
import { VueCopyButton } from '@ag-ref/CopyButton/vue'
import '@ag-components/styles/ag-tokens.css'
import '@ag-components/styles/ag-tokens-dark.css'
${themeImport}
import './viewer.css'

${componentImports}

const componentMap: Record<string, any> = {
${componentMapEntries}
}

type ComponentInfo = {
  name: string
  version: string
  addedDate: string
  files: string[]
  importSnippet: string
}

const COMPONENTS: ComponentInfo[] = [
${componentDataEntries}
]

const selected = ref(COMPONENTS[0]?.name ?? '')
const activeTab = ref(0)
const current = computed(() => COMPONENTS.find(c => c.name === selected.value) ?? COMPONENTS[0])

function selectComponent(name: string) {
  selected.value = name
  activeTab.value = 0
}
</script>

<template>
  <div class="av-layout">
    <VueHeader>
      <span class="av-brand">AgnosticUI Component Viewer</span>
    </VueHeader>
    <div class="av-body">
      <aside class="av-sidebar">
        <div class="av-overview">
          <p>Browse your ejected components. Click a name to preview.</p>
          <p>
            Add more with <code>ag add &lt;name&gt;</code>.
            <a
              href="https://www.agnosticui.com/installation.html#agnosticui-cli-recommended"
              target="_blank"
              rel="noopener noreferrer"
            >CLI docs →</a>
          </p>
        </div>
        <nav class="av-nav">
          <button
            v-for="c in COMPONENTS"
            :key="c.name"
            @click="selectComponent(c.name)"
            :class="['av-nav-item', { 'av-nav-item--active': c.name === selected }]"
          >{{ c.name }}</button>
        </nav>
      </aside>
      <main class="av-main">
        <template v-if="current">
          <h2 class="av-component-title">{{ current.name }}</h2>
          <VueTabs
            :active-tab="activeTab"
            :aria-label="\`\${current.name} tabs\`"
            @tab-change="activeTab = $event.activeTab"
          >
            <VueTab panel="preview">Preview</VueTab>
            <VueTab panel="html">HTML</VueTab>
            <VueTab panel="info">Info</VueTab>
            <VueTabPanel panel="preview" id="preview">
              <div class="av-preview">
${previewBlocks}
                <template v-else>
                  <component
                    v-if="componentMap[current.name]"
                    :is="componentMap[current.name]"
                  />
                  <div v-else class="av-complex-note">
                    <p>{{ current.name }} requires additional props or interaction to preview.</p>
                  </div>
                </template>
              </div>
            </VueTabPanel>
            <VueTabPanel panel="html" id="html">
              <div class="av-code-block">
                <pre><code>{{ current.importSnippet }}</code></pre>
                <VueCopyButton :text="current.importSnippet" size="sm" />
              </div>
            </VueTabPanel>
            <VueTabPanel panel="info" id="info">
              <div class="av-info">
                <dl>
                  <dt>Version</dt>
                  <dd>{{ current.version }}</dd>
                  <dt>Added</dt>
                  <dd>{{ new Date(current.addedDate).toLocaleDateString() }}</dd>
                </dl>
              </div>
            </VueTabPanel>
          </VueTabs>
        </template>
      </main>
    </div>
  </div>
</template>
`;
}

// ---------------------------------------------------------------------------
// Lit / vanilla App (App.ts) — vanilla DOM approach
// ---------------------------------------------------------------------------

function generateLitApp(
  installedComponents: Record<string, { version: string; added: string; files: string[] }>,
  componentsPath: string,
  hasTheme: boolean,
): string {
  const names = Object.keys(installedComponents).sort();

  const coreImports = names
    .map(n => `import '@ag-components/${n}/core/${n}'`)
    .join('\n');

  const themeImport = hasTheme
    ? `import '@ag-components/styles/ag-theme.css'` : '';

  const componentEntries = names.map(n => {
    const meta = installedComponents[n];
    const snippet = `import '${componentsPath}/${n}/core/${n}'`;
    const renderHtml = getLitRenderHtml(n);
    return `  {
    name: ${JSON.stringify(n)},
    tagName: ${JSON.stringify(getAgTagName(n))},
    version: ${JSON.stringify(meta.version)},
    addedDate: ${JSON.stringify(meta.added)},
    files: ${JSON.stringify(meta.files)},
    importSnippet: ${JSON.stringify(snippet)},
    renderHTML: ${JSON.stringify(renderHtml)},
  }`;
  }).join(',\n');

  return `// Auto-generated by \`ag view\`. Do not edit manually.
import '@ag-ref/Header/core/Header'
import '@ag-ref/Tabs/core/Tabs'
import '@ag-ref/CopyButton/core/CopyButton'
import '@ag-components/styles/ag-tokens.css'
import '@ag-components/styles/ag-tokens-dark.css'
${themeImport}
import './viewer.css'

${coreImports}

type ComponentInfo = {
  name: string
  tagName: string
  version: string
  addedDate: string
  files: string[]
  importSnippet: string
  renderHTML: string
}

const COMPONENTS: ComponentInfo[] = [
${componentEntries}
]

let selectedName = COMPONENTS[0]?.name ?? ''

function escHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function render(): void {
  const current = COMPONENTS.find(c => c.name === selectedName) ?? COMPONENTS[0]
  if (!current) return

  const navItems = COMPONENTS.map(c =>
    \`<button class="av-nav-item\${c.name === selectedName ? ' av-nav-item--active' : ''}" data-component="\${c.name}">\${c.name}</button>\`
  ).join('\\n')

  document.body.innerHTML = \`
    <div class="av-layout">
      <ag-header>
        <span class="av-brand">AgnosticUI Component Viewer</span>
      </ag-header>
      <div class="av-body">
        <aside class="av-sidebar">
          <div class="av-overview">
            <p>Browse your ejected components. Click a name to preview.</p>
            <p>Add more with <<code>ag add &lt;name&gt;</code>. <a href="https://www.agnosticui.com/installation.html#agnosticui-cli-recommended" target="_blank" rel="noopener">CLI docs &rarr;</a></p>
          </div>
          <nav class="av-nav">
            \${navItems}
          </nav>
        </aside>
        <main class="av-main">
          <h2 class="av-component-title">\${current.name}</h2>
          <ag-tabs aria-label="\${current.name} tabs">
            <ag-tab slot="tab" panel="preview">Preview</ag-tab>
            <ag-tab slot="tab" panel="html">HTML</ag-tab>
            <ag-tab slot="tab" panel="info">Info</ag-tab>
            <ag-tab-panel slot="panel" id="preview">
              <div class="av-preview">\${current.renderHTML}</div>
            </ag-tab-panel>
            <ag-tab-panel slot="panel" id="html">
              <div class="av-code-block">
                <pre><code>\${escHtml(current.importSnippet)}</code></pre>
                <ag-copy-button text="\${current.importSnippet.replace(/"/g, '&quot;')}" size="sm"></ag-copy-button>
              </div>
            </ag-tab-panel>
            <ag-tab-panel slot="panel" id="info">
              <div class="av-info">
                <dl>
                  <dt>Version</dt><dd>\${current.version}</dd>
                  <dt>Added</dt><dd>\${new Date(current.addedDate).toLocaleDateString()}</dd>
                </dl>
              </div>
            </ag-tab-panel>
          </ag-tabs>
        </main>
      </div>
    </div>
  \`

  // Re-attach nav listeners after each re-render
  document.querySelectorAll<HTMLElement>('.av-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedName = btn.dataset.component ?? ''
      render()
    })
  })
}

render()
`;
}

// ---------------------------------------------------------------------------
// Viewer CSS (same for all frameworks)
// ---------------------------------------------------------------------------

function generateViewerCss(): string {
  return `/* AgnosticUI Component Viewer — Chrome Styles */
*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-family: var(--ag-font-family-base, system-ui, -apple-system, sans-serif);
  background: var(--ag-background-primary, #ffffff);
  color: var(--ag-text-primary, #111827);
  font-size: 16px;
  line-height: 1.5;
}

.av-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.av-body {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

/* Sidebar */
.av-sidebar {
  width: 220px;
  flex-shrink: 0;
  border-right: 1px solid var(--ag-border-color, #e5e7eb);
  overflow-y: auto;
  padding: 1.25rem 1rem;
  background: var(--ag-background-secondary, #f9fafb);
}

.av-overview {
  font-size: 0.8125rem;
  color: var(--ag-text-secondary, #6b7280);
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--ag-border-color, #e5e7eb);
  line-height: 1.55;
}

.av-overview p { margin: 0 0 0.5rem; }
.av-overview p:last-child { margin-bottom: 0; }

.av-overview a {
  color: var(--ag-color-primary, #2563eb);
  text-decoration: none;
}
.av-overview a:hover { text-decoration: underline; }

.av-overview code {
  font-family: var(--ag-font-family-mono, monospace);
  font-size: 0.75rem;
  background: var(--ag-background-muted, #f3f4f6);
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
}

/* Nav */
.av-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.av-nav-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.375rem 0.625rem;
  border: none;
  border-radius: 0.25rem;
  background: transparent;
  color: var(--ag-text-secondary, #374151);
  cursor: pointer;
  font-size: 0.875rem;
  font-family: inherit;
  transition: background 0.1s, color 0.1s;
}

.av-nav-item:hover {
  background: var(--ag-background-muted, #f3f4f6);
  color: var(--ag-text-primary, #111827);
}

.av-nav-item--active {
  background: var(--ag-color-primary-50, #eff6ff);
  color: var(--ag-color-primary-700, #1d4ed8);
  font-weight: 600;
}

/* Main content */
.av-main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.av-component-title {
  margin: 0 0 1.25rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ag-text-primary, #111827);
}

/* Header brand */
.av-brand {
  font-weight: 600;
  font-size: 1rem;
}

/* Preview area */
.av-preview {
  padding: 2rem;
  border: 1px solid var(--ag-border-color, #e5e7eb);
  border-radius: 0.5rem;
  background: var(--ag-background-primary, #ffffff);
  min-height: 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
}

/* Code block */
.av-code-block {
  background: var(--ag-background-secondary, #f9fafb);
  border: 1px solid var(--ag-border-color, #e5e7eb);
  border-radius: 0.5rem;
  padding: 1.25rem;
}

.av-code-block pre {
  margin: 0 0 1rem;
  overflow-x: auto;
}

.av-code-block code {
  font-family: var(--ag-font-family-mono, 'Fira Code', 'Cascadia Code', monospace);
  font-size: 0.875rem;
  color: var(--ag-text-primary, #111827);
}

/* Info panel */
.av-info { font-size: 0.875rem; }

.av-info dl {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 1.5rem;
  margin: 0;
}

.av-info dt {
  font-weight: 600;
  color: var(--ag-text-secondary, #6b7280);
}

.av-info dd {
  margin: 0;
  color: var(--ag-text-primary, #374151);
  word-break: break-all;
}

/* Complex component placeholder */
.av-complex-note {
  color: var(--ag-text-secondary, #6b7280);
  font-size: 0.875rem;
  font-style: italic;
}
`;
}

// ---------------------------------------------------------------------------
// Public: orchestrator
// ---------------------------------------------------------------------------

export async function generateViewerApp(
  config: AgnosticUIConfig,
  viewerPath: string,
  cwd: string,
): Promise<void> {
  const componentsAbsPath = path.resolve(cwd, config.paths.components);
  const refLibAbsPath = path.resolve(cwd, config.paths.reference);
  const hasTheme = detectThemeFile(componentsAbsPath);

  // Extract component metadata
  const installedComponents: Record<string, { version: string; added: string; files: string[] }> = {};
  for (const [name, entry] of Object.entries(config.components)) {
    installedComponents[name] = {
      version: entry.version,
      added: entry.added,
      files: entry.files,
    };
  }

  const { framework } = config;
  const srcPath = path.join(viewerPath, 'src');
  await ensureDir(srcPath);

  // Root files
  await writeFile(path.join(viewerPath, 'package.json'), generatePackageJson(framework));
  await writeFile(path.join(viewerPath, 'tsconfig.json'), generateTsConfig(framework));
  await writeFile(
    path.join(viewerPath, 'vite.config.ts'),
    generateViteConfig(framework, componentsAbsPath, refLibAbsPath),
  );
  await writeFile(path.join(viewerPath, 'index.html'), generateIndexHtml(framework));

  // src/ files
  let mainContent: string;
  let appContent: string;
  let appFileName: string;

  if (framework === 'react') {
    mainContent = generateReactMain();
    appContent = generateReactApp(installedComponents, config.paths.components, hasTheme);
    appFileName = 'App.tsx';
    await writeFile(path.join(srcPath, 'main.tsx'), mainContent);
  } else if (framework === 'vue') {
    mainContent = generateVueMain();
    appContent = generateVueApp(installedComponents, config.paths.components, hasTheme);
    appFileName = 'App.vue';
    await writeFile(path.join(srcPath, 'main.ts'), mainContent);
  } else {
    // lit / svelte / other
    mainContent = generateLitMain();
    appContent = generateLitApp(installedComponents, config.paths.components, hasTheme);
    appFileName = 'App.ts';
    await writeFile(path.join(srcPath, 'main.ts'), mainContent);
  }

  await writeFile(path.join(srcPath, appFileName), appContent);
  await writeFile(path.join(srcPath, 'viewer.css'), generateViewerCss());
}
