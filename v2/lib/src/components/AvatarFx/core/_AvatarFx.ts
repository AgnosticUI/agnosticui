import { css, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { Avatar, type AvatarProps } from '../../Avatar/core/_Avatar.js';
import { motionStyles } from '../../../styles/motion.styles.js';
import type { FxProps } from '../../../types/fx.js';

// Combined props interface
export interface AvatarFxProps extends AvatarProps, FxProps { }

/**
 * AvatarFx - Avatar with CSS animation effects
 *
 * Extends Avatar to add optional CSS-only animation effects.
 * Inherits all Avatar functionality and styling.
 *
 * Features:
 * - CSS-only FX effects
 * - Automatic reduced-motion support
 */
export class AvatarFx extends Avatar implements AvatarFxProps {
  static override styles: CSSResultGroup = [
    motionStyles,
    Avatar.styles,
    css`
      /* ========================================
         FX EFFECT SETUP
         Add necessary CSS properties for effects that need them
         ======================================== */

      /* Shimmer needs a gradient mask */
      .avatar.ag-fx-shimmer {
        overflow: hidden;
        -webkit-mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.9) 40%,
          rgba(0, 0, 0, 0.9) 60%,
          rgba(0, 0, 0, 0) 100%
        );
        mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 40%,
          rgba(0, 0, 0, 1) 60%,
          rgba(0, 0, 0, 0) 100%
        );
        -webkit-mask-size: 250% 100%;
        mask-size: 250% 100%;
        -webkit-mask-position: 215% 0;
        mask-position: 215% 0;
      }

      /* Ripple needs overflow visible to show expanding ring */
      .avatar.ag-fx-ripple {
        overflow: visible;
      }

      /* Highlight Sweep needs a gradient background overlay */
      .avatar.ag-fx-highlight-sweep {
        position: relative;
        overflow: hidden;
      }

      .avatar.ag-fx-highlight-sweep::before {
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
         Applied to target element (.avatar)
         ======================================== */

      :host([fx="bounce"]) .avatar,
      :host([fx="flip"]) .avatar,
      :host([fx="jelly"]) .avatar {
        animation-iteration-count: 1;
      }

      /* Hover-triggered effects */
      :host([fx="bounce"]:hover) .avatar {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="pulse"]:hover) .avatar {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="jelly"]:hover) .avatar {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="shimmer"]:hover) .avatar {
        animation: ag-fx-shimmer var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="glow"]:hover) .avatar {
        animation: ag-fx-glow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="flip"]:hover) .avatar {
        animation: ag-fx-flip var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="ripple"]:hover) .avatar {
        animation: ag-fx-ripple var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="highlight-sweep"]:hover) .avatar::before {
        animation: ag-fx-highlight-sweep var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press effects */
      .avatar.ag-fx-press-pop {
        cursor: pointer;
      }

      .avatar.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effects */
      .avatar.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Disabled state */
      .avatar.ag-fx-disabled {
        animation: none !important;
      }

      .avatar.ag-fx-disabled::before {
        animation: none !important;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .avatar.ag-fx-bounce,
        .avatar.ag-fx-pulse,
        .avatar.ag-fx-jelly,
        .avatar.ag-fx-shimmer,
        .avatar.ag-fx-glow,
        .avatar.ag-fx-flip,
        .avatar.ag-fx-ripple,
        .avatar.ag-fx-highlight-sweep,
        .avatar.ag-fx-press-pop,
        .avatar.ag-fx-slide-in {
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
    const targetEl = this.shadowRoot?.querySelector('.avatar');
    if (targetEl instanceof HTMLElement) {
      targetEl.style.setProperty('--ag-fx-shadow-opacity', isDark ? '0.8' : '0.4');

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

  override updated(changedProperties: Map<PropertyKey, unknown>) {
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
    const targetEl = this.shadowRoot?.querySelector('.avatar');
    if (targetEl) {
      const classesToRemove: string[] = [];
      targetEl.classList.forEach((className: string) => {
        if (className.startsWith('ag-fx-')) {
          classesToRemove.push(className);
        }
      });
      classesToRemove.forEach(className => targetEl.classList.remove(className));

      if (this.fx && !this.fxDisabled) {
        targetEl.classList.add(`ag-fx-${this.fx}`);
      }

      if (this.fxDisabled) {
        targetEl.classList.add('ag-fx-disabled');
      } else {
        targetEl.classList.remove('ag-fx-disabled');
      }
    }
  }

  private _applyFxCustomProperties() {
    const targetEl = this.shadowRoot?.querySelector('.avatar');
    if (targetEl instanceof HTMLElement) {
      targetEl.style.setProperty('--ag-fx-duration', `var(--ag-fx-duration-${this.fxSpeed})`);
      targetEl.style.setProperty('--ag-fx-ease', `var(--ag-fx-ease-${this.fxEase})`);
    }
  }
}
