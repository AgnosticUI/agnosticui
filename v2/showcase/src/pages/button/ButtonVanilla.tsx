import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ButtonVanilla = () => {
  return (
    <ComponentLayout
      componentName="Button"
      framework="Vanilla (Web Components)"
      frameworkIcon="⚡"
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

        {/* CDN Usage */}
        <section>
          <h2 className="text-3xl font-bold mb-4">CDN Usage</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`<script type="module" src="https://cdn.jsdelivr.net/npm/agnostic-lit/button.js"></script>`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="The default button component in its simplest form using web components."
          preview={<Button>Click me</Button>}
          code={`<ag-button>Click me</ag-button>`}
        />

        {/* Variants */}
        <CodeExample
          title="Variants"
          description="Different visual styles for various use cases."
          preview={
            <>
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="gradient">Gradient</Button>
              <Button variant="destructive">Destructive</Button>
            </>
          }
          code={`<ag-button variant="default">Default</ag-button>
<ag-button variant="secondary">Secondary</ag-button>
<ag-button variant="outline">Outline</ag-button>
<ag-button variant="ghost">Ghost</ag-button>
<ag-button variant="gradient">Gradient</ag-button>
<ag-button variant="destructive">Destructive</ag-button>`}
        />

        {/* Sizes */}
        <CodeExample
          title="Sizes"
          description="Buttons come in multiple sizes to fit your design needs."
          preview={
            <>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </>
          }
          code={`<ag-button size="sm">Small</ag-button>
<ag-button size="default">Default</ag-button>
<ag-button size="lg">Large</ag-button>
<ag-button size="xl">Extra Large</ag-button>`}
        />

        {/* JavaScript Integration */}
        <CodeExample
          title="JavaScript Integration"
          description="Access button functionality through standard DOM APIs."
          preview={
            <Button onClick={() => alert('Button clicked!')}>
              Click Handler
            </Button>
          }
          code={`<ag-button id="myButton">Click Handler</ag-button>

<script>
  const button = document.getElementById('myButton');
  button.addEventListener('click', () => {
    console.log('Button clicked!');
  });
</script>`}
        />

        {/* Disabled State */}
        <CodeExample
          title="Disabled State"
          description="Buttons can be disabled to prevent user interaction."
          preview={
            <>
              <Button disabled>Disabled Button</Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
            </>
          }
          code={`<ag-button disabled>Disabled Button</ag-button>
<ag-button variant="outline" disabled>Disabled Outline</ag-button>`}
        />

        {/* Custom Styling */}
        <CodeExample
          title="Custom Styling"
          description="Customize button appearance with CSS custom properties."
          preview={
            <Button className="font-bold">
              Custom Styled
            </Button>
          }
          code={`<style>
  ag-button {
    --button-bg: #3b82f6;
    --button-color: white;
    --button-radius: 8px;
    --button-padding: 12px 24px;
  }
</style>

<ag-button>Custom Styled</ag-button>`}
        />

        {/* Programmatic Control */}
        <CodeExample
          title="Programmatic Control"
          description="Control button state and properties programmatically."
          preview={
            <Button variant="gradient">
              Dynamic Button
            </Button>
          }
          code={`<ag-button id="dynamicBtn">Dynamic Button</ag-button>

<script>
  const btn = document.getElementById('dynamicBtn');
  
  // Change variant
  btn.setAttribute('variant', 'gradient');
  
  // Toggle disabled state
  btn.disabled = !btn.disabled;
  
  // Update content
  btn.textContent = 'Updated Text';
</script>`}
        />

        {/* TypeScript Support */}
        <section>
          <h2 className="text-3xl font-bold mb-4">TypeScript Support</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`import 'agnostic-lit/button';

// TypeScript will provide autocompletion
const button = document.querySelector('ag-button');
if (button) {
  button.variant = 'gradient';
  button.disabled = true;
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </ComponentLayout>
  );
};

export default ButtonVanilla;
