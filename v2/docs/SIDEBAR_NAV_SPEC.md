# Sidebar / NavigationRail (Primitive-Only)\*\*

**LLM-Ready Master Spec — UI Primitive**

**Purpose:** Provide an accessible, token-aligned, Shadow DOM–safe side navigation component that:

- Is fully independent of FormControl / Label system
- Supports **collapsed (icons-only) and expanded modes** from day one
- Exposes focusable items to keyboard navigation
- Accepts **projected content** (icons + labels) via slots
- Uses only real AgTokens
- Implements **presentation & accessibility only** — no internal routing or state management

> Collapsed mode must be functional and visually coherent. For demonstration, icons can be projected from any open-source icon set (Lucide, Material Icons, Tabler Icons, etc.). No icons are baked into AgnosticUI itself.

---

## 1. **Core Features**

| Feature                 | Notes                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Slots**               | `slot="top"`, `slot="main"`, `slot="bottom"` — for logo, main nav items, secondary actions                                |
| **Orientation**         | Vertical only                                                                                                             |
| **Collapsed Mode**      | Fully supported from day one. Rail shrinks to icon-only width (`--ag-drawer-width` for expanded, min width for collapsed) |
| **Keyboard Navigation** | Arrow keys move focus between `ag-nav-item` elements; items must be focusable and respect `tabindex`                      |
| **Active Item**         | Current selection indicated via `aria-current="page"`                                                                     |
| **Slot Composition**    | Accepts `<ag-nav-item>` or arbitrary projected elements                                                                   |
| **Accessibility**       | `role="navigation"`, `aria-label`, focusable slots; all children should be navigable                                      |

---

## 2. **AgTokens Usage**

- **Spacing / padding:** `--ag-space-*`
- **Text color:** `--ag-text-primary`, `--ag-text-secondary`
- **Background color:** `--ag-background-primary`, `--ag-background-secondary`
- **Borders / dividers:** `--ag-border-subtle`
- **Shadow / depth (if floating):** `--ag-shadow-sm`

No invented tokens or arbitrary styles.

---

## 3. **Icon Usage for Collapsed Mode**

- Project icons into slots (`ag-nav-item` or any element)
- Use a small, free, open-source set for demonstration:

  - **Lucide** (MIT) — small, clean SVGs
  - **Material Icons** (Apache 2.0) — icons-only SVG or font
  - **Tabler Icons** (MIT) — lightweight SVGs

> Icons are for demonstration only. They are projected into slots; they are **not part of AgnosticUI**.

---

## 4. **AgNavItem — LLM Instruction**

- Treated as focusable, semantic child of `AgNavigationRail`
- Should support:

```ts
<ag-nav-item>Label</ag-nav-item>
```

- LLM must:

  - Render it as a focusable element (button, anchor, or div with `tabindex=0`)
  - Expose `aria-current="page"` if active
  - Support projected icon inside

---

## 5. **Example Skeleton (LitElement)**

```ts
import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

export class AgNavigationRail extends LitElement {
  @property({ type: Boolean }) collapsed = false;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: var(--ag-drawer-width);
      background: var(--ag-background-primary);
      color: var(--ag-text-primary);
      border-right: var(--ag-border-width-1) solid var(--ag-border-subtle);
      box-shadow: var(--ag-shadow-sm);
    }

    :host([collapsed]) {
      width: 4rem; /* icons-only mode */
    }

    ::slotted(*) {
      display: flex;
      align-items: center;
      padding: var(--ag-space-3);
      cursor: pointer;
      font-size: var(--ag-font-size-base);
    }

    ::slotted([aria-current="page"]) {
      font-weight: 600;
      color: var(--ag-primary);
    }
  `;

  render() {
    return html`
      <nav role="navigation" aria-label="Main Sidebar">
        <slot name="top"></slot>
        <slot name="main"></slot>
        <slot name="bottom"></slot>
      </nav>
    `;
  }
}

customElements.define("ag-navigation-rail", AgNavigationRail);
```

---

## 6. **Example Slot Usage**

```html
<ag-navigation-rail collapsed>
  <div slot="top">LOGO</div>

  <ag-nav-item slot="main" aria-current="page">
    <svg><!-- icon --></svg>
    Dashboard
  </ag-nav-item>
  <ag-nav-item slot="main">
    <svg><!-- icon --></svg>
    Reports
  </ag-nav-item>
  <ag-nav-item slot="main">
    <svg><!-- icon --></svg>
    Settings
  </ag-nav-item>

  <div slot="bottom">Logout</div>
</ag-navigation-rail>
```

---

## 7. **Implementation Notes / LLM Guidance**

1. **Collapsed mode** is explicit from day one: rail width shrinks, projected icons remain visible, labels may be hidden or overflow-handled.
2. **Keyboard navigation**: `ag-nav-item` elements must be fully focusable; LLM should treat them as atomic navigation elements.
3. **Slots**: `top`, `main`, `bottom` must retain order and spacing even in collapsed mode.
4. **Styling**: use only **ag-tokens**. No arbitrary paddings or colors.
5. **Shadow DOM**: all slotted content must remain visible and accessible.
