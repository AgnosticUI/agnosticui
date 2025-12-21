<template>
  <section>
    <!-- Basic Effects -->
    <div class="mbe4">
      <h2>Hover Effects</h2>
      <p class="mbe2">These effects trigger on hover</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-md"
        title="Bounce"
        variant="primary"
        shape="rounded"
      >
        Bounce
      </VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-ease="spring-md"
        title="Pulse"
        variant="success"
        shape="rounded"
      >
        Pulse
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        fx-speed="lg"
        title="Jelly button"
        variant="warning"
        shape="rounded"
      >
        Jelly
      </VueButtonFx>
      <VueButtonFx
        fx="grow"
        fx-ease="spring-md"
        title="Grow button"
        variant="primary"
        shape="rounded"
      >
        Grow
      </VueButtonFx>
      <VueButtonFx
        fx="shrink"
        fx-ease="spring-md"
        title="Shrink button"
        variant="secondary"
        shape="rounded"
      >
        Shrink
      </VueButtonFx>
    </div>

    <!-- Click Effects -->
    <div class="mbe4">
      <h2>Click Effects</h2>
      <p class="mbe2">These effects trigger on click/active state</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="press-pop"
        fx-ease="spring-sm"
        title="Press Pop"
        variant="primary"
        shape="rounded"
      >
        Press Pop
      </VueButtonFx>
      <VueButtonFx
        fx="press-pop"
        variant="monochrome"
        title="Send the email"
        shape="rounded-square"
        size="lg"
      >
        <VueIcon no-fill>
          <Mail />
        </VueIcon>
        <VueVisuallyHidden>Send the email</VueVisuallyHidden>
      </VueButtonFx>
      <VueButtonFx
        fx="press-shadow"
        variant="warning"
        title="Press Shadow"
        shape="rounded"
      >
        Press Shadow
      </VueButtonFx>
      <VueButtonFx
        fx="press-shadow"
        variant="success"
        title="Press Shadow"
        shape="rounded"
      >
        Press Shadow
      </VueButtonFx>

      <VueButtonFx
        fx="press-shadow"
        variant="primary"
        title="Shopping cart button"
        shape="rounded-square"
        size="lg"
      >
        <VueIcon no-fill>
          <ShoppingCart />
        </VueIcon>
        <VueVisuallyHidden>Proceed to your cart.</VueVisuallyHidden>
      </VueButtonFx>

      <VueButtonFx
        fx="press-shadow"
        variant="danger"
        title="Dangerous action button"
        shape="rounded-square"
        size="lg"
      >
        <VueIcon no-fill>
          <Bomb />
        </VueIcon>
        <VueVisuallyHidden>Do the dangerous thing</VueVisuallyHidden>
      </VueButtonFx>
    </div>

    <!-- Background Effects -->
    <div class="mbe4">
      <h2>Background Effects</h2>
      <p class="mbe2">Effects that animate the button background</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bg-slide"
        fx-speed="md"
        fx-ease="ease-out"
        title="BG Slide"
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
      <h2>Motion Effects</h2>
      <p class="mbe2">Dynamic movement effects</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="wobble"
        fx-ease="spring-md"
        title="Wobble"
        variant="warning"
        shape="rounded"
      >
        Wobble
      </VueButtonFx>
      <VueButtonFx
        fx="shake"
        fx-speed="sm"
        title="Shake"
        variant="danger"
        shape="rounded"
      >
        Shake
      </VueButtonFx>
      <VueButtonFx
        fx="push"
        fx-ease="spring-sm"
        title="Push"
        variant="primary"
        shape="rounded"
      >
        Push
      </VueButtonFx>
    </div>

    <!-- Bordered Buttons -->
    <div class="mbe4">
      <h2>Bordered Buttons</h2>
      <p class="mbe2">Effects work with bordered button styles</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        fx-speed="lg"
        title="Primary Bordered"
        variant="primary"
        :bordered="true"
        shape="rounded"
      >
        Primary
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-speed="lg"
        fx-ease="spring-lg"
        title="Success Bordered"
        variant="success"
        :bordered="true"
        shape="capsule"
      >
        Capsule
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        fx-speed="lg"
        title="Monochrome Bordered"
        variant="monochrome"
        :bordered="true"
        shape="rounded-square"
      >
        <VueIcon no-fill>
          <Trash2 />
        </VueIcon>
        <VueVisuallyHidden>Toss it in the trash</VueVisuallyHidden>
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-speed="lg"
        fx-ease="spring-lg"
        title="Danger Bordered"
        variant="danger"
        :bordered="true"
        shape="rounded-square"
      >
        <VueIcon no-fill>
          <Database />
        </VueIcon>
        <VueVisuallyHidden>Write the SQL to the Database</VueVisuallyHidden>
      </VueButtonFx>

      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        fx-speed="lg"
        title="Warning Bordered"
        variant="warning"
        :bordered="true"
        shape="rounded-square"
      >
        <VueIcon no-fill>
          <Bomb />
        </VueIcon>
        <VueVisuallyHidden>Warning - you better be careful.</VueVisuallyHidden>
      </VueButtonFx>
    </div>

    <!-- Composite Effect -->
    <div class="mbe4">
      <h2>Composite Effect</h2>
      <p class="mbe2">Special multi-stage animation</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="pulse-wobble"
        fx-speed="xl"
        title="Pulse → Wobble"
        variant="primary"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>

      <VueButtonFx
        fx="pulse-wobble"
        fx-speed="xl"
        title="Pulse → Wobble"
        variant="success"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>
      <VueButtonFx
        fx="pulse-wobble"
        fx-speed="xl"
        title="Pulse → Wobble"
        variant="monochrome"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>
      <VueButtonFx
        fx="pulse-wobble"
        fx-speed="xl"
        title="Pulse → Wobble"
        variant="danger"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>
    </div>

    <!-- Speed Variations -->
    <div class="mbe4">
      <h2>Speed Variations</h2>
      <p class="mbe2">Control animation speed with the fxSpeed prop</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="pulse"
        fx-speed="xs"
        title="XS"
        variant="primary"
      >XS</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="sm"
        title="SM"
        variant="primary"
      >SM</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="md"
        title="MD"
        variant="primary"
      >MD</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="lg"
        title="LG"
        variant="primary"
      >LG</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="xl"
        title="XL"
        variant="primary"
      >XL</VueButtonFx>
    </div>

    <!-- Easing Functions -->
    <div class="mbe4">
      <h2>Easing Functions</h2>
      <p class="mbe2">Different easing functions create different animation feels</p>
      <VueAlert :bordered-left="true">
        Examples use <code>fx-speed="xl"</code> to make easing differences more visible.
        For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
      </VueAlert>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bounce"
        fx-ease="ease"
        fx-speed="xl"
        title="Ease"
        size="sm"
        variant="primary"
      >Ease</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="ease-in"
        fx-speed="xl"
        title="Ease-In"
        size="sm"
        variant="primary"
      >Ease-In</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="ease-out"
        fx-speed="xl"
        title="Ease-Out"
        size="sm"
        variant="primary"
      >Ease-Out</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="bounce"
        fx-speed="xl"
        title="Bounce"
        size="sm"
        variant="primary"
      >Bounce</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-sm"
        fx-speed="xl"
        title="Spring SM"
        size="sm"
        variant="primary"
      >Spring SM</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-md"
        fx-speed="xl"
        title="Spring MD"
        size="sm"
        variant="primary"
      >Spring MD</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-lg"
        fx-speed="xl"
        title="Spring SM"
        size="sm"
        variant="primary"
      >Spring LG</VueButtonFx>
    </div>

    <!-- Disabled State -->
    <div class="mbe4">
      <h2>Disabling Effects</h2>
      <p class="example-description">
        These buttons have <code>fx="bounce"</code> but <code>:fx-disabled="true"</code>
        prevents the animation from playing while keeping the buttons clickable
      </p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bounce"
        :fx-disabled="true"
        title="FX Disabled"
        variant="primary"
      >
        FX Disabled
      </VueButtonFx>
      <VueButtonFx
        fx="bounce"
        :fx-disabled="true"
        title="FX Disabled"
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
import { VueAlert } from "agnosticui-core/alert/vue";
import { VueVisuallyHidden } from "agnosticui-core/visually-hidden/vue";
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
    VueVisuallyHidden,
    VueAlert,
  },
});
</script>
