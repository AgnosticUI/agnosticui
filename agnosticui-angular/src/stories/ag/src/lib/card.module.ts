import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';

@NgModule({
   imports: [CommonModule],
   declarations: [CardComponent],
   exports: [CardComponent]
})
export class CardModule {}
