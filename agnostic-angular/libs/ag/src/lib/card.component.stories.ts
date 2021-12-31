import { Story, Meta } from '@storybook/angular';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CardComponent } from './card.component';
import { AgModule } from './ag.module';

export default {
  title: 'AG—Angular (Beta)/Card',
  component: CardComponent,
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

const Template: Story<CardComponent> = (args: CardComponent) => ({
  template: `
    <ag-card>
      <div style="padding: 24px;">Default</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isBorder]="true">
      <div style="padding: 24px;">Border</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isBorder]="true" [isRounded]="true">
      <div style="padding: 24px;">Border and rounded</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isStacked]="true" [isBorder]="true">
      <div style="padding: 24px;">Stacked and border</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isStacked]="true" [isShadow]="true">
      <div style="padding: 24px;">Stacked and shadow</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isStacked]="true" [isShadow]="true" [isAnimated]="true">
      <div style="padding: 24px;">Stacked, shadown, and animated</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card type="success" [isStacked]="true">
      <div style="padding: 24px;">Success stacked</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card type="success" [isStacked]="true" [isRounded]="true">
      <div style="padding: 24px;">Success, stacked, and rounded</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card type="info" [isStacked]="true">
      <div style="padding: 24px;">Info and stacked</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card type="warning" [isStacked]="true">
      <div style="padding: 24px;">Warning and stacked</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card type="error" [isStacked]="true">
      <div style="padding: 24px;">Error and stacked</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isSkinned]="false">
      <div style="padding: 24px;">Base Card</div>
      <div style="padding: 24px;">No Skin</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card css="addition-classes">
      <div style="padding: 24px;">Custom CSS Class Overrides</div>
      <div style="padding: 24px;">Inspect to see additional-classes</div>
    </ag-card>
  `,
});

export const TabsAll = Template.bind({});
