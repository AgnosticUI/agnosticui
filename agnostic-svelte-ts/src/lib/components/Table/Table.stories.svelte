<script lang="ts">
  import Table from "./Table.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  </script>
  <Meta title="AG—Svelte (Beta)/Table" component="{Table}" />
  
  <Template let:args>
    <Table
      {...args}
    />
  </Template>
  <Story name="Default" args="{{}}" />

  <!--   
  <Story name="Small" args="{{
    size: "small"
  }}" />
  
  <Story name="Large" args="{{
    size: "large"
  }}" />
  
  <Story name="XLarge" args="{{
    size: "xlarge"
  }}" />
   -->
