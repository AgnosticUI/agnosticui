export default {
  lang: "en-US",
  // We use some CSS::after fu to add the UI see theme/custom.css
  title: "Agnostic",
  description: "AgnosticUI — One stylesheet…all the frameworks.",
  base: "/",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
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
      text: 'Components',
      children: [
        { text: 'Alerts', link: '/docs/components/alerts' },
        { text: 'Avatars', link: '/docs/components/avatars' },
        { text: 'Breadcrumbs', link: '/docs/components/breadcrumbs' },
        { text: 'Buttons', link: '/docs/components/buttons' },
        { text: 'Cards', link: '/docs/components/cards' },
        { text: 'Choices', link: '/docs/components/choice-inputs' },
        { text: 'Close', link: '/docs/components/close' },
        { text: 'Disclose', link: '/docs/components/disclose' },
        { text: 'Header', link: '/docs/components/header' },
        { text: 'Icons', link: '/docs/components/icons' },
        { text: 'Inputs', link: '/docs/components/inputs' },
        { text: 'Progress', link: '/docs/components/progress' },
        { text: 'Select', link: '/docs/components/select' },
        { text: 'Switch', link: '/docs/components/switch' },
        { text: 'Tabs', link: '/docs/components/tabs' },
        { text: 'Tags', link: '/docs/components/tags' },
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
