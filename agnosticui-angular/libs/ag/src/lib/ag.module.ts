import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button.module';
import { ButtonGroupModule } from './buttongroup.module';
import { CardModule } from './card.module';
import { ChoiceInputModule } from './choice-input.module';
import { HeaderModule } from './header.module';
import { SwitchModule } from './switch.module';
import { TabsModule } from './tabs.module';
import { TabPanelModule } from './tab-panel.module';
import { InputModule } from './input.module';
import { ProgressModule } from './progress.module';
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [
    ButtonModule,
    ButtonGroupModule,
    CardModule,
    ChoiceInputModule,
    HeaderModule,
    InputModule,
    ProgressModule,
    SwitchModule,
    TabsModule,
    TabPanelModule,
  ],
})
export class AgModule {}
