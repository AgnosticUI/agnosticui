import { LitElement, html } from 'lit';
import 'agnosticui-core/tooltip-fx';
import 'agnosticui-core/button';

export class TooltipFxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="stacked-mobile mbe4">
        <ag-tooltip-fx fx="bounce" content="Bounce effect">
          <ag-button>Bounce</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="pulse" content="Pulse effect">
          <ag-button variant="primary">Pulse</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" content="Jelly effect">
          <ag-button variant="success">Jelly</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="shimmer" fx-speed="xl" content="Shimmer effect">
          <ag-button variant="warning">Shimmer</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="glow" content="Glow effect">
          <ag-button variant="danger">Glow</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="flip" fx-speed="lg" fx-ease="ease-in" content="Flip effect">
          <ag-button>Flip</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="ripple" content="Ripple effect">
          <ag-button variant="primary">Ripple</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="highlight-sweep" fx-speed="lg" content="Sweep effect">
          <ag-button variant="success">Sweep</ag-button>
        </ag-tooltip-fx>
      </div>
    `;
  }
}

customElements.define('tooltipfx-lit-examples', TooltipFxLitExamples);
