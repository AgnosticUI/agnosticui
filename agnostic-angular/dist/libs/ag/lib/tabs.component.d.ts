import { AfterContentInit, QueryList, EventEmitter, ElementRef, TemplateRef } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';
import * as i0 from "@angular/core";
export declare class TabsComponent implements AfterContentInit {
    tabPanels: QueryList<TabPanelComponent>;
    tabButtonTemplate?: TemplateRef<any>;
    size?: string;
    disabledOptions?: string[];
    isDisabled?: boolean;
    isSkinned?: boolean;
    isBorderless?: boolean;
    isVerticalOrientation?: boolean;
    tabButtonRefs: QueryList<ElementRef>;
    selectionChanged: EventEmitter<any>;
    ngAfterContentInit(): void;
    selectPanel(tabPanel: TabPanelComponent): void;
    focusTab(index: number, direction?: string): void;
    handleKeyDown(ev: KeyboardEvent, index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsComponent, "ag-tabs", never, { "tabButtonTemplate": "tabButtonTemplate"; "size": "size"; "disabledOptions": "disabledOptions"; "isDisabled": "isDisabled"; "isSkinned": "isSkinned"; "isBorderless": "isBorderless"; "isVerticalOrientation": "isVerticalOrientation"; }, { "selectionChanged": "selectionChanged"; }, ["tabPanels"], ["*"]>;
}
