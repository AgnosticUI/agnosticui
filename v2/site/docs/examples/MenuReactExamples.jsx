import { useState, useEffect } from "react";
import { ReactMenu, ReactMenuItem, ReactMenuSeparator } from "agnosticui-core/menu/react";

export default function MenuReactExamples() {
  const [lastEvent, setLastEvent] = useState(null);
  const [lastSelectedValue, setLastSelectedValue] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMenuOpen = (e) => {
    const selectedInfo = lastSelectedValue ? `, selected: ${lastSelectedValue}` : '';
    setLastEvent(`menu-open (open: ${e.detail.open}${selectedInfo})`);
  };

  const handleMenuClose = (e) => {
    const selectedInfo = lastSelectedValue ? `, selected: ${lastSelectedValue}` : '';
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
          <ReactMenu menuAriaLabel="Menu options">
            Menu
            <ReactMenuItem slot="menu" value="edit">Edit</ReactMenuItem>
            <ReactMenuItem slot="menu" value="copy">Copy</ReactMenuItem>
            <ReactMenuItem slot="menu" value="paste">Paste</ReactMenuItem>
            <ReactMenuSeparator slot="menu" />
            <ReactMenuItem slot="menu" value="delete">Delete</ReactMenuItem>
          </ReactMenu>
        </div>

        <div className="mbe4">
          <h2>Menu Alignment</h2>
          <p className="mbe4">
            The <code>menu-align</code> prop controls horizontal alignment. Use <code>menu-align="right"</code> when the menu button is near the right edge of the viewport.
          </p>
        </div>
        <div className="stacked mbe4">
          <div className="flex items-center" style={{ gap: "1rem", justifyContent: "space-between" }}>
            <ReactMenu menuAlign="left" menuAriaLabel="Left-aligned menu">
              Left Aligned
              <ReactMenuItem slot="menu" value="option1">Option 1</ReactMenuItem>
              <ReactMenuItem slot="menu" value="option2">Option 2</ReactMenuItem>
              <ReactMenuItem slot="menu" value="option3">Option 3</ReactMenuItem>
            </ReactMenu>
            <ReactMenu menuAlign="right" menuAriaLabel="Right-aligned menu">
              Right Aligned
              <ReactMenuItem slot="menu" value="option1">Option 1</ReactMenuItem>
              <ReactMenuItem slot="menu" value="option2">Option 2</ReactMenuItem>
              <ReactMenuItem slot="menu" value="option3">Option 3</ReactMenuItem>
            </ReactMenu>
          </div>
        </div>

        <div className="mbe4">
          <h2>Menu with Links</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenu menuAriaLabel="Navigation menu">
            Navigation
            <ReactMenuItem slot="menu" value="home" href="#home">Home</ReactMenuItem>
            <ReactMenuItem slot="menu" value="about" href="#about">About</ReactMenuItem>
            <ReactMenuItem slot="menu" value="contact" href="#contact">Contact</ReactMenuItem>
            <ReactMenuSeparator slot="menu" />
            <ReactMenuItem slot="menu" value="external" href="https://example.com" target="_blank">
              External Link
            </ReactMenuItem>
          </ReactMenu>
        </div>

        <div className="mbe4">
          <h2>Disabled Button</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenu disabled menuAriaLabel="Disabled menu">
            Disabled Menu
            <ReactMenuItem slot="menu" value="item1">Item 1</ReactMenuItem>
            <ReactMenuItem slot="menu" value="item2">Item 2</ReactMenuItem>
          </ReactMenu>
        </div>

        <div className="mbe4">
          <h2>Menu with Disabled Items</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenu menuAriaLabel="Menu with disabled items">
            Mixed States
            <ReactMenuItem slot="menu" value="enabled1">Enabled Item</ReactMenuItem>
            <ReactMenuItem slot="menu" value="disabled1" disabled>Disabled Item</ReactMenuItem>
            <ReactMenuItem slot="menu" value="enabled2">Another Enabled</ReactMenuItem>
            <ReactMenuSeparator slot="menu" />
            <ReactMenuItem slot="menu" value="disabled2" disabled>Another Disabled</ReactMenuItem>
          </ReactMenu>
        </div>

        <div className="mbe4">
          <h2>Complex Menu (File Menu)</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenu menuAriaLabel="File menu">
            File
            <ReactMenuItem slot="menu" value="new">New</ReactMenuItem>
            <ReactMenuItem slot="menu" value="open">Open...</ReactMenuItem>
            <ReactMenuItem slot="menu" value="recent">Open Recent</ReactMenuItem>
            <ReactMenuSeparator slot="menu" />
            <ReactMenuItem slot="menu" value="save">Save</ReactMenuItem>
            <ReactMenuItem slot="menu" value="save-as">Save As...</ReactMenuItem>
            <ReactMenuSeparator slot="menu" />
            <ReactMenuItem slot="menu" value="export">Export</ReactMenuItem>
            <ReactMenuItem slot="menu" value="import">Import</ReactMenuItem>
            <ReactMenuSeparator slot="menu" />
            <ReactMenuItem slot="menu" value="print">Print</ReactMenuItem>
            <ReactMenuSeparator slot="menu" />
            <ReactMenuItem slot="menu" value="close">Close</ReactMenuItem>
          </ReactMenu>
        </div>

        <div className="mbe4">
          <h2>Monochrome Variant</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenu menuAriaLabel="Monochrome menu" buttonVariant="monochrome">
            Monochrome Menu
            <ReactMenuItem slot="menu" value="option1" variant="monochrome">Option 1</ReactMenuItem>
            <ReactMenuItem slot="menu" value="option2" variant="monochrome" selected>Option 2 (Selected)</ReactMenuItem>
            <ReactMenuItem slot="menu" value="option3" variant="monochrome">Option 3</ReactMenuItem>
          </ReactMenu>
        </div>

        <div className="mbe4">
          <h2>Event Handling</h2>
        </div>
        <div className="stacked mbe4">
          <div className="flex-inline items-center" style={{ gap: "10px" }}>
            <ReactMenu
              menuAriaLabel="Event testing menu"
              onMenuOpen={handleMenuOpen}
              onMenuClose={handleMenuClose}
              onMenuSelect={handleMenuSelect}
            >
              Event Test
              <ReactMenuItem slot="menu" value="option1">Option 1</ReactMenuItem>
              <ReactMenuItem slot="menu" value="option2">Option 2</ReactMenuItem>
              <ReactMenuSeparator slot="menu" />
              <ReactMenuItem slot="menu" value="option3">Option 3</ReactMenuItem>
            </ReactMenu>
            {lastEvent && <p>Last event: <strong>{lastEvent}</strong></p>}
          </div>
        </div>

        <div className="mbe4">
          <h2>Menu Types: Navigation vs Selection</h2>
          <p className="mbe4">
            The <code>type</code> prop controls selection behavior. Use <code>type="default"</code> (the default) for navigation menus where selection is transient, and <code>type="single-select"</code> for menus where selection should persist (like filters or sorting).
          </p>
        </div>
        <div className="stacked mbe4">
          <div className="flex items-start" style={{ gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <h3 className="mbe4">Navigation Menu (type="default")</h3>
              <p className="mbe4">
                Selection clears when menu closes. Use for navigation and actions.
              </p>
              <ReactMenu menuAriaLabel="User navigation">
                User Menu
                <ReactMenuItem slot="menu" value="profile">Profile</ReactMenuItem>
                <ReactMenuItem slot="menu" value="settings">Settings</ReactMenuItem>
                <ReactMenuSeparator slot="menu" />
                <ReactMenuItem slot="menu" value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </div>

            <div>
              <h3 className="mbe4">Selection Menu (type="single-select")</h3>
              <p className="mbe4">
                Selection persists when menu closes. Use for filters, sorting, etc.
              </p>
              <ReactMenu menuType="single-select" selectedValue="date" menuAriaLabel="Sort options">
                Sort by
                <ReactMenuItem slot="menu" value="date">Date</ReactMenuItem>
                <ReactMenuItem slot="menu" value="name">Name</ReactMenuItem>
                <ReactMenuItem slot="menu" value="size">Size</ReactMenuItem>
              </ReactMenu>
            </div>
          </div>
        </div>

        <div className="mbe4">
          <h2>Additional Gutter</h2>
          <p className="mbe4">
            The <code>additional-gutter</code> prop adds extra vertical spacing beyond the trigger button's height when positioning the menu. This is useful when the menu button is within a taller container (like a header) and you need the menu to clear that container.
          </p>
        </div>
        <div className="stacked mbe4">
          <div>
            <p className="mbe4">This menu has <code>additional-gutter="20px"</code></p>
            <ReactMenu menuVariant="chevron" additionalGutter="20px" menuAriaLabel="Menu with additional gutter">
              Menu with Extra Gutter
              <ReactMenuItem slot="menu" value="option1">Option 1</ReactMenuItem>
              <ReactMenuItem slot="menu" value="option2">Option 2</ReactMenuItem>
              <ReactMenuItem slot="menu" value="option3">Option 3</ReactMenuItem>
            </ReactMenu>
          </div>
        </div>

        <div className="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenu menuAriaLabel="Custom menu" className="custom-menu-button">
            Custom Menu
            <ReactMenuItem slot="menu" value="one">Option 1</ReactMenuItem>
            <ReactMenuItem slot="menu" value="two">Option 2</ReactMenuItem>
            <ReactMenuSeparator slot="menu" />
            <ReactMenuItem slot="menu" value="three">Option 3</ReactMenuItem>
          </ReactMenu>
        </div>
      </section>
    </>
  );
}
