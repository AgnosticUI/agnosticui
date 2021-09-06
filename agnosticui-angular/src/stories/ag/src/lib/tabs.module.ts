import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import TabsComponent from './tabs.component';

@NgModule({
   imports: [CommonModule],
   declarations: [TabsComponent],
   exports: [TabsComponent]
})
export class TabsModule {}
