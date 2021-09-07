import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ag-input',
  template: `<h1>Input Test 1234</h1>`,
  styleUrls: ['./input.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputComponent {
  // @Input
  // value: PropTypes.number,
  // max: PropTypes.number.isRequired,
  // css: PropTypes.string,
}
