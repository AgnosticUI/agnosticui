import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ag-choice',
  template: `<h1>Choice Input Test 1234</h1>`,
  styleUrls: ['./choice-input.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChoiceInputComponent {
  // @Input
  // value: PropTypes.number,
  // max: PropTypes.number.isRequired,
  // css: PropTypes.string,
}
