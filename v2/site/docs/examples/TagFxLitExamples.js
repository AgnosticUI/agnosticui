import { LitElement, html } from 'lit';
import 'agnosticui-core/tag-fx';

export class TagFxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="stacked-mobile mbe4">
        <ag-tag-fx fx="bounce" variant="success">Bounce</ag-tag-fx>
        <ag-tag-fx fx="pulse" variant="info">Pulse</ag-tag-fx>
        <ag-tag-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="primary">Jelly</ag-tag-fx>
        <ag-tag-fx fx="shimmer" fx-speed="xl" variant="warning">Shimmer</ag-tag-fx>
        <ag-tag-fx fx="glow" variant="error">Glow</ag-tag-fx>
        <ag-tag-fx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="success">Flip</ag-tag-fx>
        <ag-tag-fx fx="ripple" variant="info">Ripple</ag-tag-fx>
        <ag-tag-fx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome">Sweep</ag-tag-fx>
        <ag-tag-fx fx="press-pop" variant="primary">Press Pop</ag-tag-fx>
      </div>
    `;
  }
}

customElements.define('tagfx-lit-examples', TagFxLitExamples);
