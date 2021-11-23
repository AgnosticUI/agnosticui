<template>
  <section>
    <Card>
      <div :style="{padding: '24px'}">Default orientation is row (column on mobile)</div>
      <div :style="{padding: '24px'}">Another card</div>
    </Card>
    <Card isStacked>
      <div :style="{padding: '24px'}">Stacked cards always orient as stacked columns</div>
      <div :style="{padding: '24px'}">Another card</div>
    </Card>
    <Card
      isAnimated
      isStacked
    >
      <div :style="{padding: '24px'}">Animated & Stacked</div>
      <div :style="{padding: '24px'}"></div>
    </Card>
    <Card
      isAnimated
      isStacked
      css="animation-override"
    >
      <div :style="{padding: '24px'}">Animated & Stacked</div>
      <div :style="{padding: '24px'}">Customized via css prop</div>
    </Card>
  </section>
</template>
<script>
import "agnostic-vue/dist/index.css";
import { Card } from "agnostic-vue";
export default {
  name: "CardExamples",
  components: { Card },
};
</script>
<style>
.animation-override:hover {
  /* animate down Y instead of up */
  transform: translateY(3px);
}
</style>
