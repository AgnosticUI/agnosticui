# BBC GEL Accordion Component Specification

## Overview

The BBC GEL Accordion component is designed to present collapsible sections of content, allowing users to expand and collapse sections interactively. This pattern enhances user experience by organizing content in a space-efficient manner.

## Recommended Markup

```html
<div class="gel-accordion">
  <section>
    <h2 class="gel-accordion__handle">
      <button aria-expanded="false" type="button">
        <span>Section 1</span>
        <svg viewBox="0 0 32 32" class="gel-icon gel-icon--text" focusable="false" aria-hidden="true">
          <path d="M16 29L32 3h-7.2L16 18.3 7.2 3H0"></path>
        </svg>
      </button>
    </h2>
    <div class="gel-accordion__drawer" hidden>
      <p>Some text...</p>
      <img src="http://www.example.com/path/to/image" alt="description">
      <p>Some more text...</p>
    </div>
  </section>
  <!-- Additional sections can be added here -->
</div>
````

## Key Features

* **Accordion Structure**: Each section is wrapped in a `<section>` element within a parent `<div class="gel-accordion">`.
* **Toggle Button**: Each section has a `<button>` element that controls the visibility of the associated content.
* **ARIA Attributes**:

  * `aria-expanded`: Indicates the current state of the accordion section (true or false).
  * `aria-controls`: (Optional) Identifies the element controlled by the button.
* **SVG Icon**: An SVG icon is used to visually indicate the expanded or collapsed state.

## Recommended Layout

* **Button Alignment**: The button within each section's handle should be aligned to the left, with the SVG icon aligned to the right.
* **Icon Rotation**: The SVG icon should rotate to indicate the expanded or collapsed state. This can be achieved using CSS transforms.

```css
.gel-accordion__handle button {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gel-accordion__handle svg {
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.gel-accordion__handle [aria-expanded="true"] svg {
  transform: rotate(180deg);
}
```

## Recommended Behavior

* **Progressive Enhancement**: Ensure that content is accessible and functional even when JavaScript is disabled.
* **Keyboard Accessibility**:

  * Use the `Enter` or `Space` key to toggle the expanded state of a section.
  * Ensure that all interactive elements are focusable and navigable via the keyboard.
* **Screen Reader Support**: Properly implement ARIA attributes to ensure compatibility with screen readers.

## Reference Implementation

The BBC provides a reference implementation that demonstrates the behavior and structure of the accordion component. It includes methods for opening and closing sections, as well as toggling all sections simultaneously.

```javascript
// Open a section
function open(section) {
  section.button.setAttribute('aria-expanded', 'true');
  section.drawer.hidden = false;
}

// Close a section
function close(section) {
  section.button.setAttribute('aria-expanded', 'false');
  section.drawer.hidden = true;
}

// Open all sections
function openAll() {
  sections.forEach(section => open(section));
}

// Close all sections
function closeAll() {
  sections.forEach(section => close(section));
}
```

## Accessibility Considerations

* **Avoid Overriding ARIA Roles**: Do not change native semantics unless necessary. For instance, avoid using `role="button"` on elements that are already buttons.
* **SVG Accessibility**: Ensure that SVG icons are properly marked as `aria-hidden="true"` to prevent them from being exposed to assistive technologies.

---

**Reference:** [BBC GEL Accordion Component](https://bbc.github.io/gel/components/accordions/)
