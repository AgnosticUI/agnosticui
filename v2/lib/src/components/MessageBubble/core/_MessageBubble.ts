import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export interface MessageBubbleProps {
  from?: 'me' | 'them';
  message?: string;
  time?: string;
  author?: string;
}

/**
 * @element ag-message-bubble
 * @csspart ag-message-bubble - The root message bubble container.
 */
export class MessageBubble extends LitElement implements MessageBubbleProps {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--ag-space-16);
    }

    .message-bubble {
      max-width: 80%;
      padding: var(--ag-space-12) var(--ag-space-16);
      border-radius: var(--ag-radius-l);
      font-family: var(--ag-font-family-body);
      font-size: var(--ag-font-size-body);
      line-height: var(--ag-line-height-body);
    }

    .from-me {
      align-self: flex-end;
      background-color: var(--ag-primary-background);
      color: var(--ag-primary-text);
      border-bottom-right-radius: var(--ag-radius-xs);
    }

    .from-them {
      align-self: flex-start;
      background-color: var(--ag-background-secondary);
      color: var(--ag-text-primary);
      border-bottom-left-radius: var(--ag-radius-xs);
    }

    .message-meta {
      font-size: var(--ag-font-size-small);
      color: var(--ag-color-neutral-500);
      margin-top: var(--ag-spacing-4);
      align-self: inherit;
    }
  `;

  @property({ type: String })
  declare from: 'me' | 'them';

  @property({ type: String })
  declare message: string;

  @property({ type: String })
  declare time: string;

  @property({ type: String })
  declare author: string;

  constructor() {
    super();
    this.from = 'them';
    this.message = '';
    this.time = '';
    this.author = '';
  }

  render() {
    const classes = {
      'message-bubble': true,
      'from-me': this.from === 'me',
      'from-them': this.from === 'them',
    };

    return html`
      <div class="${classMap(classes)}" part="ag-message-bubble">
        <slot>${this.message}</slot>
      </div>
      ${this.author || this.time
        ? html`
            <div class="message-meta">
              ${this.author ? html`<span>${this.author}</span>` : ''}
              ${this.author && this.time ? html` • ` : ''}
              ${this.time ? html`<span>${this.time}</span>` : ''}
            </div>
          `
        : ''}
    `;
  }
}