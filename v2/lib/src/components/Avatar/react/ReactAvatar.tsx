import React from "react";
import { createComponent } from "@lit/react";
import {
  Avatar as AvatarElement,
  AvatarGroup as AvatarGroupElement,
  type AvatarProps,
} from "../core/Avatar";

/**
 * React-specific props for Avatar
 */
export interface ReactAvatarProps extends AvatarProps {
  children?: React.ReactNode;
}

/**
 * React-specific props for AvatarGroup
 */
export interface ReactAvatarGroupProps {
  children?: React.ReactNode;
}

export const ReactAvatar = createComponent({
  tagName: "ag-avatar",
  elementClass: AvatarElement,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});

// Create AvatarGroup component with @lit/react
export const ReactAvatarGroup = createComponent({
  tagName: "ag-avatar-group",
  elementClass: AvatarGroupElement,
  react: React,
  events: {},
});

// Re-export types
export type { AvatarSize, AvatarShape, AvatarVariant } from "../core/Avatar";
