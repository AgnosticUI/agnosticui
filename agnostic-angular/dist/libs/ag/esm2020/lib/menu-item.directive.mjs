import { Directive, ElementRef, HostBinding, HostListener, Inject, Input, } from '@angular/core';
import { AG_MENU } from './menu.types';
import * as i0 from "@angular/core";
export class MenuItemDirective {
    constructor(el, menu) {
        this.el = el;
        this.menu = menu;
        this.isSelected = false;
        this.isRounded = this.menu.isRounded;
        this.isSmall = this.menu.size === 'small';
        this.isLarge = this.menu.size === 'large';
    }
    get disabled() {
        return this.el.nativeElement?.disabled ?? false;
    }
    onClick() {
        this.menu.handleItemClick();
    }
    onKeydown(ev) {
        switch (ev.key) {
            case 'Enter':
                ev.preventDefault();
                this.el.nativeElement.click();
                return;
            case 'Escape':
                this.menu.close();
                break;
            case 'Tab':
                ev.preventDefault();
                return;
        }
        this.menu.findChildHandleFocus(ev, this);
    }
    focus() {
        this.el.nativeElement.focus();
    }
}
MenuItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MenuItemDirective, deps: [{ token: i0.ElementRef }, { token: AG_MENU }], target: i0.ɵɵFactoryTarget.Directive });
MenuItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.3", type: MenuItemDirective, selector: "button[ag-menu-item]", inputs: { isSelected: "isSelected" }, host: { listeners: { "click": "onClick($event)", "keydown": "onKeydown($event)" }, properties: { "attr.role": "menuitem", "attr.tabindex": "isSelected === true ? 0 : -1", "class.menu-item-selected": "this.isSelected", "class.menu-item-rounded": "this.isRounded", "class.menu-item-small": "this.isSmall", "class.menu-item-large": "this.isLarge" }, classAttribute: "menu-item" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MenuItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[ag-menu-item]',
                    host: {
                        class: 'menu-item',
                        '[attr.role]': 'menuitem',
                        '[attr.tabindex]': 'isSelected === true ? 0 : -1',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [AG_MENU]
                }] }]; }, propDecorators: { isSelected: [{
                type: HostBinding,
                args: ['class.menu-item-selected']
            }, {
                type: Input
            }], isRounded: [{
                type: HostBinding,
                args: ['class.menu-item-rounded']
            }], isSmall: [{
                type: HostBinding,
                args: ['class.menu-item-small']
            }], isLarge: [{
                type: HostBinding,
                args: ['class.menu-item-large']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onKeydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYWcvc3JjL2xpYi9tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFZLE1BQU0sY0FBYyxDQUFDOztBQVVqRCxNQUFNLE9BQU8saUJBQWlCO0lBVzVCLFlBQ1MsRUFBaUMsRUFDZixJQUFjO1FBRGhDLE9BQUUsR0FBRixFQUFFLENBQStCO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBVTtRQVpTLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFN0IsY0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xDLFlBQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7UUFDckMsWUFBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztJQVN4RSxDQUFDO0lBUEosSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLElBQUksS0FBSyxDQUFDO0lBQ2xELENBQUM7SUFPa0MsT0FBTztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFb0MsU0FBUyxDQUFDLEVBQWlCO1FBQzlELFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNkLEtBQUssT0FBTztnQkFFVixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM5QixPQUFPO1lBQ1QsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBR1IsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNwQixPQUFPO1NBQ1Y7UUFJRCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7OzhHQTVDVSxpQkFBaUIsNENBYWxCLE9BQU87a0dBYk4saUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBUjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxXQUFXO3dCQUNsQixhQUFhLEVBQUUsVUFBVTt3QkFDekIsaUJBQWlCLEVBQUUsOEJBQThCO3FCQUNsRDtpQkFDRjs7MEJBY0ksTUFBTTsyQkFBQyxPQUFPOzRDQVppQyxVQUFVO3NCQUEzRCxXQUFXO3VCQUFDLDBCQUEwQjs7c0JBQUcsS0FBSztnQkFFUCxTQUFTO3NCQUFoRCxXQUFXO3VCQUFDLHlCQUF5QjtnQkFDQSxPQUFPO3NCQUE1QyxXQUFXO3VCQUFDLHVCQUF1QjtnQkFDRSxPQUFPO3NCQUE1QyxXQUFXO3VCQUFDLHVCQUF1QjtnQkFXRCxPQUFPO3NCQUF6QyxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFJSSxTQUFTO3NCQUE3QyxZQUFZO3VCQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9uby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yICovXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUdfTUVOVSwgTWVudUJhc2UgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bYWctbWVudS1pdGVtXScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ21lbnUtaXRlbScsXG4gICAgJ1thdHRyLnJvbGVdJzogJ21lbnVpdGVtJyxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ2lzU2VsZWN0ZWQgPT09IHRydWUgPyAwIDogLTEnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNZW51SXRlbURpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubWVudS1pdGVtLXNlbGVjdGVkJykgQElucHV0KCkgaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWVudS1pdGVtLXJvdW5kZWQnKSBpc1JvdW5kZWQgPSB0aGlzLm1lbnUuaXNSb3VuZGVkO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1lbnUtaXRlbS1zbWFsbCcpIGlzU21hbGwgPSB0aGlzLm1lbnUuc2l6ZSA9PT0gJ3NtYWxsJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tZW51LWl0ZW0tbGFyZ2UnKSBpc0xhcmdlID0gdGhpcy5tZW51LnNpemUgPT09ICdsYXJnZSc7XG5cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ/LmRpc2FibGVkID8/IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PixcbiAgICBASW5qZWN0KEFHX01FTlUpIHByaXZhdGUgbWVudTogTWVudUJhc2VcbiAgKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljaygpIHtcbiAgICB0aGlzLm1lbnUuaGFuZGxlSXRlbUNsaWNrKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25LZXlkb3duKGV2OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgc3dpdGNoIChldi5rZXkpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgLy8gRXNzZW50aWFsbHksIGNvbnZlcnQgRW50ZXIgaW50byBhIGNsaWNrIGV2ZW50LCBhcyBjbGlja3MgYWxyZWFkeSBoYXZlIHRoZSBzcGVjJ2QgYmVoYXZpb3JcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIHRoaXMubWVudS5jbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgIC8vIFRyYXAgdGFicyBieSBicmVha2luZywgYW5kIGFsbG93aW5nIGBldi5wcmV2ZW50RGVmYXVsdGAgdG8gYmUgY2FsbGVkLlxuICAgICAgICAvLyBUaGUgbWVudSBpcyBpbiBhbiBvcGVuIHN0YXRlIGFuZCBmb2N1cyBpcyB0cmFwcGVkLlxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRoZSBvdGhlciBrZXlkb3duIGV2ZW50cyBvbiBhIG1lbnUgaXRlbSByZXF1aXJlIGtub3dsZWRnZSBvZiB0aGUgbGlzdCBvZiBBTEwgbWVudSBpdGVtcyAoZS5nLiBIb21lIGtleSksXG4gICAgLy8gc28gd2UgdXNlIHRoZSBgTWVudUNvbXBvbmVudGAgcmVmZXJlbmNlIG9idGFpbmVkIHZpYSBBbmd1bGFyIERJIHRvIGNhbGwgYGZpbmRDaGlsZEhhbmRsZUZvY3VzYCwgZm9yd2FyZGluZ1xuICAgIC8vIHRoZSBldmVudCBhbmQgYSByZWZlcmVuY2UgdG8gdGhpcyBjb21wb25lbnQgdG8gdGhlIGBNZW51Q29tcG9uZW50YFxuICAgIHRoaXMubWVudS5maW5kQ2hpbGRIYW5kbGVGb2N1cyhldiwgdGhpcyk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuIl19