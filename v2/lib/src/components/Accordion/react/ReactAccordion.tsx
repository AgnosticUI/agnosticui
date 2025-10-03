import React, { useRef, useEffect } from "react";
import "../core/_Accordion";
import "../../AccordionGroup/AccordionGroup";

// Extend React's JSX namespace to include our custom elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'ag-accordion-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        open?: boolean;
        'heading-level'?: number;
        disabled?: boolean;
        indicator?: boolean;
        background?: boolean;
        bordered?: boolean;
      }, HTMLElement>;
    }
  }
}

// Ensure web components are defined before using them
const ensureWebComponentsDefined = () => {
  return Promise.all([
    customElements.whenDefined('ag-accordion'),
    customElements.whenDefined('ag-accordion-item')
  ]);
};

interface AccordionProps {
  children?: React.ReactNode;
}

interface AccordionItemProps {
  open?: boolean;
  headingLevel?: number;
  disabled?: boolean;
  indicator?: boolean;
  background?: boolean;
  bordered?: boolean;
  onToggle?: (detail: { open: boolean }) => void;
  children?: React.ReactNode;
}

interface ItemHeaderProps {
  children?: React.ReactNode;
}

interface ItemContentProps {
  children?: React.ReactNode;
}

export const ReactAccordion: React.FC<AccordionProps> = ({
  children,
}: AccordionProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ensureWebComponentsDefined();
  }, []);

  // Use ag-accordion web component for keyboard navigation between accordion items
  return (
    <ag-accordion ref={ref}>
      {children}
    </ag-accordion>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  open = false,
  headingLevel,
  disabled = false,
  indicator = false,
  background = false,
  bordered = false,
  onToggle,
  children,
}: AccordionItemProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupEventListeners = async () => {
      await ensureWebComponentsDefined();

      if (!ref.current) return;

      const itemEl = ref.current;
      const handleToggle = (event: Event) => {
        event.stopPropagation();
        const detail = (event as CustomEvent).detail;
        onToggle?.(detail);
      };

      itemEl.addEventListener("toggle", handleToggle as EventListener);

      return () => {
        itemEl.removeEventListener("toggle", handleToggle as EventListener);
      };
    };

    let cleanup: (() => void) | undefined;
    setupEventListeners().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => cleanup?.();
  }, [onToggle]);

  return (
    <ag-accordion-item
      ref={ref}
      open={open}
      heading-level={headingLevel}
      disabled={disabled}
      indicator={indicator}
      background={background}
      bordered={bordered}
    >
      {children}
    </ag-accordion-item>
  );
};

export const ItemHeader: React.FC<ItemHeaderProps> = ({ children }: ItemHeaderProps) => {
  return <span slot="header">{children}</span>;
};

export const ItemContent: React.FC<ItemContentProps> = ({ children }: ItemContentProps) => {
  return <div slot="content">{children}</div>;
};
