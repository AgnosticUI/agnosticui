import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";
import { useEffect, useRef, useState } from "react";

// @ts-ignore
const DrawerWrapper = (props) => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const { children, ...rest } = props;
    const element = ref.current;
    if (!element) return;

    Object.entries(rest).forEach(([key, value]) => {
      // TODO -- support this better
      // @ts-ignore
      element[key] = value;
    });
  }, [props]);

  return <ag-drawer ref={ref}>{props.children}</ag-drawer>;
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
          title="Drawer from Bottom (default)"
          description="A drawer sliding up from the bottom of the viewport."
          preview={
            <>
              <ag-button onClick={() => setIsBottomOpen(true)}>Open Bottom Drawer</ag-button>
              <DrawerWrapper open={isBottomOpen} onAgClose={() => setIsBottomOpen(false)} heading="Bottom Drawer">
                <p className="mbe-6">This is a drawer coming up from the bottom.</p>
                <ag-button onClick={() => setIsBottomOpen(false)}>Close</ag-button>
              </DrawerWrapper>
            </>
          }
          language="javascript"
          code={`import 'agnosticui-core/drawer';
import 'agnosticui-core/button';

const openDrawerButton = document.getElementById('open-drawer-btn');
const closeDrawerButton = document.getElementById('close-drawer-btn');
const drawer = document.getElementById('drawer');

openDrawerButton.addEventListener('click', () => {
  drawer.open = true;
});

closeDrawerButton.addEventListener('click', () => {
  drawer.open = false;
});

drawer.addEventListener('close', () => {
  console.log('Drawer closed');
});`}
        />

        <CodeExample
          title="Drawer from Top"
          description="A drawer sliding down from the top of the viewport."
          preview={
            <>
              <ag-button onClick={() => setIsTopOpen(true)}>Open Top Drawer</ag-button>
              <DrawerWrapper open={isTopOpen} onAgClose={() => setIsTopOpen(false)} position="top" heading="Top Drawer">
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
              <DrawerWrapper open={isStartOpen} onAgClose={() => setIsStartOpen(false)} position="start" heading="Start Drawer">
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
              <DrawerWrapper open={isEndOpen} onAgClose={() => setIsEndOpen(false)} position="end" heading="End Drawer">
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
