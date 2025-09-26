import React, { useRef, useEffect } from "react";
import "../core/_Tabs";

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
        'aria-disabled'?: string;
      }, HTMLElement>;
      'ag-tab-panel': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        hidden?: boolean;
      }, HTMLElement>;
    }
  }
}

// Ensure web components are defined before using them
const ensureWebComponentsDefined = () => {
  return Promise.all([
    customElements.whenDefined('ag-tabs'),
    customElements.whenDefined('ag-tab'),
    customElements.whenDefined('ag-tab-panel')
  ]);
};

interface ReactTabsProps {
  activation?: 'manual' | 'automatic';
  activeTab?: number;
  orientation?: 'horizontal' | 'vertical';
  ariaLabel?: string;
  ariaLabelledBy?: string;
  onTabChange?: (detail: { activeTab: number; previousTab: number }) => void;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactTabs: React.FC<ReactTabsProps> = ({
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
}: ReactTabsProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupEventListeners = async () => {
      await ensureWebComponentsDefined();

      if (!ref.current) return;

      const tabsEl = ref.current as HTMLElement & {
        activation?: 'manual' | 'automatic';
        activeTab?: number;
        orientation?: 'horizontal' | 'vertical';
        ariaLabel?: string;
        ariaLabelledBy?: string;
      };

      // Explicitly set properties to ensure they're properly handled
      if (activation !== undefined) {
        tabsEl.activation = activation;
      }
      if (activeTab !== undefined) {
        tabsEl.activeTab = activeTab;
      }
      if (orientation !== undefined) {
        tabsEl.orientation = orientation;
      }
      if (ariaLabel !== undefined) {
        tabsEl.ariaLabel = ariaLabel;
      }
      if (ariaLabelledBy !== undefined) {
        tabsEl.ariaLabelledBy = ariaLabelledBy;
      }

      const handleTabChange = (event: Event) => {
        const detail = (event as CustomEvent).detail;
        onTabChange?.(detail);
      };

      tabsEl.addEventListener("tab-change", handleTabChange as EventListener);

      return () => {
        tabsEl.removeEventListener("tab-change", handleTabChange as EventListener);
      };
    };

    let cleanup: (() => void) | undefined;
    setupEventListeners().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => cleanup?.();
  }, [onTabChange, activation, activeTab, orientation, ariaLabel, ariaLabelledBy]);

  return (
    <ag-tabs
      ref={ref}
      activation={activation}
      active-tab={activeTab}
      orientation={orientation}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-tabs>
  );
};

// Export helper components for slot-based content
interface TabProps {
  panel: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

interface TabPanelProps {
  id: string;
  children?: React.ReactNode;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  panel,
  disabled = false,
  children,
  className,
  id,
  ...rest
}: TabProps) => {
  return (
    <ag-tab
      slot="tab"
      panel={panel}
      disabled={disabled || undefined}
      aria-disabled={disabled ? 'true' : undefined}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-tab>
  );
};

export const TabPanel: React.FC<TabPanelProps> = ({
  id,
  children,
  className,
  ...rest
}: TabPanelProps) => {
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