<script>
  export let tabindex = 0;
</script>
<style>
  h2 {
    margin-block-start: 0;
  }

  .tab-panel {
    /* We already have margins on the heading */
    margin-block-start: 0;
    /* The rest gets some margins :) */
    margin-block-end: var(--fluid-24);
    margin-inline-start: var(--fluid-32);
    margin-inline-end: var(--fluid-32);
  }
</style>
<div id="panel-5" class="tab-panel" role="tabpanel" tabindex="{tabindex}">
  <h2>Tab Example 5</h2>
  <p>Not much to see on this tab :)</p>
  <p>
    Random
    <a href="www.yahoo.com">yahoo link 1</a>
    and random
    <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)
  </p>
</div>
