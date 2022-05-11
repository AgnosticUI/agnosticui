<template>
  <section>
    <Card is-border>
      <div class="p16">Border Card</div>
      <div
        class="p16 flex-grow-1 flex-shrink-1"
        style="flex-basis: 50ch;"
      >
        The card comes with minimal
        <span class="quoted">skinning css</span>
        and no padding (the padding you see here is from the demo styles).
        By default Cards have a flex direction of <i>row</i>, so each child
        with a <i>flex</i> rule will get placed as a sort of column
        in the row (until the viewport is shrunk below a size that can support
        the content's flex-basis; under that it will wrap and thus stack).
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-border
      is-rounded
    >
      <div class="p16">
        Border & Rounded
      </div>
      <div
        class="p16 flex-grow-1 flex-shrink-1"
        style="flex-basis: 50ch;"
      >
        The card comes with minimal
        <span class="quoted">skinning css</span>
        and no padding (the padding you see here is from the demo styles).
        By default Cards have a flex direction of <i>row</i>, so each child
        with a <i>flex</i> rule will get placed as a sort of column
        in the row (until the viewport is shrunk below a size that can support
        the content's flex-basis; under that it will wrap and thus stack).
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-stacked
      is-border
    >
      <div class="p16">
        Stacked & Border
      </div>
      <div style="padding: 24px">
        Stacked cards start their lives with flex direction <i>column</i>, so each child
        be stacked one on top of the other and continue to grow downward.
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-stacked
      is-shadow
    >
      <div class="p16">
        Stacked & Shadow
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-stacked
      is-shadow
      is-animated
    >
      <div class="p16">
        Stacked, Animated (on hover), & Shadow
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="success"
      is-stacked
    >
      <div class="p16">
        Success
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="info"
      is-stacked
    >
      <div class="p16">
        Info
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="warning"
      is-stacked
    >
      <div class="p16">
        Warning
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="error"
      is-stacked
    >
      <div class="p16">
        Error
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
  </section>
</template>
<script setup lang="ts">
import Card from "../../src/components/Card.vue";
</script>
<style>
.animation-override:hover {
  /* animate down Y instead of up */
  transform: translateY(3px);
}
</style>
