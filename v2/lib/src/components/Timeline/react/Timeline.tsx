// v2/lib/src/components/Timeline/react/Timeline.tsx
import React from "react";
import { createComponent } from "@lit/react";
import {
  AgTimeline as AgTimelineWC,
  AgTimelineItem as AgTimelineItemWC,
} from "../core/Timeline.js";
import type { AgTimelineProps, AgTimelineItemProps } from "../core/Timeline.js";

// Create React wrapper for Timeline
export const ReactTimeline = createComponent({
  tagName: "ag-timeline",
  elementClass: AgTimelineWC,
  react: React,
  events: {
    onSlotChange: "slotchange",
  },
});

// Create React wrapper for TimelineItem
export const ReactTimelineItem = createComponent({
  tagName: "ag-timeline-item",
  elementClass: AgTimelineItemWC,
  react: React,
});

// Export types with better names for React context
export type ReactTimelineProps = AgTimelineProps & {
  children?: React.ReactNode;
};

export type ReactTimelineItemProps = AgTimelineItemProps & {
  children?: React.ReactNode;
};
