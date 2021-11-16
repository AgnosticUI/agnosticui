import DefaultTheme from 'vitepress/theme'
// Global AgnosticUI CSS custom properties
import 'agnostic-css/build/css-dist/common.min.css'
import './custom.css'

export default {
  ...DefaultTheme,
  // enhanceApp({ app }) {
  //   // register global components
  //   app.component('MyGlobalComponent' /* ... */)
  // }
}
