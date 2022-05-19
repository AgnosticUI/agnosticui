import TableCustomRenderComponent from "./TableCustomRenderComponent.svelte";
import Table from "./Table.svelte";
import FontDecorator from "../../storybook-helpers/FontDecorator.svelte";

export default {
  title: "AG—Svelte (Beta)/Table",
  decorators: [() => FontDecorator],
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

const defaultArgs = {
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
      label: "Name",
      key: "name",
      width: "25%",
      sortable: true,
    },
    {
      label: "Weapon",
      key: "weapon",
      width: "45%",
    },
    {
      label: "Grand Slams",
      key: "slams",
      width: "10%",
      sortable: true,
      // See https://svelte.dev/repl/74593f36569a4c268d8a6ab277db34b5?version=3.12.1
      // for how all this is wired together
      renderComponent: () => TableCustomRenderComponent,
    },
    {
      label: "Birthdate",
      key: "birthdate",
      width: "20%",
      sortable: true,
      sortFn: (a, b) => {
        // Naive date comparisons; but we're controlling data so ;-)
        const d1 = new Date(a).getTime() || -Infinity;
        const d2 = new Date(b).getTime() || -Infinity;
        if (d1 > d2) {
          return 1;
        }
        if (d1 < d2) {
          return -1;
        }
        return 0;
      },
    },
  ],
  caption: "Tennis Superstars (custom header widths)",
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Small = Template.bind({});
Small.args = { ...defaultArgs, tableSize: "small" };

export const Large = Template.bind({});
Large.args = { ...defaultArgs, tableSize: "large" };

export const XLarge = Template.bind({});
XLarge.args = { ...defaultArgs, tableSize: "xlarge" };

export const UppercaseHeaders = Template.bind({});
UppercaseHeaders.args = { ...defaultArgs, isUppercasedHeaders: true };

export const Bordered = Template.bind({});
Bordered.args = { ...defaultArgs, isBordered: true };

export const Borderless = Template.bind({});
Borderless.args = { ...defaultArgs, isBorderless: true };

export const Striped = Template.bind({});
Striped.args = { ...defaultArgs, isStriped: true };

export const Hoverable = Template.bind({});
Hoverable.args = { ...defaultArgs, isHoverable: true };

export const StripedHoverable = Template.bind({});
StripedHoverable.args = { ...defaultArgs, isHoverable: true, isStriped: true };

export const Stacked = Template.bind({});
Stacked.args = { ...defaultArgs, isStacked: true };

export const ResponsiveSmall = Template.bind({});
ResponsiveSmall.args = { ...defaultArgs, responsiveSize: "small" };

export const ResponsiveLarge = Template.bind({});
ResponsiveLarge.args = { ...defaultArgs, responsiveSize: "large" };

export const ResponsiveXLarge = Template.bind({});
ResponsiveXLarge.args = { ...defaultArgs, tableSize: "xlarge" };

export const CaptionTop = Template.bind({});
CaptionTop.args = { ...defaultArgs, captionPosition: "top" };

export const CaptionBottom = Template.bind({});
CaptionBottom.args = { ...defaultArgs, captionPosition: "bottom" };

export const CaptionEnd = Template.bind({});
CaptionEnd.args = { ...defaultArgs, captionPosition: "end" };

export const LimitFive = Template.bind({});
LimitFive.args = { ...defaultArgs, limit: 5 };

export const OffsetFive = Template.bind({});
OffsetFive.args = { ...defaultArgs, offset: 5 };

export const Offset2Limit3 = Template.bind({});
Offset2Limit3.args = { ...defaultArgs, offset: 2, limit: 3 };


// Promote keeping the length of headers and the row columns the same
// If you do not, and do not happen to set filterByKey true it will bomb out
const splicedHeaders = [...defaultArgs.headers];
splicedHeaders.splice(1, 1);
const splicedRows = [...defaultArgs.rows];
splicedRows.splice(1, 1);
export const KeyFilterNoWeapon = Template.bind({});
KeyFilterNoWeapon.args = {caption: "Filter by Key", rows: splicedRows, headers: splicedHeaders, filterByKey: true};
