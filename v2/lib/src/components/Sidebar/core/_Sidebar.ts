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
 */
export class AgSidebar extends LitElement implements AgSidebarProps {
  static styles = css`
    :host {
      display: block;
      position: relative;
      /* CSS tokens */
      --ag-sidebar-width: var(--ag-sidebar-width-base, 16rem);
      --ag-sidebar-width-collapsed: var(--ag-sidebar-width-collapsed-base, 4rem);
      --ag-sidebar-width-mobile: var(--ag-sidebar-width-mobile-base, 85vw);
      --ag-sidebar-padding: var(--ag-space-2, 0.5rem);
      --ag-sidebar-background: var(--ag-background-primary, #ffffff);
      --ag-sidebar-border: var(--ag-border, #e5e7eb);
      --ag-sidebar-transition-duration: var(--ag-motion-duration-normal, 200ms);
      --ag-sidebar-transition-easing: var(--ag-motion-easing-standard, ease-in-out);
      --ag-sidebar-z-index: var(--ag-z-sidebar, 1000);
      --ag-sidebar-backdrop-z-index: var(--ag-z-sidebar-backdrop, 999);
    }

    .sidebar-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--ag-sidebar-background);
      border-right: 1px solid var(--ag-sidebar-border);
      transition: width var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing),
                  transform var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }
    
    :host([position="right"]) .sidebar-container {
      border-right: none;
      border-left: 1px solid var(--ag-sidebar-border);
    }

    .sidebar-header, .sidebar-footer {
      padding: 1rem;
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

    /* DESKTOP STYLES */
    @media (min-width: 1024px) {
      .sidebar-container {
        position: relative;
        width: var(--ag-sidebar-width);
        transform: none;
      }
      :host([collapsed]) .sidebar-container {
        width: var(--ag-sidebar-width-collapsed);
      }
    }

    /* MOBILE STYLES */
    @media (max-width: 1023px) {
      .sidebar-container {
        position: fixed;
        top: 0;
        bottom: 0;
        width: var(--ag-sidebar-width-mobile);
        z-index: var(--ag-sidebar-z-index);
        transform: translateX(-100%);
      }
      :host([position="left"]) .sidebar-container {
        left: 0;
        transform: translateX(-100%);
      }
      :host([position="right"]) .sidebar-container {
        right: 0;
        left: auto;
        transform: translateX(100%);
      }
      :host([data-mobile][open]) .sidebar-container {
        transform: translateX(0);
      }
      :host([collapsed]) .sidebar-container {
        width: var(--ag-sidebar-width-mobile);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .sidebar-container, .backdrop {
        transition: none;
      }
    }
  `;

  // --- Start of properties from the old implementation ---
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean, reflect: true }) collapsed = false;
  @property({ type: String, reflect: true }) position: 'left' | 'right' = 'left';
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = 'Navigation';
  @property({ type: Number }) breakpoint = 1024;
  @property({ type: String, reflect: true }) variant: 'default' | 'bordered' | 'elevated' = 'default';
  @property({ type: Boolean, attribute: 'no-transition', reflect: true }) noTransition = false;
  @property({ type: String }) width?: string;
  @property({ attribute: false }) onToggle?: (event: AgSidebarToggleEvent) => void;
  @property({ attribute: false }) onCollapse?: (event: AgSidebarCollapseEvent) => void;
  @property({ attribute: false }) onBreakpointChange?: (event: AgSidebarBreakpointChangeEvent) => void;

  @state() private _isMobile = false;
  private _mainContentRef?: HTMLElement;
  private _resizeTimeout?: number;
  // --- End of properties from the old implementation ---
  
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
        console.warn('ag-sidebar: breakpoint must be a positive number');
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
      this.open = false;
      this.collapsed = false;
    } else {
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
    const trigger = document.querySelector('[data-sidebar-trigger]') as HTMLElement;
    trigger?.focus();
  }

  private _handleSlotClick(event: Event) {
    const target = event.target as HTMLElement;
    const button = target.closest('.nav-button');
    if (button && button.hasAttribute('aria-expanded')) {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isExpanded));
      const submenu = button.nextElementSibling;
      if (submenu && submenu.classList.contains('nav-submenu')) {
        submenu.classList.toggle('open');
      }
    }
  }

  override render() {
    const showBackdrop = this._isMobile && this.open;

    return html`
      ${showBackdrop ? html`<div part="ag-sidebar-backdrop" class="backdrop" @click=${this._handleBackdropClick} aria-hidden="true"></div>` : nothing}
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
