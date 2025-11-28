import { css } from 'lit';
import { property } from 'lit/decorators.js';
import { AgIconButton, type IconButtonProps } from '../../IconButton/core/_IconButton.js';
import type {
  IconButtonClickEvent,
  IconButtonActivateEvent,
} from '../../IconButton/core/_IconButton.js';
import { motionStyles } from '../../../styles/motion.styles.js';
import type { FxProps } from '../../../types/fx.js';

// Re-export event types for convenience
export type { IconButtonClickEvent, IconButtonActivateEvent };

// Combined props for IconButtonFx
export interface IconButtonFxProps extends IconButtonProps, FxProps {}

/**
 * IconButtonFx - IconButton with CSS animation effects
 *
 * Extends AgIconButton to add optional CSS-only animation effects.
 * Inherits all IconButton functionality and styling.
 *
 * Features:
 * - CSS-only FX effects (reuses motionStyles keyframes)
 * - Full control over button hover states
 * - Automatic reduced-motion support
 * - Can override IconButton's default hover behaviors
 */
// @ts-ignore - TS2417: Lit supports arrays for static styles even when parent has single CSSResult
export class IconButtonFx extends AgIconButton implements FxProps {
  static styles = [
    AgIconButton.styles,
    motionStyles,
    css`
      /* ========================================
         OVERRIDE PARENT HOVER BACKGROUNDS
         These compete with FX effects
         ======================================== */

      :host([variant="primary"]) button:hover {
        background: var(--ag-primary-dark);
      }

      :host([variant="secondary"]) button:hover {
        background: var(--ag-neutral-500);
      }

      :host([variant="success"]) button:hover {
        background: var(--ag-success-dark);
      }

      :host([variant="warning"]) button:hover {
        background: var(--ag-warning-dark);
      }

      :host([variant="danger"]) button:hover {
        background: var(--ag-danger-dark);
      }

      :host([variant="monochrome"]) button:hover {
        background: var(--ag-background-secondary-inverted);
      }

      /* ========================================
         FX EFFECT CLASSES
         Classes are applied directly to button element
         Note: Keyframes are imported from motionStyles
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

      /* Active/press-triggered effects */
      button.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effect - plays once on mount */
      button.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* ========================================
         ADDITIONAL EFFECT CLASSES
         ======================================== */

      /* Grow */
      button.ag-fx-grow:hover {
        animation: ag-fx-grow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease) forwards;
      }

      /* Shrink */
      button.ag-fx-shrink:hover {
        animation: ag-fx-shrink var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease) forwards;
      }

      /* Push */
      button.ag-fx-push:hover {
        animation: ag-fx-push var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Shake */
      button.ag-fx-shake:hover {
        animation: ag-fx-shake var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Wobble */
      button.ag-fx-wobble:hover {
        animation: ag-fx-wobble var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Pulse-Wobble Sequential */
      button.ag-fx-pulse-wobble:hover {
        animation:
          ag-fx-grow 200ms var(--ag-fx-ease-spring-lg) 0ms,
          ag-fx-wobble 200ms var(--ag-fx-ease-spring-md) 200ms;
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
        button.ag-fx-press-pop,
        button.ag-fx-slide-in,
        button.ag-fx-grow,
        button.ag-fx-shrink,
        button.ag-fx-push,
        button.ag-fx-shake,
        button.ag-fx-wobble,
        button.ag-fx-pulse-wobble {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `
  ];

  // FX props
  @property({ type: String })
  fx?: string;

  @property({ type: String, attribute: 'fx-speed' })
  fxSpeed!: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  @property({ type: String, attribute: 'fx-ease' })
  fxEase!: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';

  @property({ type: Boolean, attribute: 'fx-disabled' })
  fxDisabled!: boolean;

  constructor() {
    super();
    // Initialize reactive properties in constructor to avoid class field shadowing
    this.fxSpeed = 'md';
    this.fxEase = 'ease';
    this.fxDisabled = false;
  }

  override firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
    super.firstUpdated?.(changedProperties);
    // Apply initial FX setup after first render
    this._applyFxClasses();
    this._applyFxCustomProperties();
  }

  override updated(changedProperties: Map<PropertyKey, unknown>) {
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

      // Add new fx class to button
      if (this.fx) {
        buttonEl.classList.add(`ag-fx-${this.fx}`);
      }

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
