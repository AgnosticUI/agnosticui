import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ToastsComponent } from './toasts.component';
import { IconExampleModule } from './iconexample.module';
import { AgModule } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/Toasts',
  component: ToastsComponent,
  decorators: [
    moduleMetadata({
      imports: [AgModule, IconExampleModule],
    }),
  ],
} as Meta;

export const All = () => ({
  template: `<div>
    <ag-toasts horizontalPosition="end" verticalPosition="top">
      <ag-toast [isAnimationSlideUp]="true" [isBorderAll]="true" type="success">Success. Bordered. Animated</ag-toast>
      <div class="mbe14"></div>
      <ag-toast [isAnimationSlideUp]="true" [isBorderAll]="true" type="info">Info. Bordered. Animated</ag-toast>
      <div class="mbe14"></div>
      <ag-toast [isAnimationSlideUp]="true" [isBorderAll]="true" type="warning">Warning. Bordered. Animated</ag-toast>
      <div class="mbe14"></div>
      <ag-toast [isAnimationSlideUp]="true" [isBorderLeft]="true" type="info">
        <ag-example-icon iconType="info" utilityClasses="mie8"></ag-example-icon>
        Info. Border left. Animated. Icon projected.
      </ag-toast>
    </ag-toasts>
    <ag-toasts horizontalPosition="start" verticalPosition="top">
      <ag-toast type="warning">
        <ag-example-icon iconType="warning" utilityClasses="mie12"></ag-example-icon>
        Warning toast w/projected icon
      </ag-toast>
      <div class="mbe14"></div>
      <ag-toast type="info">
        <ag-example-icon iconType="info" utilityClasses="mie12"></ag-example-icon>
        Info toast with projected icon
      </ag-toast>
      <div class="mbe14"></div>
      <ag-toast type="success">
        <ag-example-icon iconType="success" utilityClasses="mie12"></ag-example-icon>
        Success toast w/projected icon
      </ag-toast>
      <div class="mbe14"></div>
      <ag-toast type="error">
        <ag-example-icon iconType="error" utilityClasses="mie12"></ag-example-icon>
        Error toast w/projected icon
      </ag-toast>
      <div class="mbe14"></div>
      <ag-toast type="dark">
        <ag-example-icon iconType="dark" utilityClasses="mie12"></ag-example-icon>
        Dark toast w/projected icon
      </ag-toast>
      <div class="mbe14"></div>
      <ag-toast>Toast default</ag-toast>
    </ag-toasts>
    <ag-toasts horizontalPosition="center" verticalPosition="top">
      <ag-toast>Toast in center</ag-toast>
      <div class="mbe14"></div>
      <ag-toast>Toast 2 in center</ag-toast>
    </ag-toasts>
    <ag-toasts horizontalPosition="start" verticalPosition="bottom">
      <ag-toast>Toast at bottom start</ag-toast>
      <div class="mbe14"></div>
      <ag-toast>Toast 2 at bottom start</ag-toast>
    </ag-toasts>
    <ag-toasts horizontalPosition="center" verticalPosition="bottom">
      <ag-toast>Toast at bottom center</ag-toast>
      <div class="mbe14"></div>
      <ag-toast>Toast 2 at bottom center</ag-toast>
    </ag-toasts>
    <ag-toasts horizontalPosition="end" verticalPosition="bottom">
      <ag-toast [isRounded]="true">Rounded toast at bottom end</ag-toast>
      <div class="mbe14"></div>
      <ag-toast [isBorderLeft]="true">Border on left</ag-toast>
      <div class="mbe14"></div>
      <ag-toast [isBorderAll]="true" type="info">Border on all sides type info</ag-toast>
    </ag-toasts>
  </div>`
});
