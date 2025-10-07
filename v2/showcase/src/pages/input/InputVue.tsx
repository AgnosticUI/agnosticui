import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";
import { useEffect, useRef, ReactNode } from "react";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";

interface InputWrapperProps {
  children?: ReactNode;
  [key: string]: any;
}

const InputWrapper = ({ children, ...props }: InputWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    Object.entries(props).forEach(([key, value]) => {
      const attrName = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      if (typeof value === 'boolean' && value) {
        element.setAttribute(attrName, '');
      } else if (typeof value === 'string' || typeof value === 'number') {
        element.setAttribute(attrName, String(value));
      } else if (value === false || value === null || value === undefined) {
        element.removeAttribute(attrName);
      }
    });
  }, [props]);

  return <ag-input ref={ref}>{children}</ag-input>;
};

const InputVue = () => {
  return (
    <ComponentLayout
      componentName="Input"
      framework="Vue"
      frameworkIcon={vueIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnosticui-core</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Import */}
        <section>
          <h2 className={styles.heading2}>Import</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>{`import 'agnosticui-core';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className={styles.smallParagraphBlue}>
                <strong>Note:</strong> The Vue examples use the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-input</code> web component directly.
                In a real Vue application, you would use the provided Vue wrapper for a more idiomatic experience.
              </p>
              <div className={styles.dividerSection}>
                <p className={styles.smallParagraphBlue}>
                  <strong>Try it live:</strong> See the Vue Input component in action in CodeSandbox.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" />
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
          description="A simple text input with a label."
          preview={<InputWrapper label="Name" />}
          code={`<template>
  <ag-input label="Name"></ag-input>
</template>

<script setup>
import 'agnosticui-core';
</script>`}
        />

        {/* Underlined Usage */}
        <CodeExample
          title="Underlined"
          description="An underlined text input with a label."
          preview={<InputWrapper label="Name" underlined />}
          code={`<template>
  <ag-input label="Name" underlined></ag-input>
</template>

<script setup>
import 'agnosticui-core';
</script>`}
        />

        {/* Sizes */}
        <CodeExample
          title="Input Sizes"
          description="Inputs can be sized using the size prop."
          preview={
            <div className="flex flex-col space-y-4">
              <InputWrapper label="Small" size="small" />
              <InputWrapper label="Default" size="default" />
              <InputWrapper label="Large" size="large" />
            </div>
          }
          code={`<ag-input label="Small" size="small"></ag-input>
<ag-input label="Default" size="default"></ag-input>
<ag-input label="Large" size="large"></ag-input>`}
        />

        {/* Capsule */}
        <CodeExample
          title="Capsule Input"
          description="An input with fully rounded (capsule) corners."
          preview={<InputWrapper label="Search" capsule />}
          code={`<ag-input label="Search" capsule></ag-input>`}
        />

        {/* Rounded */}
        <CodeExample
          title="Rounded Input"
          description="An input with medium rounded corners."
          preview={<InputWrapper label="Search" rounded />}
          code={`<ag-input label="Search" rounded></ag-input>`}
        />

        {/* Invalid */}
        <CodeExample
          title="Invalid State"
          description="An input can be marked as invalid."
          preview={<InputWrapper label="Email" invalid errorMessage="Please enter a valid email." />}
          code={`<ag-input label="Email" invalid error-message="Please enter a valid email."></ag-input>`}
        />

        {/* Addons */}
        <CodeExample
          title="Input with Addons"
          description="Add content to the left or right of an input."
          preview={
            <div className="flex flex-col space-y-4">
              <InputWrapper label="Username" hasLeftAddon>
                <div slot="addon-left">@</div>
              </InputWrapper>
              <InputWrapper label="Price" hasRightAddon>
                <div slot="addon-right">.00</div>
              </InputWrapper>
            </div>
          }
          code={`<ag-input label="Username" has-left-addon>
  <div slot="addon-left">@</div>
</ag-input>
<ag-input label="Price" has-right-addon>
  <div slot="addon-right">.00</div>
</ag-input>`}
        />


      </div>
    </ComponentLayout>
  );
};

export default InputVue;
