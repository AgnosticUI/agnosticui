import React, { useRef, useEffect } from "react";
import "../core/_Breadcrumb";
import type { BreadcrumbItem } from "../core/_Breadcrumb";

// Extend React's JSX namespace to include our custom elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-breadcrumb': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        items?: BreadcrumbItem[];
        type?: 'default' | 'slash' | 'bullet' | 'arrow';
        'aria-label'?: string;
      }, HTMLElement>;
    }
  }
}

// Ensure web components are defined before using them
const ensureWebComponentsDefined = () => {
  return Promise.all([
    customElements.whenDefined('ag-breadcrumb')
  ]);
};

interface ReactBreadcrumbProps {
  items: BreadcrumbItem[];
  type?: 'default' | 'slash' | 'bullet' | 'arrow';
  ariaLabel?: string;
  onBreadcrumbClick?: (detail: { item: BreadcrumbItem; index: number; event: MouseEvent }) => void;
  className?: string;
  id?: string;
}

export const ReactBreadcrumb: React.FC<ReactBreadcrumbProps> = ({
  items,
  type = 'default',
  ariaLabel = 'Breadcrumb',
  onBreadcrumbClick,
  className,
  id,
  ...rest
}: ReactBreadcrumbProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupEventListeners = async () => {
      await ensureWebComponentsDefined();

      if (!ref.current) return;

      const breadcrumbEl = ref.current;

      const handleBreadcrumbClick = (event: Event) => {
        const detail = (event as CustomEvent).detail;
        onBreadcrumbClick?.(detail);
      };

      breadcrumbEl.addEventListener("breadcrumb-click", handleBreadcrumbClick as EventListener);

      return () => {
        breadcrumbEl.removeEventListener("breadcrumb-click", handleBreadcrumbClick as EventListener);
      };
    };

    let cleanup: (() => void) | undefined;
    setupEventListeners().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => cleanup?.();
  }, [onBreadcrumbClick]);

  // Update items when they change
  useEffect(() => {
    if (ref.current) {
      (ref.current as HTMLElement & { items: BreadcrumbItem[] }).items = items;
    }
  }, [items]);

  return (
    <ag-breadcrumb
      ref={ref}
      type={type}
      aria-label={ariaLabel}
      className={className}
      id={id}
      {...rest}
    />
  );
};