// https://github.com/KittyGiraudel/a11y-dialog

/**
 * This all depends on the CDN loaded a11y-dialog -- see _preview.hbs
 */
const element = document.getElementById('dialog-example')
const html = document.documentElement
const dialog = new A11yDialog(element)

// Simple scroll lock -- https://a11y-dialog.netlify.app/advanced/scroll-lock
dialog
  .on('show', () => (html.style.overflowY = 'hidden'))
  .on('hide', () => (html.style.overflowY = ''))

dialog.on('show', function (dialogEl, triggerEl) {
  console.log(dialogEl)
  console.log(triggerEl)
})
