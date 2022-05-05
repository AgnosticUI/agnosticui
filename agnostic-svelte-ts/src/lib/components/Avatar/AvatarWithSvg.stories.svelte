<script lang="ts">
import AvatarSvgExample from "./AvatarSvgExample.svelte";
import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Avatar with SVG" component="{AvatarSvgExample}" />

<Template let:args>
  <AvatarSvgExample {...args} />
</Template>

<Story name="Examples" />
