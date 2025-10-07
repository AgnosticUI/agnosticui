import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import svelteIcon from "@/assets/icons/svelte.svg";
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

const InputSvelte = () => {
  return (
    <ComponentLayout
      componentName="Input"
      framework="Svelte"
      frameworkIcon={svelteIcon}
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

        {/* Note about Svelte usage */}
        <section>
          <Card className="bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-700">
            <CardContent className="p-4">
              <p className="text-sm text-purple-900 dark:text-purple-100">
                <strong>Svelte Usage:</strong> Svelte works directly with web components without requiring wrapper components.
                Simply import the web component and use it with native HTML syntax.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple text input with a label."
          preview={<InputWrapper label="Name" />}
          code={`<script>
  import 'agnosticui-core';
</script>

<ag-input label="Name"></ag-input>`}
        />

        {/* Underlined Usage */}
        <CodeExample
          title="Underlined"
          description="An underlined text input with a label."
          preview={<InputWrapper label="Name" underlined />}
          code={`<script>
  import 'agnosticui-core';
</script>

<ag-input label="Name" underlined></ag-input>`}
        />

        {/* Sizes */}
        <CodeExample
          title="Input Sizes"
          description="Inputs can be sized using the size attribute."
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

export default InputSvelte;
