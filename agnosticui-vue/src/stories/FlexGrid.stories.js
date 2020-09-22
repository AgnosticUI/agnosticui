import FlexGrid from './FlexGrid/FlexGrid.vue';
import FlexGridTests from './FlexGridTests.vue';
// import FlexRow from './FlexGrid/FlexRow.js'
// import FlexCol from './FlexGrid/FlexCol.js'
// import styles from './FlexGrid/FlexGridExample.module.css'
// const Field = ({ label = "Field" }) => <p className={styles.Field}>{label}</p>

/*
import AgnosticHeader from "./Header.vue";
import AgnosticHeaderNav from "./HeaderNav.vue";

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AgnosticHeader, AgnosticHeaderNav },
  template: '<agnostic-header v-bind="$props"><template v-slot:logoleft><a href="#">Logo on Left</a></template><template v-slot:headernav><agnostic-header-nav><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li></ul></agnostic-header-nav></template><template v-slot:logoright><a href="#">Logo on Right</a></template></agnostic-header>'
});

*/
export default {
  title: 'FlexGrid',
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