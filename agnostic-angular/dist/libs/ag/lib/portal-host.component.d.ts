import { AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PortalHostComponent implements AfterViewInit, OnDestroy {
    private viewContainerRef;
    portalTemplateRef: any;
    private embeddedViewRef;
    teleportTo: string;
    constructor(viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PortalHostComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PortalHostComponent, "ag-portal-host", never, { "teleportTo": "teleportTo"; }, {}, never, ["*"]>;
}
