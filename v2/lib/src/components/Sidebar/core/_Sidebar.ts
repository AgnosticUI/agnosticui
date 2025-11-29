import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
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
  showHeaderToggle?: boolean;
  onToggle?: (event: AgSidebarToggleEvent) => void;
  onCollapse?: (event: AgSidebarCollapseEvent) => void;
}

/**
 * Event type aliases
 */
export type AgSidebarToggleEvent = CustomEvent<AgSidebarToggleEventDetail>;
export type AgSidebarCollapseEvent = CustomEvent<AgSidebarCollapseEventDetail>;

/**
 * AgSidebar - A self-contained, accessible sidebar navigation component.
 * 
 * Provides a responsive sidebar with mobile overlay and desktop rail/collapse modes.
 * Supports customizable header, navigation content, and footer sections with full
 * keyboard navigation and focus management.
 * 
 * @element ag-sidebar
 * 
 * @slot header - Header content area for logo, title, or actions. When `collapsed` is true on desktop, content fades out but slot remains in DOM for accessibility. If provided, overrides composable header slots (header-start, header-end, header-toggle).
 * @slot header-start - Left side of header for logo or title. Hidden when sidebar is collapsed. Ignored if `header` slot has content.
 * @slot header-end - Right side of header for action buttons. Always visible, even when collapsed. Ignored if `header` slot has content.
 * @slot header-toggle - Specific slot for custom toggle button in header. Auto-positioned at the end. Ignored if `header` slot has content.
 * @slot - Default slot for main navigation content. Use `<ag-sidebar-nav>` component for structured navigation with proper aria attributes.
 * @slot footer - Footer content area for copyright info, version numbers, or help links. Remains visible when sidebar is collapsed, content should be icon-only or very compact.
 * @slot ag-toggle-icon - Customizes the floating mobile toggle button icon and header toggle icon. Must be an SVG element sized 18x18px. Falls back to built-in panel icon if not provided.
 * 
 * @fires ag-sidebar-toggle - Fired when sidebar open/close state changes (mobile overlay). Detail: `{ open: boolean }`
 * @fires ag-sidebar-collapse - Fired when sidebar expanded/collapsed state changes (desktop rail). Detail: `{ collapsed: boolean }`
 * 
 * @csspart ag-sidebar-backdrop - The backdrop overlay shown on mobile when sidebar is open
 * @csspart ag-sidebar-toggle-button - The floating toggle button shown on mobile (when `show-mobile-toggle` is true)
 * @csspart ag-sidebar-container - The main sidebar container element (aside)
 * @csspart ag-sidebar-header - The header section wrapper
 * @csspart ag-sidebar-header-toggle - The collapse/expand toggle button in header (when `show-header-toggle` is true)
 * @csspart ag-sidebar-content - The main content scrollable area
 * @csspart ag-sidebar-footer - The footer section wrapper
 * 
 * @cssprop --ag-sidebar-width - Width of expanded sidebar. Default: `18rem`
 * @cssprop --ag-sidebar-width-collapsed - Width of collapsed sidebar (rail mode). Default: `3rem`
 * @cssprop --ag-sidebar-padding - Internal padding for content area. Default: `0.5rem`
 * @cssprop --ag-sidebar-background - Background color of sidebar. Default: `#ffffff`
 * @cssprop --ag-sidebar-border - Border color. Default: `#e5e7eb`
 * @cssprop --ag-sidebar-transition-duration - Animation duration for state changes. Default: `200ms`
 * @cssprop --ag-sidebar-transition-easing - Animation easing function. Default: `ease-in-out`
 * @cssprop --ag-sidebar-z-index - Z-index for sidebar container on mobile. Default: `1000`
 * @cssprop --ag-sidebar-backdrop-z-index - Z-index for backdrop overlay on mobile. Default: `999`
 * @cssprop --ag-sidebar-toggle-z-index - Z-index for floating toggle button. Default: `1001`
 * @cssprop --ag-sidebar-breakpoint - Breakpoint for mobile/desktop behavior. Default: `1024px`
 * 
 * @example
 * ```html
 * <ag-sidebar>
 *   <div slot="header">
 *     <h1>My App</h1>
 *   </div>
 *   
 *   <ag-sidebar-nav>
 *     <ag-sidebar-nav-item href="/">Home</ag-sidebar-nav-item>
 *     <ag-sidebar-nav-item href="/about">About</ag-sidebar-nav-item>
 *   </ag-sidebar-nav>
 *   
 *   <div slot="footer">
 *     <p>© 2024 Company</p>
 *   </div>
 * </ag-sidebar>
 * ```
 * 
 * @example
 * ```html
 * <!-- Composable header slots (automatic layout) -->
 * <ag-sidebar>
 *   <h2 slot="header-start">My App</h2>
 *   <button slot="header-end">Settings</button>
 *   <button slot="header-toggle" @click=${handleToggle}>
 *     ${PanelIcon()}
 *   </button>
 * </ag-sidebar>
 * ```
 * 
 * @example
 * ```html
 * <!-- Custom toggle icon -->
 * <ag-sidebar show-header-toggle>
 *   <svg slot="ag-toggle-icon" width="18" height="18" viewBox="0 0 18 18">
 *     <path d="M3 9h12M3 5h12M3 13h12" stroke="currentColor"/>
 *   </svg>
 *   <div slot="header">Navigation</div>
 * </ag-sidebar>
 * ```
 */
