# ScrollToButton Component Specification

## Overview

The **ScrollToButton** is a floating button that helps users quickly navigate long pages or content sections. It is flexible, accessible, and configurable to support multiple use cases:

### Supported Use Cases

1. **Back to Top** – Scrolls the page to the top.  
2. **Scroll to Bottom / End** – Scrolls the page to the bottom (e.g., in chat or long content).  
3. **Jump to Anchor / Section** – Scrolls to a specific element or section on the page via ID or HTMLElement reference.

---

## Component Positioning & Visibility

- **Default Placement:** Lower right corner of the viewport  
- **Behavior:** Stationary once visible; floats above page content without obstructing important elements  
- **Visibility Threshold:** Appears after the user scrolls past a configurable vertical position  
  - Default threshold: TBD (e.g., 300px)  
  - Prop override: `scrollThreshold`  
- **Transition:** Smooth fade in/out using opacity  
  - Fade in when scrolling past threshold  
  - Fade out when scrolling above threshold  
  - Respects `prefers-reduced-motion` (disable animation if user prefers)

---

## Props / Attributes

| Prop / Attribute | Type | Default | Description |
|-----------------|------|---------|-------------|
| `label` | `string` | `"Back to Top"` | Text label; supports localization or custom wording |
| `icon` | `boolean` | `true` | Show default SVG arrow icon |
| `scrollThreshold` | `number` | TBD | Scroll position (pixels) at which button appears |
| `target` | `'top' | 'bottom' | string | HTMLElement` | `'top'` | Destination to scroll to: top, bottom, anchor ID, or HTMLElement |
| `direction` | `'up' | 'down' | 'auto'` | `'auto'` | Determines arrow orientation; auto infers from target |
| `slot:icon` | `HTML` | N/A | Optional slot for custom icon projection |
| `smoothScroll` | `boolean` | `true` | Enables smooth scrolling (respects reduced motion) |

---

## Accessibility (A11y)

- **ARIA Attributes:**
  - `role="button"`
  - `aria-label={label}` (dynamic, based on `label` prop)
- **Keyboard Support:** Focusable via `Tab` and actionable via `Enter` or `Space`
- **Screen Reader:** Reads label accurately
- **Focus Visibility:** Maintain visible outline or focus ring
- **High Contrast / Dark Mode:** Adapt to system preferences
- **Reduced Motion:** Disable fade and smooth scrolling if user prefers reduced motion

---

## UX / Interaction Guidelines

- **Button size:**  
  - Small enough not to obscure content  
  - Large enough for touch (~44px recommended by WCAG)  
- **Stationary:** Remains fixed in viewport; does not follow scroll beyond placement  
- **Print Styles:** Hidden in print media (`@media print { display: none; }`)  
- **Arrow Orientation:**  
  - `up` for top targets  
  - `down` for bottom targets  
  - Auto infers based on `target`  
- **Smooth scrolling:** Enabled by default, disabled if `prefers-reduced-motion` is set

---

## Default Icon

- Simple SVG arrow aligned with the scroll direction
- Size: ~16–20px, inherits text color
- Can be overridden using a slot:

```html
<ScrollToButton>
  <svg slot="icon">...</svg>
</ScrollToButton>
````

---

## Styling & Transition Guidelines

* **Transitions:** `opacity` for fade in/out, duration ~250–400ms
* **Hover / Focus:** subtle background or shadow for affordance
* **Reduced Motion:**

```css
@media (prefers-reduced-motion: reduce) {
  transition: none;
  scroll-behavior: auto;
}
```

---

## References for Best Practices

* Nielsen Norman Group: [Back to Top UX](https://www.nngroup.com/articles/back-to-top/)
* VA Design System: [Back to Top Component](https://design.va.gov/components/back-to-top/)
* Example implementation inspiration: [UMN Back-to-Top Button](https://folwell.umn.edu/back-top-button)

---

## Example Usage

```html
<!-- Scroll to Top -->
<ScrollToButton label="Back to Top" target="top" />

<!-- Scroll to Bottom -->
<ScrollToButton label="Go to Bottom" target="bottom" direction="down" />

<!-- Scroll to specific anchor by ID -->
<ScrollToButton label="Jump to Section" target="section-3" />

<!-- Scroll to specific HTMLElement -->
<script>
  const section = document.getElementById('section-5');
</script>
<ScrollToButton label="Go to Section 5" :target="section" />
```

---

## Implementation Notes for AI Assistant

1. Render a floating button with a default label and optional SVG arrow.
2. Slot custom icons if provided; respect `icon` boolean toggle.
3. Use `window.scrollY` or `IntersectionObserver` to detect scroll position and toggle visibility.
4. Implement smooth fade-in/out with `opacity` and `transition`, respecting `prefers-reduced-motion`.
5. Implement smooth scroll to target (`top`, `bottom`, `HTMLElement`, or anchor ID), respecting reduced motion.
6. Apply ARIA attributes, keyboard accessibility, and focus visibility.
7. Ensure button does not appear in print (`@media print`).
8. Support optional props: label, icon, scroll threshold, direction, target, smooth scroll.
9. Ensure responsive design for desktop and touch devices.

---

**Proposed Name:** `ScrollToButton` – simple, intuitive, communicates function clearly, supports all three use cases.

