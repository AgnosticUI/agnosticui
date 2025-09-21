import { LitElement } from 'lit';
import { Placement } from '@floating-ui/dom';

export declare class Tooltip extends LitElement {
    static styles: import('lit').CSSResult;
    content: string;
    placement: Placement;
    distance: number;
    skidding: number;
    trigger: string;
    disabled: boolean;
    private _open;
    tooltipElement: HTMLElement | undefined;
    arrowElement: HTMLElement | undefined;
    private _cleanup;
    private _hideTimeout;
    constructor();
    firstUpdated(): void;
    private _setupEventListeners;
    disconnectedCallback(): void;
    private _setupARIA;
    private _removeEventListeners;
    private _handleMouseEnter;
    private _handleMouseLeave;
    private _handleFocus;
    private _handleBlur;
    private _handleClick;
    private _handleDocumentKeyDown;
    updated(changedProperties: Map<string, unknown>): void;
    private _startPositioning;
    private _stopPositioning;
    private _updatePosition;
    show: () => void;
    hide: () => void;
    toggle: () => void;
    render(): import('lit').TemplateResult<1>;
}
//# sourceMappingURL=_Tooltip.d.ts.map