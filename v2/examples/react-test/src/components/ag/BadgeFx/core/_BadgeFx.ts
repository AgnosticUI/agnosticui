import { css, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { AgBadge, type BadgeProps } from '../../Badge/core/_Badge';
import { motionStyles } from '../../styles/motion.styles';
import type { FxProps } from '../../types/fx';

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
  static override styles: CSSResultGroup = [
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
        rgba(0, 0, 0, 0) 0%,      /* transparent left edge */
        rgba(0, 0, 0, 0.9) 40%,     /* fade in complete at 40% */
        rgba(0, 0, 0, 0.9) 60%,     /* fade out starts at 60% */
        rgba(0, 0, 0, 0) 100%     /* transparent right edge */
        );
        mask-image: linear-gradient(
          to right,
        rgba(0, 0, 0, 0) 0%,      /* transparent left edge */
        rgba(0, 0, 0, 1) 40%,     /* fade in complete at 40% */
        rgba(0, 0, 0, 1) 60%,     /* fade out starts at 60% */
        rgba(0, 0, 0, 0) 100%     /* transparent right edge */
        );
        /* 40-60% above creates a 20% wide "visible window" with soft 40% fade zones on each side. */
        -webkit-mask-size: 250% 100%;
        mask-size: 250% 100%;
        -webkit-mask-position: 215% 0;
        mask-position: 215% 0;
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
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent 0%,
          transparent 30%,
          var(--ag-fx-sweep-color, rgba(255, 255, 255, 0.5)) 50%,
          transparent 70%,
          transparent 100%
        );
        transform: translateX(-100%);
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

  private _observer: MutationObserver | null = null;

  constructor() {
    super();
    this.fxSpeed = 'md';
    this.fxEase = 'ease';
    this.fxDisabled = false;
  }

  override connectedCallback() {
    super.connectedCallback();
    this._updateTheme();

    this._observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          this._updateTheme();
        }
      });
    });

    this._observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
  }

  private _updateTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const targetEl = this.shadowRoot?.querySelector('.badge');
    if (targetEl instanceof HTMLElement) {

      // We have to do some custom property adjustments based on theme and variant for certain effects
      targetEl.style.setProperty('--ag-fx-shadow-opacity', isDark ? '0.8' : '0.4');

      // For monochrome variant in dark mode, we need a dark sweep because the background is white
      if (isDark && this.variant === 'monochrome') {
        targetEl.style.setProperty('--ag-fx-sweep-color', 'rgba(0, 0, 0, 0.6)');
      } else {
        targetEl.style.setProperty('--ag-fx-sweep-color', 'rgba(255, 255, 255, 0.5)');
      }
    }
  }

  override firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
    super.firstUpdated(changedProperties);
    this._applyFxClasses();
    this._applyFxCustomProperties();
    this._updateTheme();
  }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    super.updated(changedProperties);

    if (changedProperties.has('fx') || changedProperties.has('fxDisabled')) {
      this._applyFxClasses();
    }

    if (changedProperties.has('variant')) {
      this._updateTheme();
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
