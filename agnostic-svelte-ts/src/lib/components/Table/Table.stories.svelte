<script lang="ts">
	import Table from './Table.svelte';
	import TableCustomRenderComponent from './TableCustomRenderComponent.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	const createRow = (name, weapon, slams, birthdate) => ({
		name,
		weapon,
		slams,
		birthdate
	});

	const defaultArgs = {
		rows: [
			createRow('Roger Federer', 'Forehand and serve', 20, 'August 8, 1981'),
			createRow(
				'Andre Agassi',
				'Return of serve. Groundstrokes',
				8,
				'April 29, 1970'
			),
			createRow('Steffi Graf', 'Forehand', 22, 'June 14, 1969'),
			createRow(
				'Martina Navratilova',
				'Serve and volley',
				18,
				'October 18, 1956'
			),
			createRow('Rafael Nadal', 'Backhand and speed', 20, 'June 3, 1986'),
			createRow(
				'Althea Gibson',
				'Speed, strength, and fluidity ',
				11,
				'August 25, 1927'
			),
			createRow('Novak Djokovic', 'Backhand and speed', 20, 'May 22, 1987'),
			createRow('Arthur Ashe', 'Serve and volley', 3, 'July 10, 1943')
		],
		headers: [
			{
				label: 'Name',
				key: 'name',
				width: '25%',
				sortable: true
			},
			{
				label: 'Weapon',
				key: 'weapon',
				width: '45%'
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
				label: 'Birthdate',
				key: 'birthdate',
				width: '20%',
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
				}
			}
		],
		caption: 'Tennis Superstars (custom header widths)'
	};

  // For the KeyFilterNoWeapon example
  // Promote keeping the length of headers and the row columns the same
  // If you do not, and do not happen to set filterByKey true it will bomb out
  const splicedHeaders = [...defaultArgs.headers];
  splicedHeaders.splice(1, 1);
  const splicedRows = [...defaultArgs.rows];
  splicedRows.splice(1, 1);
</script>

<Meta title="AG—Svelte (Beta)/Table" component="{Table}" />

<Template let:args>
	<Table { ...args } />
</Template>

<Story name="Default" args="{{ ...defaultArgs }}" />

<Story name="Small" args="{{
  ...defaultArgs,
  tableSize: "small"
}}" />
<Story name="Large" args="{{
  ...defaultArgs,
  tableSize: "large"
}}" />

<Story name="XLarge" args="{{
  ...defaultArgs,
  tableSize: "xlarge"
}}" />

<Story name="UppercaseHeaders" args="{{
  ...defaultArgs,
  isUppercasedHeaders: true
}}" />

<Story name="Bordered" args="{{
  ...defaultArgs,
  isBordered: true
}}" />

<Story name="Borderless" args="{{
  ...defaultArgs,
  isBorderless: true
}}" />

<Story name="Striped" args="{{
  ...defaultArgs,
  isStriped: true
}}" />

<Story name="Hoverable" args="{{
  ...defaultArgs,
  isHoverable: true
}}" />

<Story name="StripedHoverable" args="{{
  ...defaultArgs,
  isHoverable: true,
  isStriped: true
}}" />

<Story name="Stacked" args="{{
  ...defaultArgs,
  isStacked: true
}}" />

<Story name="ResponsiveSmall" args="{{
  ...defaultArgs,
  responsiveSize: "small"
}}" />

<Story name="ResponsiveLarge" args="{{
  ...defaultArgs,
  responsiveSize: "large"
}}" />

<Story name="ResponsiveXLarge" args="{{
  ...defaultArgs,
  responsiveSize: "xlarge"
}}" />

<Story name="CaptionTop" args="{{
  ...defaultArgs,
  captionPosition: "top"
}}" />

<Story name="CaptionBottom" args="{{
  ...defaultArgs,
  captionPosition: "bottom"
}}" />

<Story name="CaptionEnd" args="{{
  ...defaultArgs,
  captionPosition: "end"
}}" />

<Story name="LimitFive" args="{{
  ...defaultArgs,
  limit: 5
}}" />

<Story name="OffsetFive" args="{{
  ...defaultArgs,
  offset: 5
}}" />

<Story name="Offset2Limit3" args="{{
  ...defaultArgs,
  offset: 2,
  limit: 3
}}" />

<Story name="KeyFilterNoWeapon" args="{{
  ...defaultArgs,
  captionPosition: "top",
  caption: "Filter by Key Example. Note: please keep length of headers and the row columns the same. If you do not, and do not happen to set filterByKey true it will bomb out ;-)",
  rows: splicedRows,
  headers: splicedHeaders,
  filterByKey: true
}}" />
