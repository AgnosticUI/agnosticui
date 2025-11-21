import { MessageBubble } from './_MessageBubble.js';

if (!customElements.get('ag-message-bubble')) {
  customElements.define('ag-message-bubble', MessageBubble);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-message-bubble': MessageBubble;
  }
}

export * from './_MessageBubble.js';