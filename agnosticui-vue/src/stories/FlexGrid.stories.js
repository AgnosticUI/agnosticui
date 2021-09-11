import FlexGrid from './FlexGrid/FlexGrid.vue';
import FlexGridTests from './FlexGridTests.vue';

export default {
  title: 'AG—Vue/FlexGrid',
  component: FlexGrid,
}

export const Grid = () => ({
  title: 'Grids',
  components: { FlexGridTests },
  template: '<flex-grid-tests />'
});
Grid.parameters = {
  docs: {
    source: {
      code: `
      /* TBD */
      `
    }
  }
}
