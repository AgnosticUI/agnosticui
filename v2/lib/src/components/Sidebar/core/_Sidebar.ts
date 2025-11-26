import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { PropertyValues } from 'lit';

/**
 * Event detail interfaces
 */
export interface AgSidebarToggleEventDetail {
  open: boolean;
}

export interface AgSidebarCollapseEventDetail {
  collapsed: boolean;
}

export interface AgSidebarBreakpointChangeEventDetail {
  isMobile: boolean;
  breakpoint: number;
}

export interface AgSidebarProps {
  /** Controls sidebar visibility on mobile (below breakpoint) */
  open?: boolean;
  /** Controls collapsed/rail state (icon-only) */
  collapsed?: boolean;
  /** Sidebar position on the screen */
  position?: 'left' | 'right';
  /** Accessible label for the navigation landmark */
  ariaLabel?: string;
  /** Pixel width below which mobile overlay behavior activates */
  breakpoint?: number;
  /** Visual style variant */
  variant?: 'default' | 'bordered' | 'elevated';
  /** Disable animations (respects prefers-reduced-motion) */
  noTransition?: boolean;
  /** Custom width (writes to CSS variable) */
  width?: string;
  /** Callback fired when sidebar open state changes */
  onToggle?: (event: AgSidebarToggleEvent) => void;
  /** Callback fired when sidebar collapsed state changes */
  onCollapse?: (event: AgSidebarCollapseEvent) => void;
  /** Callback fired when breakpoint is crossed */
  onBreakpointChange?: (event: AgSidebarBreakpointChangeEvent) => void;
}

/**
 * Event type aliases
 */
export type AgSidebarToggleEvent = CustomEvent<AgSidebarToggleEventDetail>;
export type AgSidebarCollapseEvent = CustomEvent<AgSidebarCollapseEventDetail>;
export type AgSidebarBreakpointChangeEvent = CustomEvent<AgSidebarBreakpointChangeEventDetail>;


/**
 * AgSidebar - Flexible, accessible sidebar navigation component
 * 
 * @element ag-sidebar
 * 
 * @slot - Main navigation content
 * @slot ag-header - Optional header content (logo, title)
 * @slot ag-toggle-icon - Override the built-in collapse toggle icon
 * @slot ag-footer - Optional footer content (user profile, settings)
 * 
 * @fires ag-sidebar-toggle - Dispatched when sidebar open state changes (mobile)
 * @fires ag-sidebar-collapse - Dispatched when sidebar collapsed state changes (desktop)
 * @fires ag-sidebar-breakpoint-change - Dispatched when viewport crosses breakpoint
 * 
 * @csspart ag-sidebar-container - The main sidebar container
 * @csspart ag-sidebar-nav - The navigation landmark
 * @csspart ag-sidebar-toggle-wrapper - Wrapper for toggle button slot
 * @csspart ag-sidebar-toggle-button - Built-in collapse toggle button
 * @csspart ag-sidebar-toggle-icon - Wrapper for the toggle icon
 * @csspart ag-sidebar-header - Header slot wrapper
 * @csspart ag-sidebar-content - Main content slot wrapper
 * @csspart ag-sidebar-footer - Footer slot wrapper
 * @csspart ag-sidebar-backdrop - Overlay backdrop (mobile only)
 * 
 * @cssprop --ag-sidebar-width - Width of expanded sidebar (default: 16rem)
 * @cssprop --ag-sidebar-width-collapsed - Width of collapsed/rail sidebar (default: 4rem)
 * @cssprop --ag-sidebar-width-mobile - Width of mobile overlay (default: 85vw)
 * @cssprop --ag-sidebar-padding - Internal padding (default: var(--ag-space-4))
 * @cssprop --ag-sidebar-background - Background color (default: var(--ag-background-primary))
 * @cssprop --ag-sidebar-border - Border color (default: var(--ag-border))
 * @cssprop --ag-sidebar-z-index - Z-index for mobile overlay (default: 1000)
 */
