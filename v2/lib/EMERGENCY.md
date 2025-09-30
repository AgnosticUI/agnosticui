# Emergency Plan: Resolving React Wrapper Lifecycle Conflicts

This document captures the investigation and plan to resolve a critical, time-consuming issue regarding the integration of complex, nested AgnosticUI Web Components (like Tabs and Menu) within React.

## The Core Problem: React vs. Web Component Lifecycles

The central issue is a fundamental conflict between React's rendering lifecycle and the browser's native lifecycle for Web Components.

- **Web Components** have their own lifecycle, including a `connectedCallback` that fires when they are fully attached to the DOM. They expect to be created "cleanly" and then configured.
- **React** uses a Virtual DOM and renders efficiently. When it sees a tag like `<ag-tabs>`, it tries to create the element and apply all its properties (attributes) in a single, optimized step.

The error `Uncaught NotSupportedError: Failed to execute 'createElement' on 'Document': The result must not have attributes` is the symptom of this clash. It signifies that React is trying to apply properties to the custom element *before* the browser has finished "upgrading" it from a generic tag into a functional component, violating the browser's rules.

This problem is most severe for **Tabs and Menus** because they are not single components but systems of nested components that rely on parent-child communication (via slots). This complexity creates a race condition where the parent (`<ag-tabs>`) may not be ready to receive its children (`<ag-tab>`), causing the integration to fail.

## Community Research & Corroboration

The following research, provided by the team, confirms this diagnosis and aligns with standard community patterns for bridging this gap.

> It is not necessary to make React wait for a Web Component to be connected before rendering. When React renders, it will treat your Web Component tag (e.g., <my-component>) like a standard HTML element. The browser's own custom element registry and lifecycle handle the rest.
>
> **How React and Web Components interact**
>
> 1.  **Browser registration:** You define your Web Component class and register it with the browser using `customElements.define('my-component', MyComponentClass)`. This must be done before React renders the tag.
> 2.  **React renders:** When React renders JSX containing `<my-component>`, it creates and inserts the custom element into the DOM, just as it would for a `<div>` or `<span>`.
> 3.  **Browser handles the connection:** The browser then calls the `connectedCallback()` method on your Web Component class. This signals that the element has been added to the DOM and is ready to be used.
>
> **Using React hooks to access the Web Component instance**
>
> Since React's render happens before the Web Component's `connectedCallback` is fired, you can't access the component's instance immediately after the initial render. Instead, use a `ref` and a `useEffect` hook to interact with the custom element once it's available in the DOM.
>
> ```javascript
> import React, { useRef, useEffect } from 'react';
>
> const MyReactComponent = () => {
>   const customElementRef = useRef(null);
>
>   useEffect(() => {
>     if (customElementRef.current) {
>       console.log('Web Component is now connected and accessible:', customElementRef.current);
>       // customElementRef.current.someMethod();
>     }
>   }, []);
>
>   return (
>     <div>
>       <h1>My React App</h1>
>       <my-component ref={customElementRef}></my-component>
>     </div>
>   );
> };
> ```
>
> Further, one can use a custom event in the web component to signal readiness:
>
> ```javascript
> class MyComponentClass extends HTMLElement {
>   constructor() {
>     super();
>     this.isReady = false;
>   }
>   connectedCallback() {
>     this.fetchData().then(() => {
>       this.isReady = true;
>       this.dispatchEvent(new CustomEvent('component-ready', { bubbles: true }));
>     });
>   }
>   fetchData() {
>     return Promise.resolve();
>   }
> }
> ```
>
> And listen for it in React:
>
> ```javascript
> import React, { useRef, useState, useEffect } from 'react';
>
> const MyReactComponent = () => {
>   const customElementRef = useRef(null);
>   const [isWebComponentReady, setIsWebComponentReady] = useState(false);
>
>   useEffect(() => {
>     const element = customElementRef.current;
>     if (!element) return;
>
>     const handleReady = () => {
>       setIsWebComponentReady(true);
>     };
>
>     element.addEventListener('component-ready', handleReady);
>
>     return () => {
>       element.removeEventListener('component-ready', handleReady);
>     };
>   }, []);
>
>   return (
>     <div>
>       <my-component ref={customElementRef}></my-component>
>       {isWebComponentReady ? (
>         <p>The Web Component is ready!</p>
>       ) : (
>         <p>Waiting for Web Component...</p>
>       )}
>     </div>
>   );
> };
> ```

