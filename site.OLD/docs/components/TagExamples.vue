<script>
// Import the required AgnosticUI global common and component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Tag } from "agnostic-vue";

export default {
  name: "TagExamples",
  components: {
    Tag,
  },
};
</script>
<template>
  <section>
    <Tag class="mie6">unknown</Tag>
    <Tag
      class="mie6"
      is-uppercase
    >
      UpperCasE
    </Tag>
    <Tag
      class="mie6"
      shape="round"
      is-uppercase
    >
      round
    </Tag>
    <Tag
      class="mie6"
      shape="pill"
    >
      pill badge
    </Tag>
    <Tag
      class="mie6"
      shape="circle"
      type="error"
    >
      2
    </Tag>
    <Tag
      class="mie6"
      type="success"
    >
      success
    </Tag>
    <Tag
      class="mie6"
      type="info"
    >
      info
    </Tag>
    <Tag
      class="mie6"
      type="warning"
    >
      warning
    </Tag>
  </section>
</template>
