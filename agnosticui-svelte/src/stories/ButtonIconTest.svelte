<script>
  import Button from "./Button.svelte";
</script>

<style>
  .btn-icon-left {
    margin-inline-end: 8px;
  }
  .btn-icon-right {
    margin-inline-start: 8px;
  }
</style>

<div style="display: inline-flex;">
  <Button isRounded={true} mode="primary">
    Download
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="btn-icon-right"
      role="img"
      viewBox="0 0 16 16"
      stroke-width="0"
      stroke="currentColor"
      fill="currentColor"
      data-custom-icon="true"
      focusable="false"
      aria-hidden="true"
      height="14px"
      width="14px"
      version="1.1">
      <desc>Download icon graphic</desc>
      <path d="M14 11v2h-12v-2h-2v4h16v-4zM12 6h-3v-5h-2v5h-3l4 6z" />
    </svg>
  </Button>

  <Button isRounded={true} mode="primary">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="btn-icon-left"
      role="img"
      viewBox="0 0 16 16"
      stroke-width="0"
      stroke="currentColor"
      fill="currentColor"
      data-custom-icon="true"
      focusable="false"
      aria-hidden="true"
      height="14px"
      width="14px"
      version="1.1">
      <desc>Phone icon graphic</desc>
      <path
        d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z" />
    </svg>
    Call
  </Button>
</div>
