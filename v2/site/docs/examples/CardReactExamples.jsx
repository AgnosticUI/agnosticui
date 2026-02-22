import { ReactCard } from "agnosticui-core/card/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function CardReactExamples() {
  return (
    <section>
      {/* Default Card */}
      <div className="mbe4">
        <h2>Default Card</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard>
          <p>This is a basic card with default styling.</p>
        </ReactCard>
      </div>

      {/* Card with Header */}
      <div className="mbe4">
        <h2>Card with Header</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow>
          <h3 slot="header" className="m0">Product Details</h3>
          <p>This card demonstrates using the header slot to add a title section with visual separation.</p>
        </ReactCard>
      </div>

      {/* Shadow Card */}
      <div className="mbe4">
        <h2>Shadow Card</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow>
          <h3 className="m0">Card with Shadow</h3>
          <p>Hover over this card to see the enhanced shadow effect.</p>
        </ReactCard>
      </div>

      {/* Animated Card with Footer */}
      <div className="mbe4">
        <h2>Animated Card with Footer</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow animated>
          <h3 slot="header" className="m0">Animated Card</h3>
          <p>Hover to see smooth animation (translateY with shadow enhancement).</p>
          <div slot="footer" style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
            <ReactButton>View Details</ReactButton>
          </div>
        </ReactCard>
      </div>

      {/* Rounded Card Variants */}
      <div className="mbe4">
        <h2>Rounded Card Variants</h2>
        <p className="mbs2 mbe3">Cards can have different border radius sizes: small, medium, or large.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
        <ReactCard rounded="sm">
          <h3 className="m0">Small Rounded (sm)</h3>
          <p>Subtle rounded corners using --ag-radius-sm (0.25rem).</p>
        </ReactCard>
        <ReactCard rounded="md">
          <h3 className="m0">Medium Rounded (md)</h3>
          <p>Moderate rounded corners using --ag-radius-md (0.375rem).</p>
        </ReactCard>
        <ReactCard rounded="lg">
          <h3 className="m0">Large Rounded (lg)</h3>
          <p>Prominent rounded corners using --ag-radius-lg (1rem).</p>
        </ReactCard>
      </div>

      {/* Stacked Content */}
      <div className="mbe4">
        <h2>Stacked Content</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard stacked>
          <h3 className="m0">Stacked Content</h3>
          <p>First paragraph with automatic margin.</p>
          <p>Second paragraph with automatic margin.</p>
          <p>Third paragraph with automatic margin.</p>
        </ReactCard>
      </div>

      {/* Variant Cards */}
      <div className="mbe4">
        <h2>Variant Cards</h2>
      </div>
      <div className="stacked">
        <ReactCard variant="success" className="mbe2">
          <h3 className="m0">Success</h3>
          <p>Operation completed successfully!</p>
        </ReactCard>
        <ReactCard variant="info" className="mbe2">
          <h3 className="m0">Information</h3>
          <p>Here's some helpful information for you.</p>
        </ReactCard>
        <ReactCard variant="error" className="mbe2">
          <h3 className="m0">Error</h3>
          <p>Something went wrong. Please try again.</p>
        </ReactCard>
        <ReactCard variant="warning" className="mbe2">
          <h3 className="m0">Warning</h3>
          <p>Please review this information carefully.</p>
        </ReactCard>
        <ReactCard variant="monochrome" className="mbe2">
          <h3 className="m0">Monochrome</h3>
          <p>Clean and modern monochrome design.</p>
        </ReactCard>
      </div>

      {/* Card with Slots (Header and Footer) */}
      <div className="mbe4">
        <h2>Card with Slots (Header and Footer)</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow>
          <h3 slot="header" className="m0">Card Header</h3>
          <div>
            <h4>Main Content</h4>
            <p>This card demonstrates the header, default, and footer slots.</p>
          </div>
          <div slot="footer">
            <ReactButton variant="secondary">Cancel</ReactButton>
            <ReactButton variant="primary" style={{ marginLeft: "0.5rem" }}>
              Confirm
            </ReactButton>
          </div>
        </ReactCard>
      </div>

      {/* Combined Features */}
      <div className="mbe4">
        <h2>Combined Features</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow animated rounded="md" variant="success">
          <h3 className="m0">Premium Card</h3>
          <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
          <p>Hover to see the smooth animation effect!</p>
        </ReactCard>
      </div>

      {/* Card Gallery */}
      <div className="mbe4">
        <h2>Card Gallery</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
        <ReactCard shadow animated>
          <h3 slot="header">Card 1</h3>
          <p>Standard card with header, shadow and animation.</p>
        </ReactCard>

        <ReactCard shadow animated variant="success">
          <h4>Card 2</h4>
          <p>Success variant with shadow and animation.</p>
        </ReactCard>

        <ReactCard shadow animated variant="info">
          <h4 slot="header">Card 3</h4>
          <p>Info variant with header, shadow and animation.</p>
          <ReactButton slot="footer" variant="monochrome" bordered>
            Learn More
          </ReactButton>
        </ReactCard>

        <ReactCard shadow animated variant="error">
          <h4>Card 4</h4>
          <p>Error variant with shadow and animation.</p>
        </ReactCard>

        <ReactCard shadow animated variant="warning">
          <h4 slot="header">Card 5</h4>
          <p>Warning variant with header.</p>
        </ReactCard>

        <ReactCard shadow animated rounded="md">
          <h4>Card 6</h4>
          <p>Rounded corners with shadow and animation.</p>
          <ReactButton slot="footer" variant="success">
            Action
          </ReactButton>
        </ReactCard>
      </div>

      {/* Media Card — Top */}
      <div className="mbe4">
        <h2>Media Card (Top)</h2>
        <p className="mbs2 mbe3">
          Use <code>hasMedia</code> with <code>mediaPosition="top"</code> for edge-to-edge media above the card content.
        </p>
      </div>
      <div className="stacked-mobile">
        <ReactCard hasMedia mediaPosition="top" rounded="md" shadow style={{ maxWidth: "400px" }}>
          <img
            slot="media"
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop"
            alt="Mountain landscape"
          />
          <h3 slot="header" className="m0">Mountain Retreat</h3>
          <p>A breathtaking mountain landscape captured at golden hour.</p>
          <div slot="footer">
            <ReactButton>View Gallery</ReactButton>
          </div>
        </ReactCard>
      </div>

      {/* Media Card — Bottom */}
      <div className="mbe4">
        <h2>Media Card (Bottom)</h2>
        <p className="mbs2 mbe3">
          Use <code>mediaPosition="bottom"</code> to render media below the card content.
        </p>
      </div>
      <div className="stacked-mobile">
        <ReactCard hasMedia mediaPosition="bottom" rounded="md" shadow style={{ maxWidth: "400px" }}>
          <h3 slot="header" className="m0">Mountain Retreat</h3>
          <p>A breathtaking mountain landscape captured at golden hour.</p>
          <img
            slot="media"
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop"
            alt="Mountain landscape"
          />
        </ReactCard>
      </div>

      {/* Customized with CSS Shadow Parts */}
      <div className="mbe4">
        <h2>Customized with CSS Shadow Parts</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow className="custom-parts-card">
          <h3 slot="header" style={{ margin: 0, color: "white" }}>
            Customized with CSS Parts
          </h3>
          <p>This card demonstrates CSS Shadow Parts customization.</p>
          <p>The wrapper, header, content, and footer are styled using ::part() selectors.</p>
          <ReactButton slot="footer" variant="monochrome" shape="rounded">
            Learn More
          </ReactButton>
        </ReactCard>
      </div>
    </section>
  );
}
