import { useState } from "react";
import { ReactDrawer } from "agnosticui-core/drawer/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function DrawerReactExamples() {
  const [isStartDrawerOpen, setIsStartDrawerOpen] = useState(false);
  const [isEndDrawerOpen, setIsEndDrawerOpen] = useState(false);
  const [isTopDrawerOpen, setIsTopDrawerOpen] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);
  const [isCustomDrawerOpen, setIsCustomDrawerOpen] = useState(false);

  return (
    <section>
      {/* Drawer from Start (Left) */}
      <div className="mbe4">
        <h2>Drawer from Start (Left)</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsStartDrawerOpen(true)}>
          Open Start Drawer
        </ReactButton>
        <ReactDrawer
          open={isStartDrawerOpen}
          onOpenChange={setIsStartDrawerOpen}
          position="start"
          heading="Navigation"
          showCloseButton
        >
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ padding: "0.5rem 0" }}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Dashboard
                </a>
              </li>
              <li style={{ padding: "0.5rem 0" }}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Projects
                </a>
              </li>
              <li style={{ padding: "0.5rem 0" }}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Team
                </a>
              </li>
              <li style={{ padding: "0.5rem 0" }}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </ReactDrawer>
      </div>

      {/* Drawer from End (Right) */}
      <div className="mbe4">
        <h2>Drawer from End (Right)</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsEndDrawerOpen(true)}>
          Open End Drawer
        </ReactButton>
        <ReactDrawer
          open={isEndDrawerOpen}
          onOpenChange={setIsEndDrawerOpen}
          position="end"
          heading="Settings"
          showCloseButton
          footer={
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <ReactButton onClick={() => setIsEndDrawerOpen(false)}>
                Cancel
              </ReactButton>
              <ReactButton variant="primary" onClick={() => setIsEndDrawerOpen(false)}>
                Save
              </ReactButton>
            </div>
          }
        >
          <div>
            <h4 style={{ marginTop: 0 }}>Preferences</h4>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              <input type="checkbox" style={{ marginRight: "0.5rem" }} />
              Enable notifications
            </label>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              <input type="checkbox" style={{ marginRight: "0.5rem" }} />
              Dark mode
            </label>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              <input type="checkbox" style={{ marginRight: "0.5rem" }} />
              Auto-save
            </label>
          </div>
        </ReactDrawer>
      </div>

      {/* Drawer from Top */}
      <div className="mbe4">
        <h2>Drawer from Top</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsTopDrawerOpen(true)}>
          Open Top Drawer
        </ReactButton>
        <ReactDrawer
          open={isTopDrawerOpen}
          onOpenChange={setIsTopDrawerOpen}
          position="top"
          heading="Notifications"
          showCloseButton
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                padding: "0.75rem",
                background: "var(--ag-background-secondary)",
                borderRadius: "4px",
              }}
            >
              <strong>New message</strong>
              <p
                style={{
                  margin: "0.25rem 0 0 0",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                }}
              >
                You have a new message from Sarah
              </p>
            </div>
            <div
              style={{
                padding: "0.75rem",
                background: "var(--ag-background-secondary)",
                borderRadius: "4px",
              }}
            >
              <strong>Update available</strong>
              <p
                style={{
                  margin: "0.25rem 0 0 0",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                }}
              >
                A new version is ready to install
              </p>
            </div>
          </div>
        </ReactDrawer>
      </div>

      {/* Drawer from Bottom */}
      <div className="mbe4">
        <h2>Drawer from Bottom</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsBottomDrawerOpen(true)}>
          Open Bottom Drawer
        </ReactButton>
        <ReactDrawer
          open={isBottomDrawerOpen}
          onOpenChange={setIsBottomDrawerOpen}
          position="bottom"
          heading="Quick Actions"
          showCloseButton
        >
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <ReactButton>
              <div className="flex-inline items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mie2"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                New Item
              </div>
            </ReactButton>
            <ReactButton>
              <div className="flex-inline items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mie2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Upload
              </div>
            </ReactButton>
            <ReactButton>
              <div className="flex-inline items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mie2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download
              </div>
            </ReactButton>
            <ReactButton>
              <div className="flex-inline items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mie2"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                Share
              </div>
            </ReactButton>
          </div>
        </ReactDrawer>
      </div>

      {/* Drawer with Custom Content */}
      <div className="mbe4">
        <h2>Drawer with Custom Content</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsCustomDrawerOpen(true)}>
          Open Filter Drawer
        </ReactButton>
        <ReactDrawer
          open={isCustomDrawerOpen}
          onOpenChange={setIsCustomDrawerOpen}
          position="end"
          showCloseButton
          header={
            <h2 style={{ margin: 0, fontSize: "var(--ag-font-size-lg)" }}>
              <div className="flex-inline items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mie2"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filters
              </div>
            </h2>
          }
          footer={
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <ReactButton onClick={() => setIsCustomDrawerOpen(false)}>
                Clear
              </ReactButton>
              <ReactButton variant="primary" onClick={() => setIsCustomDrawerOpen(false)}>
                Apply Filters
              </ReactButton>
            </div>
          }
        >
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ margin: "0 0 0.5rem 0" }}>Category</h4>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                <input type="checkbox" style={{ marginRight: "0.5rem" }} />
                Electronics
              </label>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                <input type="checkbox" style={{ marginRight: "0.5rem" }} />
                Clothing
              </label>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                <input type="checkbox" style={{ marginRight: "0.5rem" }} />
                Books
              </label>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ margin: "0 0 0.5rem 0" }}>Price Range</h4>
              <input type="range" min="0" max="1000" style={{ width: "100%" }} />
            </div>
          </div>
        </ReactDrawer>
      </div>
    </section>
  );
}
