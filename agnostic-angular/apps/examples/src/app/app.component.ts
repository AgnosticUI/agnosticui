import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // We're using some globals in example so don't apply encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'examples';
}
