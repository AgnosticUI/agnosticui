Got it. You want to create a single `spec.md` file for your Accordion component in your repo. Based on the combined APG + BBC GEL Markdown you provided, here’s a ready-to-save version:

---

**File:** `src/components/Accordion/spec.md`

````markdown
# Accordion Component Specification

## WAI-ARIA APG Accordion Pattern (Sections With Show/Hide Functionality)

**Reference:** [WAI-ARIA APG – Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

### About This Pattern

An accordion is a vertically stacked set of interactive headings, each containing a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

#### Terms for understanding accordions

* **Accordion Header**: Label or thumbnail representing a section of content that also serves as a control for showing, and in some implementations, hiding the section of content.
* **Accordion Panel**: Section of content associated with an accordion header.

In some accordions, there are additional elements that are always visible adjacent to the accordion header. For instance, a menu button may accompany each accordion header to provide access to actions that apply to that section. In some cases, a snippet of the hidden content may also be visually persistent.

### Example

```html
<h3>
  <button aria-expanded="false" aria-controls="personal-info">
    Personal Information
  </button>
</h3>
<div id="personal-info" role="region" aria-labelledby="personal-info">
  <!-- Form fields for personal information -->
</div>

<h3>
  <button aria-expanded="false" aria-controls="billing-address">
    Billing Address
  </button>
</h3>
<div id="billing-address" role="region" aria-labelledby="billing-address">
  <!-- Form fields for billing address -->
</div>

<h3>
  <button aria-expanded="false" aria-controls="shipping-address">
    Shipping Address
  </button>
</h3>
<div id="shipping-address" role="region" aria-labelledby="shipping-address">
  <!-- Form fields for shipping address -->
</div>
````

### Keyboard Interaction

* **Enter** or **Space**: Toggle panel open/closed.
* **Tab / Shift + Tab**: Navigate focus between all interactive elements.
* **Arrow Keys (Optional)**: Navigate between headers (Up/Down).
* **Home / End (Optional)**: Jump to first/last header.

### WAI-ARIA Roles, States, and Properties

* Header title: `role="button"`.
* Button wrapped in `role="heading"` with `aria-level` set.
* Button `aria-expanded="true|false"` reflects panel state.
* Button `aria-controls` points to panel ID.
* Optionally: panel container `role="region"` with `aria-labelledby` referencing the button.
* Avoid excessive landmark regions (no more than \~6 expandable panels simultaneously).

---

## BBC GEL Accordion Component

**Reference:** [BBC GEL Accordion Component](https://bbc.github.io/gel/components/accordions/)

### Overview

The BBC GEL Accordion presents collapsible content sections, improving space efficiency and user experience.

### Recommended Markup

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
  <!-- Additional sections -->
</div>
```

### Key Features

* Each section in `<section>` inside `<div class="gel-accordion">`.
* Button toggles visibility of its panel.
* `aria-expanded` reflects state; optional `aria-controls`.
* SVG icon indicates expanded/collapsed state.

### Recommended Layout & CSS

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

### Recommended Behavior

* Progressive enhancement: functional without JS.
* Keyboard accessible: toggle via Enter/Space, navigate via Tab/Shift+Tab.
* Screen reader compatible via proper ARIA attributes.

### Reference Implementation

```javascript
function open(section) {
  section.button.setAttribute('aria-expanded', 'true');
  section.drawer.hidden = false;
}

function close(section) {
  section.button.setAttribute('aria-expanded', 'false');
  section.drawer.hidden = true;
}

function openAll() { sections.forEach(section => open(section)); }
function closeAll() { sections.forEach(section => close(section)); }
```

### Accessibility Considerations

* Do not override native button semantics.
* Mark SVG icons as `aria-hidden="true"`.
```
