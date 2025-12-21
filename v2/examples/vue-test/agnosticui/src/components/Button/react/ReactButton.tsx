import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  AgButton,
  type ButtonProps,
  type ButtonToggleEvent,
} from "../core/Button";

/**
 * React-specific props interface derived from core ButtonProps
 * Extends core props including event handlers (onToggle)
 */
export interface ReactButtonProps extends ButtonProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Explicitly include event handler types for TS completeness (even if not all are mapped in `events`)
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onToggle?: (event: ButtonToggleEvent) => void;
}

// Create component with @lit/react
export const ReactButton = createComponent({
  tagName: "ag-button",
  elementClass: AgButton,
  react: React,
  events: {
    onToggle: "toggle" as EventName<ButtonToggleEvent>,
  },
});

// Re-export event types
export type { ButtonToggleEvent } from "../core/Button";
