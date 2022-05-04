<script>
import Avatar from "./Avatar.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="AG—Svelte (Beta)/Avatar" component="{Avatar}" />

<Template let:args>
  <Avatar {...args} />
</Template>

<Story name="Default" args="{{
  text: 'AB'
}}" />

<Story name="Warning" args="{{
  text: 'AB',
  type: 'warning'
}}" />

<Story name="Info" args="{{
  text: 'AB',
  type: 'info'
}}" />

<Story name="Success" args="{{
  text: 'AB',
  type: 'success'
}}" />

<Story name="Error" args="{{
  text: 'AB',
  type: 'error'
}}" />

<Story name="Small" args="{{
  size: 'small',
  text: 'AB',
  type: 'error',
}}" />

<Story name="Large" args="{{
  size: 'large',
  text: 'AB',
  type: 'error',
}}" />

<Story name="XLarge" args="{{
  size: 'xlarge',
  text: 'AB',
  type: 'error',
}}" />

<Story name="ImageUrl" args="{{
  imgUrl: "https://joeschmoe.io/api/v1/random",
}}" />

<Story name="ImageWithTransparentBackground" args="{{
  imgUrl: "https://joeschmoe.io/api/v1/random",
  isTransparent: true,
}}" />

<Story name="ImageSquare" args="{{
  imgUrl: "https://joeschmoe.io/api/v1/random",
  isSquare: true,
}}" />

<Story name="ImageRoundedCorners" args="{{
  imgUrl: "https://joeschmoe.io/api/v1/random",
  isRounded: true,
}}" />
