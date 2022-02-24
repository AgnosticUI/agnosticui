import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ToastsComponent } from './toasts.component';
import { AgModule } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/Toasts',
  component: ToastsComponent,
  decorators: [
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

export const All = () => ({
  template: `<ag-toasts horizontalPosition="end" verticalPosition="top">abc 123</ag-toasts>`
});
