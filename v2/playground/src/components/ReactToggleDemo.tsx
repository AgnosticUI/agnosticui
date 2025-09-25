import React, { useEffect, useState } from "react";
import { ReactToggle } from "agnosticui-core/toggle/react";

// Import web components to ensure they're registered
import "agnosticui-core";

export default function ReactToggleDemo() {
  const [isReady, setIsReady] = useState(false);
  const [basicToggle, setBasicToggle] = useState(false);
  const [formToggle, setFormToggle] = useState(true);
  const [actions, setActions] = useState<string[]>([]);

  useEffect(() => {
    // Wait for web components to be defined before rendering
    const waitForComponents = async () => {
      try {
        await Promise.all([
          customElements.whenDefined("ag-toggle"),
        ]);
        console.log("Toggle web components are ready for React wrappers!");
        setIsReady(true);
      } catch (error) {
        console.error("Error waiting for web components:", error);
        // Fall back to rendering anyway after a short delay
        setTimeout(() => setIsReady(true), 1000);
      }
    };

    waitForComponents();
  }, []);

  const addAction = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setActions(prev => [
      `${timestamp}: ${message}`,
      ...prev.slice(0, 9) // Keep last 10 actions
    ]);
  };

  const handleToggleChange = (detail: { checked: boolean; name: string; value: string }) => {
    console.log(`Toggle changed:`, detail);
    const label = detail.name || 'Toggle';
    const state = detail.checked ? 'ON' : 'OFF';
    addAction(`${label} switched ${state}${detail.value ? ` (value: ${detail.value})` : ''}`);
  };

  const handleBasicToggle = (detail: { checked: boolean; name: string; value: string }) => {
    setBasicToggle(detail.checked);
    handleToggleChange(detail);
  };

  const handleFormToggle = (detail: { checked: boolean; name: string; value: string }) => {
    setFormToggle(detail.checked);
    handleToggleChange(detail);
  };

  const clearActions = () => {
    setActions([]);
  };

  if (!isReady) {
    return (
      <div style={{ padding: "1rem", color: "#666" }}>
        Loading React Toggle components...
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h3>React Toggle Wrapper Examples</h3>

      <p style={{ fontSize: "0.875rem", color: "var(--c-text-light)", margin: "0 0 1rem 0", padding: "0.5rem", backgroundColor: "var(--c-bg-secondary)", borderRadius: "4px", border: "1px solid var(--c-border)" }}>
        💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see toggle change events from all React wrapper examples below.
        <button onClick={() => console.log('🎯 TIP: Expand the logged objects to see toggle state, name, value, and other properties from React event handlers!')} style={{ color: "var(--ag-primary)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}>Click here</button> for event debugging tips!
      </p>

      <div style={{ display: "grid", gap: "2rem", maxWidth: "800px" }}>
        {/* Basic Toggle Examples */}
        <div style={{ padding: "1.5rem", border: "1px solid var(--c-border)", borderRadius: "8px", backgroundColor: "var(--c-bg-secondary)" }}>
          <h4 style={{ marginTop: 0 }}>Basic Toggles</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle
                label="Basic Toggle"
                checked={basicToggle}
                name="basicToggle"
                onChange={handleBasicToggle}
              />
              <span>State: {basicToggle ? 'ON' : 'OFF'}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle
                label="Default Checked"
                checked={true}
                name="defaultChecked"
                onChange={handleToggleChange}
              />
              <span>Always starts checked</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle
                label="With Value"
                checked={false}
                name="valueToggle"
                value="premium-feature"
                onChange={handleToggleChange}
              />
              <span>Has a form value</span>
            </div>
          </div>
        </div>

        {/* Size Variants */}
        <div style={{ padding: "1.5rem", border: "1px solid var(--c-border)", borderRadius: "8px", backgroundColor: "var(--c-bg-secondary)" }}>
          <h4 style={{ marginTop: 0 }}>Size Variants</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Extra Small" size="xs" name="xsToggle" onChange={handleToggleChange} />
              <span>xs size</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Small" size="sm" name="smToggle" onChange={handleToggleChange} />
              <span>sm size</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Medium (Default)" size="md" name="mdToggle" onChange={handleToggleChange} />
              <span>md size</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Large" size="lg" name="lgToggle" onChange={handleToggleChange} />
              <span>lg size</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Extra Large" size="xl" name="xlToggle" onChange={handleToggleChange} />
              <span>xl size</span>
            </div>
          </div>
        </div>

        {/* Color Variants */}
        <div style={{ padding: "1.5rem", border: "1px solid var(--c-border)", borderRadius: "8px", backgroundColor: "var(--c-bg-secondary)" }}>
          <h4 style={{ marginTop: 0 }}>Color Variants</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Default" variant="default" checked={true} name="defaultVariant" onChange={handleToggleChange} />
              <span>Default blue</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Success" variant="success" checked={true} name="successVariant" onChange={handleToggleChange} />
              <span>Success green</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Warning" variant="warning" checked={true} name="warningVariant" onChange={handleToggleChange} />
              <span>Warning orange</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Danger" variant="danger" checked={true} name="dangerVariant" onChange={handleToggleChange} />
              <span>Danger red</span>
            </div>
          </div>
        </div>

        {/* States */}
        <div style={{ padding: "1.5rem", border: "1px solid var(--c-border)", borderRadius: "8px", backgroundColor: "var(--c-bg-secondary)" }}>
          <h4 style={{ marginTop: 0 }}>Toggle States</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Disabled Off" disabled={true} checked={false} name="disabledOff" onChange={handleToggleChange} />
              <span>Cannot be toggled</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Disabled On" disabled={true} checked={true} name="disabledOn" onChange={handleToggleChange} />
              <span>Cannot be toggled</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle label="Read-only" readonly={true} checked={true} name="readonly" onChange={handleToggleChange} />
              <span>Looks interactive but won't change</span>
            </div>
          </div>
        </div>

        {/* Form Integration */}
        <div style={{ padding: "1.5rem", border: "1px solid var(--c-border)", borderRadius: "8px", backgroundColor: "var(--c-bg-secondary)" }}>
          <h4 style={{ marginTop: 0 }}>Form Integration Example</h4>
          <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle
                label="Newsletter Subscription"
                checked={formToggle}
                name="newsletter"
                value="subscribed"
                onChange={handleFormToggle}
              />
              <span>Subscribe to our newsletter</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle
                label="Marketing Emails"
                checked={false}
                name="marketing"
                value="enabled"
                onChange={handleToggleChange}
              />
              <span>Receive marketing emails</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ReactToggle
                label="Dark Mode"
                checked={false}
                name="theme"
                value="dark"
                onChange={handleToggleChange}
              />
              <span>Enable dark theme</span>
            </div>
          </form>
        </div>

        {/* Action Log */}
        <div style={{ padding: "1.5rem", border: "1px solid var(--c-border)", borderRadius: "8px", backgroundColor: "var(--c-bg-secondary)" }}>
          <h4 style={{ marginTop: 0 }}>Action Log</h4>
          <div style={{ border: "1px solid #ddd", borderRadius: "4px", padding: "1rem", backgroundColor: "white", maxHeight: "300px", overflowY: "auto" }}>
            <button
              onClick={clearActions}
              disabled={actions.length === 0}
              style={{
                padding: "0.5rem 1rem",
                background: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: actions.length === 0 ? "not-allowed" : "pointer",
                marginBottom: "1rem",
                opacity: actions.length === 0 ? 0.5 : 1
              }}
            >
              Clear Log
            </button>
            {actions.length === 0 ? (
              <p style={{ color: "#666", fontStyle: "italic", margin: 0 }}>
                No actions yet. Toggle some switches above!
              </p>
            ) : (
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {actions.map((action, index) => (
                  <li key={index} style={{
                    padding: "0.25rem 0",
                    borderBottom: index < actions.length - 1 ? "1px solid #f0f0f0" : "none",
                    fontFamily: "monospace",
                    fontSize: "0.9rem"
                  }}>
                    {action}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}