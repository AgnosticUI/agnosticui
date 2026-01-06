import { useState } from "react";
import { ReactPopover } from "agnosticui-core/popover/react";
import { ReactButton } from "agnosticui-core/button/react";

// Simple SVG icon components
const MoreVertical = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

const Menu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function PopoverReactExamples() {
  const [showCount, setShowCount] = useState(0);
  const [hideCount, setHideCount] = useState(0);

  const handleShow = () => {
    setShowCount(showCount + 1);
  };

  const handleHide = () => {
    setHideCount(hideCount + 1);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Basic Popover</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover>
          <button slot="trigger">Open Popover</button>
          <span slot="title">Popover Title</span>
          <div slot="content">
            <p>This is the popover content. You can put any content here including text, links, buttons, and more.</p>
          </div>
        </ReactPopover>
        <ReactPopover>
          <ReactButton slot="trigger" variant="primary">Button Trigger</ReactButton>
          <span slot="title">User Information</span>
          <div slot="content">
            <p>Popovers can contain rich content and interactive elements.</p>
          </div>
        </ReactPopover>
        <ReactPopover>
          <a
            href="#"
            slot="trigger"
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={(e) => e.preventDefault()}
          >
            Link Trigger
          </a>
          <span slot="title">Link Popover</span>
          <div slot="content">
            <p>Popovers can be triggered from links too.</p>
          </div>
        </ReactPopover>
        <ReactPopover>
          <button
            slot="trigger"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", alignItems: "center", gap: "4px" }}
            aria-label="More options"
          >
            <MoreVertical />
          </button>
          <span slot="title">More Options</span>
          <div slot="content">
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <button style={{ textAlign: "left", padding: "8px", background: "none", border: "none", cursor: "pointer", borderRadius: "var(--ag-radius-sm)" }}>
                Edit
              </button>
              <button style={{ textAlign: "left", padding: "8px", background: "none", border: "none", cursor: "pointer", borderRadius: "var(--ag-radius-sm)" }}>
                Share
              </button>
              <button style={{ textAlign: "left", padding: "8px", background: "none", border: "none", cursor: "pointer", color: "var(--ag-error)", borderRadius: "var(--ag-radius-sm)" }}>
                Delete
              </button>
            </div>
          </div>
        </ReactPopover>
        <ReactPopover>
          <button
            slot="trigger"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
            aria-label="Menu"
          >
            <Menu />
          </button>
          <span slot="title">Navigation Menu</span>
          <div slot="content">
            <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <a
                href="#"
                style={{ padding: "8px", textDecoration: "none", color: "var(--ag-text-primary)", borderRadius: "var(--ag-radius-sm)" }}
              >Home</a>
              <a
                href="#"
                style={{ padding: "8px", textDecoration: "none", color: "var(--ag-text-primary)", borderRadius: "var(--ag-radius-sm)" }}
              >About</a>
              <a
                href="#"
                style={{ padding: "8px", textDecoration: "none", color: "var(--ag-text-primary)", borderRadius: "var(--ag-radius-sm)" }}
              >Contact</a>
            </nav>
          </div>
        </ReactPopover>
      </div>

      <div className="mbe4">
        <h2>Trigger Types</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover triggerType="click">
          <ReactButton slot="trigger">Click Trigger</ReactButton>
          <span slot="title">Click Popover</span>
          <div slot="content">
            <p>This popover opens when you click the button.</p>
          </div>
        </ReactPopover>
        <ReactPopover triggerType="hover">
          <ReactButton slot="trigger" variant="secondary">Hover Trigger</ReactButton>
          <span slot="title">Hover Popover</span>
          <div slot="content">
            <p>This popover opens when you hover over the button.</p>
          </div>
        </ReactPopover>
        <ReactPopover triggerType="focus">
          <ReactButton slot="trigger" variant="success">Focus Trigger</ReactButton>
          <span slot="title">Focus Popover</span>
          <div slot="content">
            <p>This popover opens when the button receives focus (keyboard navigation).</p>
          </div>
        </ReactPopover>
      </div>

      <div className="mbe4">
        <h2>Placement Options</h2>
      </div>
      <div
        className="mbe4"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "auto auto auto", gap: "1rem", placeItems: "center", maxWidth: "275px", margin: "0 auto" }}
      >
        <div style={{ gridColumn: "2", gridRow: "1" }}>
          <ReactPopover placement="top">
            <ReactButton slot="trigger">Top</ReactButton>
            <span slot="title">Top Placement</span>
            <div slot="content">
              <p>Popover positioned above</p>
            </div>
          </ReactPopover>
        </div>
        <div style={{ gridColumn: "3", gridRow: "2" }}>
          <ReactPopover placement="right">
            <ReactButton slot="trigger">Right</ReactButton>
            <span slot="title">Right Placement</span>
            <div slot="content">
              <p>Popover positioned to the right</p>
            </div>
          </ReactPopover>
        </div>
        <div style={{ gridColumn: "2", gridRow: "3" }}>
          <ReactPopover placement="bottom">
            <ReactButton slot="trigger">Bottom</ReactButton>
            <span slot="title">Bottom Placement</span>
            <div slot="content">
              <p>Popover positioned below</p>
            </div>
          </ReactPopover>
        </div>
        <div style={{ gridColumn: "1", gridRow: "2" }}>
          <ReactPopover placement="left">
            <ReactButton slot="trigger">Left</ReactButton>
            <span slot="title">Left Placement</span>
            <div slot="content">
              <p>Popover positioned to the left</p>
            </div>
          </ReactPopover>
        </div>
      </div>

      <div className="mbe4">
        <h2>Rich Content</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover>
          <ReactButton slot="trigger" variant="primary">User Profile</ReactButton>
          <span slot="title">John Doe</span>
          <div slot="content">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--ag-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>
                  JD
                </div>
                <div>
                  <div style={{ fontWeight: "600" }}>John Doe</div>
                  <div style={{ fontSize: "14px", color: "var(--ag-text-secondary)" }}>john@example.com</div>
                </div>
              </div>
              <div style={{ paddingTop: "8px", borderTop: "1px solid var(--ag-border)" }}>
                <ReactButton variant="primary" style={{ width: "100%" }}>View Profile</ReactButton>
              </div>
            </div>
          </div>
        </ReactPopover>
        <ReactPopover>
          <ReactButton slot="trigger" variant="secondary">Add Comment</ReactButton>
          <span slot="title">New Comment</span>
          <div slot="content">
            <form
              style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "250px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  style={{ width: "100%", padding: "8px", border: "1px solid var(--ag-border)", borderRadius: "var(--ag-radius-sm)", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Comment</label>
                <textarea
                  placeholder="Your comment"
                  rows="3"
                  style={{ width: "100%", padding: "8px", border: "1px solid var(--ag-border)", borderRadius: "var(--ag-radius-sm)", resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <ReactButton variant="primary" type="submit">Submit</ReactButton>
            </form>
          </div>
        </ReactPopover>
      </div>

      <div className="mbe4">
        <h2>Without Close Button</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover showCloseButton={false}>
          <ReactButton slot="trigger">No Close Button</ReactButton>
          <span slot="title">Title Only</span>
          <div slot="content">
            <p>This popover has no close button. Click outside to close.</p>
          </div>
        </ReactPopover>
        <ReactPopover arrow={false}>
          <ReactButton slot="trigger" variant="secondary">No Arrow</ReactButton>
          <span slot="title">Popover Without Arrow</span>
          <div slot="content">
            <p>This popover doesn't have an arrow pointing to the trigger.</p>
          </div>
        </ReactPopover>
      </div>

      <div className="mbe4">
        <h2>Event Handling</h2>
        <p className="mbs2 mbe3">
          Listen to show and hide events to track when the popover opens and closes.
        </p>
        <div style={{ marginBottom: "16px", padding: "12px", background: "var(--ag-background-secondary)", borderRadius: "var(--ag-radius-md)", border: "1px solid var(--ag-border)" }}>
          <p style={{ margin: "4px 0", fontSize: "14px" }}>
            <strong>Show events:</strong> {showCount}
          </p>
          <p style={{ margin: "4px 0", fontSize: "14px" }}>
            <strong>Hide events:</strong> {hideCount}
          </p>
        </div>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover
          onShow={handleShow}
          onHide={handleHide}
        >
          <ReactButton slot="trigger" variant="primary">Toggle Popover</ReactButton>
          <span slot="title">Event Tracking</span>
          <div slot="content">
            <p>Open and close this popover to see the event counts above.</p>
          </div>
        </ReactPopover>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the popover's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in these examples.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPopover className="custom-popover-gradient">
          <ReactButton slot="trigger" variant="primary">Gradient Popover</ReactButton>
          <span slot="title" style={{ color: "white" }}>Customized Style</span>
          <div slot="content" style={{ color: "white" }}>
            <p style={{ color: "white" }}>This popover has been customized with CSS Shadow Parts for a gradient background!</p>
          </div>
        </ReactPopover>
        <ReactPopover className="custom-popover-success">
          <ReactButton slot="trigger" variant="success">Success Popover</ReactButton>
          <span slot="title" style={{ color: "white" }}>Success Theme</span>
          <div slot="content" style={{ color: "white" }}>
            <p style={{ color: "white" }}>A success-themed popover with custom styling.</p>
          </div>
        </ReactPopover>
      </div>
    </section>
  );
}
