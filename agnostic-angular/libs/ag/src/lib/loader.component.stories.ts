import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { LoaderComponent } from './loader.component';
import { AgModule } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/Loader',
  component: LoaderComponent,
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
  template: `<ag-loader></ag-loader>`
});

export const Small = () => ({
  template: `<ag-loader size="small"></ag-loader>`
});

export const Large = () => ({
  template: `<ag-loader size="large"></ag-loader>`
});
