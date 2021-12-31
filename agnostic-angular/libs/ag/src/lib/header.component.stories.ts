import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { AgModule } from './ag.module';
import { HeaderComponent } from './header.component';

export default {
  title: 'AG—Angular (Beta)/Header',
  component: HeaderComponent,
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

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  template: `<div>
    <h3 class="mbe12">Defaults to space between</h3>
    <ag-header>
      <a href="https://web.dev/">web.dev</a>
      <ag-header-nav>
        <ag-header-nav-item class="mie12">
          <a href="https://css-tricks.com/">CSS-Tricks</a> 
        </ag-header-nav-item>
        <ag-header-nav-item class="mis12 mie16">
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </ag-header-nav-item>
      </ag-header-nav>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </ag-header>
  </div>`,
});

export const HeaderExample = Template.bind({});

const ContentStart: Story<HeaderComponent> = (args: HeaderComponent) => ({
  template: `<div>
    <h3 class="mbe12">Header content justify left</h3>
    <p class="mbe16">Pass in <code>isHeaderContentStart</code> and apply
      <code>flex-fill</code> to the <code>ag-header-nav</code> so it will grow.
    </p>
    <ag-header isHeaderContentStart="true">
      <a href="https://web.dev/">web.dev</a>
      <ag-header-nav class="mis16 flex-fill">
        <ag-header-nav-item class="mie12">
          <a href="https://css-tricks.com/">CSS-Tricks</a> 
        </ag-header-nav-item>
        <ag-header-nav-item class="mis12 mie16">
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </ag-header-nav-item>
      </ag-header-nav>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </ag-header></div>`,
});
export const HeaderStart = ContentStart.bind({});

const ContentEnd: Story<HeaderComponent> = (args: HeaderComponent) => ({
  template: `<div>
  <h3 class="mbe12">Header content justify right</h3>
  <p class="mbe16">Pass in <code>isHeaderContentEnd</code> and apply
    margins on your child <code>ag-header-nav-item</code>'s as you see
    fit.
  </p>
  <ag-header isHeaderContentEnd="true">
    <a class="flex-fill" href="https://web.dev/">web.dev</a>
    <ag-header-nav>
      <ag-header-nav-item>
        <a href="https://css-tricks.com/">CSS-Tricks</a> 
      </ag-header-nav-item>
      <ag-header-nav-item class="mis12 mie16">
        <a href="https://developer.mozilla.org/en-US/">MDN</a>
      </ag-header-nav-item>
    </ag-header-nav>
    <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
  </ag-header></div>`,
});
export const HeaderEnd = ContentEnd.bind({});
