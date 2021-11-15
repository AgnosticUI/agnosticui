import * as i0 from "@angular/core";
export interface BreadcrumbRoute {
    label: string;
    url?: string;
}
export declare class BreadcrumbItemComponent {
    route: BreadcrumbRoute;
    isLast?: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbItemComponent, "ag-breadcrumb-item", never, { "route": "route"; "isLast": "isLast"; }, {}, never, never>;
}
export declare class BreadcrumbComponent {
    type: 'arrow' | 'slash' | 'bullet';
    routes: BreadcrumbRoute[];
    get breadcrumbClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "ag-breadcrumb", never, { "type": "type"; "routes": "routes"; }, {}, never, never>;
}
