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

    .ag-fx-wrapper {
      position: relative;
      display: inline-block;
    }

    .ag-fx-disabled {
      animation: none !important;
      transition: none !important;
    }

    /* ========================================
       FX KEYFRAME ANIMATIONS
       ======================================== */

    /* 1. Bounce - vertical pop effect */
    @keyframes ag-fx-bounce {
      50% {
        transform: translateY(-4%);
      }
    }

    /* 2. Pulse - scale grow/shrink */
    @keyframes ag-fx-pulse {
      50% {
        transform: scale(1.06);
      }
    }

    /* 3. Jelly - squash/stretch */
    @keyframes ag-fx-jelly {
      30% {
        transform: scale(1.15, 0.85);
      }
      60% {
        transform: scale(0.9, 1.1);
      }
    }

    /* 4. Tilt-press - 3D tilt on press */
    @keyframes ag-fx-tilt-press {
      0% {
        transform: perspective(300px) rotateX(0deg);
      }
      50% {
        transform: perspective(300px) rotateX(12deg) translateY(2px);
      }
      100% {
        transform: perspective(300px) rotateX(0deg);
      }
    }


    /* 6. Glow - box-shadow pulse */
    @keyframes ag-fx-glow {
      50% {
        box-shadow: 0 0 12px currentColor;
      }
    }

    /* 7. Press-pop - quick press down/up */
    @keyframes ag-fx-press-pop {
      50% {
        transform: scale(0.92);
      }
    }

    /* 8. Slide-in - entrance from below */
    @keyframes ag-fx-slide-in {
      from {
        opacity: 0;
        transform: translateY(20%);
      }
    }


    /* 10. Icon-reveal - clip-path reveal */
    @keyframes ag-fx-icon-reveal {
      from {
        clip-path: inset(0 100% 0 0);
      }
    }


    /* 12. Highlight-sweep - horizontal highlight */
    @keyframes ag-fx-highlight-sweep {
      from {
        left: -100%;
      }
      to {
        left: 100%;
      }
    }

    /* ========================================
       FX EFFECT CLASSES
       ======================================== */

    /* Hover-triggered effects - animate the :host wrapper itself */
    :host(.ag-fx-bounce:hover) {
      animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
    }

    :host(.ag-fx-pulse:hover) {
      animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
    }

    :host(.ag-fx-jelly:hover) {
      animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
    }

    :host(.ag-fx-glow:hover) {
      animation: ag-fx-glow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
    }



    /* Icon reveal - clip-path on wrapper */
    :host(.ag-fx-icon-reveal:hover) .ag-fx-wrapper {
      animation: ag-fx-icon-reveal var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
    }


    /* Highlight sweep - needs pseudo-element on wrapper - wider, more pronounced */
    :host(.ag-fx-highlight-sweep) .ag-fx-wrapper {
      overflow: hidden;
    }

    :host(.ag-fx-highlight-sweep) .ag-fx-wrapper::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.95) 50%,
        transparent 100%
      );
      pointer-events: none;
      mix-blend-mode: screen;
    }

    :host(.ag-fx-highlight-sweep:hover) .ag-fx-wrapper::after {
      animation: ag-fx-highlight-sweep var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease) forwards;
    }

    /* Active/press-triggered effects */
    :host(.ag-fx-tilt-press:active) {
      animation: ag-fx-tilt-press var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
    }

    :host(.ag-fx-press-pop:active) {
      animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
    }

    /* Entrance effect - plays once on mount */
    :host(.ag-fx-slide-in) {
      animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
    }

    /* Automatic reduced-motion support - cannot be overridden */
    @media (prefers-reduced-motion: reduce) {
      :host(.ag-fx-disabled),
      :host(.ag-fx-bounce),
      :host(.ag-fx-pulse),
      :host(.ag-fx-jelly),
      :host(.ag-fx-tilt-press),
      :host(.ag-fx-glow),
      :host(.ag-fx-press-pop),
      :host(.ag-fx-slide-in),
      :host(.ag-fx-icon-reveal),
      :host(.ag-fx-highlight-sweep) {
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
  declare fxDisabled: boolean;

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
  declare ariaLabel: string;

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
    this.fxDisabled = false;
    this.type = 'button';
    this.ariaLabel = '';
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    // Apply FX classes to :host element
    if (changedProperties.has('fx') || changedProperties.has('fxDisabled')) {
      // Remove all existing fx classes
      this.classList.forEach(className => {
        if (className.startsWith('ag-fx-')) {
          this.classList.remove(className);
        }
      });

      // Add new fx classes
      const fxArray = Array.isArray(this.fx) ? this.fx : this.fx ? [this.fx] : [];
      fxArray.forEach(effect => {
        this.classList.add(`ag-fx-${effect}`);
      });

      if (this.fxDisabled) {
        this.classList.add('ag-fx-disabled');
      }
    }
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
    return html`
      <div class="ag-fx-wrapper">
        <ag-button
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
          @click="${this._handleClick}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @toggle="${this._handleToggle}"
        >
          <slot></slot>
        </ag-button>
      </div>
    `;
  }
}
