import { css as d, LitElement as u, html as s } from "lit";
import { t as g } from "../../../custom-element-CN0MC8o7.js";
import { n as b } from "../../../property-CemaeiRl.js";
import { o as p } from "../../../if-defined-BuNJR_vk.js";
var m = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, f = (r, e, a) => e in r ? m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, n = (r, e, a, i) => {
  for (var t = i > 1 ? void 0 : i ? _(e, a) : e, l = r.length - 1, o; l >= 0; l--)
    (o = r[l]) && (t = (i ? o(e, a, t) : o(t)) || t);
  return i && t && m(e, a, t), t;
}, h = (r, e, a) => f(r, e + "", a);
let c = class extends u {
  constructor() {
    super(), this.items = [], this.type = "default", this.ariaLabel = "Breadcrumb";
  }
  _handleItemClick = (r, e, a) => {
    this.dispatchEvent(new CustomEvent("breadcrumb-click", {
      detail: {
        item: e,
        index: a,
        event: r
      },
      bubbles: !0,
      composed: !0
    }));
  };
  _renderBreadcrumbItem(r, e) {
    const a = e === this.items.length - 1, i = r.current || a;
    return s`
      <li class="ag-breadcrumb__item">
        ${r.href && !i ? s`
              <a
                href="${r.href}"
                class="ag-breadcrumb__link"
                @click="${(t) => this._handleItemClick(t, r, e)}"
              >
                ${r.label}
              </a>
            ` : i ? s`
                <a
                  href="${p(r.href)}"
                  class="ag-breadcrumb__link"
                  aria-current="page"
                  @click="${(t) => this._handleItemClick(t, r, e)}"
                >
                  ${r.label}
                </a>
              ` : s`
                <span class="ag-breadcrumb__text">
                  ${r.label}
                </span>
              `}
      </li>
    `;
  }
  render() {
    return !this.items || this.items.length === 0 ? s`` : s`
      <nav class="ag-breadcrumb" aria-label="${this.ariaLabel}">
        <ol class="ag-breadcrumb__list">
          ${this.items.map((r, e) => this._renderBreadcrumbItem(r, e))}
        </ol>
      </nav>
    `;
  }
};
h(c, "styles", d`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      display: block;
    }

    .ag-breadcrumb__list {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style: none;
      white-space: nowrap;
    }

    .ag-breadcrumb__item {
      display: inline-flex;
      align-items: center;
    }

    .ag-breadcrumb__item + .ag-breadcrumb__item {
      padding-inline-start: var(--ag-space-2, 0.5rem);
    }

    .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "›";
      padding-inline-end: var(--ag-space-2, 0.5rem);
      color: var(--ag-text-secondary, #6b7280);
      speak: none;
      user-select: none;
    }

    /* Separator variants */
    :host([type="slash"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "/";
    }

    :host([type="arrow"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "→";
    }

    :host([type="bullet"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "•";
    }

    .ag-breadcrumb__link {
      text-decoration: none;
      color: var(--ag-primary, #3b82f6);
      padding: var(--ag-space-1, 0.25rem);
      margin: calc(var(--ag-space-1, 0.25rem) * -1);
      border-radius: var(--ag-border-radius, 0.25rem);
      transition: all var(--ag-transition-duration, 200ms) ease;
    }

    .ag-breadcrumb__link:hover {
      color: var(--ag-primary-hover, #1d4ed8);
      background: var(--ag-background-secondary, rgba(59, 130, 246, 0.1));
    }

    .ag-breadcrumb__link:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #f59e0b);
      outline-offset: var(--ag-focus-offset, 2px);
    }

    /* Current page styling */
    .ag-breadcrumb__link[aria-current="page"] {
      color: var(--ag-text-primary, #111827);
      text-decoration: none;
      cursor: default;
    }

    .ag-breadcrumb__link[aria-current="page"]:hover {
      background: transparent;
    }

    /* Non-linked current page */
    .ag-breadcrumb__text {
      color: var(--ag-text-primary, #111827);
      padding: var(--ag-space-1, 0.25rem);
      margin: calc(var(--ag-space-1, 0.25rem) * -1);
    }
  `);
n([
  b({ type: Array })
], c.prototype, "items", 2);
n([
  b({ type: String, reflect: !0 })
], c.prototype, "type", 2);
n([
  b({ type: String })
], c.prototype, "ariaLabel", 2);
c = n([
  g("ag-breadcrumb")
], c);
export {
  c as AgBreadcrumb
};
