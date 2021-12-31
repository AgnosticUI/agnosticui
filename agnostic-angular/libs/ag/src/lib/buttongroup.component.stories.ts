import {
  moduleMetadata,
  componentWrapperDecorator,
  Story,
  Meta,
} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonGroupComponent } from './buttongroup.component';
import { AgModule } from './ag.module';

export default {
  title: 'AG—Angular (Beta)/ButtonGroup',
  component: ButtonGroupComponent,
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
} as Meta<ButtonGroupComponent>;

const actions = {
  onClicked: action('onClicked'),
};

const Template: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
  props: {
    propInput: {
      css: args.css || undefined,
      ariaLabel: args.ariaLabel || undefined,
      onClicked: actions.onClicked,
    },
  },
  template: `<ag-button-group [css]="propInput.css" [ariaLabel]="propInput.ariaLabel">
    <div class="btn-first-wrap">
      <ag-button mode="primary" [isBordered]="true" (handleClick)="propInput.onClicked($event)">Button 1</ag-button>
    </div>
    <ag-button mode="primary" [isBordered]="true" (handleClick)="propInput.onClicked($event)">Button 2</ag-button>
    <ag-button mode="primary" [isBordered]="true" (handleClick)="propInput.onClicked($event)">Button 3</ag-button>
    <div class="btn-last-wrap">
      <ag-button mode="primary" [isBordered]="true" (handleClick)="propInput.onClicked($event)">Button 4</ag-button>
    </div>
  </ag-button-group>`,
});

export const Triplets = Template.bind({});
export const CssAndAria = Template.bind({});
CssAndAria.args = {
  css: 'foo bar',
  ariaLabel: 'this is a good aria label that describes the button group',
};
