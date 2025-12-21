import DefaultTheme from 'vitepress/theme'
import DarkModeToggleLayout from './DarkModeToggleLayout.vue'

// Global AgnosticUI CSS custom properties
// import 'agnostic-css/public/css-dist/common.min.css'
// import 'agnostic-css/public/css-dist/components.min.css'
import './highlightjs.css'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout: DarkModeToggleLayout
  // enhanceApp({ app }) {
    // register global components
    // app.component(VueHighlightJS)
  // }
}
