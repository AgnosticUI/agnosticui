import { AccordionItem } from '../core/_Accordion';

export declare class AnimatedAccordionItem extends AccordionItem {
    static properties: {
        animationDuration: {
            type: NumberConstructor;
            attribute: string;
        };
        animationType: {
            type: StringConstructor;
            attribute: string;
        };
        respectReducedMotion: {
            type: BooleanConstructor;
            attribute: string;
        };
        open: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        headingLevel: {
            type: NumberConstructor;
            attribute: string;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    animationDuration: number;
    animationType: 'slide' | 'fade' | 'scale';
    respectReducedMotion: boolean;
    private _animatedId;
    constructor();
    static get styles(): import('lit').CSSResult[];
    connectedCallback(): void;
    render(): import('lit').TemplateResult<1>;
    private _renderAnimatedHeading;
    toggle(): void;
    /**
     * Animate to open state
     */
    animateOpen(): void;
    /**
     * Animate to closed state
     */
    animateClose(): void;
    /**
     * Set animation configuration
     */
    configureAnimation(options: {
        duration?: number;
        type?: 'slide' | 'fade' | 'scale';
        respectReducedMotion?: boolean;
    }): void;
}
export default AnimatedAccordionItem;
//# sourceMappingURL=AnimatedAccordion.d.ts.map