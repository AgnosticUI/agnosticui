import React from "react";
import { createComponent, type EventName } from "@lit/react";
import { AgCopyButton } from "../core/CopyButton.js";

export interface ReactCopyButtonProps {
  /**
   * The text to copy to the clipboard
   */
  text?: string;

  /**
   * The label for the button (aria-label)
   */
  label?: string;

  /**
   * The label to show when the text has been copied
   */
  successLabel?: string;

  /**
   * The label to show when copy fails
   */
  errorLabel?: string;

  /**
   * Duration in milliseconds to show the success state
   */
  timeout?: number;

  /**
   * Size of the button
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Variant of the button
   */
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "ghost"
    | "monochrome";

  /**
   * Children for custom icon slots
   */
  children?: React.ReactNode;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Element ID
   */
  id?: string;

  /**
   * Event handler for successful copy
   */
  onCopy?: (event: CustomEvent<{ text: string }>) => void;

  /**
   * Event handler for copy failure
   */
  onCopyError?: (event: CustomEvent<{ error: Error }>) => void;
}

export const ReactCopyButton = createComponent({
  tagName: "ag-copy-button",
  elementClass: AgCopyButton,
  react: React,
  events: {
    onCopy: "copy" as EventName<CustomEvent<{ text: string }>>,
    onCopyError: "copy-error" as EventName<CustomEvent<{ error: Error }>>,
  },
});
