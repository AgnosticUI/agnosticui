import { LitElement, html } from 'lit';
import 'agnosticui-core/card';
import 'agnosticui-core/button';

export class CardLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <!-- Default Card -->
        <div class="mbe4">
          <h2>Default Card</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card>
            <p>This is a basic card with default styling.</p>
          </ag-card>
        </div>

        <!-- Card with Header -->
        <div class="mbe4">
          <h2>Card with Header</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow>
            <h3 slot="header" class="m0">Product Details</h3>
            <p>This card demonstrates using the header slot to add a title section with visual separation.</p>
          </ag-card>
        </div>

        <!-- Shadow Card -->
        <div class="mbe4">
          <h2>Shadow Card</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow>
            <h3 class="m0">Card with Shadow</h3>
            <p>Hover over this card to see the enhanced shadow effect.</p>
          </ag-card>
        </div>

        <!-- Animated Card with Footer -->
        <div class="mbe4">
          <h2>Animated Card with Footer</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow animated>
            <h3 slot="header" class="m0">Animated Card</h3>
            <p>Hover to see smooth animation (translateY with shadow enhancement).</p>
            <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
              <ag-button>View Details</ag-button>
            </div>
          </ag-card>
        </div>

        <!-- Rounded Card Variants -->
        <div class="mbe4">
          <h2>Rounded Card Variants</h2>
          <p class="mbs2 mbe3">Cards can have different border radius sizes: small, medium, or large.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <ag-card rounded="sm">
            <h3 class="m0">Small Rounded (sm)</h3>
            <p>Subtle rounded corners using --ag-radius-sm (0.25rem).</p>
          </ag-card>
          <ag-card rounded="md">
            <h3 class="m0">Medium Rounded (md)</h3>
            <p>Moderate rounded corners using --ag-radius-md (0.375rem).</p>
          </ag-card>
          <ag-card rounded="lg">
            <h3 class="m0">Large Rounded (lg)</h3>
            <p>Prominent rounded corners using --ag-radius-lg (1rem).</p>
          </ag-card>
        </div>

        <!-- Stacked Content -->
        <div class="mbe4">
          <h2>Stacked Content</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card stacked>
            <h3 class="m0">Stacked Content</h3>
            <p>First paragraph with automatic margin.</p>
            <p>Second paragraph with automatic margin.</p>
            <p>Third paragraph with automatic margin.</p>
          </ag-card>
        </div>

        <!-- Variant Cards -->
        <div class="mbe4">
          <h2>Variant Cards</h2>
        </div>
        <div class="stacked">
          <ag-card variant="success" class="mbe2">
            <h3 class="m0">Success</h3>
            <p>Operation completed successfully!</p>
          </ag-card>
          <ag-card variant="info" class="mbe2">
            <h3 class="m0">Information</h3>
            <p>Here's some helpful information for you.</p>
          </ag-card>
          <ag-card variant="error" class="mbe2">
            <h3 class="m0">Error</h3>
            <p>Something went wrong. Please try again.</p>
          </ag-card>
          <ag-card variant="warning" class="mbe2">
            <h3 class="m0">Warning</h3>
            <p>Please review this information carefully.</p>
          </ag-card>
          <ag-card variant="monochrome" class="mbe2">
            <h3 class="m0">Monochrome</h3>
            <p>Clean and modern monochrome design.</p>
          </ag-card>
        </div>

        <!-- Card with Slots (Header and Footer) -->
        <div class="mbe4">
          <h2>Card with Slots (Header and Footer)</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow>
            <h3 slot="header" class="m0">Card Header</h3>
            <div>
              <h4>Main Content</h4>
              <p>This card demonstrates the header, default, and footer slots.</p>
            </div>
            <div slot="footer">
              <ag-button variant="secondary">Cancel</ag-button>
              <ag-button variant="primary" style="margin-left: 0.5rem;">Confirm</ag-button>
            </div>
          </ag-card>
        </div>

        <!-- Combined Features -->
        <div class="mbe4">
          <h2>Combined Features</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow animated rounded="md" variant="success">
            <h3 class="m0">Premium Card</h3>
            <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
            <p>Hover to see the smooth animation effect!</p>
          </ag-card>
        </div>

        <!-- Card Gallery -->
        <div class="mbe4">
          <h2>Card Gallery</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
          <ag-card shadow animated>
            <h3 slot="header">Card 1</h3>
            <p>Standard card with header, shadow and animation.</p>
          </ag-card>

          <ag-card shadow animated variant="success">
            <h4>Card 2</h4>
            <p>Success variant with shadow and animation.</p>
          </ag-card>

          <ag-card shadow animated variant="info">
            <h4 slot="header">Card 3</h4>
            <p>Info variant with header, shadow and animation.</p>
            <ag-button slot="footer" variant="monochrome" bordered>Learn More</ag-button>
          </ag-card>

          <ag-card shadow animated variant="error">
            <h4>Card 4</h4>
            <p>Error variant with shadow and animation.</p>
          </ag-card>

          <ag-card shadow animated variant="warning">
            <h4 slot="header">Card 5</h4>
            <p>Warning variant with header.</p>
          </ag-card>

          <ag-card shadow animated rounded="md">
            <h4>Card 6</h4>
            <p>Rounded corners with shadow and animation.</p>
            <ag-button slot="footer" variant="success">Action</ag-button>
          </ag-card>
        </div>

        <!-- Customized with CSS Shadow Parts -->
        <div class="mbe4">
          <h2>Customized with CSS Shadow Parts</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow class="custom-parts-card">
            <h3 slot="header" style="margin: 0; color: white;">Customized with CSS Parts</h3>
            <p>This card demonstrates CSS Shadow Parts customization.</p>
            <p>The wrapper, header, content, and footer are styled using ::part() selectors.</p>
            <ag-button slot="footer" variant="monochrome" shape="rounded">Learn More</ag-button>
          </ag-card>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('card-lit-examples', CardLitExamples);
