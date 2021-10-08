import { AfterContentInit, QueryList, TemplateRef, EventEmitter } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';
import * as i0 from "@angular/core";
export declare class TabsComponent implements AfterContentInit {
    tabPanels: QueryList<TabPanelComponent>;
    size?: string;
    isSkinned?: boolean;
    isBorderless?: boolean;
    tabButtonTemplate: TemplateRef<any> | undefined;
    selectionChanged: EventEmitter<any>;
    ngAfterContentInit(): void;
    selectPanel(tabPanel: TabPanelComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsComponent, "ag-tabs", never, { "size": "size"; "isSkinned": "isSkinned"; "isBorderless": "isBorderless"; }, { "selectionChanged": "selectionChanged"; }, ["tabButtonTemplate", "tabPanels"], ["*"]>;
}
