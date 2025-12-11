# Why no v-slot?

In Vue's official documentation on Web Components, under the "Slots" section when discussing custom elements built with Vue, it explicitly states: "However, when consuming the resulting element, it only accepts native slots syntax" and "When passing named slots, use the `slot` attribute instead of the `v-slot` directive".

Vue's documentation explicitly acknowledges that when working with web components (custom elements), you **must use the native `slot` attribute** instead of Vue's `v-slot` directive.

Additionally, a Stack Overflow [answer](https://stackoverflow.com/questions/69300349/how-do-i-use-slots-from-a-vue2-webcomponent-in-vue3) addressing this exact issue states:

> "Vue is complaining about the older slot attribute that has been changed to v-slot. But you're not using vue slots, you're using WebComponent's native slot attribute. So you can safely disable this check in your .eslintrc.js file".

The key distinction is:

- **Vue component to Vue component**: Use `v-slot` directive with `<template>` tags
- **Vue component to Web Component**: Use native `slot` attribute (the "deprecated" syntax for Vue components)

This isn't actually deprecated when used with web components - it's the **correct and only supported approach**. The ESLint warning `vue/no-deprecated-slot-attribute` is meant for Vue-to-Vue component communication, not for web component integration.
