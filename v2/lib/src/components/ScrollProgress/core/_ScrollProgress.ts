import { LitElement, html, css, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import '../../Progress/core/Progress';
import '../../ProgressRing/core/ProgressRing';
import '../../Badge/core/Badge';

export interface ScrollProgressProps {
  /**
   * Visual representation mode
   * @default 'bar'
   */
  mode?: 'bar' | 'dot-trail' | 'badge' | 'ring';

  /**
   * Target scroll container. If not provided, uses document.scrollingElement
   */
  target?: HTMLElement | null;

  /**
   * Placement for bar mode (top or bottom)
   * @default 'top'
   */
  orientation?: 'top' | 'bottom';

  /**
   * Number of dots for dot-trail mode
   * @default 5
   */
  dots?: number;

  /**
   * Badge color variant for badge mode
   * @default 'info'
   */
  badgeVariant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'monochrome';

  /**
   * Diameter of progress ring for ring mode
   * @default 32
   */
  ringSize?: number;

  /**
   * Stroke width for ring mode
   * @default 3
   */
  ringStrokeWidth?: number;

  /**
   * Variant color for ring mode
   * @default 'info'
   */
  ringVariant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';

  /**
   * Number of decimal places for percentage display (0 = integers)
   * @default 0
   */
  precision?: number;
}

/**
 * @element ag-scroll-progress
 * @csspart scroll-progress-wrapper - The main container element
 * @csspart scroll-progress-bar - The progress bar (in bar mode)
 * @csspart scroll-progress-dots - The dot trail container (in dot-trail mode)
 * @csspart scroll-progress-badge - The badge (in badge mode)
 * @csspart scroll-progress-ring - The progress ring (in ring mode)
 */
export class ScrollProgress extends LitElement implements ScrollProgressProps {
  @property({ type: String, reflect: true })
  declare mode: 'bar' | 'dot-trail' | 'badge' | 'ring';

  @property({ attribute: false })
  declare target: HTMLElement | null;

  @property({ type: String, reflect: true })
  declare orientation: 'top' | 'bottom';

  @property({ type: Number })
  declare dots: number;

  @property({ type: String, attribute: 'badge-variant' })
  declare badgeVariant: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'monochrome';

  @property({ type: Number, attribute: 'ring-size' })
  declare ringSize: number;

  @property({ type: Number, attribute: 'ring-stroke-width' })
  declare ringStrokeWidth: number;

  @property({ type: String, attribute: 'ring-variant' })
  declare ringVariant: 'primary' | 'success' | 'warning' | 'danger' | 'info';

  @property({ type: Number })
  declare precision: number;

  @property({ type: Number, state: true })
  private _scrollPercent = 0;

  private _scrollHandler = this._handleScroll.bind(this);
  private _resizeHandler = this._handleScroll.bind(this);

  constructor() {
    super();
    this.mode = 'bar';
    this.target = null;
    this.orientation = 'top';
    this.dots = 5;
    this.badgeVariant = 'info';
    this.ringSize = 32;
    this.ringStrokeWidth = 3;
    this.ringVariant = 'info';
    this.precision = 0;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
      }

      /* Bar mode positioning */
      :host([mode="bar"]) {
        position: fixed;
        left: 0;
        right: 0;
        z-index: var(--ag-z-index-sticky, 100);
      }

      :host([mode="bar"][orientation="top"]) {
        top: 0;
      }

      :host([mode="bar"][orientation="bottom"]) {
        bottom: 0;
      }

      /* Dot trail mode */
      .dot-trail {
        display: flex;
        gap: var(--ag-space-2);
        align-items: center;
        justify-content: center;
      }

      /* Badge mode */
      .badge-wrapper {
        display: inline-flex;
      }

      /* Ring mode */
      .ring-wrapper {
        display: inline-flex;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._attachScrollListener();
    this._handleScroll();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._detachScrollListener();
  }

  private _attachScrollListener() {
    const scrollTarget = this._getScrollTarget();
    scrollTarget.addEventListener('scroll', this._scrollHandler, { passive: true });
    window.addEventListener('resize', this._resizeHandler, { passive: true });
  }

  private _detachScrollListener() {
    const scrollTarget = this._getScrollTarget();
    scrollTarget.removeEventListener('scroll', this._scrollHandler);
    window.removeEventListener('resize', this._resizeHandler);
  }

  private _getScrollTarget(): HTMLElement | Window {
    if (this.target) {
      return this.target;
    }
    return window;
  }

  private _handleScroll() {
    let scrollTop: number;
    let scrollHeight: number;
    let clientHeight: number;

    if (this.target) {
      scrollTop = this.target.scrollTop;
      scrollHeight = this.target.scrollHeight;
      clientHeight = this.target.clientHeight;
    } else {
      const scrollingElement = document.scrollingElement || document.documentElement;
      scrollTop = scrollingElement.scrollTop;
      scrollHeight = scrollingElement.scrollHeight;
      clientHeight = scrollingElement.clientHeight;
    }

    const scrollableHeight = scrollHeight - clientHeight;

    if (scrollableHeight <= 0) {
      this._scrollPercent = 0;
    } else {
      const rawPercent = (scrollTop / scrollableHeight) * 100;
      // Round to specified precision (default 0 = integers)
      const multiplier = Math.pow(10, this.precision);
      this._scrollPercent = Math.round(rawPercent * multiplier) / multiplier;
      this._scrollPercent = Math.min(100, Math.max(0, this._scrollPercent));
    }
  }

  private _renderBarMode() {
    return html`
      <ag-progress
        part="scroll-progress-bar"
        .value=${this._scrollPercent}
        size="small"
        label="Scroll progress"
      ></ag-progress>
    `;
  }

  private _renderDotTrailMode() {
    const activeDots = Math.floor((this._scrollPercent / 100) * this.dots);
    const dots = Array.from({ length: this.dots }, (_, i) => {
      const isActive = i < activeDots;
      return html`
        <ag-badge
          dot
          size="sm"
          variant=${isActive ? this.badgeVariant : 'neutral'}
          hidden-from-at
        ></ag-badge>
      `;
    });

    return html`
      <div class="dot-trail" part="scroll-progress-dots">
        ${dots}
      </div>
    `;
  }

  private _renderBadgeMode() {
    const percent = this._scrollPercent.toFixed(this.precision);
    return html`
      <div class="badge-wrapper">
        <ag-badge
          part="scroll-progress-badge"
          variant=${this.badgeVariant}
          status-label="Scroll progress ${percent}%"
        >
          ${percent}%
        </ag-badge>
      </div>
    `;
  }

  private _renderRingMode() {
    const displayPercent = this._scrollPercent.toFixed(this.precision);
    return html`
      <div class="ring-wrapper">
        <ag-progress-ring
          part="scroll-progress-ring"
          .value=${this._scrollPercent}
          size="custom"
          variant=${this.ringVariant}
          label="Scroll progress"
          style="--ag-progress-ring-size: ${this.ringSize}px"
        >
          ${displayPercent}%
        </ag-progress-ring>
      </div>
    `;
  }

  render() {
    switch (this.mode) {
      case 'bar':
        return this._renderBarMode();
      case 'dot-trail':
        return this._renderDotTrailMode();
      case 'badge':
        return this._renderBadgeMode();
      case 'ring':
        return this._renderRingMode();
      default:
        return this._renderBarMode();
    }
  }
}
