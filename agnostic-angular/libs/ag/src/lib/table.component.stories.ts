import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { TableComponent } from './table.component';
import { AgModule } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/Table',
  component: TableComponent,
  decorators: [
    // Cannot get preview.js or global decorator solutions to work.
    // https://storybook.js.org/tutorials/intro-to-storybook/angular/en/composite-component/
    componentWrapperDecorator(
      (story) =>
        `<div style="font-family: var(--agnostic-font-family-body)">${story}</div>`
    ),
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

const createRow = (
  name: string,
  weapon: string,
  slams: number,
  birthdate: string
) => ({ name, weapon, slams, birthdate });

export const AllVariants: Story<TableComponent> = (args: TableComponent) => ({
  props: {
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
        width: '13%',
        sortable: true,
      },
      {
        label: 'Birthdate',
        key: 'birthdate',
        width: '17%',
        sortable: true,
        sortFn: (a: string, b: string) => {
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
    rows: [
      createRow(
        'Serena Williams',
        "Biggest serve in women's tennis all-time",
        23,
        'September 26, 1981'
      ),
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
      createRow('Arthur Ashe', 'Serve and volley', 3, 'July 10, 1943'),
    ],
  },
  template: `<section class="mbe16">
    <h2>Default table</h2>
    <ag-table [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <div class="mbe16"></div>
    <ag-table [headers]="headers" [rows]="rows" caption="Tennis Superstars (with captionPosition set to 'top')" captionPosition="top"></ag-table>
    <div class="mbe16"></div>
    <ag-table [headers]="headers" [rows]="rows" caption="Tennis Superstars (with captionPosition set to 'bottom')" captionPosition="bottom"></ag-table>
    <div class="mbe16"></div>
    <ag-table [headers]="headers" [rows]="rows" caption="Tennis Superstars (with captionPosition set to 'end')" captionPosition="end"></ag-table>
    <h2 class="mbs16">Sizes</h2>
    <p class="mbs8">Note that there is no <code>medium</code> as it is implied when no <code>tableSize</code> is provided.</p>
    <div class="mbe16"></div>
    <ag-table tableSize="small" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <ag-table tableSize="large" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <ag-table tableSize="xlarge" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <div class="mbe16"></div>
    <h3>Uppercase header tables</h3>
    <ag-table [isUppercasedHeaders]="true" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <div class="mbe16"></div>
    <h3 class="mbe16">Borders</h3>
    <ag-table [isBordered]="true" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <div class="mbe16"></div>
    <h3>Borderless</h3>
    <ag-table [isBorderless]="true" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <div class="mbe16"></div>
    <h3>Striped</h3>
    <ag-table [isStriped]="true" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <div class="mbe16"></div>
    <h3>Hoverable</h3>
    <ag-table [isHoverable]="true" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <div class="mbe16"></div>
    <h3>Striped & Hoverable</h3>
    <ag-table [isStriped]="true" [isHoverable]="true" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <div class="mbe16"></div>
    <h3>Stacked</h3>
    <ag-table [isStacked]="true" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <div class="mbe16"></div>
    <h2 class="mbs16">Responsive horizontal scrolling (resize viewport)</h2>
    <p class="mbs16">Tables are wrapped in a responsive container by default which allows them to be scrolled horizontally when needed.
    If you'd like to pick a maximum breakpoint where horizontal scrolling is no longer enabled, you can use the sizes below:</p>
    <h3>Small</h3>
    <ag-table responsiveSize="small" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <h3>Medium</h3>
    <ag-table responsiveSize="medium" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <h3>Large</h3>
    <ag-table responsiveSize="large" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    <h3>XLarge</h3>
    <ag-table responsiveSize="xlarge" [headers]="headers" [rows]="rows" caption="Tennis Superstars"></ag-table>
    </section>`
});

/**
 * Angular favors content projection via ngTemplateOutlet (as opposed to React's render props, or
 * Vue's v-html / slots, or Svelte's svelte:component). To achieve this we can use the `rowRenderTemplate`
 * Input which points to an ng-template which the table component will check for and use if exists.
 */
export const CustomizedCellRendering: Story<TableComponent> = (args: TableComponent) => ({
  props: {
    headers: [
      {
        label: 'Name',
        key: 'name',
        width: '25%',
        sortable: true,
      },
      {
        label: 'Grand Slams',
        key: 'slams',
        width: '13%',
        sortable: true,
      },
    ],
    rows: [
      {
        name: 'Serena Williams',
        slams: 23,
      }, {
        name: 'Roger Federer',
        slams: 20,
      }, {
        name: 'Althea Gibson',
        slams: 11,
      }, {
        name: 'Andre Agassi',
        slams: 8,
      }
    ],
  },
  template: `<ag-table [headers]="headers" [rows]="rows" [rowRenderTemplate]="rowRenderTemplate" caption="Tennis Superstars">
    <ng-template #rowRenderTemplate let-row let-idx="index">
      <div *ngIf="idx === 1; else simple">{{row}}<span class="mis6">🏆</span></div>
      <ng-template #simple>
        {{row}}
      </ng-template>
    </ng-template>
  </ag-table>
  <p class="mbs40">In this example, we're using an <code>ng-template</code> with <code>#rowRenderTemplate</code> passed in via
  the same named <code>rowRenderTemplate</code> input prop. This allows us to customize how we render the table row cells. Use
  this when you need to project customized content. See the exact template code used <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/table.component.stories.ts#L140" target="_blank">on GitHub</a>.</p>`,
});
