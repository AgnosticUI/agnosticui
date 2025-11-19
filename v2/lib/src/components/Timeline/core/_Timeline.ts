// v2/lib/src/components/Timeline/core/_Timeline.ts
import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Props interface for AgTimeline component
 */
export interface AgTimelineProps {
  /** Orientation of the timeline */
  orientation?: 'horizontal' | 'vertical';
  /** Visual variant for styling connectors and markers */
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';
  /** Whether to use compact spacing */
  compact?: boolean;
  /** Enable responsive behavior - automatically switches to vertical on narrow containers */
  responsive?: boolean;
  /** ARIA label for the timeline */
  ariaLabel?: string | null;
}

/**
 * AgTimeline - A semantic timeline component for displaying chronological events
 * 
 * @element ag-timeline
 * 
 * @slot - Default slot for ag-timeline-item elements
 * 
 * @csspart ag-timeline-container - The main timeline container (ul element)
 * 
 * @cssprop --ag-timeline-connector-color - Color of connector lines (default: var(--ag-border))
 * @cssprop --ag-timeline-connector-width - Width of connector lines (default: 2px)
 * @cssprop --ag-timeline-spacing - Spacing between timeline items (default: var(--ag-space-4))
 * @cssprop --ag-responsive-mobile-breakpoint - Breakpoint for responsive behavior (default: 640px)
 */
export class AgTimeline extends LitElement implements AgTimelineProps {
  // ──────────────────────────────────────────────────────────────
  // Public Properties
  // ──────────────────────────────────────────────────────────────
  @property({ type: String, reflect: true })
  declare orientation: 'horizontal' | 'vertical';

  @property({ type: String, reflect: true })
  declare variant: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';

  @property({ type: Boolean })
  declare compact: boolean;

  @property({ type: Boolean, reflect: true })
  declare responsive: boolean;

  @property({ type: String, attribute: 'aria-label' })
  declare ariaLabel: string | null;

  // ──────────────────────────────────────────────────────────────
  // Constructor
  // ──────────────────────────────────────────────────────────────
  constructor() {
    super();
    this.orientation = 'horizontal';
    this.variant = '';
    this.compact = false;
    this.responsive = false;
  }

  // ──────────────────────────────────────────────────────────────
  // Styles
  // ──────────────────────────────────────────────────────────────
  static styles = css`
    :host {
      display: block;
    }

    /* Enable container queries when responsive is true */
    :host([responsive]) {
      container-type: inline-size;
    }

    .timeline-container {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      position: relative;
    }

    slot {
      display: contents;
    }

    /* Horizontal orientation (default) */
    :host([orientation="horizontal"]) .timeline-container {
      flex-direction: row;
      align-items: stretch;
    }

    /* Vertical orientation */
    :host([orientation="vertical"]) .timeline-container {
      flex-direction: column;
      align-items: stretch;
    }

    /* Responsive: Switch to vertical on narrow containers */
    @container (max-width: var(--ag-responsive-mobile-breakpoint, 640px)) {
      :host([responsive][orientation="horizontal"]) .timeline-container {
        flex-direction: column;
        align-items: stretch;
      }
    }


  `;

  // ──────────────────────────────────────────────────────────────
  // Lifecycle
  // ──────────────────────────────────────────────────────────────
  override firstUpdated() {
    // Pass orientation and variant down to child timeline items
    this._updateChildItems();
  }

  override updated(changedProperties: Map<PropertyKey, unknown>) {
    super.updated(changedProperties);

    if (changedProperties.has('orientation') || changedProperties.has('variant')) {
      this._updateChildItems();
    }
  }

  private _updateChildItems() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return;

    const items = slot.assignedElements({ flatten: true })
      .filter(el => el.tagName.toLowerCase() === 'ag-timeline-item') as AgTimelineItem[];

    items.forEach((item, index) => {
      item.setAttribute('orientation', this.orientation);
      if (this.variant) {
        item.setAttribute('variant', this.variant);
      }
      // Pass responsive attribute down to children
      item.toggleAttribute('responsive', this.responsive);
      // Mark first and last items for styling
      item.toggleAttribute('first', index === 0);
      item.toggleAttribute('last', index === items.length - 1);
    });
  }

  // ──────────────────────────────────────────────────────────────
  // Main Render
  // ──────────────────────────────────────────────────────────────
  override render() {
    return html`
      <ul 
        class="timeline-container"
        part="ag-timeline-container"
        role="list"
        aria-label=${this.ariaLabel ?? nothing}
      >
        <slot @slotchange=${this._updateChildItems}></slot>
      </ul>
    `;
  }
}

