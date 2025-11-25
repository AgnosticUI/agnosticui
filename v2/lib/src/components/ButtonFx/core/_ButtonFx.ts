import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

// export type ButtonFxEvent = CustomEvent<{ /* payload */ }>;

export interface ButtonFxProps {
  // Add component props here
}

export class ButtonFx extends LitElement implements ButtonFxProps {
  // TODO: Implement properties and logic

  render() {
    return html`<p>ButtonFx works!</p>`;
  }
}
