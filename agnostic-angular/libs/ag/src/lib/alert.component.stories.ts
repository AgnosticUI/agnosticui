import { AgModule, AlertComponent } from 'agnostic-angular';
import { IconExampleModule } from './iconexample.module';
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
        `<div style="font-family: var(--agnostic-font-family-body); line-height: 1.4; font-size: var(--agnostic-body);">${story}</div>`
    ),
    moduleMetadata({
      imports: [AgModule, IconExampleModule],
    }),
  ],
} as Meta;

const message = 'Alerts should be used for timely information.';

export const Default = () => ({
  template: `<div class="mbe16">
    <ag-alert>
      ${message}
    </ag-alert>
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
    <ag-alert type="warning">
      <ag-example-icon iconType="warning" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded="true" type="warning">
      <ag-example-icon iconType="warning" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll="true" type="warning">
      <ag-example-icon iconType="warning" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll="true" type="warning">
      <ag-example-icon iconType="warning" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft="true" type="warning">
      <ag-example-icon iconType="warning" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
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
    <ag-alert type="success">
      <ag-example-icon iconType="success" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded="true" type="success">
      <ag-example-icon iconType="success" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll="true" type="success">
      <ag-example-icon iconType="success" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll="true" type="success">
      <ag-example-icon iconType="success" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft="true" type="success">
      <ag-example-icon iconType="success" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
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
    <ag-alert isRounded="true" type="info">
      <ag-example-icon iconType="info" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll="true" type="info">
      <ag-example-icon iconType="info" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll="true" type="info">
      <ag-example-icon iconType="info" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
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
    <ag-alert type="error">
      <ag-example-icon iconType="error" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded="true" type="error">
      <ag-example-icon iconType="error" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll="true" type="error">
      <ag-example-icon iconType="error" utilityClasses="mie12"></ag-example-icon>
      ${message}
    </ag-alert>
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
