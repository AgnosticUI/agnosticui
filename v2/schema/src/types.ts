/**
 * AgnosticUI SDUI Schema - TypeScript type definitions
 *
 * Each node is a discriminated union on the `component` field.
 * Props are plain literal values — no data binding, no executable code.
 * Interactions are string action aliases routed through the renderer's
 * Action Dispatcher (on_click, on_change), never executable code.
 *
 * SYNC NOTE: Each interface below is a curated subset of its corresponding
 * core interface in v2/lib/src/components/<Name>/core/_<Name>.ts. When a
 * core interface changes (new prop, renamed variant, etc.) check whether the
 * change should be reflected here too. Future: a codegen script will automate
 * this check — see issue #351 future scope.
 *
 * Deliberate omissions (applied to every node type):
 *   - Function-type event handlers (onClick, onFocus, …) — replaced by
 *     string action aliases (on_click, on_change).
 *   - Stateful / render-internal props unlikely to be LLM-generated safely
 *     (e.g. AgButton: bordered, ghost, link, grouped, fullWidth, toggle, pressed).
 */

/**
 * Tracks: v2/lib/src/components/Button/core/_Button.ts → ButtonProps
 * Omitted from ButtonProps: bordered, ghost, link, grouped, fullWidth,
 *   ariaLabel, toggle, pressed, onClick, onFocus, onBlur, onToggle
 */
export interface AgButtonNode {
  id: string;
  component: 'AgButton';
  label?: string;
  variant?: 'success' | 'primary' | 'secondary' | 'warning' | 'danger' | 'monochrome';
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: string[];
  on_click?: string;
}

/**
 * Tracks: v2/lib/src/components/Card/core/_Card.ts → CardProps
 * Omitted from CardProps: hasMedia, mediaPosition
 */
export interface AgCardNode {
  id: string;
  component: 'AgCard';
  shadow?: boolean;
  animated?: boolean;
  stacked?: boolean;
  rounded?: 'sm' | 'md' | 'lg';
  variant?: 'success' | 'info' | 'error' | 'warning' | 'monochrome';
  children?: string[];
  on_click?: string;
}

/**
 * Tracks: v2/lib/src/components/Input/core/_Input.ts → InputProps
 * Omitted from InputProps: labelHidden, labelPosition, noLabel, ariaLabel,
 *   rows, cols, capsule, rounded, underlined, underlinedWithBackground, inline,
 *   onInput, onClick, onFocus, onBlur
 * Note: InputType 'textarea' omitted intentionally (creates a different element).
 */
export interface AgInputNode {
  id: string;
  component: 'AgInput';
  name?: string;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'time' | 'week';
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  children?: string[];
  on_change?: string;
}

/**
 * Tracks: v2/lib/src/components/Select/core/_Select.ts → SelectProps
 * Omitted from SelectProps: multiple, multipleSize, labelPosition, labelHidden,
 *   noLabel, onClick, onFocus, onBlur
 */
export interface AgSelectNode {
  id: string;
  component: 'AgSelect';
  name?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  size?: 'small' | 'large';
  children?: string[];
  on_change?: string;
}

/**
 * Tracks: v2/lib/src/components/Checkbox/core/_Checkbox.ts → CheckboxProps
 * Omitted from CheckboxProps: indeterminate, theme, labelPosition, onClick
 */
export interface AgCheckboxNode {
  id: string;
  component: 'AgCheckbox';
  name?: string;
  labelText?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  children?: string[];
  on_change?: string;
}

/**
 * Tracks: v2/lib/src/components/Toggle/core/_Toggle.ts → ToggleProps
 * Omitted from ToggleProps: labelPosition, labelHidden, noLabel, readonly,
 *   value, validationMessages, onClick
 */
export interface AgToggleNode {
  id: string;
  component: 'AgToggle';
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'monochrome';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  children?: string[];
  on_change?: string;
}

export type AgNode =
  | AgButtonNode
  | AgCardNode
  | AgInputNode
  | AgSelectNode
  | AgCheckboxNode
  | AgToggleNode;

export type AgComponentName = AgNode['component'];
