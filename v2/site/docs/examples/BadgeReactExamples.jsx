import { ReactBadge } from "agnosticui-core/badge/react";
import { ReactButton } from "agnosticui-core/button/react";
import { ReactIcon } from "agnosticui-core/icon/react";
import { ReactVisuallyHidden } from "agnosticui-core/visually-hidden/react";
import { ReactAlert } from "agnosticui-core/alert/react";
import { Mail, Bell, ShoppingCart } from "lucide-react";

export default function BadgeReactExamples() {
  return (
    <section>
      {/* Default Badge */}
      <div className="mbe4">
        <ReactBadge>Default Badge</ReactBadge>
      </div>

      {/* Variants */}
      <div className="mbe2">
        <h2>Variants</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactBadge variant="default">Default</ReactBadge>
        <ReactBadge variant="success">Success</ReactBadge>
        <ReactBadge variant="info">Info</ReactBadge>
        <ReactBadge variant="warning">Warning</ReactBadge>
        <ReactBadge variant="danger">Danger</ReactBadge>
        <ReactBadge variant="neutral">Neutral</ReactBadge>
        <ReactBadge variant="monochrome">Monochrome</ReactBadge>
      </div>

      {/* Sizes */}
      <div className="mbe2">
        <h2>Sizes</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactBadge size="xs">Extra Small</ReactBadge>
        <ReactBadge size="sm">Small</ReactBadge>
        <ReactBadge size="md">Medium</ReactBadge>
      </div>

      {/* Count Badges */}
      <div className="mbe2">
        <h2>Count Badges</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactBadge variant="success">1</ReactBadge>
        <ReactBadge variant="danger">99+</ReactBadge>
        <ReactBadge variant="info">23</ReactBadge>
      </div>

      {/* Dot Badges */}
      <div className="mbe2">
        <h2>Dot Badges</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactBadge dot variant="default"></ReactBadge>
        <ReactBadge dot variant="info"></ReactBadge>
        <ReactBadge dot variant="success"></ReactBadge>
        <ReactBadge dot variant="warning"></ReactBadge>
        <ReactBadge dot variant="danger"></ReactBadge>
        <ReactBadge dot variant="monochrome"></ReactBadge>
      </div>

      {/* Status Indicators */}
      <div className="mbe2">
        <h2>Status Indicators</h2>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        className="mbe4"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ReactBadge dot variant="success" />
          Online
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ReactBadge dot variant="warning" />
          Away
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ReactBadge dot variant="danger" />
          Busy
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ReactBadge dot variant="info" />
          Connecting
        </div>
      </div>

      <div className="mbe4">
        <h2>Positioning Badges</h2>
      </div>
      <ReactAlert
        className="mbe2"
        borderedLeft
        type="info"
      >
        <div className="flex-inline items-center justify-center">
          You can control the badge placement with CSS. To apply absolute positioning to the badge, be sure to apply position: relative on the button.
        </div>
      </ReactAlert>
      <div className="mbe4">
        <h3>Inside Buttons (as content)</h3>
      </div>
      <div className="mbe4">
        <ReactButton
          bordered
          variant="primary"
          shape="capsule"
        >
          Inbox
          <ReactBadge
            variant="danger"
            size="sm"
            style={{ marginLeft: "var(--ag-space-1)" }}
          >99+</ReactBadge>
        </ReactButton>
      </div>
      <div className="mbs4 mbe4">
        <h3>Absolute Position</h3>
      </div>
      <div className="mbe4">
        <ReactButton
          bordered
          variant="primary"
          shape="capsule"
          style={{ position: "relative" }}
        >
          Inbox
          <ReactBadge
            variant="danger"
            size="sm"
            style={{ position: "absolute", top: "-10px", right: "-13px" }}
          >99+</ReactBadge>
        </ReactButton>
      </div>
      {/* Badge on Icon */}
      <div className="mbe4">
        <h2>Badges with Icon</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <div style={{ position: "relative", display: "inline-block", alignSelf: "flex-start" }}>
          <ReactIcon noFill size="16">
            <Bell size={16} />
          </ReactIcon>
          <ReactBadge
            variant="danger"
            size="xs"
            style={{ position: "absolute", top: "-6px", right: "-7px" }}
          >
            3
          </ReactBadge>
        </div>
        <div style={{ position: "relative", display: "inline-block", alignSelf: "flex-start" }}>
          <ReactIcon noFill size="20">
            <Bell size={20} />
          </ReactIcon>
          <ReactBadge
            variant="danger"
            size="sm"
            style={{ position: "absolute", top: "-7px", right: "-9px" }}
          >
            3
          </ReactBadge>
        </div>
        <div style={{ position: "relative", display: "inline-block", alignSelf: "flex-start" }}>
          <ReactIcon noFill size="24">
            <Bell size={24} />
          </ReactIcon>
          <ReactBadge
            variant="danger"
            size="md"
            style={{ position: "absolute", top: "-7px", right: "-10px" }}
          >
            3
          </ReactBadge>
        </div>
        <div
          className="mis2"
          style={{ position: "relative", display: "inline-block", alignSelf: "flex-start" }}
        >
          <ReactIcon noFill size="16">
            <Bell size={16} />
          </ReactIcon>
          <ReactBadge
            variant="danger"
            size="sm"
            dot
            style={{ position: "absolute", top: "0px", right: "-1px" }}
          >
          </ReactBadge>
        </div>
        <div style={{ position: "relative", display: "inline-block", alignSelf: "flex-start" }}>
          <ReactIcon noFill size="24">
            <Bell size={24} />
          </ReactIcon>
          <ReactBadge
            variant="danger"
            size="md"
            dot
            style={{ position: "absolute", top: "-1px", right: "-1px" }}
          >
          </ReactBadge>
        </div>
        <div style={{ position: "relative", display: "inline-block", alignSelf: "flex-start" }}>
          <ReactIcon noFill size="24">
            <Mail size={24} />
          </ReactIcon>
          <ReactBadge
            variant="success"
            size="md"
            dot
            style={{ position: "absolute", top: "-3px", right: "-4px" }}
          >
          </ReactBadge>
        </div>
        <div
          className="mis2"
          style={{ position: "relative", display: "inline-block", alignSelf: "flex-start" }}
        >
          <ReactIcon noFill size="24">
            <Mail size={24} />
          </ReactIcon>
          <ReactBadge
            variant="warning"
            size="md"
            dot
            style={{ position: "absolute", top: "-3px", right: "-4px" }}
          >
          </ReactBadge>
        </div>
        <div
          className="mis2"
          style={{ position: "relative", display: "inline-block", alignSelf: "flex-start" }}
        >
          <ReactIcon noFill size="24">
            <Mail size={24} />
          </ReactIcon>
          <ReactBadge
            variant="danger"
            size="xs"
            style={{ position: "absolute", top: "-3px", right: "-16px" }}
          >99+</ReactBadge>
        </div>
        <div
          className="mis3"
          style={{ position: "relative", display: "inline-block", alignSelf: "flex-start" }}
        >
          <ReactIcon noFill size="24">
            <Mail size={24} />
          </ReactIcon>
          <ReactBadge
            variant="danger"
            size="sm"
            style={{ position: "absolute", top: "-9px", right: "-30px" }}
          >99+</ReactBadge>
        </div>
      </div>
      <div className="mbe4">
        <h2>Button Icon with Badge</h2>
      </div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <ReactButton
          bordered
          variant="info"
          shape="rounded-square"
          style={{ position: "relative" }}
        >
          <ReactIcon noFill size="24">
            <ShoppingCart size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Items in cart</ReactVisuallyHidden>
          <ReactBadge
            variant="danger"
            size="sm"
            style={{ position: "absolute", top: "-9px", right: "-13px" }}
          >3</ReactBadge>
        </ReactButton>
      </div>
      <div
        className="mis8"
        style={{ position: "relative", display: "inline-block" }}
      >
        <ReactButton
          bordered
          variant="info"
          shape="rounded-square"
          style={{ position: "relative" }}
        >
          <ReactIcon noFill size="24">
            <ShoppingCart size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Items in cart</ReactVisuallyHidden>
          <ReactBadge
            variant="default"
            size="sm"
            style={{ position: "absolute", top: "-9px", right: "-13px" }}
          >3</ReactBadge>
        </ReactButton>
      </div>
      <div
        className="mis8"
        style={{ position: "relative", display: "inline-block" }}
      >
        <ReactButton
          bordered
          variant="info"
          shape="rounded-square"
          style={{ position: "relative" }}
        >
          <ReactIcon noFill size="24">
            <ShoppingCart size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Items in cart</ReactVisuallyHidden>
          <ReactBadge
            variant="success"
            size="md"
            dot
            style={{ position: "absolute", top: "-6px", right: "-7px" }}
          ></ReactBadge>
        </ReactButton>
      </div>
      {/* CSS Parts Customization */}
      <div className="mbe4">
        <h2>CSS Parts Customization</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Customize badge appearance using CSS Shadow Parts without breaking encapsulation.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactBadge className="custom-gradient-badge">Gradient Badge</ReactBadge>
        <ReactBadge className="custom-minimal-badge">Minimal Badge</ReactBadge>
      </div>

      {/* CSS Shadow Parts customization styles */}
      <style>{`
        /* CSS Parts customization examples */

        /* Gradient badge style */
        .custom-gradient-badge::part(ag-badge) {
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
          padding: 0.5rem 1rem;
        }

        /* Minimal badge */
        .custom-minimal-badge::part(ag-badge) {
          background: var(--ag-background-subtle);
          color: var(--ag-text-secondary);
          border-radius: 6px;
          font-size: 0.85rem;
          padding: 0.25rem 0.75rem;
        }
      `}</style>
    </section>
  );
}
