import { ReactBadgeFx } from "agnosticui-core/badge-fx/react";

export default function BadgeFxReactExamples() {
  return (
    <div className="stacked-mobile mbe4">
      <ReactBadgeFx fx="bounce" variant="success">Bounce</ReactBadgeFx>
      <ReactBadgeFx fx="pulse" variant="info">Pulse</ReactBadgeFx>
      <ReactBadgeFx fx="jelly" fxSpeed="lg" fxEase="spring-sm" variant="monochrome">Jelly</ReactBadgeFx>
      <ReactBadgeFx fx="shimmer" fxSpeed="xl" variant="danger">Shimmer</ReactBadgeFx>
      <ReactBadgeFx fx="glow" variant="primary">Glow</ReactBadgeFx>
      <ReactBadgeFx fx="flip" fxSpeed="lg" fxEase="ease-in" variant="success">Flip</ReactBadgeFx>
      <ReactBadgeFx fx="ripple" variant="info">Ripple</ReactBadgeFx>
      <ReactBadgeFx fx="highlight-sweep" fxSpeed="lg" fxEase="ease-out" variant="monochrome">Sweep</ReactBadgeFx>
      <ReactBadgeFx fx="press-pop" variant="default" interactive>Press Pop</ReactBadgeFx>
    </div>
  );
}
