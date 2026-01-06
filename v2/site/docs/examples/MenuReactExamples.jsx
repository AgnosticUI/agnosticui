import { useState, useEffect } from "react";
import {
  ReactMenuButton,
  ReactMenu,
  ReactMenuItem,
  ReactMenuSeparator,
} from "agnosticui-core/menu/react";

export default function MenuReactExamples() {
  const [lastEvent, setLastEvent] = useState(null);
  const [lastSelectedValue, setLastSelectedValue] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMenuOpen = (e) => {
    const selectedInfo = lastSelectedValue
      ? `, selected: ${lastSelectedValue}`
      : "";
    setLastEvent(`menu-open (open: ${e.detail.open}${selectedInfo})`);
  };

  const handleMenuClose = (e) => {
    const selectedInfo = lastSelectedValue
      ? `, selected: ${lastSelectedValue}`
      : "";
    setLastEvent(`menu-close (open: ${e.detail.open}${selectedInfo})`);
  };

  const handleMenuSelect = (e) => {
    setLastSelectedValue(e.detail.value);
    setLastEvent(`menu-select (value: ${e.detail.value})`);
  };

  return (
    <>
      <style>{`
        /* Responsive styles */
        @media (max-width: 767px) {
          .desktop-only-items {
            display: none;
          }
        }
        @media (min-width: 768px) {
          .mobile-only-items {
            display: none;
          }
        }

        /* Dynamic icon styles */
        .dynamic-icon-menu .menu-icon,
        .dynamic-icon-menu .close-icon {
          transition: opacity var(--ag-motion-medium) ease-in-out;
        }
        .dynamic-icon-menu[data-menu-open="false"] .close-icon {
          opacity: 0;
          pointer-events: none;
          position: absolute;
        }
        .dynamic-icon-menu[data-menu-open="true"] .menu-icon {
          opacity: 0;
          pointer-events: none;
          position: absolute;
        }

        /* Custom menu styles */
        .custom-menu-button ag-button::part(ag-button) {
          background-color: #4a5568;
          color: white;
          border: 2px solid #2d3748;
          border-radius: 8px;
        }
        .custom-menu-button .label {
          font-weight: bold;
        }
        .custom-menu-button .chevron-icon {
          color: #a0aec0;
        }
        .custom-menu-button ag-menu::part(ag-menu) {
          background-color: #2d3748;
          border: 1px solid #4a5568;
          border-radius: 8px;
        }
        .custom-menu-button ag-menu-item::part(ag-menu-item-button) {
          color: white;
        }
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):focus,
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):hover {
          color: black;
        }
      `}</style>

      <section>
        <div className="mbe4">
          <h2>Basic Menu</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton menuAriaLabel="Menu options">
            Menu
            <ReactMenu slot="menu">
              <ReactMenuItem value="edit">Edit</ReactMenuItem>
              <ReactMenuItem value="copy">Copy</ReactMenuItem>
              <ReactMenuItem value="paste">Paste</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="delete">Delete</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Menu Alignment</h2>
          <p className="mbe4">
            The <code>menu-align</code> prop controls horizontal alignment. Use{" "}
            <code>menu-align="right"</code> when the menu button is near the
            right edge of the viewport.
          </p>
        </div>
        <div className="stacked mbe4">
          <div
            className="flex items-center"
            style={{ gap: "1rem", justifyContent: "space-between" }}
          >
            <ReactMenuButton menuAlign="left" menuAriaLabel="Left-aligned menu">
              Left Aligned
              <ReactMenu slot="menu">
                <ReactMenuItem value="option1">Option 1</ReactMenuItem>
                <ReactMenuItem value="option2">Option 2</ReactMenuItem>
                <ReactMenuItem value="option3">Option 3</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            <ReactMenuButton
              menuAlign="right"
              menuAriaLabel="Right-aligned menu"
            >
              Right Aligned
              <ReactMenu slot="menu">
                <ReactMenuItem value="option1">Option 1</ReactMenuItem>
                <ReactMenuItem value="option2">Option 2</ReactMenuItem>
                <ReactMenuItem value="option3">Option 3</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>

        <div className="mbe4">
          <h2>Menu with Links</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton menuAriaLabel="Navigation menu">
            Navigation
            <ReactMenu slot="menu">
              <ReactMenuItem value="home" href="#home">
                Home
              </ReactMenuItem>
              <ReactMenuItem value="about" href="#about">
                About
              </ReactMenuItem>
              <ReactMenuItem value="contact" href="#contact">
                Contact
              </ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem
                value="external"
                href="https://example.com"
                target="_blank"
              >
                External Link
              </ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Disabled Button</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton disabled menuAriaLabel="Disabled menu">
            Disabled Menu
            <ReactMenu slot="menu">
              <ReactMenuItem value="item1">Item 1</ReactMenuItem>
              <ReactMenuItem value="item2">Item 2</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Menu with Disabled Items</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton menuAriaLabel="Menu with disabled items">
            Mixed States
            <ReactMenu slot="menu">
              <ReactMenuItem value="enabled1">Enabled Item</ReactMenuItem>
              <ReactMenuItem value="disabled1" disabled>
                Disabled Item
              </ReactMenuItem>
              <ReactMenuItem value="enabled2">Another Enabled</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="disabled2" disabled>
                Another Disabled
              </ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Complex Menu (File Menu)</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton menuAriaLabel="File menu">
            File
            <ReactMenu slot="menu">
              <ReactMenuItem value="new">New</ReactMenuItem>
              <ReactMenuItem value="open">Open...</ReactMenuItem>
              <ReactMenuItem value="recent">Open Recent</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="save">Save</ReactMenuItem>
              <ReactMenuItem value="save-as">Save As...</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="export">Export</ReactMenuItem>
              <ReactMenuItem value="import">Import</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="print">Print</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="close">Close</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Menu with Sections</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton menuAriaLabel="User menu">
            <div className="flex-inline items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="16"
                height="16"
                className="mie2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              User Menu
            </div>
            <ReactMenu slot="menu">
              <ReactMenuItem value="profile">Profile</ReactMenuItem>
              <ReactMenuItem value="settings">Settings</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="help">Help</ReactMenuItem>
              <ReactMenuItem value="feedback">Send Feedback</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="logout">Logout</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Menu with Icon Button</h2>
          <p className="mbe4">
            The following examples show using an icon as the trigger. The{" "}
            <code>menu-variant="icon"</code> removes the chevron and provides a
            minimal button container for the icon. You can also use an icon with
            the default chevron trigger as we see on the right.
          </p>
        </div>
        <div className="mbe4">
          <h3>Large</h3>
          <div className="flex-inline items-center" style={{ gap: "1rem" }}>
            {/* Icon only */}
            <ReactMenuButton
              menuVariant="icon"
              ghost
              menuAriaLabel="More options menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="24"
                height="24"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            {/* Icon with chevron */}
            <ReactMenuButton menuAriaLabel="More options menu">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="24"
                height="24"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>
        <div className="mbe4">
          <h3>Medium</h3>
          <div className="flex-inline items-center" style={{ gap: "1rem" }}>
            {/* Icon only */}
            <ReactMenuButton
              menuVariant="icon"
              ghost
              size="sm"
              menuAriaLabel="More options menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                height="18"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            {/* Icon with chevron */}
            <ReactMenuButton size="sm" menuAriaLabel="More options menu">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                height="18"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>
        <div className="mbe4">
          <h3>Small</h3>
          <div className="flex-inline items-center" style={{ gap: "1rem" }}>
            {/* Icon only */}
            <ReactMenuButton
              menuVariant="icon"
              ghost
              size="x-sm"
              menuAriaLabel="More options menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            {/* Icon with chevron */}
            <ReactMenuButton size="x-sm" menuAriaLabel="More options menu">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>

        <div className="mbe4">
          <h2>Monochrome Variant</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton
            menuAriaLabel="Monochrome menu"
            buttonVariant="monochrome"
          >
            Monochrome Menu
            <ReactMenu slot="menu">
              <ReactMenuItem value="option1" variant="monochrome">
                Option 1
              </ReactMenuItem>
              <ReactMenuItem value="option2" variant="monochrome" selected>
                Option 2 (Selected)
              </ReactMenuItem>
              <ReactMenuItem value="option3" variant="monochrome">
                Option 3
              </ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Event Handling</h2>
        </div>
        <div className="stacked mbe4">
          <div className="flex-inline items-center" style={{ gap: "10px" }}>
            <ReactMenuButton
              menuAriaLabel="Event testing menu"
              onMenuOpen={handleMenuOpen}
              onMenuClose={handleMenuClose}
              onMenuSelect={handleMenuSelect}
            >
              Event Test
              <ReactMenu slot="menu">
                <ReactMenuItem value="option1">Option 1</ReactMenuItem>
                <ReactMenuItem value="option2">Option 2</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="option3">Option 3</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            {lastEvent && (
              <p>
                Last event: <strong>{lastEvent}</strong>
              </p>
            )}
          </div>
        </div>

        <div className="mbe4">
          <h2>Menu Types: Navigation vs Selection</h2>
          <p className="mbe4">
            The <code>type</code> prop controls selection behavior. Use{" "}
            <code>type="default"</code> (the default) for navigation menus where
            selection is transient, and <code>type="single-select"</code> for
            menus where selection should persist (like filters or sorting).
          </p>
        </div>
        <div className="stacked mbe4">
          <div
            className="flex items-start"
            style={{ gap: "2rem", flexWrap: "wrap" }}
          >
            <div>
              <h3 className="mbe4">Navigation Menu (type="default")</h3>
              <p className="mbe4">
                Selection clears when menu closes. Use for navigation and
                actions.
              </p>
              <ReactMenuButton menuAriaLabel="User navigation">
                User Menu
                <ReactMenu slot="menu">
                  <ReactMenuItem value="profile">Profile</ReactMenuItem>
                  <ReactMenuItem value="settings">Settings</ReactMenuItem>
                  <ReactMenuSeparator />
                  <ReactMenuItem value="logout">Logout</ReactMenuItem>
                </ReactMenu>
              </ReactMenuButton>
            </div>

            <div>
              <h3 className="mbe4">Selection Menu (type="single-select")</h3>
              <p className="mbe4">
                Selection persists when menu closes. Use for filters, sorting,
                etc.
              </p>
              <ReactMenuButton
                menuType="single-select"
                selectedValue="date"
                menuAriaLabel="Sort options"
              >
                Sort by
                <ReactMenu slot="menu">
                  <ReactMenuItem value="date">Date</ReactMenuItem>
                  <ReactMenuItem value="name">Name</ReactMenuItem>
                  <ReactMenuItem value="size">Size</ReactMenuItem>
                </ReactMenu>
              </ReactMenuButton>
            </div>
          </div>
        </div>

        <div className="mbe4">
          <h2>Additional Gutter</h2>
          <p className="mbe4">
            The <code>additional-gutter</code> prop adds extra vertical spacing
            beyond the trigger button's height when positioning the menu. This
            is useful when the menu button is within a taller container (like a
            header) and you need the menu to clear that container.
          </p>
        </div>
        <div className="stacked mbe4">
          <div>
            <p className="mbe4">
              This menu has <code>additional-gutter="20px"</code>
            </p>
            <ReactMenuButton
              menuVariant="chevron"
              additionalGutter="20px"
              menuAriaLabel="Menu with additional gutter"
            >
              Menu with Extra Gutter
              <ReactMenu slot="menu">
                <ReactMenuItem value="option1">Option 1</ReactMenuItem>
                <ReactMenuItem value="option2">Option 2</ReactMenuItem>
                <ReactMenuItem value="option3">Option 3</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>

        <div className="mbe4">
          <h2>Responsive Hidden Items (checkHiddenItems)</h2>
          <p className="mbe4">
            The <code>check-hidden-items</code> prop enables the menu to skip
            items that are hidden via CSS (like responsive media queries). This
            is useful when you wrap menu items in responsive containers but want
            keyboard navigation to work correctly.
          </p>
          <p className="mbe4">
            <strong>Performance Note:</strong> Enabling this feature checks
            computed styles on every keyboard navigation, which has a
            performance cost. Only enable it if you're using CSS-based hiding.
            For better performance, prefer conditional rendering instead.
          </p>
        </div>
        <div className="stacked mbe4">
          <div>
            <p className="mbe4">
              <strong>Try resizing your browser:</strong> Desktop items are
              hidden on mobile (&lt;768px), mobile items are hidden on desktop.
              Keyboard navigation skips hidden items.
            </p>
            <ReactMenuButton checkHiddenItems menuAriaLabel="Responsive menu">
              Responsive Menu
              <ReactMenu slot="menu">
                <div className="desktop-only-items">
                  <ReactMenuItem value="desktop1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    Desktop Item 1
                  </ReactMenuItem>
                  <ReactMenuItem value="desktop2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    Desktop Item 2
                  </ReactMenuItem>
                </div>
                <div className="mobile-only-items">
                  <ReactMenuItem value="mobile1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Mobile Item 1
                  </ReactMenuItem>
                  <ReactMenuItem value="mobile2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Mobile Item 2
                  </ReactMenuItem>
                </div>
                <ReactMenuSeparator />
                <ReactMenuItem value="always">Always Visible</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>

        <div className="mbe4">
          <h2>Recommended: Conditional Rendering (Better Performance)</h2>
          <p className="mbe4">
            Instead of using <code>check-hidden-items</code>, you can achieve
            the same result with better performance by using conditional
            rendering. This removes hidden items from the DOM entirely.
          </p>
        </div>
        <div className="stacked mbe4">
          <div>
            <p className="mbe4">
              <strong>Current viewport:</strong>{" "}
              {isMobile ? "Mobile" : "Desktop"}
            </p>
            <ReactMenuButton menuAriaLabel="Conditional menu">
              Conditional Menu
              <ReactMenu slot="menu">
                {!isMobile && (
                  <ReactMenuItem value="desktop1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    Desktop Item 1
                  </ReactMenuItem>
                )}
                {!isMobile && (
                  <ReactMenuItem value="desktop2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    Desktop Item 2
                  </ReactMenuItem>
                )}
                {isMobile && (
                  <ReactMenuItem value="mobile1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Mobile Item 1
                  </ReactMenuItem>
                )}
                {isMobile && (
                  <ReactMenuItem value="mobile2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Mobile Item 2
                  </ReactMenuItem>
                )}
                <ReactMenuSeparator />
                <ReactMenuItem value="always">Always Visible</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>

        <div className="mbe4">
          <h2>Dynamic Icon Switching</h2>
          <p className="mbe4">
            The menu button exposes a <code>data-menu-open</code> attribute that
            changes based on the menu state. You can use this with CSS to
            dynamically switch icons when the menu opens/closes.
          </p>
        </div>
        <div className="stacked mbe4">
          <div className="flex-inline items-center" style={{ gap: "1rem" }}>
            <ReactMenuButton
              menuVariant="icon"
              ghost
              size="sm"
              className="dynamic-icon-menu"
              ariaLabel="Toggle menu"
              menuAriaLabel="Navigation menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
                className="menu-icon"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
                className="close-icon"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="home">Home</ReactMenuItem>
                <ReactMenuItem value="about">About</ReactMenuItem>
                <ReactMenuItem value="contact">Contact</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            <p>Click the icon to see it change from ☰ to ✕</p>
          </div>
        </div>

        <div className="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton
            menuAriaLabel="Custom menu"
            className="custom-menu-button"
          >
            Custom Menu
            <ReactMenu slot="menu">
              <ReactMenuItem value="one">Option 1</ReactMenuItem>
              <ReactMenuItem value="two">Option 2</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="three">Option 3</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>
      </section>
    </>
  );
}
