<template>
  <section>
    <!-- Basic Effects -->
    <div class="mbe4">
      <h3>Hover Effects</h3>
      <p class="mbe2">These effects trigger on hover</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-md"
        variant="primary"
        shape="rounded"
      >
        Bounce
      </VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-ease="spring-md"
        variant="success"
        shape="rounded"
      >
        Pulse
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        variant="warning"
        shape="rounded"
      >
        Jelly
      </VueButtonFx>
      <VueButtonFx
        fx="grow"
        fx-ease="spring-md"
        variant="primary"
        shape="rounded"
      >
        Grow
      </VueButtonFx>
      <VueButtonFx
        fx="shrink"
        fx-ease="spring-md"
        variant="secondary"
        shape="rounded"
      >
        Shrink
      </VueButtonFx>
    </div>

    <!-- Click Effects -->
    <div class="mbe4">
      <h3>Click Effects</h3>
      <p class="mbe2">These effects trigger on click/active state</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="press-pop"
        fx-ease="spring-sm"
        variant="primary"
        shape="rounded"
      >
        Press Pop
      </VueButtonFx>
      <VueButtonFx
        fx="press-pop"
        variant="monochrome"
        shape="rounded-square"
        :size="lg"
      >
        <VueIcon no-fill>
          <Mail />
        </VueIcon>
      </VueButtonFx>
      <VueButtonFx
        fx="press-shadow"
        variant="warning"
        shape="rounded"
      >
        Press Shadow
      </VueButtonFx>
      <VueButtonFx
        fx="press-shadow"
        variant="success"
        shape="rounded"
      >
        Press Shadow
      </VueButtonFx>

      <VueButtonFx
        fx="press-shadow"
        variant="primary"
        shape="rounded-square"
        :size="lg"
      >
        <VueIcon no-fill>
          <ShoppingCart />
        </VueIcon>
      </VueButtonFx>

      <VueButtonFx
        fx="press-shadow"
        variant="danger"
        shape="rounded-square"
        :size="lg"
      >
        <VueIcon no-fill>
          <Bomb />
        </VueIcon>
      </VueButtonFx>
    </div>

    <!-- Background Effects -->
    <div class="mbe4">
      <h3>Background Effects</h3>
      <p class="mbe2">Effects that animate the button background</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bg-slide"
        fx-speed="md"
        fx-ease="ease-out"
        variant="primary"
        shape="rounded"
      >
        BG Slide
      </VueButtonFx>
      <VueButtonFx
        fx="side-slide"
        fx-speed="md"
        fx-ease="ease-out"
        variant="success"
        shape="rounded"
      >
        Side Slide
      </VueButtonFx>
    </div>

    <!-- Motion Effects -->
    <div class="mbe4">
      <h3>Motion Effects</h3>
      <p class="mbe2">Dynamic movement effects</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="wobble"
        fx-ease="spring-md"
        variant="warning"
        shape="rounded"
      >
        Wobble
      </VueButtonFx>
      <VueButtonFx
        fx="shake"
        fx-speed="sm"
        variant="danger"
        shape="rounded"
      >
        Shake
      </VueButtonFx>
      <VueButtonFx
        fx="push"
        fx-ease="spring-sm"
        variant="primary"
        shape="rounded"
      >
        Push
      </VueButtonFx>
    </div>

    <!-- Bordered Buttons -->
    <div class="mbe4">
      <h3>Bordered Buttons</h3>
      <p class="mbe2">Effects work with bordered button styles</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        variant="primary"
        :bordered="true"
        shape="rounded"
      >
        Primary
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        variant="success"
        :bordered="true"
        shape="capsule"
      >
        Capsule
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        variant="monochrome"
        :bordered="true"
        shape="rounded-square"
      >
        <VueIcon no-fill>
          <Trash2 />
        </VueIcon>
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        variant="danger"
        :bordered="true"
        shape="rounded-square"
      >
        <VueIcon no-fill>
          <Database />
        </VueIcon>
      </VueButtonFx>

      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        variant="warning"
        :bordered="true"
        shape="rounded-square"
      >
        <VueIcon no-fill>
          <Bomb />
        </VueIcon>
      </VueButtonFx>
    </div>

    <!-- Composite Effect -->
    <div class="mbe4">
      <h3>Composite Effect</h3>
      <p class="mbe2">Special multi-stage animation</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="pulse-wobble"
        variant="primary"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>

      <VueButtonFx
        fx="pulse-wobble"
        variant="success"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>
      <VueButtonFx
        fx="pulse-wobble"
        variant="monochrome"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>
      <VueButtonFx
        fx="pulse-wobble"
        variant="danger"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>
    </div>

    <!-- Speed Variations -->
    <div class="mbe4">
      <h3>Speed Variations</h3>
      <p class="mbe2">Control animation speed with the fxSpeed prop</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="pulse"
        fx-speed="xs"
        variant="primary"
      >XS</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="sm"
        variant="primary"
      >SM</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="md"
        variant="primary"
      >MD</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="lg"
        variant="primary"
      >LG</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="xl"
        variant="primary"
      >XL</VueButtonFx>
    </div>

    <!-- Easing Functions -->
    <div class="mbe4">
      <h3>Easing Functions</h3>
      <p class="mbe2">Different easing functions create different animation feels</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bounce"
        fx-ease="ease"
        size="sm"
        variant="primary"
      >Ease</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="ease-in"
        size="sm"
        variant="primary"
      >Ease-In</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="ease-out"
        size="sm"
        variant="primary"
      >Ease-Out</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="bounce"
        size="sm"
        variant="primary"
      >Bounce</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-sm"
        size="sm"
        variant="primary"
      >Spring SM</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-md"
        size="sm"
        variant="primary"
      >Spring MD</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-lg"
        size="sm"
        variant="primary"
      >Spring LG</VueButtonFx>
    </div>

    <!-- Disabled State -->
    <div class="mbe4">
      <h3>FX Disabled</h3>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bounce"
        :fx-disabled="true"
        variant="primary"
      >
        FX Disabled
      </VueButtonFx>
      <VueButtonFx
        fx="bounce"
        :fx-disabled="true"
        variant="secondary"
      >
        FX Disabled
      </VueButtonFx>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueButtonFx } from "agnosticui-core/button-fx/vue";
import { VueIcon } from "agnosticui-core/icon/vue";
import { Mail, Trash2, ShoppingCart, Database, Bomb } from "lucide-vue-next";

export default defineComponent({
  name: "ButtonFxExamples",
  components: {
    Mail,
    Trash2,
    ShoppingCart,
    Bomb,
    Database,
    VueButtonFx,
    VueIcon,
  },
});
</script>
