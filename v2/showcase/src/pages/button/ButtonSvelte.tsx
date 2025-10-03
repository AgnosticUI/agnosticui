import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Settings } from "lucide-react";

import svelteIcon from "@/assets/icons/svelte.svg";
import "agnosticui-core";

const ButtonSvelte = () => {
  return (
    <ComponentLayout
      componentName="Button"
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
                <code>npm install agnostic-svelte</code>
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
                <strong>Note:</strong> Svelte works directly with the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-button</code> web component using standard HTML syntax.
                The previews below show the web component as it would appear in your Svelte application.
                Svelte's reactivity works seamlessly with web components through standard DOM properties and events.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="The default button component in its simplest form."
          preview={<ag-button>Default Button</ag-button>}
          code={`<script>
  import 'agnosticui-core';
</script>

<ag-button>Default Button</ag-button>`}
        />

        <CodeExample
          title="Button Variants"
          description="Different visual styles for various use cases."
          preview={
            <>
              <ag-button>Default</ag-button>
              <ag-button variant="primary">Primary</ag-button>
              <ag-button variant="secondary">Secondary</ag-button>
              <ag-button variant="warning">Warning</ag-button>
              <ag-button variant="danger">Danger</ag-button>
            </>
          }
          code={`<ag-button>Default</ag-button>
<ag-button variant="primary">Primary</ag-button>
<ag-button variant="secondary">Secondary</ag-button>
<ag-button variant="warning">Warning</ag-button>
<ag-button variant="danger">Danger</ag-button>`}
        />

        <CodeExample
          title="Button Sizes"
          description="T-shirt sizing from extra small to extra large."
          preview={
            <>
              <ag-button size="x-sm">Extra Small</ag-button>
              <ag-button size="sm">Small</ag-button>
              <ag-button size="md">Medium</ag-button>
              <ag-button size="lg">Large</ag-button>
              <ag-button size="xl">Extra Large</ag-button>
            </>
          }
          code={`<ag-button size="x-sm">Extra Small</ag-button>
<ag-button size="sm">Small</ag-button>
<ag-button size="md">Medium</ag-button>
<ag-button size="lg">Large</ag-button>
<ag-button size="xl">Extra Large</ag-button>`}
        />

        <CodeExample
          title="Button Shapes"
          description="Different shapes including capsule, rounded, circle, square, and rounded-square."
          preview={
            <>
              <ag-button shape="capsule">Capsule Button</ag-button>
              <ag-button shape="rounded">Rounded Button</ag-button>
              <ag-button shape="circle" variant="primary">+</ag-button>
              <ag-button shape="square" variant="secondary">-</ag-button>
              <ag-button shape="rounded-square" variant="warning">+</ag-button>
            </>
          }
          code={`<ag-button shape="capsule">Capsule Button</ag-button>
<ag-button shape="rounded">Rounded Button</ag-button>
<ag-button shape="circle" variant="primary">+</ag-button>
<ag-button shape="square" variant="secondary">-</ag-button>
<ag-button shape="rounded-square" variant="warning">+</ag-button>`}
        />

        <CodeExample
          title="Bordered Buttons"
          description="Outline style with transparent background and colored border. Fills with color on hover."
          preview={
            <>
              <ag-button bordered>Default Bordered</ag-button>
              <ag-button bordered variant="primary">Primary Bordered</ag-button>
              <ag-button bordered variant="secondary">Secondary Bordered</ag-button>
              <ag-button bordered variant="warning">Warning Bordered</ag-button>
              <ag-button bordered variant="danger">Danger Bordered</ag-button>
            </>
          }
          code={`<ag-button bordered>Default Bordered</ag-button>
<ag-button bordered variant="primary">Primary Bordered</ag-button>
<ag-button bordered variant="secondary">Secondary Bordered</ag-button>
<ag-button bordered variant="warning">Warning Bordered</ag-button>
<ag-button bordered variant="danger">Danger Bordered</ag-button>`}
        />

        <CodeExample
          title="Ghost Buttons"
          description="Minimal button with transparent background and minimal padding. Respects variant colors."
          preview={
            <>
              <ag-button ghost>Ghost Button</ag-button>
              <ag-button ghost variant="primary">Ghost Primary</ag-button>
              <ag-button ghost variant="secondary">Ghost Secondary</ag-button>
              <ag-button ghost variant="warning">Ghost Warning</ag-button>
              <ag-button ghost variant="danger">Ghost Danger</ag-button>
            </>
          }
          code={`<ag-button ghost>Ghost Button</ag-button>
<ag-button ghost variant="primary">Ghost Primary</ag-button>
<ag-button ghost variant="secondary">Ghost Secondary</ag-button>
<ag-button ghost variant="warning">Ghost Warning</ag-button>
<ag-button ghost variant="danger">Ghost Danger</ag-button>`}
        />

        <CodeExample
          title="Link Buttons"
          description="Looks like a text link with underline. Semantic button with link appearance."
          preview={
            <>
              <ag-button link>Link Button</ag-button>
              <ag-button link>Another Link</ag-button>
            </>
          }
          code={`<ag-button link>Link Button</ag-button>
<ag-button link>Another Link</ag-button>`}
        />

        <CodeExample
          title="Button Groups"
          description="Group buttons together by adding the grouped attribute. Wrap in a container with display: inline-flex."
          preview={
            <div style={{ display: "inline-flex" }} role="group" aria-label="Framework selection">
              <ag-button grouped bordered variant="primary">React</ag-button>
              <ag-button grouped bordered variant="primary">Vue</ag-button>
              <ag-button grouped bordered variant="primary">Svelte</ag-button>
              <ag-button grouped bordered variant="primary">Angular</ag-button>
            </div>
          }
          code={`<div style="display: inline-flex" role="group" aria-label="Framework selection">
  <ag-button grouped bordered variant="primary">React</ag-button>
  <ag-button grouped bordered variant="primary">Vue</ag-button>
  <ag-button grouped bordered variant="primary">Svelte</ag-button>
  <ag-button grouped bordered variant="primary">Angular</ag-button>
</div>`}
        />

        <CodeExample
          title="Interactive Example"
          description="Button with click event handling and state."
          preview={<ag-button>Click me</ag-button>}
          code={`<script>
  let clickCount = 0;

  function handleClick(event) {
    clickCount++;
  }
</script>

<ag-button on:click={handleClick}>
  Clicked {clickCount} times
</ag-button>`}
        />

        <CodeExample
          title="Button Types"
          description="Different HTML button types for form handling."
          preview={
            <>
              <ag-button type="button">Button Type</ag-button>
              <ag-button type="submit">Submit Type</ag-button>
              <ag-button type="reset">Reset Type</ag-button>
            </>
          }
          code={`<ag-button type="button">Button Type</ag-button>
<ag-button type="submit">Submit Type</ag-button>
<ag-button type="reset">Reset Type</ag-button>`}
        />

        <CodeExample
          title="Button States"
          description="Disabled and loading states for user feedback."
          preview={
            <>
              <ag-button disabled>Disabled Button</ag-button>
              <ag-button>Async Action</ag-button>
            </>
          }
          code={`<script>
  let isLoading = false;

  async function handleAsyncAction() {
    isLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    isLoading = false;
  }
</script>

<ag-button disabled>Disabled Button</ag-button>
<ag-button loading={isLoading} on:click={handleAsyncAction}>
  {isLoading ? 'Loading...' : 'Async Action'}
</ag-button>`}
        />

        <CodeExample
          title="Toggle Functionality"
          description="Button that maintains pressed state like a toggle."
          preview={<ag-button toggle>Toggle Button</ag-button>}
          code={`<script>
  let togglePressed = false;

  function handleToggle(event) {
    togglePressed = event.detail.pressed;
  }
</script>

<ag-button toggle pressed={togglePressed} on:toggle={handleToggle}>
  Toggle Button {togglePressed ? '(Pressed)' : '(Not Pressed)'}
</ag-button>`}
        />

        <CodeExample
          title="With Icons"
          description="Buttons can contain icons alongside or instead of text."
          preview={
            <>
              <ag-button shape="rounded">
                <span style={{ marginRight: "0.5rem" }}><Download size={"16"} /></span>
                Download
              </ag-button>
              <ag-button shape="rounded"><Settings size={"16"} /></ag-button>
            </>
          }
          code={`<ag-button shape="rounded">
  <span style="margin-right: 0.5rem"><Download /></span>
  Download
</ag-button>
<ag-button shape="rounded"><Settings /></ag-button>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default ButtonSvelte;
