import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
import { useEffect, useRef, ReactNode } from "react";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";

interface BreadcrumbWrapperProps {
  children?: ReactNode;
  items?: Array<{ label: string; href?: string; current?: boolean }>;
  type?: string;
  primary?: boolean;
  ariaLabel?: string;
  onBreadcrumbClick?: (event: CustomEvent) => void;
}

// Helper component to render ag-breadcrumb in React
const BreadcrumbWrapper = ({ items = [], ...props }: BreadcrumbWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const listeners: Array<{ event: string; handler: EventListener }> = [];

    // Set items property
    (element as any).items = items;

    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith('on') && typeof value === 'function') {
        const eventName = key.toLowerCase().substring(2);
        const handler = value as EventListener;
        element.addEventListener(eventName, handler);
        listeners.push({ event: eventName, handler });
      } else if (typeof value === 'boolean') {
        if (value) {
          element.setAttribute(key, '');
        } else {
          element.removeAttribute(key);
        }
      } else if (value !== undefined && value !== null) {
        element.setAttribute(key, String(value));
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      listeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
    };
  }, [items, props]);

  return <ag-breadcrumb ref={ref}></ag-breadcrumb>;
};

const BreadcrumbVanilla = () => {
  const handleBreadcrumbClick = (event: CustomEvent) => {
    console.log("Breadcrumb clicked:", event.detail);
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
      framework="Vanilla (Web Components)"
      frameworkIcon={javascriptIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
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
              <pre className="text-sm overflow-x-auto">
                <code>{`import 'agnosticui-core';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple breadcrumb navigation with default styling."
          preview={<BreadcrumbWrapper items={basicItems} />}
          language="javascript"
          code={`import "agnosticui-core";

const breadcrumb = document.querySelector('ag-breadcrumb');
breadcrumb.items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Electronics" }
];`}
        />

        {/* Separator Types */}
        <CodeExample
          title="Separator Types"
          description="Different separator styles: default (›), slash (/), arrow (→), and bullet (•)."
          preview={
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <BreadcrumbWrapper items={basicItems} />
              <BreadcrumbWrapper items={basicItems} type="slash" />
              <BreadcrumbWrapper items={basicItems} type="arrow" />
              <BreadcrumbWrapper items={basicItems} type="bullet" />
            </div>
          }
          code={`<ag-breadcrumb></ag-breadcrumb>
<ag-breadcrumb type="slash"></ag-breadcrumb>
<ag-breadcrumb type="arrow"></ag-breadcrumb>
<ag-breadcrumb type="bullet"></ag-breadcrumb>

<script>
  const items = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics" }
  ];

  document.querySelectorAll('ag-breadcrumb').forEach(bc => {
    bc.items = items;
  });
</script>`}
        />

        {/* Primary Variant */}
        <CodeExample
          title="Primary Variant (Blue Links)"
          description="Opt-in blue link styling using the primary attribute."
          preview={
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem", color: "#6b7280" }}>Default (inherits text color):</p>
                <BreadcrumbWrapper items={basicItems} />
              </div>
              <div>
                <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem", color: "#6b7280" }}>Primary (blue links):</p>
                <BreadcrumbWrapper items={basicItems} primary />
              </div>
            </div>
          }
          code={`<!-- Default - inherits text color -->
<ag-breadcrumb id="default"></ag-breadcrumb>

<!-- Primary - blue links with darker hover -->
<ag-breadcrumb id="primary" primary></ag-breadcrumb>

<script>
  const items = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics" }
  ];

  document.getElementById('default').items = items;
  document.getElementById('primary').items = items;
</script>`}
        />

        {/* Long Navigation Path */}
        <CodeExample
          title="Long Navigation Path"
          description="Breadcrumb handles long navigation paths with wrapping."
          preview={<BreadcrumbWrapper items={blogItems} />}
          language="javascript"
          code={`const blogItems = [
  { label: "Blog", href: "/blog" },
  { label: "Technology", href: "/blog/technology" },
  { label: "Web Components", href: "/blog/technology/web-components" },
  { label: "Getting Started with Lit" }
];

const breadcrumb = document.querySelector('ag-breadcrumb');
breadcrumb.items = blogItems;`}
        />

        {/* Custom aria-label */}
        <CodeExample
          title="Custom ARIA Label"
          description="Provide a custom aria-label for the navigation landmark."
          preview={
            <BreadcrumbWrapper
              items={settingsItems}
              ariaLabel="Settings navigation"
            />
          }
          code={`<ag-breadcrumb aria-label="Settings navigation"></ag-breadcrumb>

<script>
  const breadcrumb = document.querySelector('ag-breadcrumb');
  breadcrumb.items = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Settings", href: "/settings" },
    { label: "Profile", href: "/settings/profile" },
    { label: "Security" }
  ];
</script>`}
        />

        {/* Interactive Example */}
        <CodeExample
          title="Interactive Example"
          description="Handle breadcrumb clicks with the breadcrumb-click event."
          preview={
            <BreadcrumbWrapper
              items={basicItems}
              onBreadcrumbClick={handleBreadcrumbClick}
            />
          }
          language="javascript"
          code={`<ag-breadcrumb id="interactive"></ag-breadcrumb>

<script>
  const breadcrumb = document.getElementById('interactive');
  breadcrumb.items = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics" }
  ];

  breadcrumb.addEventListener('breadcrumb-click', (event) => {
    console.log("Breadcrumb clicked:", event.detail);
    // { item, index, event }
  });
</script>`}
        />

        {/* Current Page Indicator */}
        <CodeExample
          title="Current Page Indicator"
          description="The last item (or items marked with current: true) are styled as the current page with aria-current='page'."
          preview={
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem", color: "#6b7280" }}>Last item is automatically current:</p>
                <BreadcrumbWrapper items={basicItems} />
              </div>
              <div>
                <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem", color: "#6b7280" }}>Explicitly mark current:</p>
                <BreadcrumbWrapper
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products", current: true },
                    { label: "Electronics", href: "/products/electronics" }
                  ]}
                />
              </div>
            </div>
          }
          language="javascript"
          code={`// Last item is automatically current
breadcrumb.items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Electronics" }
];

// Explicitly mark current page
breadcrumb.items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", current: true },
  { label: "Electronics", href: "/products/electronics" }
];`}
        />

        {/* Combined Features */}
        <CodeExample
          title="Combined Features"
          description="Combine separator types with primary styling and custom ARIA labels."
          preview={
            <BreadcrumbWrapper
              items={blogItems}
              type="arrow"
              primary
              ariaLabel="Blog navigation"
            />
          }
          code={`<ag-breadcrumb type="arrow" primary aria-label="Blog navigation"></ag-breadcrumb>

<script>
  const breadcrumb = document.querySelector('ag-breadcrumb');
  breadcrumb.items = [
    { label: "Blog", href: "/blog" },
    { label: "Technology", href: "/blog/technology" },
    { label: "Web Components", href: "/blog/technology/web-components" },
    { label: "Getting Started with Lit" }
  ];
</script>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default BreadcrumbVanilla;
