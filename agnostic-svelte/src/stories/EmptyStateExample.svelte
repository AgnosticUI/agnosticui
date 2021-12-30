<script>
  import EmptyState from "./EmptyState.svelte";
  import Button from "./Button.svelte";
  export let title = "No connections yet";
  export let subtitle = "Click below to add some friends";
  export let btnCopy = "Invite friends";
  export let isRounded = false;
  export let isBordered = false;
</script>

<EmptyState isRounded="{isRounded}" isBordered="{isBordered}">
  <div slot="header">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#999"
      width="40"
      height="40"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
      ></path>
    </svg>
  </div>
  <div slot="body">
    <div class="h4">{title}</div>
    <p class="mbe16" style="color: var(--agnostic-gray-dark);">{subtitle}</p>
  </div>
  <div slot="footer">
    <Button mode="primary">{btnCopy}</Button>
  </div>
</EmptyState>
