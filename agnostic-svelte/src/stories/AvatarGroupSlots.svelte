<script>
  import Avatar from "./Avatar.svelte";
  import AvatarGroup from "./AvatarGroup.svelte";
</script>

<style>
  div {
    margin-block-end: 1rem;
  }
</style>

<div>
  <AvatarGroup>
    <Avatar text="AB" />
    <Avatar text="CD" />
    <Avatar text="XY" />
  </AvatarGroup>
</div>

<div>
  <AvatarGroup>
    <Avatar text="S" type="success" />
    <Avatar text="E" type="error" />
    <Avatar text="W" type="warning" />
    <Avatar text="I" type="info" />
  </AvatarGroup>
</div>
