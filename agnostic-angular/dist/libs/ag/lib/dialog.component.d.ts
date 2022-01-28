import { TemplateRef, EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClassNamesShape, closeButtonPositionType, roleType } from 'angular-a11y-dialog';
import * as i0 from "@angular/core";
export declare class DialogComponent implements OnInit {
    mounted: BehaviorSubject<boolean>;
    titleTemplate: TemplateRef<HTMLElement>;
    titleContent: any;
    main: any;
    mainTemplate: TemplateRef<HTMLElement>;
    closeButtonFirstTemplate: TemplateRef<HTMLElement>;
    closeButtonFirst: any;
    closeButtonLastTemplate: TemplateRef<HTMLElement>;
    closeButtonLast: any;
    id: string;
    dialogRoot?: string;
    role: roleType;
    titleId?: string;
    closeButtonLabel: string;
    closeButtonPosition: closeButtonPositionType;
    classNames: ClassNamesShape;
    isAnimationFadeIn?: boolean;
    isAnimationSlideUp?: boolean;
    instance: EventEmitter<any>;
    assignDialogInstance(instance: any): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogComponent, "ag-dialog", never, { "titleTemplate": "titleTemplate"; "mainTemplate": "mainTemplate"; "closeButtonFirstTemplate": "closeButtonFirstTemplate"; "closeButtonLastTemplate": "closeButtonLastTemplate"; "id": "id"; "dialogRoot": "dialogRoot"; "role": "role"; "titleId": "titleId"; "closeButtonLabel": "closeButtonLabel"; "closeButtonPosition": "closeButtonPosition"; "classNames": "classNames"; "isAnimationFadeIn": "isAnimationFadeIn"; "isAnimationSlideUp": "isAnimationSlideUp"; }, { "instance": "instance"; }, ["titleContent", "main", "closeButtonFirst", "closeButtonLast"], never>;
}
