import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Note that we've created individual component modules to facilitate storybook moduleMetadata
// But (I think) we want to expose our components via this on ui.module.ts
import { ButtonComponent } from './button.component';
import { ButtonGroupComponent } from './buttongroup.component';
import { CardComponent } from './card.component';
import { ChoiceInputComponent } from './choice-input.component';
import { HeaderComponent } from './header.component';
import { InputComponent } from './input.component';
import { ProgressComponent } from './progress.component';
import { SwitchComponent } from './switch.component';
import { TabsComponent } from './tabs.component';
import { TabPanelComponent } from './tab-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    ChoiceInputComponent,
    HeaderComponent,
    InputComponent,
    ProgressComponent,
    SwitchComponent,
    TabsComponent,
    TabPanelComponent,
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    ChoiceInputComponent,
    HeaderComponent,
    InputComponent,
    ProgressComponent,
    SwitchComponent,
    TabsComponent,
    TabPanelComponent,
  ],
})
export class UiModule {}
