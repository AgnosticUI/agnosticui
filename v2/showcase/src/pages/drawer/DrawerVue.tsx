import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";
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

const DrawerVue = () => {
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);

  return (
    <ComponentLayout
      componentName="Drawer"
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
                <code>npm install agnosticui-vue</code>
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
                <code>{`import { VueDrawer } from 'agnosticui-core/vue';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className={styles.smallParagraphBlue}>
                <strong>Note:</strong> The VueDrawer component is a thin wrapper around the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-drawer</code> web component.
                The previews below show the underlying web component, while the code examples demonstrate the proper Vue syntax.
                The Vue wrapper handles event forwarding and provides a native Vue developer experience.
              </p>
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
          code={`<template>
  <VueButton @click="isOpen = true">Open Drawer</VueButton>
  <VueDrawer :isOpen="isOpen" @close="isOpen = false" heading="Bottom Drawer">
    <p>Drawer content</p>
    <VueButton @click="isOpen = false">Close</VueButton>
  </VueDrawer>
</template>

<script setup>
import { ref } from 'vue';
import { VueDrawer, VueButton } from 'agnosticui-core/vue';
const isOpen = ref(false);
</script>`}
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
          code={`<template>
  <VueButton @click="isOpen = true">Open Drawer</VueButton>
  <VueDrawer :isOpen="isOpen" @close="isOpen = false" position="top" heading="Top Drawer">
    <p>Drawer content</p>
    <VueButton @click="isOpen = false">Close</VueButton>
  </VueDrawer>
</template>

<script setup>
import { ref } from 'vue';
import { VueDrawer, VueButton } from 'agnosticui-core/vue';
const isOpen = ref(false);
</script>`}
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
          code={`<template>
  <VueButton @click="isOpen = true">Open Drawer</VueButton>
  <VueDrawer :isOpen="isOpen" @close="isOpen = false" position="start" heading="Start Drawer">
    <p>Drawer content</p>
    <VueButton @click="isOpen = false">Close</VueButton>
  </VueDrawer>
</template>

<script setup>
import { ref } from 'vue';
import { VueDrawer, VueButton } from 'agnosticui-core/vue';
const isOpen = ref(false);
</script>`}
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
          code={`<template>
  <VueButton @click="isOpen = true">Open Drawer</VueButton>
  <VueDrawer :isOpen="isOpen" @close="isOpen = false" position="end" heading="End Drawer">
    <p>Drawer content</p>
    <VueButton @click="isOpen = false">Close</VueButton>
  </VueDrawer>
</template>

<script setup>
import { ref } from 'vue';
import { VueDrawer, VueButton } from 'agnosticui-core/vue';
const isOpen = ref(false);
</script>`}
        />

      </div>
    </ComponentLayout>
  );
};

export default DrawerVue;
