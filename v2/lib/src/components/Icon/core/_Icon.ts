// _Icon.ts (Class-Free Slotted Styling)
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type IconSize = '14' | '16' | '18' | '20' | '24' | '32' | '36' | '40' | '48' | '56' | '64' | '';
export type IconType = 'info' | 'action' | 'success' | 'warning' | 'error' | '';

export interface IconProps {
  size?: IconSize;
  type?: IconType;
}

@customElement('ag-icon')
export class Icon extends LitElement implements IconProps {
  static styles = css`
    .icon-base {
      display: inline-flex;
      text-align: center;
      /* Ensures no "stretching" of icons to reach 100% of container's width */
      max-width: 100%;
      /* Ensure SVGs don't have click events -- typically we want enclosing button to handle */
      pointer-events: none;
      user-select: none;
    }

    /* Wrapper sizing classes (applied to .icon-base) */
    .icon-base.icon-14 {
      width: var(--ag-font-size-xs);
      height: var(--ag-font-size-xs);
    }

    .icon-base.icon-16 {
      width: var(--ag-font-size-base);
      height: var(--ag-font-size-base);
    }

    .icon-base.icon-18 {
      width: var(--ag-font-size-md);
      height: var(--ag-font-size-md);
    }

    .icon-base.icon-20 {
      width: var(--ag-font-size-lg);
      height: var(--ag-font-size-lg);
    }

    .icon-base.icon-24 {
      width: var(--ag-space-6);
      height: var(--ag-space-6);
    }

    .icon-base.icon-32 {
      width: var(--ag-space-8);
      height: var(--ag-space-8);
    }

    .icon-base.icon-36 {
      width: var(--ag-space-9);
      height: var(--ag-space-9);
    }

    .icon-base.icon-40 {
      width: var(--ag-space-10);
      height: var(--ag-space-10);
    }

    .icon-base.icon-48 {
      width: var(--ag-space-12);
      height: var(--ag-space-12);
    }

    .icon-base.icon-56 {
      width: var(--ag-space-14);
      height: var(--ag-space-14);
    }

    .icon-base.icon-64 {
      width: 4rem;
      height: 4rem;
    }

    ::slotted(svg) {
      width: 100%;
      height: 100%;
      fill: currentColor;
      max-width: 100%; /* Prevent overflow */
      max-height: 100%;
    }

    /* Type theming via host attribute (inherits to slotted svg via currentColor) */
    :host([type="info"]) {
      color: var(--ag-primary);
    }

    :host([type="action"]),
    :host([type="success"]) {
      color: var(--ag-success);
    }

    :host([type="warning"]) {
      color: var(--ag-warning);
    }

    :host([type="error"]) {
      color: var(--ag-danger);
    }
  `;

  /**
   * Size variant for the icon wrapper and SVG.
   */
  @property({ type: String, reflect: true }) size: IconSize = '16';

  /**
   * Semantic type for color theming the icon.
   */
  @property({ type: String, reflect: true }) type: IconType = '';

  render() {
    return html`
      <span class="icon-base icon-${this.size}" part="icon-base">
        <slot></slot>
      </span>
    `;
  }
}
