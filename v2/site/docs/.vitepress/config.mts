import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: '/ag-tokens.css' }],
    ['link', { rel: 'stylesheet', href: '/ag-tokens-dark.css' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  title: "AgnosticUI",
  description: "One theme…all frameworks! Lit. Vanilla. React. Vue. Svelte.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      getComponents(),
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
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
      { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
      { text: 'Buttons', link: '/components/buttons' },
      { text: 'Icon Button', link: '/components/icon-button' },
      { text: 'Input', link: '/components/input' },
      { text: 'Toggle', link: '/components/toggle' },
      { text: 'Tooltip', link: '/components/tooltip' },
    ]
  }
}


function getDocsSidebar() {
  return [
    {
      text: 'Get Started',
      children: [
        { text: 'Setup', link: '/docs/setup' },
        { text: 'Theming', link: '/docs/theming' },
        { text: 'Understand', link: '/docs/understand' },
        { text: 'Utilities', link: '/docs/utilities' },
        { text: 'FAQ', link: '/docs/faq' }
      ]
    },
    {
      text: 'Framework Components',
      children: [
        { text: 'Alerts', link: '/docs/components/alerts' },
        { text: 'Avatars', link: '/docs/components/avatars' },
        { text: 'Breadcrumbs', link: '/docs/components/breadcrumbs' },
        { text: 'Buttons', link: '/docs/components/buttons' },
        { text: 'Cards', link: '/docs/components/cards' },
        { text: 'Choices', link: '/docs/components/choice-inputs' },
        { text: 'Close', link: '/docs/components/close' },
        { text: 'Dialog', link: '/docs/components/dialog' },
        { text: 'Disclose', link: '/docs/components/disclose' },
        { text: 'Divider', link: '/docs/components/divider' },
        { text: 'Drawer', link: '/docs/components/drawer' },
        { text: 'EmptyState', link: '/docs/components/empty-state' },
        { text: 'Header', link: '/docs/components/header' },
        { text: 'Icons', link: '/docs/components/icons' },
        { text: 'Inputs', link: '/docs/components/inputs' },
        { text: 'Loader', link: '/docs/components/loader' },
        { text: 'Menu', link: '/docs/components/menu' },
        { text: 'Pagination', link: '/docs/components/pagination' },
        { text: 'Progress', link: '/docs/components/progress' },
        { text: 'Select', link: '/docs/components/select' },
        { text: 'Spinner', link: '/docs/components/spinner' },
        { text: 'Switch', link: '/docs/components/switch' },
        { text: 'Table', link: '/docs/components/table' },
        { text: 'Tabs', link: '/docs/components/tabs' },
        { text: 'Tags', link: '/docs/components/tags' },
        { text: 'Toasts', link: '/docs/components/toasts' },
        { text: 'Tooltips', link: '/docs/components/tooltips' },
      ]
    },
    {
      text: 'CSS Components',
      children: [
        { text: 'Alerts', link: '/docs/css/alerts' },
        { text: 'Avatars', link: '/docs/css/avatars' },
        { text: 'Breadcrumbs', link: '/docs/css/breadcrumbs' },
        { text: 'Buttons', link: '/docs/css/buttons' },
        { text: 'Cards', link: '/docs/css/cards' },
        { text: 'Choices', link: '/docs/css/choice-inputs' },
        { text: 'Close', link: '/docs/css/close' },
        { text: 'Dialog', link: '/docs/css/dialog' },
        { text: 'Disclose', link: '/docs/css/disclose' },
        { text: 'Divider', link: '/docs/css/divider' },
        { text: 'EmptyState', link: '/docs/css/empty-state' },
        { text: 'Header', link: '/docs/css/header' },
        { text: 'Icons', link: '/docs/css/icons' },
        { text: 'Inputs', link: '/docs/css/inputs' },
        { text: 'Loaders', link: '/docs/css/loader' },
        { text: 'Menu', link: '/docs/css/menu' },
        { text: 'Pagination', link: '/docs/css/pagination' },
        { text: 'Progress', link: '/docs/css/progress' },
        { text: 'Select', link: '/docs/css/select' },
        { text: 'Switch', link: '/docs/css/switch' },
        { text: 'Table', link: '/docs/css/table' },
        { text: 'Tabs', link: '/docs/css/tabs' },
        { text: 'Tags', link: '/docs/css/tags' },
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Advanced Usage', link: '/docs/advanced/advanced-usage' }
      ]
    }
  ]
}
