
import { useState } from "react";
import { ReactScrollProgress } from "agnosticui-core/scroll-progress/react";
import { ReactToggle } from "agnosticui-core/toggle/react";

export default function ScrollProgressReactExamples() {
  const [showBar, setShowBar] = useState(true);
  const [showDotTrail, setShowDotTrail] = useState(true);
  const [showBadge, setShowBadge] = useState(true);
  const [showRing, setShowRing] = useState(true);

  return (
    <section>
      {/* Mode Controls */}
      <div
        className="mbe4"
        style={{
          background: "var(--ag-background-secondary)",
          padding: "var(--ag-space-4)",
          borderRadius: "var(--ag-radius-md)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Active Scroll Indicators</h2>
        <p
          className="mbs2 mbe3"
          style={{ fontSize: "0.875rem", color: "var(--ag-text-secondary)" }}
        >
          Toggle modes on/off to see different scroll progress indicators in action. Scroll down to see them update!
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            <ReactToggle
              checked={showBar}
              onChange={() => setShowBar(!showBar)}
            />
            <span>Bar (Top)</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            <ReactToggle
              checked={showDotTrail}
              onChange={() => setShowDotTrail(!showDotTrail)}
            />
            <span>Dot Trail</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            <ReactToggle
              checked={showBadge}
              onChange={() => setShowBadge(!showBadge)}
            />
            <span>Badge (Bottom Left)</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            <ReactToggle
              checked={showRing}
              onChange={() => setShowRing(!showRing)}
            />
            <span>Ring (Bottom Right)</span>
          </label>
        </div>
      </div>

      {/* Active Scroll Progress Indicators */}
      {showBar && (
        <ReactScrollProgress mode="bar" orientation="top" />
      )}

      {showDotTrail && (
        <div style={{ position: "fixed", top: "5rem", right: "3%", zIndex: 100 }}>
          <ReactScrollProgress
            mode="dot-trail"
            dots={7}
            badgeVariant="success"
          />
        </div>
      )}

      {showBadge && (
        <div style={{ position: "fixed", bottom: "var(--ag-space-4)", left: "var(--ag-space-4)", zIndex: 100 }}>
          <ReactScrollProgress
            mode="badge"
            badgeVariant="info"
          />
        </div>
      )}

      {showRing && (
        <div style={{ position: "fixed", bottom: "var(--ag-space-4)", right: "var(--ag-space-4)", zIndex: 100 }}>
          <ReactScrollProgress
            mode="ring"
            ringSize={48}
            ringVariant="primary"
          />
        </div>
      )}

      {/* Individual Mode Explanations */}
      <div className="mbe4">
        <h2>Bar Mode</h2>
        <p className="mbs2 mbe3">
          The classic scroll progress bar. Positioned at the top (or bottom) of the viewport, it provides a clear,
          unobtrusive indication of scroll depth. Perfect for long-form content like articles and documentation.
        </p>
        <div style={{ background: "var(--ag-background-secondary)", padding: "var(--ag-space-4)", borderRadius: "var(--ag-radius-md)" }}>
          <h3 style={{ marginTop: 0, fontSize: "0.875rem" }}>Props</h3>
          <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "0.875rem" }}>
            <li><code>orientation</code>: 'top' or 'bottom'</li>
            <li><code>size</code>: Uses small size for subtle appearance</li>
          </ul>
        </div>
      </div>

      <div className="mbe4">
        <h2>Dot Trail Mode</h2>
        <p className="mbs2 mbe3">
          A minimalist approach using a trail of dots. As you scroll, dots fill from left to right.
          Great for presentations, multi-step forms, or when you want a less prominent indicator.
        </p>
        <div style={{ background: "var(--ag-background-secondary)", padding: "var(--ag-space-4)", borderRadius: "var(--ag-radius-md)" }}>
          <h3 style={{ marginTop: 0, fontSize: "0.875rem" }}>Props</h3>
          <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "0.875rem" }}>
            <li><code>dots</code>: Number of dots to display (default: 5)</li>
            <li><code>badgeVariant</code>: Color variant for filled dots</li>
          </ul>
        </div>
      </div>

      <div className="mbe4">
        <h2>Badge Mode</h2>
        <p className="mbs2 mbe3">
          Displays the exact scroll percentage in a badge. Useful when users need precise feedback
          about their position in the content. Can be positioned anywhere on the page.
        </p>
        <div style={{ background: "var(--ag-background-secondary)", padding: "var(--ag-space-4)", borderRadius: "var(--ag-radius-md)" }}>
          <h3 style={{ marginTop: 0, fontSize: "0.875rem" }}>Props</h3>
          <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "0.875rem" }}>
            <li><code>badgeVariant</code>: Badge color variant</li>
            <li><code>precision</code>: Decimal places (0 for integers like "47%")</li>
          </ul>
        </div>
      </div>

      <div className="mbe4">
        <h2>Ring Mode</h2>
        <p className="mbs2 mbe3">
          A circular progress ring that fills as you scroll. Often paired with floating action buttons
          or scroll-to-top functionality. Provides an elegant, space-efficient indicator.
        </p>
        <div style={{ background: "var(--ag-background-secondary)", padding: "var(--ag-space-4)", borderRadius: "var(--ag-radius-md)" }}>
          <h3 style={{ marginTop: 0, fontSize: "0.875rem" }}>Props</h3>
          <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "0.875rem" }}>
            <li><code>ringSize</code>: Diameter in pixels (default: 32)</li>
            <li><code>ringStrokeWidth</code>: Thickness of the ring (default: 3)</li>
            <li><code>ringVariant</code>: Color variant</li>
          </ul>
        </div>
      </div>

      {/* Size Variants (Bar Mode) */}
      <div className="mbe4">
        <h2>Bar Size Variants</h2>
        <p className="mbs2 mbe3">Progress bars support three sizes via the underlying Progress component.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.875rem", fontWeight: 500 }}>Small (8px) - Default for scroll progress</p>
            <ReactScrollProgress
              mode="bar"
              orientation="top"
              style={{ position: "static" }}
            />
          </div>
          <div>
            <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.875rem", fontWeight: 500 }}>Medium (12px)</p>
            <div style={{ position: "relative" }}>
              <ReactScrollProgress
                mode="bar"
                orientation="top"
                style={{ position: "static" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Precision Control */}
      <div className="mbe4">
        <h2>Precision Control</h2>
        <p className="mbs2 mbe3">Control decimal places in percentage display with the <code>precision</code> prop.</p>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="badge"
              precision={0}
              badgeVariant="primary"
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>precision={'{0}'}</p>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--ag-text-secondary)" }}>Integers (47%)</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="badge"
              precision={1}
              badgeVariant="success"
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>precision={'{1}'}</p>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--ag-text-secondary)" }}>One decimal (47.3%)</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="badge"
              precision={2}
              badgeVariant="warning"
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>precision={'{2}'}</p>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--ag-text-secondary)" }}>Two decimals (47.39%)</p>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div className="mbe4">
        <h2>Color Variants</h2>
        <p className="mbs2 mbe3">Both badge and ring modes support color variants.</p>

        <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>Badge Variants</h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <ReactScrollProgress
            mode="badge"
            badgeVariant="default"
            style={{ position: "static" }}
          />
          <ReactScrollProgress
            mode="badge"
            badgeVariant="success"
            style={{ position: "static" }}
          />
          <ReactScrollProgress
            mode="badge"
            badgeVariant="warning"
            style={{ position: "static" }}
          />
          <ReactScrollProgress
            mode="badge"
            badgeVariant="danger"
            style={{ position: "static" }}
          />
          <ReactScrollProgress
            mode="badge"
            badgeVariant="info"
            style={{ position: "static" }}
          />
        </div>

        <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>Ring Variants</h3>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="ring"
              ringVariant="primary"
              ringSize={40}
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Primary</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="ring"
              ringVariant="success"
              ringSize={40}
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Success</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="ring"
              ringVariant="warning"
              ringSize={40}
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Warning</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="ring"
              ringVariant="danger"
              ringSize={40}
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Danger</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="ring"
              ringVariant="info"
              ringSize={40}
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Info</p>
          </div>
        </div>
      </div>

      {/* Scrollable content to demonstrate */}
      <div className="mbe4">
        <h2>Keep Scrolling!</h2>
        <p className="mbs2 mbe3">Scroll down to see the active progress indicators update in real-time.</p>
        <div style={{ background: "var(--ag-background-secondary)", padding: "var(--ag-space-4)", borderRadius: "var(--ag-radius-md)" }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <p key={i} style={{ margin: "0.5rem 0", color: "var(--ag-text-secondary)" }}>
              Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>

      <div
        className="mbe4"
        style={{ textAlign: "center", padding: "var(--ag-space-8) 0" }}
      >
        <h2>🎉 You've reached the end!</h2>
        <p style={{ color: "var(--ag-text-secondary)" }}>Notice how all active progress indicators show 100%</p>
      </div>
    </section>
  );
}
