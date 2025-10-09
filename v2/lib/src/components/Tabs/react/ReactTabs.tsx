import React, {
  useRef,
  useEffect,
  useState,
  createContext,
  forwardRef,
  useImperativeHandle,
} from "react";
import type { ReactNode } from "react";
import "../core/_Tabs";

// Define the types for the custom element's properties and methods
// This will be used for the ref to ensure type safety.
export type AgnosticTabsElement = HTMLElement & {
  activation: 'manual' | 'automatic';
  activeTab: number;
  orientation: 'horizontal' | 'vertical';
  selectTab: (index: number) => void;
  focusTab: (index: number) => void;
};

// Define the shape of the context data
interface TabsContextValue {
  isReady: boolean;
  activeTab: number;
}

// Create the context
const TabsContext = createContext<TabsContextValue | null>(null);

// Extend React's JSX namespace to include our custom elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-tabs': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        activation?: 'manual' | 'automatic';
        'active-tab'?: number;
        orientation?: 'horizontal' | 'vertical';
        'aria-label'?: string;
        'aria-labelledby'?: string;
      }, HTMLElement>;
      'ag-tab': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        panel?: string;
        disabled?: boolean;
      }, HTMLElement>;
      'ag-tab-panel': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        hidden?: boolean;
      }, HTMLElement>;
    }
  }
}

/**
 * Props for ReactTabs component
 */
export interface ReactTabsProps {
  activation?: 'manual' | 'automatic';
  activeTab?: number;
  orientation?: 'horizontal' | 'vertical';
  ariaLabel?: string;
  ariaLabelledBy?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Props with event handlers for programmatic usage (e.g., Storybook, testing, imperative APIs)
 */
export interface ReactTabsPropsWithEvents extends ReactTabsProps {
  onTabChange?: (detail: { activeTab: number; previousTab: number }) => void;
}

export const ReactTabs = forwardRef<AgnosticTabsElement, ReactTabsPropsWithEvents>((
  {
    activation = 'manual',
    activeTab = 0,
    orientation = 'horizontal',
    ariaLabel,
    ariaLabelledBy,
    onTabChange,
    children,
    className,
    id,
    ...rest
  },
  ref
) => {
  const tabsRef = useRef<AgnosticTabsElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const tabsElement = tabsRef.current;
    if (!tabsElement) return;

    let cleanupFunction: (() => void) | undefined;

    customElements.whenDefined('ag-tabs').then(() => {
      const handleTabChange = (event: Event) => {
        const detail = (event as CustomEvent).detail;
        onTabChange?.(detail);
      };

      // Attach event listener
      tabsElement.addEventListener("tab-change", handleTabChange as EventListener);

      // Set properties
      tabsElement.activation = activation;
      tabsElement.activeTab = activeTab;
      tabsElement.orientation = orientation;
      if (ariaLabel) tabsElement.setAttribute('aria-label', ariaLabel);
      if (ariaLabelledBy) tabsElement.setAttribute('aria-labelledby', ariaLabelledBy);

      setIsReady(true);

      cleanupFunction = () => {
        tabsElement.removeEventListener("tab-change", handleTabChange as EventListener);
      };
    });

    return () => {
      cleanupFunction?.();
    };
  }, [activation, activeTab, orientation, ariaLabel, ariaLabelledBy, onTabChange]);

  // Expose a public API via useImperativeHandle
  useImperativeHandle(ref, () => tabsRef.current as AgnosticTabsElement);

  return (
    <TabsContext.Provider value={{ isReady, activeTab }}>
      <ag-tabs
        ref={tabsRef}
        className={className}
        id={id}
        {...rest}
      >
        {children}
      </ag-tabs>
    </TabsContext.Provider>
  );
});

ReactTabs.displayName = "ReactTabs";

/**
 * Props for Tab component
 */
export interface TabProps {
  panel: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  id?: string;
}

export const Tab: React.FC<TabProps> = ({
  panel,
  disabled = false,
  children,
  className,
  id,
  ...rest
}) => {
  return (
    <ag-tab
      slot="tab"
      panel={panel}
      disabled={disabled ? true : undefined}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-tab>
  );
};

/**
 * Props for TabPanel component
 */
export interface TabPanelProps {
  id: string;
  children?: ReactNode;
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  id,
  children,
  className,
  ...rest
}) => {
  return (
    <ag-tab-panel
      slot="panel"
      id={id}
      className={className}
      {...rest}
    >
      {children}
    </ag-tab-panel>
  );
};
