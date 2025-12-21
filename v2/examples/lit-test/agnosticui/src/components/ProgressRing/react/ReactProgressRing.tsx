import { createComponent } from "@lit/react";
import React from "react";
import {
  AgProgressRing,
  type AgProgressRingProps,
} from "../core/ProgressRing.js";

export type { AgProgressRingProps };

export const ReactProgressRing = createComponent({
  tagName: "ag-progress-ring",
  elementClass: AgProgressRing,
  react: React,
});
