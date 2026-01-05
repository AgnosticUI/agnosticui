import { ReactDivider } from "agnosticui-core/divider/react";

export default function DividerReactExamples() {
  return (
    <section>
      {/* Horizontal Dividers */}
      <div className="mbe4">
        <h2>Horizontal Dividers</h2>
      </div>
      <div className="mbe4">
        <p>Content above the divider</p>
        <ReactDivider />
        <p>Content below the divider</p>
      </div>

      {/* Horizontal with Content */}
      <div className="mbe4">
        <h2>Horizontal with Content</h2>
      </div>
      <div className="mbe4">
        <ReactDivider>Centered (default)</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider justify="start">Justify Start</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider justify="end">Justify End</ReactDivider>
      </div>

      {/* Vertical Dividers */}
      <div className="mbe4">
        <h2>Vertical Dividers</h2>
      </div>
      <div className="mbe4" style={{ display: "flex", minHeight: "200px" }}>
        <p style={{ flex: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ReactDivider vertical>Yes</ReactDivider>
        <p style={{ flex: 1 }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <ReactDivider vertical>Sir!</ReactDivider>
        <p style={{ flex: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Sizes - Horizontal */}
      <div className="mbe4">
        <h2>Sizes - Horizontal</h2>
      </div>
      <div className="mbe4">
        <ReactDivider size="small">Small</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider size="default">Default</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider size="large">Large</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider size="xlarge">XLarge</ReactDivider>
      </div>

      {/* Sizes - Vertical */}
      <div className="mbe4">
        <h2>Sizes - Vertical</h2>
      </div>
      <div className="mbe4" style={{ display: "flex", gap: "1rem", minHeight: "150px" }}>
        <p style={{ flex: 1 }}>Content</p>
        <ReactDivider vertical size="small">
          Sm
        </ReactDivider>
        <p style={{ flex: 1 }}>Content</p>
        <ReactDivider vertical size="default">
          Def
        </ReactDivider>
        <p style={{ flex: 1 }}>Content</p>
        <ReactDivider vertical size="large">
          Lg
        </ReactDivider>
        <p style={{ flex: 1 }}>Content</p>
        <ReactDivider vertical size="xlarge">
          XL
        </ReactDivider>
        <p style={{ flex: 1 }}>Content</p>
      </div>

      {/* Variants */}
      <div className="mbe4">
        <h2>Variants</h2>
      </div>
      <div className="mbe4">
        <ReactDivider variant="default">Default</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider variant="success">Success</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider variant="info">Info</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider variant="warning">Warning</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider variant="error">Error</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider variant="monochrome">Monochrome</ReactDivider>
      </div>

      {/* CSS Shadow Parts Customization */}
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the divider's appearance without
          affecting the component's internal styling.
        </p>
      </div>
      <div className="mbe4">
        <ReactDivider className="custom-divider-dotted">Dotted Pattern</ReactDivider>
        <div className="mbe4"></div>
        <div style={{ display: "flex", minHeight: "150px" }}>
          <p style={{ flex: 1 }}>Custom vertical gradient divider on the right</p>
          <ReactDivider className="custom-divider-vertical" vertical>
            Custom
          </ReactDivider>
          <p style={{ flex: 1 }}>Styled with CSS Shadow Parts</p>
        </div>
      </div>
    </section>
  );
}
