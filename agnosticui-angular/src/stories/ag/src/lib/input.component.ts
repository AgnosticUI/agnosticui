import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ag-input',
  template: `<div className="width-full">
    <label [class]="labelClasses()" [for]="uniqueId">
      {{label}}
    </label>
    <ng-container *ngIf="type === 'textarea'; else noTextarea">
      <textarea *ngIf="type === 'textarea'"
        [id]="uniqueId"
        [name]="uniqueId"
        [value]="defaultValue || ''"
        [disabled]="isDisabled"
        [class]="inputClasses()"
        [placeholder]="placeholder ? placeholder : ''"
        [attr.rows]="rows"
        [attr.cols]="cols"
        (change)="handleChange"
        (focus)="handleFocus"
        (blur)="handleBlur"
      ></textarea>
    </ng-container>
    <ng-template #noTextarea>
      <div class="input-addon-container" *ngIf="hasLeftAddon || hasRightAddon else inputOnly">
        <ng-content select="[addOnLeft]"></ng-content>
        <input
          [id]="uniqueId"
          [name]="uniqueId"
          [value]="defaultValue || ''"
          [type]="type"
          [disabled]="isDisabled"
          [class]="inputClasses()"
          [placeholder]="placeholder ? placeholder : ''"
          (change)="handleChange"
          (focus)="handleFocus"
          (blur)="handleBlur"
        />
        <ng-content select="[addOnRight]"></ng-content>
      </div>
      <ng-template #inputOnly>
        <input
          [id]="uniqueId"
          [name]="uniqueId"
          [value]="defaultValue || ''"
          [type]="type"
          [disabled]="isDisabled"
          [class]="inputClasses()"
          [placeholder]="placeholder ? placeholder : ''"
          (change)="handleChange"
          (focus)="handleFocus"
          (blur)="handleBlur"
        />
      </ng-template>
    </ng-template>
  </div>`,
  styleUrls: ['./input.css', './inputaddon-hack.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputComponent {
  @Input() isSkinned?: boolean = true;
  @Input() isRounded?: boolean = false;
  @Input() isUnderlined?: boolean = false;
  @Input() isInline?: boolean = false;
  @Input() isDisabled?: boolean = false;
  @Input() hasLeftAddon?: boolean = false;
  @Input() hasRightAddon?: boolean = false;
  @Input() isUnderlinedWithBackground?: boolean = false;
  @Input() uniqueId!: string;
  @Input() label!: string;
  @Input() labelCss?: string;
  @Input() placeholder?: string;
  @Input() defaultValue?: string;
  @Input() size?: 'small' | 'large' | '' = '';
  @Input() type!: 'text' | 'password' | 'email' | 'number' | 'url' | 'tel' | 'search' | 'textarea';
  // It appears we can't have arbitrary props in Angular and they all have to be defined
  // as an @Input. React has ...rest, Vue has v-bind="$attrs", Svelte has  {...$$restProps} ¯\_(ツ)_/¯
  // https://github.com/angular/angular/issues/14545
  @Input() rows?: number;
  @Input() cols?: number;

  labelClasses() {
    let labelKlasses = [
      'label',
      // this.isInvalid ? 'label-error' : '',
      this.isInline ? 'label-inline' : '',
      this.size ? `label-${this.size}`: '',
      this.labelCss ? this.labelCss : ''
    ];
    return labelKlasses
      .filter((klass) => klass.length).join(' ');
  }
  inputClasses() {
    let klasses = [
      this.isSkinned ? 'input' : 'input-base',
      this.isRounded ? 'input-rounded' : '',
      this.isUnderlined ? 'input-underlined' : '',
      this.isDisabled ? 'disabled' : '',
      this.isInline ? 'input-inline' : '',
      this.hasLeftAddon ? 'input-has-left-addon': '',
      this.hasRightAddon ? 'input-has-right-addon' : '',
      // isInvalid ? styles.invalid : '',
      this.isUnderlinedWithBackground ? 'input-underlined-bg' : '',
      // inputCss ? `${inputCss}` : '',
      this.size ? `input-${this.size}` : '',
    ];
    klasses = klasses.filter((klass) => klass.length);
    return klasses.join(' ');
  }
  handleChange(ev: Event) {
    console.log('handleChange not yet implemented...');
  }
  handleFocus(ev: Event) {
    console.log('handleFocus not yet implemented...');
  }
  handleBlur(ev: Event) {
    console.log('handleBlur not yet implemented...');
  }
}
