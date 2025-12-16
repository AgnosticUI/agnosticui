import { createComponent } from "@lit/react";
import React from "react";
import {
  AgSkeleton,
  type SkeletonProps,
  type SkeletonVariant,
  type SkeletonEffect,
  type SkeletonIntensity,
} from "../core/SkeletonLoader.js";

export type { SkeletonProps, SkeletonVariant, SkeletonEffect, SkeletonIntensity };

export const ReactSkeletonLoader = createComponent({
  tagName: "ag-skeleton-loader",
  elementClass: AgSkeleton,
  react: React,
  events: {
    // No custom events for Skeleton component
  },
});
