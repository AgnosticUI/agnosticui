import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";
import { useEffect, useRef, useState } from "react";

// A wrapper to use for the preview only
const DrawerWrapper = (props: any) => {
  const { onClose, children, ...rest } = props;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleClose = (e: Event) => {
      e.preventDefault(); // Take control
      if (onClose) {
        onClose(e);
      }
    };
    node.addEventListener('close', handleClose);

    return () => {
      node.removeEventListener('close', handleClose);
    };
  }, [ref, onClose]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    Object.entries(rest).forEach(([key, value]) => {
      // @ts-ignore
      element[key] = value;
    });
  }, [rest]);

  return <ag-drawer ref={ref}>{children}</ag-drawer>;
};

const DrawerVanilla = () => {
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);

  return (
    <ComponentLayout
      componentName="Drawer"
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
                <code>npm install agnostic-lit</code>
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
                <code>{`import 'agnosticui-core/drawer';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        <CodeExample
          title="Drawer from Top"
          description="A drawer sliding down from the top of the viewport."
          preview={
            <>
              <ag-button onClick={() => setIsTopOpen(true)}>Open Top Drawer</ag-button>
              <DrawerWrapper open={isTopOpen} onClose={() => setIsTopOpen(false)} position="top" heading="Top Drawer">
                <p className="mbe-6">This is a drawer coming down from the top.</p>
                <ag-button onClick={() => setIsTopOpen(false)}>Close</ag-button>
              </DrawerWrapper>
            </>
          }
          language="javascript"
          code={`<ag-drawer id="drawer-top" position="top" heading="Top Drawer">
  <p>Drawer content</p>
  <ag-button id="close-drawer-top-btn">Close</ag-button>
</ag-drawer>`}
        />

        <CodeExample
          title="Drawer from Start (left)"
          description="A drawer sliding in from the start (left) of the viewport."
          preview={
            <>
              <ag-button onClick={() => setIsStartOpen(true)}>Open Start Drawer</ag-button>
              <DrawerWrapper open={isStartOpen} onClose={() => setIsStartOpen(false)} position="start" heading="Start Drawer">
                <p className="mbe-6">This is a drawer coming in from the start.</p>
                <ag-button onClick={() => setIsStartOpen(false)}>Close</ag-button>
              </DrawerWrapper>
            </>
          }
          language="javascript"
          code={`<ag-drawer id="drawer-start" position="start" heading="Start Drawer">
  <p>Drawer content</p>
  <ag-button id="close-drawer-start-btn">Close</ag-button>
</ag-drawer>`}
        />

        <CodeExample
          title="Drawer from End (right)"
          description="A drawer sliding in from the end (right) of the viewport."
          preview={
            <>
              <ag-button onClick={() => setIsEndOpen(true)}>Open End Drawer</ag-button>
              <DrawerWrapper open={isEndOpen} onClose={() => setIsEndOpen(false)} position="end" heading="End Drawer">
                <p className="mbe-6">This is a drawer coming in from the end.</p>
                <ag-button onClick={() => setIsEndOpen(false)}>Close</ag-button>
              </DrawerWrapper>
            </>
          }
          language="javascript"
          code={`<ag-drawer id="drawer-end" position="end" heading="End Drawer">
  <p>Drawer content</p>
  <ag-button id="close-drawer-end-btn">Close</ag-button>
</ag-drawer>`}
        />

      </div>
    </ComponentLayout>
  );
};

export default DrawerVanilla;
