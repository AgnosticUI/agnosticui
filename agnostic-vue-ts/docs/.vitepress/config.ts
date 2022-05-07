import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Agnostic",
  description: "AgnosticUI — One branded theme…all the frameworks.",
  base: "/",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/agnostic-css@1.0.19/public/css-dist/common.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/agnostic-css@1.0.19/public/css-dist/components.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/agnostic-css@1.0.19/public/css-dist/opinions.min.css' }],
  ],
  themeConfig: {
    repo: "agnosticui/agnosticui",
    docsDir: "site/docs/",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: "Last Updated",

    // algolia: {
    //   appId: 'tbd',
    //   apiKey: 'tbd',
    //   indexName: 'vitepress'
    // },
    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },

    nav: [
      {
        text: "Docs",
        link: "/docs/setup",
        activeMatch: "^/docs/"
      },
      {
        text: "Contribute",
        link: "https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md"
      }
    ],

    sidebar: {
      "/docs/": getDocsSidebar(),
      "/": getDocsSidebar()
    }
  }
})


function getDocsSidebar() {
  return [
    {
      text: 'Get Started',
      children: [
        { text: 'Setup', link: '/docs/setup' },
        // { text: 'Theming', link: '/docs/theming' },
        // { text: 'Understand', link: '/docs/understand' },
        // { text: 'Utilities', link: '/docs/utilities' },
        // { text: 'FAQ', link: '/docs/faq' }
      ]
    },
    {
      text: 'Vue 3 Components',
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
        // { text: 'EmptyState', link: '/docs/components/empty-state' },
        // { text: 'Header', link: '/docs/components/header' },
        // { text: 'Icons', link: '/docs/components/icons' },
        // { text: 'Inputs', link: '/docs/components/inputs' },
        // { text: 'Loader', link: '/docs/components/loader' },
        // { text: 'Menu', link: '/docs/components/menu' },
        // { text: 'Pagination', link: '/docs/components/pagination' },
        // { text: 'Progress', link: '/docs/components/progress' },
        // { text: 'Select', link: '/docs/components/select' },
        // { text: 'Spinner', link: '/docs/components/spinner' },
        // { text: 'Switch', link: '/docs/components/switch' },
        // { text: 'Table', link: '/docs/components/table' },
        // { text: 'Tabs', link: '/docs/components/tabs' },
        // { text: 'Tags', link: '/docs/components/tags' },
        // { text: 'Toasts', link: '/docs/components/toasts' },
      ]
    }
  ]
}
