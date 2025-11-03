# Header

The Header component provides a semantic, accessible, and responsive page header with support for branding/logo and navigation content. It features sticky positioning, flexible content alignment, and responsive behavior.

<HeaderExamples />

<script setup>
import HeaderExamples from '../examples/HeaderExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <div>
    <!-- Basic header -->
    <VueHeader>
      <template #logo>
        <a
          href="/"
          style="text-decoration: none; color: inherit; font-weight: 700; font-size: 1.25rem;"
        >
          MyBrand
        </a>
      </template>
      <nav>
        <ul
          style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;"
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </VueHeader>

    <!-- Sticky header -->
    <VueHeader :sticky="true">
      <template #logo>
        <a href="/">Brand</a>
      </template>
      <nav>Navigation</nav>
    </VueHeader>

    <!-- Custom content justification -->
    <VueHeader contentJustify="start">
      <template #logo>
        <a href="/">Logo</a>
      </template>
      <nav>Menu</nav>
    </VueHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueHeader } from "agnosticui-core/header/vue";

export default defineComponent({
  components: { VueHeader },
});
</script>
```

:::

::: details React

```tsx
import { ReactHeader } from "agnosticui-core/header/react";

export default function Example() {
  return (
    <div>
      {/* Basic header */}
      <ReactHeader>
        <a
          href="/"
          slot="logo"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 700,
            fontSize: "1.25rem",
          }}
        >
          MyBrand
        </a>
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </ReactHeader>

      {/* Sticky header */}
      <ReactHeader sticky>
        <a href="/" slot="logo">
          Brand
        </a>
        <nav>Navigation</nav>
      </ReactHeader>

      {/* Custom content justification */}
      <ReactHeader contentJustify="start">
        <a href="/" slot="logo">
          Logo
        </a>
        <nav>Menu</nav>
      </ReactHeader>
    </div>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/header";
</script>

<!-- Basic header -->
<ag-header>
  <a
    href="/"
    slot="logo"
    style="text-decoration: none; color: inherit; font-weight: 700; font-size: 1.25rem;"
  >
    MyBrand
  </a>
  <nav>
    <ul
      style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;"
    >
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</ag-header>

<!-- Sticky header -->
<ag-header sticky>
  <a href="/" slot="logo">Brand</a>
  <nav>Navigation</nav>
</ag-header>

<!-- Custom content justification -->
<ag-header contentJustify="start">
  <a href="/" slot="logo">Logo</a>
  <nav>Menu</nav>
</ag-header>
```

:::

## Props

| Prop             | Type                                                    | Default     | Description                                                                                                                                                                         |
| ---------------- | ------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sticky`         | `boolean`                                               | `false`     | Makes the header sticky at the viewport top. The header will remain visible when scrolling                                                                                          |
| `contentJustify` | `'start' \| 'end' \| 'between' \| 'around' \| 'center'` | `'between'` | Controls flex content alignment. `between` puts logo and nav at opposite ends, `start` aligns to the left, `end` to the right, `around` distributes space, `center` centers content |

## Slots

| Slot      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| `logo`    | Content for the logo/brand area, typically a link with logo image or text |
| (default) | Navigation content, typically a `<nav>` element containing menu items     |

## Events

The Header component does not emit any custom events. It relies on standard DOM events from slotted content.

## CSS Shadow Parts

| Part                | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| `ag-header`         | The outer `<header>` element                                   |
| `ag-header-content` | The inner content wrapper div that controls layout and spacing |

### Customization Example

```css
/* Custom gradient background */
.gradient-header::part(ag-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-bottom: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* Custom border styling */
.custom-border::part(ag-header) {
  background: var(--ag-background-secondary);
  border-bottom: 3px solid var(--ag-primary);
  box-shadow: none;
}

/* Custom content width and padding */
.wide-header::part(ag-header-content) {
  max-width: 1200px;
  padding: 1.5rem 2rem;
}
```

## Accessibility

The Header component is designed to be accessible by default:

- **Semantic HTML**: Uses the `<header>` element which provides an implicit landmark role
- **Navigation**: Consumers should wrap navigation links in a `<nav>` element for proper semantic structure
- **Keyboard Navigation**: All interactive elements in slotted content remain keyboard accessible
- **Screen Readers**: The `<header>` landmark is automatically announced by screen readers
- **ARIA Labels**: Consider adding `aria-label` to `<nav>` elements for additional context (e.g., `<nav aria-label="Main navigation">`)

### Best Practices

- Use the `<header>` component once per page for the main site header
- Include semantic `<nav>` elements for navigation menus
- Ensure logo/brand links have accessible text or `aria-label`
- Maintain adequate color contrast in custom styling
- For sticky headers, consider using [scroll-margin-top](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top) on jump link targets to prevent content from hiding under the header:

```css
/* Adjust based on your header height */
h1[id],
h2[id],
h3[id] {
  scroll-margin-top: var(--your-headers-height);
}
```

## Responsive Behavior

The Header component uses a mobile-first responsive approach:

- **Mobile (<960px)**:

  - Stacked column layout
  - Logo and navigation centered
  - Vertical spacing between logo and navigation

- **Desktop (≥960px)**:
  - Horizontal row layout
  - Content justification applied (default: space-between)
  - Logo and navigation side-by-side

For mobile navigation menus (hamburger menus), you'll need to implement the toggle logic yourself. The Header component provides the container and layout structure.

## Common Patterns

### Header with Logo Image

```vue
<VueHeader>
  <template #logo>
    <a href="/" style="display: flex; align-items: center; gap: 0.5rem;">
      <img src="/logo.svg" alt="Company Name" width="32" height="32" />
      <span style="font-weight: 700; font-size: 1.25rem;">Company</span>
    </a>
  </template>
  <nav>...</nav>
</VueHeader>
```

### Sticky Header with Shadow

```vue
<VueHeader :sticky="true">
  <template #logo>
    <a href="/">Brand</a>
  </template>
  <nav aria-label="Main navigation">
    <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</VueHeader>
```

## Notes

- The Header component provides the semantic structure and layout; you're responsible for styling navigation links and implementing any interactive navigation patterns (mobile menus, dropdowns, etc.)
- When using `sticky`, the header uses `z-index: var(--ag-z-index-dropdown)` (100) to stay above page content
- The default content width is 960px with responsive max-width: 100% to prevent horizontal overflow
- Dark mode is automatically supported through design tokens when `data-theme="dark"` is set on the HTML element