export class AgSidebar extends LitElement implements AgSidebarProps {
  static styles = css`
    :host {
      display: block;
      position: relative;
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
      --ag-sidebar-breakpoint: 1024px;
    }

    .sidebar-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--ag-sidebar-background);
      border-right: 1px solid var(--ag-sidebar-border);
    }
    
    /* Set collapsed width globally so it applies before media queries kick in */
    :host([collapsed]) .sidebar-container {
      width: var(--ag-sidebar-width-collapsed);
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
    
    /* Composable header layout system */
    .header-layout {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--ag-space-2);
      width: 100%;
    }

    .header-start {
      flex: 1;
      min-width: 0; /* Allow text truncation */
      overflow: hidden;
    }

    .header-end {
      display: flex;
      align-items: center;
      gap: var(--ag-space-2);
      flex-shrink: 0;
    }

    /* Collapsed state: hide start content, center end content */
    :host([collapsed]) .header-start {
      display: none;
    }

    :host([collapsed]) .header-layout {
      justify-content: center;
    }
    
    /* Header layout wrapper for showHeaderToggle. Base wrapper - no gap */
    .header-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    /* Gap only when expanded */
    :host(:not([collapsed])) .header-wrapper {
      gap: var(--ag-space-2);
    }

    .header-content {
      flex: 1;
      min-width: 0;
      opacity: 1;
      transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }
    
    /* Collapsed state: fade out header content */
    :host([collapsed]) .header-content {
      opacity: 0;
      pointer-events: none;
    }
    
    /* Collapsed state: center the toggle button */
    :host([collapsed]) .header-wrapper {
      justify-content: center;
    }
    
    /* Built-in header toggle button styling */
    .header-toggle-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--ag-space-7);
      height: var(--ag-space-7);
      border: 1px solid var(--ag-border-subtle);
      border-radius: 0.375rem;
      background: var(--ag-background-secondary);
      color: var(--ag-text-primary);
      cursor: pointer;
      transition: background 0.15s;
      flex-shrink: 0;
    }
    
    .header-toggle-button:hover {
      background: var(--ag-background-tertiary);
    }
    
    .header-toggle-button:active {
      transform: scale(0.95);
    }
    
    .header-toggle-button svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
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
    }

    .toggle-button {
      display: none;
    }

    /* ===========================================
       MOBILE: Below breakpoint
       Overlay drawer that slides in/out
       =========================================== */
    @media (max-width: 1023px) {
      .sidebar-container {
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: var(--ag-sidebar-z-index);
        transition: transform var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      }
      
      /* Full width in mobile when NOT collapsed */
      :host(:not([collapsed])) .sidebar-container {
        width: var(--ag-sidebar-width);
      }
      
      :host([position="left"]) .sidebar-container {
        left: 0;
        transform: translateX(-100%);
      }
      
      :host([position="right"]) .sidebar-container {
        right: 0;
        transform: translateX(100%);
      }
      
      :host([open]) .sidebar-container {
        transform: translateX(0);
      }

      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: var(--ag-sidebar-backdrop-z-index);
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      }

      :host([open]) .backdrop {
        display: block;
        opacity: 1;
        pointer-events: auto;
      }

      :host([show-mobile-toggle]) .toggle-button {
        display: flex;
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
        transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      }

      /* Hide toggle when sidebar is open - consumer's header button takes over */
      :host([show-mobile-toggle][open]) .toggle-button {
        opacity: 0;
        pointer-events: none;
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
      /* Ensure consumer-provided slotted SVGs match the fallback sizing */
      .toggle-button ::slotted(svg) {
        width: 18px;
        height: 18px;
        fill: currentColor;
        display: block;
      }

      .toggle-button.top-left { top: var(--ag-space-4); left: var(--ag-space-4); }
      .toggle-button.top-right { top: var(--ag-space-4); right: var(--ag-space-4); }
      .toggle-button.bottom-left { bottom: var(--ag-space-4); left: var(--ag-space-4); }
      .toggle-button.bottom-right { bottom: var(--ag-space-4); right: var(--ag-space-4); }
    }

    /* ===========================================
       DESKTOP: At/above breakpoint
       Static sidebar with expand/collapse
       =========================================== */
    @media (min-width: 1024px) {
      .sidebar-container {
        position: relative;
      }
      
      :host(:not([collapsed])) .sidebar-container {
        width: var(--ag-sidebar-width);
        transition: width var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      }
      
      :host([collapsed]) .sidebar-container {
        width: var(--ag-sidebar-width-collapsed);
        transition: width var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .sidebar-container, .backdrop, .toggle-button, .header-content {
        transition: none !important;
      }
    }
  `;

