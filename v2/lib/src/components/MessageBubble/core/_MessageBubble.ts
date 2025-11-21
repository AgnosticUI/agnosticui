import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';

export interface MessageBubbleProps {
  from?: 'me' | 'them';
  message?: string;
  time?: string;
  author?: string;
  avatarUrl?: string;
  footer?: string;
}

/**
 * A message bubble component for chat interfaces.
 * 
 * @element ag-message-bubble
 * 
 * @slot - The message content (overrides the message property)
 * @slot header - Custom header content (overrides author/time)
 * @slot footer - Custom footer content (overrides footer property)
 * @slot avatar - Custom avatar content (overrides avatarUrl)
 * 
 * @csspart ag-bubble - The message bubble container
 * @csspart ag-header - The header containing author and time
 * @csspart ag-footer - The footer for delivery status
 * @csspart ag-chat-avatar - The avatar container
 * @csspart ag-avatar-image - The avatar image element
 * @csspart ag-author - The author name
 * @csspart ag-chat-time - The timestamp
 * 
 * @cssprop --ag-message-bubble-max-width - Maximum width of the bubble (default: 90%)
 */
export class MessageBubble extends LitElement implements MessageBubbleProps {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: var(--ag-space-2);
      margin-bottom: var(--ag-space-4);
      width: 100%;
    }

    .chat-wrapper {
      display: contents;
    }

    /* Avatar Styles */
    .chat-avatar {
      grid-row: span 2 / span 2;
      align-self: flex-end;
      width: 2.5rem;
      height: 2.5rem;
    }

    .avatar-image {
      width: 100%;
      height: 100%;
      border-radius: var(--ag-radius-full);
      object-fit: cover;
      background-color: var(--ag-background-secondary);
    }

    .avatar-placeholder {
      width: 100%;
      height: 100%;
      border-radius: var(--ag-radius-full);
      background-color: var(--ag-background-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ag-text-secondary);
      font-size: var(--ag-font-size-sm);
    }

    /* Header Styles */
    .chat-header {
      grid-row-start: 1;
      display: flex;
      gap: var(--ag-space-2);
      font-size: var(--ag-font-size-xs);
      color: var(--ag-text-secondary);
      align-items: center;
    }

    .chat-time {
      opacity: 0.5;
    }

    /* Bubble Styles */
    .chat-bubble {
      grid-row-end: 3;
      border-radius: var(--ag-radius-lg);
      min-width: 2.5rem;
      max-width: var(--ag-message-bubble-max-width, 90%);
      min-height: 2rem;
      padding: var(--ag-space-3) var(--ag-space-4);
      position: relative;
      width: fit-content;
      word-wrap: break-word;
      overflow-wrap: anywhere;
      hyphens: auto;
      font-size: var(--ag-font-size-base);
      line-height: var(--ag-line-height-base);
    }

    .chat-bubble::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0.75rem;
      height: 0.75rem;
      background-color: inherit;
    }

    /* Footer Styles */
    .chat-footer {
      grid-row-start: 3;
      display: flex;
      gap: var(--ag-space-2);
      font-size: var(--ag-font-size-xs);
      color: var(--ag-text-secondary);
      opacity: 0.5;
      margin-top: var(--ag-space-1);
    }

    /* From Them (Start) Layout */
    :host([from="them"]) {
      grid-template-columns: auto 1fr;
      place-items: start;
    }

    :host([from="them"]) .chat-avatar {
      grid-column-start: 1;
    }

    :host([from="them"]) .chat-header,
    :host([from="them"]) .chat-footer {
      grid-column-start: 2;
    }

    :host([from="them"]) .chat-bubble {
      grid-column-start: 2;
      background-color: var(--ag-background-secondary);
      color: var(--ag-text-primary);
      border-bottom-left-radius: var(--ag-radius-sm);
    }

    :host([from="them"]) .chat-bubble::before {
      left: -0.5rem;
      clip-path: polygon(100% 0, 0 100%, 100% 100%);
    }

    /* From Me (End) Layout */
    :host([from="me"]) {
      grid-template-columns: 1fr auto;
      place-items: end;
    }

    :host([from="me"]) .chat-avatar {
      grid-column-start: 2;
    }

    :host([from="me"]) .chat-header,
    :host([from="me"]) .chat-footer {
      grid-column-start: 1;
      justify-content: flex-end;
    }

    :host([from="me"]) .chat-bubble {
      grid-column-start: 1;
      background-color: var(--ag-primary-background);
      color: var(--ag-primary-text);
      border-bottom-right-radius: var(--ag-radius-sm);
    }

    :host([from="me"]) .chat-bubble::before {
      right: -0.5rem;
      clip-path: polygon(0 0, 0 100%, 100% 100%);
    }
  `;

  @property({ type: String, reflect: true })
  declare from: 'me' | 'them';

  @property({ type: String })
  declare message: string;

  @property({ type: String })
  declare time: string;

  @property({ type: String })
  declare author: string;

  @property({ type: String })
  declare avatarUrl: string;

  @property({ type: String })
  declare footer: string;

  @state()
  private _avatarError = false;

  constructor() {
    super();
    this.from = 'them';
    this.message = '';
    this.time = '';
    this.author = '';
    this.avatarUrl = '';
    this.footer = '';
  }

  // Reset avatar error state when avatarUrl changes
  willUpdate(changedProperties: Map<string, unknown>) {
    super.willUpdate(changedProperties);
    if (changedProperties.has('avatarUrl')) {
      this._avatarError = false;
    }
  }

  private _handleAvatarError() {
    this._avatarError = true;
  }

  private _formatDateTime(time: string): string {
    // If time looks like ISO format, format it
    const date = new Date(time);
    if (!isNaN(date.getTime()) && time.includes('T')) {
      return new Intl.DateTimeFormat('default', {
        hour: 'numeric',
        minute: 'numeric',
      }).format(date);
    }
    return time;
  }

  private _getAriaLabel(): string {
    const parts: string[] = [];
    
    if (this.author) {
      parts.push(`Message from ${this.author}`);
    } else {
      parts.push('Message');
    }
    
    if (this.time) {
      const formattedTime = this._formatDateTime(this.time);
      parts.push(`at ${formattedTime}`);
    }
    
    return parts.join(' ');
  }

  private _renderAvatar() {
    // Check for slotted avatar first
    const hasSlottedAvatar = this.querySelector('[slot="avatar"]');
    
    if (hasSlottedAvatar) {
      return html`
        <div class="chat-avatar" part="ag-chat-avatar">
          <slot name="avatar"></slot>
        </div>
      `;
    }
    
    if (!this.avatarUrl) {
      return nothing;
    }

    if (this._avatarError) {
      return html`
        <div class="chat-avatar" part="ag-chat-avatar">
          <div class="avatar-placeholder" part="ag-avatar-placeholder">
            ${this.author ? this.author.charAt(0).toUpperCase() : '?'}
          </div>
        </div>
      `;
    }

    return html`
      <div class="chat-avatar" part="ag-chat-avatar">
        <img
          class="avatar-image"
          part="ag-avatar-image"
          src="${this.avatarUrl}"
          alt="${this.author || 'Avatar'}"
          @error="${this._handleAvatarError}"
        />
      </div>
    `;
  }

  private _renderHeader() {
    // Check for slotted header first
    const hasSlottedHeader = this.querySelector('[slot="header"]');
    
    if (hasSlottedHeader) {
      return html`
        <div class="chat-header" part="ag-header">
          <slot name="header"></slot>
        </div>
      `;
    }
    
    if (!this.author && !this.time) {
      return nothing;
    }

    const formattedTime = this.time ? this._formatDateTime(this.time) : '';
    const datetime = this.time && this.time.includes('T') ? this.time : undefined;

    return html`
      <div class="chat-header" part="ag-header">
        ${this.author ? html`<span part="ag-author">${this.author}</span>` : nothing}
        ${this.time
          ? html`
              <time 
                class="chat-time" 
                part="ag-chat-time"
                datetime="${datetime || nothing}"
              >
                ${formattedTime}
              </time>
            `
          : nothing}
      </div>
    `;
  }

  private _renderFooter() {
    // Check for slotted footer first
    const hasSlottedFooter = this.querySelector('[slot="footer"]');
    
    if (hasSlottedFooter) {
      return html`
        <div class="chat-footer" part="ag-footer">
          <slot name="footer"></slot>
        </div>
      `;
    }
    
    if (!this.footer) {
      return nothing;
    }

    return html`
      <div class="chat-footer" part="ag-footer">${this.footer}</div>
    `;
  }

  render() {
    return html`
      <div class="chat-wrapper" role="article" aria-label="${this._getAriaLabel()}">
        ${this._renderAvatar()}
        ${this._renderHeader()}
        
        <div class="chat-bubble" part="ag-bubble">
          <slot>${this.message}</slot>
        </div>
        
        ${this._renderFooter()}
      </div>
    `;
  }
}
