<script setup lang="ts">
import Icon from "../../src/components/Icon.vue";
import IconExFontAwesome from "./IconExFontAwesome.vue";
import IconExMaterial from "./IconExMaterial.vue";
import IconExOcticon from "./IconExOcticon.vue";
</script>
<template>
  <section>
    <div class="flex">
      <div class="mie8">
        <Icon>
          <icon-ex-font-awesome />
        </Icon>
      </div>
      <div class="mie8">
        <Icon>
          <icon-ex-octicon />
        </Icon>
      </div>
      <div class="mie8">
        <Icon>
          <icon-ex-material />
        </Icon>
      </div>
    </div>
  </section>
  <section class="mbs24">
    <p>You can also pass <code>size</code> and <code>type</code></p>
    <div class="mbe16">
      <Icon
        :size="48"
        type="info"
      >
        <icon-ex-font-awesome />
      </Icon>
      <span class="mie8" />
      <Icon
        :size="48"
        type="success"
      >
        <icon-ex-font-awesome />
      </Icon>
      <span class="mie8" />
      <Icon
        :size="48"
        type="warning"
      >
        <icon-ex-font-awesome />
      </Icon>
      <span class="mie8" />
      <Icon
        :size="48"
        type="error"
      >
        <icon-ex-font-awesome />
      </Icon>
    </div>
  </section>
</template>
