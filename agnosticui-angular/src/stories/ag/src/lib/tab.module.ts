import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import TabComponent from './tab.component';

@NgModule({
   imports: [CommonModule],
   declarations: [TabComponent],
   exports: [TabComponent]
})
export class TabModule {}
