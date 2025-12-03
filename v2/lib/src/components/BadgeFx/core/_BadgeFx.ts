import { css } from 'lit';
import { property } from 'lit/decorators.js';
import { AgBadge, type BadgeProps } from '../../Badge/core/_Badge.js';
import { motionStyles } from '../../../styles/motion.styles.js';
import type { FxProps } from '../../../types/fx.js';

// Combined props interface
export interface BadgeFxProps extends BadgeProps, FxProps { }

/**
 * BadgeFx - Badge with CSS animation effects
 *
 * Extends AgBadge to add optional CSS-only animation effects.
 * Inherits all Badge functionality and styling.
 *
 * Features:
 * - CSS-only FX effects
 * - Full control over hover states
 * - Automatic reduced-motion support
 * - Can override Badge's default hover behaviors
 */
export class BadgeFx extends AgBadge implements BadgeFxProps {
  static override styles: any = [
    motionStyles,
    AgBadge.styles,
    css`
      /* ========================================
         OVERRIDE PARENT HOVER STATES
         Neutralize competing hover effects from core
         ======================================== */

      /* Badge has a brightness filter on hover when interactive */
      :host([interactive]) .badge:hover {
        filter: none;
      }

      /* ========================================
         FX EFFECT SETUP
         Add necessary CSS properties for effects that need them
         ======================================== */

      /* Shimmer needs a gradient mask */
      .badge.ag-fx-shimmer {
        overflow: hidden;
        -webkit-mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 100%
        );
        mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 100%
        );
        -webkit-mask-size: 200% 100%;
        mask-size: 200% 100%;
        -webkit-mask-position: 200% 0;
        mask-position: 200% 0;
      }

      /* Ripple needs overflow visible to show expanding ring */
      .badge.ag-fx-ripple {
        overflow: visible;
      }

      /* Highlight Sweep needs a gradient background overlay */
      .badge.ag-fx-highlight-sweep {
        position: relative;
        overflow: hidden;
      }

      .badge.ag-fx-highlight-sweep::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 100%;
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(255, 255, 255, 0.3) 50%,
          transparent 100%
        );
        background-size: 200% 100%;
        background-position: 100% 0;
        pointer-events: none;
      }

      /* ========================================
         FX EFFECT CLASSES
         Applied to target element (.badge)
         ======================================== */

      /* 
        Prevent hover flicker: 
        - Use @host for hover detection (doesn't move with animation)
        - Or add animation-play-state to prevent retriggering
      */
      :host([fx="bounce"]) .badge,
      :host([fx="flip"]) .badge,
      :host([fx="jelly"]) .badge {
        /* Animation only plays once per hover */
        animation-iteration-count: 1;
      }

      /* Hover-triggered effects - now triggered by :host instead of .badge */
      :host([fx="bounce"]:hover) .badge {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="pulse"]:hover) .badge {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="jelly"]:hover) .badge {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="shimmer"]:hover) .badge {
        animation: ag-fx-shimmer var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="glow"]:hover) .badge {
        animation: ag-fx-glow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="flip"]:hover) .badge {
        animation: ag-fx-flip var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="ripple"]:hover) .badge {
        animation: ag-fx-ripple var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="highlight-sweep"]:hover) .badge::before {
        animation: ag-fx-highlight-sweep var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press effects - require interactive or explicit cursor */
      .badge.ag-fx-press-pop {
        cursor: pointer;
      }

      .badge.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effects */
      .badge.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Disabled state */
      .badge.ag-fx-disabled {
        animation: none !important;
      }

      .badge.ag-fx-disabled::before {
        animation: none !important;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .badge.ag-fx-bounce,
        .badge.ag-fx-pulse,
        .badge.ag-fx-jelly,
        .badge.ag-fx-shimmer,
        .badge.ag-fx-glow,
        .badge.ag-fx-flip,
        .badge.ag-fx-ripple,
        .badge.ag-fx-highlight-sweep,
        .badge.ag-fx-press-pop,
        .badge.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `
  ];

  // FX props
  @property({ type: String, reflect: true })
  fx?: string;

  @property({ type: String, attribute: 'fx-speed', reflect: true })
  fxSpeed!: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  @property({ type: String, attribute: 'fx-ease', reflect: true })
  fxEase!: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';

  @property({ type: Boolean, attribute: 'fx-disabled', reflect: true })
  fxDisabled!: boolean;

  constructor() {
    super();
    this.fxSpeed = 'md';
    this.fxEase = 'ease';
    this.fxDisabled = false;
  }

  override firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
    super.firstUpdated(changedProperties);
    this._applyFxClasses();
    this._applyFxCustomProperties();
  }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    super.updated(changedProperties);

    if (changedProperties.has('fx') || changedProperties.has('fxDisabled')) {
      this._applyFxClasses();
    }

    if (changedProperties.has('fxSpeed') || changedProperties.has('fxEase')) {
      this._applyFxCustomProperties();
    }
  }

  private _applyFxClasses() {
    const targetEl = this.shadowRoot?.querySelector('.badge');
    if (targetEl) {
      // Remove existing fx classes
      const classesToRemove: string[] = [];
      targetEl.classList.forEach((className: string) => {
        if (className.startsWith('ag-fx-')) {
          classesToRemove.push(className);
        }
      });
      classesToRemove.forEach(className => targetEl.classList.remove(className));

      // Add new fx class
      if (this.fx && !this.fxDisabled) {
        targetEl.classList.add(`ag-fx-${this.fx}`);
      }

      // Add disabled class if needed
      if (this.fxDisabled) {
        targetEl.classList.add('ag-fx-disabled');
      } else {
        targetEl.classList.remove('ag-fx-disabled');
      }
    }
  }

  private _applyFxCustomProperties() {
    const targetEl = this.shadowRoot?.querySelector('.badge');
    if (targetEl instanceof HTMLElement) {
      targetEl.style.setProperty('--ag-fx-duration', `var(--ag-fx-duration-${this.fxSpeed})`);
      targetEl.style.setProperty('--ag-fx-ease', `var(--ag-fx-ease-${this.fxEase})`);
    }
  }
}
