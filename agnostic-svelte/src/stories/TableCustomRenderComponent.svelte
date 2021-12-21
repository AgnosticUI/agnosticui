<script>
  /**
   * This is just an example that is used within the `renderComponent` in ./Table.stories.js
   * `headers` like: { renderComponent: () => TableCustomRenderComponent },
   * 
   * Also, it would have been nice to be able to generate this component "inline" but it seems
   * there's an RFC for a long time but hasn't materialized:
   * https://github.com/sveltejs/rfcs/blob/inline-components/text/0000-inline-components.md
   */
  export let cellValue;
</script>
<td>{cellValue}<span class="mis6">🏆</span></td>
