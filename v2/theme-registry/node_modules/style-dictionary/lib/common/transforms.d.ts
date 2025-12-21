/**
 * @param {Token} token
 * @param {Config} options
 * @returns {boolean}
 */
export function isColor(token: Token, options: Config): boolean;
declare const _default: {
    /**
     * Adds: category, type, item, subitem, and state on the attributes object based on the location in the style dictionary.
     *
     * ```js
     * // Matches: all
     * // Returns:
     * {
     *   "category": "color",
     *   "type": "background",
     *   "item": "button",
     *   "subitem": "primary",
     *   "state": "active"
     * }
     * ```
     *
     * @memberof Transforms
     */
    "attribute/cti": {
        type: "attribute";
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken) => Record<string, string> & Record<string, unknown>;
    };
    /**
     * Adds: hex, hsl, hsv, rgb, red, blue, green.
     *
     * ```js
     * // Matches: token.type === 'color'
     * // Returns
     * {
     *   "hex": "009688",
     *   "rgb": {"r": 0, "g": 150, "b": 136, "a": 1},
     *   "hsl": {"h": 174.4, "s": 1, "l": 0.294, "a": 1},
     *   "hsv": {"h": 174.4, "s": 1, "l": 0.588, "a": 1},
     * }
     * ```
     *
     * @memberof Transforms
     */
    "attribute/color": {
        type: "attribute";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => {
            hex: string;
            rgb: Color.ColorFormats.RGBA;
            hsl: Color.ColorFormats.HSLA;
            hsv: Color.ColorFormats.HSVA;
        };
    };
    /**
     * Creates a human-friendly name
     *
     * ```js
     * // Matches: All
     * // Returns:
     * "button primary"
     * ```
     *
     * @memberof Transforms
     */
    "name/human": {
        type: "name";
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken) => string;
    };
    /**
     * Creates a camel case name. If you define a prefix on the platform in your config, it will prepend with your prefix
     *
     * ```js
     * // Matches: all
     * // Returns:
     * "colorBackgroundButtonPrimaryActive"
     * "prefixColorBackgroundButtonPrimaryActive"
     * ```
     *
     * @memberof Transforms
     */
    "name/camel": {
        type: "name";
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig) => string;
    };
    /**
     * Creates a kebab case name. If you define a prefix on the platform in your config, it will prepend with your prefix
     *
     * ```js
     * // Matches: all
     * // Returns:
     * "color-background-button-primary-active"
     * "prefix-color-background-button-primary-active"
     * ```
     *
     * @memberof Transforms
     */
    "name/kebab": {
        type: "name";
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig) => string;
    };
    /**
     * Creates a snake case name. If you define a prefix on the platform in your config, it will prepend with your prefix
     *
     * ```js
     * // Matches: all
     * // Returns:
     * "color_background_button_primary_active"
     * "prefix_color_background_button_primary_active"
     * ```
     *
     * @memberof Transforms
     */
    "name/snake": {
        type: "name";
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig) => string;
    };
    /**
     * Creates a constant-style name based on the full CTI of the token. If you define a prefix on the platform in your config, it will prepend with your prefix
     *
     * ```js
     * // Matches: all
     * // Returns:
     * "COLOR_BACKGROUND_BUTTON_PRIMARY_ACTIVE"
     * "PREFIX_COLOR_BACKGROUND_BUTTON_PRIMARY_ACTIVE"
     * ```
     *
     * @memberof Transforms
     */
    "name/constant": {
        type: "name";
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig) => string;
    };
    /**
     * Creates a Pascal case name. If you define a prefix on the platform in your config, it will prepend with your prefix
     *
     * ```js
     * // Matches: all
     * // Returns:
     * "ColorBackgroundButtonPrimaryActive"
     * "PrefixColorBackgroundButtonPrimaryActive"
     * ```
     *
     * @memberof Transforms
     */
    "name/pascal": {
        type: "name";
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig) => string;
    };
    /**
     * Transforms the value into an RGB string
     *
     * ```js
     * // Matches: token.type === 'color'
     * // Returns:
     * "rgb(0, 150, 136)"
     * ```
     *
     * @memberof Transforms
     */
    "color/rgb": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into an HSL string or HSLA if alpha is present. Better browser support than color/hsl-4
     *
     * ```js
     * // Matches: token.type === 'color'
     * // Returns:
     * "hsl(174, 100%, 29%)"
     * "hsl(174, 100%, 29%, .5)"
     * ```
     *
     * @memberof Transforms
     */
    "color/hsl": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into an HSL string, using fourth argument if alpha is present.
     *
     * ```js
     * // Matches: token.type === 'color'
     * // Returns:
     * "hsl(174 100% 29%)"
     * "hsl(174 100% 29% / .5)"
     * ```
     *
     * @memberof Transforms
     */
    "color/hsl-4": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into a 6-digit (if alpha is undefined or 1.0) or 8-digit hex string
     *
     * ```js
     * // Matches: token.type === 'color'
     * // Returns:
     * "#009688DE"
     * ```
     *
     * @memberof Transforms
     */
    "color/hex": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into an 8-digit hex string
     *
     * ```js
     * // Matches: token.type === 'color'
     * // Returns:
     * "#009688ff"
     * ```
     * @deprecated use colorHex ('color/hex') instead, which supports hex8 now.
     * @memberof Transforms
     */
    "color/hex8": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into an 8-digit hex string for Android because they put the alpha channel first
     *
     * ```js
     * // Matches: token.type === 'color'
     * // Returns:
     * "#ff009688"
     * ```
     *
     * @memberof Transforms
     */
    "color/hex8android": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into a Color class for Compose
     *
     * ```kotlin
     * // Matches: token.type === 'color'
     * // Returns:
     * Color(0xFF009688)
     * ```
     *
     * @memberof Transforms
     */
    "color/composeColor": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into an UIColor class for iOS
     *
     * ```objective-c
     * // Matches: token.type === 'color'
     * // Returns:
     * [UIColor colorWithRed:0.114f green:0.114f blue:0.114f alpha:1.000f]
     * ```
     *
     * @memberof Transforms
     */
    "color/UIColor": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into an UIColor swift class for iOS
     *
     * ```swift
     * // Matches: token.type === 'color'
     * // Returns:
     * UIColor(red: 0.667, green: 0.667, blue: 0.667, alpha: 0.6)
     * ```
     *
     * @memberof Transforms
     */
    "color/UIColorSwift": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into an UIColor swift class for iOS
     *
     * ```swift
     * // Matches: token.type === 'color'
     * // Returns:
     * Color(red: 0.667, green: 0.667, blue: 0.667, opacity: 0.6)
     * ```
     *
     * @memberof Transforms
     */
    "color/ColorSwiftUI": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into a hex or rgb string depending on if it has transparency
     *
     * ```css
     * // Matches: token.type === 'color'
     * // Returns:
     * #000000
     * rgba(0,0,0,0.5)
     * ```
     *
     * @memberof Transforms
     */
    "color/css": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     *
     * Transforms a color into an object with red, green, blue, and alpha
     * attributes that are floats from 0 - 1. This object is how Sketch stores
     * colors.
     *
     * ```js
     * // Matches: token.type === 'color'
     * // Returns:
     * {
     *   red: 0.5,
     *   green: 0.5,
     *   blue: 0.5,
     *   alpha: 1
     * }
     * ```
     * @memberof Transforms
     */
    "color/sketch": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => {
            red: string;
            green: string;
            blue: string;
            alpha: number;
        };
    };
    /**
     * Transforms the value into a scale-independent pixel (sp) value for font sizes on Android. It will not scale the number.
     *
     * ```js
     * // Matches: token.type === 'fontSize'
     * // Returns:
     * "10.0sp"
     * ```
     *
     * @memberof Transforms
     */
    "size/sp": {
        type: "value";
        filter: typeof isFontSize;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into a density-independent pixel (dp) value for non-font sizes on Android. It will not scale the number.
     *
     * ```js
     * // Matches: token.type === 'dimension'
     * // Returns:
     * "10.0dp"
     * ```
     *
     * @memberof Transforms
     */
    "size/dp": {
        type: "value";
        filter: typeof isDimension;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into a useful object ( for React Native support )
     *
     * ```js
     * // Matches: token.type === 'dimension'
     * // Returns:
     * {
     *  original: "10px",
     *  number: 10,
     *  decimal: 0.1, // 10 divided by 100
     *  scale: 160, // 10 times 16
     * }
     * ```
     *
     * @memberof Transforms
     */
    "size/object": {
        type: "value";
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => {
            original: any;
            number: number;
            decimal: number;
            scale: number;
        };
    };
    /**
     * Transforms the value from a REM size on web into a scale-independent pixel (sp) value for font sizes on Android. It WILL scale the number by a factor of 16 (or the value of 'basePxFontSize' on the platform in your config).
     *
     * ```js
     * // Matches: token.type === 'fontSize'
     * // Returns:
     * "16.0sp"
     * ```
     *
     * @memberof Transforms
     */
    "size/remToSp": {
        type: "value";
        filter: typeof isFontSize;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value from a REM size on web into a density-independent pixel (dp) value for non font-sizes on Android. It WILL scale the number by a factor of 16 (or the value of 'basePxFontSize' on the platform in your config).
     *
     * ```js
     * // Matches: token.type === 'dimension'
     * // Returns:
     * "16.0dp"
     * ```
     *
     * @memberof Transforms
     */
    "size/remToDp": {
        type: "value";
        filter: typeof isDimension;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Adds 'px' to the end of the number. Does not scale the number
     *
     * ```js
     * // Matches: token.type === 'dimension'
     * // Returns:
     * "10px"
     * ```
     *
     * @memberof Transforms
     */
    "size/px": {
        type: "value";
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Adds 'rem' to the end of the number. Does not scale the number
     *
     * ```js
     * // Matches: token.type === 'dimension'
     * // Returns:
     * "10rem"
     * ```
     *
     * @memberof Transforms
     */
    "size/rem": {
        type: "value";
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => any;
    };
    /**
     * Scales the number by 16 (or the value of 'basePxFontSize' on the platform in your config) and adds 'pt' to the end.
     *
     * ```js
     * // Matches: token.type === 'dimension'
     * // Returns:
     * "16pt"
     * ```
     *
     * @memberof Transforms
     */
    "size/remToPt": {
        type: "value";
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value from a REM size on web into a scale-independent pixel (sp) value for font sizes in Compose. It WILL scale the number by a factor of 16 (or the value of 'basePxFontSize' on the platform in your config).
     *
     * ```kotlin
     * // Matches: token.type === 'fontSize'
     * // Returns:
     * "16.0.sp"
     * ```
     *
     * @memberof Transforms
     */
    "size/compose/remToSp": {
        type: "value";
        filter: typeof isFontSize;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value from a REM size on web into a density-independent pixel (dp) value for font sizes in Compose. It WILL scale the number by a factor of 16 (or the value of 'basePxFontSize' on the platform in your config).
     *
     * ```kotlin
     * // Matches: token.type === 'dimension'
     * // Returns:
     * "16.0.dp"
     * ```
     *
     * @memberof Transforms
     */
    "size/compose/remToDp": {
        type: "value";
        filter: typeof isDimension;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Adds the .em Compose extension to the end of a number. Does not scale the value
     *
     * ```kotlin
     * // Matches: token.type === 'fontSize'
     * // Returns:
     * "16.0em"
     * ```
     *
     * @memberof Transforms
     */
    "size/compose/em": {
        type: "value";
        filter: typeof isFontSize;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Scales the number by 16 (or the value of 'basePxFontSize' on the platform in your config) to get to points for Swift and initializes a CGFloat
     *
     * ```js
     * // Matches: token.type === 'dimension'
     * // Returns: "CGFloat(16.00)""
     * ```
     *
     * @memberof Transforms
     */
    "size/swift/remToCGFloat": {
        type: "value";
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Scales the number by 16 (or the value of 'basePxFontSize' on the platform in your config) and adds 'px' to the end.
     *
     * ```js
     * // Matches: token.type === 'dimension'
     * // Returns:
     * "16px"
     * ```
     *
     * @memberof Transforms
     */
    "size/remToPx": {
        type: "value";
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Scales non-zero numbers to rem, and adds 'rem' to the end. If you define a "basePxFontSize" on the platform in your config, it will be used to scale the value, otherwise 16 (default web font size) will be used.
     *
     * ```js
     * // Matches: token.type === 'dimension'
     * // Returns:
     * "0"
     * "1rem"
     * ```
     *
     * @memberof Transforms
     */
    "size/pxToRem": {
        type: "value";
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Takes a unicode point and transforms it into a form CSS can use.
     *
     * ```js
     * // Matches: token.type === 'html'
     * // Returns:
     * "'\\E001'"
     * ```
     *
     * @memberof Transforms
     */
    "html/icon": {
        type: "value";
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => any;
    };
    /**
     * Wraps the value in a single quoted string
     *
     * ```js
     * // Matches: token.type === 'content'
     * // Returns:
     * "'string'"
     * ```
     *
     * @memberof Transforms
     */
    "content/quote": {
        type: "value";
        filter: typeof isContent;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Wraps the value in a double-quoted string and prepends an '@' to make a string literal.
     *
     * ```objective-c
     * // Matches: token.type === 'content'
     * // Returns:
     * \@"string"
     * ```
     *
     * @memberof Transforms
     */
    "content/objC/literal": {
        type: "value";
        filter: typeof isContent;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Wraps the value in a double-quoted string to make a string literal.
     *
     * ```swift
     * // Matches: token.type === 'content'
     * // Returns:
     * "string"
     * ```
     *
     * @memberof Transforms
     */
    "content/swift/literal": {
        type: "value";
        filter: typeof isContent;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Assumes a time in miliseconds and transforms it into a decimal
     *
     * ```js
     * // Matches: token.type === 'time'
     * // Returns:
     * "0.5s"
     * ```
     *
     * @memberof Transforms
     */
    "time/seconds": {
        type: "value";
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Turns fontFamily tokens into valid CSS string values
     * https://design-tokens.github.io/community-group/format/#font-family
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     *
     * ```js
     * // Matches: token.type === 'fontFamily'
     * // Returns:
     * "'Arial Narrow', Arial, sans-serif"
     * ```.
     *
     * @memberof Transforms
     */
    "fontFamily/css": {
        type: "value";
        transitive: true;
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => any;
    };
    /**
     * Turns fontFamily tokens into valid CSS string values
     * https://design-tokens.github.io/community-group/format/#font-family
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     *
     * ```js
     * // Matches: token.type === 'fontFamily'
     * // Returns:
     * "'Arial Narrow', Arial, sans-serif"
     * ```.
     *
     * @memberof Transforms
     */
    "cubicBezier/css": {
        type: "value";
        transitive: true;
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => any;
    };
    /**
     * Turns strokeStyle object-value tokens into stringified CSS fallback
     * https://design-tokens.github.io/community-group/format/#stroke-style
     * https://design-tokens.github.io/community-group/format/#example-fallback-for-object-stroke-style
     * CSS does not allow detailed control of the dash pattern or line caps on dashed borders, so we use dashed fallback
     * ```js
     * // Matches: token.type === 'border'
     * // Returns:
     * "dashed"
     * ```.
     *
     * @memberof Transforms
     */
    "strokeStyle/css/shorthand": {
        type: "value";
        transitive: true;
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => any;
    };
    /**
     * Turns border tokens object-value into stringified CSS shorthand
     * https://design-tokens.github.io/community-group/format/#border
     *
     * ```js
     * // Matches: token.type === 'border'
     * // Returns:
     * "2px solid #000000"
     * ```.
     *
     * @memberof Transforms
     */
    "border/css/shorthand": {
        type: "value";
        transitive: true;
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => any;
    };
    /**
     * Turns typography tokens object-value into stringified CSS shorthand
     * https://design-tokens.github.io/community-group/format/#typography
     *
     * Available props within typography has been extended here
     * to include those available in CSS font shorthand:
     * https://developer.mozilla.org/en-US/docs/Web/CSS/font
     *
     * ```js
     * // Matches: token.type === 'typography'
     * // Returns:
     * "500 20px/1.5 Arial"
     * ```.
     *
     * @memberof Transforms
     */
    "typography/css/shorthand": {
        type: "value";
        transitive: true;
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, platform: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => any;
    };
    /**
     * Turns transition tokens object-value into stringified CSS shorthand
     * https://design-tokens.github.io/community-group/format/#border
     *
     * ```js
     * // Matches: token.type === 'transition'
     * // Returns:
     * "200ms linear 50ms"
     * ```.
     *
     * @memberof Transforms
     */
    "transition/css/shorthand": {
        type: "value";
        transitive: true;
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => any;
    };
    /**
     * Turns shadow tokens object-value into stringified CSS shorthand
     * https://design-tokens.github.io/community-group/format/#shadow
     *
     * ```js
     * // Matches: token.type === 'shadow'
     * // Returns:
     * "inset 2px 4px 10px 5px #000000"
     * ```.
     *
     * @memberof Transforms
     */
    "shadow/css/shorthand": {
        type: "value";
        transitive: true;
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => any;
    };
    /**
     * Wraps the value in a CSS url() function https://developer.mozilla.org/en-US/docs/Web/CSS/url
     *
     * ```js
     * // Matches: token.type === 'asset'
     * // Returns:
     * url("https://www.example.com/style.css")
     * ```
     *
     * @memberof Transforms
     */
    "asset/url": {
        type: "value";
        filter: typeof isAsset;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Wraps the value in a double-quoted string and prepends an '@' to make a string literal.
     *
     * ```js
     * // Matches: token.type === 'asset'
     * // Returns:
     * 'IyBlZGl0b3Jjb25maWcub3JnCnJvb3QgPSB0cnVlCgpbKl0KaW5kZW50X3N0eWxlID0gc3BhY2UKaW5kZW50X3NpemUgPSAyCmVuZF9vZl9saW5lID0gbGYKY2hhcnNldCA9IHV0Zi04CnRyaW1fdHJhaWxpbmdfd2hpdGVzcGFjZSA9IHRydWUKaW5zZXJ0X2ZpbmFsX25ld2xpbmUgPSB0cnVlCgpbKi5tZF0KdHJpbV90cmFpbGluZ193aGl0ZXNwYWNlID0gZmFsc2U='
     * ```
     *
     * @memberof Transforms
     */
    "asset/base64": {
        type: "value";
        filter: typeof isAsset;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config, vol: import("../../types/Volume.js").Volume | undefined) => Promise<string>;
    };
    /**
     * Prepends the local file path
     *
     * ```js
     * // Matches: token.type === 'asset'
     * // Returns:
     * "path/to/file/asset.png"
     * ```
     *
     * @memberof Transforms
     */
    "asset/path": {
        type: "value";
        filter: typeof isAsset;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Wraps the value in a double-quoted string and prepends an '@' to make a string literal.
     *
     * ```objective-c
     * // Matches: token.type === 'asset'
     * // Returns: \@"string"
     * ```
     *
     * @memberof Transforms
     */
    "asset/objC/literal": {
        type: "value";
        filter: typeof isAsset;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Wraps the value in a double-quoted string to make a string literal.
     *
     * ```swift
     * // Matches: token.type === 'asset'
     * // Returns: "string"
     * ```
     *
     * @memberof Transforms
     */
    "asset/swift/literal": {
        type: "value";
        filter: typeof isAsset;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Transforms the value into a Flutter Color object using 8-digit hex with the alpha chanel on start
     *  ```js
     *  // Matches: token.type === 'color'
     *  // Returns:
     *  Color(0xFF00FF5F)
     *  ```
     *  @memberof Transforms
     *
     */
    "color/hex8flutter": {
        type: "value";
        filter: typeof isColor;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Wraps the value in a double-quoted string to make a string literal.
     *
     * ```dart
     * // Matches: token.type === 'content'
     * // Returns: "string"
     * ```
     *
     * @memberof Transforms
     */
    "content/flutter/literal": {
        type: "value";
        filter: typeof isContent;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Wraps the value in a double-quoted string to make a string literal.
     *
     * ```dart
     * // Matches: token.type === 'asset'
     * // Returns: "string"
     * ```
     *
     * @memberof Transforms
     */
    "asset/flutter/literal": {
        type: "value";
        filter: typeof isAsset;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, _: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
    /**
     * Scales the number by 16 (or the value of 'basePxFontSize' on the platform in your config) to get to points for Flutter
     *
     * ```dart
     * // Matches: token.type === 'dimension'
     * // Returns: 16.00
     * ```
     *
     * @memberof Transforms
     */
    "size/flutter/remToDouble": {
        type: "value";
        filter: (token: import("../../types/DesignToken.d.ts").TransformedToken, options: import("../../types/Config.d.ts").Config) => boolean;
        transform: (token: import("../../types/DesignToken.d.ts").TransformedToken, config: import("../../types/Config.d.ts").PlatformConfig, options: import("../../types/Config.d.ts").Config) => string;
    };
};
export default _default;
export type Transform = import("../../types/Transform.d.ts").Transform;
export type Token = import("../../types/DesignToken.d.ts").TransformedToken;
export type PlatformConfig = import("../../types/Config.d.ts").PlatformConfig;
export type Config = import("../../types/Config.d.ts").Config;
import Color from 'tinycolor2';
/**
 * @param {Token} token
 * @param {Config} options
 * @returns {boolean}
 */
declare function isFontSize(token: Token, options: Config): boolean;
/**
 * @param {Token} token
 * @param {Config} options
 * @returns {boolean}
 */
declare function isDimension(token: Token, options: Config): boolean;
/**
 * @param {Token} token
 * @param {Config} options
 * @returns {boolean}
 */
declare function isContent(token: Token, options: Config): boolean;
/**
 * @param {Token} token
 * @param {Config} options
 * @returns {boolean}
 */
declare function isAsset(token: Token, options: Config): boolean;
