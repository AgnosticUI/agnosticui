import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import svelteIcon from "@/assets/icons/svelte.svg";

const BreadcrumbSvelte = () => {
  return (
    <ComponentLayout
      componentName="Breadcrumb"
      framework="Svelte"
      frameworkIcon={svelteIcon}
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
                <code>{`import 'agnosticui-core/breadcrumb';`}</code>
              </pre>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground mt-2">
            Note: Svelte uses the vanilla web component directly - no wrapper needed!
          </p>
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
          language="svelte"
          code={`<script>
  import 'agnosticui-core/breadcrumb';

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
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="svelte"
          code={`<script>
  import 'agnosticui-core/breadcrumb';

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
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="svelte"
          code={`<script>
  import 'agnosticui-core/breadcrumb';

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
          preview={
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="svelte"
          code={`<script>
  import 'agnosticui-core/breadcrumb';

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
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="svelte"
          code={`<script>
  import 'agnosticui-core/breadcrumb';

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
          preview={
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="svelte"
          code={`<script>
  import 'agnosticui-core/breadcrumb';

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
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="svelte"
          code={`<script>
  import 'agnosticui-core/breadcrumb';

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
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                See CodeSandbox demo →
              </p>
            </div>
          }
          language="svelte"
          code={`<script>
  import 'agnosticui-core/breadcrumb';

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

        {/* CodeSandbox Link */}
        <section>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Try it on CodeSandbox</h3>
              <p className="text-muted-foreground mb-4">
                Explore the complete Svelte implementation with interactive examples.
              </p>
              <a
                href="https://codesandbox.io/s/agnosticui-breadcrumb-svelte-example"
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

export default BreadcrumbSvelte;
