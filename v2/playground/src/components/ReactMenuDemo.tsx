import React, { useState } from "react";
import { ReactMenuButton, ReactMenu, ReactMenuItem, ReactMenuSeparator } from "agnosticui-core/menu/react";

const ReactMenuDemo: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleMenuSelect = (detail: { value: string }) => {
    setSelectedItem(detail.value);
    console.log("React Menu - Selected item:", detail.value);
  };

  const handleMenuOpen = () => {
    console.log("React Menu - Menu opened");
  };

  const handleMenuClose = () => {
    console.log("React Menu - Menu closed");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h3>React Menu Component</h3>
      <p>Selected item: <strong>{selectedItem || "None"}</strong></p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", margin: "1rem 0" }}>
        <ReactMenuButton
          onMenuOpen={handleMenuOpen}
          onMenuClose={handleMenuClose}
        >
          Actions Menu
          <ReactMenu>
            <ReactMenuItem value="edit" onMenuSelect={handleMenuSelect}>
              Edit Item
            </ReactMenuItem>
            <ReactMenuItem value="copy" onMenuSelect={handleMenuSelect}>
              Copy Item
            </ReactMenuItem>
            <ReactMenuSeparator />
            <ReactMenuItem value="delete" onMenuSelect={handleMenuSelect}>
              Delete Item
            </ReactMenuItem>
            <ReactMenuItem value="disabled" disabled onMenuSelect={handleMenuSelect}>
              Disabled Item
            </ReactMenuItem>
          </ReactMenu>
        </ReactMenuButton>

        <ReactMenuButton ariaLabel="Settings menu">
          Settings
          <ReactMenu>
            <ReactMenuItem value="profile" onMenuSelect={handleMenuSelect}>
              Profile Settings
            </ReactMenuItem>
            <ReactMenuItem value="notifications" onMenuSelect={handleMenuSelect}>
              Notifications
            </ReactMenuItem>
            <ReactMenuSeparator />
            <ReactMenuItem value="privacy" onMenuSelect={handleMenuSelect}>
              Privacy & Security
            </ReactMenuItem>
            <ReactMenuItem
              value="help"
              href="/help"
              target="_blank"
              onMenuSelect={handleMenuSelect}
            >
              Help & Support
            </ReactMenuItem>
          </ReactMenu>
        </ReactMenuButton>
      </div>

      <div style={{
        fontSize: "0.875rem",
        color: "var(--ag-text-secondary)",
        margin: "1rem 0",
        padding: "0.5rem",
        background: "var(--ag-background-secondary)",
        borderRadius: "4px",
        border: "1px solid var(--ag-border-primary)"
      }}>
        💡 <strong>Console Logging:</strong> Open your browser console to see React menu interaction events.
        These events demonstrate proper React integration with custom event handling.
      </div>
    </div>
  );
};

export default ReactMenuDemo;