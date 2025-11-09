import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
/**
 * Props interface for FlexContainer component
 *
 * @csspart ag-flex-container - The main flex container element
 *
 * @cssproperty --flex-direction - Controls the direction of flex items
 * @cssproperty --flex-wrap - Controls whether flex items wrap
 * @cssproperty --flex-justify - Controls alignment along main axis
 * @cssproperty --flex-align - Controls alignment along cross axis
 * @cssproperty --flex-align-content - Controls space between lines in multi-line flex containers
 * @cssproperty --flex-gap - Controls spacing between flex items
 */
export interface FlexContainerProps {
  /** Main axis direction (defaults to 'row') */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /** Whether flex items wrap (defaults to 'nowrap') */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Alignment along main axis (defaults to 'flex-start') */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /** Alignment along cross axis (defaults to 'stretch') */
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Space distribution between lines in multi-line containers (defaults to 'stretch') */
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  /** Spacing between flex items (defaults to 'var(--ag-space-0, 0)') */
  gap?: string;
  /** Use inline-flex instead of flex (defaults to false) */
  inline?: boolean;
  /** Reverse the direction (e.g., row becomes row-reverse, defaults to false) */
  reverse?: boolean;
  /** Apply flex: 1 1 auto to all children for equal sizing (defaults to false) */
  stretchChildren?: boolean;
}
export class FlexContainer extends LitElement implements FlexContainerProps {
  static styles = css`
    :host {
      display: flex;
      flex-direction: var(--flex-direction, row);
      flex-wrap: var(--flex-wrap, nowrap);
      justify-content: var(--flex-justify, flex-start);
      align-items: var(--flex-align, stretch);
      align-content: var(--flex-align-content, stretch);
      gap: var(--flex-gap, var(--ag-space-0, 0));
    }

    /* Mobile-first responsive defaults */
    @media (max-width: 640px) {
      :host {
        flex-direction: var(--flex-direction-mobile, var(--flex-direction, row));
        flex-wrap: var(--flex-wrap-mobile, var(--flex-wrap, nowrap));
        justify-content: var(--flex-justify-mobile, var(--flex-justify, flex-start));
        align-items: var(--flex-align-mobile, var(--flex-align, stretch));
        gap: var(--flex-gap-mobile, var(--flex-gap, var(--ag-space-0, 0)));
      }
    }

    @media (min-width: 641px) and (max-width: 768px) {
      :host {
        flex-direction: var(--flex-direction-tablet, var(--flex-direction, row));
        flex-wrap: var(--flex-wrap-tablet, var(--flex-wrap, nowrap));
        justify-content: var(--flex-justify-tablet, var(--flex-justify, flex-start));
        align-items: var(--flex-align-tablet, var(--flex-align, stretch));
        gap: var(--flex-gap-tablet, var(--flex-gap, var(--ag-space-0, 0)));
      }
    }

    @media (min-width: 769px) {
      :host {
        flex-direction: var(--flex-direction-desktop, var(--flex-direction, row));
        flex-wrap: var(--flex-wrap-desktop, var(--flex-wrap, nowrap));
        justify-content: var(--flex-justify-desktop, var(--flex-justify, flex-start));
        align-items: var(--flex-align-desktop, var(--flex-align, stretch));
        gap: var(--flex-gap-desktop, var(--flex-gap, var(--ag-space-0, 0)));
      }
    }

    :host([inline]) {
      display: inline-flex;
    }

    :host([stretch-children]) ::slotted(*) {
      flex: 1 1 auto;
    }
  `;
  protected _direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'row';
  protected _wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'nowrap';
  protected _justify: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'flex-start';
  protected _align: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' = 'stretch';
  protected _alignContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' = 'stretch';
  @property({ type: String, reflect: true })
  get direction(): FlexContainerProps['direction'] {
    return this._direction;
  }
  set direction(value: FlexContainerProps['direction']) {
    const valid = ['row', 'row-reverse', 'column', 'column-reverse'];
    this._direction = value && valid.includes(value) ? value : 'row';
    this._updateDirectionWithReverse();
    this.requestUpdate();
  }
  @property({ type: String, reflect: true })
  get wrap(): FlexContainerProps['wrap'] {
    return this._wrap;
  }
  set wrap(value: FlexContainerProps['wrap']) {
    const valid = ['nowrap', 'wrap', 'wrap-reverse'];
    this._wrap = value && valid.includes(value) ? value : 'nowrap';
    this.requestUpdate();
  }
  @property({ type: String, reflect: true })
  get justify(): FlexContainerProps['justify'] {
    return this._justify;
  }
  set justify(value: FlexContainerProps['justify']) {
    const valid = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
    this._justify = value && valid.includes(value) ? value : 'flex-start';
    this.requestUpdate();
  }
  @property({ type: String, reflect: true })
  get align(): FlexContainerProps['align'] {
    return this._align;
  }
  set align(value: FlexContainerProps['align']) {
    const valid = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
    this._align = value && valid.includes(value) ? value : 'stretch';
    this.requestUpdate();
  }
  @property({ type: String, attribute: 'align-content' })
  get alignContent(): FlexContainerProps['alignContent'] {
    return this._alignContent;
  }
  set alignContent(value: FlexContainerProps['alignContent']) {
    const valid = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'];
    this._alignContent = value && valid.includes(value) ? value : 'stretch';
    this.requestUpdate();
  }
  @property({ type: String, reflect: true })
  declare gap: string;
  @property({ type: Boolean, reflect: true })
  declare inline: boolean;
  @property({ type: Boolean, reflect: true })
  declare reverse: boolean;
  @property({ type: Boolean, attribute: 'stretch-children', reflect: true })
  declare stretchChildren: boolean;
  constructor() {
    super();
    this.gap = 'var(--ag-space-0, 0)';
    this.inline = false;
    this.reverse = false;
    this.stretchChildren = false;
  }
  /**
   * Updates the direction CSS property considering the reverse flag
   * @remarks When reverse is true, it flips the current direction (e.g., row → row-reverse)
   * @example
   * const container = new FlexContainer();
   * container.direction = 'column';
   * container.reverse = true;
   * document.body.appendChild(container);
   */
  private _updateDirectionWithReverse() {
    let direction = this._direction || 'row';

    if (this.reverse) {
      // Convert direction to reverse if reverse prop is true
      if (direction === 'row') direction = 'row-reverse';
      else if (direction === 'row-reverse') direction = 'row';
      else if (direction === 'column') direction = 'column-reverse';
      else if (direction === 'column-reverse') direction = 'column';
    }

    this.style.setProperty('--flex-direction', direction);
  }
  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    // Update CSS custom properties when props change
    if (changedProperties.has('direction') || changedProperties.has('reverse')) {
      this._updateDirectionWithReverse();
    }
    if (changedProperties.has('wrap')) {
      this.style.setProperty('--flex-wrap', this._wrap);
    }
    if (changedProperties.has('justify')) {
      this.style.setProperty('--flex-justify', this._justify);
    }
    if (changedProperties.has('align')) {
      this.style.setProperty('--flex-align', this._align);
    }
    if (changedProperties.has('alignContent')) {
      this.style.setProperty('--flex-align-content', this._alignContent);
    }
    if (changedProperties.has('gap')) {
      const gapValue = this.gap?.trim() ?? '';
     
      // Validate gap has valid CSS units/values
      if (gapValue && gapValue !== '0' && !this._isValidGapValue(gapValue)) {
        // eslint-disable-next-line no-console
        console.warn(`[FlexContainer] Potentially invalid gap value: '${gapValue}'. Use valid CSS units (px, rem, em, %, etc.).`);
      }
     
      if (gapValue === '' || gapValue === '0') {
        this.style.setProperty('--flex-gap', 'var(--ag-space-0, 0)');
      } else {
        this.style.setProperty('--flex-gap', gapValue);
      }
    }
  }
  /**
   * Validates gap values against common CSS units and keywords
   * Uses simple checks instead of complex regex for maintainability
   */
  private _isValidGapValue(value: string): boolean {
    // CSS keywords that are valid for gap
    const keywords = ['0', 'auto', 'normal', 'unset', 'initial', 'inherit'];
    if (keywords.includes(value)) return true;

    // CSS functions (var, calc, etc.)
    if (value.startsWith('var(') || value.startsWith('calc(')) return true;

    // Common CSS units - check if value ends with a valid unit or has unit followed by space
    const units = ['px', 'rem', 'em', '%', 'vw', 'vh', 'pt', 'cm', 'mm', 'in', 'pc', 'ex', 'ch', 'vmin', 'vmax'];

    // Split multi-value gap (e.g., "1em 2em") and check each part
    const parts = value.split(/\s+/);
    const allPartsValid = parts.every(part => {
      // Check if part ends with any valid unit
      return units.some(unit => part.endsWith(unit));
    });

    return allPartsValid;
  }
  render() {
    return html`
      <slot part="ag-flex-container"></slot>
    `;
  }
}
