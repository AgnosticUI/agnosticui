import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type HeaderContentJustify = 'start' | 'end' | 'between' | 'around' | 'center';

export interface HeaderProps {
  sticky?: boolean;
  contentJustify?: HeaderContentJustify;
  isSkinned?: boolean;
}

/**
 * Header component - Provides a semantic, accessible, and responsive page header
 *
 * @slot logo - Content for logo/brand area
 * @slot - Navigation content (default slot)
 *
 * @csspart ag-header - The outer header element
 * @csspart ag-header-content - The inner content wrapper
 */
@customElement('ag-header')
export class Header extends LitElement implements HeaderProps {
  @property({ type: Boolean, reflect: true })
  public sticky = false;

  @property({ type: String, reflect: true })
  public contentJustify: HeaderContentJustify = 'between';

  @property({ type: Boolean, reflect: true })
  public isSkinned = true;

  static styles = css`
    :host {
      display: block;
    }

    .header {
      font-family: inherit;
    }

    /* Skinned styles - box shadow, border, padding, background */
    :host([isSkinned]) .header {
      background-color: var(--ag-background-primary);
      box-shadow: 0 1px 5px 2px rgb(0 0 0 / 10%);
      border-bottom: var(--ag-border-width-1) solid var(--ag-border);
      padding-block-start: var(--ag-space-2);
      padding-block-end: var(--ag-space-2);
      padding-inline-start: var(--ag-space-6);
      padding-inline-end: var(--ag-space-6);
    }

    /* Sticky positioning */
    :host([sticky]) .header {
      position: sticky;
      top: 0;
      z-index: var(--ag-z-index-dropdown);
    }

    /* Mobile-first: column layout */
    .header-content {
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--ag-space-4);
    }

    .header-logo {
      display: flex;
      align-items: center;
    }

    .header-nav {
      display: flex;
      align-items: center;
    }

    /* Ensure slotted nav elements inherit flex + center alignment */
    .header-nav ::slotted(nav) {
      display: flex;
      align-items: center;
    }

    /* Desktop: row layout with configurable justification */
    @media (min-width: 960px) {
      .header-content {
        flex-direction: row;
        width: 960px;
      }

      :host([contentJustify="between"]) .header-content {
        justify-content: space-between;
      }

      :host([contentJustify="start"]) .header-content {
        justify-content: flex-start;
      }

      :host([contentJustify="end"]) .header-content {
        justify-content: flex-end;
      }

      :host([contentJustify="around"]) .header-content {
        justify-content: space-around;
      }

      :host([contentJustify="center"]) .header-content {
        justify-content: center;
      }

      :host([sticky]) .header {
        position: sticky;
      }
    }
  `;

  render() {
    return html`
      <header class="header" part="ag-header">
        <div class="header-content" part="ag-header-content">
          <div class="header-logo">
            <slot name="logo"></slot>
          </div>
          <div class="header-nav">
            <slot></slot>
          </div>
        </div>
      </header>
    `;
  }
}
