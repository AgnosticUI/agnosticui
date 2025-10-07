import React, { useRef, useEffect } from "react";
import "../core/_Input";

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        label?: string;
        'label-hidden'?: boolean;
        'no-label'?: boolean;
        'aria-label'?: string;
        'labelled-by'?: string;
        type?: string;
        value?: string;
        placeholder?: string;
        rows?: number;
        cols?: number;
        size?: 'small' | 'default' | 'large';
        capsule?: boolean;
        rounded?: boolean;
        underlined?: boolean;
        'underlined-with-background'?: boolean;
        inline?: boolean;
        'has-left-addon'?: boolean;
        'has-right-addon'?: boolean;
        required?: boolean;
        disabled?: boolean;
        readonly?: boolean;
        invalid?: boolean;
        'error-message'?: string;
        'help-text'?: string;
      }, HTMLElement>;
    }
  }
}

const ensureWebComponentsDefined = () => {
  return Promise.all([
    customElements.whenDefined('ag-input')
  ]);
};

interface ReactInputProps {
  label?: string;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string;
  labelledBy?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  size?: 'small' | 'default' | 'large';
  capsule?: boolean;
  rounded?: boolean;
  underlined?: boolean;
  underlinedWithBackground?: boolean;
  inline?: boolean;
  hasLeftAddon?: boolean;
  hasRightAddon?: boolean;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onFocus?: (event: Event) => void;
  onBlur?: (event: Event) => void;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactInput: React.FC<ReactInputProps> = ({
  label,
  labelHidden = false,
  noLabel = false,
  ariaLabel,
  labelledBy,
  type = 'text',
  value,
  placeholder,
  rows = 4,
  cols = 50,
  size = 'default',
  capsule = false,
  rounded = false,
  underlined = false,
  underlinedWithBackground = false,
  inline = false,
  hasLeftAddon = false,
  hasRightAddon = false,
  required = false,
  disabled = false,
  readonly = false,
  invalid = false,
  errorMessage,
  helpText,
  onChange,
  onInput,
  onFocus,
  onBlur,
  children,
  className,
  id,
  ...rest
}: ReactInputProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupEventListeners = async () => {
      await ensureWebComponentsDefined();

      if (!ref.current) return;

      const inputEl = ref.current;

      const handleChange = (event: Event) => {
        // Ensure event.target.value reflects the ag-input's value property
        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value: inputEl.getAttribute('value') || ''
          }
        });
        onChange?.(event);
      };

      const handleInput = (event: Event) => {
        // Ensure event.target.value reflects the ag-input's value property
        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value: inputEl.getAttribute('value') || ''
          }
        });
        onInput?.(event);
      };

      const handleFocus = (event: Event) => {
        onFocus?.(event);
      };

      const handleBlur = (event: Event) => {
        onBlur?.(event);
      };

      inputEl.addEventListener("change", handleChange);
      inputEl.addEventListener("input", handleInput);
      inputEl.addEventListener("focus", handleFocus);
      inputEl.addEventListener("blur", handleBlur);

      return () => {
        inputEl.removeEventListener("change", handleChange);
        inputEl.removeEventListener("input", handleInput);
        inputEl.removeEventListener("focus", handleFocus);
        inputEl.removeEventListener("blur", handleBlur);
      };
    };

    let cleanup: (() => void) | undefined;
    setupEventListeners().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => cleanup?.();
  }, [onChange, onInput, onFocus, onBlur]);

  return (
    <ag-input
      ref={ref}
      label={label}
      label-hidden={labelHidden}
      no-label={noLabel}
      aria-label={ariaLabel}
      labelled-by={labelledBy}
      type={type}
      value={value}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      size={size}
      capsule={capsule}
      rounded={rounded}
      underlined={underlined}
      underlined-with-background={underlinedWithBackground}
      inline={inline}
      has-left-addon={hasLeftAddon}
      has-right-addon={hasRightAddon}
      required={required}
      disabled={disabled}
      readonly={readonly}
      invalid={invalid}
      error-message={errorMessage}
      help-text={helpText}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-input>
  );
};