export class AgSidebar extends LitElement implements AgSidebarProps {
  static styles = css`
    :host {
      display: block;
      position: relative;
      
      /* Width tokens */
      --ag-sidebar-width: var(--ag-sidebar-width-base, 16rem);
      --ag-sidebar-width-collapsed: var(--ag-sidebar-width-collapsed-base, 4rem);
      --ag-sidebar-width-mobile: var(--ag-sidebar-width-mobile-base, 85vw);
      
      /* Spacing tokens */
      --ag-sidebar-padding: var(--ag-space-4, 1rem);
      --ag-sidebar-item-padding: var(--ag-space-3, 0.75rem);
      --ag-sidebar-section-gap: var(--ag-space-6, 1.5rem);
      
      /* Colors */
      --ag-sidebar-background: var(--ag-background-primary, #ffffff);
      --ag-sidebar-border: var(--ag-border, #e5e7eb);
      --ag-sidebar-item-hover: var(--ag-background-secondary, #f3f4f6);
      --ag-sidebar-item-active: var(--ag-primary, #3b82f6);
      
      /* Transitions */
      --ag-sidebar-transition-duration: var(--ag-motion-duration-normal, 200ms);
      --ag-sidebar-transition-easing: var(--ag-motion-easing-standard, ease-in-out);
      
      /* Z-index */
      --ag-sidebar-z-index: var(--ag-z-sidebar, 1000);
      --ag-sidebar-backdrop-z-index: var(--ag-z-sidebar-backdrop, 999);
    }

    /* Backdrop for mobile overlay */
    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: var(--ag-sidebar-backdrop-z-index);
      opacity: 0;
      transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }

    :host([data-mobile][open]) .backdrop {
      display: block;
      opacity: 1;
    }

    /* Main sidebar container */
    .sidebar-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--ag-sidebar-background);
      transition: 
        width var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing),
        transform var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }

    /* No transition mode */
    :host([no-transition]) .sidebar-container {
      transition: none;
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      .sidebar-container,
      .backdrop,
      .toggle-icon {
        transition: none;
      }
    }

    /* Desktop: persistent sidebar (default) */
    @media (min-width: 1024px) {
      .sidebar-container {
        position: relative;
        width: var(--ag-sidebar-width);
        transform: none;
      }

      /* Collapsed/rail mode on desktop */
      :host([collapsed]) .sidebar-container {
        width: var(--ag-sidebar-width-collapsed);
      }
    }

    /* Mobile: overlay drawer */
    @media (max-width: 1023px) {
      .sidebar-container {
        position: fixed;
        top: 0;
        bottom: 0;
        width: var(--ag-sidebar-width-mobile);
        z-index: var(--ag-sidebar-z-index);
        transform: translateX(-100%);
      }

      /* Left position (default) */
      :host([position="left"]) .sidebar-container {
        left: 0;
        transform: translateX(-100%);
      }

      /* Right position */
      :host([position="right"]) .sidebar-container {
        right: 0;
        left: auto;
        transform: translateX(100%);
      }

      /* Open state */
      :host([data-mobile][open]) .sidebar-container {
        transform: translateX(0);
      }

      /* Override collapsed width on mobile */
      :host([collapsed]) .sidebar-container {
        width: var(--ag-sidebar-width-mobile);
      }
    }

    /* Navigation landmark */
    nav {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: var(--ag-sidebar-padding);
      overflow-y: auto;
      overflow-x: hidden;
    }

    /* Variant: bordered */
    :host([variant="bordered"]) .sidebar-container {
      border-right: 1px solid var(--ag-sidebar-border);
    }

    :host([variant="bordered"][position="right"]) .sidebar-container {
      border-right: none;
      border-left: 1px solid var(--ag-sidebar-border);
    }

    /* Variant: elevated */
    :host([variant="elevated"]) .sidebar-container {
      box-shadow: var(--ag-shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
    }

    /* Toggle button wrapper */
    .toggle-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-bottom: var(--ag-space-4, 1rem);
    }

    /* Hide toggle button on mobile */
    @media (max-width: 1023px) {
      .toggle-wrapper {
        display: none;
      }
    }

    /* Built-in toggle button */
    .toggle-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      padding: 0;
      border: 1px solid var(--ag-sidebar-border);
      border-radius: var(--ag-radius-md, 0.375rem);
      background: var(--ag-sidebar-background);
      color: var(--ag-text-primary, #111827);
      cursor: pointer;
      transition: all var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }

    .toggle-icon {
      display: inline-flex;
      transition: transform var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }

    :host([collapsed]) .toggle-icon {
      transform: rotate(180deg);
    }

    .toggle-button:hover {
      background: var(--ag-sidebar-item-hover);
    }

    .toggle-button:focus-visible {
      outline: 2px solid var(--ag-primary, #3b82f6);
      outline-offset: 2px;
    }

    /* Header, content, footer slots */
    .header,
    .content,
    .footer {
      display: contents;
    }

    .footer {
      margin-top: auto;
    }
  `;

