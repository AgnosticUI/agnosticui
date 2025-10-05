import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";
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

const BreadcrumbVue = () => {
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
      framework="Vue"
      frameworkIcon={vueIcon}
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
                <code>{`import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className={styles.smallParagraphBlue}>
                <strong>Note:</strong> The VueBreadcrumb component is a thin wrapper around the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-breadcrumb</code> web component.
                The previews below show the underlying web component, while the code examples demonstrate the proper Vue syntax.
                The Vue wrapper handles prop forwarding and provides a native Vue developer experience.
              </p>
              <div className={styles.dividerSection}>
                <p className={styles.smallParagraphBlue}>
                  <strong>Try it live:</strong> See the VueBreadcrumb component in action in CodeSandbox
                </p>
                <a
                  href="https://codesandbox.io/s/agnosticui-vue-breadcrumb-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" />
                  </svg>
                  Open in CodeSandbox
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple breadcrumb navigation with default styling."
          preview={<BreadcrumbWrapper items={basicItems} />}
          code={`<template>
  <VueBreadcrumb :items="items" />
</template>

<script setup lang="ts">
import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';
import 'agnosticui-core';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics' }
];
</script>`}
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
          code={`<template>
  <VueBreadcrumb :items="items" />
  <VueBreadcrumb :items="items" type="slash" />
  <VueBreadcrumb :items="items" type="arrow" />
  <VueBreadcrumb :items="items" type="bullet" />
</template>`}
        />

        {/* Primary Variant */}
        <CodeExample
          title="Primary Variant (Blue Links)"
          description="Opt-in blue link styling using the primary prop."
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
          code={`<template>
  <!-- Default - inherits text color -->
  <VueBreadcrumb :items="items" />

  <!-- Primary - blue links with darker hover -->
  <VueBreadcrumb :items="items" primary />
</template>`}
        />

        {/* Long Navigation Path */}
        <CodeExample
          title="Long Navigation Path"
          description="Breadcrumb handles long navigation paths with wrapping."
          preview={<BreadcrumbWrapper items={blogItems} />}
          code={`<template>
  <VueBreadcrumb :items="blogItems" />
</template>

<script setup lang="ts">
const blogItems = [
  { label: 'Blog', href: '/blog' },
  { label: 'Technology', href: '/blog/technology' },
  { label: 'Web Components', href: '/blog/technology/web-components' },
  { label: 'Getting Started with Lit' }
];
</script>`}
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
          code={`<template>
  <VueBreadcrumb
    :items="items"
    ariaLabel="Settings navigation"
  />
</template>`}
        />

        {/* Interactive Example */}
        <CodeExample
          title="Interactive Example"
          description="Handle breadcrumb clicks with the @breadcrumb-click event."
          preview={<BreadcrumbWrapper items={basicItems} />}
          code={`<template>
  <VueBreadcrumb
    :items="items"
    @breadcrumb-click="handleBreadcrumbClick"
  />
</template>

<script setup lang="ts">
const handleBreadcrumbClick = (event: CustomEvent) => {
  console.log('Breadcrumb clicked:', event.detail);
  // { item, index, event }
};
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
          code={`<template>
  <!-- Last item is automatically current -->
  <VueBreadcrumb :items="autoCurrentItems" />

  <!-- Explicitly mark current page -->
  <VueBreadcrumb :items="explicitCurrentItems" />
</template>

<script setup lang="ts">
const autoCurrentItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics' }
];

const explicitCurrentItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products', current: true },
  { label: 'Electronics', href: '/products/electronics' }
];
</script>`}
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
          code={`<template>
  <VueBreadcrumb
    :items="blogItems"
    type="arrow"
    primary
    ariaLabel="Blog navigation"
  />
</template>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default BreadcrumbVue;
