import { css } from 'lit';
import { property } from 'lit/decorators.js';
import { AgButton, type ButtonProps } from '../../Button/core/_Button.js';

// FxProps interface
export interface FxProps {
  fx?: string[];
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
          transform: scale(1.08, 0.92);
        }
        60% {
          transform: scale(0.95, 1.05);
        }
      }

      /* 4. Press-pop - quick press down/up */
      @keyframes ag-fx-press-pop {
        50% {
          transform: scale(0.92);
        }
      }

      /* 6. Slide-in - entrance from below */
      @keyframes ag-fx-slide-in {
        from {
          opacity: 0;
          transform: translateY(20%);
        }
      }

      /* Grow - button increases in size */
      @keyframes ag-fx-grow {
        100% {
          transform: scale(1.1);
        }
      }

      /* Shrink - button decreases in size */
      @keyframes ag-fx-shrink {
        100% {
          transform: scale(0.9);
        }
      }

      /* Push - simulates physical press */
      @keyframes ag-fx-push {
        50% {
          transform: translateY(4px);
        }
      }

      /* Shake/Jitter effect */
      @keyframes ag-fx-shake {
        0%, 100% {
          transform: translateX(0);
        }
        25% {
          transform: translateX(-4px);
        }
        75% {
          transform: translateX(4px);
        }
      }

      /* Wobble effect */
      @keyframes ag-fx-wobble {
        0%, 100% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(-3deg);
        }
        75% {
          transform: rotate(3deg);
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
      button.ag-fx-shake:hover {
        animation: ag-fx-shake var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Wobble */
      button.ag-fx-wobble:hover {
        animation: ag-fx-wobble var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
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
  @property({ type: Array })
  fx?: string[];

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
