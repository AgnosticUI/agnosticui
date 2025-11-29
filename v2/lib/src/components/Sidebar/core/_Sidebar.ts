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

/**
 * Prop definitions
 */
export interface AgSidebarProps {
  open?: boolean;
  collapsed?: boolean;
  position?: 'left' | 'right';
  ariaLabel?: string;
  breakpoint?: number;
  variant?: 'default' | 'bordered' | 'elevated';
  noTransition?: boolean;
  width?: string;
  showMobileToggle?: boolean;
  mobileTogglePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  onToggle?: (event: AgSidebarToggleEvent) => void;
  onCollapse?: (event: AgSidebarCollapseEvent) => void;
  onBreakpointChange?: (event: AgSidebarBreakpointChangeEvent) => void;
}

/**
 * Event type aliases
 */
export type AgSidebarToggleEvent = CustomEvent<AgSidebarToggleEventDetail>;
export type AgSidebarCollapseEvent = CustomEvent<AgSidebarCollapseEventDetail>;
export type AgSidebarBreakpointChangeEvent = CustomEvent<AgSidebarBreakpointChangeEventDetail>;

/**
 * AgSidebar - A self-contained, accessible sidebar navigation component.
 *
 * @element ag-sidebar
 * @slot header - Content for the sidebar's header section.
 * @slot - Default slot for the main navigation items (`.nav-menu`).
 * @slot footer - Content for the sidebar's footer section.
 *
 * @fires ag-sidebar-toggle - When the mobile drawer opens or closes.
 * @fires ag-sidebar-collapse - When the desktop rail mode is toggled.
 * @fires ag-sidebar-breakpoint-change - When the viewport crosses the breakpoint.
 *
 * @csspart ag-sidebar-container - The main `<aside>` container.
 * @csspart ag-sidebar-header - The header section wrapper.
 * @csspart ag-sidebar-content - The scrollable main content section.
 * @csspart ag-sidebar-footer - The footer section wrapper.
 * @csspart ag-sidebar-backdrop - The mobile overlay backdrop.
 * @csspart ag-sidebar-toggle-button - The floating toggle button.
 */
