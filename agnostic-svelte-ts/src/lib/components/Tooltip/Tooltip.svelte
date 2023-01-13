<style>
.tooltip {
  display: none;
  position: absolute;
  background: var(--agnostic-dark);
  color: var(--agnostic-light);
  padding: var(--fluid-4) var(--fluid-8);
  border-radius: var(--fluid-4);
  pointer-events: none;
}

.tooltip-arrow {
  position: absolute;
  background: var(--agnostic-dark);
  width: var(--fluid-8);
  height: var(--fluid-8);
  transform: rotate(45deg);
}

</style>
<script lang="ts">
  import {
    computePosition,
    flip,
    offset as fuOffset,
    shift,
    arrow,
  } from "@floating-ui/dom";
  import type { TooltipPlacement } from './api';

  export let placement: TooltipPlacement = "top";
  export let offset: number = 6;

  let tooltipRef;
  let tooltipTargetRef;
  let tooltipArrowRef;

  const uid = () =>
    `tip-${Date.now().toString(32)}-${Math.random()
      .toString(16)
      .replace(/\./g, "")
      .toString()}`;

  const id = uid();


  const update = () => {
    const tip = tooltipRef;
    const target = tooltipTargetRef;
    const arrowEl = tooltipArrowRef;

    if (tip && target && arrowEl) {
      computePosition(target, tip, {
        placement: placement,
        middleware: [
          fuOffset(offset),
          flip(),
          shift({ padding: 4 }),
          arrow({
            element: arrowEl,
            // Offset from edge; fixes issue on left-start, left-end, right-start,
            // etc., where arrow oddly overlaps the rounded corner of content box
            padding: 10,
          }),
        ],
      }).then(({ x, y, placement, middlewareData }) => {
        const arrowX = middlewareData.arrow!.x;
        const arrowY = middlewareData.arrow!.y;
        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right",
        }[placement.split("-")[0]]!;

        Object.assign(tip.style, {
          left: `${x}px`,
          top: `${y}px`,
        });

        Object.assign(arrowEl.style, {
          left: typeof arrowX === "number" ? `${arrowX}px` : "",
          top: typeof arrowY === "number" ? `${arrowY}px` : "",
          right: "",
          bottom: "",
          [staticSide]: "-4px",
        });
      });
    }
  }

  const showTooltip = () => {
    if (tooltipRef) {
      tooltipRef.style.display = "block";
    }
    update();
  };

  const hideTooltip = () => {
    if (tooltipRef) {
      tooltipRef.style.display = "";
    }
  };
  const tooltipClasses = "tooltip";
  const tooltipArrowClasses = "tooltip-arrow";
</script>
<div
  bind:this={tooltipTargetRef}
  aria-describedby={id}
  on:focus={showTooltip}
  on:mouseenter={showTooltip}
  on:mouseleave={hideTooltip}
  on:blur={hideTooltip}
>
  <slot></slot>
</div>
<div id={id} bind:this={tooltipRef} role="tooltip" class={tooltipClasses}>
  <slot name="content"></slot>
  <div id="arrow" bind:this={tooltipArrowRef} class={tooltipArrowClasses} />
</div>
