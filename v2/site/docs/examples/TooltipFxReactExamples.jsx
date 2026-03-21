import { ReactTooltipFx } from "agnosticui-core/tooltip-fx/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function TooltipFxReactExamples() {
  return (
    <div className="stacked-mobile mbe4">
      <ReactTooltipFx fx="bounce" content="Bounce effect">
        <ReactButton>Bounce</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="pulse" content="Pulse effect">
        <ReactButton variant="primary">Pulse</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="jelly" fxSpeed="lg" fxEase="spring-sm" content="Jelly effect">
        <ReactButton variant="success">Jelly</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="shimmer" fxSpeed="xl" content="Shimmer effect">
        <ReactButton variant="warning">Shimmer</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="glow" content="Glow effect">
        <ReactButton variant="danger">Glow</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="flip" fxSpeed="lg" fxEase="ease-in" content="Flip effect">
        <ReactButton>Flip</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="ripple" content="Ripple effect">
        <ReactButton variant="primary">Ripple</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="highlight-sweep" fxSpeed="lg" content="Sweep effect">
        <ReactButton variant="success">Sweep</ReactButton>
      </ReactTooltipFx>
    </div>
  );
}
