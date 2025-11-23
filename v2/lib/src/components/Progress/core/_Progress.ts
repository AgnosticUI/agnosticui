import { LitElement, html, type CSSResultGroup, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export interface ProgressProps {
  /**
   * The current value of the progress bar. If not provided, the progress bar is indeterminate.
   */
  value?: number;
  /**
   * The maximum value of the progress bar.
   * @default 100
   */
  max?: number;
  /**
   * An accessible label for the progress bar. This label is visually hidden but announced by screen readers.
   */
  label?: string;
}

/**
 * @element ag-progress
 * @csspart progress-wrapper - The main container element for the component.
 * @csspart progress-label - The visually hidden label element.
 * @csspart progress-bar - The native `<progress>` element.
 */
export class Progress extends LitElement implements ProgressProps {
  @property({ type: Number })
  value?: number;

  @property({ type: Number })
  max = 100;

  @property({ type: String })
  label = '';

  static get styles(): CSSResultGroup {
    return css`
      .progress-wrapper {
        display: block;
      }

      .progress-label {
        /* Visually hidden but accessible */
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      progress {
        width: 100%;
        height: var(--ag-space-4);
        appearance: none;
        border: none;
        border-radius: var(--ag-radius-lg);
        background-color: var(--ag-background-secondary);
      }

      /* WebKit/Blink browsers (Chrome, Safari, Edge) */
      progress::-webkit-progress-bar {
        background-color: var(--ag-background-secondary);
        border-radius: var(--ag-radius-lg);
      }

      progress::-webkit-progress-value {
        background-color: var(--ag-primary);
        border-radius: var(--ag-radius-lg);
      }

      /* Firefox */
      progress::-moz-progress-bar {
        background-color: var(--ag-primary);
        border-radius: var(--ag-radius-lg);
      }

      /* Indeterminate state animations */
      progress:indeterminate {
        background: linear-gradient(
          to right,
          var(--ag-background-secondary) 0%,
          var(--ag-primary) 50%,
          var(--ag-background-secondary) 100%
        );
        background-size: 200% 100%;
        animation: progress-indeterminate 2s linear infinite;
      }

      progress:indeterminate::-webkit-progress-bar {
        background: transparent;
      }

      progress:indeterminate::-moz-progress-bar {
        background: linear-gradient(
          to right,
          var(--ag-background-secondary) 0%,
          var(--ag-primary) 50%,
          var(--ag-background-secondary) 100%
        );
        background-size: 200% 100%;
        animation: progress-indeterminate 2s linear infinite;
      }

      @keyframes progress-indeterminate {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="progress-wrapper" part="ag-progress-wrapper">
        ${this.label
          ? html`<label for="progress" class="progress-label" part="progress-label">${this.label}</label>`
          : ''}
        <progress
          id="progress"
          part="ag-progress-bar"
          .value=${ifDefined(this.value)}
          .max=${this.max}
          aria-label=${ifDefined(this.label || undefined)}
        ></progress>
      </div>
    `;
  }
}

if (!customElements.get('ag-progress')) {
  customElements.define('ag-progress', Progress);
}
