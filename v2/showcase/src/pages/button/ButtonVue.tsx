import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Download, Trash2, Heart } from "lucide-react";
import vueIcon from "@/assets/icons/vue.svg";

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
                <code>{`import { AgButton } from 'agnostic-vue';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="The default button component in its simplest form."
          preview={<Button>Click me</Button>}
          code={`<template>
  <AgButton>Click me</AgButton>
</template>

<script setup>
import { AgButton } from 'agnostic-vue';
</script>`}
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
          code={`<template>
  <AgButton variant="default">Default</AgButton>
  <AgButton variant="secondary">Secondary</AgButton>
  <AgButton variant="outline">Outline</AgButton>
  <AgButton variant="ghost">Ghost</AgButton>
  <AgButton variant="gradient">Gradient</AgButton>
  <AgButton variant="destructive">Destructive</AgButton>
</template>`}
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
          code={`<template>
  <AgButton size="sm">Small</AgButton>
  <AgButton size="default">Default</AgButton>
  <AgButton size="lg">Large</AgButton>
  <AgButton size="xl">Extra Large</AgButton>
</template>`}
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
          code={`<template>
  <AgButton>
    <template #icon>
      <MailIcon />
    </template>
    Email
  </AgButton>
  
  <AgButton variant="outline">
    <template #icon>
      <DownloadIcon />
    </template>
    Download
  </AgButton>
  
  <AgButton variant="destructive">
    <template #icon>
      <TrashIcon />
    </template>
    Delete
  </AgButton>
</template>`}
        />

        {/* Click Handler */}
        <CodeExample
          title="Click Handler"
          description="Handle button clicks with Vue's @click event."
          preview={
            <Button onClick={() => alert('Button clicked!')}>
              Click Handler
            </Button>
          }
          code={`<template>
  <AgButton @click="handleClick">
    Click Handler
  </AgButton>
</template>

<script setup>
const handleClick = () => {
  console.log('Button clicked!');
};
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
          code={`<template>
  <AgButton :disabled="true">Disabled Button</AgButton>
  <AgButton variant="outline" :disabled="isLoading">
    Disabled Outline
  </AgButton>
</template>

<script setup>
import { ref } from 'vue';
const isLoading = ref(false);
</script>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default ButtonVue;
