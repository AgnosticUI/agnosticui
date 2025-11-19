import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: '/ag-tokens.css' }],
    ['link', { rel: 'stylesheet', href: '/ag-tokens-dark.css' }],
    ['link', { rel: 'stylesheet', href: '/table.css' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  title: "AgnosticUI",
  description: "One theme…all frameworks! Lit. Vanilla. React. Vue. Svelte.",
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('ag-'),
      },
    },
  },
  markdown: {
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
      { text: 'Avatar', link: '/components/avatar' },
      { text: 'Badge', link: '/components/badge' },
      { text: 'Breadcrumb', link: '/components/breadcrumb' },
      { text: 'Button', link: '/components/button' },
      { text: 'Card', link: '/components/card' },
      { text: 'Checkbox', link: '/components/checkbox' },
      { text: 'Collapsible', link: '/components/collapsible' },
      { text: 'Combobox', link: '/components/combobox' },
      { text: 'Dialog', link: '/components/dialog' },
      { text: 'Divider', link: '/components/divider' },
      { text: 'Drawer', link: '/components/drawer' },
      { text: 'EmptyState', link: '/components/empty-state' },
      { text: 'Fieldset', link: '/components/fieldset' },
      { text: 'Flex', link: '/components/flex' },
      { text: 'Header', link: '/components/header' },
      { text: 'Icon Button', link: '/components/icon-button' },
      { text: 'Icon', link: '/components/icon' },
      { text: 'Image', link: '/components/image' },
      { text: 'Input', link: '/components/input' },
      { text: 'Kbd', link: '/components/kbd' },
      { text: 'Link', link: '/components/link' },
      { text: 'Loader', link: '/components/loader' },
      { text: 'Menu', link: '/components/menu' },
      { text: 'Pagination', link: '/components/pagination' },
      { text: 'Popover', link: '/components/popover' },
      { text: 'Progress', link: '/components/progress' },
      { text: 'Radio', link: '/components/radio' },
      { text: 'Rating', link: '/components/rating' },
      { text: 'Select', link: '/components/select' },
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
    ]
  }
}
