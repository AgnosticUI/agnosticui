# Accessible Breadcrumb Navigation Guide

## HTML Structure

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/web/" aria-label="Web accessibility checklist">
        Web
      </a>
    </li>
    <li>
      <a href="/accessible-web/breadcrumbs/" aria-current="page">
        Breadcrumbs
      </a>
    </li>
  </ol>
</nav>
```

## Key Implementation Requirements

### Semantic Structure
- Use `<nav>` with a unique `aria-label`
- Implement breadcrumbs inside `<ol>` and `<li>` elements
- Add `aria-current="page"` to the current page link

### Accessibility Principles

#### 1. Perceivable
- Interactive elements must be easily identifiable
- Do not rely solely on color or weight to indicate links

#### 2. Operable
- Fully keyboard navigable
- Minimum click/tap target size: 44x44px
- Focus state must have:
  - 3:1 minimum contrast ratio
  - Minimum focus indication area equal to element width
  - 2px minimum height

#### 3. Screenreader Compatibility
- Link names should match destination page titles
- Provide clear link roles and states
- Discoverable via screenreader navigation landmarks

## Keyboard & Screenreader Interactions

### Keyboard
- `Tab`: Move focus to links
- `Enter`: Activate selected link

### Mobile Screenreader
- `Swipe`: Move focus to links
- `Double tap`: Activate selected link

## Developer Notes
- Ensure link names correspond to destination page titles
- Use descriptive `aria-label` when needed
- Reference [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/) for advanced implementation details