import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Download, Trash2 } from "lucide-react";

const ButtonSvelte = () => {
  return (
    <ComponentLayout
      componentName="Button"
      framework="Svelte"
      frameworkIcon="🔶"
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
                <code>{`import { Button } from 'agnostic-svelte';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="The default button component in its simplest form."
          preview={<Button>Click me</Button>}
          code={`<script>
  import { Button } from 'agnostic-svelte';
</script>

<Button>Click me</Button>`}
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
          code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="destructive">Destructive</Button>`}
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
          code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`}
        />

        {/* With Icons */}
        <CodeExample
          title="With Icons"
          description="Enhance buttons with icons using slots."
          preview={
            <>
              <Button>
                <Mail className="w-4 h-4" />
                Email
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4" />
                Download
              </Button>
              <Button variant="destructive">
                <Trash2 className="w-4 h-4" />
                Delete
              </Button>
            </>
          }
          code={`<script>
  import { Mail, Download, Trash } from 'lucide-svelte';
</script>

<Button>
  <Mail class="w-4 h-4" />
  Email
</Button>

<Button variant="outline">
  <Download class="w-4 h-4" />
  Download
</Button>

<Button variant="destructive">
  <Trash class="w-4 h-4" />
  Delete
</Button>`}
        />

        {/* Click Handler */}
        <CodeExample
          title="Click Handler"
          description="Handle button clicks with Svelte's on:click event."
          preview={
            <Button onClick={() => alert('Button clicked!')}>
              Click Handler
            </Button>
          }
          code={`<script>
  function handleClick() {
    console.log('Button clicked!');
  }
</script>

<Button on:click={handleClick}>
  Click Handler
</Button>`}
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
          code={`<script>
  let isLoading = false;
</script>

<Button disabled>Disabled Button</Button>
<Button variant="outline" disabled={isLoading}>
  Disabled Outline
</Button>`}
        />

        {/* Reactive Example */}
        <CodeExample
          title="Reactive Example"
          description="Svelte's reactivity makes state management simple."
          preview={
            <Button variant="gradient">
              Counter Example
            </Button>
          }
          code={`<script>
  let count = 0;
  
  function increment() {
    count += 1;
  }
</script>

<Button on:click={increment}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</Button>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default ButtonSvelte;
