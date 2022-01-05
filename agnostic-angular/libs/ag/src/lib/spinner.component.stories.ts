import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';
import { AgModule } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/Spinner',
  component: SpinnerComponent,
  decorators: [
    // Cannot get preview.js or global decorator solutions to work.
    // https://storybook.js.org/tutorials/intro-to-storybook/angular/en/composite-component/
    componentWrapperDecorator(
      (story) =>
        `<div class="mbe24" style="font-family: var(--agnostic-font-family-body); line-height: 1.4; font-size: var(--agnostic-body);">${story}</div>`
    ),
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

export const Default = () => ({
  template: `<ag-spinner></ag-spinner>`
});

export const Small = () => ({
  template: `<ag-spinner size="small"></ag-spinner>`
});

export const Large = () => ({
  template: `<ag-spinner size="large"></ag-spinner>`
});

export const XLarge = () => ({
  template: `<ag-spinner size="xlarge"></ag-spinner>`
});
