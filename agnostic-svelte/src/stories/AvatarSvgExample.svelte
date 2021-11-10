<script>
  import Avatar from "./Avatar.svelte";
  import AvatarSampleSvg from "./AvatarSampleSvg.svelte";
</script>

<h1>Avatars with SVGs</h1>

<div class="flex items-center mbe16">
  <Avatar>
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Default</p>
</div>
<div class="flex items-center mbe16">
  <Avatar isTransparent>
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Transparent</p>
</div>
<div class="flex items-center mbe16">
  <Avatar isSquare>
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Square</p>
</div>
<div class="flex items-center mbe16">
  <Avatar isRounded>
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Rounded</p>
</div>
<div class="flex items-center mbe16">
  <Avatar type="success">
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Success</p>
</div>
<div class="flex items-center mbe16">
  <Avatar type="info">
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Info</p>
</div>
<div class="flex items-center mbe16">
  <Avatar type="warning">
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Warning</p>
</div>
<div class="flex items-center mbe16">
  <Avatar type="error">
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Error</p>
</div>
<div class="flex items-center mbe16">
  <Avatar type="error" isSquare>
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Error square</p>
</div>
<div class="flex items-center mbe16">
  <Avatar type="error" isRounded>
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Error rounded</p>
</div>
<div class="flex items-center mbe16">
  <Avatar type="error" isTransparent>
    <AvatarSampleSvg />
  </Avatar>
  <p class="mis12">Error transparent</p>
</div>
