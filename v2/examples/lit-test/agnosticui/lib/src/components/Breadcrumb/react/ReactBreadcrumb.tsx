import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  AgBreadcrumb,
  type BreadcrumbProps,
  type BreadcrumbClickEvent,
} from "../core/Breadcrumb";

/**
 * React-specific props interface derived from core BreadcrumbProps
 * Extends core props including event handlers (onBreadcrumbClick)
 */
export interface ReactBreadcrumbProps extends BreadcrumbProps {
  children?: React.ReactNode;
}

// Create component with @lit/react
export const ReactBreadcrumb = createComponent({
  tagName: "ag-breadcrumb",
  elementClass: AgBreadcrumb,
  react: React,
  events: {
    onBreadcrumbClick: "breadcrumb-click" as EventName<BreadcrumbClickEvent>,
  },
});

// Re-export types
export type { BreadcrumbClickEvent, BreadcrumbItem } from "../core/Breadcrumb";
