import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CloseComponent } from './close.component';
import { AgModule } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/Close',
  component: CloseComponent,
  decorators: [
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

export const All = () => ({
  template: `<ag-close></ag-close>
  <ag-close size="small"></ag-close>
  <ag-close size="large"></ag-close>
  <ag-close size="xlarge"></ag-close>`
});