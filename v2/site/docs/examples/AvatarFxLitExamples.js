import { LitElement, html } from 'lit';
import 'agnosticui-core/avatar-fx';

export class AvatarFxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="stacked-mobile mbe4">
        <ag-avatar-fx fx="bounce" variant="info" text="AB"></ag-avatar-fx>
        <ag-avatar-fx fx="pulse" variant="success" text="CD"></ag-avatar-fx>
        <ag-avatar-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="warning" text="EF"></ag-avatar-fx>
        <ag-avatar-fx fx="shimmer" fx-speed="xl" variant="error" text="GH"></ag-avatar-fx>
        <ag-avatar-fx fx="glow" variant="monochrome" text="IJ"></ag-avatar-fx>
        <ag-avatar-fx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="info" shape="rounded" text="KL"></ag-avatar-fx>
        <ag-avatar-fx fx="ripple" variant="success" shape="square" text="MN"></ag-avatar-fx>
        <ag-avatar-fx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome" text="OP"></ag-avatar-fx>
        <ag-avatar-fx fx="press-pop" variant="warning" text="QR"></ag-avatar-fx>
      </div>
    `;
  }
}

customElements.define('avatarfx-lit-examples', AvatarFxLitExamples);
