import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface NavigationLabels {
    first: string;
    previous: string;
    next: string;
    last: string;
}
export declare class PaginationComponent {
    justify?: 'start' | 'center' | 'end' | '';
    ariaLabel?: string;
    current: number;
    pages: any[];
    isBordered?: boolean;
    isFirstLast?: boolean;
    navigationLabels?: NavigationLabels;
    onPageChange: EventEmitter<number>;
    onFirst(): void;
    onPrevious(): void;
    onNext(): void;
    onLast(): void;
    handleClick(page: number): void;
    isOnFirst(): boolean;
    getLastPageNumber(): any;
    isOnLast(): boolean;
    get paginationContainerClasses(): string;
    get paginationClasses(): string;
    get paginationItemFirstClasses(): string;
    get paginationItemLastClasses(): string;
    get paginationButtonClass(): string;
    paginationItemClassesForPage(page: number | string): string;
    ariaForCurrentPage(page: number): string;
    firstLabel(): string;
    previousLabel(): string;
    nextLabel(): string;
    lastLabel(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "ag-pagination", never, { "justify": "justify"; "ariaLabel": "ariaLabel"; "current": "current"; "pages": "pages"; "isBordered": "isBordered"; "isFirstLast": "isFirstLast"; "navigationLabels": "navigationLabels"; }, { "onPageChange": "onPageChange"; }, never, never>;
}
