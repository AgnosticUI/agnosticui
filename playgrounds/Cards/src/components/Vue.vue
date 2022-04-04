<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Cards
    </div>
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
      isBorder
      isRounded
    >
      <div class="p16">Rounded with border</div>
      <div class="p16">Card</div>
    </Card>
    <div class="mbe24" />
    <Card
      isStacked
      isBorder
    >
      <div class="p16">Stacked (direction column)</div>
      <div class="p16">Card</div>
    </Card>
    <div class="mbe24" />
    <Card
      is-stacked
      is-shadow
    >
      <div class="p16">
        Stacked with shadow
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
        Animated, stacked, with shadow
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
      type="success"
      is-stacked
      is-rounded
    >
      <div class="p16">
        Success rounded
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
    <div class="mbe24" />
    <Card :isSkinned="false">
      <div class="p16">Base Card</div>
      <div class="p16">No Skin</div>
    </Card>
    <div class="mbe24" />
    <Card css="foo-bar">
      <div class="p16">Custom CSS Class</div>
      <div class="p16">Inspect to see the class: foo-bar</div>
    </Card>
  </section>
</template>

<script setup>
import { ref, onMounted, useCssModule } from "vue";
// Components CSS
import "agnostic-vue/dist/index.css";
import { Card } from "agnostic-vue";
</script>
