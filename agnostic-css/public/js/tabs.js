// https://github.com/agnosticui/a11y-tabs

/**
 * This all depends on the CDN loaded a11y-tabs -- see _preview.hbs in src/components/tabs
 */
window.addEventListener('DOMContentLoaded', () => {
  new A11yTabs('.tab-list', '[role="tabpanel"]', 0)
})
