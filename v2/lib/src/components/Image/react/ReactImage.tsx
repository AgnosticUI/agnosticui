import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  AgImage,
  type AgImageProps,
  type ImageLoadEvent,
  type ImageErrorEvent,
} from "../core/Image";

/**
 * React-specific props interface for Image component
 */
export interface ReactImageProps extends AgImageProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Explicitly include event handler types
  onLoad?: (event: Event) => void;
  onError?: (event: Event) => void;
  onAgLoad?: (event: ImageLoadEvent) => void;
  onAgError?: (event: ImageErrorEvent) => void;
}

// Create Image component with @lit/react
export const ReactImage = createComponent({
  tagName: "ag-image",
  elementClass: AgImage,
  react: React,
  events: {
    // Map custom events only (native events work automatically)
    onAgLoad: "ag-load" as EventName<ImageLoadEvent>,
    onAgError: "ag-error" as EventName<ImageErrorEvent>,
  },
}) as React.ForwardRefExoticComponent<
  ReactImageProps & React.RefAttributes<AgImage>
>;
