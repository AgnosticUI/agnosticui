import { TemplateRef, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export interface TableHeaderCell {
    label: string;
    key: string;
    sortable?: boolean;
    width?: string;
    sortFn?: (cellLeft: any, cellRight: any) => -1 | 0 | 1;
}
export declare class TableComponent implements OnInit {
    rowRenderTemplate?: TemplateRef<any>;
    headers: TableHeaderCell[];
    rows: any[];
    caption: string;
    captionPosition?: 'top' | 'bottom' | 'end' | 'hidden';
    isUppercasedHeaders?: boolean;
    isBordered?: boolean;
    isBorderless?: boolean;
    isStriped?: boolean;
    isHoverable?: boolean;
    isStacked?: boolean;
    tableSize?: '' | 'small' | 'large' | 'xlarge';
    responsiveSize?: '' | 'small' | 'medium' | 'large' | 'xlarge';
    rows$: BehaviorSubject<any[]>;
    private sortingKey$;
    private direction$;
    constructor();
    preserveOriginalOrder: (a: any, b: any) => any;
    getColByName: (row: any, name: any) => any;
    internalSort(rowLeft: any, rowRight: any): 0 | 1 | -1;
    descendingSort(row1: any, row2: any): number;
    ngOnInit(): void;
    handleSortClicked(headerKey: string): void;
    getSortingClassesFor(headerKey: string): string;
    getSortDirectionFor(headerKey: string): "none" | "ascending" | "descending";
    get captionClasses(): string;
    get tableResponsiveClasses(): string;
    get tableClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "ag-table", never, { "rowRenderTemplate": "rowRenderTemplate"; "headers": "headers"; "rows": "rows"; "caption": "caption"; "captionPosition": "captionPosition"; "isUppercasedHeaders": "isUppercasedHeaders"; "isBordered": "isBordered"; "isBorderless": "isBorderless"; "isStriped": "isStriped"; "isHoverable": "isHoverable"; "isStacked": "isStacked"; "tableSize": "tableSize"; "responsiveSize": "responsiveSize"; }, {}, never, never>;
}
