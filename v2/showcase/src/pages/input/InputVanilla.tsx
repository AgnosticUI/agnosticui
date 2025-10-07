import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
import { useState } from "react";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";

const InputVanilla = () => {
  const [inputValue, setInputValue] = useState("initial value");

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    console.log("InputVanilla -> handleInput: target.value=", target.value);
    setInputValue(target.value);
  };

  return (
    <ComponentLayout
      componentName="Input"
      framework="Vanilla (Web Components)"
      frameworkIcon={javascriptIcon}
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
        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple text input with a label."
          preview={<WebComponentWrapper tagName="ag-input" label="Name" />}
          code={`<ag-input label="Name"></ag-input>

<script>
  import 'agnosticui-core';
</script>`}
        />

        {/* Underlined */}
        <CodeExample
          title="Underlined"
          description="An underlined text input with a label."
          preview={<WebComponentWrapper tagName="ag-input" label="Name" underlined />}
          code={`<ag-input label="Name" underlined></ag-input>

<script>
  import 'agnosticui-core';
</script>`}
        />

        {/* Sizes */}
        <CodeExample
          title="Input Sizes"
          description="Inputs can be sized using the size attribute."
          preview={
            <div className="flex flex-col space-y-4">
              <WebComponentWrapper tagName="ag-input" label="Small" size="small" />
              <WebComponentWrapper tagName="ag-input" label="Default" size="default" />
              <WebComponentWrapper tagName="ag-input" label="Large" size="large" />
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
          preview={<WebComponentWrapper tagName="ag-input" label="Search" capsule />}
          code={`<ag-input label="Search" capsule></ag-input>`}
        />

        {/* Rounded */}
        <CodeExample
          title="Rounded Input"
          description="An input with medium rounded corners."
          preview={<WebComponentWrapper tagName="ag-input" label="Search" rounded />}
          code={`<ag-input label="Search" rounded></ag-input>`}
        />

        {/* Invalid */}
        <CodeExample
          title="Invalid State"
          description="An input can be marked as invalid."
          preview={
            <WebComponentWrapper
              tagName="ag-input"
              label="Email"
              invalid
              errorMessage="Please enter a valid email."
            />
          }
          code={`<ag-input label="Email" invalid error-message="Please enter a valid email."></ag-input>`}
        />

        {/* Addons */}
        <CodeExample
          title="Input with Addons"
          description="Add content to the left or right of an input."
          preview={
            <div className="flex flex-col space-y-4">
              <WebComponentWrapper tagName="ag-input" label="Username" hasLeftAddon>
                <div slot="addon-left">@</div>
              </WebComponentWrapper>
              <WebComponentWrapper tagName="ag-input" label="Price" hasRightAddon>
                <div slot="addon-right">.00</div>
              </WebComponentWrapper>
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

export default InputVanilla;