  @property({ type: Boolean, reflect: true }) declare open: boolean;
  @property({ type: Boolean, reflect: true }) declare collapsed: boolean;
  @property({ type: String, reflect: true }) declare position: 'left' | 'right';
  @property({ type: String, attribute: 'aria-label' }) declare ariaLabel: string;
  @property({ type: Number }) declare breakpoint: number;
  @property({ type: String, reflect: true }) declare variant: 'default' | 'bordered' | 'elevated';
  @property({ type: Boolean, attribute: 'no-transition', reflect: true }) declare noTransition: boolean;
  @property({ type: String }) declare width?: string;
  @property({ type: Boolean, attribute: 'show-mobile-toggle', reflect: true }) declare showMobileToggle: boolean;
  @property({ type: String, attribute: 'mobile-toggle-position' }) declare mobileTogglePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  @property({ type: Boolean, attribute: 'show-header-toggle', reflect: true }) declare showHeaderToggle: boolean;
  @property({ attribute: false }) declare onToggle?: (event: AgSidebarToggleEvent) => void;
  @property({ attribute: false }) declare onCollapse?: (event: AgSidebarCollapseEvent) => void;

  constructor() {
    super();
    this.open = false;
    this.collapsed = false;
    this.position = 'left';
    this.ariaLabel = 'Navigation';
    this.breakpoint = 1024;
    this.variant = 'default';
    this.noTransition = false;
    this.width = undefined;
    this.showMobileToggle = true;
    this.mobileTogglePosition = 'top-left';
    this.showHeaderToggle = false;
  }

  private _mainContentRef?: HTMLElement;
  
  /**
   * Checks if the current viewport width is below the mobile breakpoint.
   * 
   * This helper ensures consistent viewport detection across the component.
   * Called on-demand rather than using resize listeners to avoid memory overhead.
   * 
   * @returns true if viewport width is less than breakpoint, false otherwise
   * @private
   */
  private _isMobileViewport(): boolean {
    return window.innerWidth < this.breakpoint;
  }
  
  /**
   * Toggle the collapsed state (desktop rail mode)
   */
  public toggleCollapse() {
    this.collapsed = !this.collapsed;
    this._dispatchCollapseEvent();
  }

  /**
   * Intelligent toggle that handles both mobile and desktop contexts.
   * 
   * **Behavior:**
   * - Mobile (< breakpoint) + sidebar open: closes the sidebar overlay
   * - Desktop (>= breakpoint): toggles collapsed state (rail mode)
   * - Mobile (< breakpoint) + sidebar closed: toggles collapsed state
   * 
   * **When to use:**
   * Use this method in custom header buttons when you want the sidebar to close
   * on mobile when it's already open (dismissing the overlay), but toggle
   * collapsed state on desktop or when closed on mobile.
   * 
   * **Comparison with built-in toggle:**
   * - Built-in `showHeaderToggle`: Always toggles collapsed state (never closes on mobile)
   * - `toggleSidebarState()`: Closes overlay on mobile when open, otherwise toggles collapsed
   * 
   * **Resize awareness:**
   * Checks viewport width on each invocation, ensuring correct behavior even
   * after window resizes without requiring resize event listeners.
   * 
   * @example
   * ```html
   * <ag-sidebar id="sidebar">
   *   <button slot="header" @click=${() => document.getElementById('sidebar').toggleSidebarState()}>
   *     Toggle
   *   </button>
   * </ag-sidebar>
   * ```
   * 
   * @example
   * ```typescript
   * // In Lit component
   * const sidebar = this.shadowRoot.querySelector('ag-sidebar');
   * sidebar.toggleSidebarState();
   * ```
   */
  public toggleSidebarState(): void {
    if (this._isMobileViewport() && this.open) {
      // Mobile + open: close the overlay
      this.open = false;
      this._dispatchToggleEvent();
    } else {
      // Desktop or mobile closed: toggle collapsed state
      this.collapsed = !this.collapsed;
      this._dispatchCollapseEvent();
    }
  }

