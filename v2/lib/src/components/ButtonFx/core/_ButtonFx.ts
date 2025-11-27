import { css } from 'lit';
import { property } from 'lit/decorators.js';
import { AgButton, type ButtonProps } from '../../Button/core/_Button.js';

// FxProps interface
export interface FxProps {
  fx?: string | string[];
  fxSpeed?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fxEase?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';
  fxDisabled?: boolean;
}

// Combined props for ButtonFx
export interface ButtonFxProps extends ButtonProps, FxProps {}

/**
 * ButtonFx - Button with CSS animation effects
 *
 * Extends AgButton to add optional CSS-only animation effects.
 * Inherits all Button functionality and styling.
 *
 * Features:
 * - 9 CSS-only FX effects
 * - Full control over button hover states
 * - Automatic reduced-motion support
 * - Can override Button's default hover behaviors
 */
export class ButtonFx extends AgButton implements FxProps {
  static styles = [
    AgButton.styles,
    css`
      /* ========================================
         OVERRIDE PARENT HOVER BACKGROUNDS
         These compete with FX effects like highlight-sweep, slide-in, etc.
         We need to keep these using :host() for variant attribute selectors
         ======================================== */

      :host([variant="primary"]) button:hover {
        background: var(--ag-primary);
      }

      :host([variant="secondary"]) button:hover {
        background: var(--ag-neutral-400);
      }

      :host([variant="success"]) button:hover {
        background: var(--ag-success);
      }

      :host([variant="warning"]) button:hover {
        background: var(--ag-warning);
      }

      :host([variant="danger"]) button:hover {
        background: var(--ag-danger);
      }

      :host([variant="monochrome"]) button:hover {
        background: var(--ag-background-inverted);
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

      /* 5. Glow - box-shadow pulse */
      @keyframes ag-fx-glow {
        0%, 100% {
          box-shadow: 0 0 0 0 transparent;
        }
        50% {
          box-shadow: 0 0 20px 4px currentColor;
        }
      }

      /* 6. Press-pop - quick press down/up */
      @keyframes ag-fx-press-pop {
        50% {
          transform: scale(0.92);
        }
      }

      /* 7. Slide-in - entrance from below */
      @keyframes ag-fx-slide-in {
        from {
          opacity: 0;
          transform: translateY(20%);
        }
      }

      /* 8. Icon-reveal - clip-path reveal */
      @keyframes ag-fx-icon-reveal {
        from {
          clip-path: inset(0 100% 0 0);
        }
      }

      /* 9. Highlight-sweep - horizontal highlight */
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
         Classes are applied directly to button element
         ======================================== */

      /* Hover-triggered effects */
      button.ag-fx-bounce:hover {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      button.ag-fx-pulse:hover {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      button.ag-fx-jelly:hover {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      button.ag-fx-glow:hover {
        animation: ag-fx-glow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Icon reveal - clip-path on button */
      button.ag-fx-icon-reveal:hover {
        animation: ag-fx-icon-reveal var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press-triggered effects */
      button.ag-fx-tilt-press:active {
        animation: ag-fx-tilt-press var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      button.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effect - plays once on mount */
      button.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Highlight sweep - pseudo-element on button */
      button.ag-fx-highlight-sweep {
        position: relative;
        overflow: hidden;
      }

      button.ag-fx-highlight-sweep::after {
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

      button.ag-fx-highlight-sweep:hover::after {
        animation: ag-fx-highlight-sweep var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease) forwards;
      }

      /* Disabled FX */
      button.ag-fx-disabled {
        animation: none !important;
      }

      button.ag-fx-disabled::after {
        animation: none !important;
      }

      /* Automatic reduced-motion support */
      @media (prefers-reduced-motion: reduce) {
        button.ag-fx-bounce,
        button.ag-fx-pulse,
        button.ag-fx-jelly,
        button.ag-fx-tilt-press,
        button.ag-fx-glow,
        button.ag-fx-press-pop,
        button.ag-fx-slide-in,
        button.ag-fx-icon-reveal,
        button.ag-fx-highlight-sweep {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }

        button.ag-fx-highlight-sweep::after {
          animation-duration: 0.01ms !important;
        }
      }
    `
  ];

  // FX props
  @property({ type: Array })
  fx?: string[];

  @property({ type: String, attribute: 'fx-speed' })
  fxSpeed: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @property({ type: String, attribute: 'fx-ease' })
  fxEase: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg' = 'ease';

  @property({ type: Boolean, attribute: 'fx-disabled' })
  fxDisabled = false;

  firstUpdated() {
    // Apply initial FX setup after first render
    this._applyFxClasses();
    this._applyFxCustomProperties();
  }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    super.updated(changedProperties);

    // Apply FX classes to the button element when props change
    if (changedProperties.has('fx') || changedProperties.has('fxDisabled')) {
      this._applyFxClasses();
    }

    // Set CSS custom properties for duration and easing
    if (changedProperties.has('fxSpeed') || changedProperties.has('fxEase')) {
      this._applyFxCustomProperties();
    }
  }

  private _applyFxClasses() {
    const buttonEl = this.shadowRoot?.querySelector('button');
    if (buttonEl) {
      // Remove all existing fx classes from button
      buttonEl.classList.forEach((className: string) => {
        if (className.startsWith('ag-fx-')) {
          buttonEl.classList.remove(className);
        }
      });

      // Add new fx classes to button
      const fxArray = Array.isArray(this.fx) ? this.fx : this.fx ? [this.fx] : [];
      fxArray.forEach(effect => {
        buttonEl.classList.add(`ag-fx-${effect}`);
      });

      if (this.fxDisabled) {
        buttonEl.classList.add('ag-fx-disabled');
      }
    }
  }

  private _applyFxCustomProperties() {
    const buttonEl = this.shadowRoot?.querySelector('button');
    if (buttonEl instanceof HTMLElement) {
      buttonEl.style.setProperty('--ag-fx-duration', `var(--ag-fx-duration-${this.fxSpeed})`);
      buttonEl.style.setProperty('--ag-fx-ease', `var(--ag-fx-ease-${this.fxEase})`);
    }
  }
}
