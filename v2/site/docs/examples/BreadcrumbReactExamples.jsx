import { ReactBreadcrumb } from "agnosticui-core/breadcrumb/react";

export default function BreadcrumbReactExamples() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
  ];

  const handleClick = (event) => {
    console.log(
      `ReactBreadcrumb -> handleClick -- label: ${event.item.label}, href: ${event.item.href}`
    );
  };

  return (
    <section>
      {/* Default */}
      <div className="mbe4">
        <div className="mbe2">
          <h2>Default</h2>
        </div>
        <ReactBreadcrumb items={items} onBreadcrumbClick={handleClick} />
      </div>

      {/* Types */}
      <div className="mbe4">
        <div className="mbe2">
          <h2>Types</h2>
        </div>
        <ReactBreadcrumb
          className="mbe4"
          type="slash"
          items={items}
          onBreadcrumbClick={handleClick}
        />
        <ReactBreadcrumb
          className="mbe4"
          type="bullet"
          items={items}
          onBreadcrumbClick={handleClick}
        />
        <ReactBreadcrumb
          className="mbe4"
          type="arrow"
          items={items}
          onBreadcrumbClick={handleClick}
        />
        <ReactBreadcrumb
          primary
          type="arrow"
          items={items}
          onBreadcrumbClick={handleClick}
        />
      </div>

      {/* CSS Shadow Parts Customization */}
      <div className="mbe4">
        <div className="mbe2">
          <h2>CSS Shadow Parts Customization</h2>
          <p style={{ marginTop: "0.5rem", marginBottom: "1rem", color: "var(--vp-c-text-2)" }}>
            Breadcrumb can be customized using CSS Shadow Parts:
            <code>::part(ag-breadcrumb-item)</code>,
            <code>::part(ag-breadcrumb-item-link)</code>,
            <code>::part(ag-breadcrumb-item-current)</code>. The following are meant solely to show how to utilize CSS shadow parts to create custom breadcrumb styles. They are NOT meant to represent best practices or good taste in breadcrumb design!
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <h3>Minimal with Underline</h3>
            <div className="mbe3"></div>
            <ReactBreadcrumb className="custom-minimal-breadcrumb" items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