/**
 * Props interface for AgTimelineItem component
 */
export interface AgTimelineItemProps {
  /** Inherited from parent timeline */
  orientation?: 'horizontal' | 'vertical';
  /** Inherited from parent timeline */
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';
  /** ARIA label for the marker icon */
  markerAriaLabel?: string;
}

/**
 * AgTimelineItem - Individual item within a timeline
 * 
 * @element ag-timeline-item
 * 
 * @slot ag-start - Content positioned at the start (e.g., date/label)
 * @slot ag-marker - Content for the center marker (e.g., icon)
 * @slot ag-end - Content positioned at the end (e.g., description)
 * 
 * @csspart ag-item-container - The main item container (li element)
 * @csspart ag-start - The start content wrapper
 * @csspart ag-marker - The marker wrapper
 * @csspart ag-end - The end content wrapper
 * @csspart ag-connector - The connector line element
 */
export class AgTimelineItem extends LitElement {
  // ──────────────────────────────────────────────────────────────
  // Public Properties
  // ──────────────────────────────────────────────────────────────
  @property({ type: String, reflect: true })
  declare orientation: 'horizontal' | 'vertical';

  @property({ type: String, reflect: true })
  declare variant: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';

  @property({ type: String, attribute: 'marker-aria-label' })
  declare markerAriaLabel: string | null;

  @property({ type: Boolean, reflect: true })
  declare first: boolean;

  @property({ type: Boolean, reflect: true })
  declare last: boolean;

  @property({ type: Boolean, reflect: true })
  declare responsive: boolean;

  // ──────────────────────────────────────────────────────────────
  // Constructor
  // ──────────────────────────────────────────────────────────────
  constructor() {
    super();
    this.orientation = 'horizontal';
    this.variant = '';
    this.first = false;
    this.last = false;
    this.responsive = false;
  }

  // ──────────────────────────────────────────────────────────────
  // Styles
  // ──────────────────────────────────────────────────────────────
  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    :host([orientation="horizontal"]) {
      flex: 1;
    }

    /* Enable container queries when responsive parent */
    :host([responsive]) {
      container-type: inline-size;
    }

    .item-container {
      display: grid;
      position: relative;
      align-items: center;
    }

    /* Horizontal layout - 3x3 grid */
    :host([orientation="horizontal"]) .item-container {
      grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
      grid-template-rows: minmax(0, 1fr) auto minmax(0, 1fr);
      justify-items: center;
    }

    /* Vertical layout - 3x3 grid */
    /* Vertical layout - Flush alignment */
    :host([orientation="vertical"]) .item-container {
      grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
      grid-template-rows: 0 auto 1fr;
      align-items: start;
      justify-items: center;
    }

    /* Responsive: Apply vertical layout on narrow containers */
    @container (max-width: var(--ag-responsive-mobile-breakpoint, 640px)) {
      :host([responsive][orientation="horizontal"]) .item-container {
        grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
        grid-template-rows: minmax(0, 1fr) auto minmax(0, 1fr);
        align-items: center;
      }
    }

    /* Start slot positioning */
    .ag-start {
      margin: var(--ag-space-1);
      /* Reset line-height for slotted content */
      line-height: normal;
    }

    :host([orientation="horizontal"]) .ag-start {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
      align-self: end;
      justify-self: center;
    }

    :host([orientation="vertical"]) .ag-start {
      grid-column: 1 / 2;
      grid-row: 2 / 4;
      align-self: start;
      justify-self: end;
      margin: 0 var(--ag-space-2) 0 0;
    }

    /* Responsive: Use vertical positioning */
    @container (max-width: var(--ag-responsive-mobile-breakpoint, 640px)) {
      :host([responsive][orientation="horizontal"]) .ag-start {
        grid-column: 1 / 2;
        grid-row: 1 / 4;
        align-self: center;
        justify-self: end;
      }
    }

    /* Marker slot positioning */
    .ag-marker {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      /* Reset line-height for slotted content */
      line-height: normal;
    }

    /* End slot positioning */
    .ag-end {
      margin: var(--ag-space-1);
      /* Reset line-height for slotted content */
      line-height: normal;
    }

