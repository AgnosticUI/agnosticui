import { ReactTagFx } from "agnosticui-core/tag-fx/react";

export default function TagFxReactExamples() {
  return (
    <div className="stacked-mobile mbe4">
      <ReactTagFx fx="bounce" variant="success">Bounce</ReactTagFx>
      <ReactTagFx fx="pulse" variant="info">Pulse</ReactTagFx>
      <ReactTagFx fx="jelly" fxSpeed="lg" fxEase="spring-sm" variant="primary">Jelly</ReactTagFx>
      <ReactTagFx fx="shimmer" fxSpeed="xl" variant="warning">Shimmer</ReactTagFx>
      <ReactTagFx fx="glow" variant="error">Glow</ReactTagFx>
      <ReactTagFx fx="flip" fxSpeed="lg" fxEase="ease-in" variant="success">Flip</ReactTagFx>
      <ReactTagFx fx="ripple" variant="info">Ripple</ReactTagFx>
      <ReactTagFx fx="highlight-sweep" fxSpeed="lg" fxEase="ease-out" variant="monochrome">Sweep</ReactTagFx>
      <ReactTagFx fx="press-pop" variant="primary">Press Pop</ReactTagFx>
    </div>
  );
}
