import { OnInit } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ToastsComponent implements OnInit {
    mounted: BehaviorSubject<boolean>;
    portalTarget: string;
    portalRootSelector?: string;
    horizontalPosition: 'start' | 'center' | 'end';
    verticalPosition: 'top' | 'bottom';
    get toastClasses(): string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastsComponent, "ag-toasts", never, { "portalRootSelector": "portalRootSelector"; "horizontalPosition": "horizontalPosition"; "verticalPosition": "verticalPosition"; }, {}, never, ["*"]>;
}
