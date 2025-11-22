import React from "react";
import { createComponent } from "@lit/react";
// Import from the registration file to ensure custom element is defined
import { ScrollToButton as ScrollToButtonLit } from "../core/ScrollToButton.js";

export interface ScrollToButtonProps {
  label?: string;
  showLabel?: boolean;
  icon?: boolean;
  scrollThreshold?: number;
  target?: "top" | "bottom" | string;
  direction?: "up" | "down" | "auto";
  smoothScroll?: boolean;
  visible?: boolean;
  size?: "x-sm" | "sm" | "md" | "lg" | "xl";
  shape?: "capsule" | "rounded" | "circle" | "square" | "rounded-square" | "";
  children?: React.ReactNode;
}

export const ReactScrollToButton = createComponent({
  tagName: "ag-scroll-to-button",
  elementClass: ScrollToButtonLit,
  react: React,
  events: {},
});