export class AgSidebar extends LitElement implements AgSidebarProps {
  static styles = css`
    :host {
      display: block;
      position: relative;
      /* CSS tokens - simplified to one width for expanded, one for collapsed */
      --ag-sidebar-width: var(--ag-sidebar-width-base, 18rem);
      --ag-sidebar-width-collapsed: var(--ag-sidebar-width-collapsed-base, 3rem);
      --ag-sidebar-padding: var(--ag-space-2, 0.5rem);
      --ag-sidebar-background: var(--ag-background-primary, #ffffff);
      --ag-sidebar-border: var(--ag-border, #e5e7eb);
      --ag-sidebar-transition-duration: var(--ag-motion-duration-normal, 200ms);
      --ag-sidebar-transition-easing: var(--ag-motion-easing-standard, ease-in-out);
      --ag-sidebar-z-index: var(--ag-z-sidebar, 1000);
      --ag-sidebar-backdrop-z-index: var(--ag-z-sidebar-backdrop, 999);
      --ag-sidebar-toggle-z-index: var(--ag-z-sidebar-toggle, 1001);
    }

    .sidebar-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--ag-sidebar-background);
      border-right: 1px solid var(--ag-sidebar-border);
    }
    
    :host([position="right"]) .sidebar-container {
      border-right: none;
      border-left: 1px solid var(--ag-sidebar-border);
    }

    .sidebar-header, .sidebar-footer {
      padding: var(--ag-space-2) var(--ag-space-4);
      flex-shrink: 0;
    }
    .sidebar-header {
      border-bottom: 1px solid var(--ag-sidebar-border);
    }
    .sidebar-footer {
      border-top: 1px solid var(--ag-sidebar-border);
    }

    .sidebar-content {
      flex: 1;
      overflow-y: auto;
      padding: var(--ag-sidebar-padding);
    }

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

    /* Toggle Button Styles */
    .toggle-button {
      display: none;
      position: fixed;
      width: var(--ag-space-7);
      height: var(--ag-space-7);
      border-radius: 50%;
      background: var(--ag-sidebar-background);
      border: 1px solid var(--ag-sidebar-border);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      z-index: var(--ag-sidebar-toggle-z-index);
      align-items: center;
      justify-content: center;
      transition: transform var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing),
                  opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }

    .toggle-button:hover {
      background: var(--ag-background-hover, #f3f4f6);
    }

    .toggle-button:active {
      transform: scale(0.95);
    }

    .toggle-button svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    /* Position variants */
    .toggle-button.top-left { top: var(--ag-space-4); left: var(--ag-space-4); }
    .toggle-button.top-right { top: var(--ag-space-4); right: var(--ag-space-4); }
    .toggle-button.bottom-left { bottom: var(--ag-space-4); left: var(--ag-space-4); }
    .toggle-button.bottom-right { bottom: var(--ag-space-4); right: var(--ag-space-4); }

    /* ===========================================
       DESKTOP MODE (data-mobile NOT present)
       Always 18rem or 4rem (collapsed)
       =========================================== */
    :host(:not([data-mobile])) .sidebar-container {
      position: relative;
      width: var(--ag-sidebar-width);
      transition: width var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }
    
    :host(:not([data-mobile])[collapsed]) .sidebar-container {
      width: var(--ag-sidebar-width-collapsed);
    }

    /* ===========================================
       MOBILE MODE (data-mobile present)
       Same 18rem width, just positioned as overlay
       =========================================== */
    :host([data-mobile]) .sidebar-container {
      position: fixed;
      top: 0;
      bottom: 0;
      width: var(--ag-sidebar-width);
      z-index: var(--ag-sidebar-z-index);
      transition: transform var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }
    
    :host([data-mobile][position="left"]) .sidebar-container {
      left: 0;
      transform: translateX(-100%);
    }
    
    :host([data-mobile][position="right"]) .sidebar-container {
      right: 0;
      left: auto;
      transform: translateX(100%);
    }
    
    :host([data-mobile][open]) .sidebar-container {
      transform: translateX(0);
    }

    /* Show toggle button only on mobile when showMobileToggle is true */
    :host([data-mobile][show-mobile-toggle]) .toggle-button {
      display: flex;
    }

    /* Hide button when sidebar is open */
    :host([data-mobile][show-mobile-toggle][open]) .toggle-button {
      opacity: 0;
      pointer-events: none;
    }

    @media (prefers-reduced-motion: reduce) {
      .sidebar-container, .backdrop, .toggle-button {
        transition: none;
      }
    }
  `;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean, reflect: true }) collapsed = false;
  @property({ type: String, reflect: true }) position: 'left' | 'right' = 'left';
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = 'Navigation';
  @property({ type: Number }) breakpoint = 1024;
  @property({ type: String, reflect: true }) variant: 'default' | 'bordered' | 'elevated' = 'default';
  @property({ type: Boolean, attribute: 'no-transition', reflect: true }) noTransition = false;
  @property({ type: String }) width?: string;
  @property({ type: Boolean, attribute: 'show-mobile-toggle', reflect: true }) showMobileToggle = true;
  @property({ type: String, attribute: 'mobile-toggle-position' }) mobileTogglePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-left';
  @property({ attribute: false }) onToggle?: (event: AgSidebarToggleEvent) => void;
  @property({ attribute: false }) onCollapse?: (event: AgSidebarCollapseEvent) => void;
  @property({ attribute: false }) onBreakpointChange?: (event: AgSidebarBreakpointChangeEvent) => void;

  @state() private _isMobile = false;
  private _mainContentRef?: HTMLElement;
  private _resizeTimeout?: number;
  private _lastDesktopCollapsedState = false;
  
  /**
   * Toggle the collapsed state (desktop rail mode)
   * Exposed as a public method so consumers can call it from their own buttons
   */
  public toggleCollapse() {
    this.collapsed = !this.collapsed;
    this._dispatchCollapseEvent();
  }

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
    if (changedProperties.has('width') && this.width) {
      this.style.setProperty('--ag-sidebar-width', this.width);
    }
    if (changedProperties.has('breakpoint')) {
      if (this.breakpoint <= 0) {
        this.breakpoint = 1024;
      }
    }
    if (changedProperties.has('open')) {
      if (this.open && this._isMobile) {
        document.addEventListener('keydown', this._handleKeydown);
        this.updateComplete.then(() => this._trapFocus());
      } else {
        document.removeEventListener('keydown', this._handleKeydown);
        this._releaseFocus();
      }
    }
    if (changedProperties.has('_isMobile')) {
      if (this._isMobile) {
        this.setAttribute('data-mobile', '');
      } else {
        this.removeAttribute('data-mobile');
      }
    }
  }

  private _updateMobileState(): boolean {
    const wasMobile = this._isMobile;
    this._isMobile = window.innerWidth < this.breakpoint;
    return wasMobile !== this._isMobile;
  }

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

  private _handleBreakpointTransition() {
    if (this._isMobile) {
      // Entering mobile: save current collapsed state, then reset
      this._lastDesktopCollapsedState = this.collapsed;
      this.open = false;
      this.collapsed = false;
    } else {
      // Entering desktop: restore last collapsed state
      this.collapsed = this._lastDesktopCollapsedState;
      this.open = false;
    }
  }

  private _dispatchBreakpointChange() {
    const event = new CustomEvent<AgSidebarBreakpointChangeEventDetail>('ag-sidebar-breakpoint-change', {
      detail: { isMobile: this._isMobile, breakpoint: this.breakpoint },
      bubbles: true, composed: true,
    });
    this.dispatchEvent(event);
    this.onBreakpointChange?.(event);
  }

  private _handleBackdropClick = () => {
    if (this._isMobile && this.open) {
      this.open = false;
      this._dispatchToggleEvent();
    }
  };

  private _handleToggleClick = () => {
    this.open = !this.open;
    this._dispatchToggleEvent();
  };

  private _handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this._isMobile && this.open) {
      event.preventDefault();
      this.open = false;
      this._dispatchToggleEvent();
    }
  };

  private _dispatchToggleEvent() {
    const event = new CustomEvent<AgSidebarToggleEventDetail>('ag-sidebar-toggle', {
      detail: { open: this.open },
      bubbles: true, composed: true,
    });
    this.dispatchEvent(event);
    this.onToggle?.(event);
  }

  private _dispatchCollapseEvent() {
    const event = new CustomEvent<AgSidebarCollapseEventDetail>('ag-sidebar-collapse', {
      detail: { collapsed: this.collapsed },
      bubbles: true, composed: true,
    });
    this.dispatchEvent(event);
    this.onCollapse?.(event);
  }

  private _findMainContent(): HTMLElement | null {
    return (this.closest('main') || this.parentElement?.querySelector('main') || document.querySelector('main') || document.body);
  }

  private _trapFocus() {
    const mainContent = this._findMainContent();
    if (mainContent && mainContent !== this && !mainContent.contains(this)) {
      mainContent.setAttribute('inert', '');
      this._mainContentRef = mainContent;
    }
    this.updateComplete.then(() => {
      const firstFocusable = this.shadowRoot?.querySelector('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])') as HTMLElement;
      firstFocusable?.focus();
    });
  }

  private _releaseFocus() {
    if (this._mainContentRef) {
      this._mainContentRef.removeAttribute('inert');
      this._mainContentRef = undefined;
    }
  }

  private _handleSlotClick(event: Event) {
    const target = event.target as HTMLElement;
    const button = target.closest('.nav-button');
    if (button && button.hasAttribute('aria-expanded')) {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isExpanded));

      const submenu = button.nextElementSibling;
      if (submenu && submenu.tagName === 'AG-SIDEBAR-NAV-SUBMENU') {
        if (isExpanded) {
          submenu.removeAttribute('open');
        } else {
          submenu.setAttribute('open', '');
        }
      }
    }
  }

  private _renderToggleIcon() {
    // Custom panel icon for mobile toggle
    return html`
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7314 1.00488C16.109 1.11926 18 2.98393 18 5.2666V12.7334C18 15.0898 15.9853 17 13.5 17H4.5C2.09247 17 0.126505 15.2074 0.00585938 12.9531L0 12.7334V5.2666C3.72355e-05 2.91022 2.01474 1 4.5 1H13.5L13.7314 1.00488ZM4.5 2.33301C2.79139 2.33301 1.40629 3.6466 1.40625 5.2666V12.7334C1.40629 14.3534 2.79139 15.667 4.5 15.667H4.625V2.33301H4.5ZM6.03125 15.667H13.5C15.2086 15.667 16.5937 14.3534 16.5938 12.7334V5.2666C16.5937 3.6466 15.2086 2.33301 13.5 2.33301H6.03125V15.667Z" fill="currentColor"/>
      </svg>
    `;
  }

  override render() {
    const showBackdrop = this._isMobile && this.open;

    return html`
      ${showBackdrop ? html`<div part="ag-sidebar-backdrop" class="backdrop" @click=${this._handleBackdropClick} aria-hidden="true"></div>` : nothing}
      
      ${this.showMobileToggle ? html`
        <button
          part="ag-sidebar-toggle-button"
          class="toggle-button ${this.mobileTogglePosition}"
          @click=${this._handleToggleClick}
          aria-label="${this.open ? 'Close sidebar' : 'Open sidebar'}"
          aria-expanded="${this.open}"
        >
          ${this._renderToggleIcon()}
        </button>
      ` : nothing}

      <aside part="ag-sidebar-container" class="sidebar-container" aria-label=${this.ariaLabel}>
        <div part="ag-sidebar-header" class="sidebar-header">
          <slot name="header"></slot>
        </div>
        <div part="ag-sidebar-content" class="sidebar-content" @click=${this._handleSlotClick}>
          <slot></slot>
        </div>
        <div part="ag-sidebar-footer" class="sidebar-footer">
          <slot name="footer"></slot>
        </div>
      </aside>
    `;
  }
}
