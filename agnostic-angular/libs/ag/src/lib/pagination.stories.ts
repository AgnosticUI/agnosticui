import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/angular/types-6-0';
import {
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';

import { NavigationLabels, PaginationComponent } from './pagination.component';
import { usePagination } from 'agnostic-helpers/dist/index.esm';
import { AgModule } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/Pagination',
  component: PaginationComponent,
  decorators: [
    // Cannot get preview.js or global decorator solutions to work.
    // https://storybook.js.org/tutorials/intro-to-storybook/angular/en/composite-component/
    componentWrapperDecorator(
      (story) =>
        `<div style="font-family: var(--agnostic-font-family-body); line-height: 1.4; font-size: var(--agnostic-body);">${story}</div>`
    ),
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

const actions = {
  onPageChanged: action('onPageChanged'),
};

const navLabels: NavigationLabels = {
  previous: 'Previa',
  next: 'Siguiente',
  first: 'Primera',
  last: 'Última',
};

const paging = usePagination({ offset: 2 });
export const All = () => ({
  props: {
    propInput: {
      onPageChanged: actions.onPageChanged,
    },
    pages: paging.generate(1, 20),
    page: 1,
  },
  template: `<ag-pagination (onPageChange)="propInput.onPageChanged" [current]="page" [pages]="pages" attr.aria-label="pagination example"></ag-pagination>`,
});
