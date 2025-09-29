import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Download, Trash2, Heart } from "lucide-react";

const ButtonReact = () => {
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
                <code>{`import { Button } from 'agnostic-react';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="The default button component in its simplest form."
          preview={<Button>Click me</Button>}
          code={`<Button>Click me</Button>`}
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
              <Button variant="link">Link</Button>
            </>
          }
          code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
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
          description="Enhance buttons with icons from lucide-react or any icon library."
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
              <Button variant="ghost">
                <Heart className="w-4 h-4" />
                Like
              </Button>
            </>
          }
          code={`import { Mail, Download, Trash2, Heart } from 'lucide-react';

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
<Button variant="ghost">
  <Heart className="w-4 h-4" />
  Like
</Button>`}
        />

        {/* Icon Only */}
        <CodeExample
          title="Icon Only"
          description="Use the icon size variant for icon-only buttons."
          preview={
            <>
              <Button size="icon" variant="default">
                <Mail className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Download className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Heart className="w-4 h-4" />
              </Button>
            </>
          }
          code={`<Button size="icon" variant="default">
  <Mail className="w-4 h-4" />
</Button>
<Button size="icon" variant="outline">
  <Download className="w-4 h-4" />
</Button>
<Button size="icon" variant="ghost">
  <Heart className="w-4 h-4" />
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
          code={`<Button disabled>Disabled Button</Button>
<Button variant="outline" disabled>
  Disabled Outline
</Button>`}
        />

        {/* Loading State */}
        <CodeExample
          title="As Link"
          description="Use the asChild prop to render the button as a link or other element."
          preview={
            <Button variant="link" asChild>
              <a href="https://agnosticui.com" target="_blank" rel="noopener noreferrer">
                Visit AgnosticUI
              </a>
            </Button>
          }
          code={`<Button variant="link" asChild>
  <a href="https://agnosticui.com">
    Visit AgnosticUI
  </a>
</Button>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default ButtonReact;
