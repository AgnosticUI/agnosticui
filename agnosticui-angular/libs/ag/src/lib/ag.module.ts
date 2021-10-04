import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ButtonGroupComponent } from './buttongroup.component';
import { CardComponent } from './card.component';
import { ChoiceInputComponent } from './choice-input.component';
import { SwitchComponent } from './switch.component';
import { TabsComponent } from './tabs.component';
import { TabPanelComponent } from './tab-panel.component';

// TODO -- Figure out:
// Error: libs/ag/src/lib/header.component.ts:25:19 - error NG8002: Can't bind to 'ngClass' since it isn't a known property of 'div'.
// import { HeaderComponent } from './header.component';

import { InputComponent } from './input.component';
import { ProgressComponent } from './progress.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    ChoiceInputComponent,
    // HeaderComponent,
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
    // HeaderComponent,
    InputComponent,
    ProgressComponent,
    SwitchComponent,
    TabsComponent,
    TabPanelComponent,
  ],
})
export class AgModule {}
