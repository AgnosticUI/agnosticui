import { Component, EventEmitter, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwitchComponent {
    constructor() {
        this.labelPosition = 'left';
        this.isDisabled = false;
        this.isAction = false;
        this.isBordered = false;
        this.size = '';
        this.selected = new EventEmitter();
    }
    get isChecked() {
        return this.switchChecked;
    }
    set isChecked(val) {
        this.switchChecked = val;
    }
    toggleChecked(ev) {
        const el = ev.target;
        if (el.getAttribute('aria-checked') == 'true') {
            el.setAttribute('aria-checked', 'false');
            this.switchChecked = false;
        }
        else {
            el.setAttribute('aria-checked', 'true');
            this.switchChecked = true;
        }
        this.selected.emit(this.switchChecked);
    }
    switchContainer() {
        let klasses = [
            'switch-container',
            this.css ? this.css : '',
            this.labelPosition === 'right' ? 'switch-right' : '',
            this.isDisabled ? 'disabled' : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
    switchSpan() {
        let klasses = [
            'switch',
            this.isBordered ? 'switch-border' : '',
            this.isAction ? 'switch-action' : '',
            this.size ? `switch-${this.size}` : '',
        ];
        klasses = klasses.filter((klass) => klass.length);
        return klasses.join(' ');
    }
}
SwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: SwitchComponent, selector: "ag-switch", inputs: { label: "label", css: "css", labelPosition: "labelPosition", isDisabled: "isDisabled", isAction: "isAction", isBordered: "isBordered", size: "size", isChecked: "isChecked" }, outputs: { selected: "selected" }, ngImport: i0, template: `<label [ngClass]="switchContainer()">
    <span *ngIf="labelPosition === 'left'" class="switch-label">{{
      label
    }}</span>
    <input
      type="checkbox"
      [checked]="isChecked"
      class="switch-input"
      [disabled]="isDisabled"
      role="switch"
      (change)="toggleChecked($event)"
    />
    <span [ngClass]="switchSpan()" aria-hidden="true"></span>
    <span *ngIf="labelPosition === 'right'" class="switch-label">{{
      label
    }}</span>
  </label>`, isInline: true, styles: [".switch-container{display:block;min-height:2.25rem;width:100%;padding:.5rem;position:relative}.switch-container:hover{cursor:pointer}.switch:before,.switch:after{border:1px solid var(--agnostic-gray-mid-dark);content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.switch:after{background:#fff;border-radius:100%;width:1.4rem;height:1.4rem;right:1.4rem;transition:right var(--agnostic-timing-fast) ease-in-out}.switch:before{background:#eee;border-radius:1.75rem;width:2.75rem;height:1.75rem;right:.25rem;transition:background var(--agnostic-timing-medium) ease-in-out}.switch-small:after{width:1.25rem;height:1.25rem;right:1.125rem}.switch-small:before{width:2.25rem;height:1.5rem}.switch-large:after{width:1.65rem;height:1.65rem;right:1.65rem}.switch-large:before{width:3.25rem;height:2rem}.switch-border:before{border:1px solid var(--agnostic-primary)}.switch-action.switch-border:before{border:1px solid var(--agnostic-action)}.switch-right .switch:before{right:initial;left:.25rem}.switch-right .switch:after{right:initial;left:1.4rem}.switch-right .switch-small:after{left:1.125rem}.switch-right .switch-large:after{left:1.65rem}.switch-input:checked+.switch-small:after{right:.425rem}.switch-input:checked+.switch:after{right:.5em}.switch-right .switch-label{position:absolute;right:0;transition:left var(--agnostic-timing-fast) ease-in-out}.switch-right .switch-input:checked+.switch:after{right:initial;left:.5em}.switch-right .switch-input:checked+.switch-small:after{right:initial;left:.425rem}.switch-input{margin:0;opacity:.01%;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.switch-input:focus+.switch:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color)}.switch-input:checked+.switch:not(.switch-border):before{background:var(--agnostic-primary)}.switch-input:checked+.switch-action:not(.switch-border):before{background:var(--agnostic-action)}.switch-input:checked+.switch-border:after{background:var(--agnostic-primary)}.switch-input:checked+.switch-action.switch-border:after{background:var(--agnostic-action)}.switch-input[disabled]+.switch,.switch-input[disabled]+.switch-label,.switch-container.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.switch:after{background-color:windowText}.switch-input[disabled]+.switch-label,.switch-container.disabled{outline:2px solid transparent;outline-offset:-2px}}@media (prefers-reduced-motion),(update: slow){.switch:after,.switch:before{transition-duration:.001ms!important}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-switch', template: `<label [ngClass]="switchContainer()">
    <span *ngIf="labelPosition === 'left'" class="switch-label">{{
      label
    }}</span>
    <input
      type="checkbox"
      [checked]="isChecked"
      class="switch-input"
      [disabled]="isDisabled"
      role="switch"
      (change)="toggleChecked($event)"
    />
    <span [ngClass]="switchSpan()" aria-hidden="true"></span>
    <span *ngIf="labelPosition === 'right'" class="switch-label">{{
      label
    }}</span>
  </label>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".switch-container{display:block;min-height:2.25rem;width:100%;padding:.5rem;position:relative}.switch-container:hover{cursor:pointer}.switch:before,.switch:after{border:1px solid var(--agnostic-gray-mid-dark);content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.switch:after{background:#fff;border-radius:100%;width:1.4rem;height:1.4rem;right:1.4rem;transition:right var(--agnostic-timing-fast) ease-in-out}.switch:before{background:#eee;border-radius:1.75rem;width:2.75rem;height:1.75rem;right:.25rem;transition:background var(--agnostic-timing-medium) ease-in-out}.switch-small:after{width:1.25rem;height:1.25rem;right:1.125rem}.switch-small:before{width:2.25rem;height:1.5rem}.switch-large:after{width:1.65rem;height:1.65rem;right:1.65rem}.switch-large:before{width:3.25rem;height:2rem}.switch-border:before{border:1px solid var(--agnostic-primary)}.switch-action.switch-border:before{border:1px solid var(--agnostic-action)}.switch-right .switch:before{right:initial;left:.25rem}.switch-right .switch:after{right:initial;left:1.4rem}.switch-right .switch-small:after{left:1.125rem}.switch-right .switch-large:after{left:1.65rem}.switch-input:checked+.switch-small:after{right:.425rem}.switch-input:checked+.switch:after{right:.5em}.switch-right .switch-label{position:absolute;right:0;transition:left var(--agnostic-timing-fast) ease-in-out}.switch-right .switch-input:checked+.switch:after{right:initial;left:.5em}.switch-right .switch-input:checked+.switch-small:after{right:initial;left:.425rem}.switch-input{margin:0;opacity:.01%;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.switch-input:focus+.switch:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color)}.switch-input:checked+.switch:not(.switch-border):before{background:var(--agnostic-primary)}.switch-input:checked+.switch-action:not(.switch-border):before{background:var(--agnostic-action)}.switch-input:checked+.switch-border:after{background:var(--agnostic-primary)}.switch-input:checked+.switch-action.switch-border:after{background:var(--agnostic-action)}.switch-input[disabled]+.switch,.switch-input[disabled]+.switch-label,.switch-container.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.switch:after{background-color:windowText}.switch-input[disabled]+.switch-label,.switch-container.disabled{outline:2px solid transparent;outline-offset:-2px}}@media (prefers-reduced-motion),(update: slow){.switch:after,.switch:before{transition-duration:.001ms!important}}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], css: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isAction: [{
                type: Input
            }], isBordered: [{
                type: Input
            }], size: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], selected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi9zd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQXdCaEcsTUFBTSxPQUFPLGVBQWU7SUF0QjVCO1FBeUJXLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsYUFBUSxHQUFhLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBQzdCLFNBQUksR0FBSSxFQUFFLENBQUM7UUFZVixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQWlDbEQ7SUExQ0MsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUNJLFNBQVMsQ0FBQyxHQUFZO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFJRCxhQUFhLENBQUMsRUFBUztRQUNyQixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBMEIsQ0FBQztRQUN6QyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksTUFBTSxFQUFFO1lBQzdDLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCO2FBQU07WUFDTCxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsZUFBZTtRQUNiLElBQUksT0FBTyxHQUFHO1lBQ1osa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDbEMsQ0FBQztRQUNGLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxVQUFVO1FBQ1IsSUFBSSxPQUFPLEdBQUc7WUFDWixRQUFRO1lBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN2QyxDQUFDO1FBQ0YsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7NEdBbkRVLGVBQWU7Z0dBQWYsZUFBZSw0UUFwQmhCOzs7Ozs7Ozs7Ozs7Ozs7O1dBZ0JEOzJGQUlFLGVBQWU7a0JBdEIzQixTQUFTOytCQUNFLFdBQVcsWUFDWDs7Ozs7Ozs7Ozs7Ozs7OztXQWdCRCxtQkFFUSx1QkFBdUIsQ0FBQyxNQUFNOzhCQUd0QyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQVFGLFNBQVM7c0JBRFosS0FBSztnQkFLSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnLXN3aXRjaCcsXG4gIHRlbXBsYXRlOiBgPGxhYmVsIFtuZ0NsYXNzXT1cInN3aXRjaENvbnRhaW5lcigpXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJsYWJlbFBvc2l0aW9uID09PSAnbGVmdCdcIiBjbGFzcz1cInN3aXRjaC1sYWJlbFwiPnt7XG4gICAgICBsYWJlbFxuICAgIH19PC9zcGFuPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgIFtjaGVja2VkXT1cImlzQ2hlY2tlZFwiXG4gICAgICBjbGFzcz1cInN3aXRjaC1pbnB1dFwiXG4gICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICByb2xlPVwic3dpdGNoXCJcbiAgICAgIChjaGFuZ2UpPVwidG9nZ2xlQ2hlY2tlZCgkZXZlbnQpXCJcbiAgICAvPlxuICAgIDxzcGFuIFtuZ0NsYXNzXT1cInN3aXRjaFNwYW4oKVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImxhYmVsUG9zaXRpb24gPT09ICdyaWdodCdcIiBjbGFzcz1cInN3aXRjaC1sYWJlbFwiPnt7XG4gICAgICBsYWJlbFxuICAgIH19PC9zcGFuPlxuICA8L2xhYmVsPmAsXG4gIHN0eWxlVXJsczogWycuL3N3aXRjaC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xuICBASW5wdXQoKSBjc3M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb24gPSAnbGVmdCc7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQWN0aW9uPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0JvcmRlcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaXplPyA9ICcnO1xuXG4gIHByaXZhdGUgc3dpdGNoQ2hlY2tlZCE6IGJvb2xlYW47XG4gIGdldCBpc0NoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3dpdGNoQ2hlY2tlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpc0NoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5zd2l0Y2hDaGVja2VkID0gdmFsO1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHRvZ2dsZUNoZWNrZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZWwgPSBldi50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnKSA9PSAndHJ1ZScpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gICAgICB0aGlzLnN3aXRjaENoZWNrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgdGhpcy5zd2l0Y2hDaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHRoaXMuc3dpdGNoQ2hlY2tlZCk7XG4gIH1cbiAgc3dpdGNoQ29udGFpbmVyKCkge1xuICAgIGxldCBrbGFzc2VzID0gW1xuICAgICAgJ3N3aXRjaC1jb250YWluZXInLFxuICAgICAgdGhpcy5jc3MgPyB0aGlzLmNzcyA6ICcnLFxuICAgICAgdGhpcy5sYWJlbFBvc2l0aW9uID09PSAncmlnaHQnID8gJ3N3aXRjaC1yaWdodCcgOiAnJyxcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyxcbiAgICBdO1xuICAgIGtsYXNzZXMgPSBrbGFzc2VzLmZpbHRlcigoa2xhc3MpID0+IGtsYXNzLmxlbmd0aCk7XG4gICAgcmV0dXJuIGtsYXNzZXMuam9pbignICcpO1xuICB9XG4gIHN3aXRjaFNwYW4oKSB7XG4gICAgbGV0IGtsYXNzZXMgPSBbXG4gICAgICAnc3dpdGNoJyxcbiAgICAgIHRoaXMuaXNCb3JkZXJlZCA/ICdzd2l0Y2gtYm9yZGVyJyA6ICcnLFxuICAgICAgdGhpcy5pc0FjdGlvbiA/ICdzd2l0Y2gtYWN0aW9uJyA6ICcnLFxuICAgICAgdGhpcy5zaXplID8gYHN3aXRjaC0ke3RoaXMuc2l6ZX1gIDogJycsXG4gICAgXTtcbiAgICBrbGFzc2VzID0ga2xhc3Nlcy5maWx0ZXIoKGtsYXNzKSA9PiBrbGFzcy5sZW5ndGgpO1xuICAgIHJldHVybiBrbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxufVxuIl19