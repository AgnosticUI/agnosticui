import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import ButtonGroupComponent from './buttongroup.component';

@NgModule({
   imports: [CommonModule],
   declarations: [ButtonGroupComponent],
   exports: [ButtonGroupComponent]
})
export class ButtonGroupModule {}
