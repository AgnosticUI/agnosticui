import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";
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
              <DrawerWrapper open={isBottomOpen} onClose={() => setIsBottomOpen(false)} heading="Bottom Drawer">
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
      </div>
    </ComponentLayout>
  );
};

export default DrawerVue;
