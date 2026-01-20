import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  sitemap: {
    hostname: 'https://www.agnosticui.com'
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/ag-tokens.css' }],
    ['link', { rel: 'stylesheet', href: '/ag-tokens-dark.css' }],
    ['link', { rel: 'stylesheet', href: '/table.css' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AgnosticUI' }],
    ['meta', { property: 'og:description', content: 'The UI kit that lives in your project. Local components. AI-friendly. React. Vue. Svelte. Astro. Angular. Solid. Preact.' }],
    ['meta', { property: 'og:url', content: 'https://www.agnosticui.com' }],
    ['meta', { property: 'og:site_name', content: 'AgnosticUI' }],
    ['meta', { property: 'og:image', content: 'https://www.agnosticui.com/AG-banner.jpg' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'AgnosticUI' }],
    ['meta', { name: 'twitter:description', content: 'The UI kit that lives in your project. Local components. AI-friendly. React. Vue. Svelte. Astro. Angular. Solid. Preact.' }],
    ['meta', { name: 'twitter:image', content: 'https://www.agnosticui.com/AG-banner.jpg' }],
  ],
  title: "AgnosticUI",
  description: "One theme…all frameworks! Lit. Vanilla. React. Vue. Svelte.",
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('ag-') || tag.endsWith('-lit-examples'),
      },
    },
  },
  // Prevent VitePress from pre-bundling agnosticui-core and treat it as app source.
  // Pre-bundling breaks Vue render context for Lit-based custom elements (slots/SSR),
  // causing runtime errors and FOUC. This is a known VitePress issue/workaround.
  vite: {
    optimizeDeps: {
      exclude: ['agnosticui-core'],
    },
    ssr: {
      noExternal: ['agnosticui-core'],
    },
  },
  markdown: {
    theme: {
      light: 'github-light-high-contrast',
      dark: 'github-dark-high-contrast'
    },
    config: (md) => {
      md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        // The 'attrJoin' method is the correct and idiomatic way to add a class.
        // It handles creating the class attribute if it doesn't exist and
        // appending to it if it does.
        token.attrJoin('class', 'ag-table ag-table--striped');
        return self.renderToken(tokens, idx, options);
      };
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Components', link: '/components/button' }
    ],

    sidebar: [
      {
        text: 'Quick Start',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Theming', link: '/theming' },
        ]
      },
      getComponents(),
      {
        text: 'Playbooks',
        items: [
          { text: 'Login Form', link: '/playbooks/login' },
        ]
      },
      {
        text: 'Documentation',
        items: [
          { text: 'Setup Guide', link: '/docs/setup' },
          { text: 'Understanding AgnosticUI', link: '/docs/understand' },
          { text: 'Advanced Usage', link: '/docs/advanced/advanced-usage' },
          { text: 'CSS Utilities', link: '/docs/utilities' },
          { text: 'FAQ', link: '/docs/faq' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AgnosticUI/agnosticui' }
    ]
  }
})

function getComponents() {
  return {
    text: 'Components',
    items: [
      { text: 'Accordion', link: '/components/accordion' },
      { text: 'Alerts', link: '/components/alert' },
      { text: 'AspectRatio', link: '/components/aspect-ratio' },
      { text: 'Avatar', link: '/components/avatar' },
      { text: 'Badge', link: '/components/badge' },
      { text: 'BadgeFx (Lab)', link: '/components/badge-fx' },
      { text: 'Breadcrumb', link: '/components/breadcrumb' },
      { text: 'Button', link: '/components/button' },
      { text: 'ButtonFx (Lab)', link: '/components/button-fx' },
      { text: 'Card', link: '/components/card' },
      { text: 'Checkbox', link: '/components/checkbox' },
      { text: 'Collapsible', link: '/components/collapsible' },
      { text: 'Combobox', link: '/components/combobox' },
      { text: 'CopyButton', link: '/components/copybutton' },
      { text: 'Dialog', link: '/components/dialog' },
      { text: 'Divider', link: '/components/divider' },
      { text: 'Drawer', link: '/components/drawer' },
      { text: 'EmptyState', link: '/components/empty-state' },
      { text: 'Fieldset', link: '/components/fieldset' },
      { text: 'Flex (Lab)', link: '/components/flex' },
      { text: 'Header', link: '/components/header' },
      { text: 'Icon', link: '/components/icon' },
      { text: 'Icon Button', link: '/components/icon-button' },
      { text: 'IconButtonFx (Lab)', link: '/components/icon-button-fx' },
      { text: 'Image', link: '/components/image' },
      { text: 'Input', link: '/components/input' },
      { text: 'IntlFormatter', link: '/components/intl-formatter' },
      { text: 'Kbd', link: '/components/kbd' },
      { text: 'Link', link: '/components/link' },
      { text: 'Loader', link: '/components/loader' },
      { text: 'Mark', link: '/components/mark' },
      { text: 'Menu', link: '/components/menu' },
      { text: 'MessageBubble', link: '/components/message-bubble' },
      { text: 'Pagination', link: '/components/pagination' },
      { text: 'Popover', link: '/components/popover' },
      { text: 'Progress', link: '/components/progress' },
      { text: 'ProgressRing', link: '/components/progress-ring' },
      { text: 'Radio', link: '/components/radio' },
      { text: 'Rating', link: '/components/rating' },
      { text: 'ScrollProgress', link: '/components/scroll-progress' },
      { text: 'ScrollToButton', link: '/components/scroll-to-button' },
      { text: 'Select', link: '/components/select' },
      { text: 'Sidebar (Lab)', link: '/components/sidebar' },
      { text: 'Skeleton Loader', link: '/components/skeleton-loader' },
      { text: 'Slider', link: '/components/slider' },
      { text: 'Spinner', link: '/components/spinner' },
      { text: 'Table', link: '/components/table' },
      { text: 'Tabs', link: '/components/tabs' },
      { text: 'Tag', link: '/components/tag' },
      { text: 'Timeline', link: '/components/timeline' },
      { text: 'Toast', link: '/components/toast' },
      { text: 'Toggle', link: '/components/toggle' },
      { text: 'Tooltip', link: '/components/tooltip' },
      { text: 'VisuallyHidden', link: '/components/visually-hidden' },
    ]
  }
}
