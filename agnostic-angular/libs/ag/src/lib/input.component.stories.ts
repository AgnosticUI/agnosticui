import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { AgModule } from './ag.module';
import { InputComponent } from './input.component';
import { v4 as uuid } from 'uuid';

const actionsData = {
  changed: action('changed'),
};

export default {
  title: 'AG—Angular (Beta)/Input',
  component: InputComponent,
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

export const Default: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      placeholder="Enter name…"
      label="Default input"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>`,
});

export const Rounded: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Rounded input"
      placeholder="Rounded input…"
      [isRounded]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const Underlined: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Underlined input"
      placeholder="Underlined input…"
      [isUnderlined]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const Inline: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Inline input"
      placeholder="Inline input…"
      [isInline]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const Small: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Small input"
      placeholder="Small input…"
      size="small"
      [isRounded]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const Large: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Large input"
      placeholder="Large input…"
      size="large"
      [isRounded]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const UnderlinedWithBackground: Story<InputComponent> = (
  args: InputComponent
) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Underlined with background"
      placeholder="Underlined with background…"
      size="large"
      [isUnderlinedWithBackground]="true"
      type="text"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const HelpText: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Help text"
      placeholder="Help text…"
      type="text"
      helpText="Some useful help text."
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const InvalidText: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Invalid text"
      placeholder="Invalid text…"
      type="text"
      invalidText="This field has errors."
      [isInvalid]="true"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const InvalidSmallText: Story<InputComponent> = (
  args: InputComponent
) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Invalid text small"
      placeholder="Invalid text small…"
      type="text"
      invalidText="This field has errors."
      [isInvalid]="true"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const InvalidLargeText: Story<InputComponent> = (
  args: InputComponent
) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Invalid text large"
      placeholder="Invalid text…"
      type="text"
      size="large"
      invalidText="This field has errors."
      [isInvalid]="true"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const TextArea: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Textarea"
      placeholder="Textarea…"
      type="textarea"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const TextAreaSmall: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Textarea amll"
      placeholder="Textarea small…"
      type="textarea"
      size="small"
      rows="10"
      cols="5"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const TextAreaLarge: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },
  template: `<div>
    <ag-input
      id="aginput-${uuid()}"
      label="Textarea large"
      placeholder="Textarea large…"
      type="textarea"
      size="large"
      rows="10"
      cols="5"
      (changed)="propInput.changed($event)"
    ></ag-input>
  </div>`,
});

export const InputAddons: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    propInput: {
      changed: actionsData.changed,
    },
  },

  // Note: we need to use Angular selectors and classes of the same name for the addons
  // that are projected like follows:
  // <div addOnLeft class="addOnLeft"><span>L</span></div>
  // <div addOnRight class="addOnRight"><span>R</span></div>
  template: `<div>
    <h1>Input with addons</h1>
    <ag-input
      id="aginput-${uuid()}"
      hasLeftAddon="true"
      hasRightAddon="true"
      label="Input with addons"
      type="text"
      (changed)="propInput.changed($event)"
    >
      <div addOnLeft class="addOnLeft"><span>L</span></div>
      <div addOnRight class="addOnRight"><span>R</span></div>
    </ag-input>
  </div>`,
});
