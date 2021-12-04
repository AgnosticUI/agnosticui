import { AgModule, AlertComponent } from 'agnostic-angular';
import {
  moduleMetadata,
  componentWrapperDecorator,
  Meta,
} from '@storybook/angular';

export default {
  title: 'AG—Angular (Beta)/Alert',
  component: AlertComponent,
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

const message = 'Alerts should be used for timely information.';

export const Default = () => ({
  template: `<div class="mbe16">
    <ag-alert>${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded="true">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll="true">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll="true">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft="true">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderRight="true">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderTop="true">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderBottom="true">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd="true">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd="true" isBorderRight="true">${message}</ag-alert>
  </div>
  `,
});

export const Warning = () => ({
  template: `<div class="mbe16">
    <ag-alert type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded="true" type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll="true" type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll="true" type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft="true" type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderRight="true" type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderTop="true" type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderBottom="true" type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd="true" type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd="true" isBorderRight="true" type="warning">${message}</ag-alert>
  </div>
  `,
});

export const Success = () => ({
  template: `<div class="mbe16">
    <ag-alert type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded="true" type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll="true" type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll="true" type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft="true" type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderRight="true" type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderTop="true" type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderBottom="true" type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd="true" type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd="true" isBorderRight="true" type="success">${message}</ag-alert>
  </div>
  `,
});

export const Info = () => ({
  template: `<div class="mbe16">
    <ag-alert type="info">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded="true" type="info">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll="true" type="info">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll="true" type="info">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft="true" type="info">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderRight="true" type="info">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderTop="true" type="info">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderBottom="true" type="info">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd="true" type="info">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd="true" isBorderRight="true" type="info">${message}</ag-alert>
  </div>
  `,
});

export const Error = () => ({
  template: `<div class="mbe16">
    <ag-alert type="error">yo</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded="true" type="error">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll="true" type="error">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll="true" type="error">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft="true" type="error">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderRight="true" type="error">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderTop="true" type="error">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderBottom="true" type="error">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd="true" type="error">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd="true" isBorderRight="true" type="error">${message}</ag-alert>
  </div>
  `,
});