  /**
   * Controls sidebar visibility on mobile (below breakpoint)
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  /**
   * Controls collapsed/rail state on desktop
   */
  @property({ type: Boolean, reflect: true })
  collapsed = false;

  /**
   * Sidebar position (left or right)
   */
  @property({ type: String, reflect: true })
  position: 'left' | 'right' = 'left';

  /**
   * Accessible label for the navigation landmark
   */
  @property({ type: String, attribute: 'aria-label' })
  ariaLabel = 'Navigation';

  /**
   * Pixel width below which mobile overlay behavior activates
   */
  @property({ type: Number })
  breakpoint = 1024;

  /**
   * Visual style variant
   */
  @property({ type: String, reflect: true })
  variant: 'default' | 'bordered' | 'elevated' = 'default';

  /**
   * Disable animations
   */
  @property({ type: Boolean, attribute: 'no-transition', reflect: true })
  noTransition = false;

  /**
   * Optional width override (writes to CSS variable)
   */
  @property({ type: String })
  width?: string;

  /**
   * Callback fired when sidebar open state changes
   */
  @property({ attribute: false })
  onToggle?: (event: AgSidebarToggleEvent) => void;

  /**
   * Callback fired when sidebar collapsed state changes
   */
  @property({ attribute: false })
  onCollapse?: (event: AgSidebarCollapseEvent) => void;

  /**
   * Callback fired when breakpoint is crossed
   */
  @property({ attribute: false })
  onBreakpointChange?: (event: AgSidebarBreakpointChangeEvent) => void;

  /**
   * Internal state: whether viewport is below breakpoint
   */
  @state()
  private _isMobile = false;

  /**
   * Reference to main content for focus trap
   */
  private _mainContentRef?: HTMLElement;

  /**
   * Resize handler with debouncing
   */
  private _resizeTimeout?: number;

