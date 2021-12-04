import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { TagComponent } from './tag.component';
import { AgModule } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/Tag',
  component: TagComponent,
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

export const All = () => ({
  template: `
  <div class="flex-inline mie8">
    <ag-tag>unknown</ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag isUppercase="true">upper</ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag shape="round">rounded</ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag shape="pill">pill badge</ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag shape="pill" type="success">success</ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag shape="circle" type="error">2</ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag type="warning">careful</ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag type="warning" isUppercase="true">careful</ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag type="info" isUppercase="true">saved</ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag type="info" shape="pill" isUppercase="true">saved</ag-tag>
  </div>

  <div class="flex-inline mie8">
    <ag-tag type="info" shape="pill" isUppercase="true">saved<ag-close size="small"></ag-close></ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag type="error" shape="round" isUppercase="true">error<ag-close size="small"></ag-close></ag-tag>
  </div>
  <div class="flex-inline mie8">
    <ag-tag type="warning" isUppercase="true">sure?<ag-close size="small"></ag-close></ag-tag>
  </div>
  `,
});
