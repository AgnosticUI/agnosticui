# Design Pattern: Wrapping Nested Web Components in React

This document outlines the official design pattern for wrapping complex, nested AgnosticUI web components in React. This pattern was developed to solve critical lifecycle conflicts between React's rendering and the browser's custom element upgrade process.

## The Problem: Lifecycle Race Conditions

When wrapping web components that have a complex, nested structure (e.g., a `<ag-tabs>` parent with `<ag-tab>` children), a race condition can occur. React may attempt to render and slot the child components *before* the parent web component has been fully defined and upgraded by the browser. This can lead to errors like `Uncaught NotSupportedError: Failed to execute 'createElement' on 'Document': The result must not have attributes`.

Simple, standalone components (like `Button` or `Input`) do not suffer from this issue and do not require this pattern.

## The Solution: The "Stateful-Ready" Pattern

To solve this, we use a pattern that explicitly synchronizes React's rendering with the web component's lifecycle. This ensures that the parent component is fully ready before its children are rendered.

The pattern relies on three core React hooks:

1.  **`useEffect` & `customElements.whenDefined`**: To wait until the parent web component is fully initialized.
2.  **`useState`**: To hold a `isReady` flag.
3.  **`createContext`**: To broadcast the `isReady` status to all descendant components.

Additionally, we use `forwardRef` and `useImperativeHandle` to provide a clean, imperative API for consumers of our React wrapper.

## Implementation Example: `ReactTabs`

Here is a condensed version of the pattern as implemented in `ReactTabs.tsx`.

### 1. Create a Context

A context is created to share the `isReady` state.

```javascript
import { createContext, useContext } from 'react';

interface TabsContextValue {
  isReady: boolean;
}

const TabsContext = createContext<TabsContextValue | null>(null);
```

### 2. Implement the Parent Wrapper (`ReactTabs`)

The parent component is responsible for waiting for the web component, managing the `isReady` state, and providing the context.

```javascript
import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

// ... other imports and type definitions

export const ReactTabs = forwardRef((props, ref) => {
  const tabsRef = useRef(null); // Ref for the <ag-tabs> element
  const [isReady, setIsReady] = useState(false);

  // Effect to handle web component initialization
  useEffect(() => {
    const tabsElement = tabsRef.current;
    if (!tabsElement) return;

    customElements.whenDefined('ag-tabs').then(() => {
      // 1. Set properties on the now-ready element
      tabsElement.activation = props.activation;
      // ...

      // 2. Set the ready flag to true
      setIsReady(true);
    });
  }, [/* dependencies */]);

  // Expose a clean API to parent components
  useImperativeHandle(ref, () => ({
    selectTab: (index) => tabsRef.current?.selectTab(index),
  }));

  // Provide the context to children
  return (
    <TabsContext.Provider value={{ isReady }}>
      <ag-tabs ref={tabsRef}>
        {props.children}
      </ag-tabs>
    </TabsContext.Provider>
  );
});
```

### 3. Implement the Child Wrapper (`Tab`)

The child components consume the context and render nothing until the parent is ready.

```javascript
import { useContext } from 'react';

export const Tab = (props) => {
  const context = useContext(TabsContext);

  // Do not render until the context is ready
  if (!context?.isReady) {
    return null;
  }

  return (
    <ag-tab slot="tab" panel={props.panel}>
      {props.children}
    </ag-tab>
  );
};
```

## Summary

By following this pattern, we ensure that:

- The parent web component is fully initialized before React attempts to render its children.
- Child components are aware of the parent's status via a shared context.
- The React wrapper provides a clean, imperative API for consumers.

This solves the lifecycle race condition and creates a robust, maintainable, and scalable component wrapper.
