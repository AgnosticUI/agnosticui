export interface Skin {
  id: string;
  label: string;
  swatch: string;
}

export declare const SKINS: Skin[];
export declare function applySkin(skinId: string): void;
export declare function applyTheme(dark: boolean): void;
export declare function copySkinCSS(skinId: string): Promise<boolean>;
export declare function restorePrefs(): void;