    :host([orientation="horizontal"]) .ag-end {
      grid-column: 1 / 4;
      grid-row: 3 / 4;
      align-self: start;
      justify-self: center;
    }

    :host([orientation="vertical"]) .ag-end {
      grid-column: 3 / 4;
      grid-row: 2 / 4;
      align-self: start;
      justify-self: start;
      margin: 0 0 0 var(--ag-space-2);
    }

    /* Responsive: Use vertical positioning */
    @container (max-width: var(--ag-responsive-mobile-breakpoint, 640px)) {
      :host([responsive][orientation="horizontal"]) .ag-end {
        grid-column: 3 / 4;
        grid-row: 1 / 4;
        align-self: center;
        justify-self: start;
      }
    }

    /* Connector lines */
    .connector {
      border: none;
      background: var(--ag-timeline-connector-color, var(--ag-border));
      margin: 0;
    }

    .connector-before {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .connector-after {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }

    /* Horizontal connectors */
    :host([orientation="horizontal"]) .connector {
      width: 100%;
      height: var(--ag-timeline-connector-width, 2px);
    }

    :host([orientation="horizontal"][first]) .connector-before {
      border-radius: var(--ag-radius-full) 0 0 var(--ag-radius-full);
    }

    :host([orientation="horizontal"][last]) .connector-after {
      border-radius: 0 var(--ag-radius-full) var(--ag-radius-full) 0;
    }

    /* Vertical connectors */
    :host([orientation="vertical"]) .connector {
      height: 100%;
      width: var(--ag-timeline-connector-width, 2px);
    }

    :host([orientation="vertical"]) .connector-before {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    :host([orientation="vertical"]) .connector-after {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
      z-index: 0;
    }

    :host([orientation="vertical"][first]) .connector-before {
      border-radius: var(--ag-radius-full) var(--ag-radius-full) 0 0;
    }

    :host([orientation="vertical"][last]) .connector-after {
      border-radius: 0 0 var(--ag-radius-full) var(--ag-radius-full);
    }

    /* Responsive: Use vertical connector positioning */
    @container (max-width: var(--ag-responsive-mobile-breakpoint, 640px)) {
      :host([responsive][orientation="horizontal"]) .connector {
        height: 100%;
        width: var(--ag-timeline-connector-width, 2px);
      }

      :host([responsive][orientation="horizontal"]) .connector-before {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }

      :host([responsive][orientation="horizontal"]) .connector-after {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
      }

      :host([responsive][orientation="horizontal"][first]) .connector-before {
        border-radius: var(--ag-radius-full) var(--ag-radius-full) 0 0;
      }

      :host([responsive][orientation="horizontal"][last]) .connector-after {
        border-radius: 0 0 var(--ag-radius-full) var(--ag-radius-full);
      }
    }

    /* Hide first connector on first item */
    :host([first]) .connector-before {
      display: none;
    }

    /* Hide last connector on last item */
    :host([last]) .connector-after {
      display: none;
    }

    /* Variant colors */
    :host([variant="primary"]) .connector {
      background: var(--ag-primary);
    }

    :host([variant="success"]) .connector {
      background: var(--ag-success);
    }

    :host([variant="warning"]) .connector {
      background: var(--ag-warning);
    }

    :host([variant="danger"]) .connector {
      background: var(--ag-danger);
    }

    :host([variant="monochrome"]) .connector {
      background: var(--ag-text-muted);
    }
  `;

  // ──────────────────────────────────────────────────────────────
  // Main Render
  // ──────────────────────────────────────────────────────────────
  override render() {
    return html`
      <li class="item-container" part="ag-item-container" role="listitem">
        <div class="connector connector-before" part="ag-connector" aria-hidden="true"></div>
        
        <div class="ag-start" part="ag-start">
          <slot name="ag-start"></slot>
        </div>
        
        <div 
          class="ag-marker" 
          part="ag-marker"
          role=${this.markerAriaLabel ? 'img' : nothing}
          aria-label=${this.markerAriaLabel ?? nothing}
        >
          <slot name="ag-marker"></slot>
        </div>
        
        <div class="ag-end" part="ag-end">
          <slot name="ag-end"></slot>
        </div>
        
        <div class="connector connector-after" part="ag-connector" aria-hidden="true"></div>
      </li>
    `;
  }
}
