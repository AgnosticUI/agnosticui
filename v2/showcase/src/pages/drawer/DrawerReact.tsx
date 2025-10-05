import { ReactDrawer, ReactButton } from "agnosticui-core/react";
import { useState } from "react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import reactIcon from "@/assets/icons/react.svg";
import styles from "@/shared/styles.module.css";

const DrawerReact = () => {
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);

  return (
    <ComponentLayout
      componentName="Drawer"
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
                <code>{`import { ReactDrawer } from 'agnosticui-core/react';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        <CodeExample
          title="Drawer from Bottom (default)"
          description="A drawer sliding up from the bottom of the viewport."
          preview={
            <>
              <ReactButton onClick={() => setIsBottomOpen(true)}>Open Bottom Drawer</ReactButton>
              <ReactDrawer open={isBottomOpen} onClose={() => setIsBottomOpen(false)} heading="Bottom Drawer">
                <p className="mbe-6">This is a drawer coming up from the bottom.</p>
                <ReactButton onClick={() => setIsBottomOpen(false)}>Close</ReactButton>
              </ReactDrawer>
            </>
          }
          language="typescript"
          code={`import { ReactDrawer, ReactButton } from "agnosticui-core/react";
import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);

<ReactButton onClick={() => setIsOpen(true)}>Open Drawer</ReactButton>
<ReactDrawer open={isOpen} onClose={() => setIsOpen(false)} heading="Bottom Drawer">
  <p>Drawer content</p>
  <ReactButton onClick={() => setIsOpen(false)}>Close</ReactButton>
</ReactDrawer>`}
        />

        <CodeExample
          title="Drawer from Top"
          description="A drawer sliding down from the top of the viewport."
          preview={
            <>
              <ReactButton onClick={() => setIsTopOpen(true)}>Open Top Drawer</ReactButton>
              <ReactDrawer open={isTopOpen} onClose={() => setIsTopOpen(false)} position="top" heading="Top Drawer">
                <p className="mbe-6">This is a drawer coming down from the top.</p>
                <ReactButton onClick={() => setIsTopOpen(false)}>Close</ReactButton>
              </ReactDrawer>
            </>
          }
          language="typescript"
          code={`import { ReactDrawer, ReactButton } from "agnosticui-core/react";
import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);

<ReactButton onClick={() => setIsOpen(true)}>Open Drawer</ReactButton>
<ReactDrawer open={isOpen} onClose={() => setIsOpen(false)} position="top" heading="Top Drawer">
  <p>Drawer content</p>
  <ReactButton onClick={() => setIsOpen(false)}>Close</ReactButton>
</ReactDrawer>`}
        />

        <CodeExample
          title="Drawer from Start (left)"
          description="A drawer sliding in from the start (left) of the viewport."
          preview={
            <>
              <ReactButton onClick={() => setIsStartOpen(true)}>Open Start Drawer</ReactButton>
              <ReactDrawer open={isStartOpen} onClose={() => setIsStartOpen(false)} position="start" heading="Start Drawer">
                <p className="mbe-6">This is a drawer coming in from the start.</p>
                <ReactButton onClick={() => setIsStartOpen(false)}>Close</ReactButton>
              </ReactDrawer>
            </>
          }
          language="typescript"
          code={`import { ReactDrawer, ReactButton } from "agnosticui-core/react";
import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);

<ReactButton onClick={() => setIsOpen(true)}>Open Drawer</ReactButton>
<ReactDrawer open={isOpen} onClose={() => setIsOpen(false)} position="start" heading="Start Drawer">
  <p>Drawer content</p>
  <ReactButton onClick={() => setIsOpen(false)}>Close</ReactButton>
</ReactDrawer>`}
        />

        <CodeExample
          title="Drawer from End (right)"
          description="A drawer sliding in from the end (right) of the viewport."
          preview={
            <>
              <ReactButton onClick={() => setIsEndOpen(true)}>Open End Drawer</ReactButton>
              <ReactDrawer open={isEndOpen} onClose={() => setIsEndOpen(false)} position="end" heading="End Drawer">
                <p className="mbe-6">This is a drawer coming in from the end.</p>
                <ReactButton onClick={() => setIsEndOpen(false)}>Close</ReactButton>
              </ReactDrawer>
            </>
          }
          language="typescript"
          code={`import { ReactDrawer, ReactButton } from "agnosticui-core/react";
import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);

<ReactButton onClick={() => setIsOpen(true)}>Open Drawer</ReactButton>
<ReactDrawer open={isOpen} onClose={() => setIsOpen(false)} position="end" heading="End Drawer">
  <p>Drawer content</p>
  <ReactButton onClick={() => setIsOpen(false)}>Close</ReactButton>
</ReactDrawer>`}
        />

      </div>
    </ComponentLayout>
  );
};

export default DrawerReact;