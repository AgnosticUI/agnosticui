import { ReactAvatarFx } from "agnosticui-core/avatar-fx/react";

export default function AvatarFxReactExamples() {
  return (
    <div className="stacked-mobile mbe4">
      <ReactAvatarFx fx="bounce" variant="info" text="AB" />
      <ReactAvatarFx fx="pulse" variant="success" text="CD" />
      <ReactAvatarFx fx="jelly" fxSpeed="lg" fxEase="spring-sm" variant="warning" text="EF" />
      <ReactAvatarFx fx="shimmer" fxSpeed="xl" variant="error" text="GH" />
      <ReactAvatarFx fx="glow" variant="monochrome" text="IJ" />
      <ReactAvatarFx fx="flip" fxSpeed="lg" fxEase="ease-in" variant="info" shape="rounded" text="KL" />
      <ReactAvatarFx fx="ripple" variant="success" shape="square" text="MN" />
      <ReactAvatarFx fx="highlight-sweep" fxSpeed="lg" fxEase="ease-out" variant="monochrome" text="OP" />
      <ReactAvatarFx fx="press-pop" variant="warning" text="QR" />
    </div>
  );
}
