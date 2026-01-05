import { ReactHeader } from "agnosticui-core/header/react";

const HeaderReactExamples = () => {
  return (
    <section className="ag-header-examples">
      <div className="mbe4">
        <h2>Basic Header</h2>
        <p className="mbs2 mbe3">
          A simple header with logo and navigation. On mobile, content stacks vertically. On
          desktop (≥960px), it displays horizontally.
        </p>
      </div>
      <div className="mbe4">
        <ReactHeader>
          <a
            slot="logo"
            href="#"
            style={{
              textDecoration: "none",
              color: "var(--vp-c-brand-1)",
              fontWeight: 700,
              fontSize: "1.25rem",
            }}
          >
            AgnosticUI
          </a>
          <nav>
            <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
              <li>
                <a href="#home" style={{ textDecoration: "none", color: "inherit" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </ReactHeader>
      </div>

      <div className="mbe4">
        <h2>Header with Logo Image</h2>
      </div>
      <div className="mbe4">
        <ReactHeader>
          <a
            slot="logo"
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="currentColor"
              style={{ color: "var(--vp-c-brand-1)" }}
            >
              <circle cx="16" cy="16" r="14" fill="var(--ag-primary)" />
              <text x="16" y="22" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                A
              </text>
            </svg>
            <span style={{ fontWeight: 700, fontSize: "1.25rem" }}>MyApp</span>
          </a>
          <nav>
            <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
              <li>
                <a href="#dashboard" style={{ textDecoration: "none", color: "inherit" }}>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#settings" style={{ textDecoration: "none", color: "inherit" }}>
                  Settings
                </a>
              </li>
              <li>
                <a href="#profile" style={{ textDecoration: "none", color: "inherit" }}>
                  Profile
                </a>
              </li>
            </ul>
          </nav>
        </ReactHeader>
      </div>

      <div className="mbe4">
        <h2>Content Justification</h2>
        <p className="mbs2 mbe3">
          Control how content is aligned within the header using the <code>contentJustify</code>{" "}
          prop.
        </p>
      </div>
      <div className="mbe4">
        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Justify: Between (Default)
          </h3>
          <ReactHeader contentJustify="between">
            <a
              slot="logo"
              href="#"
              style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
            >
              Logo
            </a>
            <nav>
              <a href="#nav" style={{ textDecoration: "none", color: "inherit" }}>
                Navigation
              </a>
            </nav>
          </ReactHeader>
        </div>

        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Justify: Start
          </h3>
          <ReactHeader contentJustify="start">
            <a
              slot="logo"
              href="#"
              style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
            >
              Logo
            </a>
            <nav style={{ marginLeft: "2rem" }}>
              <a href="#nav" style={{ textDecoration: "none", color: "inherit" }}>
                Navigation
              </a>
            </nav>
          </ReactHeader>
        </div>

        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Justify: End
          </h3>
          <ReactHeader contentJustify="end">
            <a
              slot="logo"
              href="#"
              style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
            >
              Logo
            </a>
            <nav style={{ marginLeft: "2rem" }}>
              <a href="#nav" style={{ textDecoration: "none", color: "inherit" }}>
                Navigation
              </a>
            </nav>
          </ReactHeader>
        </div>

        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Justify: Center
          </h3>
          <ReactHeader contentJustify="center">
            <a
              slot="logo"
              href="#"
              style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
            >
              Logo
            </a>
            <nav style={{ marginLeft: "2rem" }}>
              <a href="#nav" style={{ textDecoration: "none", color: "inherit" }}>
                Navigation
              </a>
            </nav>
          </ReactHeader>
        </div>

        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Justify: Around
          </h3>
          <ReactHeader contentJustify="around">
            <a
              slot="logo"
              href="#"
              style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
            >
              Logo
            </a>
            <nav>
              <a href="#nav" style={{ textDecoration: "none", color: "inherit" }}>
                Navigation
              </a>
            </nav>
          </ReactHeader>
        </div>
      </div>

      <div className="mbe4">
        <h2>Sticky Header</h2>
        <p className="mbs2 mbe3">
          Sticky headers remain visible at the top of the viewport when scrolling. Scroll down in
          the demo below to see it in action.
        </p>
      </div>
      <div
        className="mbe4"
        style={{
          border: "1px solid var(--ag-border)",
          borderRadius: "var(--ag-radius-md)",
          overflow: "hidden",
        }}
      >
        <div style={{ height: "300px", overflowY: "scroll" }}>
          <ReactHeader sticky={true}>
            <a
              slot="logo"
              href="#"
              style={{
                textDecoration: "none",
                color: "var(--vp-c-brand-1)",
                fontWeight: 700,
                fontSize: "1.25rem",
              }}
            >
              Sticky Header
            </a>
            <nav>
              <ul
                style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}
              >
                <li>
                  <a href="#section1" style={{ textDecoration: "none", color: "inherit" }}>
                    Section 1
                  </a>
                </li>
                <li>
                  <a href="#section2" style={{ textDecoration: "none", color: "inherit" }}>
                    Section 2
                  </a>
                </li>
              </ul>
            </nav>
          </ReactHeader>
          <div style={{ padding: "2rem" }}>
            <h3 id="section1">Section 1</h3>
            <p style={{ marginBottom: "200px" }}>
              Scroll down to see the sticky behavior. The header stays at the top.
            </p>
            <h3 id="section2">Section 2</h3>
            <p style={{ marginBottom: "200px" }}>
              The header remains visible as you scroll through content.
            </p>
            <p>End of scrollable content.</p>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the header's appearance without affecting its internal
          structure.
        </p>
      </div>
      <div className="mbe4">
        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Gradient Background
          </h3>
          <ReactHeader className="custom-header-gradient">
            <a
              slot="logo"
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: 700,
                fontSize: "1.25rem",
              }}
            >
              Gradient Header
            </a>
            <nav>
              <ul
                style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}
              >
                <li>
                  <a href="#home" style={{ textDecoration: "none", color: "white" }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" style={{ textDecoration: "none", color: "white" }}>
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </ReactHeader>
        </div>

        <div className="mbe3">
          <h3 className="mbe2" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Custom Border
          </h3>
          <ReactHeader className="custom-header-border">
            <a
              slot="logo"
              href="#"
              style={{
                textDecoration: "none",
                color: "var(--vp-c-brand-1)",
                fontWeight: 700,
                fontSize: "1.25rem",
              }}
            >
              Bordered Header
            </a>
            <nav>
              <ul
                style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}
              >
                <li>
                  <a href="#home" style={{ textDecoration: "none", color: "inherit" }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </ReactHeader>
        </div>
      </div>

      <style>{`
        /* CSS Shadow Parts customization examples */
        .custom-header-gradient::part(ag-header) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-bottom: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .custom-header-border::part(ag-header) {
          background: var(--ag-background-secondary);
          border-bottom: 3px solid var(--ag-primary);
          box-shadow: none;
        }
      `}</style>
    </section>
  );
};

export default HeaderReactExamples;
