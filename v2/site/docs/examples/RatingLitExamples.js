import { LitElement, html } from 'lit';
import 'agnosticui-core/rating';

export class RatingLitExamples extends LitElement {
  static properties = {
    eventValue: { type: Number },
    hoverValue: { type: Number },
    lastEvent: { type: String }
  };

  constructor() {
    super();
    this.eventValue = 3;
    this.hoverValue = 0;
    this.lastEvent = '';
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleRatingChange(e) {
    this.eventValue = e.detail.newValue;
    this.lastEvent = `rating-change: oldValue=${e.detail.oldValue}, newValue=${e.detail.newValue}`;
  }

  handleRatingHover(e) {
    this.hoverValue = e.detail.value;
    this.lastEvent = `rating-hover: phase=${e.detail.phase}, value=${e.detail.value}`;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Default Rating</h2>
          <p class="mbs2 mbe3">A basic rating component.</p>
          <ag-rating .value=${3}></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Half Precision</h2>
          <p class="mbs2 mbe3">Allows for half-star ratings.</p>
          <ag-rating
            .value=${2.5}
            precision="half"
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Readonly</h2>
          <p class="mbs2 mbe3">A non-interactive rating display.</p>
          <ag-rating
            .value=${4}
            .readonly=${true}
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Allow Clear</h2>
          <p class="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
          <ag-rating
            .value=${3}
            .allowClear=${true}
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
          <div
            class="mbe4"
            style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
          >
            <ag-rating
              size="sm"
              .value=${3}
            ></ag-rating>
            <ag-rating
              size="md"
              .value=${3}
            ></ag-rating>
            <ag-rating
              size="lg"
              .value=${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Color variants for different contexts.</p>
          <div
            class="mbe4"
            style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
          >
            <ag-rating
              variant="primary"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="secondary"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="success"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="warning"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="danger"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="monochrome"
              .value=${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">Listen for <code>rating-change</code> and <code>rating-hover</code> events.</p>
          <div>
            <ag-rating
              .value=${this.eventValue}
              @rating-change=${this.handleRatingChange}
              @rating-hover=${this.handleRatingHover}
            ></ag-rating>
            <div style="margin-top: 1rem; font-family: monospace; font-size: 0.875rem;">
              <p>Current Value: ${this.eventValue}</p>
              <p>Hover Value: ${this.hoverValue}</p>
              <p>Last Event: ${this.lastEvent}</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Form Control Features</h2>
          <p class="mbs2 mbe3">
            Rating supports labels, helper text, validation, and label positioning for form integration.
          </p>
          <div style="max-width: 600px; display: flex; flex-direction: column; gap: 1.5rem;">
            <!-- Basic label -->
            <ag-rating
              label="Product Rating"
              .value=${3}
            ></ag-rating>

            <!-- With help text -->
            <ag-rating
              label="Service Quality"
              help-text="Rate the quality of service you received"
              .value=${4}
            ></ag-rating>

            <!-- Required field -->
            <ag-rating
              label="Overall Experience"
              .required=${true}
              help-text="This rating is required to submit your feedback"
              .value=${0}
            ></ag-rating>

            <!-- With error validation -->
            <ag-rating
              label="Customer Support"
              .required=${true}
              .invalid=${true}
              error-message="Please provide a rating before submitting"
              .value=${0}
            ></ag-rating>

            <!-- Label positioning -->
            <ag-rating
              label="Start Position"
              label-position="start"
              .value=${3}
            ></ag-rating>

            <ag-rating
              label="End Position"
              label-position="end"
              .value=${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
          <ag-rating
            .value=${4}
            class="custom-rating"
          ></ag-rating>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-rating::part(star-button) {
          padding: 0.25rem;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }
        .custom-rating::part(star-button):hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        .custom-rating::part(star) {
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }
        .custom-rating::part(star):hover {
          opacity: 1;
        }
      </style>
    `;
  }
}

// Register the custom element
customElements.define('rating-lit-examples', RatingLitExamples);
