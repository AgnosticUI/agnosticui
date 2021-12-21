import TableCustomRenderComponent from "./TableCustomRenderComponent.svelte";
import Table from "./Table.svelte";

export default {
  title: "AG—Svelte (Beta)/Table",
};

const Template = ({ ...args }) => ({
  Component: Table,
  props: args,
});

const createRow = (name, weapon, slams, birthdate) => ({
  name,
  weapon,
  slams,
  birthdate,
});

export const Default = Template.bind({});
Default.args = {
  rows: [
    createRow("Roger Federer", "Forehand and serve", 20, "August 8, 1981"),
    createRow(
      "Andre Agassi",
      "Return of serve. Groundstrokes",
      8,
      "April 29, 1970"
    ),
    createRow("Steffi Graf", "Forehand", 22, "June 14, 1969"),
    createRow(
      "Martina Navratilova",
      "Serve and volley",
      18,
      "October 18, 1956"
    ),
    createRow("Rafael Nadal", "Backhand and speed", 20, "June 3, 1986"),
    createRow(
      "Althea Gibson",
      "Speed, strength, and fluidity ",
      11,
      "August 25, 1927"
    ),
    createRow("Novak Djokovic", "Backhand and speed", 20, "May 22, 1987"),
    createRow("Arthur Ashe", "Serve and volley", 3, "July 10, 1943"),
  ],
  headers: [
    {
      label: 'Name',
      key: 'name',
      width: '25%',
      sortable: true,
    },
    {
      label: 'Weapon',
      key: 'weapon',
      width: '45%',
    },
    {
      label: 'Grand Slams',
      key: 'slams',
      width: '10%',
      sortable: true,
      // See https://svelte.dev/repl/74593f36569a4c268d8a6ab277db34b5?version=3.12.1
      // for how all this is wired together
      renderComponent: () => TableCustomRenderComponent
    },
    {
      label: "Birthdate",
      key: "birthdate",
      sortable: true,
      width: '20%',
    },
  ],
  caption: "Tennis Superstars (custom header widths)",
  captionPosition: "top",
};
