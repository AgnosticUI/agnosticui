import { ReactButton } from "agnosticui-core/react";
import { useState } from "react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Download, Trash2 } from "lucide-react";

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
          code={`import { ReactButton } from "agnosticui-core/react";
import "agnosticui-core";

<ReactButton>Default Button</ReactButton>`}
        />

        <section style={{ marginBottom: "2rem" }}>
          <h2>Button Variants</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <ReactButton>Default</ReactButton>
            <ReactButton variant="primary">Primary</ReactButton>
            <ReactButton variant="secondary">Secondary</ReactButton>
            <ReactButton variant="warning">Warning</ReactButton>
            <ReactButton variant="danger">Danger</ReactButton>
          </div>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2>Interactive Example</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <ReactButton onClick={handleClick}>
              Clicked {clickCount} times
            </ReactButton>
          </div>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2>Button Types</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <ReactButton type="button">Button Type</ReactButton>
            <ReactButton type="submit">Submit Type</ReactButton>
            <ReactButton type="reset">Reset Type</ReactButton>
          </div>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2>Button States</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <ReactButton disabled>Disabled Button</ReactButton>
            <ReactButton loading={isLoading} onClick={handleAsyncAction}>
              {isLoading ? "Loading..." : "Async Action"}
            </ReactButton>
          </div>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2>Toggle Functionality</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <ReactButton toggle pressed={togglePressed} onToggle={handleToggle}>
              Toggle Button {togglePressed ? "(Pressed)" : "(Not Pressed)"}
            </ReactButton>
          </div>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2>With Icons</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <ReactButton>
              <span style={{ marginRight: "0.5rem" }}>📥</span>
              Download
            </ReactButton>
            <ReactButton>⚙️</ReactButton>
          </div>
        </section>
      </div>
    </ComponentLayout>
  );
};

export default ButtonReact;
