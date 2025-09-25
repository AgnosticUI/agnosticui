import React, { useEffect, useState } from "react";
import { ReactBreadcrumb } from "agnosticui-core/breadcrumb/react";
import type { BreadcrumbItem } from "agnosticui-core/breadcrumb";

// Import web components to ensure they're registered
import "agnosticui-core";

export default function ReactBreadcrumbDemo() {
  const [isReady, setIsReady] = useState(false);
  const [actions, setActions] = useState<string[]>([]);

  useEffect(() => {
    // Wait for web components to be defined before rendering
    const waitForComponents = async () => {
      try {
        await Promise.all([
          customElements.whenDefined("ag-breadcrumb"),
        ]);
        console.log("Breadcrumb web components are ready for React wrappers!");
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

  const handleBreadcrumbClick = (detail: { item: BreadcrumbItem; index: number; event: MouseEvent }) => {
    console.log(`Breadcrumb clicked:`, detail);
    addAction(`Clicked "${detail.item.label}" at index ${detail.index}${detail.item.href ? ` (href: ${detail.item.href})` : ''}`);
  };

  // Sample breadcrumb data sets
  const basicBreadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Laptops", href: "/products/laptops" },
    { label: "MacBook Pro", current: true }
  ];

  const simpleBreadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Current Page", current: true }
  ];

  const singleBreadcrumb: BreadcrumbItem[] = [
    { label: "Home", current: true }
  ];

  const mixedBreadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Category" }, // No href
    { label: "Subcategory", href: "/category/subcategory" },
    { label: "Current Item", current: true }
  ];

  const longBreadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Electronics", href: "/electronics" },
    { label: "Computers", href: "/electronics/computers" },
    { label: "Laptops", href: "/electronics/computers/laptops" },
    { label: "Gaming Laptops", href: "/electronics/computers/laptops/gaming" },
    { label: "High Performance", href: "/electronics/computers/laptops/gaming/high-performance" },
    { label: "ASUS ROG Series", current: true }
  ];

  if (!isReady) {
    return <div>Loading Breadcrumb components...</div>;
  }

  return (
    <div className="demo-container">
      <h1>AgnosticUI Breadcrumb - React Examples</h1>
      <p>
        Interactive demos showcasing the Breadcrumb component with WAI-ARIA compliance,
        multiple separator styles, and comprehensive click event handling.
      </p>

      {/* Basic Usage */}
      <section className="demo-section">
        <h2>Basic Breadcrumb</h2>
        <p>Standard breadcrumb navigation with chevron separators</p>
        <div className="demo-example">
          <ReactBreadcrumb
            items={basicBreadcrumbs}
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </div>
      </section>

      {/* Separator Types */}
      <section className="demo-section">
        <h2>Separator Variations</h2>

        <div className="demo-example">
          <h3>Default (Chevron)</h3>
          <ReactBreadcrumb
            items={simpleBreadcrumbs}
            type="default"
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </div>

        <div className="demo-example">
          <h3>Slash Separator</h3>
          <ReactBreadcrumb
            items={simpleBreadcrumbs}
            type="slash"
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </div>

        <div className="demo-example">
          <h3>Arrow Separator</h3>
          <ReactBreadcrumb
            items={simpleBreadcrumbs}
            type="arrow"
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </div>

        <div className="demo-example">
          <h3>Bullet Separator</h3>
          <ReactBreadcrumb
            items={simpleBreadcrumbs}
            type="bullet"
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </div>
      </section>

      {/* Edge Cases */}
      <section className="demo-section">
        <h2>Edge Cases & Special Scenarios</h2>

        <div className="demo-example">
          <h3>Single Item</h3>
          <ReactBreadcrumb
            items={singleBreadcrumb}
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </div>

        <div className="demo-example">
          <h3>Mixed Items (with/without links)</h3>
          <ReactBreadcrumb
            items={mixedBreadcrumbs}
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </div>

        <div className="demo-example">
          <h3>Long Breadcrumb Trail</h3>
          <ReactBreadcrumb
            items={longBreadcrumbs}
            type="slash"
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </div>
      </section>

      {/* Custom Aria Label */}
      <section className="demo-section">
        <h2>Accessibility Features</h2>

        <div className="demo-example">
          <h3>Custom Aria Label</h3>
          <ReactBreadcrumb
            items={basicBreadcrumbs}
            ariaLabel="Product navigation breadcrumb"
            onBreadcrumbClick={handleBreadcrumbClick}
          />
          <p><small>Check with screen reader: This breadcrumb has a custom aria-label</small></p>
        </div>
      </section>

      {/* Interactive Testing */}
      <section className="demo-section">
        <h2>Interactive Testing</h2>
        <p>Click any breadcrumb item to see event details below:</p>

        <div className="demo-example">
          <ReactBreadcrumb
            items={basicBreadcrumbs}
            type="arrow"
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </div>

        <div className="actions-log">
          <h4>Action Log:</h4>
          {actions.length === 0 ? (
            <p><em>No actions yet. Click a breadcrumb item above!</em></p>
          ) : (
            <ul>
              {actions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Form Integration Example */}
      <section className="demo-section">
        <h2>Form Integration</h2>
        <p>Breadcrumbs can be part of form navigation flows:</p>

        <form onSubmit={(e) => { e.preventDefault(); addAction("Form submitted!"); }}>
          <ReactBreadcrumb
            items={[
              { label: "Step 1: Personal Info", href: "#step1" },
              { label: "Step 2: Payment", href: "#step2" },
              { label: "Step 3: Confirmation", current: true }
            ]}
            onBreadcrumbClick={handleBreadcrumbClick}
          />

          <div style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "4px" }}>
            <h4>Step 3: Confirmation</h4>
            <p>Please review your information before submitting.</p>
            <button type="submit">Complete Order</button>
          </div>
        </form>
      </section>

      <style>{`
        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .demo-section {
          margin-bottom: 3rem;
          padding: 1.5rem;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: white;
        }

        .demo-example {
          margin: 1rem 0;
          padding: 1rem;
          background: #f9fafb;
          border-radius: 6px;
          border: 1px solid #f3f4f6;
        }

        .demo-example h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: #374151;
          font-size: 1rem;
        }

        .actions-log {
          margin-top: 1rem;
          padding: 1rem;
          background: #f3f4f6;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        .actions-log h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: #374151;
        }

        .actions-log ul {
          margin: 0;
          padding-left: 1.5rem;
          max-height: 200px;
          overflow-y: auto;
        }

        .actions-log li {
          margin: 0.25rem 0;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.875rem;
          color: #6b7280;
        }

        h1 {
          color: #111827;
          border-bottom: 2px solid #3b82f6;
          padding-bottom: 0.5rem;
        }

        h2 {
          color: #374151;
          margin-top: 0;
        }

        p {
          color: #6b7280;
          line-height: 1.6;
        }

        form {
          border: 1px solid #d1d5db;
          border-radius: 6px;
          padding: 1rem;
          background: white;
        }

        button[type="submit"] {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }

        button[type="submit"]:hover {
          background: #1d4ed8;
        }

        /* Breadcrumb styling using CSS custom properties */
        ag-breadcrumb {
          --ag-space-1: 0.25rem;
          --ag-space-2: 0.5rem;
          --ag-primary: #3b82f6;
          --ag-primary-hover: #1d4ed8;
          --ag-text-primary: #111827;
          --ag-text-secondary: #6b7280;
          --ag-background-secondary: rgba(59, 130, 246, 0.1);
          --ag-focus: #f59e0b;
          --ag-focus-width: 2px;
          --ag-focus-offset: 2px;
          --ag-border-radius: 0.25rem;
          --ag-transition-duration: 200ms;
        }
      `}</style>
    </div>
  );
}