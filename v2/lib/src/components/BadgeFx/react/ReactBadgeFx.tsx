import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import { BadgeFx, type BadgeFxProps } from "../core/BadgeFx";

export interface ReactBadgeFxProps extends BadgeFxProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactBadgeFx = createComponent({
  tagName: "ag-badge-fx",
  elementClass: BadgeFx,
  react: React,
  events: {
    onBadgeClick: "badge:click" as EventName<CustomEvent>,
  },
});

export type { BadgeFxProps } from "../core/BadgeFx";
export type { FxProps } from "../../../types/fx";
