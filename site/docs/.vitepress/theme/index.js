import DefaultTheme from 'vitepress/theme'

// Global AgnosticUI CSS custom properties
import 'agnostic-vue/dist/common.min.css'
import './highlightjs.css'
import './custom.css'

export default {
  ...DefaultTheme,
  // enhanceApp({ app }) {
    // register global components
    // app.component(VueHighlightJS)
  // }
}
