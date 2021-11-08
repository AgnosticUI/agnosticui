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
        `<div style="font-family: var(--agnostic-font-family)">${story}</div>`
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
    <ag-card isStacked="true">
      <div style="padding: 24px;">Stacked</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <ag-card isStacked="true" isAnimated="true">
      <div style="padding: 24px;">Stacked & Animated</div>
      <div style="padding: 24px;">Card</div>
    </ag-card>
    <ag-card isSkinned="false">
      <div style="padding: 24px;">Base Card</div>
      <div style="padding: 24px;">No Skin</div>
    </ag-card>
    <ag-card css="addition-classes">
      <div style="padding: 24px;">Custom CSS Class Overrides</div>
      <div style="padding: 24px;">Inspect to see additional-classes</div>
    </ag-card>
  `,
});

export const TabsAll = Template.bind({});
