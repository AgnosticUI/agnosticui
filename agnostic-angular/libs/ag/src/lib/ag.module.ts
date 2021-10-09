import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ButtonGroupComponent } from './buttongroup.component';
import { CardComponent } from './card.component';
import { ChoiceInputComponent } from './choice-input.component';
import {
  HeaderComponent,
  HeaderNavComponent,
  HeaderNavItemComponent,
} from './header.component';
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
    HeaderNavComponent,
    HeaderNavItemComponent,
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
    HeaderNavComponent,
    HeaderNavItemComponent,
    InputComponent,
    ProgressComponent,
    SwitchComponent,
    TabsComponent,
    TabPanelComponent,
  ],
})
export class AgModule {}
