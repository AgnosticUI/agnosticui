import React, { useRef, useEffect } from "react";
import "../core/_Input";

// Extend React's JSX namespace to include our custom elements
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
        'is-rounded'?: boolean;
        'is-underlined'?: boolean;
        'is-underlined-with-background'?: boolean;
        'is-inline'?: boolean;
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

// Ensure web components are defined before using them
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
  isRounded?: boolean;
  isUnderlined?: boolean;
  isUnderlinedWithBackground?: boolean;
  isInline?: boolean;
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
  isRounded = false,
  isUnderlined = false,
  isUnderlinedWithBackground = false,
  isInline = false,
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
        onChange?.(event);
      };

      const handleInput = (event: Event) => {
        onInput?.(event);
      };

      const handleFocus = (event: Event) => {
        onFocus?.(event);
      };

      const handleBlur = (event: Event) => {
        onBlur?.(event);
      };

      inputEl.addEventListener("change", handleChange as EventListener);
      inputEl.addEventListener("input", handleInput as EventListener);
      inputEl.addEventListener("focus", handleFocus as EventListener);
      inputEl.addEventListener("blur", handleBlur as EventListener);

      return () => {
        inputEl.removeEventListener("change", handleChange as EventListener);
        inputEl.removeEventListener("input", handleInput as EventListener);
        inputEl.removeEventListener("focus", handleFocus as EventListener);
        inputEl.removeEventListener("blur", handleBlur as EventListener);
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
      is-rounded={isRounded}
      is-underlined={isUnderlined}
      is-underlined-with-background={isUnderlinedWithBackground}
      is-inline={isInline}
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