export default {
  lang: "en-US",
  // We use some CSS::after fu to add the UI see theme/custom.css
  title: "Agnostic",
  description: "AgnosticUI — One stylesheet…all the frameworks.",
  base: "/",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/agnostic-css@1.0.12/public/css-dist/common.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/agnostic-css@1.0.12/public/css-dist/components.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/agnostic-css@1.0.12/public/css-dist/opinions.min.css' }],
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
        activeMatch: "^/$|^/docs/"
      },
      {
        text: "Contribute",
        link: "https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md"
      }
    ],

    sidebar: {
      "/docs/": getDocsSidebar(),
      "/config/": getConfigSidebar(),
      "/": getDocsSidebar()
    }
  }
};

function getDocsSidebar() {
  return [
    {
      text: 'Get Started',
      children: [
        { text: 'Setup', link: '/docs/setup' },
        { text: 'Theming', link: '/docs/theming' },
        { text: 'Understand', link: '/docs/understand' },
        { text: 'Utilities', link: '/docs/utilities' }
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
      ]
    },
    {
      text: 'CSS Components 🚧',
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
        // { text: 'Spinner', link: '/docs/css/spinner' },
        // { text: 'Switch', link: '/docs/css/switch' },
        // { text: 'Table', link: '/docs/css/table' },
        // { text: 'Tabs', link: '/docs/css/tabs' },
        // { text: 'Tags', link: '/docs/css/tags' },
        // { text: 'Toasts', link: '/docs/css/toasts' },
        { text: 'More Coming Soon ✨', link: '/docs/css/coming' },
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

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
      ]
    }
  ]
}
