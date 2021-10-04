import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabPanelComponent],
  exports: [TabPanelComponent],
})
export class TabPanelModule {}
