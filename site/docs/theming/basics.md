---
title: AgnosticUI Docs Frontmatter Heading Title Test 
editLink: true
navbar: false
sidebar: false
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---

[[toc]]

# Theming: Basics

::: tip
The theming reference is still incomplete.
:::

# {{ $frontmatter.title }}

Lot's of good [vitepress markdown examples here](https://vitepress.vuejs.org/guide/markdown.html#markdown-extensions).

## Theming

Vite's [theming guide](https://vitepress.vuejs.org/guide/theming.html#theming)


## --ag-primary

- Type: `string`
- Default: `/`

The `--ag-primary` CSS property represents your design system's &ldquo;primary&rdquo; color.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

:tada: :100:

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::

```js
export default {
  name: 'MyComponent',
  // ...
}
```

```js
module.exports = {
  base: '/base/'
}
```

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

___

## Debugging

You can use the `useData` helper to debug a particular page's configuration.

<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<pre>{{ page }}</pre>

___

## lang

- Type: `string`
- Default: `en-US`

The `lang` attribute for the site. This will render as a `<html lang="en-US">` tag in the page HTML.

```js
module.exports = {
  lang: 'en-US'
}
```

## title

- Type: `string`
- Default: `VitePress`

Title for the site. This will be the suffix for all page titles, and displayed in the navbar.

```js
module.exports = {
  title: 'VitePress'
}
```

## description

- Type: `string`
- Default: `A VitePress site`

Description for the site. This will render as a `<meta>` tag in the page HTML.

```js
module.exports = {
  description: 'A VitePress site'
}
```
