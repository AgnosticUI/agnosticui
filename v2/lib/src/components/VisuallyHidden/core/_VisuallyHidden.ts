import { LitElement, html, css } from 'lit';

/**
 * @summary A component for visually hiding content while keeping it screen-reader accessible.
 * @slot - The content to be visually hidden.
 */
export class VisuallyHidden extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}