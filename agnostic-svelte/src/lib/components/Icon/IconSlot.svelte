<script>
  import AvatarSampleSvg from "../Avatar/AvatarSampleSvg.svelte";
  import Icon from "./Icon.svelte";

</script>

<div class="flex flex-column">
  <h1>Icons</h1>
  <p class="mbs24 mbe24">
    The icon component is a light-weight bounding box around your SVG icon. You
    should be able to pass in any well constructored icon set, but here are a
    few examples using popular ones (material, octicons, an font awesome).
  </p>
  <p class="mbe16">
    If you&apos;d like to control the sizing via CSS classes, you&apos;ll
    possibly need to remove any hard-coded width and height presentation
    attributes from the original SVGs.
  </p>
</div>
<div class="flex-inline mbe16">
  <p class="mie12">Material</p>
  <Icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <g>
        <rect fill="none" height="24" width="24"></rect>
      </g>
      <g>
        <path
          d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h6v-6h2v6h6v-8h3L19,9.3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z"
        ></path>
        <path d="M10,10h4c0-1.1-0.9-2-2-2S10,8.9,10,10z"></path>
      </g>
    </svg>
  </Icon>
</div>

<div class="flex-inline mbe16">
  <p class="mis12 mie12">Font Awesome</p>
  <Icon>
    <!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path
        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
      ></path>
    </svg>
  </Icon>
</div>

<div class="flex-inline mbe16">
  <p class="mis12 mie12">Octicon</p>
  <Icon>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"
      ></path>
    </svg>
  </Icon>
</div>

<h2>Sizes</h2>
<div class="flex items-start justify-start">
  <Icon>
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{14}">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{16}">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{18}">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{20}">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{24}">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{32}">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{36}">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{40}">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{48}">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{56}">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{64}">
    <AvatarSampleSvg />
  </Icon>
</div>
<h2>Types</h2>
<div class="flex items-start justify-start">
  <Icon size="{24}" type="success">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{24}" type="info">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{24}" type="warning">
    <AvatarSampleSvg />
  </Icon>
  <Icon size="{24}" type="error">
    <AvatarSampleSvg />
  </Icon>
</div>
