import { ReactBreadcrumb } from "agnosticui-core/react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import reactIcon from "@/assets/icons/react.svg";
import styles from "@/shared/styles.module.css";

const BreadcrumbReact = () => {
  const handleBreadcrumbClick = (detail: { item: any; index: number; event: Event }) => {
    console.log("Breadcrumb clicked:", detail);
  };

  const basicItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics" }
  ];

  const blogItems = [
    { label: "Blog", href: "/blog" },
    { label: "Technology", href: "/blog/technology" },
    { label: "Web Components", href: "/blog/technology/web-components" },
    { label: "Getting Started with Lit" }
  ];

  const settingsItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Settings", href: "/settings" },
    { label: "Profile", href: "/settings/profile" },
    { label: "Security" }
  ];

  return (
    <ComponentLayout
      componentName="Breadcrumb"
      framework="React"
      frameworkIcon={reactIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnosticui-core</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Import */}
        <section>
          <h2 className={styles.heading2}>Import</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>{`import { ReactBreadcrumb } from 'agnosticui-core/react';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple breadcrumb navigation with default styling."
          preview={
            <ReactBreadcrumb
              items={basicItems}
            />
          }
          language="typescript"
          code={`import { ReactBreadcrumb } from "agnosticui-core/react";

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Electronics" }
];

<ReactBreadcrumb items={items} />`}
        />

        {/* Separator Types */}
        <CodeExample
          title="Separator Types"
          description="Different separator styles: default (›), slash (/), arrow (→), and bullet (•)."
          preview={
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <ReactBreadcrumb items={basicItems} />
              <ReactBreadcrumb items={basicItems} type="slash" />
              <ReactBreadcrumb items={basicItems} type="arrow" />
              <ReactBreadcrumb items={basicItems} type="bullet" />
            </div>
          }
          language="xml"
          code={`<ReactBreadcrumb items={items} />
<ReactBreadcrumb items={items} type="slash" />
<ReactBreadcrumb items={items} type="arrow" />
<ReactBreadcrumb items={items} type="bullet" />`}
        />

        {/* Primary Variant */}
        <CodeExample
          title="Primary Variant (Blue Links)"
          description="Opt-in blue link styling using the primary attribute."
          preview={
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem", color: "#6b7280" }}>Default (inherits text color):</p>
                <ReactBreadcrumb items={basicItems} />
              </div>
              <div>
                <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem", color: "#6b7280" }}>Primary (blue links):</p>
                <ReactBreadcrumb items={basicItems} primary />
              </div>
            </div>
          }
          language="xml"
          code={`{/* Default - inherits text color */}
<ReactBreadcrumb items={items} />

{/* Primary - blue links with darker hover */}
<ReactBreadcrumb items={items} primary />`}
        />

        {/* Long Navigation Path */}
        <CodeExample
          title="Long Navigation Path"
          description="Breadcrumb handles long navigation paths with wrapping."
          preview={<ReactBreadcrumb items={blogItems} />}
          language="typescript"
          code={`const blogItems = [
  { label: "Blog", href: "/blog" },
  { label: "Technology", href: "/blog/technology" },
  { label: "Web Components", href: "/blog/technology/web-components" },
  { label: "Getting Started with Lit" }
];

<ReactBreadcrumb items={blogItems} />`}
        />

        {/* Custom aria-label */}
        <CodeExample
          title="Custom ARIA Label"
          description="Provide a custom aria-label for the navigation landmark."
          preview={
            <ReactBreadcrumb
              items={settingsItems}
              ariaLabel="Settings navigation"
            />
          }
          language="xml"
          code={`<ReactBreadcrumb
  items={items}
  ariaLabel="Settings navigation"
/>`}
        />

        {/* Interactive Example */}
        <CodeExample
          title="Interactive Example"
          description="Handle breadcrumb clicks with the onBreadcrumbClick event."
          preview={
            <ReactBreadcrumb
              items={basicItems}
              onBreadcrumbClick={handleBreadcrumbClick}
            />
          }
          language="typescript"
          code={`const handleBreadcrumbClick = (detail: { item: any; index: number; event: Event }) => {
  console.log("Breadcrumb clicked:", detail);
  // Open console to see the event details
};

<ReactBreadcrumb
  items={items}
  onBreadcrumbClick={handleBreadcrumbClick}
/>`}
        />

        {/* Current Page Indicator */}
        <CodeExample
          title="Current Page Indicator"
          description="The last item (or items marked with current: true) are styled as the current page with aria-current='page'."
          preview={
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem", color: "#6b7280" }}>Last item is automatically current:</p>
                <ReactBreadcrumb items={basicItems} />
              </div>
              <div>
                <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem", color: "#6b7280" }}>Explicitly mark current:</p>
                <ReactBreadcrumb
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products", current: true },
                    { label: "Electronics", href: "/products/electronics" }
                  ]}
                />
              </div>
            </div>
          }
          language="typescript"
          code={`{/* Last item is automatically current */}
<ReactBreadcrumb items={items} />

{/* Explicitly mark current page */}
<ReactBreadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products", current: true },
    { label: "Electronics", href: "/products/electronics" }
  ]}
/>`}
        />

        {/* Combined Features */}
        <CodeExample
          title="Combined Features"
          description="Combine separator types with primary styling and custom ARIA labels."
          preview={
            <ReactBreadcrumb
              items={blogItems}
              type="arrow"
              primary
              ariaLabel="Blog navigation"
            />
          }
          language="xml"
          code={`<ReactBreadcrumb
  items={blogItems}
  type="arrow"
  primary
  ariaLabel="Blog navigation"
/>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default BreadcrumbReact;
