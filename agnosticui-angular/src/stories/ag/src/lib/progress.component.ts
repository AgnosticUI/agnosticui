import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ag-progress',
  template: `<h1>Progress Test 1234</h1>`,
  styleUrls: ['./progress.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProgressComponent {
  // @Input
  // value: PropTypes.number,
  // max: PropTypes.number.isRequired,
  // css: PropTypes.string,
}
