import { ReactSelectionCardGroup } from "agnosticui-core/selection-card-group/react";
import { ReactSelectionCard } from "agnosticui-core/selection-card/react";

export default function SelectionCardGroupExamples() {
  const handleChange = (e) => {
    console.log("Selection changed:", e.detail);
  };

  return (
    <section>
      {/* Radio Selection */}
      <div className="mbe4">
        <h2>Radio Selection (Single)</h2>
        <p className="mbs2 mbe3">Select one option from a group of cards</p>
      </div>
      <ReactSelectionCardGroup
        type="radio"
        name="interests"
        legend="Select your primary interest"
        className="mbe4"
        onSelectionChange={handleChange}
      >
        <ReactSelectionCard value="tech" label="Technology">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>💻</div>
            <div style={{ fontWeight: 600 }}>Technology</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="art" label="Art & Design">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>🎨</div>
            <div style={{ fontWeight: 600 }}>Art & Design</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="music" label="Music">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>🎵</div>
            <div style={{ fontWeight: 600 }}>Music</div>
          </div>
        </ReactSelectionCard>
      </ReactSelectionCardGroup>

      {/* Checkbox Selection */}
      <div className="mbe4">
        <h2>Checkbox Selection (Multiple)</h2>
        <p className="mbs2 mbe3">Select multiple options from a group of cards</p>
      </div>
      <ReactSelectionCardGroup
        type="checkbox"
        name="features"
        legend="Select features to enable"
        className="mbe4"
        onSelectionChange={handleChange}
      >
        <ReactSelectionCard value="analytics" label="Analytics">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>📊</div>
            <div style={{ fontWeight: 600 }}>Analytics</div>
            <div style={{ fontSize: "0.875rem", color: "#666" }}>Track user behavior</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="notifications" label="Notifications">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>🔔</div>
            <div style={{ fontWeight: 600 }}>Notifications</div>
            <div style={{ fontSize: "0.875rem", color: "#666" }}>Push & email alerts</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="export" label="Export">
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>📤</div>
            <div style={{ fontWeight: 600 }}>Export</div>
            <div style={{ fontSize: "0.875rem", color: "#666" }}>Download your data</div>
          </div>
        </ReactSelectionCard>
      </ReactSelectionCardGroup>

      {/* Theme Variants */}
      <div className="mbe4">
        <h2>Theme Variants</h2>
        <p className="mbs2 mbe3">Different color themes for various contexts</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} className="mbe4">
        <div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Default (Primary/Blue)</h3>
          <ReactSelectionCardGroup
            type="radio"
            name="theme-default"
            legend="Default theme"
            legendHidden
          >
            <ReactSelectionCard value="a" label="Option A">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
            </ReactSelectionCard>
            <ReactSelectionCard value="b" label="Option B">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
            </ReactSelectionCard>
          </ReactSelectionCardGroup>
        </div>
        <div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Success</h3>
          <ReactSelectionCardGroup
            type="radio"
            name="theme-success"
            legend="Success theme"
            legendHidden
            theme="success"
          >
            <ReactSelectionCard value="a" label="Option A">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
            </ReactSelectionCard>
            <ReactSelectionCard value="b" label="Option B">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
            </ReactSelectionCard>
          </ReactSelectionCardGroup>
        </div>
        <div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Monochrome</h3>
          <ReactSelectionCardGroup
            type="radio"
            name="theme-mono"
            legend="Monochrome theme"
            legendHidden
            theme="monochrome"
          >
            <ReactSelectionCard value="a" label="Option A">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
            </ReactSelectionCard>
            <ReactSelectionCard value="b" label="Option B">
              <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
            </ReactSelectionCard>
          </ReactSelectionCardGroup>
        </div>
      </div>

      {/* Disabled State */}
      <div className="mbe4">
        <h2>Disabled State</h2>
        <p className="mbs2 mbe3">Entire group can be disabled</p>
      </div>
      <ReactSelectionCardGroup
        type="radio"
        name="disabled-example"
        legend="Disabled group"
        disabled
        className="mbe4"
      >
        <ReactSelectionCard value="a" label="Option A">
          <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
        </ReactSelectionCard>
        <ReactSelectionCard value="b" label="Option B">
          <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
        </ReactSelectionCard>
      </ReactSelectionCardGroup>

      {/* Pricing Tiers Example */}
      <div className="mbe4">
        <h2>Pricing Tiers Example</h2>
        <p className="mbs2 mbe3">Common use case for plan selection</p>
      </div>
      <ReactSelectionCardGroup
        type="radio"
        name="pricing"
        legend="Choose your plan"
        className="mbe4"
        onSelectionChange={handleChange}
      >
        <ReactSelectionCard value="free" label="Free Plan">
          <div style={{ padding: "1.5rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Free</div>
            <div style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0" }}>$0</div>
            <div style={{ color: "#666", fontSize: "0.875rem" }}>Perfect for getting started</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="pro" label="Pro Plan">
          <div style={{ padding: "1.5rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Pro</div>
            <div style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0" }}>$29</div>
            <div style={{ color: "#666", fontSize: "0.875rem" }}>For growing teams</div>
          </div>
        </ReactSelectionCard>
        <ReactSelectionCard value="enterprise" label="Enterprise Plan">
          <div style={{ padding: "1.5rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Enterprise</div>
            <div style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0" }}>Custom</div>
            <div style={{ color: "#666", fontSize: "0.875rem" }}>For large organizations</div>
          </div>
        </ReactSelectionCard>
      </ReactSelectionCardGroup>
    </section>
  );
}
