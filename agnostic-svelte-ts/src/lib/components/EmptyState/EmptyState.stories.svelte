<script lang="ts">
  import EmptyStateExample from "./EmptyStateExample.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/EmptyState" component="{EmptyStateExample}" />
<Template let:args>
  <EmptyStateExample {...args} />
</Template> 

<Story name="Default" args="{{}}" />

<Story name="Rounded" args="{{
  isRounded: true,
}}" />

<Story name="Bordered" args="{{
  isBordered: true,
}}" />

<Story name="RoundedAndBordered" args="{{
  isRounded: true,
  isBordered: true,
}}" />