## The Path Forward: A New Design Pattern

Based on the above, we will adopt a new, explicit design pattern for wrapping complex, nested web components in React.

1.  **Rewrite `ReactTabs` and `ReactMenu` Wrappers:** We will refactor these two components to use a "Stateful-Ready Pattern." This is a necessary step to fix the bug.
2.  **Do Not Refactor Simple Components:** Components like `Button` and `Input` that are working correctly will be left as-is. The new pattern is only for complex, nested components where lifecycle conflicts are an issue.
3.  **Document the Pattern:** After successful implementation, we will create a new document (`docs/react-integration-patterns.md`) to formally define this pattern for future development.

## Refining the Plan with Advanced React Patterns

The research into `useImperativeHandle` and `Context API` provides a more robust and "React-like" way to structure our wrappers.

### Internal State Management with Context API

Instead of simply hiding children until the parent is ready, we will use React's Context API to broadcast the parent's state to its descendants.

1.  **Create a Context:** A `TabsContext` will be created to hold the shared state.
2.  **Provide State:** The main `ReactTabs` wrapper will provide the `isReady` status and other shared information (like the `activeTab` index) to its children via this context.
3.  **Consume State:** The `Tab` and `TabPanel` child components will use `useContext` to access this state and decide how and when to render, making the whole system more robust and less prone to prop-drilling.

### External API with `useImperativeHandle`

To allow developers to control our components imperatively (a common React pattern), we will expose a clean API.

1.  **Forward the Ref:** The `ReactTabs` component will be wrapped in `React.forwardRef`.
2.  **Expose Methods:** It will use the `useImperativeHandle` hook to expose a specific set of functions to the consuming component, such as `selectTab(index)`. This is much cleaner than exposing the entire DOM element.

## Revised Implementation Plan

### Phase 1: Refactor `ReactTabs`

The goal is to create a robust wrapper that correctly manages the web component lifecycle and provides a clean API.

**Step 1.1: Implement the Context and "Stateful-Ready" Wrapper**
- Create a `TabsContext` to share `isReady` and `activeTab` state.
- Wrap `ReactTabs.tsx` in `React.forwardRef`.
- Use a `useRef` for the underlying `<ag-tabs>` DOM element.
- Use a `useState` for the `isReady` flag.
- In a `useEffect`, `await customElements.whenDefined('ag-tabs')`. Once defined, set component properties (like `activation`) directly on the ref, and then set `isReady` to `true`.
- The `ReactTabs` component will render the `<ag-tabs>` element and provide the `isReady` state to the `TabsContext.Provider`.
- The `children` will be rendered inside the provider so they can consume the context.

**Step 1.2: Define the Imperative API**
- Inside `ReactTabs`, use `useImperativeHandle` to expose functions like `selectTab(index)` to parent components.

**Step 1.3: Refactor Children to Use Context**
- Modify `Tab` and `TabPanel` to be aware of the `TabsContext`.
- They will use the `isReady` value from the context to control their own rendering, ensuring they don't try to interact with the parent before it's fully initialized.

**Step 1.4: Verify the Fix**
- Run the Astro playground (`tabs.astro`).
- Confirm that the `ReactTabsDemo` renders correctly and that the "createElement" error is gone.
- Attempt to use the new imperative handle from a parent component to verify the external API.

### Phase 2: Refactor `ReactMenu`

- Apply the exact same patterns from Phase 1 (Context, `forwardRef`, `useImperativeHandle`, `useEffect`) to the `ReactMenu.tsx` wrapper component.
- Verify the fix in the corresponding playground.

### Phase 3: Documentation

- Create a new file: `docs/react-integration-patterns.md`.
- In this file, formally document the "Stateful-Ready Pattern," using the now-working `ReactTabs` as the primary example, including the use of Context and `useImperativeHandle`.
- Explain *why* this pattern is necessary for complex components with slots.
- Update the main `CONTRIBUTING.md` to link to this new documentation.
