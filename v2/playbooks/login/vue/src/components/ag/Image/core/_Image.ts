// v2/lib/src/components/Image/core/_Image.ts
import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';

/**
 * Source configuration for responsive images using <picture> element
 */
export interface AgImageSource {
  /** Required srcset attribute for this source */
  srcset: string;
  /** MIME type (e.g., "image/webp") */
  type?: string;
  /** Media query (e.g., "(min-width: 768px)") */
  media?: string;
  /** Sizes attribute for responsive sizing */
  sizes?: string;
}

/**
 * Props interface for AgImage component
 */
export interface AgImageProps {
  // REQUIRED
  /** Image source URL */
  src: string;
  /** Alternative text for accessibility (required) */
  alt: string;

  // RESPONSIVE
  /** Array of source configurations for <picture> element */
  sources?: AgImageSource[];

  // LAYOUT (CLS Prevention)
  /** Intrinsic width in pixels */
  width?: number;
  /** Intrinsic height in pixels */
  height?: number;
  /** Aspect ratio in format "16/9" or auto-calculated from width/height */
  aspectRatio?: string;

  // DISPLAY
  /** CSS object-fit value */
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /** CSS object-position value */
  position?: string;

  // LOADING
  /** Native browser lazy loading */
  loading?: 'lazy' | 'eager';
  /** Enable simple opacity fade transition */
  fade?: boolean;
  /** Fade transition duration in milliseconds */
  duration?: number;

  // ERROR HANDLING
  /** Backup image source if primary fails to load */
  fallbackSrc?: string;
}

/**
 * AgImage - A lightweight, performant image component with responsive sources,
 * lazy loading, error recovery, and CLS prevention.
 * 
 * @element ag-image
 * 
 * @fires ag-load - Dispatched when image successfully loads
 * @fires ag-error - Dispatched when image fails to load
 * 
 * @slot - Default slot for caption content
 * @slot placeholder - Custom placeholder content during loading
 * @slot error - Custom error content when image fails to load
 * 
 * @csspart ag-img - The img element
 * @csspart ag-placeholder - The placeholder overlay
 * @csspart ag-error - The error overlay
 * 
 * @cssprop --ag-image-transition-duration - Fade transition duration (default: var(--ag-motion-medium))
 * @cssprop --ag-image-bg-color - Background color during loading (default: var(--ag-background-secondary))
 * @cssprop --ag-image-fit - Default object-fit value (default: cover)
 */

/**
 * Custom event types
 */
export type ImageLoadEvent = CustomEvent<void>;
export type ImageErrorEvent = CustomEvent<void>;

export class AgImage extends LitElement implements AgImageProps {
  // ──────────────────────────────────────────────────────────────
  // Public Properties
  // ──────────────────────────────────────────────────────────────
  @property({ type: String })
  declare src: string;

  @property({ type: String })
  declare alt: string;

  @property({ type: Array })
  declare sources: AgImageSource[];

  @property({ type: Number })
  declare width?: number;

  @property({ type: Number })
  declare height?: number;

  @property({ type: String, attribute: 'aspect-ratio' })
  declare aspectRatio?: string;

  @property({ type: String })
  declare fit: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

  @property({ type: String })
  declare position: string;

  @property({ type: String })
  declare loading: 'lazy' | 'eager';

  @property({ type: Boolean, reflect: true })
  declare fade: boolean;

  @property({ type: Number })
  declare duration: number;

  @property({ type: String, attribute: 'fallback-src' })
  declare fallbackSrc?: string;

  // ──────────────────────────────────────────────────────────────
  // Internal State
  // ──────────────────────────────────────────────────────────────
  @state()
  private declare _loaded: boolean;

  @state()
  private declare _errored: boolean;

  @state()
  private declare _currentSrc: string;

  // ──────────────────────────────────────────────────────────────
  // Constructor
  // ──────────────────────────────────────────────────────────────
  constructor() {
    super();
    
    // Initialize public properties
    this.src = '';
    this.alt = '';
    this.sources = [];
    this.fit = 'cover';
    this.position = 'center';
    this.loading = 'lazy';
    this.fade = false;
    this.duration = 200;
    
    // Initialize internal state
    this._loaded = false;
    this._errored = false;
    this._currentSrc = '';
  }

