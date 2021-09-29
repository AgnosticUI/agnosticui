/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").FC<import("../Input").InputProps>;
    on: {
        blur: import("@storybook/addon-actions").HandlerFunction;
        change: import("@storybook/addon-actions").HandlerFunction;
        focus: import("@storybook/addon-actions").HandlerFunction;
    };
};
export default _default;
export declare const AllInputs: () => JSX.Element;
export declare const Textareas: () => JSX.Element;
export declare const ErrorAndHelpText: () => JSX.Element;
