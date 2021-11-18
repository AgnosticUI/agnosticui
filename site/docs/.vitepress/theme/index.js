import DefaultTheme from 'vitepress/theme'
// Global AgnosticUI CSS custom properties
// import 'agnostic-css/build/css-dist/common.min.css'
// import "littlebutton-vue/dist/style.css";
import './highlightjs.css'
import './custom.css'

export default {
  ...DefaultTheme,
  // enhanceApp({ app }) {
  //   // register global components
  //   app.component(VueHighlightJS)
  // }
}
