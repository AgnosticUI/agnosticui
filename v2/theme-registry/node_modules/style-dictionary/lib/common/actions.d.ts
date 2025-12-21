declare const _default: {
    /**
     * Action to copy images into appropriate android directories.
     *
     * @memberof Actions
     */
    "android/copyImages": {
        do: (dictionary: import("../../types/DesignToken.d.ts").Dictionary, config: import("../../types/Config.js").PlatformConfig, options: import("../../types/Config.js").Config, vol?: import("../../types/Volume.js").Volume) => Promise<void>;
        undo: (dictionary: import("../../types/DesignToken.d.ts").Dictionary, config: import("../../types/Config.js").PlatformConfig, options: import("../../types/Config.js").Config, vol?: import("../../types/Volume.js").Volume) => Promise<void>;
    };
    /**
     * Action that copies everything in the assets directory to a new assets directory in the build path of the platform.
     *
     * @memberof Actions
     */
    copy_assets: {
        do: (_: import("../../types/DesignToken.d.ts").Dictionary, config: import("../../types/Config.js").PlatformConfig, options: import("../../types/Config.js").Config, vol?: import("../../types/Volume.js").Volume) => Promise<void>;
        undo: (_: import("../../types/DesignToken.d.ts").Dictionary, config: import("../../types/Config.js").PlatformConfig, options: import("../../types/Config.js").Config, vol?: import("../../types/Volume.js").Volume) => Promise<void>;
    };
};
export default _default;
export type Dictionary = import("../../types/DesignToken.d.ts").Dictionary;
export type Action = import("../../types/Action.d.ts").Action;
export type Config = import("../../types/Config.js").PlatformConfig;
export type Token = import("../../types/DesignToken.d.ts").TransformedToken;
