import { createComponent } from "@lit/react";
import React from "react";
import { ScrollToButton } from "../core/ScrollToButton.js";

export interface ReactScrollToButtonProps {
  label?: string;
  icon?: boolean;
  scrollThreshold?: number;
  target?: "top" | "bottom" | string;
  direction?: "up" | "down" | "auto";
  smoothScroll?: boolean;
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<ScrollToButton>;
}

export const ReactScrollToButton = createComponent({
  tagName: "ag-scroll-to-button",
  elementClass: ScrollToButton,
  react: React,
  events: {
    // No custom events for ScrollToButton
  },
});
