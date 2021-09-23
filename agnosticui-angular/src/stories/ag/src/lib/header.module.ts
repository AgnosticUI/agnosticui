import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent, HeaderNavComponent, HeaderNavItemComponent } from './header.component';
@NgModule({
   imports: [CommonModule],
   declarations: [HeaderComponent, HeaderNavComponent, HeaderNavItemComponent],
   exports: [HeaderComponent, HeaderNavComponent, HeaderNavItemComponent]
})
export class HeaderModule {}
