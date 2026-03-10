/**
 * AgnosticUI SDUI Schema - TypeScript type definitions
 *
 * Each node is a discriminated union on the `component` field.
 * Props are plain literal values — no data binding, no executable code.
 * Interactions are string action aliases routed through the renderer's
 * Action Dispatcher (on_click, on_change), never executable code.
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