  // ──────────────────────────────────────────────────────────────
  // Styles
  // ──────────────────────────────────────────────────────────────
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      overflow: hidden;
      /* Remove inline spacing around image element - images are inline by default and can create unwanted gaps. This doesn't affect slotted content. */
      line-height: 0;
      background: var(--ag-image-bg-color, var(--ag-background-secondary));
    }

    .wrapper {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: var(--ag-image-fit, cover);
      object-position: var(--ag-image-position, center);
    }

    /* Fade transition when enabled */
    :host([fade]) img {
      opacity: 0;
      transition: opacity var(--ag-image-transition-duration, var(--ag-motion-medium, 200ms)) ease;
    }

    :host([fade]) img.loaded {
      opacity: 1;
    }

    /* Non-fade components are always visible */
    :host(:not([fade])) img {
      opacity: 1;
    }

    /* Overlay styles for placeholder and error states */
    .overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--ag-font-size-sm);
      background: var(--ag-image-bg-color, var(--ag-background-secondary));
      color: var(--ag-text-muted);
      z-index: 1;
      /* Reset line-height for slotted content so text displays properly. The line-height: 0 on :host would otherwise be inherited here. */line-height: normal;
    }

    .overlay.error {
      background: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }

    /* Hide overlay when image is loaded */
    .overlay.hidden {
      display: none;
    }
  `;

  // ──────────────────────────────────────────────────────────────
  // Lifecycle
  // ──────────────────────────────────────────────────────────────
  override willUpdate(changed: Map<PropertyKey, unknown>) {
    super.willUpdate(changed);

    // Sync CSS custom properties for fit and position
    if (changed.has('fit')) {
      this.style.setProperty('--ag-image-fit', this.fit);
    }
    if (changed.has('position')) {
      this.style.setProperty('--ag-image-position', this.position);
    }

    // Sync dimensions
    if (changed.has('width')) {
      this.style.width = this.width != null ? `${this.width}px` : '';
    }
    if (changed.has('height')) {
      this.style.height = this.height != null ? `${this.height}px` : '';
    }

    // Handle aspect ratio
    if (changed.has('aspectRatio') || changed.has('width') || changed.has('height')) {
      if (this.aspectRatio) {
        // Explicit aspect ratio takes priority
        this.style.aspectRatio = this.aspectRatio;
      } else if (this.width != null && this.height != null) {
        // Auto-calculate from width/height
        this.style.aspectRatio = `${this.width} / ${this.height}`;
      } else {
        this.style.aspectRatio = '';
      }
    }

    // Reset loaded/error state when src changes
    if (changed.has('src')) {
      const oldSrc = changed.get('src') as string | undefined;
      if (oldSrc !== this.src) {
        this._loaded = false;
        this._errored = false;
        this._currentSrc = this.src;
      }
    }
  }

  // ──────────────────────────────────────────────────────────────
  // Event Handlers
  // ──────────────────────────────────────────────────────────────
  private _handleLoad = () => {
    this._loaded = true;
    this._errored = false;

    this.dispatchEvent(
      new CustomEvent('ag-load', {
        bubbles: true,
        composed: true,
      })
    );
  };

  private _handleError = () => {
    this._loaded = false;
    this._errored = true;

    // Try fallback if available and we haven't already
    if (this.fallbackSrc && this._currentSrc !== this.fallbackSrc) {
      this._currentSrc = this.fallbackSrc;
      return; // Re-render will try fallback
    }

    this.dispatchEvent(
      new CustomEvent('ag-error', {
        bubbles: true,
        composed: true,
      })
    );
  };

  // ──────────────────────────────────────────────────────────────
  // Render Helpers
  // ──────────────────────────────────────────────────────────────
  private _renderImage() {
    const imgSrc = this._errored && this.fallbackSrc ? this.fallbackSrc : this._currentSrc;

    return html`
      <img
        part="ag-img"
        class=${this._loaded ? 'loaded' : ''}
        src=${imgSrc}
        alt=${this.alt}
        loading=${this.loading}
        decoding="async"
        width=${this.width ?? nothing}
        height=${this.height ?? nothing}
        @load=${this._handleLoad}
        @error=${this._handleError}
      />
    `;
  }

  private _renderPicture() {
    if (!this.sources || this.sources.length === 0) {
      return this._renderImage();
    }

    return html`
      <picture>
        ${this.sources.map(
          (source) => html`
            <source
              srcset=${source.srcset}
              type=${source.type ?? nothing}
              media=${source.media ?? nothing}
              sizes=${source.sizes ?? nothing}
            />
          `
        )}
        ${this._renderImage()}
      </picture>
    `;
  }

  private _renderOverlay() {
    if (this._loaded) {
      return nothing;
    }

    if (this._errored) {
      return html`
        <div class="overlay error" part="ag-error" role="alert" aria-label="Image failed to load">
          <slot name="error">Failed to load image</slot>
        </div>
      `;
    }

    return html`
      <div class="overlay" part="ag-placeholder" aria-label="Image loading">
        <slot name="placeholder">Loading…</slot>
      </div>
    `;
  }

  // ──────────────────────────────────────────────────────────────
  // Main Render
  // ──────────────────────────────────────────────────────────────
  override render() {
    return html`
      <div class="wrapper">
        ${this._renderPicture()}
        ${this._renderOverlay()}
      </div>
      <slot></slot>
    `;
  }
}
