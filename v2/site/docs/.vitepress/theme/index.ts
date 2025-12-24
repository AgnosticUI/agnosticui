// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'

// Polyfills for SSR
if (typeof window === 'undefined') {
  class MockElement {
    setAttribute() {}
    removeAttribute() {}
    getAttribute() { return '' }
    hasAttribute() { return false }
    addEventListener() {}
    removeEventListener() {}
    appendChild() {}
    get classList() {
      return {
        add: () => {},
        remove: () => {},
        toggle: () => {},
        contains: () => false
      }
    }
    get style() { return {} }
  }

  // @ts-ignore
  global.window = {
    customElements: {
      define: () => {},
      get: () => {}
    },
    addEventListener: () => {},
    removeEventListener: () => {}
  }
  // @ts-ignore
  global.document = {
    createElement: () => new MockElement(),
    querySelector: () => null,
    getElementById: () => null,
    createTreeWalker: () => ({
      currentNode: null,
      nextNode: () => null,
      firstChild: () => null
    }),
    head: new MockElement(),
    body: new MockElement(),
    documentElement: new MockElement(),
    addEventListener: () => {},
    removeEventListener: () => {}
  }
  // @ts-ignore
  global.HTMLElement = MockElement
  // @ts-ignore
  global.customElements = global.window.customElements
  // @ts-ignore
  global.Node = { ELEMENT_NODE: 1 }
}
import MyLayout from './MyLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,

  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
