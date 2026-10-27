import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './icon-structure.module.css';
import structuralStylesText from './icon-structure.module.css?inline';

export type IconSize = '14' | '16' | '18' | '20' | '24' | '32' | '36' | '40' | '48' | '56' | '64' | '';
export type IconType = 'info' | 'primary' | 'action' | 'success' | 'warning' | 'error' | 'monochrome' | '';

export interface IconProps {
  size?: IconSize;
  type?: IconType;
  noFill?: boolean;
}

export class AgIcon extends LitElement implements IconProps {
  @property({ type: String, reflect: true })
  declare size: IconSize;

  @property({ type: String, reflect: true })
  declare type: IconType;

  @property({ type: Boolean, reflect: true, attribute: 'no-fill' })
  declare noFill: boolean;

  constructor() {
    super();
    this.size = '16';
    this.type = '';
    this.noFill = false;
  }

  // Purely runtime-reactive blocks stay in static styles, geometry is parsed from raw text
  static styles = [
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      :host {
        display: inline-flex;
      }

      :host(:not([no-fill])) ::slotted(svg) {
        width: 100%;
        height: 100%;
        fill: currentColor;
        max-inline-size: 100%;
        max-block-size: 100%;
      }

      :host([no-fill]) ::slotted(svg) {
        width: 100%;
        height: 100%;
        max-inline-size: 100%;
        max-block-size: 100%;
        fill: none;
        stroke: currentColor;
      }

      :host([type="info"]) { color: var(--ag-info); }
      :host([type="primary"]) { color: var(--ag-primary); }
      :host([type="action"]), :host([type="success"]) { color: var(--ag-success); }
      :host([type="warning"]) { color: var(--ag-warning); }
      :host([type="error"]) { color: var(--ag-danger); }
      :host([type="monochrome"]) { color: var(--ag-text-primary); }
    `
  ];

  render() {
    const sizeKey = `icon${this.size}` as keyof typeof styles;
    const dynamicLayoutClass = styles[sizeKey] || styles.icon16;
    const globalSizeClass = `ag-icon-${this.size}`;

    return html`
      <span class="${styles.iconBase} ${dynamicLayoutClass} ag-icon-base ${globalSizeClass}" part="icon-base">
        <slot></slot>
      </span>
    `;
  }
}
