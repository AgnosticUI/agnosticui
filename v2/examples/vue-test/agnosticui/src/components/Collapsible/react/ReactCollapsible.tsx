import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  AgCollapsible,
  type CollapsibleProps,
  type CollapsibleToggleEvent,
} from "../core/Collapsible";

/**
 * React-specific props interface derived from core CollapsibleProps
 * Extends core props including event handlers (onToggle)
 */
export interface ReactCollapsibleProps extends CollapsibleProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onToggle?: (event: CollapsibleToggleEvent) => void;
}

// Create component with @lit/react
export const ReactCollapsible = createComponent({
  tagName: "ag-collapsible",
  elementClass: AgCollapsible,
  react: React,
  events: {
    onToggle: "toggle" as EventName<CollapsibleToggleEvent>,
  },
});

// Re-export event types
export type { CollapsibleToggleEvent } from "../core/Collapsible";
