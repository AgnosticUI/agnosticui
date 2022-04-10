<script>
  import { Button, ButtonGroup } from "agnostic-svelte";
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Buttons 
  </div>
  <div class="mbe24 flex items-center">
    <Button css="mie8">Default</Button>
    <Button css="mie8" isRaised>Raised</Button>
    <Button isCircle>Circ</Button>
  </div>
  <div class="mbe24 flex items-center">
    <Button css="mie8" mode="primary">
      Primary</Button>
    <Button css="mie8" mode="primary" size="small">Small</Button>
  </div>
  <div class="mbe24 flex items-center">
    <Button css="mie8" mode="primary" size="large">Large</Button>
    <Button css="mie8" mode="primary" isRounded>Rounded</Button>
  </div>
  <div class="mbe24 flex items-center">
    <Button css="mie8" mode="secondary">Secondary</Button>
    <Button css="mie8" mode="secondary" isRounded>Secondary</Button>
  </div>
  <div class="mbe24 flex items-center">
    <Button css="mie8" mode="primary" isBordered>Bordered</Button>
    <Button mode="primary" isBlock>Block</Button>
  </div>
  <div class="mbe24 flex items-center">
    <Button css="mie8" mode="primary" isDisabled>Disabled</Button>
    <Button css="mie8" type="faux" mode="primary">Faux Button (div)</Button>
  </div>
  <div class="mbe24 flex items-center">
    <Button css="mie8" mode="primary" isBlank>Blank</Button>
    <Button css="mie8" mode="primary" isLink>Button Link</Button>
    <Button css="mie8" isSkinned={false}>Unskinned</Button>
  </div>
  <ButtonGroup css="mbe24" ariaLabel="Button group">
    <Button isGrouped>One</Button>
    <Button isGrouped>Two</Button>
    <Button isGrouped>Three</Button>
  </ButtonGroup>
  <ButtonGroup css="mbe24" ariaLabel="Button group">
    <Button isGrouped mode="primary">One</Button>
    <Button isGrouped mode="primary">Two</Button>
    <Button isGrouped mode="primary">Three</Button>
  </ButtonGroup>
</section>
