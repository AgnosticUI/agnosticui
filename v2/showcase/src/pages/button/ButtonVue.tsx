import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";
import "agnosticui-core";

// Declare the ag-button web component for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ag-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        variant?: string;
        size?: string;
        shape?: string;
        bordered?: boolean;
        ghost?: boolean;
        link?: boolean;
        grouped?: boolean;
        type?: string;
        disabled?: boolean;
        loading?: boolean;
        toggle?: boolean;
        pressed?: boolean;
      };
    }
  }
}

const ButtonVue = () => {
  return (
    <ComponentLayout
      componentName="Button"
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
                <code>npm install agnostic-vue</code>
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
                <code>{`import VueButton from 'agnosticui-core/vue';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Note:</strong> The VueButton component is a thin wrapper around the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-button</code> web component.
                The previews below show the underlying web component, while the code examples demonstrate the proper Vue syntax.
                The Vue wrapper handles event forwarding and provides a native Vue developer experience.
              </p>
              <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
                <p className="text-sm text-blue-900 dark:text-blue-100 mb-2">
                  <strong>Try it live:</strong> See the VueButton component in action in CodeSandbox
                </p>
                <a
                  href="https://codesandbox.io/s/agnosticui-vue-button-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"/>
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
          description="The default button component in its simplest form."
          preview={<ag-button>Default Button</ag-button>}
          code={`<template>
  <VueButton>Default Button</VueButton>
</template>

<script setup lang="ts">
import VueButton from 'agnosticui-core/vue';
import 'agnosticui-core';
</script>`}
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
          code={`<template>
  <VueButton>Default</VueButton>
  <VueButton variant="primary">Primary</VueButton>
  <VueButton variant="secondary">Secondary</VueButton>
  <VueButton variant="warning">Warning</VueButton>
  <VueButton variant="danger">Danger</VueButton>
</template>`}
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
          code={`<template>
  <VueButton size="x-sm">Extra Small</VueButton>
  <VueButton size="sm">Small</VueButton>
  <VueButton size="md">Medium</VueButton>
  <VueButton size="lg">Large</VueButton>
  <VueButton size="xl">Extra Large</VueButton>
</template>`}
        />

        <CodeExample
          title="Button Shapes"
          description="Different shapes including capsule, rounded, circle, square, and rounded-square."
          preview={
            <>
              <ag-button shape="capsule">Capsule Button</ag-button>
              <ag-button shape="rounded">Rounded Button</ag-button>
              <ag-button shape="circle" variant="primary">
                +
              </ag-button>
              <ag-button shape="square" variant="secondary">
                -
              </ag-button>
              <ag-button shape="rounded-square" variant="warning">
                +
              </ag-button>
            </>
          }
          code={`<template>
  <VueButton shape="capsule">Capsule Button</VueButton>
  <VueButton shape="rounded">Rounded Button</VueButton>
  <VueButton shape="circle" variant="primary">+</VueButton>
  <VueButton shape="square" variant="secondary">-</VueButton>
  <VueButton shape="rounded-square" variant="warning">+</VueButton>
</template>`}
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
          code={`<template>
  <VueButton bordered>Default Bordered</VueButton>
  <VueButton bordered variant="primary">Primary Bordered</VueButton>
  <VueButton bordered variant="secondary">Secondary Bordered</VueButton>
  <VueButton bordered variant="warning">Warning Bordered</VueButton>
  <VueButton bordered variant="danger">Danger Bordered</VueButton>
</template>`}
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
          code={`<template>
  <VueButton ghost>Ghost Button</VueButton>
  <VueButton ghost variant="primary">Ghost Primary</VueButton>
  <VueButton ghost variant="secondary">Ghost Secondary</VueButton>
  <VueButton ghost variant="warning">Ghost Warning</VueButton>
  <VueButton ghost variant="danger">Ghost Danger</VueButton>
</template>`}
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
          code={`<template>
  <VueButton link>Link Button</VueButton>
  <VueButton link>Another Link</VueButton>
</template>`}
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
          code={`<template>
  <div style="display: inline-flex" role="group" aria-label="Framework selection">
    <VueButton grouped bordered variant="primary">React</VueButton>
    <VueButton grouped bordered variant="primary">Vue</VueButton>
    <VueButton grouped bordered variant="primary">Svelte</VueButton>
    <VueButton grouped bordered variant="primary">Angular</VueButton>
  </div>
</template>`}
        />

        <CodeExample
          title="Interactive Example"
          description="Button with click event handling and state."
          preview={<ag-button>Click me</ag-button>}
          code={`<template>
  <VueButton @click="handleClick">
    Clicked {{ clickCount }} times
  </VueButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const clickCount = ref(0);

const handleClick = (event: Event) => {
  clickCount.value++;
};
</script>`}
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
          code={`<template>
  <VueButton type="button">Button Type</VueButton>
  <VueButton type="submit">Submit Type</VueButton>
  <VueButton type="reset">Reset Type</VueButton>
</template>`}
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
          code={`<template>
  <VueButton :disabled="true">Disabled Button</VueButton>
  <VueButton :loading="isLoading" @click="handleAsyncAction">
    {{ isLoading ? 'Loading...' : 'Async Action' }}
  </VueButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isLoading = ref(false);

const handleAsyncAction = async () => {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
};
</script>`}
        />

        <CodeExample
          title="Toggle Functionality"
          description="Button that maintains pressed state like a toggle."
          preview={<ag-button toggle>Toggle Button</ag-button>}
          code={`<template>
  <VueButton
    toggle
    :pressed="togglePressed"
    @toggle="handleToggle"
  >
    Toggle Button {{ togglePressed ? '(Pressed)' : '(Not Pressed)' }}
  </VueButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const togglePressed = ref(false);

const handleToggle = (detail: { pressed: boolean }) => {
  togglePressed.value = detail.pressed;
};
</script>`}
        />

        <CodeExample
          title="With Icons"
          description="Buttons can contain icons alongside or instead of text."
          preview={
            <>
              <ag-button>
                <span style={{ marginRight: "0.5rem" }}>📥</span>
                Download
              </ag-button>
              <ag-button>⚙️</ag-button>
            </>
          }
          code={`<template>
  <VueButton>
    <span style="margin-right: 0.5rem">📥</span>
    Download
  </VueButton>
  <VueButton>⚙️</VueButton>
</template>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default ButtonVue;
