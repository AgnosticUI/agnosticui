import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import type { ButtonProps, ButtonToggleEvent } from '../../Button/core/_Button.js';

// FxProps interface as per PRD Section 2
export interface FxProps {
  fx?: string | string[];
  fxSpeed?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fxEase?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';
  fxDisabled?: boolean;
}

// Combined props interface
export type ButtonFxProps = ButtonProps & FxProps;

/**
 * ButtonFx - FX wrapper for AgButton component
 *
 * Wraps the existing ag-button component with CSS-only animation effects.
 * All ButtonProps are forwarded to the wrapped ag-button.
 *
 * Features:
 * - 12 CSS-only FX effects (Phase 1)
 * - Shadow DOM compatible
 * - Automatic reduced-motion support (cannot be overridden)
 * - Props forwarding to ag-button
 * - Event re-dispatching for composability
 */
export class ButtonFx extends LitElement implements ButtonFxProps {
  static styles = css`
    :host {
      display: inline-block;
    }

    .ag-fx-disabled {
      animation: none !important;
      transition: none !important;
    }

    /* Automatic reduced-motion support - cannot be overridden */
    @media (prefers-reduced-motion: reduce) {
      .ag-fx-disabled,
      .ag-fx-bounce,
      .ag-fx-pulse,
      .ag-fx-jelly,
      .ag-fx-tilt-press,
      .ag-fx-shimmer,
      .ag-fx-glow,
      .ag-fx-press-pop,
      .ag-fx-slide-in,
      .ag-fx-flip,
      .ag-fx-icon-reveal,
      .ag-fx-ripple,
      .ag-fx-highlight-sweep {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;

  // FX props
  @property({ type: Array })
  fx?: string[];

  @property({ type: String, attribute: 'fx-speed' })
  declare fxSpeed: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  @property({ type: String, attribute: 'fx-ease' })
  declare fxEase: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';

  @property({ type: Boolean, attribute: 'fx-disabled' })
  fxDisabled = false;

  // ButtonProps - all forwarded to ag-button
  @property({ type: String, reflect: true })
  variant?: ButtonProps['variant'];

  @property({ type: String, reflect: true })
  size?: ButtonProps['size'];

  @property({ type: String, reflect: true })
  shape?: ButtonProps['shape'];

  @property({ type: Boolean, reflect: true })
  bordered?: ButtonProps['bordered'];

  @property({ type: Boolean, reflect: true })
  ghost?: ButtonProps['ghost'];

  @property({ type: Boolean, reflect: true })
  link?: ButtonProps['link'];

  @property({ type: Boolean, reflect: true })
  grouped?: ButtonProps['grouped'];

  @property({ type: String })
  declare type: ButtonProps['type'];

  @property({ type: Boolean, reflect: true })
  disabled?: ButtonProps['disabled'];

  @property({ type: Boolean, reflect: true })
  loading?: ButtonProps['loading'];

  @property({ type: Boolean, reflect: true })
  toggle?: ButtonProps['toggle'];

  @property({ type: Boolean, reflect: true })
  pressed?: ButtonProps['pressed'];

  @property({ type: String, attribute: 'aria-label' })
  ariaLabel?: ButtonProps['ariaLabel'];

  @property({ type: String, attribute: 'aria-describedby' })
  ariaDescribedby?: ButtonProps['ariaDescribedby'];

  // Event callback props
  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare onFocus?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onBlur?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onToggle?: (event: ButtonToggleEvent) => void;

  constructor() {
    super();
    this.fxSpeed = 'md';
    this.fxEase = 'ease';
    this.type = 'button';
  }

  // Event handlers with dual-dispatch pattern
  private _handleClick(event: MouseEvent) {
    // Native click already bubbles - just invoke callback
    if (this.onClick) {
      this.onClick(event);
    }
  }

  private _handleFocus(event: FocusEvent) {
    // Re-dispatch from host for consumer access
    this.dispatchEvent(new FocusEvent('focus', {
      bubbles: true,
      composed: true,
    }));

    if (this.onFocus) {
      this.onFocus(event);
    }
  }

  private _handleBlur(event: FocusEvent) {
    // Re-dispatch from host for consumer access
    this.dispatchEvent(new FocusEvent('blur', {
      bubbles: true,
      composed: true,
    }));

    if (this.onBlur) {
      this.onBlur(event);
    }
  }

  private _handleToggle(event: Event) {
    const toggleEvent = event as ButtonToggleEvent;

    // Re-dispatch from host
    this.dispatchEvent(new CustomEvent('toggle', {
      detail: toggleEvent.detail,
      bubbles: true,
      composed: true,
    }));

    if (this.onToggle) {
      this.onToggle(toggleEvent);
    }
  }

  render() {
    // Generate FX classes
    const fxClasses = (
      Array.isArray(this.fx) ? this.fx : this.fx ? [this.fx] : []
    )
      .map((e) => `ag-fx-${e}`)
      .concat(this.fxDisabled ? ['ag-fx-disabled'] : [])
      .join(' ');

    return html`
      <ag-button
        class="${fxClasses}"
        style="
          --ag-fx-duration: var(--ag-fx-duration-${this.fxSpeed});
          --ag-fx-ease: var(--ag-fx-ease-${this.fxEase});
        "
        variant="${this.variant || ''}"
        size="${this.size || ''}"
        shape="${this.shape || ''}"
        ?bordered="${this.bordered}"
        ?ghost="${this.ghost}"
        ?link="${this.link}"
        ?grouped="${this.grouped}"
        type="${this.type}"
        ?disabled="${this.disabled}"
        ?loading="${this.loading}"
        ?toggle="${this.toggle}"
        ?pressed="${this.pressed}"
        aria-label="${this.ariaLabel || ''}"
        aria-describedby="${this.ariaDescribedby || ''}"
        @click="${this._handleClick}"
        @focus="${this._handleFocus}"
        @blur="${this._handleBlur}"
        @toggle="${this._handleToggle}"
      >
        <slot></slot>
      </ag-button>
    `;
  }
}