  override connectedCallback() {
    super.connectedCallback();
    this._updateMobileState();
    window.addEventListener('resize', this._handleResize);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._handleResize);
    document.removeEventListener('keydown', this._handleKeydown);
    if (this._resizeTimeout) {
      clearTimeout(this._resizeTimeout);
    }
  }

  override willUpdate(changedProperties: PropertyValues) {
    // Handle width prop
    if (changedProperties.has('width') && this.width) {
      this.style.setProperty('--ag-sidebar-width', this.width);
    }

    // Validate breakpoint
    if (changedProperties.has('breakpoint')) {
      if (this.breakpoint <= 0) {
        // eslint-disable-next-line no-console
        console.warn('ag-sidebar: breakpoint must be a positive number');
        this.breakpoint = 1024;
      }
    }

    // Handle focus trap for mobile overlay
    if (changedProperties.has('open')) {
      if (this.open && this._isMobile) {
        document.addEventListener('keydown', this._handleKeydown);
        this.updateComplete.then(() => this._trapFocus());
      } else {
        document.removeEventListener('keydown', this._handleKeydown);
        this._releaseFocus();
      }
    }

    // Update data-mobile attribute for CSS
    if (changedProperties.has('_isMobile')) {
      if (this._isMobile) {
        this.setAttribute('data-mobile', '');
      } else {
        this.removeAttribute('data-mobile');
      }
    }
  }

  /**
   * Update mobile state based on viewport width
   */
  private _updateMobileState(): boolean {
    const wasMobile = this._isMobile;
    this._isMobile = window.innerWidth < this.breakpoint;
    return wasMobile !== this._isMobile;
  }

  /**
   * Handle window resize with debouncing
   */
  private _handleResize = () => {
    if (this._resizeTimeout) {
      clearTimeout(this._resizeTimeout);
    }

    this._resizeTimeout = window.setTimeout(() => {
      if (this._updateMobileState()) {
        this._handleBreakpointTransition();
        this._dispatchBreakpointChange();
      }
    }, 100);
  };

  /**
   * Auto-reset conflicting states when crossing breakpoint
   */
  private _handleBreakpointTransition() {
    if (this._isMobile) {
      // Desktop → Mobile transition
      // Close overlay and disable collapsed (mobile doesn't use rail mode)
      this.open = false;
      this.collapsed = false;
    } else {
      // Mobile → Desktop transition
      // Close overlay but preserve collapsed state
      this.open = false;
    }
  }

  /**
   * Dispatch breakpoint change event
   */
  private _dispatchBreakpointChange() {
    const event = new CustomEvent<AgSidebarBreakpointChangeEventDetail>(
      'ag-sidebar-breakpoint-change',
      {
        detail: {
          isMobile: this._isMobile,
          breakpoint: this.breakpoint,
        },
        bubbles: true,
        composed: true,
      }
    );
    this.dispatchEvent(event);

    if (this.onBreakpointChange) {
      this.onBreakpointChange(event);
    }
  }

  /**
   * Handle backdrop click (mobile only)
   */
  private _handleBackdropClick = () => {
    if (this._isMobile && this.open) {
      this.open = false;
      this._dispatchToggleEvent();
    }
  };

  /**
   * Handle escape key (mobile only)
   */
  private _handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this._isMobile && this.open) {
      event.preventDefault();
      this.open = false;
      this._dispatchToggleEvent();
    }
  };

  /**
   * Handle collapse toggle (desktop only)
   */
  private _handleToggleCollapsed = () => {
    if (!this._isMobile) {
      this.collapsed = !this.collapsed;
      this._dispatchCollapseEvent();
    }
  };

  /**
   * Dispatch toggle event
   */
  private _dispatchToggleEvent() {
    const event = new CustomEvent<AgSidebarToggleEventDetail>(
      'ag-sidebar-toggle',
      {
        detail: { open: this.open },
        bubbles: true,
        composed: true,
      }
    );
    this.dispatchEvent(event);

    if (this.onToggle) {
      this.onToggle(event);
    }
  }

  /**
   * Dispatch collapse event
   */
  private _dispatchCollapseEvent() {
    const event = new CustomEvent<AgSidebarCollapseEventDetail>(
      'ag-sidebar-collapse',
      {
        detail: { collapsed: this.collapsed },
        bubbles: true,
        composed: true,
      }
    );
    this.dispatchEvent(event);

    if (this.onCollapse) {
      this.onCollapse(event);
    }
  }

  /**
   * Find main content element for focus trap
   */
  private _findMainContent(): HTMLElement | null {
    return (
      this.closest('main') ||
      this.parentElement?.querySelector('main') ||
      document.querySelector('main') ||
      document.body
    );
  }

  /**
   * Trap focus in sidebar when mobile overlay is open
   */
  private _trapFocus() {
    const mainContent = this._findMainContent();
    if (mainContent && mainContent !== this && !mainContent.contains(this)) {
      mainContent.setAttribute('inert', '');
      this._mainContentRef = mainContent;
    }

    // Focus first interactive element
    const firstFocusable = this.shadowRoot?.querySelector(
      'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;
    firstFocusable?.focus();
  }

  /**
   * Release focus trap
   */
  private _releaseFocus() {
    if (this._mainContentRef) {
      this._mainContentRef.removeAttribute('inert');
      this._mainContentRef = undefined;
    }

    // Return focus to trigger button if it exists
    const trigger = document.querySelector(
      '[data-sidebar-trigger]'
    ) as HTMLElement;
    trigger?.focus();
  }

  private _renderToggleIcon() {
    return html`
      <svg
        class="toggle-icon"
        part="ag-sidebar-toggle-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m15 6-6 6 6 6"></path>
      </svg>
    `;
  }

  override render() {
    const showBackdrop = this._isMobile && this.open;

    return html`
      ${showBackdrop
        ? html`
            <div
              part="ag-sidebar-backdrop"
              class="backdrop"
              @click=${this._handleBackdropClick}
              aria-hidden="true"
            ></div>
          `
        : nothing}

      <aside part="ag-sidebar-container" class="sidebar-container" role="none">
        <nav part="ag-sidebar-nav" aria-label=${this.ariaLabel}>
          <div part="ag-sidebar-toggle-wrapper" class="toggle-wrapper">
            <button
              part="ag-sidebar-toggle-button"
              class="toggle-button"
              aria-label=${this.collapsed
                ? 'Expand sidebar'
                : 'Collapse sidebar'}
              aria-expanded=${!this.collapsed}
              @click=${this._handleToggleCollapsed}
            >
              <slot name="ag-toggle-icon">
                ${this._renderToggleIcon()}
              </slot>
            </button>
          </div>

          <div part="ag-sidebar-header" class="header">
            <slot name="ag-header"></slot>
          </div>

          <div part="ag-sidebar-content" class="content">
            <slot></slot>
          </div>

          <div part="ag-sidebar-footer" class="footer">
            <slot name="ag-footer"></slot>
          </div>
        </nav>
      </aside>
    `;
  }
}
