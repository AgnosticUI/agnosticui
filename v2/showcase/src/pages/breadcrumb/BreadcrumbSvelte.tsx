import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import svelteIcon from "@/assets/icons/svelte.svg";
import { useEffect, useRef } from "react";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";

interface BreadcrumbWrapperProps {
  items?: Array<{ label: string; href?: string; current?: boolean }>;
  type?: string;
  primary?: boolean;
  ariaLabel?: string;
}

// Helper component to render ag-breadcrumb in React
const BreadcrumbWrapper = ({ items = [], ...props }: BreadcrumbWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set items property
    (element as any).items = items;

    Object.entries(props).forEach(([key, value]) => {
      if (typeof value === 'boolean') {
        if (value) {
          element.setAttribute(key, '');
        } else {
          element.removeAttribute(key);
        }
      } else if (value !== undefined && value !== null) {
        element.setAttribute(key, String(value));
      }
    });
  }, [items, props]);

  return <ag-breadcrumb ref={ref}></ag-breadcrumb>;
};

const BreadcrumbSvelte = () => {
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
      framework="Svelte"
      frameworkIcon={svelteIcon}
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

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Note:</strong> Svelte works directly with the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-breadcrumb</code> web component using standard HTML syntax.
                The previews below show the web component as it would appear in your Svelte application.
                Svelte's reactivity works seamlessly with web components through standard DOM properties and events.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple breadcrumb navigation with default styling."
          preview={<BreadcrumbWrapper items={basicItems} />}
          code={`<script>
  import 'agnosticui-core';

  let breadcrumb;

  $: if (breadcrumb) {
    breadcrumb.items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics' }
    ];
  }
</script>

<ag-breadcrumb bind:this={breadcrumb}></ag-breadcrumb>`}
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
          code={`<script>
  import 'agnosticui-core';

  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics' }
  ];

  let breadcrumbs = [];

  $: breadcrumbs.forEach(bc => {
    bc.items = items;
  });
</script>

<ag-breadcrumb bind:this={breadcrumbs[0]}></ag-breadcrumb>
<ag-breadcrumb bind:this={breadcrumbs[1]} type="slash"></ag-breadcrumb>
<ag-breadcrumb bind:this={breadcrumbs[2]} type="arrow"></ag-breadcrumb>
<ag-breadcrumb bind:this={breadcrumbs[3]} type="bullet"></ag-breadcrumb>`}
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
          code={`<script>
  import 'agnosticui-core';

  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics' }
  ];

  let defaultBreadcrumb, primaryBreadcrumb;

  $: if (defaultBreadcrumb) defaultBreadcrumb.items = items;
  $: if (primaryBreadcrumb) primaryBreadcrumb.items = items;
</script>

<!-- Default - inherits text color -->
<ag-breadcrumb bind:this={defaultBreadcrumb}></ag-breadcrumb>

<!-- Primary - blue links with darker hover -->
<ag-breadcrumb bind:this={primaryBreadcrumb} primary></ag-breadcrumb>`}
        />

        {/* Long Navigation Path */}
        <CodeExample
          title="Long Navigation Path"
          description="Breadcrumb handles long navigation paths with wrapping."
          preview={<BreadcrumbWrapper items={blogItems} />}
          code={`<script>
  import 'agnosticui-core';

  let breadcrumb;

  $: if (breadcrumb) {
    breadcrumb.items = [
      { label: 'Blog', href: '/blog' },
      { label: 'Technology', href: '/blog/technology' },
      { label: 'Web Components', href: '/blog/technology/web-components' },
      { label: 'Getting Started with Lit' }
    ];
  }
</script>

<ag-breadcrumb bind:this={breadcrumb}></ag-breadcrumb>`}
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
          code={`<script>
  import 'agnosticui-core';

  let breadcrumb;

  $: if (breadcrumb) {
    breadcrumb.items = [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Settings', href: '/settings' },
      { label: 'Profile', href: '/settings/profile' },
      { label: 'Security' }
    ];
  }
</script>

<ag-breadcrumb
  bind:this={breadcrumb}
  aria-label="Settings navigation"
></ag-breadcrumb>`}
        />

        {/* Interactive Example */}
        <CodeExample
          title="Interactive Example"
          description="Handle breadcrumb clicks with the breadcrumb-click event."
          preview={<BreadcrumbWrapper items={basicItems} />}
          code={`<script>
  import 'agnosticui-core';

  let breadcrumb;

  $: if (breadcrumb) {
    breadcrumb.items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics' }
    ];
  }

  function handleBreadcrumbClick(event) {
    console.log('Breadcrumb clicked:', event.detail);
    // { item, index, event }
  }
</script>

<ag-breadcrumb
  bind:this={breadcrumb}
  on:breadcrumb-click={handleBreadcrumbClick}
></ag-breadcrumb>`}
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
          code={`<script>
  import 'agnosticui-core';

  let autoBreadcrumb, explicitBreadcrumb;

  // Last item is automatically current
  $: if (autoBreadcrumb) {
    autoBreadcrumb.items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics' }
    ];
  }

  // Explicitly mark current page
  $: if (explicitBreadcrumb) {
    explicitBreadcrumb.items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products', current: true },
      { label: 'Electronics', href: '/products/electronics' }
    ];
  }
</script>

<ag-breadcrumb bind:this={autoBreadcrumb}></ag-breadcrumb>
<ag-breadcrumb bind:this={explicitBreadcrumb}></ag-breadcrumb>`}
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
          code={`<script>
  import 'agnosticui-core';

  let breadcrumb;

  $: if (breadcrumb) {
    breadcrumb.items = [
      { label: 'Blog', href: '/blog' },
      { label: 'Technology', href: '/blog/technology' },
      { label: 'Web Components', href: '/blog/technology/web-components' },
      { label: 'Getting Started with Lit' }
    ];
  }
</script>

<ag-breadcrumb
  bind:this={breadcrumb}
  type="arrow"
  primary
  aria-label="Blog navigation"
></ag-breadcrumb>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default BreadcrumbSvelte;
