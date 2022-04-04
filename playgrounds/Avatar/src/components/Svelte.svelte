<script>
  import { Avatar, AvatarGroup } from "agnostic-svelte";
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Avatars
  </div>
  <div style="color: var(--agnostic-dark)">
    <Avatar text="RL" size="small" />
    <Avatar text="AB" />
    <Avatar text="RL" size="large" />
    <Avatar text="RL" size="xlarge" />
  </div>
  <div class="mbs12 mbe16">
    <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
    <Avatar isTransparent imgUrl="https://joeschmoe.io/api/v1/random" />
    <Avatar type="success" imgUrl="https://joeschmoe.io/api/v1/random" />
    <Avatar type="info" imgUrl="https://joeschmoe.io/api/v1/random" />
  </div>
  <div class="mbs12 mbe16">
    <span class="mie6">
      <Avatar type="success" text="S" />
    </span>
    <span class="mie6">
      <Avatar type="info" text="I" />
    </span>
    <span class="mie6">
      <Avatar type="warning" text="W" />
    </span>
    <span class="mie6">
      <Avatar type="error" text="E" />
    </span>
  </div>
  <div class="mbe16">
    <!-- SVG icon slot -->
    <Avatar type="info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
        />
      </svg>
    </Avatar>
  </div>
  <div
    style="color: var(--agnostic-dark)"
    class="mbe16"
  >
    <AvatarGroup>
      <Avatar text="AB"></Avatar>
      <Avatar text="CD"></Avatar>
      <Avatar text="WX"></Avatar>
      <Avatar text="YZ"></Avatar>
    </AvatarGroup>
  </div>
  <div class="mbe16">
    <AvatarGroup>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
    </AvatarGroup>
  </div>
</section>
