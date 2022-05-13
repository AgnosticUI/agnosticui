<script lang="ts">
import Progress from "./Progress.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Progress" component="{Progress}" />
<Template let:args>
  <Progress {...args} />
</Template>

<Story name="ProgressTest" args="{{
  value: 30,
  max: 100,
}}" />

<Story name="ProgressCSS" args="{{
  value: 30,
  max: 100,
  css: "foo-bar-baz",
}}" />
