import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  ButtonFx,
  type ButtonFxProps,
} from "../core/ButtonFx";
import type { ButtonToggleEvent } from "../../Button/core/Button";

/**
 * React-specific props interface derived from core ButtonFxProps
 * Extends core props including event handlers (onToggle)
 */
export interface ReactButtonFxProps extends ButtonFxProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Explicitly include event handler types for TS completeness
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onToggle?: (event: ButtonToggleEvent) => void;
}

// Create component with @lit/react
export const ReactButtonFx = createComponent({
  tagName: "ag-button-fx",
  elementClass: ButtonFx,
  react: React,
  events: {
    onToggle: "toggle" as EventName<ButtonToggleEvent>,
  },
});

// Re-export types
export type { ButtonFxProps, FxProps } from "../core/ButtonFx";
export type { ButtonToggleEvent } from "../../Button/core/Button";
