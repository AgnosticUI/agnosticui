<script lang="ts">
  import DividerVerticalExample from "./DividerVerticalExample.svelte";
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  </script>
  
  <Meta title="AG—Svelte (Beta)/Divider" components="{DividerVerticalExample}" />
  
  <Template let:args>
    <DividerVerticalExample {...args} />
  </Template>
  
  <Story name="Vertical" args="{{}}" />
  
  <Story name="VerticalSmall" args="{{
    size: "small"
  }}" />
  
  <Story name="VerticalLarge" args="{{
    size: "large"
  }}" />
  
  <Story name="VerticalXLarge" args="{{
    size: "xlarge"
  }}" />
  
  <Story name="VerticalSuccess" args="{{
    size: "success"
  }}" />

  <Story name="VerticalInfo" args="{{
    size: "info"
  }}" />
  
  <Story name="VerticalWarning" args="{{
    size: "warning"
  }}" />

  <Story name="VerticalError" args="{{
    size: "error"
  }}" />
