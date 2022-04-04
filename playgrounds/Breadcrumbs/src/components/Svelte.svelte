<script>
  import { Breadcrumb } from "agnostic-svelte";
  const trailOfTennisRoutes = [
    {
      label: "Tennis",
      url: "#tennis",
    },
    {
      label: "Superstars",
      url: "#tennis-superstars",
    },
    {
      label: "Serena Williams",
      url: "#tennis-superstars-serena",
    },
  ];
</script>
<section class="mbe40">
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Avatars
  </div>
  <Breadcrumb routes={ trailOfTennisRoutes } />
  <div class="mbe16" />
  <Breadcrumb
    type="slash"
    routes={ trailOfTennisRoutes }
  />
  <div class="mbe16" />
  <Breadcrumb
    type="bullet"
    routes={ trailOfTennisRoutes }
  />
  <div class="mbe16" />
  <Breadcrumb
    type="arrow"
    routes={ trailOfTennisRoutes }
  />
  <div class="mbe16" />
  <Breadcrumb routes={[{ label: 'A single route looks "link-less"' }]} />
  <div class="mbe16" />
  <Breadcrumb routes={[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]} /> 
</section>

