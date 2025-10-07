import { ReactInput } from "agnosticui-core/react";
import { useState } from "react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, User } from "lucide-react";
import reactIcon from "@/assets/icons/react.svg";
import styles from "@/shared/styles.module.css";

const InputReact = () => {
  const [inputValue, setInputValue] = useState("Initial value");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    console.log("Input event target.value:", target.value);
    setInputValue(target.value);
  };

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    console.log("InputReact -> handleChange:", target.value);
  };

  return (
    <ComponentLayout
      componentName="Input"
      framework="React"
      frameworkIcon={reactIcon}
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
                <code>{`import { ReactInput } from 'agnosticui-core/react';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple text input with a label."
          preview={<ReactInput label="Name" />}
          code={`<ReactInput label=\"Name\" />`}
        />

        {/* Textarea */}
        <CodeExample
          title="Textarea"
          description="A multi-line text input."
          preview={<ReactInput type="textarea" label="Comments" rows={5} />}
          code={`<ReactInput type=\"textarea\" label=\"Comments\" rows={5} />`}
        />

        {/* Sizes */}
        <CodeExample
          title="Input Sizes"
          description="Inputs can be sized using the size prop."
          preview={
            <div className="flex flex-col space-y-4">
              <ReactInput label="Small" size="small" />
              <ReactInput label="Default" size="default" />
              <ReactInput label="Large" size="large" />
            </div>
          }
          code={`<ReactInput label=\"Small\" size=\"small\" />\n<ReactInput label=\"Default\" size=\"default\" />\n<ReactInput label=\"Large\" size=\"large\" />`}
        />

        {/* Capsule */}
        <CodeExample
          title="Capsule Input"
          description="An input with fully rounded (capsule) corners."
          preview={<ReactInput label="Search" capsule />}
          code={`<ReactInput label=\"Search\" capsule />`}
        />

        {/* Rounded */}
        <CodeExample
          title="Rounded Input"
          description="An input with medium rounded corners."
          preview={<ReactInput label="Search" rounded />}
          code={`<ReactInput label=\"Search\" rounded />`}
        />

        {/* Underlined */}
        <CodeExample
          title="Underlined Input"
          description="An input with a bottom border only."
          preview={<ReactInput label="First Name" underlined />}
          code={`<ReactInput label=\"First Name\" underlined />`}
        />

        {/* Underlined with Background */}
        <CodeExample
          title="Underlined with Background"
          description="An underlined input with a background color."
          preview={<ReactInput label="Last Name" underlinedWithBackground />}
          code={`<ReactInput label=\"Last Name\" underlinedWithBackground />`}
        />

        {/* Disabled */}
        <CodeExample
          title="Disabled State"
          description="A disabled input is not interactive."
          preview={<ReactInput label="Disabled" disabled value="Cannot edit" />}
          code={`<ReactInput label=\"Disabled\" disabled value=\"Cannot edit\" />`}
        />

        {/* Readonly */}
        <CodeExample
          title="Readonly State"
          description="A readonly input cannot be modified."
          preview={<ReactInput label="Readonly" readonly value="Readonly value" />}
          code={`<ReactInput label=\"Readonly\" readonly value=\"Readonly value\" />`}
        />

        {/* Invalid */}
        <CodeExample
          title="Invalid State"
          description="An input can be marked as invalid."
          preview={<ReactInput label="Email" invalid errorMessage="Please enter a valid email." />}
          code={`<ReactInput label=\"Email\" invalid errorMessage=\"Please enter a valid email.\" />`}
        />

        {/* Help Text */}
        <CodeExample
          title="Help Text"
          description="Provide additional guidance with help text."
          preview={<ReactInput label="Username" helpText="Must be at least 8 characters." />}
          code={`<ReactInput label=\"Username\" helpText=\"Must be at least 8 characters.\" />`}
        />

        {/* Addons */}
        <CodeExample
          title="Input with Addons"
          description="Add content to the left or right of an input."
          preview={
            <div className="flex flex-col space-y-4">
              <ReactInput label="Username" hasLeftAddon>
                <div slot="addon-left"><User size={16} /></div>
              </ReactInput>
              <ReactInput label="Price" hasRightAddon>
                <div slot="addon-right">.00</div>
              </ReactInput>
            </div>
          }
          code={`<ReactInput label=\"Username\" hasLeftAddon>\n  <div slot=\"addon-left\"><User size={16} /></div>\n</ReactInput>\n<ReactInput label=\"Price\" hasRightAddon>\n  <div slot=\"addon-right\">.00</div>\n</ReactInput>`}
        />

        {/* Password */}
        <CodeExample
          title="Password Input"
          description="A password input with a toggle to show/hide the value."
          preview={
            <ReactInput
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              hasRightAddon
              onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
            >
              <button slot="addon-right" onClick={() => setShowPassword(!showPassword)} className="bg-transparent border-none">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </ReactInput>
          }
          code={`const [password, setPassword] = useState(\"password123\");\nconst [showPassword, setShowPassword] = useState(false);\n\n<ReactInput\n  label=\"Password\"
  type={showPassword ? 'text' : 'password'}
  value={password}
  hasRightAddon
  onInput={(e) => setPassword(e.target.value)}
>\n  <button slot=\"addon-right\" onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
  </button>\n</ReactInput>`}
        />

        {/* Event Handling */}
        <CodeExample
          title="Event Handling"
          description="Listen to input and change events."
          preview={
            <div className="flex flex-col space-y-4">
              <ReactInput
                label="Live Input"
                value={inputValue}
                onInput={handleInput}
                onChange={handleChange}
              />
              <Card className="bg-muted">
                <CardContent className="p-4">
                  <p className="text-sm">Input Value: {inputValue}</p>
                </CardContent>
              </Card>
            </div>
          }
          code={`const [inputValue, setInputValue] = useState(\"Initial value\");\n\nconst handleInput = (event) => {\n  setInputValue(event.target.value);\n  console.log(\"Input event:\", event.target.value);\n};\n\nconst handleChange = (event) => {\n  console.log(\"Change event:\", event.target.value);\n};\n\n<ReactInput\n  label=\"Live Input\"
  value={inputValue}\n  onInput={handleInput}\n  onChange={handleChange}\n/>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default InputReact;
