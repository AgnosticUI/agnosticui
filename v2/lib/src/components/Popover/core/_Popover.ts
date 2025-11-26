import { LitElement, html, css } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { 
  computePosition, 
  autoUpdate, 
  flip, 
  shift, 
  offset, 
  arrow, 
  size,
  type Placement 
} from '@floating-ui/dom';
import '../../shared/CloseButton/CloseButton';

/**
 * Event detail for show event
 */
export interface PopoverShowEventDetail {
  visible: boolean;
}

/**
 * Event detail for hide event
 */
export interface PopoverHideEventDetail {
  visible: boolean;
}

/**
 * Custom event dispatched when the popover is shown
 */
export type PopoverShowEvent = CustomEvent<PopoverShowEventDetail>;

/**
 * Custom event dispatched when the popover is hidden
 */
export type PopoverHideEvent = CustomEvent<PopoverHideEventDetail>;

/**
 * Props interface for Popover component including event handlers
 *
 * @fires {PopoverShowEvent} show - Fired when the popover becomes visible
 * @fires {PopoverHideEvent} hide - Fired when the popover becomes hidden
 *
 * @csspart ag-popover - The main popover container element that displays the content
 * @csspart ag-popover-arrow - The arrow element that points to the trigger element
 * @csspart ag-popover-close - The close button element inside the popover
 * 
 * @cssproperty --ag-popover-min-width - Minimum width of the popover
 * @cssproperty --ag-popover-max-width - Maximum width of the popover
 * @cssproperty --ag-popover-arrow-size - Size of the arrow (width/height)
 */
export interface PopoverProps {
  placement?: Placement;
  distance?: number;
  skidding?: number;
  arrow?: boolean;
  disabled?: boolean;
  /** 
   * Interaction type for triggering the popover
   * @default 'click'
   */
  triggerType?: 'click' | 'hover' | 'focus';
  /** Match the popover's width to the trigger element */
  matchTriggerWidth?: boolean;
  /** Whether to show the close button in the header */
  showCloseButton?: boolean;
  /** Accessible label for the close button */
  closeLabel?: string;
  /** 
   * Whether to trap focus within the popover when open
   * @default false
   */
  trapFocus?: boolean;
  onShow?: (event: PopoverShowEvent) => void;
  onHide?: (event: PopoverHideEvent) => void;
}

