import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import { TooltipFx, type TooltipFxProps } from "../core/TooltipFx";
import type { TooltipShowEvent, TooltipHideEvent } from "../../Tooltip/core/Tooltip";

export interface ReactTooltipFxProps extends TooltipFxProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactTooltipFx = createComponent({
  tagName: "ag-tooltip-fx",
  elementClass: TooltipFx,
  react: React,
  events: {
    onShow: 'show' as EventName<TooltipShowEvent>,
    onHide: 'hide' as EventName<TooltipHideEvent>,
  },
});

export type { TooltipFxProps } from "../core/TooltipFx";
export type { FxProps } from "../../../types/fx";
