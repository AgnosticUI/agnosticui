import React, { useRef, useEffect } from "react";
import "../core/_Toggle";

// Extend React's JSX namespace to include our custom elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-toggle': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        label?: string;
        checked?: boolean;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        variant?: 'default' | 'success' | 'warning' | 'danger';
        disabled?: boolean;
        readonly?: boolean;
        'labelledby'?: string;
        'describedby'?: string;
        name?: string;
        value?: string;
      }, HTMLElement>;
    }
  }
}

// Ensure web components are defined before using them
const ensureWebComponentsDefined = () => {
  return Promise.all([
    customElements.whenDefined('ag-toggle')
  ]);
};

interface ReactToggleProps {
  label?: string;
  checked?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  readonly?: boolean;
  labelledBy?: string;
  describedBy?: string;
  name?: string;
  value?: string;
  onChange?: (detail: { checked: boolean; name: string; value: string }) => void;
  className?: string;
  id?: string;
}

export const ReactToggle: React.FC<ReactToggleProps> = ({
  label,
  checked = false,
  size = 'md',
  variant = 'default',
  disabled = false,
  readonly = false,
  labelledBy,
  describedBy,
  name,
  value,
  onChange,
  className,
  id,
  ...rest
}: ReactToggleProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupEventListeners = async () => {
      await ensureWebComponentsDefined();

      if (!ref.current) return;

      const toggleEl = ref.current;

      const handleToggleChange = (event: Event) => {
        const detail = (event as CustomEvent).detail;
        onChange?.(detail);
      };

      toggleEl.addEventListener("toggle-change", handleToggleChange as EventListener);

      return () => {
        toggleEl.removeEventListener("toggle-change", handleToggleChange as EventListener);
      };
    };

    let cleanup: (() => void) | undefined;
    setupEventListeners().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => cleanup?.();
  }, [onChange]);

  return (
    <ag-toggle
      ref={ref}
      label={label}
      checked={checked || undefined}
      size={size}
      variant={variant}
      disabled={disabled || undefined}
      readonly={readonly || undefined}
      labelledby={labelledBy}
      describedby={describedBy}
      name={name}
      value={value}
      className={className}
      id={id}
      {...rest}
    />
  );
};