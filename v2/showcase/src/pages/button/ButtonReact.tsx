import { ReactButton } from "agnosticui-core/react";
import { useState } from "react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Download, Trash2, Plus, Minus } from "lucide-react";

const ButtonReact = () => {
  const [clickCount, setClickCount] = useState(0);
  const [togglePressed, setTogglePressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (event: Event) => {
    console.log("React button clicked:", event);
    setClickCount((prev) => prev + 1);
  };

  const handleToggle = (detail: { pressed: boolean }) => {
    console.log("Toggle state:", detail);
    setTogglePressed(detail.pressed);
  };

  const handleAsyncAction = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <ComponentLayout
      componentName="Button"
      framework="React"
      frameworkIcon="⚛️"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Installation */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>npm install agnostic-react</code>
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
                <code>{`import { ReactButton } from 'agnostic-core/react';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="The default button component in its simplest form."
          preview={<ReactButton>Default Button</ReactButton>}
          language="typescript"
          code={`import { ReactButton } from "agnosticui-core/react";
import "agnosticui-core";

<ReactButton>Default Button</ReactButton>`}
        />

        <CodeExample
          title="Button Variants"
          description="Different visual styles for various use cases."
          preview={
            <>
              <ReactButton>Default</ReactButton>
              <ReactButton variant="primary">Primary</ReactButton>
              <ReactButton variant="secondary">Secondary</ReactButton>
              <ReactButton variant="warning">Warning</ReactButton>
              <ReactButton variant="danger">Danger</ReactButton>
            </>
          }
          language="xml"
          code={`<ReactButton>Default</ReactButton>
<ReactButton variant="primary">Primary</ReactButton>
<ReactButton variant="secondary">Secondary</ReactButton>
<ReactButton variant="warning">Warning</ReactButton>
<ReactButton variant="danger">Danger</ReactButton>`}
        />

        <CodeExample
          title="Button Sizes"
          description="T-shirt sizing from extra small to extra large."
          preview={
            <>
              <ReactButton size="x-sm">Extra Small</ReactButton>
              <ReactButton size="sm">Small</ReactButton>
              <ReactButton size="md">Medium</ReactButton>
              <ReactButton size="lg">Large</ReactButton>
              <ReactButton size="xl">Extra Large</ReactButton>
            </>
          }
          language="xml"
          code={`<ReactButton size="x-sm">Extra Small</ReactButton>
<ReactButton size="sm">Small</ReactButton>
<ReactButton size="md">Medium</ReactButton>
<ReactButton size="lg">Large</ReactButton>
<ReactButton size="xl">Extra Large</ReactButton>`}
        />

        <CodeExample
          title="Button Shapes"
          description="Different shapes including capsule, rounded, circle, square, and rounded-square."
          preview={
            <>
              <ReactButton shape="capsule">Capsule Button</ReactButton>
              <ReactButton shape="rounded">Rounded Button</ReactButton>
              <ReactButton shape="circle" variant="primary">
                <Plus size={16} />
              </ReactButton>
              <ReactButton shape="square" variant="secondary">
                <Minus size={16} />
              </ReactButton>
              <ReactButton shape="rounded-square" variant="warning">
                <Plus size={16} />
              </ReactButton>
            </>
          }
          language="typescript"
          code={`import { Plus, Minus } from "lucide-react";

<ReactButton shape="capsule">Capsule Button</ReactButton>
<ReactButton shape="rounded">Rounded Button</ReactButton>
<ReactButton shape="circle" variant="primary">
  <Plus size={16} />
</ReactButton>
<ReactButton shape="square" variant="secondary">
  <Minus size={16} />
</ReactButton>
<ReactButton shape="rounded-square" variant="warning">
  <Plus size={16} />
</ReactButton>`}
        />

        <CodeExample
          title="Bordered Buttons"
          description="Outline style with transparent background and colored border. Fills with color on hover."
          preview={
            <>
              <ReactButton bordered>Default Bordered</ReactButton>
              <ReactButton bordered variant="primary">Primary Bordered</ReactButton>
              <ReactButton bordered variant="secondary">Secondary Bordered</ReactButton>
              <ReactButton bordered variant="warning">Warning Bordered</ReactButton>
              <ReactButton bordered variant="danger">Danger Bordered</ReactButton>
            </>
          }
          language="xml"
          code={`<ReactButton bordered>Default Bordered</ReactButton>
<ReactButton bordered variant="primary">Primary Bordered</ReactButton>
<ReactButton bordered variant="secondary">Secondary Bordered</ReactButton>
<ReactButton bordered variant="warning">Warning Bordered</ReactButton>
<ReactButton bordered variant="danger">Danger Bordered</ReactButton>`}
        />

        <CodeExample
          title="Ghost Buttons"
          description="Minimal button with transparent background and minimal padding. Respects variant colors."
          preview={
            <>
              <ReactButton ghost>Ghost Button</ReactButton>
              <ReactButton ghost variant="primary">Ghost Primary</ReactButton>
              <ReactButton ghost variant="secondary">Ghost Secondary</ReactButton>
              <ReactButton ghost variant="warning">Ghost Warning</ReactButton>
              <ReactButton ghost variant="danger">Ghost Danger</ReactButton>
            </>
          }
          language="xml"
          code={`<ReactButton ghost>Ghost Button</ReactButton>
<ReactButton ghost variant="primary">Ghost Primary</ReactButton>
<ReactButton ghost variant="secondary">Ghost Secondary</ReactButton>
<ReactButton ghost variant="warning">Ghost Warning</ReactButton>
<ReactButton ghost variant="danger">Ghost Danger</ReactButton>`}
        />

        <CodeExample
          title="Link Buttons"
          description="Looks like a text link with underline. Semantic button with link appearance."
          preview={
            <>
              <ReactButton link>Link Button</ReactButton>
              <ReactButton link>Another Link</ReactButton>
            </>
          }
          language="xml"
          code={`<ReactButton link>Link Button</ReactButton>
<ReactButton link>Another Link</ReactButton>`}
        />

        <CodeExample
          title="Button Groups"
          description="Group buttons together by adding the grouped attribute. Wrap in a container with display: inline-flex."
          preview={
            <div style={{ display: "inline-flex" }} role="group" aria-label="Framework selection">
              <ReactButton grouped bordered variant="primary">React</ReactButton>
              <ReactButton grouped bordered variant="primary">Vue</ReactButton>
              <ReactButton grouped bordered variant="primary">Svelte</ReactButton>
              <ReactButton grouped bordered variant="primary">Angular</ReactButton>
            </div>
          }
          language="xml"
          code={`<div style={{ display: "inline-flex" }} role="group" aria-label="Framework selection">
  <ReactButton grouped bordered variant="primary">React</ReactButton>
  <ReactButton grouped bordered variant="primary">Vue</ReactButton>
  <ReactButton grouped bordered variant="primary">Svelte</ReactButton>
  <ReactButton grouped bordered variant="primary">Angular</ReactButton>
</div>`}
        />

        <CodeExample
          title="Interactive Example"
          description="Button with click event handling and state."
          preview={
            <ReactButton onClick={handleClick}>
              Clicked {clickCount} times
            </ReactButton>
          }
          language="typescript"
          code={`const [clickCount, setClickCount] = useState(0);

const handleClick = (event: Event) => {
  setClickCount((prev) => prev + 1);
};

<ReactButton onClick={handleClick}>
  Clicked {clickCount} times
</ReactButton>`}
        />

        <CodeExample
          title="Button Types"
          description="Different HTML button types for form handling."
          preview={
            <>
              <ReactButton type="button">Button Type</ReactButton>
              <ReactButton type="submit">Submit Type</ReactButton>
              <ReactButton type="reset">Reset Type</ReactButton>
            </>
          }
          language="xml"
          code={`<ReactButton type="button">Button Type</ReactButton>
<ReactButton type="submit">Submit Type</ReactButton>
<ReactButton type="reset">Reset Type</ReactButton>`}
        />

        <CodeExample
          title="Button States"
          description="Disabled and loading states for user feedback."
          preview={
            <>
              <ReactButton disabled>Disabled Button</ReactButton>
              <ReactButton loading={isLoading} onClick={handleAsyncAction}>
                {isLoading ? "Loading..." : "Async Action"}
              </ReactButton>
            </>
          }
          language="typescript"
          code={`const [isLoading, setIsLoading] = useState(false);

const handleAsyncAction = async () => {
  setIsLoading(true);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  setIsLoading(false);
};

<ReactButton disabled>Disabled Button</ReactButton>
<ReactButton loading={isLoading} onClick={handleAsyncAction}>
  {isLoading ? "Loading..." : "Async Action"}
</ReactButton>`}
        />

        <CodeExample
          title="Toggle Functionality"
          description="Button that maintains pressed state like a toggle."
          preview={
            <ReactButton toggle pressed={togglePressed} onToggle={handleToggle}>
              Toggle Button {togglePressed ? "(Pressed)" : "(Not Pressed)"}
            </ReactButton>
          }
          language="typescript"
          code={`const [togglePressed, setTogglePressed] = useState(false);

const handleToggle = (detail: { pressed: boolean }) => {
  setTogglePressed(detail.pressed);
};

<ReactButton toggle pressed={togglePressed} onToggle={handleToggle}>
  Toggle Button {togglePressed ? "(Pressed)" : "(Not Pressed)"}
</ReactButton>`}
        />

        <CodeExample
          title="With Icons"
          description="Buttons can contain icons alongside or instead of text."
          preview={
            <>
              <ReactButton>
                <span style={{ marginRight: "0.5rem" }}>📥</span>
                Download
              </ReactButton>
              <ReactButton>⚙️</ReactButton>
            </>
          }
          language="xml"
          code={`<ReactButton>
  <span style={{ marginRight: "0.5rem" }}>📥</span>
  Download
</ReactButton>
<ReactButton>⚙️</ReactButton>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default ButtonReact;
