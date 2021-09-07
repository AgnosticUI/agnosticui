import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
@NgModule({
   imports: [CommonModule],
   declarations: [InputComponent],
   exports: [InputComponent]
})
export class InputModule {}