export class Popover extends LitElement implements PopoverProps {
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      --ag-popover-min-width: 200px;
      --ag-popover-max-width: 400px;
      --ag-popover-arrow-size: var(--ag-space-2);
    }

    #popover {
      position: absolute;
      z-index: var(--ag-z-index-modal);
      background: var(--ag-background-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      box-shadow: var(--ag-shadow-lg);
      min-width: var(--ag-popover-min-width);
      max-width: var(--ag-popover-max-width);
      opacity: 0;
      transform: scale(0.95);
      transition:
        opacity var(--ag-motion-fast) ease-in-out,
        transform var(--ag-motion-fast) ease-in-out;
      pointer-events: none;
    }

    #popover[data-show] {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    /* Hide header when no title content and no close button */
    :host(:not([has-header])) .popover-header {
      display: none;
    }

    /* Hide body when no content */
    :host(:not([has-content])) .popover-body {
      display: none;
    }

    #arrow {
      /* Base styles for the arrow: a rotated square with borders for the visible edges. */
      position: absolute;
      background: var(--ag-background-primary);
      width: var(--ag-popover-arrow-size);
      height: var(--ag-popover-arrow-size);
      border: var(--ag-border-width-1) solid transparent;
      transform: rotate(45deg);
    }

    /* Placement-specific border colors for the arrow to match the popover border on the visible sides. */
    #popover[data-placement^="top"] #arrow {
      border-bottom-color: var(--ag-border);
      border-right-color: var(--ag-border);
    }

    #popover[data-placement^="right"] #arrow {
      border-bottom-color: var(--ag-border);
      border-left-color: var(--ag-border);
    }

    #popover[data-placement^="bottom"] #arrow {
      border-left-color: var(--ag-border);
      border-top-color: var(--ag-border);
    }

    #popover[data-placement^="left"] #arrow {
      border-top-color: var(--ag-border);
      border-right-color: var(--ag-border);
    }

    .popover-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: var(--ag-space-4) var(--ag-space-4) var(--ag-space-3);
      gap: var(--ag-space-3);
    }

    .popover-title {
      font-weight: var(--ag-font-weight-semibold);
      font-size: var(--ag-font-size-lg);
      margin: 0;
      color: var(--ag-text-primary);
      flex: 1;
    }

    /* Hide placeholder title when empty and no actual title content */
    .popover-title:empty:not(:has(*)) {
      visibility: hidden;
      min-width: 0;
      flex: 0 1 0px;
    }

    .popover-close-wrapper {
      flex-shrink: 0;
      line-height: 1;
      margin: calc(var(--ag-space-2) * -1) calc(var(--ag-space-2) * -1) 0 0;
    }

    .popover-body {
      font-size: var(--ag-font-size-sm);
      line-height: var(--ag-line-height-normal);
      color: var(--ag-text-secondary);
      padding: 0 var(--ag-space-4) var(--ag-space-4);
    }

    .popover-body ::slotted(*) {
      margin: 0 0 var(--ag-space-2) 0;
    }

    .popover-body ::slotted(*:last-child) {
      margin-bottom: 0;
    }

    /* Ensure popover is hidden when not active */
    #popover:not([data-show]) {
      display: none;
    }
  `;

  @property({ type: String, reflect: true })
  placement: Placement = 'bottom';

  @property({ type: Number })
  distance: number = 8;

  @property({ type: Number })
  skidding: number = 0;

  @property({ type: Boolean })
  arrow: boolean = true;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String, attribute: 'trigger-type' })
  triggerType: 'click' | 'hover' | 'focus' = 'click';

  @property({ type: Boolean, attribute: 'match-trigger-width' })
  matchTriggerWidth: boolean = false;

  @property({ type: Boolean, attribute: 'show-close-button' })
  showCloseButton: boolean = true;

  @property({ type: String, attribute: 'close-label' })
  closeLabel: string = 'Close popover';

  @property({ type: Boolean, attribute: 'trap-focus' })
  trapFocus: boolean = false;

  @property({ attribute: false })
  onShow?: (event: PopoverShowEvent) => void;

  @property({ attribute: false })
  onHide?: (event: PopoverHideEvent) => void;

  @state()
  private _open: boolean = false;

  @query('#popover')
  popoverElement: HTMLElement | undefined;

  @query('#arrow')
  arrowElement: HTMLElement | undefined;

  @query('slot[name="trigger"]')
  private _triggerSlot: HTMLSlotElement | undefined;

  private _cleanup: (() => void) | undefined;
  private _clickOutsideHandler?: (event: MouseEvent) => void;
  private _contentObserver: MutationObserver | undefined;
  private _hoverTimeout: number | undefined;

  connectedCallback() {
    super.connectedCallback();
    this._updateSlotStates();
    this._setupContentObservation();
  }

  firstUpdated() {
    // Setup ARIA after first render when slots are assigned
    this._setupARIA();
    // Add trigger event listeners
    this._addTriggerListeners();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanupPositioning();
    this._removeTriggerListeners();
    this._removePopoverListeners();
    this._cleanupContentObservation();
    this._clearHoverTimeout();
  }

  /**
   * Sets up ARIA attributes on the trigger element.
   * @remarks Slot 'trigger' is required; missing it logs a warning and prevents opening.
   */
  private _setupARIA() {
    const triggerElement = this.triggerElement;
    if (triggerElement) {
      triggerElement.setAttribute('aria-expanded', 'false');
      triggerElement.setAttribute('aria-haspopup', 'dialog');
    }
  }

  // Robust trigger element selection using slot assigned elements
  private get triggerElement(): HTMLElement | null {
    if (this._triggerSlot) {
      const assigned = this._triggerSlot.assignedElements({ flatten: true });
      return assigned[0] as HTMLElement || null;
    }
    return null;
  }

  private get _hasTitleSlot(): boolean {
    return !!this.querySelector('[slot="title"]');
  }

  private get _hasContentSlot(): boolean {
    return !!this.querySelector('[slot="content"]');
  }

  private get _hasHeader(): boolean {
    return this._hasTitleSlot || this.showCloseButton;
  }

  private _updateSlotStates() {
    this.toggleAttribute('has-header', this._hasHeader);
    this.toggleAttribute('has-content', this._hasContentSlot);
  }

  /**
   * Sets up content observation for slot changes with limited depth
   * to prevent performance issues in large applications.
   */
  private _setupContentObservation() {
    this._contentObserver = new MutationObserver(() => {
      this._updateSlotStates();
    });

    const contentSlots = this.querySelectorAll('[slot="title"], [slot="content"]');
    contentSlots.forEach(slot => {
      // Limit observation depth to prevent performance issues
      this._contentObserver?.observe(slot, {
        childList: true,
        subtree: false, // Changed from true to false to limit depth
        characterData: true
      });
    });
  }

  private _cleanupContentObservation() {
    this._contentObserver?.disconnect();
    this._contentObserver = undefined;
  }

  private _clearHoverTimeout() {
    if (this._hoverTimeout) {
      clearTimeout(this._hoverTimeout);
      this._hoverTimeout = undefined;
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    // Handle disabled state changes properly
    if (changedProperties.has('disabled') && this.disabled && this._open) {
      this.hide();
    }

    // Update event listeners when trigger type changes
    if (changedProperties.has('triggerType')) {
      this._removeTriggerListeners();
      this._addTriggerListeners();
    }

    // Update slot states when relevant properties change
    if (changedProperties.has('showCloseButton')) {
      this._updateSlotStates();
    }

    if (changedProperties.has('_open')) {
      this._updateARIA();

      if (this._open) {
        // Guard against missing trigger
        if (!this.triggerElement) {
          this._open = false;
          return;
        }

        this._addPopoverListeners();
        this.updateComplete.then(() => {
          this._startPositioning();
        });

        const showEvent = new CustomEvent<PopoverShowEventDetail>('show', {
          detail: { visible: true },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(showEvent);

        if (this.onShow) {
          this.onShow(showEvent);
        }
      } else {
        this._cleanupPositioning();
        this._removePopoverListeners();
        this._clearHoverTimeout();

        const hideEvent = new CustomEvent<PopoverHideEventDetail>('hide', {
          detail: { visible: false },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(hideEvent);

        if (this.onHide) {
          this.onHide(hideEvent);
        }
      }
    }

    // Update popover styles when matchTriggerWidth changes
    if (changedProperties.has('matchTriggerWidth')) {
      this._updatePopoverStyles();
    }
  }

  private _updatePopoverStyles() {
    const popoverElement = this.popoverElement;
    if (!popoverElement) return;

    // If matchTriggerWidth is disabled, ensure we don't have fixed width
    if (!this.matchTriggerWidth) {
      popoverElement.style.width = '';
    }
  }

  private _updateARIA() {
    const triggerElement = this.triggerElement;
    if (triggerElement) {
      triggerElement.setAttribute('aria-expanded', this._open ? 'true' : 'false');
    }
  }

  private _handleTriggerClick = () => {
    if (!this.disabled && this.triggerElement && this.triggerType === 'click') {
      this.toggle();
    }
  };

  private _handleTriggerMouseEnter = () => {
    if (!this.disabled && this.triggerType === 'hover') {
      this._clearHoverTimeout();
      this.show();
    }
  };

  private _handleTriggerMouseLeave = () => {
    if (this.triggerType === 'hover') {
      this._clearHoverTimeout();
      this._hoverTimeout = window.setTimeout(() => {
        this.hide();
      }, 150); // Small delay to prevent flickering
    }
  };

  private _handleTriggerFocus = () => {
    if (!this.disabled && this.triggerType === 'focus') {
      this.show();
    }
  };

  private _handleTriggerBlur = () => {
    if (this.triggerType === 'focus') {
      // Use timeout to allow focus to move to popover content
      this._clearHoverTimeout();
      this._hoverTimeout = window.setTimeout(() => {
        this.hide();
      }, 100);
    }
  };

  private _handleCloseButtonClick = (event: CustomEvent) => {
    event.stopPropagation(); // Prevent bubbling in nested scenarios
    this.hide();
  };

  private _handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this._open) {
      this.hide();
      event.stopPropagation();
    }
  };

  private _handleClickOutside = (event: MouseEvent) => {
    if (!this._open || this.disabled) return;

    const path = event.composedPath();
    const isInsidePopover = this.popoverElement && path.includes(this.popoverElement);
    const isTrigger = this.triggerElement && path.includes(this.triggerElement);

    if (!isInsidePopover && !isTrigger) {
      this.hide();
    }
  };

  private _addTriggerListeners() {
    const triggerElement = this.triggerElement;
    if (triggerElement && !this.disabled) {
      switch (this.triggerType) {
        case 'click':
          triggerElement.addEventListener('click', this._handleTriggerClick);
          break;
        case 'hover':
          triggerElement.addEventListener('mouseenter', this._handleTriggerMouseEnter);
          triggerElement.addEventListener('mouseleave', this._handleTriggerMouseLeave);
          break;
        case 'focus':
          triggerElement.addEventListener('focus', this._handleTriggerFocus);
          triggerElement.addEventListener('blur', this._handleTriggerBlur);
          break;
      }
    }
  }

  private _removeTriggerListeners() {
    const triggerElement = this.triggerElement;
    if (triggerElement) {
      triggerElement.removeEventListener('click', this._handleTriggerClick);
      triggerElement.removeEventListener('mouseenter', this._handleTriggerMouseEnter);
      triggerElement.removeEventListener('mouseleave', this._handleTriggerMouseLeave);
      triggerElement.removeEventListener('focus', this._handleTriggerFocus);
      triggerElement.removeEventListener('blur', this._handleTriggerBlur);
    }
  }

  private _addPopoverListeners() {
    // Add hover listeners to popover to prevent hiding when hovering over popover
    if (this.triggerType === 'hover' && this.popoverElement) {
      this.popoverElement.addEventListener('mouseenter', this._handleTriggerMouseEnter);
      this.popoverElement.addEventListener('mouseleave', this._handleTriggerMouseLeave);
    }

    this.addEventListener('keydown', this._handleKeyDown);

    // Use capture phase to ensure we catch outside clicks
    this._clickOutsideHandler = this._handleClickOutside.bind(this);
    document.addEventListener('click', this._clickOutsideHandler, true);
  }

  private _removePopoverListeners() {
    if (this.popoverElement) {
      this.popoverElement.removeEventListener('mouseenter', this._handleTriggerMouseEnter);
      this.popoverElement.removeEventListener('mouseleave', this._handleTriggerMouseLeave);
    }

    this.removeEventListener('keydown', this._handleKeyDown);

    if (this._clickOutsideHandler) {
      document.removeEventListener('click', this._clickOutsideHandler, true);
    }
  }

  private _startPositioning() {
    const popoverElement = this.popoverElement;
    if (!popoverElement) return;

    const triggerElement = this.triggerElement;
    if (!triggerElement) return;

    this._updatePosition();

    this._cleanup = autoUpdate(triggerElement, popoverElement, () => {
      this._updatePosition();
    });
  }

  private _cleanupPositioning() {
    this._cleanup?.();
    this._cleanup = undefined;
  }

  private async _updatePosition() {
    const popoverElement = this.popoverElement;
    if (!popoverElement) return;

    const triggerElement = this.triggerElement;
    if (!triggerElement) return;

    // Middleware array for Floating UI positioning.
    // Each middleware modifies the behavior or coordinates during positioning.
    const middleware = [];

    // Optional: Match popover width to trigger width if enabled.
    // This must come first for accurate space calculations in later middleware.
    if (this.matchTriggerWidth) {
      middleware.push(
        size({
          apply: ({ rects }) => {
            if (this.popoverElement) {
              this.popoverElement.style.width = `${rects.reference.width}px`;
            }
          }
        })
      );
    }

    // Core positioning middleware:
    // - offset: Applies main/cross axis offsets (distance and skidding).
    // - flip: Auto-flips placement if the popover would overflow the boundary.
    // - shift: Slides the popover along the edge to stay within view, with padding.
    // - size: Sets max width/height based on available space to prevent overflow.
    middleware.push(
      offset({ mainAxis: this.distance, crossAxis: this.skidding }),
      flip(),
      shift({ padding: 8 }),
      size({
        apply: ({ availableWidth, availableHeight, elements }) => {
          Object.assign(elements.floating.style, {
            maxWidth: `${availableWidth}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
      })
    );

    // Optional: Arrow middleware to dynamically position the arrow along the edge.
    // Padding ensures the arrow doesn't overflow the popover's rounded corners.
    if (this.arrow && this.arrowElement) {
      middleware.push(arrow({
        element: this.arrowElement,
        padding: 5 // Adjust this value if arrow placement near corners needs tweaking.
      }));
    }

    try {
      const { x, y, placement, middlewareData } = await computePosition(
        triggerElement,
        popoverElement,
        {
          placement: this.placement,
          middleware,
        }
      );

      // Apply computed position to the popover.
      Object.assign(popoverElement.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      // Set data-placement attribute for CSS to apply placement-specific styles (e.g., arrow border colors).
      popoverElement.dataset.placement = placement;

      // If arrow is enabled and data is available, apply positioning.
      if (this.arrow && this.arrowElement && middlewareData.arrow) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow;

        // Determine the main side of the placement (e.g., 'top', 'bottom').
        const side = placement.split('-')[0] as 'top' | 'right' | 'bottom' | 'left';

        // Map to the static side (opposite side where the arrow is attached).
        const staticSide = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right'
        }[side];

        // Apply styles to the arrow:
        // - Set dynamic axis position from middleware (left/top).
        // - Clear unused sides (right/bottom) to prevent style persistence across updates.
        // - Set static side offset: negative half the arrow's offsetWidth (includes borders) to make it protrude.
        //   Note: For rotated square arrows, this may leave a small gap (~0.207 * size) due to the diagonal protrusion.
        //   If no gap is desired, adjust to `-${this.arrowElement.offsetWidth / Math.sqrt(2)}px`, but test for overlaps.
        Object.assign(this.arrowElement.style, {
          left: arrowX != null ? `${arrowX}px` : '',
          top: arrowY != null ? `${arrowY}px` : '',
          right: '',
          bottom: '',
          [staticSide]: `-${this.arrowElement.offsetWidth / 2}px`,
        });
      }
    } catch {
      // Positioning failed - popover will remain at default position
      // Error is silently handled to avoid console noise
    }
  }

  show() {
    if (this._open || this.disabled || !this.triggerElement) return;
    this._open = true;
  }

  hide() {
    if (!this._open) return;
    this._open = false;

    // Return focus to trigger when closing
    const triggerElement = this.triggerElement;
    if (triggerElement) {
      triggerElement.focus();
    }
  }

  toggle() {
    this._open ? this.hide() : this.show();
  }

  // Public getters for testing
  get isOpen(): boolean {
    return this._open;
  }

  get hasContentSlot(): boolean {
    return this._hasContentSlot;
  }

  get hasTitleSlot(): boolean {
    return this._hasTitleSlot;
  }

  get hasHeader(): boolean {
    return this._hasHeader;
  }

  render() {
    return html`
      <slot name="trigger" @slotchange=${this._updateSlotStates}></slot>

      <div
        id="popover"
        part="ag-popover"
        role="dialog"
        aria-modal="false"
        aria-labelledby=${this._hasTitleSlot ? 'popover-title' : undefined}
        aria-label=${!this._hasTitleSlot ? 'Popover' : undefined}
        ?data-show=${this._open}
      >
        ${this._hasHeader ? html`
          <header class="popover-header">
            ${this._hasTitleSlot ? html`
              <h3 id="popover-title" class="popover-title">
                <slot name="title" @slotchange=${this._updateSlotStates}></slot>
              </h3>
            ` : html`<div class="popover-title"></div>`}
            
            ${this.showCloseButton ? html`
              <div class="popover-close-wrapper">
                <ag-close-button
                  part="ag-popover-close"
                  label=${this.closeLabel}
                  @close-button-click=${this._handleCloseButtonClick}
                ></ag-close-button>
              </div>
            ` : ''}
          </header>
        ` : ''}
        
        ${this._hasContentSlot ? html`
          <div class="popover-body">
            <slot name="content" @slotchange=${this._updateSlotStates}></slot>
          </div>
        ` : ''}
        
        ${this.arrow ? html`<div id="arrow" part="ag-popover-arrow"></div>` : ''}
      </div>
    `;
  }
}
