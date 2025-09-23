/**
 * AgnosticUI v2 Tooltip - Canonical Implementation
 *
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 *
 * This file contains the canonical, upgrade-safe implementation of the Tooltip component.
 * It is based on the WAI-ARIA Authoring Practices Guide (APG) for tooltips.
 * https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
 */

import { LitElement, html, css } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { computePosition, autoUpdate, flip, shift, offset, arrow, type Placement } from '@floating-ui/dom';

export class Tooltip extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    #tooltip {
      display: none;
      position: absolute;
      z-index: var(--ag-z-index-modal, 1000);
      pointer-events: none;
      opacity: 0;
      transition: opacity var(--ag-motion-fast, 0.15s) ease-in-out;
    }

    #tooltip[data-show] {
      display: block;
      opacity: 1;
      pointer-events: auto;
    }

    #arrow {
      position: absolute;
      background: inherit;
      width: var(--ag-space-2, 0.5rem);
      height: var(--ag-space-2, 0.5rem);
      transform: rotate(45deg);
    }
  `;

  @property({ type: String })
  declare content: string;

  @property({ type: String, reflect: true })
  declare placement: Placement;

  @property({ type: Number })
  declare distance: number;

  @property({ type: Number })
  declare skidding: number;

  @property({ type: String })
  declare trigger: string;

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  @state()
  private declare _open: boolean;

  @query('#tooltip')
  tooltipElement: HTMLElement | undefined;

  @query('#arrow')
  arrowElement: HTMLElement | undefined;

  private _cleanup: (() => void) | undefined;
  private _hideTimeout: number | undefined;

  constructor() {
    super();
    this.content = '';
    this.placement = 'top';
    this.distance = 8;
    this.skidding = 0;
    this.trigger = 'hover focus';
    this.disabled = false;
    this._open = false;
  }

  firstUpdated() {
    this._setupEventListeners();
    this._setupARIA();
  }

  private _setupEventListeners() {
    const triggerElement = this.firstElementChild as HTMLElement;
    if (!triggerElement) return;

    if (this.trigger.includes('hover')) {
      this.addEventListener('mouseenter', this._handleMouseEnter);
      this.addEventListener('mouseleave', this._handleMouseLeave);
    }
    if (this.trigger.includes('focus')) {
      triggerElement.addEventListener('focus', this._handleFocus);
      triggerElement.addEventListener('blur', this._handleBlur);
    }
    if (this.trigger.includes('click')) {
      triggerElement.addEventListener('click', this._handleClick);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanup?.();
    this._removeEventListeners();
    document.removeEventListener('keydown', this._handleDocumentKeyDown);
  }

  private _setupARIA() {
    const triggerElement = this.firstElementChild as HTMLElement;
    if (triggerElement) {
      triggerElement.setAttribute('aria-describedby', 'tooltip');
    }
  }

  private _removeEventListeners() {
    const triggerElement = this.firstElementChild as HTMLElement;
    if (triggerElement) {
      this.removeEventListener('mouseenter', this._handleMouseEnter);
      this.removeEventListener('mouseleave', this._handleMouseLeave);
      triggerElement.removeEventListener('focus', this._handleFocus);
      triggerElement.removeEventListener('blur', this._handleBlur);
      triggerElement.removeEventListener('click', this._handleClick);
    }
  }

  private _handleMouseEnter = () => {
    if (!this.disabled) {
      clearTimeout(this._hideTimeout);
      this.show();
    }
  };

  private _handleMouseLeave = () => {
    if (!this.disabled) {
      this._hideTimeout = window.setTimeout(() => {
        this.hide();
      }, 100);
    }
  };

  private _handleFocus = () => {
    if (!this.disabled) {
      this.show();
    }
  };

  private _handleBlur = () => {
    if (!this.disabled) {
      this.hide();
    }
  };

  private _handleClick = () => {
    if (!this.disabled) {
      if (this._open) {
        this.hide();
      } else {
        this.show();
      }
    }
  };

  private _handleDocumentKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this._open) {
      this.hide();
    }
  };

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    if (changedProperties.has('_open')) {
      if (this._open) {
        document.addEventListener('keydown', this._handleDocumentKeyDown);
        this.updateComplete.then(() => {
          this._startPositioning();
        });
        this.dispatchEvent(new CustomEvent('show'));
      } else {
        this._stopPositioning();
        document.removeEventListener('keydown', this._handleDocumentKeyDown);
        this.dispatchEvent(new CustomEvent('hide'));
      }
    }
  }

  private _startPositioning() {
    const tooltipElement = this.shadowRoot?.querySelector('#tooltip') as HTMLElement;
    const arrowElement = this.shadowRoot?.querySelector('#arrow') as HTMLElement;

    if (!tooltipElement || !arrowElement) return;

    const triggerElement = this.firstElementChild as HTMLElement;
    if (!triggerElement) return;

    this._updatePosition();

    this._cleanup = autoUpdate(triggerElement, tooltipElement, () => {
      this._updatePosition();
    });
  }

  private _stopPositioning() {
    this._cleanup?.();
    this._cleanup = undefined;
  }

  private async _updatePosition() {
    const tooltipElement = this.shadowRoot?.querySelector('#tooltip') as HTMLElement;
    const arrowElement = this.shadowRoot?.querySelector('#arrow') as HTMLElement;

    if (!tooltipElement || !arrowElement) return;

    const triggerElement = this.firstElementChild as HTMLElement;
    if (!triggerElement) return;

    const { x, y, placement, middlewareData } = await computePosition(
      triggerElement,
      tooltipElement,
      {
        placement: this.placement,
        middleware: [
          offset({ mainAxis: this.distance, crossAxis: this.skidding }),
          flip(),
          shift({ padding: 8 }),
          arrow({ element: arrowElement }),
        ],
      }
    );

    Object.assign(tooltipElement.style, {
      left: `${x}px`,
      top: `${y}px`,
    });

    const { x: arrowX, y: arrowY } = middlewareData.arrow ?? {};
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right'
    }[placement.split('-')[0]];

    Object.assign(arrowElement.style, {
      left: arrowX != null ? `${arrowX}px` : '',
      top: arrowY != null ? `${arrowY}px` : '',
      right: '',
      bottom: '',
      [staticSide as string]: '-4px',
    });
  }

  show = () => {
    if (this._open || this.disabled) return;
    this._open = true;
  }

  hide = () => {
    if (!this._open) return;
    this._open = false;
  }

  toggle = () => {
    this._open ? this.hide() : this.show();
  }

  render() {
    return html`
      <slot></slot>
      <div
        id="tooltip"
        part="base"
        role="tooltip"
        class="tooltip"
        ?data-show=${this._open}
        @mouseenter="${() => clearTimeout(this._hideTimeout)}"
        @mouseleave="${this.hide}"
      >
        <slot name="content">${this.content}</slot>
        <div id="arrow" part="arrow"></div>
      </div>
    `;
  }
}

customElements.define('ag-tooltip', Tooltip);