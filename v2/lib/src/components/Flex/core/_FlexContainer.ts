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
  /** Spacing between flex items (can be set via gap attribute or --flex-gap CSS custom property) */
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
      display: contents;
    }

    .flex-container {
      display: flex;
      flex-direction: var(--flex-direction, row);
      flex-wrap: var(--flex-wrap, nowrap);
      justify-content: var(--flex-justify, flex-start);
      align-items: var(--flex-align, stretch);
      align-content: var(--flex-align-content, stretch);
      gap: var(--flex-gap, var(--ag-space-0, 0));
    }

    :host([inline]) .flex-container {
      display: inline-flex;
    }

    :host([stretch-children]) ::slotted(*) {
      flex: 1 1 auto;
    }

    /* Attribute-based CSS custom property defaults */
    /* These set low-specificity defaults that can be easily overridden */

    /* Direction */
    :host([direction="row"]:not([reverse])) {
      --flex-direction: row;
    }
    :host([direction="row"][reverse]) {
      --flex-direction: row-reverse;
    }
    :host([direction="row-reverse"]:not([reverse])) {
      --flex-direction: row-reverse;
    }
    :host([direction="row-reverse"][reverse]) {
      --flex-direction: row;
    }
    :host([direction="column"]:not([reverse])) {
      --flex-direction: column;
    }
    :host([direction="column"][reverse]) {
      --flex-direction: column-reverse;
    }
    :host([direction="column-reverse"]:not([reverse])) {
      --flex-direction: column-reverse;
    }
    :host([direction="column-reverse"][reverse]) {
      --flex-direction: column;
    }

    /* Wrap */
    :host([wrap="nowrap"]) {
      --flex-wrap: nowrap;
    }
    :host([wrap="wrap"]) {
      --flex-wrap: wrap;
    }
    :host([wrap="wrap-reverse"]) {
      --flex-wrap: wrap-reverse;
    }

    /* Justify */
    :host([justify="flex-start"]) {
      --flex-justify: flex-start;
    }
    :host([justify="flex-end"]) {
      --flex-justify: flex-end;
    }
    :host([justify="center"]) {
      --flex-justify: center;
    }
    :host([justify="space-between"]) {
      --flex-justify: space-between;
    }
    :host([justify="space-around"]) {
      --flex-justify: space-around;
    }
    :host([justify="space-evenly"]) {
      --flex-justify: space-evenly;
    }

    /* Align */
    :host([align="flex-start"]) {
      --flex-align: flex-start;
    }
    :host([align="flex-end"]) {
      --flex-align: flex-end;
    }
    :host([align="center"]) {
      --flex-align: center;
    }
    :host([align="baseline"]) {
      --flex-align: baseline;
    }
    :host([align="stretch"]) {
      --flex-align: stretch;
    }

    /* Align Content */
    :host([align-content="flex-start"]) {
      --flex-align-content: flex-start;
    }
    :host([align-content="flex-end"]) {
      --flex-align-content: flex-end;
    }
    :host([align-content="center"]) {
      --flex-align-content: center;
    }
    :host([align-content="space-between"]) {
      --flex-align-content: space-between;
    }
    :host([align-content="space-around"]) {
      --flex-align-content: space-around;
    }
    :host([align-content="space-evenly"]) {
      --flex-align-content: space-evenly;
    }
    :host([align-content="stretch"]) {
      --flex-align-content: stretch;
    }

    /* Gap - NOT handled via attribute selectors like other properties */
    /* Gap values are freeform strings and CSS attr() doesn't work in custom properties */
    /* The --flex-gap custom property can be overridden via classes, ::part(), or inline styles */
    /* without any specificity issues. The fallback var(--ag-space-0, 0) provides the default. */
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
    // Don't set gap here - let CSS handle the default via var(--flex-gap, var(--ag-space-0, 0))
    // This prevents specificity issues when users override --flex-gap via classes
    this.inline = false;
    this.reverse = false;
    this.stretchChildren = false;
  }
  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    // Validate gap value (for developer feedback)
    if (changedProperties.has('gap')) {
      const gapValue = this.gap?.trim() ?? '';
      if (gapValue && gapValue !== '0' && !this._isValidGapValue(gapValue)) {
        // eslint-disable-next-line no-console
        console.warn(`[FlexContainer] Potentially invalid gap value: '${gapValue}'. Use valid CSS units (px, rem, em, %, etc.).`);
      }
    }

    // Note: Direction, wrap, justify, align, alignContent, and gap are handled via
    // attribute selectors in the static styles. This keeps specificity low and
    // allows CSS custom properties to cascade naturally without specificity issues.
    // Users can override via classes, ::part(), or inline styles without needing !important.
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
      <div class="flex-container" part="ag-flex-container">
        <slot></slot>
      </div>
    `;
  }
}
