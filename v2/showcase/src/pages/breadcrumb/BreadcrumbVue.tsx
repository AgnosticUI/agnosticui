import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";

const BreadcrumbVue = () => {
  return (
    <ComponentLayout
      componentName="Breadcrumb"
      framework="Vue"
      frameworkIcon={vueIcon}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Installation */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Installation</h2>
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
          <h2 className="text-3xl font-bold mb-4">Import</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple breadcrumb navigation with default styling."
          preview={
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="vue"
          code={`<template>
  <VueBreadcrumb :items="items" />
</template>

<script setup>
import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';

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
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="vue"
          code={`<template>
  <VueBreadcrumb :items="items" />
  <VueBreadcrumb :items="items" type="slash" />
  <VueBreadcrumb :items="items" type="arrow" />
  <VueBreadcrumb :items="items" type="bullet" />
</template>

<script setup>
import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics' }
];
</script>`}
        />

        {/* Primary Variant */}
        <CodeExample
          title="Primary Variant (Blue Links)"
          description="Opt-in blue link styling using the primary prop."
          preview={
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="vue"
          code={`<template>
  <!-- Default - inherits text color -->
  <VueBreadcrumb :items="items" />

  <!-- Primary - blue links with darker hover -->
  <VueBreadcrumb :items="items" primary />
</template>

<script setup>
import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics' }
];
</script>`}
        />

        {/* Long Navigation Path */}
        <CodeExample
          title="Long Navigation Path"
          description="Breadcrumb handles long navigation paths with wrapping."
          preview={
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="vue"
          code={`<template>
  <VueBreadcrumb :items="blogItems" />
</template>

<script setup>
import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';

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
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="vue"
          code={`<template>
  <VueBreadcrumb
    :items="items"
    ariaLabel="Settings navigation"
  />
</template>

<script setup>
import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';

const items = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Settings', href: '/settings' },
  { label: 'Profile', href: '/settings/profile' },
  { label: 'Security' }
];
</script>`}
        />

        {/* Interactive Example */}
        <CodeExample
          title="Interactive Example"
          description="Handle breadcrumb clicks with the @breadcrumb-click event."
          preview={
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="vue"
          code={`<template>
  <VueBreadcrumb
    :items="items"
    @breadcrumb-click="handleBreadcrumbClick"
  />
</template>

<script setup>
import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics' }
];

const handleBreadcrumbClick = (event) => {
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
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="vue"
          code={`<template>
  <!-- Last item is automatically current -->
  <VueBreadcrumb :items="autoCurrentItems" />

  <!-- Explicitly mark current page -->
  <VueBreadcrumb :items="explicitCurrentItems" />
</template>

<script setup>
import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';

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
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="vue"
          code={`<template>
  <VueBreadcrumb
    :items="blogItems"
    type="arrow"
    primary
    ariaLabel="Blog navigation"
  />
</template>

<script setup>
import { VueBreadcrumb } from 'agnosticui-core/breadcrumb/vue';

const blogItems = [
  { label: 'Blog', href: '/blog' },
  { label: 'Technology', href: '/blog/technology' },
  { label: 'Web Components', href: '/blog/technology/web-components' },
  { label: 'Getting Started with Lit' }
];
</script>`}
        />

        {/* CodeSandbox Link */}
        <section>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Try it on CodeSandbox</h3>
              <p className="text-muted-foreground mb-4">
                Explore the complete Vue implementation with interactive examples.
              </p>
              <a
                href="https://codesandbox.io/s/agnosticui-breadcrumb-vue-example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Open in CodeSandbox →
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </ComponentLayout>
  );
};

export default BreadcrumbVue;
