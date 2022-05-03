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
<div id="panel-svelte-1" class="tab-panel" role="tabpanel" tabindex="{tabindex}">
  <h2>Tab Example 1</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat
    recusandae est! Nesciunt consectetur, fuga voluptatem accusantium iste
    molestias aliquid!
  </p>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
    deleniti natus temporibus eius quam. Id ullam quaerat itaque dicta rem,
    molestiae adipisci corrupti blanditiis sunt eveniet. Vero illo labore
    eligendi? Nobis molestiae facere maxime repudiandae nemo veritatis quae
    earum velit.
  </p>
  <p>
    Random
    <a href="www.yahoo.com">yahoo link 1</a>
    and random
    <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)
  </p>
</div>