  override connectedCallback() {
    super.connectedCallback();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._handleKeydown);
  }

  override willUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has('width') && this.width) {
      this.style.setProperty('--ag-sidebar-width', this.width);
    }
    if (changedProperties.has('breakpoint')) {
      if (this.breakpoint <= 0) {
        this.breakpoint = 1024;
      }
      this.style.setProperty('--ag-sidebar-breakpoint', `${this.breakpoint}px`);
    }
    if (changedProperties.has('open')) {
      if (this.open) {
        document.addEventListener('keydown', this._handleKeydown);
        this.updateComplete.then(() => this._trapFocus());
      } else {
        document.removeEventListener('keydown', this._handleKeydown);
        this._releaseFocus();
      }
    }
  }

  private _handleBackdropClick = () => {
    this.open = false;
    this._dispatchToggleEvent();
  };

  private _handleToggleClick = () => {
    this.open = !this.open;
    this._dispatchToggleEvent();
  };

  private _handleHeaderToggleClick = () => {
    // Built-in header toggle: always toggles collapsed state
    // On mobile when open, this collapses to rail mode while keeping overlay open
    this.collapsed = !this.collapsed;
    this._dispatchCollapseEvent();
  };

  private _handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open) {
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
    // Provide a named slot so consumers can override the floating toggle icon.
    // Keep the existing SVG as the default fallback.
    return html`
      <slot name="ag-toggle-icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7314 1.00488C16.109 1.11926 18 2.98393 18 5.2666V12.7334C18 15.0898 15.9853 17 13.5 17H4.5C2.09247 17 0.126505 15.2074 0.00585938 12.9531L0 12.7334V5.2666C3.72355e-05 2.91022 2.01474 1 4.5 1H13.5L13.7314 1.00488ZM4.5 2.33301C2.79139 2.33301 1.40629 3.6466 1.40625 5.2666V12.7334C1.40629 14.3534 2.79139 15.667 4.5 15.667H4.625V2.33301H4.5ZM6.03125 15.667H13.5C15.2086 15.667 16.5937 14.3534 16.5938 12.7334V5.2666C16.5937 3.6466 15.2086 2.33301 13.5 2.33301H6.03125V15.667Z" fill="currentColor"/>
        </svg>
      </slot>
    `;
  }

  override render() {
    return html`
      <div part="ag-sidebar-backdrop" class="backdrop" @click=${this._handleBackdropClick} aria-hidden="true"></div>
      
      <button
        part="ag-sidebar-toggle-button"
        class="toggle-button ${this.mobileTogglePosition}"
        @click=${this._handleToggleClick}
        aria-label="${this.open ? 'Close sidebar' : 'Open sidebar'}"
        aria-expanded="${this.open}"
      >
        ${this._renderToggleIcon()}
      </button>

      <aside part="ag-sidebar-container" class="sidebar-container" aria-label=${this.ariaLabel}>
        <div part="ag-sidebar-header" class="sidebar-header">
          ${this.showHeaderToggle ? html`
            <div class="header-wrapper">
              <div class="header-content">
                <slot name="header">
                  <!-- Fallback: if no "header" slot, use composable parts -->
                  <div class="header-layout">
                    <div class="header-start">
                      <slot name="header-start"></slot>
                    </div>
                    <div class="header-end">
                      <slot name="header-end"></slot>
                      <slot name="header-toggle"></slot>
                    </div>
                  </div>
                </slot>
              </div>
              <button
                part="ag-sidebar-header-toggle"
                class="header-toggle-button"
                @click=${this._handleHeaderToggleClick}
                aria-label="${this.collapsed ? 'Expand sidebar' : 'Close sidebar'}"
              >
                ${this._renderToggleIcon()}
              </button>
            </div>
          ` : html`
            <slot name="header">
              <!-- Fallback: if no "header" slot, use composable parts -->
              <div class="header-layout">
                <div class="header-start">
                  <slot name="header-start"></slot>
                </div>
                <div class="header-end">
                  <slot name="header-end"></slot>
                  <slot name="header-toggle"></slot>
                </div>
              </div>
            </slot>
          `}
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
