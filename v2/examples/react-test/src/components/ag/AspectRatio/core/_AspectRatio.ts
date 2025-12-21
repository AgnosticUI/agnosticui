import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export interface AspectRatioProps {
  width: number;
  height: number;
  maxWidth?: number | undefined;
}

/**
 * @summary Responsively resize a single block-level child to a specified aspect ratio.
 * @slot - Single block child (e.g., iframe, video, img, div)
 * @part ag-aspect-ratio - The wrapper that enforces the aspect ratio
 */
export class AgAspectRatio extends LitElement implements AspectRatioProps {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    /* wrapper that enforces aspect ratio */
    .ratio {
      position: relative;
      width: 100%;
      height: auto;
      overflow: hidden;
      display: block;
    }

    /* Make slotted child fill the container */
    ::slotted(*) {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 0;
    }
  `;

  @property({ type: Number })
  declare width: number;

  @property({ type: Number })
  declare height: number;

  @property({ type: Number, attribute: 'max-width' })
  declare maxWidth?: number | undefined;

  constructor() {
    super();
    this.width = 1;
    this.height = 1;
    this.maxWidth = undefined;
  }

  private get _aspectStyle() {
    const w = this.width || 1;
    const h = this.height || 1;
    const aspect = `${w} / ${h}`;
    const styles: string[] = [];
    styles.push(`aspect-ratio: ${aspect};`);
    if (this.maxWidth !== undefined && this.maxWidth !== null) {
      styles.push(`max-width: ${this.maxWidth}px;`);
      styles.push(`margin-left: auto; margin-right: auto;`);
    }
    return styles.join(' ');
  }

  render() {
    return html`
      <div part="ag-aspect-ratio" class="ratio" style=${this._aspectStyle}>
        <slot></slot>
      </div>
    `;
  }
}
