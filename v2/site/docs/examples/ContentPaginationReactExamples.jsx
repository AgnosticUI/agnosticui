import { useState } from "react";
import { ReactContentPagination } from "agnosticui-core/content-pagination/react";

// Simple SVG icon components
const ChevronLeft = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ChevronUp = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

export default function ContentPaginationReactExamples() {
  const [navigationMessage, setNavigationMessage] = useState(null);
  const [navigationMessageNoHref, setNavigationMessageNoHref] = useState(null);

  const handleNavigate = (event) => {
    setNavigationMessage(
      `Clicked ${event.detail.type}: "${event.detail.item.title}"${
        event.detail.item.href ? ` → ${event.detail.item.href}` : " (no href)"
      }`
    );
    console.log("Navigate:", event.detail);
  };

  const handleNavigateNoHref = (event) => {
    setNavigationMessageNoHref(
      `Clicked ${event.detail.type}: "${event.detail.item.title}" (no href provided)`
    );
    console.log("Navigate (no href):", event.detail);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Basic Content Pagination</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Introduction", href: "#examples-1" }}
          next={{ title: "Getting Started", href: "#examples-1" }}
          parent={{ title: "Documentation", href: "#examples-1" }}
          onNavigate={handleNavigate}
        />
        {navigationMessage && (
          <p style={{ margin: 0, padding: 0, fontSize: "var(--ag-font-size-sm)", color: "var(--ag-text-secondary)" }}>
            {navigationMessage}
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>Without hrefs (navigate event only)</h2>
      </div>
      <p>Links without href still fire navigate events:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Introduction" }}
          next={{ title: "Getting Started" }}
          parent={{ title: "Documentation" }}
          onNavigate={handleNavigateNoHref}
        />
        {navigationMessageNoHref && (
          <p style={{ margin: 0, padding: 0, fontSize: "var(--ag-font-size-sm)", color: "var(--ag-text-secondary)" }}>
            {navigationMessageNoHref}
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>Previous and Next Only</h2>
      </div>
      <p>Omit parent link for simpler sequential navigation:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Chapter 1: Basics", href: "#examples-1" }}
          next={{ title: "Chapter 3: Advanced", href: "#examples-1" }}
        />
      </div>

      <div className="mbe4">
        <h2>Parent Only</h2>
      </div>
      <p>Show only the parent/overview link:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          parent={{ title: "Back to Documentation", href: "#examples-1" }}
        />
      </div>

      <div className="mbe4">
        <h2>Bordered Style</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Installation", href: "#examples-1" }}
          next={{ title: "Configuration", href: "#examples-1" }}
          parent={{ title: "Guides", href: "#examples-1" }}
          bordered
        />
      </div>

      <div className="mbe4">
        <h2>Custom Icons</h2>
      </div>
      <p>Override default icons using slots:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Prev Page", href: "#examples-1" }}
          next={{ title: "Next Page", href: "#examples-1" }}
          parent={{ title: "Overview", href: "#examples-1" }}
        >
          <ChevronLeft size={20} slot="previous-icon" />
          <ChevronRight size={20} slot="next-icon" />
          <ChevronUp size={20} slot="parent-icon" />
        </ReactContentPagination>
      </div>

      <div className="mbe4">
        <h2>Only Next</h2>
      </div>
      <p>First page scenario - only show next link:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          next={{ title: "Getting Started", href: "#examples-1" }}
          parent={{ title: "Documentation", href: "#examples-1" }}
        />
      </div>

      <div className="mbe4">
        <h2>Only Previous</h2>
      </div>
      <p>Last page scenario - only show previous link:</p>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          previous={{ title: "Deployment", href: "#examples-1" }}
          parent={{ title: "Documentation", href: "#examples-1" }}
        />
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization (Monochrome)</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactContentPagination
          className="monochrome-custom-content-pagination"
          previous={{ title: "Introduction", href: "#examples-1" }}
          next={{ title: "Getting Started", href: "#examples-1" }}
          parent={{ title: "Documentation", href: "#examples-1" }}
        >
          <ChevronLeft size={20} slot="previous-icon" />
          <ChevronRight size={20} slot="next-icon" />
          <ChevronUp size={20} slot="parent-icon" />
        </ReactContentPagination>
      </div>
    </section>
  );
}
