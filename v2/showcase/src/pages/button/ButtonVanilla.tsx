import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
import { useEffect, useRef, useState, ReactNode } from "react";
import { Download, Settings } from "lucide-react";
import "agnosticui-core";

interface ButtonWrapperProps {
  children?: ReactNode;
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
  onClick?: (event: Event) => void;
  onToggle?: (event: CustomEvent) => void;
}

// Helper component to render ag-button in React
const ButtonWrapper = ({ children, ...props }: ButtonWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const listeners: Array<{ event: string; handler: EventListener }> = [];

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
  }, [props]);

  return <ag-button ref={ref} shape="rounded">{children}</ag-button>;
};

const ButtonVanilla = () => {
  const [clickCount, setClickCount] = useState(0);
  const [togglePressed, setTogglePressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (event: Event) => {
    console.log("Button clicked:", event);
    setClickCount((prev) => prev + 1);
  };

  const handleToggle = (event: CustomEvent) => {
    console.log("Toggle state:", event.detail);
    setTogglePressed(event.detail.pressed);
  };

  const handleAsyncAction = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <ComponentLayout
      componentName="Button"
      framework="Vanilla (Web Components)"
      frameworkIcon={javascriptIcon}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Installation */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>npm install agnostic-lit</code>
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
                <code>{`import 'agnostic-core';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="The default button component in its simplest form."
          preview={<ButtonWrapper>Default Button</ButtonWrapper>}
          code={`import "agnosticui-core";

<ag-button>Default Button</ag-button>`}
        />

        <CodeExample
          title="Button Variants"
          description="Different visual styles for various use cases."
          preview={
            <>
              <ButtonWrapper>Default</ButtonWrapper>
              <ButtonWrapper variant="primary">Primary</ButtonWrapper>
              <ButtonWrapper variant="secondary">Secondary</ButtonWrapper>
              <ButtonWrapper variant="success">Success</ButtonWrapper>
              <ButtonWrapper variant="warning">Warning</ButtonWrapper>
              <ButtonWrapper variant="danger">Danger</ButtonWrapper>
            </>
          }
          code={`<ag-button>Default</ag-button>
<ag-button variant="primary">Primary</ag-button>
<ag-button variant="secondary">Secondary</ag-button>
<ag-button variant="success">Success</ag-button>
<ag-button variant="warning">Warning</ag-button>
<ag-button variant="danger">Danger</ag-button>`}
        />

        <CodeExample
          title="Button Sizes"
          description="T-shirt sizing from extra small to extra large."
          preview={
            <>
              <ButtonWrapper size="x-sm">Extra Small</ButtonWrapper>
              <ButtonWrapper size="sm">Small</ButtonWrapper>
              <ButtonWrapper size="md">Medium</ButtonWrapper>
              <ButtonWrapper size="lg">Large</ButtonWrapper>
              <ButtonWrapper size="xl">Extra Large</ButtonWrapper>
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
              <ButtonWrapper shape="capsule">Capsule Button</ButtonWrapper>
              <ButtonWrapper shape="rounded">Rounded Button</ButtonWrapper>
              <ButtonWrapper shape="circle" variant="primary">
                +
              </ButtonWrapper>
              <ButtonWrapper shape="square" variant="secondary">
                -
              </ButtonWrapper>
              <ButtonWrapper shape="rounded-square" variant="warning">
                +
              </ButtonWrapper>
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
              <ButtonWrapper bordered>Default Bordered</ButtonWrapper>
              <ButtonWrapper bordered variant="primary">Primary Bordered</ButtonWrapper>
              <ButtonWrapper bordered variant="secondary">Secondary Bordered</ButtonWrapper>
              <ButtonWrapper bordered variant="warning">Warning Bordered</ButtonWrapper>
              <ButtonWrapper bordered variant="danger">Danger Bordered</ButtonWrapper>
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
              <ButtonWrapper ghost>Ghost Button</ButtonWrapper>
              <ButtonWrapper ghost variant="primary">Ghost Primary</ButtonWrapper>
              <ButtonWrapper ghost variant="secondary">Ghost Secondary</ButtonWrapper>
              <ButtonWrapper ghost variant="warning">Ghost Warning</ButtonWrapper>
              <ButtonWrapper ghost variant="danger">Ghost Danger</ButtonWrapper>
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
              <ButtonWrapper link>Link Button</ButtonWrapper>
              <ButtonWrapper link>Another Link</ButtonWrapper>
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
              <ButtonWrapper grouped bordered variant="primary">React</ButtonWrapper>
              <ButtonWrapper grouped bordered variant="primary">Vue</ButtonWrapper>
              <ButtonWrapper grouped bordered variant="primary">Svelte</ButtonWrapper>
              <ButtonWrapper grouped bordered variant="primary">Angular</ButtonWrapper>
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
          preview={
            <ButtonWrapper onClick={handleClick}>
              Clicked {clickCount} times
            </ButtonWrapper>
          }
          language="javascript"
          code={`<ag-button id="clickBtn">Clicked 0 times</ag-button>

<script>
  let clickCount = 0;
  const button = document.getElementById('clickBtn');

  button.addEventListener('click', (event) => {
    clickCount++;
    button.textContent = \`Clicked \${clickCount} times\`;
  });
</script>`}
        />

        <CodeExample
          title="Button Types"
          description="Different HTML button types for form handling."
          preview={
            <>
              <ButtonWrapper type="button">Button Type</ButtonWrapper>
              <ButtonWrapper type="submit">Submit Type</ButtonWrapper>
              <ButtonWrapper type="reset">Reset Type</ButtonWrapper>
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
              <ButtonWrapper disabled>Disabled Button</ButtonWrapper>
              <ButtonWrapper loading={isLoading} onClick={handleAsyncAction}>
                {isLoading ? "Loading..." : "Async Action"}
              </ButtonWrapper>
            </>
          }
          language="javascript"
          code={`<ag-button disabled>Disabled Button</ag-button>
<ag-button id="asyncBtn">Async Action</ag-button>

<script>
  const asyncBtn = document.getElementById('asyncBtn');

  asyncBtn.addEventListener('click', async () => {
    asyncBtn.loading = true;
    asyncBtn.textContent = 'Loading...';

    await new Promise((resolve) => setTimeout(resolve, 2000));

    asyncBtn.loading = false;
    asyncBtn.textContent = 'Async Action';
  });
</script>`}
        />

        <CodeExample
          title="Toggle Functionality"
          description="Button that maintains pressed state like a toggle."
          preview={
            <ButtonWrapper toggle pressed={togglePressed} onToggle={handleToggle}>
              Toggle Button {togglePressed ? "(Pressed)" : "(Not Pressed)"}
            </ButtonWrapper>
          }
          language="javascript"
          code={`<ag-button id="toggleBtn" toggle>Toggle Button (Not Pressed)</ag-button>

<script>
  const toggleBtn = document.getElementById('toggleBtn');

  toggleBtn.addEventListener('toggle', (event) => {
    const pressed = event.detail.pressed;
    toggleBtn.textContent = \`Toggle Button \${pressed ? "(Pressed)" : "(Not Pressed)"}\`;
  });
</script>`}
        />

        <CodeExample
          title="With Icons"
          description="Buttons can contain icons alongside or instead of text."
          preview={
            <>
              <ButtonWrapper>
                <span style={{ marginRight: "0.5rem" }}><Download size={"16"} /></span>
                Download
              </ButtonWrapper>
              <ButtonWrapper><Settings size={"16"} />️</ButtonWrapper>
            </>
          }
          code={`<ag-button shape="rounded" size="lg">
  <span style="margin-right: 0.5rem"><Download /></span>
  Download
</ag-button>
<ag-button shape="rounded" size="lg">️<Settings /></ag-button>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default ButtonVanilla;
