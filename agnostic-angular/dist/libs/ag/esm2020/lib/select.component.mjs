import { Input, Output, ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SelectComponent {
    constructor() {
        this.selected = '';
        this.defaultOptionLabel = "Please select an option";
        this.isDisabled = false;
        this.isMultiple = false;
        this.multipleSize = 1;
        this.size = '';
        this.changed = new EventEmitter();
    }
    showDefaultOption() {
        return !this.isMultiple;
    }
    changeSelection(ev) {
        const option = ev.target;
        this.selected = option.value;
        this.changed.emit(this.selected);
    }
    selectClasses() {
        return [
            'select',
            this.size ? `select-${this.size}` : ''
        ].filter(c => c).join(' ');
    }
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: SelectComponent, selector: "ag-select", inputs: { uniqueId: "uniqueId", labelCopy: "labelCopy", defaultOptionLabel: "defaultOptionLabel", name: "name", options: "options", isDisabled: "isDisabled", isMultiple: "isMultiple", multipleSize: "multipleSize", size: "size" }, outputs: { changed: "changed" }, ngImport: i0, template: `<label class="screenreader-only" [attr.for]="uniqueId">{{labelCopy}}</label>
  <select
    [id]="uniqueId"
    [name]="name"
    [ngClass]="selectClasses()"
    [disabled]="isDisabled"
    [multiple]="isMultiple"
    [size]="isMultiple && multipleSize"
    (change)="changeSelection($event)"
  >
    <option *ngIf="showDefaultOption()" [value]="null" disabled selected> {{ defaultOptionLabel }}</option>
    <option *ngFor="let option of options" [value]="option.value">
      {{ option.label }}
    </option>
  </select>`, isInline: true, styles: [".select,.select-base{display:block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none}.select,.select-skin{padding:var(--fluid-6) var(--fluid-32) var(--fluid-6) var(--fluid-12);-moz-padding-start:calc(var(--fluid-12) - 3px);font-size:var(--fluid-16);font-weight:400;line-height:1.5;color:var(--agnostic-dark);border:1px solid var(--agnostic-select-border-color, var(--agnostic-gray-light));border-radius:var(--agnostic-radius);transition:border-color var(--agnostic-timing-fast) ease-in-out,box-shadow var(--agnostic-timing-fast) ease-in-out}.select:not([multiple]){background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right var(--fluid-12) center;background-size:var(--fluid-16) var(--fluid-12)}.select:focus{border-color:var(--agnostic-focus-ring-color);box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.select-base,.select:disabled{background-color:var(--agnostic-disabled-bg)}.select-base,.select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--agnostic-dark)}@media (prefers-reduced-motion),(update: slow){.select,.select-base,.select:focus{transition:none}}.select-small{padding-top:var(--fluid-4);padding-bottom:var(--fluid-4);padding-left:var(--fluid-8);font-size:var(--fluid-14)}.select-large{padding-top:var(--fluid-8);padding-bottom:var(--fluid-8);padding-left:var(--fluid-16);font-size:var(--fluid-18)}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ag-select', template: `<label class="screenreader-only" [attr.for]="uniqueId">{{labelCopy}}</label>
  <select
    [id]="uniqueId"
    [name]="name"
    [ngClass]="selectClasses()"
    [disabled]="isDisabled"
    [multiple]="isMultiple"
    [size]="isMultiple && multipleSize"
    (change)="changeSelection($event)"
  >
    <option *ngIf="showDefaultOption()" [value]="null" disabled selected> {{ defaultOptionLabel }}</option>
    <option *ngFor="let option of options" [value]="option.value">
      {{ option.label }}
    </option>
  </select>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".select,.select-base{display:block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none}.select,.select-skin{padding:var(--fluid-6) var(--fluid-32) var(--fluid-6) var(--fluid-12);-moz-padding-start:calc(var(--fluid-12) - 3px);font-size:var(--fluid-16);font-weight:400;line-height:1.5;color:var(--agnostic-dark);border:1px solid var(--agnostic-select-border-color, var(--agnostic-gray-light));border-radius:var(--agnostic-radius);transition:border-color var(--agnostic-timing-fast) ease-in-out,box-shadow var(--agnostic-timing-fast) ease-in-out}.select:not([multiple]){background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right var(--fluid-12) center;background-size:var(--fluid-16) var(--fluid-12)}.select:focus{border-color:var(--agnostic-focus-ring-color);box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.select-base,.select:disabled{background-color:var(--agnostic-disabled-bg)}.select-base,.select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--agnostic-dark)}@media (prefers-reduced-motion),(update: slow){.select,.select-base,.select:focus{transition:none}}.select-small{padding-top:var(--fluid-4);padding-bottom:var(--fluid-4);padding-left:var(--fluid-8);font-size:var(--fluid-14)}.select-large{padding-top:var(--fluid-8);padding-bottom:var(--fluid-8);padding-left:var(--fluid-16);font-size:var(--fluid-18)}\n"] }]
        }], propDecorators: { uniqueId: [{
                type: Input
            }], labelCopy: [{
                type: Input
            }], defaultOptionLabel: [{
                type: Input
            }], name: [{
                type: Input
            }], options: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isMultiple: [{
                type: Input
            }], multipleSize: [{
                type: Input
            }], size: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQTBCaEcsTUFBTSxPQUFPLGVBQWU7SUFwQjVCO1FBcUJVLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFJYix1QkFBa0IsR0FBWSx5QkFBeUIsQ0FBQztRQUd4RCxlQUFVLEdBQWEsS0FBSyxDQUFDO1FBQzdCLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsaUJBQVksR0FBWSxDQUFDLENBQUM7UUFDMUIsU0FBSSxHQUE0QixFQUFFLENBQUM7UUFHNUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0FrQjlCO0lBaEJDLGlCQUFpQjtRQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlLENBQUMsRUFBUztRQUN2QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBMkIsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTztZQUNMLFFBQVE7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN2QyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDOzs0R0EvQlUsZUFBZTtnR0FBZixlQUFlLHdUQWxCaEI7Ozs7Ozs7Ozs7Ozs7O1lBY0E7MkZBSUMsZUFBZTtrQkFwQjNCLFNBQVM7K0JBQ0UsV0FBVyxZQUNYOzs7Ozs7Ozs7Ozs7OztZQWNBLG1CQUVPLHVCQUF1QixDQUFDLE1BQU07OEJBS3RDLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBR04sT0FBTztzQkFETixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdE9wdGlvbnMge1xuICB2YWx1ZTogc3RyaW5nLFxuICBsYWJlbDogc3RyaW5nLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZy1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDxsYWJlbCBjbGFzcz1cInNjcmVlbnJlYWRlci1vbmx5XCIgW2F0dHIuZm9yXT1cInVuaXF1ZUlkXCI+e3tsYWJlbENvcHl9fTwvbGFiZWw+XG4gIDxzZWxlY3RcbiAgICBbaWRdPVwidW5pcXVlSWRcIlxuICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgIFtuZ0NsYXNzXT1cInNlbGVjdENsYXNzZXMoKVwiXG4gICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgIFttdWx0aXBsZV09XCJpc011bHRpcGxlXCJcbiAgICBbc2l6ZV09XCJpc011bHRpcGxlICYmIG11bHRpcGxlU2l6ZVwiXG4gICAgKGNoYW5nZSk9XCJjaGFuZ2VTZWxlY3Rpb24oJGV2ZW50KVwiXG4gID5cbiAgICA8b3B0aW9uICpuZ0lmPVwic2hvd0RlZmF1bHRPcHRpb24oKVwiIFt2YWx1ZV09XCJudWxsXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+IHt7IGRlZmF1bHRPcHRpb25MYWJlbCB9fTwvb3B0aW9uPlxuICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxuICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgPC9vcHRpb24+XG4gIDwvc2VsZWN0PmAsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCB7XG4gIHByaXZhdGUgc2VsZWN0ZWQgPSAnJztcblxuICBASW5wdXQoKSB1bmlxdWVJZCE6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxDb3B5ITogc3RyaW5nO1xuICBASW5wdXQoKSBkZWZhdWx0T3B0aW9uTGFiZWw/OiBzdHJpbmcgPSBcIlBsZWFzZSBzZWxlY3QgYW4gb3B0aW9uXCI7XG4gIEBJbnB1dCgpIG5hbWUhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbnMhOiBTZWxlY3RPcHRpb25zW107XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzTXVsdGlwbGU/OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG11bHRpcGxlU2l6ZT86IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIHNpemU/OiAnc21hbGwnIHwgJ2xhcmdlJyB8ICcnID0gJyc7XG5cbiAgQE91dHB1dCgpXG4gIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc2hvd0RlZmF1bHRPcHRpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTXVsdGlwbGU7XG4gIH1cblxuICBjaGFuZ2VTZWxlY3Rpb24oZXY6IEV2ZW50KSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZXYudGFyZ2V0IGFzIEhUTUxPcHRpb25FbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBvcHRpb24udmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5zZWxlY3RlZCk7XG4gIH1cblxuICBzZWxlY3RDbGFzc2VzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnc2VsZWN0JyxcbiAgICAgIHRoaXMuc2l6ZSA/IGBzZWxlY3QtJHt0aGlzLnNpemV9YCA6ICcnXG4gICAgXS5maWx0ZXIoYyA9PiBjKS5qb2luKCcgJyk7XG4gIH1cbn1cbiJdfQ==