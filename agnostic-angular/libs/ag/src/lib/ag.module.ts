import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AvatarComponent } from './avatar.component';
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
    AlertComponent,
    AvatarComponent,
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
    AlertComponent,
    AvatarComponent,
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
