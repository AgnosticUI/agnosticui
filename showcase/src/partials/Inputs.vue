<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h2 id="inputcomponent">Inputs</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h3>TODO -- some sort of inputs blurb</h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p>something else here too :)</p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h4>Core Inputs</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <Input
              uniqueId="myUniqueId"
              label="Default input"
              value="This is a generic input with a predefined value :)"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre
            v-highlightjs
          ><code class="html">&lt;Input uniqueId=&quot;myUniqueId&quot; label=&quot;Default input&quot; value=&quot;This is a generic input with a predefined value :)&quot; /&gt;</code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
  </section>
</template>
<script>
import Input from "agnosticui/Input.vue";
// import InputAddonItem from "agnosticui/InputAddonItem.vue";
import FlexGrid from "agnosticui/FlexGrid/FlexGrid";
import FlexRow from "agnosticui/FlexGrid/FlexRow";
import FlexCol from "agnosticui/FlexGrid/FlexCol";

export default {
  name: "Inputs",
  components: {
    Input,
    // InputAddonItem,
    FlexCol,
    FlexGrid,
    FlexRow,
  },
};
</script>

<style module>
.component {
  composes: component from "./partials.module.css";
}
.hotips {
  composes: hotips from "./partials.module.css";
}
.tipcontent {
  composes: tipcontent from "./partials.module.css";
}
.tip {
  composes: tip from "./partials.module.css";
}
/* .iconLeft {
  margin-right: 8px;
  width: 14px;
  height: 14px;
}
.iconRight {
  margin-left: 8px;
  width: 14px;
  height: 14px;
} */
</style>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
/* 
Button {
  margin-right: var(--Space-8);
  margin-bottom: var(--Space-12);
} */
</style>
