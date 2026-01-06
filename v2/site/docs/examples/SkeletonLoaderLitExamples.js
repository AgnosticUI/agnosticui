import { LitElement, html } from 'lit';
import 'agnosticui-core/skeleton';

export class SkeletonLoaderLitExamples extends LitElement {
  // CRITICAL: Must include createRenderRoot() to use light DOM
  // Without this, global CSS utility classes won't work!
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Text Skeleton</h2>
          <p class="mbs2 mbe3">
            Default text skeleton with subtle border radius, perfect for text placeholders.
          </p>
          <div style="width: 300px">
            <ag-skeleton-loader></ag-skeleton-loader>
            <ag-skeleton-loader style="margin-top: 8px"></ag-skeleton-loader>
            <ag-skeleton-loader style="margin-top: 8px; width: 60%"></ag-skeleton-loader>
          </div>
        </div>

        <div class="mbe4">
          <h2>Circular Skeleton</h2>
          <p class="mbs2 mbe3">
            Circular variant, ideal for avatar placeholders.
          </p>
          <div
            class="flex items-center"
            style="gap: 16px"
          >
            <ag-skeleton-loader
              variant="circular"
              width="40px"
              height="40px"
            ></ag-skeleton-loader>
            <ag-skeleton-loader
              variant="circular"
              width="60px"
              height="60px"
            ></ag-skeleton-loader>
            <ag-skeleton-loader
              variant="circular"
              width="80px"
              height="80px"
            ></ag-skeleton-loader>
          </div>
        </div>

        <div class="mbe4">
          <h2>Rectangular Skeleton</h2>
          <p class="mbs2 mbe3">
            Rectangular variant with no border radius, perfect for images.
          </p>
          <ag-skeleton-loader
            variant="rectangular"
            width="300px"
            height="200px"
          ></ag-skeleton-loader>
        </div>

        <div class="mbe4">
          <h2>Rounded Skeleton</h2>
          <p class="mbs2 mbe3">
            Rounded variant with medium border radius, ideal for cards.
          </p>
          <ag-skeleton-loader
            variant="rounded"
            width="300px"
            height="200px"
          ></ag-skeleton-loader>
        </div>

        <div class="mbe4">
          <h2>Effects</h2>
          <p class="mbs2 mbe3">
            Different animation effects: pulse (default), sheen, and none.
          </p>
          <div
            class="flex"
            style="gap: 24px; flex-wrap: wrap"
          >
            <div>
              <h3 class="mbe2">Pulse</h3>
              <ag-skeleton-loader
                effect="pulse"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
            <div>
              <h3 class="mbe2">Sheen</h3>
              <ag-skeleton-loader
                effect="sheen"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
            <div>
              <h3 class="mbe2">None</h3>
              <ag-skeleton-loader
                effect="none"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Intensity</h2>
          <p class="mbs2 mbe3">
            Light (default) uses --ag-background-secondary, medium uses --ag-background-tertiary.
          </p>
          <div
            class="flex"
            style="gap: 24px; flex-wrap: wrap"
          >
            <div>
              <h3 class="mbe2">Light</h3>
              <ag-skeleton-loader
                intensity="light"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
            <div>
              <h3 class="mbe2">Medium</h3>
              <ag-skeleton-loader
                intensity="medium"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>User Profile Card Loading</h2>
          <p class="mbs2 mbe3">
            Real-world example showing a loading profile card.
          </p>
          <div
            class="flex"
            style="gap: 16px; padding: 20px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); max-width: 400px"
          >
            <ag-skeleton-loader
              variant="circular"
              width="60px"
              height="60px"
            ></ag-skeleton-loader>
            <div style="flex: 1">
              <ag-skeleton-loader
                width="40%"
                height="16px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="60%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="80%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Article Card Loading</h2>
          <p class="mbs2 mbe3">
            Real-world example showing a loading article card.
          </p>
          <div style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden; max-width: 350px">
            <ag-skeleton-loader
              variant="rectangular"
              width="100%"
              height="200px"
            ></ag-skeleton-loader>
            <div style="padding: 16px">
              <ag-skeleton-loader
                width="60%"
                height="20px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="100%"
                height="14px"
                style="margin-top: 12px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="100%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="40%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>List Loading</h2>
          <p class="mbs2 mbe3">
            Real-world example showing a loading list.
          </p>
          <div style="max-width: 500px">
            ${[1, 2, 3].map(() => html`
              <div
                class="flex items-center"
                style="gap: 12px; margin-bottom: 16px"
              >
                <ag-skeleton-loader
                  variant="circular"
                  width="40px"
                  height="40px"
                ></ag-skeleton-loader>
                <div style="flex: 1">
                  <ag-skeleton-loader
                    width="60%"
                    height="16px"
                  ></ag-skeleton-loader>
                  <ag-skeleton-loader
                    width="40%"
                    height="14px"
                    style="margin-top: 8px"
                  ></ag-skeleton-loader>
                </div>
              </div>
            `)}
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the skeleton's appearance.
          </p>
          <ag-skeleton-loader
            class="custom-skeleton"
            width="300px"
            height="100px"
            variant="rounded"
          ></ag-skeleton-loader>
        </div>
      </section>
    `;
  }
}

// Register the custom element (at the bottom, NOT with decorator)
customElements.define('skeleton-loader-lit-examples', SkeletonLoaderLitExamples);
