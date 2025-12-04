import { css } from 'lit';
import { property } from 'lit/decorators.js';
import { AgButton, type ButtonProps } from '../../Button/core/_Button.js';
import { motionStyles } from '../../../styles/motion.styles.js';
import type { FxProps } from '../../../types/fx.js';

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
    motionStyles,
    AgButton.styles,
    css`
      /* ========================================
         OVERRIDE PARENT HOVER BACKGROUNDS
         These compete with FX effects like highlight-sweep, slide-in, etc.
         We need to keep these using :host() for variant attribute selectors
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
        background: var(--ag-danger);
      }

      :host([variant="monochrome"]) button:hover {
        background: var(--ag-background-secondary-inverted);
      }

      /* ========================================
         FX EFFECT CLASSES
         Classes are applied directly to button element
         Note: Keyframes are imported from motionStyles
         ======================================== */

      /*
        Prevent hover flicker:
        - Use @host for hover detection (doesn't move with animation)
        - Add animation-play-state to prevent retriggering
      */
      :host([fx="bounce"]) button,
      :host([fx="jelly"]) button,
      :host([fx="pulse"]) button,
      :host([fx="grow"]) button,
      :host([fx="shrink"]) button,
      :host([fx="push"]) button,
      :host([fx="shake"]) button,
      :host([fx="wobble"]) button,
      :host([fx="pulse-wobble"]) button {
        /* Animation only plays once per hover */
        animation-iteration-count: 1;
      }

      /* Hover-triggered effects - now triggered by :host instead of button */
      :host([fx="bounce"]:hover) button {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="pulse"]:hover) button {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="jelly"]:hover) button {
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
         EXPERIMENTAL EFFECT CLASSES
         ======================================== */

      /* Grow */
      :host([fx="grow"]:hover) button {
        animation: ag-fx-grow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease) forwards;
      }

      /* Shrink */
      :host([fx="shrink"]:hover) button {
        animation: ag-fx-shrink var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease) forwards;
      }

      /* Push */
      :host([fx="push"]:hover) button {
        animation: ag-fx-push var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Background slide */
      button.ag-fx-bg-slide {
        position: relative;
        overflow: hidden;
      }

      /* Background (bottom to top) and Side (left to right) slides share */
      button.ag-fx-side-slide::before,
      button.ag-fx-bg-slide::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.25);
        /* Use ease-out for slides to prevent spring overshoot which causes visual glitches */
        transition: transform var(--ag-fx-duration, 200ms) ease-out;
      }

      button.ag-fx-bg-slide::before {
        transform: translateY(100%);
      }

      button.ag-fx-bg-slide:hover::before {
        transform: translateY(0);
      }

      /* Side slide */
      button.ag-fx-side-slide {
        position: relative;
        overflow: hidden;
      }

      button.ag-fx-side-slide::before {
        transform: translateX(-100%);
      }

      button.ag-fx-side-slide:hover::before {
        transform: translateX(0);
      }

      /* Press shadow - animates shadow on active/press with variant colors */
      :host([variant="primary"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(5, 80, 174, 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="primary"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(5, 80, 174, 0.5);
      }

      :host([variant="success"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(var(--ag-success-rgb), 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="success"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(var(--ag-success-rgb), 0.5);
      }

      :host([variant="warning"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(var(--ag-warning-rgb), 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="warning"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(var(--ag-warning-rgb), 0.5);
      }

      :host([variant="danger"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(var(--ag-danger-rgb), 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="danger"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(var(--ag-danger-rgb), 0.5);
      }

      /* Fallback for other variants without RGB tokens */
      :host([variant="secondary"]) button.ag-fx-press-shadow,
      :host([variant="monochrome"]) button.ag-fx-press-shadow,
      :host(:not([variant])) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="secondary"]) button.ag-fx-press-shadow:active,
      :host([variant="monochrome"]) button.ag-fx-press-shadow:active,
      :host(:not([variant])) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(0, 0, 0, 0.2);
      }

      /* Shake */
      :host([fx="shake"]:hover) button {
        animation: ag-fx-shake var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Wobble */
      :host([fx="wobble"]:hover) button {
        animation: ag-fx-wobble var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Pulse + Wobble 200ms pulse (1.08 scale) + 200ms wobble */
      :host([fx="pulse-wobble"]:hover) button {
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
        button.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `
  ];

  // FX props
  @property({ type: String, reflect: true })
  declare fx?: string;

  @property({ type: String, attribute: 'fx-speed' })
  declare fxSpeed: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  @property({ type: String, attribute: 'fx-ease' })
  declare fxEase: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';

  @property({ type: Boolean, reflect: true, attribute: 'fx-disabled' })
  declare fxDisabled: boolean;

  constructor() {
    super();
    // Initialize reactive properties in constructor to avoid class field shadowing
    this.fxSpeed = 'md';
    this.fxEase = 'ease';
    this.fxDisabled = false;
  }

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
