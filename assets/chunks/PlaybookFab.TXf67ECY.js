import{_ as Va,p as U,v as Ua,c as D,o as M,j as l,a as K,F as na,B as Ia,n as ga,N as Na,t as $a,k as n,X as Ga,Z as aa,G as p,w as C,aj as Se,ao as Be,e as da,J as Ce,h as Me,x as Re,b as pa,T as Ha,ap as Te}from"./framework.DmF2n0Fc.js";import{m as X}from"./VueIcon.vue_vue_type_script_setup_true_lang-C2Sky3bU.BndYKofP.js";import{v as q}from"./VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.B6OQ6-gk.js";import{L as _e}from"./VueInput.vue_vue_type_script_setup_true_lang-BdQaWK_o.4k-hLi3s.js";import{c as xa}from"./createLucideIcon.U6K_rCrv.js";import{D as Pe}from"./download.B8lB6_ut.js";import{P as ja}from"./palette.E_aVf4sh.js";import{X as Oa}from"./x.DEkVNqM1.js";import"./Icon.CxPOY7rJ.js";import"./property-CemaeiRl.Cea_q1B7.js";import"./Button.CraZoLgR.js";import"./state-CovhUvdr.C-u8O0Fo.js";import"./query-BykXNUlT.Pm7lu9c1.js";import"./slot.CsrcmCtp.js";import"./form-control-utils.BYIX_mid.js";import"./face-mixin.MgCHLM8W.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=xa("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=xa("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=xa("image-plus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]),Ae={claymorphic:{light:`/**
 * Claymorphic Skin — Light Mode
 *
 * A warm, earthy palette with terracotta primary on cream neutrals.
 * Inspired by Claude's aesthetic.
 *
 * Activate by adding class="ag-skin-claymorphic" to <html>.
 * Load this file AFTER ag-tokens.css so the cascade overrides.
 */

:where(html).ag-skin-claymorphic {
  /* ── Primary color family ── */
  --ag-primary: #c96442;
  --ag-primary-fg: #000000;
  --ag-primary-dark: #b05730;
  --ag-primary-border: #e8c4b5;
  --ag-primary-background: #fdf0eb;
  --ag-primary-text: #b05730;

  /* ── Focus ring (terracotta-derived RGB) ── */
  --ag-focus: 201, 100, 66;
  --ag-focus-dark: #b05730;

  /* ── Semantic text ── */
  --ag-text-primary: #3d3929;
  --ag-text-secondary: #535146;
  --ag-text-muted: #83827d;
  --ag-text-primary-muted: #535146;

  /* ── Borders ── */
  --ag-border: #dad9d4;
  --ag-border-subtle: #ede9de;

  /* ── Backgrounds ── */
  --ag-background-primary: #faf9f5;
  --ag-background-secondary: #f5f4ee;
  --ag-background-tertiary: #ede9de;

  /* ── Border radius (clean, moderate) ── */
  --ag-radius-lg: 0.75rem;

  /* ── Shadows (soft, warm clay-like) ── */
  --ag-shadow-xs: 0 1px 2px 0 rgba(61, 57, 41, 0.05);
  --ag-shadow-sm: 0 1px 3px 0 rgba(61, 57, 41, 0.08);
  --ag-shadow-md: 0 2px 8px -1px rgba(61, 57, 41, 0.1);
  --ag-shadow-lg: 0 4px 16px -2px rgba(61, 57, 41, 0.1);
  --ag-shadow-xl: 0 8px 24px -4px rgba(61, 57, 41, 0.12);

  /* ── Rating ── */
  --ag-rating-filled-primary: #c96442;

  /* ── Terracotta palette (overrides blue palette for primary usage) ── */
  --ag-blue-50: #fdf0eb;
  --ag-blue-100: #f5d5c7;
  --ag-blue-200: #e8b8a3;
  --ag-blue-300: #db9a7e;
  --ag-blue-400: #d97757;
  --ag-blue-500: #c96442;
  --ag-blue-600: #b05730;
  --ag-blue-700: #8e4526;
  --ag-blue-800: #6c341c;
  --ag-blue-900: #4a2312;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #ede9de;
  --ag-neutral-text: #2c291d;
  --ag-neutral-border: #cfc9bc;
}`,dark:`/**
 * Claymorphic Skin — Dark Mode
 *
 * Dark-mode overrides for the Claymorphic terracotta/cream aesthetic.
 * Inspired by Claude's aesthetic.
 *
 * Activate by adding class="ag-skin-claymorphic" to <html>.
 * Load this file AFTER ag-tokens-dark.css so the cascade overrides.
 */

[data-theme="dark"].ag-skin-claymorphic {
  /* ── Primary color family (brightened for dark backgrounds) ── */
  --ag-primary: #d97757;
  --ag-primary-fg: #000000;
  --ag-primary-dark: #c96442;
  --ag-primary-border: #d97757;
  --ag-primary-background: #3a2218;
  --ag-primary-text: #f5d5c7;

  /* ── Focus ring (terracotta-derived RGB, brightened) ── */
  --ag-focus: 217, 119, 87;
  --ag-focus-dark: #e8b8a3;

  /* ── Semantic text ── */
  --ag-text-primary: #e5e2d8;
  --ag-text-secondary: #cbc7bc;
  --ag-text-muted: #9e9b92;
  --ag-text-primary-muted: #d9d5ca;

  /* ── Borders ── */
  --ag-border: #3d3b36;
  --ag-border-subtle: #524f48;

  /* ── Backgrounds ── */
  --ag-background-primary: #262624;
  --ag-background-secondary: #2e2c2a;
  --ag-background-tertiary: #3a3836;

  /* ── Border radius (matches light) ── */
  --ag-radius-lg: 0.75rem;

  /* ── Shadows (warm-tinted for dark mode) ── */
  --ag-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  --ag-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  --ag-shadow-md: 0 2px 8px -1px rgba(0, 0, 0, 0.3);
  --ag-shadow-lg: 0 4px 16px -2px rgba(0, 0, 0, 0.3);
  --ag-shadow-xl: 0 8px 24px -4px rgba(0, 0, 0, 0.35);

  /* ── Rating ── */
  --ag-rating-filled-primary: #d97757;

  /* ── Terracotta palette (overrides blue palette for primary usage) ── */
  --ag-blue-50: #f5d5c7;
  --ag-blue-100: #e8b8a3;
  --ag-blue-200: #db9a7e;
  --ag-blue-300: #d97757;
  --ag-blue-400: #c96442;
  --ag-blue-500: #b05730;
  --ag-blue-600: #8e4526;
  --ag-blue-700: #6c341c;
  --ag-blue-800: #4a2312;
  --ag-blue-900: #3a2218;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #363330;
  --ag-neutral-text: #f5f4ee;
  --ag-neutral-border: #524f48;
}`},"coffee-espresso":{light:`/**
 * Coffee Espresso Skin — Light Mode
 *
 * Rich warm browns with cream accents. Cozy editorial feel
 * inspired by artisan coffee shops and Notion-like warmth.
 *
 * Activate by adding class="ag-skin-coffee-espresso" to <html>.
 * Load this file AFTER ag-tokens.css so the cascade overrides.
 */

:where(html).ag-skin-coffee-espresso {
  /* ── Primary color family (espresso brown) ── */
  --ag-primary: #6f4e37;
  --ag-primary-dark: #5a3e2b;
  --ag-primary-border: #d4b89c;
  --ag-primary-background: #faf3ed;
  --ag-primary-text: #4a3322;

  /* ── Focus ring (coffee-derived RGB) ── */
  --ag-focus: 111, 78, 55;
  --ag-focus-dark: #5a3e2b;

  /* ── Semantic text ── */
  --ag-text-primary: #2c1e12;
  --ag-text-secondary: #5c4a3a;
  --ag-text-muted: #8c7a6a;
  --ag-text-primary-muted: #4a3828;

  /* ── Borders ── */
  --ag-border: #e6dbd0;
  --ag-border-subtle: #efe6dc;

  /* ── Backgrounds ── */
  --ag-background-primary: #fffcf8;
  --ag-background-secondary: #f8f2eb;
  --ag-background-tertiary: #f0e8df;

  /* ── Border radius (warm, moderate) ── */
  --ag-radius-lg: 0.75rem;

  /* ── Shadows (warm brown-tinted) ── */
  --ag-shadow-xs: 0 1px 3px 0 rgba(111, 78, 55, 0.06);
  --ag-shadow-sm: 0 1px 5px 0 rgba(111, 78, 55, 0.08);
  --ag-shadow-md: 0 2px 10px 0 rgba(111, 78, 55, 0.08);
  --ag-shadow-lg: 0 4px 18px -2px rgba(111, 78, 55, 0.1);
  --ag-shadow-xl: 0 8px 28px -4px rgba(111, 78, 55, 0.12);

  /* ── Rating ── */
  --ag-rating-filled: #d4a055;
  --ag-rating-filled-primary: #6f4e37;

  /* ── Coffee palette (overrides blue palette) ── */
  --ag-blue-50: #faf3ed;
  --ag-blue-100: #f0e0cc;
  --ag-blue-200: #d4b89c;
  --ag-blue-300: #c4a07c;
  --ag-blue-400: #a07850;
  --ag-blue-500: #6f4e37;
  --ag-blue-600: #5a3e2b;
  --ag-blue-700: #4a3322;
  --ag-blue-800: #362418;
  --ag-blue-900: #221610;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #efe6dc;
  --ag-neutral-text: #221610;
  --ag-neutral-border: #d4c4b4;
}`,dark:`/**
 * Coffee Espresso Skin — Dark Mode
 *
 * Dark-mode overrides for the Coffee Espresso warm brown aesthetic.
 * Deep espresso backgrounds with high-contrast cream and mocha highlights.
 *
 * Activate by adding class="ag-skin-coffee-espresso" to <html>.
 * Load this file AFTER ag-tokens-dark.css so the cascade overrides.
 */

[data-theme="dark"].ag-skin-coffee-espresso {
  /* ── Primary color family (brightened for dark backgrounds) ── */
  --ag-primary: #d4b494;
  --ag-primary-fg: #000000;
  --ag-primary-dark: #b8926c;
  --ag-primary-border: #8c6648;
  --ag-primary-background: #221610;
  --ag-primary-text: #f0decb;

  /* ── Focus ring (coffee-derived RGB, brightened for high visibility) ── */
  --ag-focus: 224, 192, 158;
  --ag-focus-dark: #f0decb;

  /* ── Semantic text ── */
  --ag-text-primary: #f5ece3;
  --ag-text-secondary: #e8dcd0;
  --ag-text-muted: #b5a492;
  --ag-text-primary-muted: #efe4d8;

  /* ── Borders ── */
  --ag-border: #3d2e22;
  --ag-border-subtle: #5a4434;

  /* ── Backgrounds ── */
  --ag-background-primary: #120c08;
  --ag-background-secondary: #1a120c;
  --ag-background-tertiary: #2e2218;

  /* ── Border radius (matches light) ── */
  --ag-radius-lg: 0.75rem;

  /* ── Shadows (warm brown-tinted for dark mode) ── */
  --ag-shadow-xs: 0 1px 3px 0 rgba(196, 160, 124, 0.06);
  --ag-shadow-sm: 0 1px 5px 0 rgba(196, 160, 124, 0.08);
  --ag-shadow-md: 0 2px 10px 0 rgba(196, 160, 124, 0.08);
  --ag-shadow-lg: 0 4px 18px -2px rgba(196, 160, 124, 0.1);
  --ag-shadow-xl: 0 8px 28px -4px rgba(196, 160, 124, 0.12);

  /* ── Rating ── */
  --ag-rating-filled: #d4a055;
  --ag-rating-filled-primary: #d4b494;

  /* ── Coffee palette (overrides blue palette) ── */
  --ag-blue-50: #f0e0cc;
  --ag-blue-100: #d4b89c;
  --ag-blue-200: #c4a07c;
  --ag-blue-300: #a07850;
  --ag-blue-400: #6f4e37;
  --ag-blue-500: #5a3e2b;
  --ag-blue-600: #4a3322;
  --ag-blue-700: #362418;
  --ag-blue-800: #221610;
  --ag-blue-900: #150e08;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #2b1f16;
  --ag-neutral-text: #f5ece3;
  --ag-neutral-border: #5a4434;
}`},"copper-patina":{light:`:where(html).ag-skin-copper-patina {
  --ag-primary: #1b6b63;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #14524c;
  --ag-primary-border: #a7cfc9;
  --ag-primary-background: #ebf5f3;
  --ag-primary-text: #114540;
  --ag-focus: 27, 107, 99;
  --ag-focus-dark: #25877d;
  --ag-text-primary: #211f1b;
  --ag-text-secondary: #4a463d;
  --ag-text-muted: #787266;
  --ag-text-primary-muted: #33302a;
  --ag-border: #d9d3c7;
  --ag-border-subtle: #e8e3d8;
  --ag-background-primary: #faf8f3;
  --ag-background-secondary: #f2efe7;
  --ag-background-tertiary: #e8e3d8;
  --ag-neutral-background: #e8e3d8;
  --ag-neutral-text: #211f1b;
  --ag-neutral-border: #ccc4b4;
  --ag-radius-lg: 0.625rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(33, 31, 27, 0.05);
  --ag-shadow-sm: 0 2px 6px 0 rgba(33, 31, 27, 0.07);
  --ag-shadow-md: 0 4px 12px -1px rgba(33, 31, 27, 0.08);
  --ag-shadow-lg: 0 8px 20px -2px rgba(33, 31, 27, 0.1);
  --ag-shadow-xl: 0 12px 28px -4px rgba(33, 31, 27, 0.12);
  --ag-rating-filled: #b45309;
  --ag-rating-filled-primary: #1b6b63;
  --ag-blue-50: #ebf5f3;
  --ag-blue-100: #d0e8e4;
  --ag-blue-200: #a7cfc9;
  --ag-blue-300: #78b3ab;
  --ag-blue-400: #3d8f86;
  --ag-blue-500: #1b6b63;
  --ag-blue-600: #14524c;
  --ag-blue-700: #114540;
  --ag-blue-800: #0b302c;
  --ag-blue-900: #061c19;
}`,dark:`[data-theme="dark"].ag-skin-copper-patina {
  --ag-primary: #4fd1c5;
  --ag-primary-fg: #071f1c;
  --ag-primary-dark: #38b2ac;
  --ag-primary-border: #4fd1c5;
  --ag-primary-background: #12332f;
  --ag-primary-text: #d6faf5;
  --ag-focus: 129, 230, 217;
  --ag-focus-dark: #d6faf5;
  --ag-text-primary: #f5f2eb;
  --ag-text-secondary: #d6d0c3;
  --ag-text-muted: #9c9587;
  --ag-text-primary-muted: #e6e1d6;
  --ag-border: #36332c;
  --ag-border-subtle: #292620;
  --ag-background-primary: #141310;
  --ag-background-secondary: #1d1b17;
  --ag-background-tertiary: #27251f;
  --ag-neutral-background: #27251f;
  --ag-neutral-text: #f5f2eb;
  --ag-neutral-border: #454137;
  --ag-radius-lg: 0.625rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #f59e0b;
  --ag-rating-filled-primary: #4fd1c5;
  --ag-blue-50: #e6fffa;
  --ag-blue-100: #d6faf5;
  --ag-blue-200: #81e6d9;
  --ag-blue-300: #4fd1c5;
  --ag-blue-400: #38b2ac;
  --ag-blue-500: #319795;
  --ag-blue-600: #1b6b63;
  --ag-blue-700: #27251f;
  --ag-blue-800: #1d1b17;
  --ag-blue-900: #141310;
}`},"coral-harbor":{light:`:where(html).ag-skin-coral-harbor {
  --ag-primary: #c92a3e;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #a61f30;
  --ag-primary-border: #f5b3bc;
  --ag-primary-background: #fff1f3;
  --ag-primary-text: #9e1f30;
  --ag-focus: 224, 62, 82;
  --ag-focus-dark: #ff4f64;
  --ag-text-primary: #14233c;
  --ag-text-secondary: #384966;
  --ag-text-muted: #52617a;
  --ag-text-primary-muted: #243654;
  --ag-border: #d5dce6;
  --ag-border-subtle: #e6ebf2;
  --ag-background-primary: #ffffff;
  --ag-background-secondary: #f4f6f9;
  --ag-background-tertiary: #eaeef5;
  --ag-neutral-background: #eaeef5;
  --ag-neutral-text: #14233c;
  --ag-neutral-border: #c5cfde;
  --ag-radius-lg: 0.875rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(20, 35, 60, 0.05);
  --ag-shadow-sm: 0 2px 8px 0 rgba(20, 35, 60, 0.07);
  --ag-shadow-md: 0 6px 16px -2px rgba(20, 35, 60, 0.09);
  --ag-shadow-lg: 0 10px 24px -3px rgba(20, 35, 60, 0.11);
  --ag-shadow-xl: 0 16px 32px -4px rgba(20, 35, 60, 0.14);
  --ag-rating-filled: #e03e52;
  --ag-rating-filled-primary: #e03e52;
  --ag-blue-50: #fff1f3;
  --ag-blue-100: #ffe0e5;
  --ag-blue-200: #f5b3bc;
  --ag-blue-300: #f28593;
  --ag-blue-400: #ff4f64;
  --ag-blue-500: #e03e52;
  --ag-blue-600: #c22d40;
  --ag-blue-700: #9e1f30;
  --ag-blue-800: #751421;
  --ag-blue-900: #4d0a13;
}`,dark:`[data-theme="dark"].ag-skin-coral-harbor {
  --ag-primary: #ff6b7d;
  --ag-primary-fg: #1c070a;
  --ag-primary-dark: #f24b60;
  --ag-primary-border: #e05265;
  --ag-primary-background: #36171b;
  --ag-primary-text: #ffd6dc;
  --ag-focus: 255, 138, 152;
  --ag-focus-dark: #ffd6dc;
  --ag-text-primary: #f7f4f4;
  --ag-text-secondary: #d9d0d0;
  --ag-text-muted: #9e9393;
  --ag-text-primary-muted: #e8e0e0;
  --ag-border: #383131;
  --ag-border-subtle: #292323;
  --ag-background-primary: #161414;
  --ag-background-secondary: #1f1c1c;
  --ag-background-tertiary: #292525;
  --ag-neutral-background: #292525;
  --ag-neutral-text: #f7f4f4;
  --ag-neutral-border: #473e3e;
  --ag-radius-lg: 0.875rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 8px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 6px 16px -2px rgba(0, 0, 0, 0.4);
  --ag-shadow-lg: 0 10px 24px -3px rgba(0, 0, 0, 0.45);
  --ag-shadow-xl: 0 16px 32px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #ff6b7d;
  --ag-blue-50: #ffe5e9;
  --ag-blue-100: #ffd6dc;
  --ag-blue-200: #ffa3b0;
  --ag-blue-300: #ff6b7d;
  --ag-blue-400: #f24b60;
  --ag-blue-500: #e03e52;
  --ag-blue-600: #c22d40;
  --ag-blue-700: #292525;
  --ag-blue-800: #1f1c1c;
  --ag-blue-900: #161414;
}`},"deep-forest":{light:`/**
 * Deep Forest Skin — Light Mode
 *
 * A clean, teal/green aesthetic inspired by deep forest tones.
 *
 * Activate by adding class="ag-skin-deep-forest" to <html>.
 * Load this file AFTER ag-tokens.css so the cascade overrides.
 */

:where(html).ag-skin-deep-forest {
  /* ── Primary color family ── */
  --ag-primary: #1f514c;
  --ag-primary-dark: #173d39;
  --ag-primary-border: #b2d4d0;
  --ag-primary-background: #e6f5f3;
  --ag-primary-text: #1f514c;

  /* ── Focus ring (teal-derived RGB) ── */
  --ag-focus: 31, 81, 76;
  --ag-focus-dark: #3a8a80;

  /* ── Semantic text ── */
  --ag-text-primary-muted: #2a4a46;

  /* ── Borders ── */
  --ag-border: #d5e5e3;
  --ag-border-subtle: #c2d9d6;

  /* ── Backgrounds ── */
  --ag-background-secondary: #f5faf9;
  --ag-background-tertiary: #e6f0ee;

  /* ── Border radius (rounder cards matching Deep Forest's 20-34px radii) ── */
  --ag-radius-lg: 1.25rem;

  /* ── Shadows (softer, diffused) ── */
  --ag-shadow-xs: 0 0 4px 0 rgba(31, 81, 76, 0.06);
  --ag-shadow-sm: 0 0 8px 0 rgba(31, 81, 76, 0.08);
  --ag-shadow-md: 0 0 15px 0 rgba(31, 81, 76, 0.08);
  --ag-shadow-lg: 0 0 25px -2px rgba(31, 81, 76, 0.1);
  --ag-shadow-xl: 0 0 35px -4px rgba(31, 81, 76, 0.12);

  /* ── Rating ── */
  --ag-rating-filled-primary: #1f514c;

  /* ── Teal palette (overrides blue palette for primary usage) ── */
  --ag-blue-50: #e6f5f3;
  --ag-blue-100: #c0e5e0;
  --ag-blue-200: #94d2ca;
  --ag-blue-300: #66bfb3;
  --ag-blue-400: #3a8a80;
  --ag-blue-500: #287a70;
  --ag-blue-600: #1f514c;
  --ag-blue-700: #173d39;
  --ag-blue-800: #0f2926;
  --ag-blue-900: #081a17;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #e6f0ee;
  --ag-neutral-text: #143632;
  --ag-neutral-border: #b2d4d0;
}`,dark:`/**
 * Deep Forest Skin — Dark Mode
 *
 * Dark-mode overrides for the Deep Forest teal/green aesthetic.
 *
 * Activate by adding class="ag-skin-deep-forest" to <html>.
 * Load this file AFTER ag-tokens-dark.css so the cascade overrides.
 */

[data-theme="dark"].ag-skin-deep-forest {
  /* ── Primary color family (brightened for dark backgrounds) ── */
  --ag-primary: #3a8a80;
  --ag-primary-fg: #000000;
  --ag-primary-dark: #2d6e65;
  --ag-primary-border: #3a8a80;
  --ag-primary-background: #0d2926;
  --ag-primary-text: #94d2ca;

  /* ── Focus ring (teal-derived RGB, brightened) ── */
  --ag-focus: 58, 138, 128;
  --ag-focus-dark: #4db3a6;

  /* ── Semantic text ── */
  --ag-text-primary-muted: #c0e5e0;

  /* ── Borders ── */
  --ag-border: #293836;
  --ag-border-subtle: #1f2b29;

  /* ── Backgrounds ── */
  --ag-background-primary: #111113;
  --ag-background-secondary: #16201f;
  --ag-background-tertiary: #1e2b29;

  /* ── Border radius (matches light) ── */
  --ag-radius-lg: 1.25rem;

  /* ── Shadows (teal-tinted for dark mode) ── */
  --ag-shadow-xs: 0 0 4px 0 rgba(58, 138, 128, 0.1);
  --ag-shadow-sm: 0 0 8px 0 rgba(58, 138, 128, 0.12);
  --ag-shadow-md: 0 0 15px 0 rgba(58, 138, 128, 0.1);
  --ag-shadow-lg: 0 0 25px -2px rgba(58, 138, 128, 0.12);
  --ag-shadow-xl: 0 0 35px -4px rgba(58, 138, 128, 0.15);

  /* ── Rating ── */
  --ag-rating-filled-primary: #3a8a80;

  /* ── Teal palette (overrides blue palette for primary usage) ── */
  --ag-blue-50: #c0e5e0;
  --ag-blue-100: #94d2ca;
  --ag-blue-200: #66bfb3;
  --ag-blue-300: #4db3a6;
  --ag-blue-400: #3a8a80;
  --ag-blue-500: #287a70;
  --ag-blue-600: #1f6660;
  --ag-blue-700: #174f4a;
  --ag-blue-800: #0f3834;
  --ag-blue-900: #0d2926;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #1e2b29;
  --ag-neutral-text: #e6f5f3;
  --ag-neutral-border: #344744;
}`},"emerald-vault":{light:`:where(html).ag-skin-emerald-vault {
  --ag-primary: #047857;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #065f46;
  --ag-primary-border: #a7f3d0;
  --ag-primary-background: #ecfdf5;
  --ag-primary-text: #064e3b;
  --ag-focus: 4, 120, 87;
  --ag-focus-dark: #059669;
  --ag-text-primary: #141c18;
  --ag-text-secondary: #37473f;
  --ag-text-muted: #64756c;
  --ag-text-primary-muted: #24332c;
  --ag-border: #d2dcd6;
  --ag-border-subtle: #e4ebe7;
  --ag-background-primary: #fcfdfb;
  --ag-background-secondary: #f3f7f4;
  --ag-background-tertiary: #e7efe9;
  --ag-neutral-background: #e7efe9;
  --ag-neutral-text: #141c18;
  --ag-neutral-border: #c2d1c8;
  --ag-radius-lg: 0.5rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(20, 28, 24, 0.05);
  --ag-shadow-sm: 0 2px 6px 0 rgba(20, 28, 24, 0.07);
  --ag-shadow-md: 0 4px 12px -1px rgba(20, 28, 24, 0.09);
  --ag-shadow-lg: 0 8px 20px -2px rgba(20, 28, 24, 0.11);
  --ag-shadow-xl: 0 12px 28px -4px rgba(20, 28, 24, 0.14);
  --ag-rating-filled: #d97706;
  --ag-rating-filled-primary: #047857;
  --ag-blue-50: #ecfdf5;
  --ag-blue-100: #d1fae5;
  --ag-blue-200: #a7f3d0;
  --ag-blue-300: #6ee7b7;
  --ag-blue-400: #34d399;
  --ag-blue-500: #10b981;
  --ag-blue-600: #047857;
  --ag-blue-700: #065f46;
  --ag-blue-800: #064e3b;
  --ag-blue-900: #022c22;
}`,dark:`[data-theme="dark"].ag-skin-emerald-vault {
  --ag-primary: #34d399;
  --ag-primary-fg: #042117;
  --ag-primary-dark: #10b981;
  --ag-primary-border: #34d399;
  --ag-primary-background: #0e2b21;
  --ag-primary-text: #d1fae5;
  --ag-focus: 110, 231, 183;
  --ag-focus-dark: #d1fae5;
  --ag-text-primary: #f2f6f4;
  --ag-text-secondary: #cbd6d0;
  --ag-text-muted: #8fa198;
  --ag-text-primary-muted: #dce6e0;
  --ag-border: #2a2e2c;
  --ag-border-subtle: #1f2220;
  --ag-background-primary: #111312;
  --ag-background-secondary: #181a19;
  --ag-background-tertiary: #212422;
  --ag-neutral-background: #212422;
  --ag-neutral-text: #f2f6f4;
  --ag-neutral-border: #353b38;
  --ag-radius-lg: 0.5rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #34d399;
  --ag-blue-50: #ecfdf5;
  --ag-blue-100: #d1fae5;
  --ag-blue-200: #6ee7b7;
  --ag-blue-300: #34d399;
  --ag-blue-400: #10b981;
  --ag-blue-500: #059669;
  --ag-blue-600: #047857;
  --ag-blue-700: #212422;
  --ag-blue-800: #181a19;
  --ag-blue-900: #111312;
}`},evergreen:{light:`/**
 * Evergreen Skin — Light Mode
 *
 * Crisp botanical emerald (#008766 / #00a87f) on warm ivory & sage-tinted sand.
 *
 * Activate by adding class="ag-skin-evergreen" to <html>.
 */

:where(html).ag-skin-evergreen {
  --ag-primary: #008766;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #006b51;
  --ag-primary-border: #7fd4bc;
  --ag-primary-background: #dcf5ea;
  --ag-primary-text: #006b51;

  --ag-neutral-background: #eef3e6;
  --ag-neutral-text: #031d0e;
  --ag-neutral-border: #c6d1c0;

  --ag-focus: 0, 168, 127;
  --ag-focus-dark: #00a87f;

  --ag-text-primary: #031d0e;
  --ag-text-secondary: #3b4d42;
  --ag-text-muted: #5a6d61;
  --ag-text-primary-muted: #243b2e;

  --ag-border: #d4dace;
  --ag-border-subtle: #e4e7df;

  --ag-background-primary: #fefefa;
  --ag-background-secondary: #f8faf1;
  --ag-background-tertiary: #eef3e6;

  --ag-success: #008766;
  --ag-success-fg: #ffffff;
  --ag-success-background: #dcf5ea;
  --ag-success-text: #04291d;
  --ag-warning: #eab308;
  --ag-warning-fg: #031d0e;
  --ag-warning-dark: #ca8a04;
  --ag-warning-background: #fff4d6;
  --ag-warning-text: #593800;
  --ag-danger: #b42318;
  --ag-danger-fg: #ffffff;
  --ag-danger-background: #feeceb;
  --ag-danger-text: #7a170f;

  --ag-radius-md: var(--ag-radius-sm);
  --ag-radius-lg: 0.75rem;
}`,dark:`/**
 * Evergreen Skin — Dark Mode
 *
 * Vibrant action green (#12d99b) on deep evergreen-charcoal surfaces.
 *
 * Activate by adding class="ag-skin-evergreen" and data-theme="dark" to <html>.
 */

[data-theme="dark"].ag-skin-evergreen {
  --ag-radius-md: var(--ag-radius-sm);
  --ag-primary: #12d99b;
  --ag-primary-fg: #042117;
  --ag-primary-dark: #07c78c;
  --ag-primary-border: #1e5e49;
  --ag-primary-background: #132b24;
  --ag-primary-text: #86f2cb;

  --ag-neutral-background: #1e2723;
  --ag-neutral-text: #f3f7f5;
  --ag-neutral-border: #33423b;

  --ag-focus: 18, 217, 155;
  --ag-focus-dark: #86f2cb;

  --ag-text-primary: #f3f7f5;
  --ag-text-secondary: #c9d4ce;
  --ag-text-muted: #8f9e96;
  --ag-text-primary-muted: #dce6e0;

  --ag-border: #28332e;
  --ag-border-subtle: #1d2622;

  --ag-background-primary: #101513;
  --ag-background-secondary: #161d1a;
  --ag-background-tertiary: #1e2723;

  --ag-success: #12d99b;
  --ag-success-fg: #042117;
  --ag-success-dark: #0ea878;
  --ag-success-background: #132b24;
  --ag-success-text: #b8f7df;
  --ag-warning: #eab308;
  --ag-warning-fg: #031d0e;
  --ag-warning-dark: #ca8a04;
}`},"golden-amber":{light:`:where(html).ag-skin-golden-amber {
  --ag-primary: #b45309;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #92400e;
  --ag-primary-border: #fde68a;
  --ag-primary-background: #fffbeb;
  --ag-primary-text: #78350f;
  --ag-focus: 180, 83, 9;
  --ag-focus-dark: #d97706;
  --ag-text-primary: #1f1912;
  --ag-text-secondary: #4a3e2e;
  --ag-text-muted: #786a56;
  --ag-text-primary-muted: #332a1f;
  --ag-border: #e0d7c8;
  --ag-border-subtle: #ede6da;
  --ag-background-primary: #fffefa;
  --ag-background-secondary: #f9f5ec;
  --ag-background-tertiary: #f0eadc;
  --ag-neutral-background: #f0eadc;
  --ag-neutral-text: #1f1912;
  --ag-neutral-border: #d4c8b4;
  --ag-radius-lg: 0.625rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(31, 25, 18, 0.05);
  --ag-shadow-sm: 0 2px 6px 0 rgba(31, 25, 18, 0.07);
  --ag-shadow-md: 0 4px 12px -1px rgba(31, 25, 18, 0.09);
  --ag-shadow-lg: 0 8px 20px -2px rgba(31, 25, 18, 0.11);
  --ag-shadow-xl: 0 12px 28px -4px rgba(31, 25, 18, 0.14);
  --ag-rating-filled: #d97706;
  --ag-rating-filled-primary: #b45309;
  --ag-blue-50: #fffbeb;
  --ag-blue-100: #fef3c7;
  --ag-blue-200: #fde68a;
  --ag-blue-300: #fcd34d;
  --ag-blue-400: #fbbf24;
  --ag-blue-500: #f59e0b;
  --ag-blue-600: #b45309;
  --ag-blue-700: #92400e;
  --ag-blue-800: #78350f;
  --ag-blue-900: #451a03;
}`,dark:`[data-theme="dark"].ag-skin-golden-amber {
  --ag-primary: #fbbf24;
  --ag-primary-fg: #1f1302;
  --ag-primary-dark: #f59e0b;
  --ag-primary-border: #fbbf24;
  --ag-primary-background: #30220a;
  --ag-primary-text: #fef3c7;
  --ag-focus: 252, 211, 77;
  --ag-focus-dark: #fef3c7;
  --ag-text-primary: #f7f4ee;
  --ag-text-secondary: #d6cfc2;
  --ag-text-muted: #9c9486;
  --ag-text-primary-muted: #e8e2d5;
  --ag-border: #2e2c28;
  --ag-border-subtle: #22201d;
  --ag-background-primary: #131210;
  --ag-background-secondary: #1a1917;
  --ag-background-tertiary: #23221f;
  --ag-neutral-background: #23221f;
  --ag-neutral-text: #f7f4ee;
  --ag-neutral-border: #3b3934;
  --ag-radius-lg: 0.625rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #fbbf24;
  --ag-blue-50: #fffbeb;
  --ag-blue-100: #fef3c7;
  --ag-blue-200: #fde68a;
  --ag-blue-300: #fbbf24;
  --ag-blue-400: #f59e0b;
  --ag-blue-500: #d97706;
  --ag-blue-600: #b45309;
  --ag-blue-700: #23221f;
  --ag-blue-800: #1a1917;
  --ag-blue-900: #131210;
}`},"indigo-dusk":{light:`:where(html).ag-skin-indigo-dusk {
  --ag-primary: #4338ca;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #3730a3;
  --ag-primary-border: #c7d2fe;
  --ag-primary-background: #eef2ff;
  --ag-primary-text: #312e81;
  --ag-focus: 67, 56, 202;
  --ag-focus-dark: #4f46e5;
  --ag-text-primary: #141624;
  --ag-text-secondary: #373b54;
  --ag-text-muted: #656a87;
  --ag-text-primary-muted: #24283d;
  --ag-border: #d4d7e6;
  --ag-border-subtle: #e6e8f2;
  --ag-background-primary: #fcfcfe;
  --ag-background-secondary: #f4f5fa;
  --ag-background-tertiary: #e9ebf5;
  --ag-neutral-background: #e9ebf5;
  --ag-neutral-text: #141624;
  --ag-neutral-border: #c5c9de;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(20, 22, 36, 0.05);
  --ag-shadow-sm: 0 2px 6px 0 rgba(20, 22, 36, 0.07);
  --ag-shadow-md: 0 4px 12px -1px rgba(20, 22, 36, 0.09);
  --ag-shadow-lg: 0 8px 20px -2px rgba(20, 22, 36, 0.11);
  --ag-shadow-xl: 0 12px 28px -4px rgba(20, 22, 36, 0.14);
  --ag-rating-filled: #d97706;
  --ag-rating-filled-primary: #4338ca;
  --ag-blue-50: #eef2ff;
  --ag-blue-100: #e0e7ff;
  --ag-blue-200: #c7d2fe;
  --ag-blue-300: #a5b4fc;
  --ag-blue-400: #818cf8;
  --ag-blue-500: #6366f1;
  --ag-blue-600: #4338ca;
  --ag-blue-700: #3730a3;
  --ag-blue-800: #312e81;
  --ag-blue-900: #1e1b4b;
}`,dark:`[data-theme="dark"].ag-skin-indigo-dusk {
  --ag-primary: #818cf8;
  --ag-primary-fg: #0d0c26;
  --ag-primary-dark: #757df8;
  --ag-primary-border: #818cf8;
  --ag-primary-background: #1b1c3b;
  --ag-primary-text: #e0e7ff;
  --ag-focus: 165, 180, 252;
  --ag-focus-dark: #e0e7ff;
  --ag-text-primary: #f3f4f8;
  --ag-text-secondary: #cdd1e0;
  --ag-text-muted: #9196ab;
  --ag-text-primary-muted: #dfe2ed;
  --ag-border: #2b2c33;
  --ag-border-subtle: #202126;
  --ag-background-primary: #121215;
  --ag-background-secondary: #18191d;
  --ag-background-tertiary: #212228;
  --ag-neutral-background: #212228;
  --ag-neutral-text: #f3f4f8;
  --ag-neutral-border: #363842;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #818cf8;
  --ag-blue-50: #eef2ff;
  --ag-blue-100: #e0e7ff;
  --ag-blue-200: #a5b4fc;
  --ag-blue-300: #818cf8;
  --ag-blue-400: #6366f1;
  --ag-blue-500: #4f46e5;
  --ag-blue-600: #4338ca;
  --ag-blue-700: #212228;
  --ag-blue-800: #18191d;
  --ag-blue-900: #121215;
}`},"ivory-cobalt":{light:`:where(html).ag-skin-ivory-cobalt {
  --ag-primary: #0b5fff;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #0047cc;
  --ag-primary-border: #a8c7ff;
  --ag-primary-background: #edf4ff;
  --ag-primary-text: #003cb3;
  --ag-focus: 11, 95, 255;
  --ag-focus-dark: #2974ff;
  --ag-text-primary: #1a1a1a;
  --ag-text-secondary: #454440;
  --ag-text-muted: #75736c;
  --ag-text-primary-muted: #2e2d2a;
  --ag-border: #e0ddd5;
  --ag-border-subtle: #edeae3;
  --ag-background-primary: #faf9f6;
  --ag-background-secondary: #f3f1eb;
  --ag-background-tertiary: #eae7df;
  --ag-neutral-background: #eae7df;
  --ag-neutral-text: #1a1a1a;
  --ag-neutral-border: #d1cdc2;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(26, 26, 26, 0.05);
  --ag-shadow-sm: 0 2px 6px 0 rgba(26, 26, 26, 0.07);
  --ag-shadow-md: 0 4px 14px -1px rgba(26, 26, 26, 0.09);
  --ag-shadow-lg: 0 8px 22px -2px rgba(26, 26, 26, 0.11);
  --ag-shadow-xl: 0 14px 30px -4px rgba(26, 26, 26, 0.14);
  --ag-rating-filled: #d97706;
  --ag-rating-filled-primary: #0b5fff;
  --ag-blue-50: #edf4ff;
  --ag-blue-100: #d6e6ff;
  --ag-blue-200: #a8c7ff;
  --ag-blue-300: #75a5ff;
  --ag-blue-400: #3d81ff;
  --ag-blue-500: #0b5fff;
  --ag-blue-600: #0047cc;
  --ag-blue-700: #003cb3;
  --ag-blue-800: #002b80;
  --ag-blue-900: #001a4d;
}`,dark:`[data-theme="dark"].ag-skin-ivory-cobalt {
  --ag-primary: #5c98ff;
  --ag-primary-fg: #04122e;
  --ag-primary-dark: #3b82f6;
  --ag-primary-border: #5c98ff;
  --ag-primary-background: #10254d;
  --ag-primary-text: #d6e6ff;
  --ag-focus: 138, 180, 255;
  --ag-focus-dark: #d6e6ff;
  --ag-text-primary: #f7f6f2;
  --ag-text-secondary: #d4d1c9;
  --ag-text-muted: #99968e;
  --ag-text-primary-muted: #e6e3dc;
  --ag-border: #2e2d2a;
  --ag-border-subtle: #22211f;
  --ag-background-primary: #141413;
  --ag-background-secondary: #1c1c1a;
  --ag-background-tertiary: #262523;
  --ag-neutral-background: #262523;
  --ag-neutral-text: #f7f6f2;
  --ag-neutral-border: #3d3c38;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #5c98ff;
  --ag-blue-50: #ebf3ff;
  --ag-blue-100: #d6e6ff;
  --ag-blue-200: #8ab4ff;
  --ag-blue-300: #5c98ff;
  --ag-blue-400: #3b82f6;
  --ag-blue-500: #0b5fff;
  --ag-blue-600: #0047cc;
  --ag-blue-700: #262523;
  --ag-blue-800: #1c1c1a;
  --ag-blue-900: #141413;
}`},"mo-neobrut":{light:`/**
 * Mo-Neobrut Skin — Light Mode
 *
 * Modern neo-brutalist aesthetic with vibrant accent colors, bold borders,
 * and high-contrast design. Inspired by contemporary portfolio sites.
 *
 * Activate by adding class="ag-skin-mo-neobrut" to <html>.
 * Load this file AFTER ag-tokens.css so the cascade overrides.
 */

:where(html).ag-skin-mo-neobrut {
  /* ── Primary color family (vibrant cyan/blue) ── */
  --ag-primary: #00bcd4;
  --ag-primary-fg: #000000;
  --ag-primary-dark: #0097a7;
  --ag-primary-border: #000000;
  --ag-primary-background: #e0f7fa;
  --ag-primary-text: #006064;

  /* ── Focus ring (cyan-derived RGB) ── */
  --ag-focus: 0, 188, 212;
  --ag-focus-dark: #00acc1;

  /* ── Semantic text (high contrast) ── */
  --ag-text-primary: #000000;
  --ag-text-secondary: #212121;
  --ag-text-muted: #424242;
  --ag-text-primary-muted: #1a1a1a;

  /* ── Borders (bold black) ── */
  --ag-border: #000000;
  --ag-border-subtle: #2a2a2a;
  --ag-border-width-1: 2px;

  /* ── Backgrounds (bright white/off-white) ── */
  --ag-background-primary: #ffffff;
  --ag-background-secondary: #f9f9f9;
  --ag-background-tertiary: #eeeeee;

  /* ── Border radius (sharp, minimal) ── */
  --ag-radius-sm: 0.125rem;
  --ag-radius-md: 0.25rem;
  --ag-radius-lg: 0.375rem;

  /* ── Shadows (hard, flat) ── */
  --ag-shadow-xs: 2px 2px 0 0 #000000;
  --ag-shadow-sm: 3px 3px 0 0 #000000;
  --ag-shadow-md: 4px 4px 0 0 #000000;
  --ag-shadow-lg: 6px 6px 0 0 #000000;
  --ag-shadow-xl: 8px 8px 0 0 #000000;
  --ag-shadow-2xl: 12px 12px 0 0 #000000;

  /* ── Rating (vibrant yellow) ── */
  --ag-rating-filled: #ffc107;
  --ag-rating-filled-primary: #00bcd4;

  /* ── Vibrant cyan palette (overrides blue palette) ── */
  --ag-blue-50: #e0f7fa;
  --ag-blue-100: #b2ebf2;
  --ag-blue-200: #80deea;
  --ag-blue-300: #4dd0e1;
  --ag-blue-400: #26c6da;
  --ag-blue-500: #00bcd4;
  --ag-blue-600: #00acc1;
  --ag-blue-700: #0097a7;
  --ag-blue-800: #00838f;
  --ag-blue-900: #006064;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #eeeeee;
  --ag-neutral-text: #000000;
  --ag-neutral-border: #000000;
}`,dark:`/**
 * Mo-Neobrut Skin — Dark Mode
 *
 * Dark-mode overrides for the Mo-Neobrut neo-brutalist aesthetic.
 *
 * Activate by adding class="ag-skin-mo-neobrut" to <html>.
 * Load this file AFTER ag-tokens-dark.css so the cascade overrides.
 */

[data-theme="dark"].ag-skin-mo-neobrut {
  /* ── Primary color family (brightened cyan) ── */
  --ag-primary: #26c6da;
  --ag-primary-fg: #000000;
  --ag-primary-dark: #00bcd4;
  --ag-primary-border: #4dd0e1;
  --ag-primary-background: #004d56;
  --ag-primary-text: #b2ebf2;

  /* ── Focus ring (brightened cyan-derived RGB) ── */
  --ag-focus: 38, 198, 218;
  --ag-focus-dark: #4dd0e1;

  /* ── Semantic text (high contrast on dark) ── */
  --ag-text-primary: #ffffff;
  --ag-text-secondary: #e0e0e0;
  --ag-text-muted: #bdbdbd;
  --ag-text-primary-muted: #f5f5f5;

  /* ── Borders (bright for visibility) ── */
  --ag-border: #4a4a4a;
  --ag-border-subtle: #3a3a3a;
  --ag-border-width-1: 2px;

  /* ── Backgrounds (dark) ── */
  --ag-background-primary: #121212;
  --ag-background-secondary: #1e1e1e;
  --ag-background-tertiary: #2a2a2a;

  /* ── Border radius (matches light) ── */
  --ag-radius-sm: 0.125rem;
  --ag-radius-md: 0.25rem;
  --ag-radius-lg: 0.375rem;

  /* ── Shadows (hard, flat, visible on dark) ── */
  --ag-shadow-xs: 2px 2px 0 0 #4a4a4a;
  --ag-shadow-sm: 3px 3px 0 0 #4a4a4a;
  --ag-shadow-md: 4px 4px 0 0 #4a4a4a;
  --ag-shadow-lg: 6px 6px 0 0 #4a4a4a;
  --ag-shadow-xl: 8px 8px 0 0 #4a4a4a;
  --ag-shadow-2xl: 12px 12px 0 0 #4a4a4a;

  /* ── Rating (vibrant yellow) ── */
  --ag-rating-filled: #ffc107;
  --ag-rating-filled-primary: #26c6da;

  /* ── Vibrant cyan palette (overrides blue palette) ── */
  --ag-blue-50: #b2ebf2;
  --ag-blue-100: #80deea;
  --ag-blue-200: #4dd0e1;
  --ag-blue-300: #26c6da;
  --ag-blue-400: #00bcd4;
  --ag-blue-500: #00acc1;
  --ag-blue-600: #0097a7;
  --ag-blue-700: #00838f;
  --ag-blue-800: #006064;
  --ag-blue-900: #004d56;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #242424;
  --ag-neutral-text: #ffffff;
  --ag-neutral-border: #5c5c5c;
}`},monochromatic:{light:`/**
 * Monochromatic Skin — Light Mode
 *
 * A clean, sophisticated black/white/gray aesthetic inspired by modern agency sites.
 * Pure monochrome with subtle gray tones, no color accents.
 *
 * Activate by adding class="ag-skin-monochromatic" to <html>.
 * Load this file AFTER ag-tokens.css so the cascade overrides.
 */

:where(html).ag-skin-monochromatic {
  /* ── Primary color family (pure black) ── */
  --ag-primary: #000000;
  --ag-primary-dark: #1a1a1a;
  --ag-primary-border: #e0e0e0;
  --ag-primary-background: #f8f8f8;
  --ag-primary-text: #000000;

  /* ── Focus ring (black-derived RGB) ── */
  --ag-focus: 0, 0, 0;
  --ag-focus-dark: #333333;

  /* ── Semantic text ── */
  --ag-text-primary: #000000;
  --ag-text-secondary: #4a4a4a;
  --ag-text-muted: #6b6b6b;
  --ag-text-primary-muted: #333333;

  /* ── Borders ── */
  --ag-border: #e5e5e5;
  --ag-border-subtle: #f0f0f0;

  /* ── Backgrounds ── */
  --ag-background-primary: #ffffff;
  --ag-background-secondary: #fafafa;
  --ag-background-tertiary: #f5f5f5;

  /* ── Border radius (clean, moderate) ── */
  --ag-radius-lg: 0.5rem;

  /* ── Shadows (very subtle) ── */
  --ag-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  --ag-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  --ag-shadow-md: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  --ag-shadow-lg: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
  --ag-shadow-xl: 0 8px 24px 0 rgba(0, 0, 0, 0.12);

  /* ── Rating ── */
  --ag-rating-filled-primary: #000000;

  /* ── Grayscale palette (overrides blue palette) ── */
  --ag-blue-50: #fafafa;
  --ag-blue-100: #f5f5f5;
  --ag-blue-200: #e5e5e5;
  --ag-blue-300: #d4d4d4;
  --ag-blue-400: #a3a3a3;
  --ag-blue-500: #737373;
  --ag-blue-600: #525252;
  --ag-blue-700: #404040;
  --ag-blue-800: #262626;
  --ag-blue-900: #171717;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #f2f2f2;
  --ag-neutral-text: #000000;
  --ag-neutral-border: #d4d4d4;
}`,dark:`/**
 * Monochromatic Skin — Dark Mode
 *
 * Dark-mode overrides for the Monochromatic black/white/gray aesthetic.
 *
 * Activate by adding class="ag-skin-monochromatic" to <html>.
 * Load this file AFTER ag-tokens-dark.css so the cascade overrides.
 */

[data-theme="dark"].ag-skin-monochromatic {
  /* ── Primary color family (white for dark backgrounds) ── */
  --ag-primary: #ffffff;
  --ag-primary-fg: #000000;
  --ag-primary-dark: #e5e5e5;
  --ag-primary-border: #404040;
  --ag-primary-background: #1a1a1a;
  --ag-primary-text: #ffffff;

  /* ── Focus ring (white-derived RGB) ── */
  --ag-focus: 255, 255, 255;
  --ag-focus-dark: #e5e5e5;

  /* ── Semantic text ── */
  --ag-text-primary: #ffffff;
  --ag-text-secondary: #d4d4d4;
  --ag-text-muted: #a3a3a3;
  --ag-text-primary-muted: #e5e5e5;

  /* ── Borders ── */
  --ag-border: #2a2a2a;
  --ag-border-subtle: #1f1f1f;

  /* ── Backgrounds ── */
  --ag-background-primary: #0a0a0a;
  --ag-background-secondary: #121212;
  --ag-background-tertiary: #1a1a1a;

  /* ── Border radius (matches light) ── */
  --ag-radius-lg: 0.5rem;

  /* ── Shadows (very subtle, white-tinted) ── */
  --ag-shadow-xs: 0 1px 2px 0 rgba(255, 255, 255, 0.04);
  --ag-shadow-sm: 0 1px 3px 0 rgba(255, 255, 255, 0.06);
  --ag-shadow-md: 0 2px 8px 0 rgba(255, 255, 255, 0.08);
  --ag-shadow-lg: 0 4px 16px 0 rgba(255, 255, 255, 0.1);
  --ag-shadow-xl: 0 8px 24px 0 rgba(255, 255, 255, 0.12);

  /* ── Rating ── */
  --ag-rating-filled-primary: #ffffff;

  /* ── Grayscale palette (overrides blue palette) ── */
  --ag-blue-50: #fafafa;
  --ag-blue-100: #f5f5f5;
  --ag-blue-200: #e5e5e5;
  --ag-blue-300: #d4d4d4;
  --ag-blue-400: #a3a3a3;
  --ag-blue-500: #737373;
  --ag-blue-600: #525252;
  --ag-blue-700: #404040;
  --ag-blue-800: #262626;
  --ag-blue-900: #1a1a1a;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #1f1f1f;
  --ag-neutral-text: #ffffff;
  --ag-neutral-border: #404040;
}`},"mulberry-slate":{light:`:where(html).ag-skin-mulberry-slate {
  --ag-primary: #86198f;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #701a75;
  --ag-primary-border: #f0abfc;
  --ag-primary-background: #fdf4ff;
  --ag-primary-text: #701a75;
  --ag-focus: 134, 25, 143;
  --ag-focus-dark: #a21caf;
  --ag-text-primary: #18181b;
  --ag-text-secondary: #3f3f46;
  --ag-text-muted: #71717a;
  --ag-text-primary-muted: #27272a;
  --ag-border: #d4d4d8;
  --ag-border-subtle: #e4e4e7;
  --ag-background-primary: #ffffff;
  --ag-background-secondary: #f4f4f5;
  --ag-background-tertiary: #e4e4e7;
  --ag-neutral-background: #e4e4e7;
  --ag-neutral-text: #18181b;
  --ag-neutral-border: #d4d4d8;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(24, 24, 27, 0.05);
  --ag-shadow-sm: 0 2px 6px 0 rgba(24, 24, 27, 0.07);
  --ag-shadow-md: 0 4px 12px -1px rgba(24, 24, 27, 0.09);
  --ag-shadow-lg: 0 8px 20px -2px rgba(24, 24, 27, 0.11);
  --ag-shadow-xl: 0 12px 28px -4px rgba(24, 24, 27, 0.14);
  --ag-rating-filled: #d97706;
  --ag-rating-filled-primary: #86198f;
  --ag-blue-50: #fdf4ff;
  --ag-blue-100: #fae8ff;
  --ag-blue-200: #f0abfc;
  --ag-blue-300: #e879f9;
  --ag-blue-400: #d946ef;
  --ag-blue-500: #c026d3;
  --ag-blue-600: #86198f;
  --ag-blue-700: #701a75;
  --ag-blue-800: #4a044e;
  --ag-blue-900: #2e0230;
}`,dark:`[data-theme="dark"].ag-skin-mulberry-slate {
  --ag-primary: #e879f9;
  --ag-primary-fg: #260329;
  --ag-primary-dark: #d946ef;
  --ag-primary-border: #d946ef;
  --ag-primary-background: #2e1533;
  --ag-primary-text: #fae8ff;
  --ag-focus: 240, 171, 252;
  --ag-focus-dark: #fae8ff;
  --ag-text-primary: #f4f4f6;
  --ag-text-secondary: #d4d4d8;
  --ag-text-muted: #9898a0;
  --ag-text-primary-muted: #e4e4e7;
  --ag-border: #2c2c31;
  --ag-border-subtle: #202024;
  --ag-background-primary: #121214;
  --ag-background-secondary: #19191c;
  --ag-background-tertiary: #222226;
  --ag-neutral-background: #222226;
  --ag-neutral-text: #f4f4f6;
  --ag-neutral-border: #36363c;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #e879f9;
  --ag-blue-50: #fdf4ff;
  --ag-blue-100: #fae8ff;
  --ag-blue-200: #f0abfc;
  --ag-blue-300: #e879f9;
  --ag-blue-400: #d946ef;
  --ag-blue-500: #c026d3;
  --ag-blue-600: #86198f;
  --ag-blue-700: #222226;
  --ag-blue-800: #19191c;
  --ag-blue-900: #121214;
}`},"neon-obsidian":{light:`:where(html).ag-skin-neon-obsidian {
  --ag-primary: #5200ff;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #4100cc;
  --ag-primary-border: #c4abff;
  --ag-primary-background: #f2ecff;
  --ag-primary-text: #3b00b8;
  --ag-focus: 82, 0, 255;
  --ag-focus-dark: #6d28ff;
  --ag-text-primary: #141110;
  --ag-text-secondary: #3d3735;
  --ag-text-muted: #6e6562;
  --ag-text-primary-muted: #262220;
  --ag-border: #d9d3d0;
  --ag-border-subtle: #eae5e3;
  --ag-background-primary: #fcfbfa;
  --ag-background-secondary: #f4f1ef;
  --ag-background-tertiary: #ebe6e3;
  --ag-neutral-background: #ebe6e3;
  --ag-neutral-text: #141110;
  --ag-neutral-border: #ccc4c0;
  --ag-radius-sm: 0.1875rem;
  --ag-radius-md: 0.25rem;
  --ag-radius-lg: 0.375rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(20, 17, 16, 0.06);
  --ag-shadow-sm: 0 2px 6px 0 rgba(82, 0, 255, 0.08);
  --ag-shadow-md: 0 4px 12px -1px rgba(82, 0, 255, 0.1);
  --ag-shadow-lg: 0 8px 20px -2px rgba(82, 0, 255, 0.12);
  --ag-shadow-xl: 0 12px 28px -4px rgba(82, 0, 255, 0.15);
  --ag-rating-filled: #65a30d;
  --ag-rating-filled-primary: #5200ff;
  --ag-blue-50: #f2ecff;
  --ag-blue-100: #e2d4ff;
  --ag-blue-200: #c4abff;
  --ag-blue-300: #9f75ff;
  --ag-blue-400: #783dff;
  --ag-blue-500: #5200ff;
  --ag-blue-600: #4100cc;
  --ag-blue-700: #3b00b8;
  --ag-blue-800: #290080;
  --ag-blue-900: #18004d;
}`,dark:`[data-theme="dark"].ag-skin-neon-obsidian {
  --ag-primary: #a37aff;
  --ag-primary-fg: #12062b;
  --ag-primary-dark: #996bff;
  --ag-primary-border: #a37aff;
  --ag-primary-background: #241347;
  --ag-primary-text: #e3d6ff;
  --ag-focus: 163, 230, 53;
  --ag-focus-dark: #bef264;
  --ag-text-primary: #f7f5f4;
  --ag-text-secondary: #d6cfcc;
  --ag-text-muted: #9c928e;
  --ag-text-primary-muted: #e8e2df;
  --ag-border: #332c29;
  --ag-border-subtle: #241f1d;
  --ag-background-primary: #141110;
  --ag-background-secondary: #1c1816;
  --ag-background-tertiary: #26201e;
  --ag-neutral-background: #26201e;
  --ag-neutral-text: #f7f5f4;
  --ag-neutral-border: #423935;
  --ag-radius-sm: 0.1875rem;
  --ag-radius-md: 0.25rem;
  --ag-radius-lg: 0.375rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.32);
  --ag-shadow-sm: 0 2px 8px 0 rgba(135, 82, 255, 0.18);
  --ag-shadow-md: 0 4px 14px -1px rgba(135, 82, 255, 0.22);
  --ag-shadow-lg: 0 8px 22px -2px rgba(135, 82, 255, 0.26);
  --ag-shadow-xl: 0 12px 30px -4px rgba(135, 82, 255, 0.3);
  --ag-rating-filled: #a3e635;
  --ag-rating-filled-primary: #a37aff;
  --ag-blue-50: #efe8ff;
  --ag-blue-100: #e3d6ff;
  --ag-blue-200: #c4abff;
  --ag-blue-300: #a37aff;
  --ag-blue-400: #8752ff;
  --ag-blue-500: #5200ff;
  --ag-blue-600: #4100cc;
  --ag-blue-700: #26201e;
  --ag-blue-800: #1c1816;
  --ag-blue-900: #141110;
}`},"nordic-aurora":{light:`:where(html).ag-skin-nordic-aurora {
  --ag-primary: #0f766e;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #115e59;
  --ag-primary-border: #99d5cf;
  --ag-primary-background: #e6f7f5;
  --ag-primary-text: #0d4f4a;
  --ag-focus: 15, 118, 110;
  --ag-focus-dark: #14b8a6;
  --ag-text-primary: #0f2426;
  --ag-text-secondary: #2d4c50;
  --ag-text-muted: #476469;
  --ag-text-primary-muted: #1e393d;
  --ag-border: #c2dce0;
  --ag-border-subtle: #daecee;
  --ag-background-primary: #f6fbfc;
  --ag-background-secondary: #ebf5f7;
  --ag-background-tertiary: #deedf0;
  --ag-neutral-background: #deedf0;
  --ag-neutral-text: #0f2426;
  --ag-neutral-border: #b3d2d7;
  --ag-radius-lg: 1rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(15, 36, 38, 0.05);
  --ag-shadow-sm: 0 2px 8px 0 rgba(15, 118, 110, 0.08);
  --ag-shadow-md: 0 4px 14px -1px rgba(15, 118, 110, 0.1);
  --ag-shadow-lg: 0 8px 22px -2px rgba(15, 118, 110, 0.12);
  --ag-shadow-xl: 0 14px 30px -4px rgba(15, 118, 110, 0.15);
  --ag-rating-filled: #d97706;
  --ag-rating-filled-primary: #0f766e;
  --ag-blue-50: #e6f7f5;
  --ag-blue-100: #c4ece8;
  --ag-blue-200: #99d5cf;
  --ag-blue-300: #5eead4;
  --ag-blue-400: #2dd4bf;
  --ag-blue-500: #14b8a6;
  --ag-blue-600: #0f766e;
  --ag-blue-700: #115e59;
  --ag-blue-800: #134e4a;
  --ag-blue-900: #082f2d;
}`,dark:`[data-theme="dark"].ag-skin-nordic-aurora {
  --ag-primary: #2dd4bf;
  --ag-primary-fg: #06211e;
  --ag-primary-dark: #14b8a6;
  --ag-primary-border: #269e90;
  --ag-primary-background: #142927;
  --ag-primary-text: #ccfbf1;
  --ag-focus: 94, 234, 212;
  --ag-focus-dark: #ccfbf1;
  --ag-text-primary: #f2f5f5;
  --ag-text-secondary: #cfd6d6;
  --ag-text-muted: #8f9999;
  --ag-text-primary-muted: #e1e8e8;
  --ag-border: #2d3336;
  --ag-border-subtle: #212527;
  --ag-background-primary: #111314;
  --ag-background-secondary: #181b1c;
  --ag-background-tertiary: #212527;
  --ag-neutral-background: #212527;
  --ag-neutral-text: #f2f5f5;
  --ag-neutral-border: #363d40;
  --ag-radius-lg: 1rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 8px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 14px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 22px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 14px 30px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #2dd4bf;
  --ag-blue-50: #ccfbf1;
  --ag-blue-100: #99f6e4;
  --ag-blue-200: #5eead4;
  --ag-blue-300: #2dd4bf;
  --ag-blue-400: #14b8a6;
  --ag-blue-500: #0d9488;
  --ag-blue-600: #0f766e;
  --ag-blue-700: #212527;
  --ag-blue-800: #181b1c;
  --ag-blue-900: #111314;
}`},"obsidian-minimal":{light:`:where(html).ag-skin-obsidian-minimal {
  --ag-primary: #171717;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #000000;
  --ag-primary-border: #d4d4d4;
  --ag-primary-background: #f5f5f5;
  --ag-primary-text: #171717;
  --ag-focus: 0, 112, 243;
  --ag-focus-dark: #0070f3;
  --ag-text-primary: #0a0a0a;
  --ag-text-secondary: #404040;
  --ag-text-muted: #737373;
  --ag-text-primary-muted: #262626;
  --ag-border: #e5e5e5;
  --ag-border-subtle: #f0f0f0;
  --ag-background-primary: #ffffff;
  --ag-background-secondary: #fafafa;
  --ag-background-tertiary: #f4f4f5;
  --ag-neutral-background: #f4f4f5;
  --ag-neutral-text: #0a0a0a;
  --ag-neutral-border: #d4d4d8;
  --ag-radius-sm: 0.25rem;
  --ag-radius-md: 0.375rem;
  --ag-radius-lg: 0.5rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  --ag-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  --ag-shadow-md: 0 4px 10px -1px rgba(0, 0, 0, 0.07);
  --ag-shadow-lg: 0 8px 18px -2px rgba(0, 0, 0, 0.09);
  --ag-shadow-xl: 0 12px 24px -4px rgba(0, 0, 0, 0.11);
  --ag-rating-filled: #0070f3;
  --ag-rating-filled-primary: #171717;
  --ag-blue-50: #f0f7ff;
  --ag-blue-100: #dceeff;
  --ag-blue-200: #b3d7ff;
  --ag-blue-300: #7ab8ff;
  --ag-blue-400: #3b93ff;
  --ag-blue-500: #0070f3;
  --ag-blue-600: #0058c2;
  --ag-blue-700: #004396;
  --ag-blue-800: #002e69;
  --ag-blue-900: #001a3d;
}`,dark:`[data-theme="dark"].ag-skin-obsidian-minimal {
  --ag-primary: #ededed;
  --ag-primary-fg: #0a0a0a;
  --ag-primary-dark: #d4d4d4;
  --ag-primary-border: #333333;
  --ag-primary-background: #1a1a1a;
  --ag-primary-text: #ffffff;
  --ag-focus: 50, 145, 255;
  --ag-focus-dark: #66adff;
  --ag-text-primary: #ededed;
  --ag-text-secondary: #b8b8b8;
  --ag-text-muted: #808080;
  --ag-text-primary-muted: #d4d4d4;
  --ag-border: #262626;
  --ag-border-subtle: #1a1a1a;
  --ag-background-primary: #000000;
  --ag-background-secondary: #0a0a0a;
  --ag-background-tertiary: #141414;
  --ag-neutral-background: #141414;
  --ag-neutral-text: #ededed;
  --ag-neutral-border: #2e2e2e;
  --ag-radius-sm: 0.25rem;
  --ag-radius-md: 0.375rem;
  --ag-radius-lg: 0.5rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(255, 255, 255, 0.04);
  --ag-shadow-sm: 0 1px 3px 0 rgba(255, 255, 255, 0.06);
  --ag-shadow-md: 0 4px 10px -1px rgba(255, 255, 255, 0.07);
  --ag-shadow-lg: 0 8px 18px -2px rgba(255, 255, 255, 0.08);
  --ag-shadow-xl: 0 12px 24px -4px rgba(255, 255, 255, 0.1);
  --ag-rating-filled: #3291ff;
  --ag-rating-filled-primary: #ededed;
  --ag-blue-50: #e6f2ff;
  --ag-blue-100: #cce5ff;
  --ag-blue-200: #80bfff;
  --ag-blue-300: #3291ff;
  --ag-blue-400: #0070f3;
  --ag-blue-500: #0058c2;
  --ag-blue-600: #004396;
  --ag-blue-700: #141414;
  --ag-blue-800: #0a0a0a;
  --ag-blue-900: #000000;
}`},"olive-moss":{light:`:where(html).ag-skin-olive-moss {
  --ag-primary: #4d6629;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #3b4f1f;
  --ag-primary-border: #c5d9a4;
  --ag-primary-background: #f2f7ea;
  --ag-primary-text: #35471b;
  --ag-focus: 77, 102, 41;
  --ag-focus-dark: #5f7d33;
  --ag-text-primary: #1c1e17;
  --ag-text-secondary: #434739;
  --ag-text-muted: #707563;
  --ag-text-primary-muted: #2d3026;
  --ag-border: #d8dcd0;
  --ag-border-subtle: #e7eae1;
  --ag-background-primary: #fcfcf9;
  --ag-background-secondary: #f5f6f0;
  --ag-background-tertiary: #ebede4;
  --ag-neutral-background: #ebede4;
  --ag-neutral-text: #1c1e17;
  --ag-neutral-border: #c9cec0;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(28, 30, 23, 0.05);
  --ag-shadow-sm: 0 2px 6px 0 rgba(28, 30, 23, 0.07);
  --ag-shadow-md: 0 4px 12px -1px rgba(28, 30, 23, 0.09);
  --ag-shadow-lg: 0 8px 20px -2px rgba(28, 30, 23, 0.11);
  --ag-shadow-xl: 0 12px 28px -4px rgba(28, 30, 23, 0.14);
  --ag-rating-filled: #ca8a04;
  --ag-rating-filled-primary: #4d6629;
  --ag-blue-50: #f2f7ea;
  --ag-blue-100: #e2edd0;
  --ag-blue-200: #c5d9a4;
  --ag-blue-300: #a3c274;
  --ag-blue-400: #7ea349;
  --ag-blue-500: #5f7d33;
  --ag-blue-600: #4d6629;
  --ag-blue-700: #3b4f1f;
  --ag-blue-800: #293815;
  --ag-blue-900: #18210b;
}`,dark:`[data-theme="dark"].ag-skin-olive-moss {
  --ag-primary: #a3c96b;
  --ag-primary-fg: #151f07;
  --ag-primary-dark: #8ab350;
  --ag-primary-border: #a3c96b;
  --ag-primary-background: #222e14;
  --ag-primary-text: #e2f2c9;
  --ag-focus: 163, 201, 107;
  --ag-focus-dark: #e2f2c9;
  --ag-text-primary: #f4f5f0;
  --ag-text-secondary: #cfd2c6;
  --ag-text-muted: #94998a;
  --ag-text-primary-muted: #e0e3d8;
  --ag-border: #2c2e28;
  --ag-border-subtle: #21231e;
  --ag-background-primary: #131411;
  --ag-background-secondary: #1a1b18;
  --ag-background-tertiary: #232520;
  --ag-neutral-background: #232520;
  --ag-neutral-text: #f4f5f0;
  --ag-neutral-border: #383b33;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #a3c96b;
  --ag-blue-50: #f2f7ea;
  --ag-blue-100: #e2f2c9;
  --ag-blue-200: #c5d9a4;
  --ag-blue-300: #a3c96b;
  --ag-blue-400: #8ab350;
  --ag-blue-500: #5f7d33;
  --ag-blue-600: #4d6629;
  --ag-blue-700: #232520;
  --ag-blue-800: #1a1b18;
  --ag-blue-900: #131411;
}`},paper:{light:`/**
 * Paper Skin — Light Mode
 *
 * Warm bone/sepia background designed as a low-blue-light reading mode.
 * Calming, parchment-like aesthetic that reduces eye strain in
 * ambient lighting conditions.
 *
 * Activate by adding class="ag-skin-paper" to <html>.
 * Load this file AFTER ag-tokens.css so the cascade overrides.
 */

:where(html).ag-skin-paper {
  /* ── Primary color family (dark sepia/brown) ── */
  --ag-primary: #433422;
  --ag-primary-fg: #f6f1e5;
  --ag-primary-dark: #332819;
  --ag-primary-border: #8a6a44;
  --ag-primary-background: #ede0cc;
  --ag-primary-text: #2c2012;

  /* ── Focus ring (sepia-derived RGB) ── */
  --ag-focus: 67, 52, 34;
  --ag-focus-dark: #6b5030;

  /* ── Semantic text (warm dark sepia) ── */
  --ag-text-primary: #2c2012;
  --ag-text-secondary: #4a3822;
  --ag-text-muted: #7a6248;
  --ag-text-primary-muted: #3d2e18;

  /* ── Borders (warm tan) ── */
  --ag-border: #d4c4a8;
  --ag-border-subtle: #e0d6c4;

  /* ── Backgrounds (warm parchment) ── */
  --ag-background-secondary: #ede7d6;
  --ag-background-tertiary: #e8e0cd;

  /* ── Border radius (comfortable, gentle) ── */
  --ag-radius-lg: 0.75rem;

  /* ── Shadows (warm sepia tinted) ── */
  --ag-shadow-xs: 0 1px 3px 0 rgba(67, 52, 34, 0.08);
  --ag-shadow-sm: 0 1px 5px 0 rgba(67, 52, 34, 0.1);
  --ag-shadow-md: 0 2px 10px 0 rgba(67, 52, 34, 0.1);
  --ag-shadow-lg: 0 4px 18px -2px rgba(67, 52, 34, 0.12);
  --ag-shadow-xl: 0 8px 28px -4px rgba(67, 52, 34, 0.15);

  /* ── Rating ── */
  --ag-rating-filled: #8a6a44;
  --ag-rating-filled-primary: #433422;

  /* ── Sepia/brown palette (overrides blue palette) ── */
  --ag-blue-50: #f9f6ee;
  --ag-blue-100: #f0e8d4;
  --ag-blue-200: #ddd0b8;
  --ag-blue-300: #c4b090;
  --ag-blue-400: #a08860;
  --ag-blue-500: #7a6344;
  --ag-blue-600: #5c4a30;
  --ag-blue-700: #433422;
  --ag-blue-800: #2c2012;
  --ag-blue-900: #180f08;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #e6ddc8;
  --ag-neutral-text: #22180e;
  --ag-neutral-border: #c4b498;
}`,dark:`/**
 * Paper Skin — Dark Mode
 *
 * Dark sepia for night-time reading. Maintains the warm, low-blue-light
 * character of the Paper skin while shifting to a high-contrast dark background.
 *
 * Activate by adding class="ag-skin-paper" to <html>.
 * Load this file AFTER ag-tokens-dark.css so the cascade overrides.
 */

[data-theme="dark"].ag-skin-paper {
  /* ── Primary color family (warm tan/caramel on dark sepia) ── */
  --ag-primary: #d8b98c;
  --ag-primary-fg: #180f08;
  --ag-primary-dark: #c4a070;
  --ag-primary-border: #d8b98c;
  --ag-primary-background: #2a1e10;
  --ag-primary-text: #f3dfc0;

  /* ── Focus ring (warm tan RGB, brightened for high visibility) ── */
  --ag-focus: 228, 198, 154;
  --ag-focus-dark: #f3dfc0;

  /* ── Semantic text (warm light on dark sepia) ── */
  --ag-text-primary: #f2e8d5;
  --ag-text-secondary: #e6dac4;
  --ag-text-muted: #b09d84;
  --ag-text-primary-muted: #ece0cc;

  /* ── Borders (dark warm) ── */
  --ag-border: #3d3025;
  --ag-border-subtle: #2e2418;

  /* ── Backgrounds (dark sepia) ── */
  --ag-background-primary: #1f1710;
  --ag-background-secondary: #2a1e10;
  --ag-background-tertiary: #332515;

  /* ── Border radius (matches light) ── */
  --ag-radius-lg: 0.75rem;

  /* ── Shadows (warm sepia on dark) ── */
  --ag-shadow-xs: 0 1px 3px 0 rgba(201, 168, 122, 0.1);
  --ag-shadow-sm: 0 1px 5px 0 rgba(201, 168, 122, 0.12);
  --ag-shadow-md: 0 2px 10px 0 rgba(201, 168, 122, 0.12);
  --ag-shadow-lg: 0 4px 18px -2px rgba(201, 168, 122, 0.15);
  --ag-shadow-xl: 0 8px 28px -4px rgba(201, 168, 122, 0.18);

  /* ── Rating ── */
  --ag-rating-filled: #d8b98c;
  --ag-rating-filled-primary: #d8b98c;

  /* ── Sepia/brown palette (dark mode, lighter values for dark bg) ── */
  --ag-blue-50: #e0c49a;
  --ag-blue-100: #d9b888;
  --ag-blue-200: #c9a87a;
  --ag-blue-300: #b8946a;
  --ag-blue-400: #a08060;
  --ag-blue-500: #8a6c4e;
  --ag-blue-600: #6b5030;
  --ag-blue-700: #4a3822;
  --ag-blue-800: #2c2012;
  --ag-blue-900: #1f1710;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #312416;
  --ag-neutral-text: #f2e8d5;
  --ag-neutral-border: #523e28;
}`},"pebble-cerulean":{light:`:where(html).ag-skin-pebble-cerulean {
  --ag-primary: #1a73e8;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #1557b0;
  --ag-primary-border: #aecbfa;
  --ag-primary-background: #e8f0fe;
  --ag-primary-text: #174ea6;
  --ag-focus: 26, 115, 232;
  --ag-focus-dark: #1a73e8;
  --ag-text-primary: #1f1f1f;
  --ag-text-secondary: #444746;
  --ag-text-muted: #5a5d5b;
  --ag-text-primary-muted: #303030;
  --ag-border: #dadce0;
  --ag-border-subtle: #e8eaed;
  --ag-background-primary: #f8f9fa;
  --ag-background-secondary: #f1f3f4;
  --ag-background-tertiary: #e8eaed;
  --ag-neutral-background: #e8eaed;
  --ag-neutral-text: #1f1f1f;
  --ag-neutral-border: #dadce0;
  --ag-radius-lg: 1rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(32, 33, 36, 0.06);
  --ag-shadow-sm: 0 1px 4px 0 rgba(32, 33, 36, 0.08);
  --ag-shadow-md: 0 3px 10px -1px rgba(32, 33, 36, 0.1);
  --ag-shadow-lg: 0 6px 18px -2px rgba(32, 33, 36, 0.12);
  --ag-shadow-xl: 0 10px 26px -4px rgba(32, 33, 36, 0.14);
  --ag-rating-filled: #f9ab00;
  --ag-rating-filled-primary: #1a73e8;
  --ag-blue-50: #e8f0fe;
  --ag-blue-100: #d2e3fc;
  --ag-blue-200: #aecbfa;
  --ag-blue-300: #8ab4f8;
  --ag-blue-400: #669df6;
  --ag-blue-500: #4285f4;
  --ag-blue-600: #1a73e8;
  --ag-blue-700: #1967d2;
  --ag-blue-800: #185abc;
  --ag-blue-900: #174ea6;
}`,dark:`[data-theme="dark"].ag-skin-pebble-cerulean {
  --ag-primary: #8ab4f8;
  --ag-primary-fg: #062e6f;
  --ag-primary-dark: #669df6;
  --ag-primary-border: #8ab4f8;
  --ag-primary-background: #1b2c47;
  --ag-primary-text: #d2e3fc;
  --ag-focus: 138, 180, 248;
  --ag-focus-dark: #d2e3fc;
  --ag-text-primary: #e3e3e3;
  --ag-text-secondary: #c4c7c5;
  --ag-text-muted: #8e918f;
  --ag-text-primary-muted: #d3d6d4;
  --ag-border: #333537;
  --ag-border-subtle: #252729;
  --ag-background-primary: #131314;
  --ag-background-secondary: #1e1f20;
  --ag-background-tertiary: #282a2c;
  --ag-neutral-background: #282a2c;
  --ag-neutral-text: #e3e3e3;
  --ag-neutral-border: #3c4043;
  --ag-radius-lg: 1rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.4);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.45);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fdd663;
  --ag-rating-filled-primary: #8ab4f8;
  --ag-blue-50: #e8f0fe;
  --ag-blue-100: #d2e3fc;
  --ag-blue-200: #aecbfa;
  --ag-blue-300: #8ab4f8;
  --ag-blue-400: #669df6;
  --ag-blue-500: #4285f4;
  --ag-blue-600: #1a73e8;
  --ag-blue-700: #282a2c;
  --ag-blue-800: #1e1f20;
  --ag-blue-900: #131314;
}`},"press-crimson":{light:`:where(html).ag-skin-press-crimson {
  --ag-primary: #b81d24;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #94151b;
  --ag-primary-border: #eba6a9;
  --ag-primary-background: #fdf1f1;
  --ag-primary-text: #8c1218;
  --ag-focus: 184, 29, 36;
  --ag-focus-dark: #d6242c;
  --ag-text-primary: #0a0a0a;
  --ag-text-secondary: #333333;
  --ag-text-muted: #666666;
  --ag-text-primary-muted: #1f1f1f;
  --ag-border: #d4d4d4;
  --ag-border-subtle: #e8e8e8;
  --ag-background-primary: #ffffff;
  --ag-background-secondary: #f6f6f6;
  --ag-background-tertiary: #ededed;
  --ag-neutral-background: #ededed;
  --ag-neutral-text: #0a0a0a;
  --ag-neutral-border: #c7c7c7;
  --ag-radius-sm: 0.125rem;
  --ag-radius-md: 0.1875rem;
  --ag-radius-lg: 0.25rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --ag-shadow-sm: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  --ag-shadow-md: 0 3px 8px 0 rgba(0, 0, 0, 0.1);
  --ag-shadow-lg: 0 6px 16px -1px rgba(0, 0, 0, 0.12);
  --ag-shadow-xl: 0 10px 24px -2px rgba(0, 0, 0, 0.14);
  --ag-rating-filled: #b81d24;
  --ag-rating-filled-primary: #b81d24;
  --ag-blue-50: #fdf1f1;
  --ag-blue-100: #fad9da;
  --ag-blue-200: #eba6a9;
  --ag-blue-300: #de7378;
  --ag-blue-400: #d6242c;
  --ag-blue-500: #b81d24;
  --ag-blue-600: #94151b;
  --ag-blue-700: #7a1015;
  --ag-blue-800: #570a0e;
  --ag-blue-900: #360507;
}`,dark:`[data-theme="dark"].ag-skin-press-crimson {
  --ag-primary: #f2555c;
  --ag-primary-fg: #140304;
  --ag-primary-dark: #e84850;
  --ag-primary-border: #f2555c;
  --ag-primary-background: #331012;
  --ag-primary-text: #ffd6d8;
  --ag-focus: 242, 85, 92;
  --ag-focus-dark: #ffd6d8;
  --ag-text-primary: #ffffff;
  --ag-text-secondary: #d9d9d9;
  --ag-text-muted: #999999;
  --ag-text-primary-muted: #ebebeb;
  --ag-border: #2e2e2e;
  --ag-border-subtle: #212121;
  --ag-background-primary: #0a0a0a;
  --ag-background-secondary: #141414;
  --ag-background-tertiary: #1f1f1f;
  --ag-neutral-background: #1f1f1f;
  --ag-neutral-text: #ffffff;
  --ag-neutral-border: #3d3d3d;
  --ag-radius-sm: 0.125rem;
  --ag-radius-md: 0.1875rem;
  --ag-radius-lg: 0.25rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.35);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
  --ag-shadow-md: 0 4px 12px 0 rgba(0, 0, 0, 0.45);
  --ag-shadow-lg: 0 8px 20px -1px rgba(0, 0, 0, 0.5);
  --ag-shadow-xl: 0 12px 28px -2px rgba(0, 0, 0, 0.55);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #f2555c;
  --ag-blue-50: #ffe5e6;
  --ag-blue-100: #ffd6d8;
  --ag-blue-200: #ffa3a8;
  --ag-blue-300: #f2555c;
  --ag-blue-400: #d9363e;
  --ag-blue-500: #b81d24;
  --ag-blue-600: #94151b;
  --ag-blue-700: #1f1f1f;
  --ag-blue-800: #141414;
  --ag-blue-900: #0a0a0a;
}`},"rosewood-ink":{light:`:where(html).ag-skin-rosewood-ink {
  --ag-primary: #9f1239;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #881337;
  --ag-primary-border: #fecdd3;
  --ag-primary-background: #fff1f2;
  --ag-primary-text: #881337;
  --ag-focus: 159, 18, 57;
  --ag-focus-dark: #be123c;
  --ag-text-primary: #1f1417;
  --ag-text-secondary: #4a353b;
  --ag-text-muted: #785f66;
  --ag-text-primary-muted: #332227;
  --ag-border: #e0d3d6;
  --ag-border-subtle: #ede3e6;
  --ag-background-primary: #fffcfd;
  --ag-background-secondary: #f9f3f5;
  --ag-background-tertiary: #f0e6e9;
  --ag-neutral-background: #f0e6e9;
  --ag-neutral-text: #1f1417;
  --ag-neutral-border: #d4c1c6;
  --ag-radius-lg: 0.5rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(31, 20, 23, 0.05);
  --ag-shadow-sm: 0 2px 6px 0 rgba(31, 20, 23, 0.07);
  --ag-shadow-md: 0 4px 12px -1px rgba(31, 20, 23, 0.09);
  --ag-shadow-lg: 0 8px 20px -2px rgba(31, 20, 23, 0.11);
  --ag-shadow-xl: 0 12px 28px -4px rgba(31, 20, 23, 0.14);
  --ag-rating-filled: #d97706;
  --ag-rating-filled-primary: #9f1239;
  --ag-blue-50: #fff1f2;
  --ag-blue-100: #ffe4e6;
  --ag-blue-200: #fecdd3;
  --ag-blue-300: #fda4af;
  --ag-blue-400: #fb7185;
  --ag-blue-500: #e11d48;
  --ag-blue-600: #9f1239;
  --ag-blue-700: #881337;
  --ag-blue-800: #4c0519;
  --ag-blue-900: #2e030f;
}`,dark:`[data-theme="dark"].ag-skin-rosewood-ink {
  --ag-primary: #fb7185;
  --ag-primary-fg: #24060d;
  --ag-primary-dark: #f43f5e;
  --ag-primary-border: #fb7185;
  --ag-primary-background: #33121a;
  --ag-primary-text: #ffe4e6;
  --ag-focus: 253, 164, 175;
  --ag-focus-dark: #ffe4e6;
  --ag-text-primary: #f7f2f4;
  --ag-text-secondary: #d6cbd0;
  --ag-text-muted: #9c8e93;
  --ag-text-primary-muted: #e8dfe2;
  --ag-border: #2e2a2c;
  --ag-border-subtle: #221f20;
  --ag-background-primary: #131112;
  --ag-background-secondary: #1a1819;
  --ag-background-tertiary: #232022;
  --ag-neutral-background: #232022;
  --ag-neutral-text: #f7f2f4;
  --ag-neutral-border: #3b3538;
  --ag-radius-lg: 0.5rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #fb7185;
  --ag-blue-50: #fff1f2;
  --ag-blue-100: #ffe4e6;
  --ag-blue-200: #fda4af;
  --ag-blue-300: #fb7185;
  --ag-blue-400: #f43f5e;
  --ag-blue-500: #e11d48;
  --ag-blue-600: #9f1239;
  --ag-blue-700: #232022;
  --ag-blue-800: #1a1819;
  --ag-blue-900: #131112;
}`},"slate-azure":{light:`:where(html).ag-skin-slate-azure {
  --ag-primary: #0369a1;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #075985;
  --ag-primary-border: #bae6fd;
  --ag-primary-background: #f0f9ff;
  --ag-primary-text: #0c4a6e;
  --ag-focus: 3, 105, 161;
  --ag-focus-dark: #0284c7;
  --ag-text-primary: #0f172a;
  --ag-text-secondary: #334155;
  --ag-text-muted: #64748b;
  --ag-text-primary-muted: #1e293b;
  --ag-border: #cbd5e1;
  --ag-border-subtle: #e2e8f0;
  --ag-background-primary: #ffffff;
  --ag-background-secondary: #f4f8fb;
  --ag-background-tertiary: #e8f1f8;
  --ag-neutral-background: #e8f1f8;
  --ag-neutral-text: #0f172a;
  --ag-neutral-border: #cbd5e1;
  --ag-radius-lg: 0.625rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
  --ag-shadow-sm: 0 2px 5px 0 rgba(15, 23, 42, 0.07);
  --ag-shadow-md: 0 4px 12px -1px rgba(15, 23, 42, 0.09);
  --ag-shadow-lg: 0 8px 20px -2px rgba(15, 23, 42, 0.11);
  --ag-shadow-xl: 0 12px 28px -4px rgba(15, 23, 42, 0.14);
  --ag-rating-filled: #d97706;
  --ag-rating-filled-primary: #0369a1;
  --ag-blue-50: #f0f9ff;
  --ag-blue-100: #e0f2fe;
  --ag-blue-200: #bae6fd;
  --ag-blue-300: #7dd3fc;
  --ag-blue-400: #38bdf8;
  --ag-blue-500: #0284c7;
  --ag-blue-600: #0369a1;
  --ag-blue-700: #075985;
  --ag-blue-800: #0c4a6e;
  --ag-blue-900: #082f49;
}`,dark:`[data-theme="dark"].ag-skin-slate-azure {
  --ag-primary: #38bdf8;
  --ag-primary-fg: #061c29;
  --ag-primary-dark: #0ea5e9;
  --ag-primary-border: #38bdf8;
  --ag-primary-background: #102a3a;
  --ag-primary-text: #e0f2fe;
  --ag-focus: 125, 211, 252;
  --ag-focus-dark: #e0f2fe;
  --ag-text-primary: #f4f6f8;
  --ag-text-secondary: #cbd5e1;
  --ag-text-muted: #94a3b8;
  --ag-text-primary-muted: #e2e8f0;
  --ag-border: #2b2f36;
  --ag-border-subtle: #202328;
  --ag-background-primary: #111214;
  --ag-background-secondary: #181a1d;
  --ag-background-tertiary: #212428;
  --ag-neutral-background: #212428;
  --ag-neutral-text: #f4f6f8;
  --ag-neutral-border: #343940;
  --ag-radius-lg: 0.625rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #38bdf8;
  --ag-blue-50: #f0f9ff;
  --ag-blue-100: #e0f2fe;
  --ag-blue-200: #7dd3fc;
  --ag-blue-300: #38bdf8;
  --ag-blue-400: #0ea5e9;
  --ag-blue-500: #0284c7;
  --ag-blue-600: #0369a1;
  --ag-blue-700: #212428;
  --ag-blue-800: #181a1d;
  --ag-blue-900: #111214;
}`},solarized:{light:`/**
 * Solarized Skin — Light Mode
 *
 * Classic Solarized Light theme with teal/cyan primary.
 * Specifically designed for scientific eye-strain reduction with
 * warm off-white background and carefully balanced contrast.
 *
 * Activate by adding class="ag-skin-solarized" to <html>.
 * Load this file AFTER ag-tokens.css so the cascade overrides.
 */

:where(html).ag-skin-solarized {
  /* ── Primary color family (Solarized cyan) ── */
  --ag-primary: #2aa198;
  --ag-primary-fg: #fdf6e3;
  --ag-primary-dark: #1d736c;
  --ag-primary-border: #5acec7;
  --ag-primary-background: #e8f8f7;
  --ag-primary-text: #1c6e67;

  /* ── Focus ring (teal-derived RGB) ── */
  --ag-focus: 42, 161, 152;
  --ag-focus-dark: #238880;

  /* ── Semantic text (Solarized base colors) ── */
  --ag-text-primary: #04252e;
  --ag-text-secondary: #586e75;
  --ag-text-muted: #839496;
  --ag-text-primary-muted: #657b83;

  /* ── Borders (Solarized base1 and base2) ── */
  --ag-border: #93a1a1;
  --ag-border-subtle: #c2caca;

  /* ── Backgrounds (Solarized base3 and base2) ── */
  --ag-background-secondary: #eee8d5;
  --ag-background-tertiary: #e8e2cf;

  /* ── Border radius (comfortable, moderate) ── */
  --ag-radius-lg: 0.75rem;

  /* ── Shadows (warm neutral) ── */
  --ag-shadow-xs: 0 1px 3px 0 rgba(7, 54, 66, 0.06);
  --ag-shadow-sm: 0 1px 5px 0 rgba(7, 54, 66, 0.08);
  --ag-shadow-md: 0 2px 10px 0 rgba(7, 54, 66, 0.08);
  --ag-shadow-lg: 0 4px 18px -2px rgba(7, 54, 66, 0.1);
  --ag-shadow-xl: 0 8px 28px -4px rgba(7, 54, 66, 0.12);

  /* ── Rating ── */
  --ag-rating-filled: #b58900;
  --ag-rating-filled-primary: #2aa198;

  /* ── Solarized teal/cyan palette (overrides blue palette) ── */
  --ag-blue-50: #e8f8f7;
  --ag-blue-100: #c5edea;
  --ag-blue-200: #96deda;
  --ag-blue-300: #5acec7;
  --ag-blue-400: #2aa198;
  --ag-blue-500: #238880;
  --ag-blue-600: #1c6e67;
  --ag-blue-700: #155551;
  --ag-blue-800: #0d3b38;
  --ag-blue-900: #062220;

  /* ── Neutral surfaces (MessageBubble neutral) ── */
  --ag-neutral-background: #e8e2cf;
  --ag-neutral-text: #04252e;
  --ag-neutral-border: #93a1a1;
}`,dark:`[data-theme="dark"].ag-skin-solarized {
  --ag-primary: #2aa198;
  --ag-primary-fg: #000000;
  --ag-primary-dark: #238880;
  --ag-primary-border: #268a82;
  --ag-primary-background: #14282b;
  --ag-primary-text: #9cebe5;
  --ag-focus: 42, 161, 152;
  --ag-focus-dark: #9cebe5;
  --ag-text-primary: #eee8d5;
  --ag-text-secondary: #c7c4b8;
  --ag-text-muted: #8e9491;
  --ag-text-primary-muted: #dcd6c4;
  --ag-border: #2a3234;
  --ag-border-subtle: #202729;
  --ag-background-primary: #121617;
  --ag-background-secondary: #191e20;
  --ag-background-tertiary: #22292b;
  --ag-neutral-background: #22292b;
  --ag-neutral-text: #eee8d5;
  --ag-neutral-border: #353f42;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 1px 5px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 2px 10px 0 rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 4px 18px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 8px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #b58900;
  --ag-rating-filled-primary: #2aa198;
  --ag-blue-50: #9cebe5;
  --ag-blue-100: #5acec7;
  --ag-blue-200: #2aa198;
  --ag-blue-300: #238880;
  --ag-blue-400: #1c6e67;
  --ag-blue-500: #155551;
  --ag-blue-600: #0d3b38;
  --ag-blue-700: #22292b;
  --ag-blue-800: #191e20;
  --ag-blue-900: #121617;
}`},"swiss-grid":{light:`:where(html).ag-skin-swiss-grid {
  --ag-primary: #d63200;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #b82c00;
  --ag-primary-border: #f5b39d;
  --ag-primary-background: #fff2ed;
  --ag-primary-text: #9e2500;
  --ag-focus: 158, 37, 0;
  --ag-focus-dark: #ff450a;
  --ag-text-primary: #111111;
  --ag-text-secondary: #333333;
  --ag-text-muted: #666666;
  --ag-text-primary-muted: #222222;
  --ag-border: #cccccc;
  --ag-border-subtle: #e2e2e0;
  --ag-background-primary: #f7f7f5;
  --ag-background-secondary: #efefec;
  --ag-background-tertiary: #e5e5e1;
  --ag-neutral-background: #e5e5e1;
  --ag-neutral-text: #111111;
  --ag-neutral-border: #bdbdb8;
  --ag-radius-sm: 0.125rem;
  --ag-radius-md: 0.125rem;
  --ag-radius-lg: 0.1875rem;
  --ag-shadow-xs: 0 1px 0 0 rgba(17, 17, 17, 0.08);
  --ag-shadow-sm: 0 2px 0 0 rgba(17, 17, 17, 0.1);
  --ag-shadow-md: 0 3px 0 0 rgba(17, 17, 17, 0.12);
  --ag-shadow-lg: 0 4px 0 0 rgba(17, 17, 17, 0.14);
  --ag-shadow-xl: 0 6px 0 0 rgba(17, 17, 17, 0.16);
  --ag-rating-filled: #e03600;
  --ag-rating-filled-primary: #e03600;
  --ag-blue-50: #fff2ed;
  --ag-blue-100: #ffe0d4;
  --ag-blue-200: #f5b39d;
  --ag-blue-300: #ff855e;
  --ag-blue-400: #ff5722;
  --ag-blue-500: #e03600;
  --ag-blue-600: #b82c00;
  --ag-blue-700: #9e2500;
  --ag-blue-800: #731b00;
  --ag-blue-900: #471000;
}`,dark:`[data-theme="dark"].ag-skin-swiss-grid {
  --ag-primary: #ff6b3d;
  --ag-primary-fg: #1a0700;
  --ag-primary-dark: #ff450a;
  --ag-primary-border: #ff6b3d;
  --ag-primary-background: #381205;
  --ag-primary-text: #ffd6c9;
  --ag-focus: 255, 134, 97;
  --ag-focus-dark: #ffd6c9;
  --ag-text-primary: #f5f5f3;
  --ag-text-secondary: #d4d4d0;
  --ag-text-muted: #999994;
  --ag-text-primary-muted: #e5e5e1;
  --ag-border: #383836;
  --ag-border-subtle: #292927;
  --ag-background-primary: #121211;
  --ag-background-secondary: #1b1b19;
  --ag-background-tertiary: #252523;
  --ag-neutral-background: #252523;
  --ag-neutral-text: #f5f5f3;
  --ag-neutral-border: #454542;
  --ag-radius-sm: 0.125rem;
  --ag-radius-md: 0.125rem;
  --ag-radius-lg: 0.1875rem;
  --ag-shadow-xs: 0 1px 0 0 rgba(255, 255, 255, 0.08);
  --ag-shadow-sm: 0 2px 0 0 rgba(255, 255, 255, 0.1);
  --ag-shadow-md: 0 3px 0 0 rgba(255, 255, 255, 0.12);
  --ag-shadow-lg: 0 4px 0 0 rgba(255, 255, 255, 0.14);
  --ag-shadow-xl: 0 6px 0 0 rgba(255, 255, 255, 0.16);
  --ag-rating-filled: #ff6b3d;
  --ag-rating-filled-primary: #ff6b3d;
  --ag-blue-50: #ffe8e0;
  --ag-blue-100: #ffd6c9;
  --ag-blue-200: #ffa68a;
  --ag-blue-300: #ff6b3d;
  --ag-blue-400: #ff450a;
  --ag-blue-500: #e03600;
  --ag-blue-600: #b82c00;
  --ag-blue-700: #252523;
  --ag-blue-800: #1b1b19;
  --ag-blue-900: #121211;
}`},"terracotta-clay":{light:`:where(html).ag-skin-terracotta-clay {
  --ag-primary: #c2410c;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #9a3412;
  --ag-primary-border: #fed7aa;
  --ag-primary-background: #fff7ed;
  --ag-primary-text: #7c2d12;
  --ag-focus: 194, 65, 12;
  --ag-focus-dark: #ea580c;
  --ag-text-primary: #1c1917;
  --ag-text-secondary: #44403c;
  --ag-text-muted: #78716c;
  --ag-text-primary-muted: #292524;
  --ag-border: #dfd6cc;
  --ag-border-subtle: #ede6de;
  --ag-background-primary: #fffdf9;
  --ag-background-secondary: #f8f3ec;
  --ag-background-tertiary: #efe7dc;
  --ag-neutral-background: #efe7dc;
  --ag-neutral-text: #1c1917;
  --ag-neutral-border: #d4c8ba;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(28, 25, 23, 0.05);
  --ag-shadow-sm: 0 2px 6px 0 rgba(28, 25, 23, 0.07);
  --ag-shadow-md: 0 4px 12px -1px rgba(28, 25, 23, 0.09);
  --ag-shadow-lg: 0 8px 20px -2px rgba(28, 25, 23, 0.11);
  --ag-shadow-xl: 0 12px 28px -4px rgba(28, 25, 23, 0.14);
  --ag-rating-filled: #d97706;
  --ag-rating-filled-primary: #c2410c;
  --ag-blue-50: #fff7ed;
  --ag-blue-100: #ffedd5;
  --ag-blue-200: #fed7aa;
  --ag-blue-300: #fdba74;
  --ag-blue-400: #fb923c;
  --ag-blue-500: #f97316;
  --ag-blue-600: #c2410c;
  --ag-blue-700: #9a3412;
  --ag-blue-800: #7c2d12;
  --ag-blue-900: #431407;
}`,dark:`[data-theme="dark"].ag-skin-terracotta-clay {
  --ag-primary: #fb923c;
  --ag-primary-fg: #240c02;
  --ag-primary-dark: #f97316;
  --ag-primary-border: #fb923c;
  --ag-primary-background: #33190c;
  --ag-primary-text: #ffedd5;
  --ag-focus: 253, 186, 116;
  --ag-focus-dark: #ffedd5;
  --ag-text-primary: #f7f4f0;
  --ag-text-secondary: #d6cfc7;
  --ag-text-muted: #9e958c;
  --ag-text-primary-muted: #e8e2da;
  --ag-border: #302d2a;
  --ag-border-subtle: #24211f;
  --ag-background-primary: #141312;
  --ag-background-secondary: #1b1a18;
  --ag-background-tertiary: #242220;
  --ag-neutral-background: #242220;
  --ag-neutral-text: #f7f4f0;
  --ag-neutral-border: #3d3935;
  --ag-radius-lg: 0.75rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #fb923c;
  --ag-blue-50: #fff7ed;
  --ag-blue-100: #ffedd5;
  --ag-blue-200: #fdba74;
  --ag-blue-300: #fb923c;
  --ag-blue-400: #f97316;
  --ag-blue-500: #ea580c;
  --ag-blue-600: #c2410c;
  --ag-blue-700: #242220;
  --ag-blue-800: #1b1a18;
  --ag-blue-900: #141312;
}`},"tokyo-ink":{light:`:where(html).ag-skin-tokyo-ink {
  --ag-primary: #c92a38;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #a8202c;
  --ag-primary-border: #e6a3a9;
  --ag-primary-background: #fcedee;
  --ag-primary-text: #8f1924;
  --ag-focus: 201, 42, 56;
  --ag-focus-dark: #d93846;
  --ag-text-primary: #181816;
  --ag-text-secondary: #3f3e3a;
  --ag-text-muted: #6e6c65;
  --ag-text-primary-muted: #292825;
  --ag-border: #cfcdc4;
  --ag-border-subtle: #e2e0d8;
  --ag-background-primary: #f7f6f2;
  --ag-background-secondary: #efeee8;
  --ag-background-tertiary: #e5e3db;
  --ag-neutral-background: #e5e3db;
  --ag-neutral-text: #181816;
  --ag-neutral-border: #c4c1b7;
  --ag-radius-sm: 0.1875rem;
  --ag-radius-md: 0.25rem;
  --ag-radius-lg: 0.375rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(24, 24, 22, 0.06);
  --ag-shadow-sm: 0 2px 4px 0 rgba(24, 24, 22, 0.08);
  --ag-shadow-md: 0 3px 8px 0 rgba(24, 24, 22, 0.09);
  --ag-shadow-lg: 0 6px 14px -1px rgba(24, 24, 22, 0.11);
  --ag-shadow-xl: 0 10px 22px -2px rgba(24, 24, 22, 0.13);
  --ag-rating-filled: #c98a14;
  --ag-rating-filled-primary: #c92a38;
  --ag-blue-50: #fcedee;
  --ag-blue-100: #f7d4d7;
  --ag-blue-200: #e6a3a9;
  --ag-blue-300: #db747d;
  --ag-blue-400: #d93846;
  --ag-blue-500: #c92a38;
  --ag-blue-600: #a8202c;
  --ag-blue-700: #8f1924;
  --ag-blue-800: #661018;
  --ag-blue-900: #3d080d;
}`,dark:`[data-theme="dark"].ag-skin-tokyo-ink {
  --ag-primary: #f0545e;
  --ag-primary-fg: #1a0709;
  --ag-primary-dark: #e34654;
  --ag-primary-border: #d94854;
  --ag-primary-background: #2f1518;
  --ag-primary-text: #ffd6d9;
  --ag-focus: 245, 118, 126;
  --ag-focus-dark: #ffd6d9;
  --ag-text-primary: #f4f3ef;
  --ag-text-secondary: #dad8d0;
  --ag-text-muted: #9e9b91;
  --ag-text-primary-muted: #e6e4dc;
  --ag-border: #363530;
  --ag-border-subtle: #282723;
  --ag-background-primary: #141412;
  --ag-background-secondary: #1d1c19;
  --ag-background-tertiary: #272622;
  --ag-neutral-background: #272622;
  --ag-neutral-text: #f4f3ef;
  --ag-neutral-border: #45433c;
  --ag-radius-sm: 0.1875rem;
  --ag-radius-md: 0.25rem;
  --ag-radius-lg: 0.375rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
  --ag-shadow-md: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  --ag-shadow-lg: 0 8px 18px -1px rgba(0, 0, 0, 0.45);
  --ag-shadow-xl: 0 12px 26px -2px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #f0545e;
  --ag-blue-50: #ffe5e7;
  --ag-blue-100: #ffd6d9;
  --ag-blue-200: #ffa3aa;
  --ag-blue-300: #f0545e;
  --ag-blue-400: #d93846;
  --ag-blue-500: #c92a38;
  --ag-blue-600: #a8202c;
  --ag-blue-700: #272622;
  --ag-blue-800: #1d1c19;
  --ag-blue-900: #141412;
}`},"velvet-plum":{light:`:where(html).ag-skin-velvet-plum {
  --ag-primary: #881337;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #6e0f2c;
  --ag-primary-border: #e5b3c3;
  --ag-primary-background: #fdf2f6;
  --ag-primary-text: #6e0f2c;
  --ag-focus: 136, 19, 55;
  --ag-focus-dark: #be185d;
  --ag-text-primary: #24131a;
  --ag-text-secondary: #4f313e;
  --ag-text-muted: #7d5d6b;
  --ag-text-primary-muted: #38202b;
  --ag-border: #e3ced6;
  --ag-border-subtle: #efe0e6;
  --ag-background-primary: #fcf8fa;
  --ag-background-secondary: #f6edf1;
  --ag-background-tertiary: #ede0e6;
  --ag-neutral-background: #ede0e6;
  --ag-neutral-text: #24131a;
  --ag-neutral-border: #d4bac5;
  --ag-radius-lg: 1rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(36, 19, 26, 0.05);
  --ag-shadow-sm: 0 2px 6px 0 rgba(136, 19, 55, 0.07);
  --ag-shadow-md: 0 4px 12px -1px rgba(136, 19, 55, 0.09);
  --ag-shadow-lg: 0 8px 20px -2px rgba(136, 19, 55, 0.11);
  --ag-shadow-xl: 0 12px 28px -4px rgba(136, 19, 55, 0.14);
  --ag-rating-filled: #d97706;
  --ag-rating-filled-primary: #881337;
  --ag-blue-50: #fdf2f6;
  --ag-blue-100: #fae0e9;
  --ag-blue-200: #e5b3c3;
  --ag-blue-300: #d4829c;
  --ag-blue-400: #be185d;
  --ag-blue-500: #881337;
  --ag-blue-600: #6e0f2c;
  --ag-blue-700: #570b22;
  --ag-blue-800: #3d0717;
  --ag-blue-900: #24030d;
}`,dark:`[data-theme="dark"].ag-skin-velvet-plum {
  --ag-primary: #e57399;
  --ag-primary-fg: #1c080f;
  --ag-primary-dark: #cf567f;
  --ag-primary-border: #c95b80;
  --ag-primary-background: #2b181f;
  --ag-primary-text: #f7d9e3;
  --ag-focus: 235, 143, 174;
  --ag-focus-dark: #f7d9e3;
  --ag-text-primary: #f5f0f2;
  --ag-text-secondary: #d6ccd0;
  --ag-text-muted: #9c9095;
  --ag-text-primary-muted: #e6dce0;
  --ag-border: #2e2d30;
  --ag-border-subtle: #222224;
  --ag-background-primary: #141212;
  --ag-background-secondary: #19191a;
  --ag-background-tertiary: #222224;
  --ag-neutral-background: #222224;
  --ag-neutral-text: #f5f0f2;
  --ag-neutral-border: #3b3a3e;
  --ag-radius-lg: 1rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.28);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.34);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.38);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.44);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.5);
  --ag-rating-filled: #fbbf24;
  --ag-rating-filled-primary: #e57399;
  --ag-blue-50: #fcebf1;
  --ag-blue-100: #f7d9e3;
  --ag-blue-200: #eb9fb8;
  --ag-blue-300: #e57399;
  --ag-blue-400: #cf567f;
  --ag-blue-500: #ad3960;
  --ag-blue-600: #881337;
  --ag-blue-700: #262122;
  --ag-blue-800: #1d191a;
  --ag-blue-900: #141212;
}`},"warm-vellum":{light:`:where(html).ag-skin-warm-vellum {
  --ag-primary: #2c2a26;
  --ag-primary-fg: #ffffff;
  --ag-primary-dark: #191815;
  --ag-primary-border: #d6d3cb;
  --ag-primary-background: #f1efe9;
  --ag-primary-text: #1f1e1b;
  --ag-focus: 44, 42, 38;
  --ag-focus-dark: #57534a;
  --ag-text-primary: #191919;
  --ag-text-secondary: #4a4842;
  --ag-text-muted: #66635b;
  --ag-text-primary-muted: #2f2e2a;
  --ag-border: #e3e1da;
  --ag-border-subtle: #eeece6;
  --ag-background-primary: #ffffff;
  --ag-background-secondary: #f7f6f3;
  --ag-background-tertiary: #efede7;
  --ag-neutral-background: #efede7;
  --ag-neutral-text: #191919;
  --ag-neutral-border: #d6d3cb;
  --ag-radius-lg: 0.5rem;
  --ag-shadow-xs: 0 1px 2px 0 rgba(25, 25, 25, 0.04);
  --ag-shadow-sm: 0 2px 5px 0 rgba(25, 25, 25, 0.06);
  --ag-shadow-md: 0 4px 12px -1px rgba(25, 25, 25, 0.07);
  --ag-shadow-lg: 0 8px 20px -2px rgba(25, 25, 25, 0.09);
  --ag-shadow-xl: 0 12px 28px -4px rgba(25, 25, 25, 0.11);
  --ag-rating-filled: #b45309;
  --ag-rating-filled-primary: #2c2a26;
  --ag-blue-50: #f7f6f3;
  --ag-blue-100: #efede7;
  --ag-blue-200: #dcd9d0;
  --ag-blue-300: #b8b4a8;
  --ag-blue-400: #858176;
  --ag-blue-500: #57534a;
  --ag-blue-600: #2c2a26;
  --ag-blue-700: #1f1e1b;
  --ag-blue-800: #141311;
  --ag-blue-900: #0a0a09;
}`,dark:`[data-theme="dark"].ag-skin-warm-vellum {
  --ag-primary: #ece9e1;
  --ag-primary-fg: #191919;
  --ag-primary-dark: #d6d2c7;
  --ag-primary-border: #4a4842;
  --ag-primary-background: #292824;
  --ag-primary-text: #f7f6f3;
  --ag-focus: 236, 233, 225;
  --ag-focus-dark: #f7f6f3;
  --ag-text-primary: #f5f4f0;
  --ag-text-secondary: #cfccc2;
  --ag-text-muted: #969389;
  --ag-text-primary-muted: #e3e0d8;
  --ag-border: #33322e;
  --ag-border-subtle: #262522;
  --ag-background-primary: #191919;
  --ag-background-secondary: #21201e;
  --ag-background-tertiary: #2b2a27;
  --ag-neutral-background: #2b2a27;
  --ag-neutral-text: #f5f4f0;
  --ag-neutral-border: #45433e;
  --ag-radius-lg: 0.5rem;
  --ag-shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  --ag-shadow-sm: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  --ag-shadow-md: 0 4px 12px -1px rgba(0, 0, 0, 0.35);
  --ag-shadow-lg: 0 8px 20px -2px rgba(0, 0, 0, 0.4);
  --ag-shadow-xl: 0 12px 28px -4px rgba(0, 0, 0, 0.45);
  --ag-rating-filled: #f59e0b;
  --ag-rating-filled-primary: #ece9e1;
  --ag-blue-50: #f7f6f3;
  --ag-blue-100: #ece9e1;
  --ag-blue-200: #cfccc2;
  --ag-blue-300: #a8a499;
  --ag-blue-400: #7d7a70;
  --ag-blue-500: #57534a;
  --ag-blue-600: #3d3b35;
  --ag-blue-700: #2b2a27;
  --ag-blue-800: #21201e;
  --ag-blue-900: #191919;
}`}},De=[{id:"evergreen",label:"Evergreen",swatch:"#00a87f"},{id:"",label:"Default",swatch:"#297aff"},{id:"deep-forest",label:"Deep Forest",swatch:"#1f514c"},{id:"claymorphic",label:"Claymorphic",swatch:"#c96442"},{id:"mo-neobrut",label:"Mo-Neobrut",swatch:"#00bcd4"},{id:"coffee-espresso",label:"Coffee Espresso",swatch:"#6f4e37"},{id:"monochromatic",label:"Monochromatic",swatch:"#000000"},{id:"paper",label:"Paper",swatch:"#433422"},{id:"solarized",label:"Solarized",swatch:"#2aa198"},{id:"tokyo-ink",label:"Tokyo Ink",swatch:"#c92a38"},{id:"nordic-aurora",label:"Nordic Aurora",swatch:"#0f766e"},{id:"swiss-grid",label:"Swiss Grid",swatch:"#d63200"},{id:"velvet-plum",label:"Velvet Plum",swatch:"#881337"},{id:"copper-patina",label:"Copper Patina",swatch:"#1b6b63"},{id:"warm-vellum",label:"Warm Vellum",swatch:"#2c2a26"},{id:"press-crimson",label:"Press Crimson",swatch:"#b81d24"},{id:"coral-harbor",label:"Coral Harbor",swatch:"#c92a3e"},{id:"neon-obsidian",label:"Neon Obsidian",swatch:"#5200ff"},{id:"ivory-cobalt",label:"Ivory Cobalt",swatch:"#0b5fff"},{id:"obsidian-minimal",label:"Obsidian Minimal",swatch:"#171717"},{id:"slate-azure",label:"Slate Azure",swatch:"#0369a1"},{id:"terracotta-clay",label:"Terracotta Clay",swatch:"#c2410c"},{id:"emerald-vault",label:"Emerald Vault",swatch:"#047857"},{id:"indigo-dusk",label:"Indigo Dusk",swatch:"#4338ca"},{id:"golden-amber",label:"Golden Amber",swatch:"#b45309"},{id:"rosewood-ink",label:"Rosewood Ink",swatch:"#9f1239"},{id:"pebble-cerulean",label:"Pebble Cerulean",swatch:"#1a73e8"},{id:"olive-moss",label:"Olive Moss",swatch:"#4d6629"},{id:"mulberry-slate",label:"Mulberry Slate",swatch:"#86198f"}];function ma(J){const S=document.documentElement;S.className=S.className.replace(/\bag-skin-[\w-]+\b/g,"").trim(),J&&S.classList.add(`ag-skin-${J}`),localStorage.setItem("ag-skin",J)}const Ee={class:"ptp"},Ie={class:"ptp-section"},Ne={class:"ptp-skins"},$e=["title","aria-label","aria-pressed","onClick"],Ge={class:"ptp-swatch-label"},He={class:"ptp-section"},je=["aria-label","onKeydown"],Oe={class:"ptp-palette-swatches"},Ve=["title"],Ue={class:"ptp-section"},Ke=["aria-expanded"],We={class:"ptp-paste-area"},Xe={class:"ptp-paste-actions"},qe={key:0,class:"ptp-status","aria-live":"polite"},Je={__name:"PlaybookThemePanel",setup(J){const S=U(""),k=U(!1),H=U([]),W=U(null),V=U(!0),u=U(""),y=U("");Ua(()=>{S.value=localStorage.getItem("ag-skin")||"",S.value||(u.value=localStorage.getItem("ag-custom-css")||"")});function ya(r){const a=r.trim(),e=a.includes("{")?a:a?`:where(html) {
${a}
}`:"";if(!e)return;let g=document.getElementById("ag-custom-theme");g||(g=document.createElement("style"),g.id="ag-custom-theme",document.head.appendChild(g)),g.textContent=e}function ka(){var r;(r=document.getElementById("ag-custom-theme"))==null||r.remove()}function Ka(r){S.value=r,ma(r),ka(),localStorage.removeItem("ag-custom-css"),ha(),u.value=Wa(r),y.value="Skin applied",setTimeout(()=>{y.value=""},2e3)}function Wa(r){const a=Ae[r];if(!a)return"";const e=r.replace(/[-]/g,"\\-"),g=(a.light||"").replace(new RegExp(`:where\\(html\\)\\.ag-skin-${e}`,"g"),":where(html)"),o=(a.dark||"").replace(new RegExp(`\\[data-theme="dark"\\]\\.ag-skin-${e}`,"g"),'[data-theme="dark"]');return[g.trim(),o.trim()].filter(Boolean).join(`

`)}function Xa(){S.value&&(ma(""),S.value=""),ya(u.value),localStorage.setItem("ag-custom-css",u.value),y.value="Applied",setTimeout(()=>{y.value=""},2e3)}function qa(){u.value="",localStorage.removeItem("ag-custom-css"),ka(),y.value="Cleared",setTimeout(()=>{y.value=""},2e3)}async function Ja(){if(u.value){try{await navigator.clipboard.writeText(u.value),y.value="Copied!"}catch{y.value="Copy failed"}setTimeout(()=>{y.value=""},2e3)}}function Za(){if(!u.value)return;const r=new Blob([u.value],{type:"text/css"}),a=URL.createObjectURL(r),e=document.createElement("a");e.href=a,e.download="ag-theme.css",e.click(),URL.revokeObjectURL(a),y.value="Downloaded!",setTimeout(()=>{y.value=""},2e3)}function ta(){var r;(r=W.value)==null||r.click()}function Qa(r){var e,g;k.value=!1;const a=(g=(e=r.dataTransfer)==null?void 0:e.files)==null?void 0:g[0];a&&a.type.startsWith("image/")&&wa(a)}function Ya(r){var e,g;const a=(g=(e=r.target)==null?void 0:e.files)==null?void 0:g[0];a&&wa(a)}function ha(){H.value=[],W.value&&(W.value.value="")}function wa(r){const a=new Image,e=URL.createObjectURL(r);a.onload=()=>{URL.revokeObjectURL(e);const g=ee(a);H.value=g;const{light:o,dark:d}=re(g),s=ge(o,d);S.value&&(ma(""),S.value=""),u.value=s,ya(s),localStorage.setItem("ag-custom-css",s),y.value="Theme extracted and applied",setTimeout(()=>{y.value=""},3e3)},a.src=e}function va(r,a,e){return"#"+[r,a,e].map(g=>g.toString(16).padStart(2,"0")).join("")}function B(r){const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:{r:0,g:0,b:0}}function T(r,a,e){r/=255,a/=255,e/=255;const g=Math.max(r,a,e),o=Math.min(r,a,e);let d=0,s=0;const f=(g+o)/2;if(g!==o){const m=g-o;switch(s=f>.5?m/(2-g-o):m/(g+o),g){case r:d=((a-e)/m+(a<e?6:0))/6;break;case a:d=((e-r)/m+2)/6;break;case e:d=((r-a)/m+4)/6;break}}return{h:d*360,s,l:f}}function c(r,a,e){r/=360;const g=(f,m,b)=>(b<0&&(b+=1),b>1&&(b-=1),b<1/6?f+(m-f)*6*b:b<1/2?m:b<2/3?f+(m-f)*(2/3-b)*6:f);let o,d,s;if(a===0)o=d=s=e;else{const f=e<.5?e*(1+a):e+a-e*a,m=2*e-f;o=g(m,f,r+1/3),d=g(m,f,r),s=g(m,f,r-1/3)}return va(Math.round(o*255),Math.round(d*255),Math.round(s*255))}function j(r){const{r:a,g:e,b:g}=B(r),o=d=>(d/=255,d<=.03928?d/12.92:Math.pow((d+.055)/1.055,2.4));return .2126*o(a)+.7152*o(e)+.0722*o(g)}function oa(r,a){const e=j(r),g=j(a);return(Math.max(e,g)+.05)/(Math.min(e,g)+.05)}function ea(r){return oa(r,"#000000")>=oa(r,"#ffffff")?"#000000":"#ffffff"}function R(r,a,e,g=!0){let{h:o,s:d,l:s}=(()=>{const{r:f,g:m,b}=B(r);return T(f,m,b)})();for(let f=0;f<20&&!(oa(c(o,d,s),a)>=e);f++)s=g?Math.max(0,s-.05):Math.min(1,s+.05);return c(o,d,s)}function O(r,a){const{r:e,g,b:o}=B(r),{h:d,s,l:f}=T(e,g,o);return c(d,s,Math.max(0,f-a))}function E(r,a){const{r:e,g,b:o}=B(r),{h:d,s,l:f}=T(e,g,o);return c(d,s,Math.min(1,f+a))}function ae(r){const{r:a,g:e,b:g}=B(r),{s:o}=T(a,e,g);return o*(1-Math.abs(j(r)-.5)*2)}function ee(r){const e=document.createElement("canvas"),g=Math.min(1,200/Math.max(r.width,r.height));e.width=Math.round(r.width*g),e.height=Math.round(r.height*g);const o=e.getContext("2d");o.drawImage(r,0,0,e.width,e.height);const d=o.getImageData(0,0,e.width,e.height).data,s={};for(let b=0;b<d.length;b+=4){if(d[b+3]<128)continue;const h=Math.round(d[b]/24)*24,I=Math.round(d[b+1]/24)*24,Z=Math.round(d[b+2]/24)*24,P=`${h},${I},${Z}`;s[P]=(s[P]||0)+1}const f=Object.entries(s).sort((b,h)=>h[1]-b[1]).map(([b])=>b.split(",").map(Number)),m=[];for(const[b,h,I]of f){if(m.length>=8)break;m.some(([P,N,$])=>{const z=b-P,Q=h-N,L=I-$;return Math.sqrt(z*z+Q*Q+L*L)<50})||m.push([b,h,I])}return m.map(([b,h,I])=>va(b,h,I))}function re(r){var Pa,za,La,Fa,Aa,Da;if(!r.length)return{light:{},dark:{}};const a=r.map(t=>{const{r:i,g:F,b:x}=B(t),_=T(i,F,x);return{hex:t,..._,lum:j(t),vib:ae(t)}}),e=(t,i,F=[])=>a.filter(x=>(t<=i?x.h>=t&&x.h<=i:x.h>=t||x.h<=i)&&!F.includes(x.hex)&&x.s>=.15).sort((x,_)=>_.vib-x.vib)[0],g=[...a].sort((t,i)=>i.vib-t.vib),o=g.find(t=>t.lum>=.15&&t.lum<=.7)||g[0];let d=R(o.hex,"#ffffff",4.5,!0);const{r:s,g:f,b:m}=B(d),b=T(s,f,m),h=b.h,I=B(d),Z=g.find(t=>{const{r:i,g:F,b:x}=B(t.hex),_=i-I.r,A=F-I.g,Ea=x-I.b;return t.hex!==o.hex&&Math.sqrt(_*_+A*A+Ea*Ea)>60});let P=Z?R(Z.hex,"#ffffff",3,!0):c((h+30)%360,b.s,b.l);const N=((Pa=e(90,150))==null?void 0:Pa.hex)??c(120,.5,.35),$=((za=e(0,20)??e(340,360))==null?void 0:za.hex)??c(0,.6,.4),z=((La=e(35,65))==null?void 0:La.hex)??c(45,.7,.45),Q=e(200,240,[d]),L=Q?Q.hex:(()=>{const{r:t,g:i,b:F}=B(d),x=T(t,i,F);return c(210,Math.max(0,x.s-.3),x.l)})(),Sa=a.filter(t=>t.s<.25).sort((t,i)=>i.lum-t.lum),ba=((Fa=Sa[0])==null?void 0:Fa.hex)??c(h,.05,.98),Y=((Aa=Sa[1])==null?void 0:Aa.hex)??O(ba,.04),de=O(Y,.03),la=[...a].sort((t,i)=>t.lum-i.lum)[0],Ba=R((la==null?void 0:la.hex)??"#111827",Y,4.5,!0),{r:te,g:oe,b:be}=B(Ba),sa=T(te,oe,be),Ca=R(c(sa.h,sa.s,Math.min(1,sa.l+.15)),Y,3,!0),le=j(Y),se=j(Ca),fe=(le+se)/2,Ma=c(h,.1,Math.max(.1,Math.min(.9,fe))),ie=E(Ma,.05),w=t=>{const i=R(t,ba,3,!0),{r:F,g:x,b:_}=B(i),{h:A}=T(F,x,_);return{base:i,dark:O(i,.12),background:c(A,.2,.93),text:R(O(i,.1),c(A,.2,.93),4.5,!0)}},ra=((Da=a.filter(t=>t.s<.25&&t.lum<.06).sort((t,i)=>t.lum-i.lum)[0])==null?void 0:Da.hex)??c(h,.1,.07),fa=E(ra,.05),ue=E(ra,.1),ia=[...a].sort((t,i)=>i.lum-t.lum)[0],Ra=R((ia==null?void 0:ia.hex)??"#F0F6FC",fa,4.5,!1),{r:ce,g:ne,b:pe}=B(Ra),ua=T(ce,ne,pe),me=R(c(ua.h,ua.s,Math.max(0,ua.l-.1)),fa,3,!1),Ta=c(h,.12,.25),xe=E(Ta,.08);let G=d;j(G)<.25&&(G=E(G,.2)),G=R(G,"#ffffff",4.5,!1);const{r:ye,g:ke,b:he}=B(G),_a=T(ye,ke,he);let ca=j(P)<.25?E(P,.2):P;const v=t=>{const{r:i,g:F,b:x}=B(t),{h:_}=T(i,F,x);let A=j(t)<.25?E(t,.2):t;return A=R(A,ra,3,!1),{base:A,dark:E(A,.1),background:c(_,.35,.1),text:R(E(A,.1),c(_,.35,.1),4.5,!1)}},we={"--ag-primary":d,"--ag-primary-dark":O(d,.12),"--ag-primary-fg":ea(d),"--ag-primary-background":c(h,.2,.93),"--ag-primary-text":R(O(d,.1),c(h,.2,.93),4.5,!0),"--ag-secondary":P,"--ag-secondary-dark":O(P,.1),"--ag-secondary-fg":ea(P),"--ag-background-primary":ba,"--ag-background-secondary":Y,"--ag-background-tertiary":de,"--ag-text-primary":Ba,"--ag-text-secondary":Ca,"--ag-border":Ma,"--ag-border-subtle":ie,"--ag-success":w(N).base,"--ag-success-dark":w(N).dark,"--ag-success-background":w(N).background,"--ag-success-text":w(N).text,"--ag-danger":w($).base,"--ag-danger-dark":w($).dark,"--ag-danger-background":w($).background,"--ag-danger-text":w($).text,"--ag-warning":w(z).base,"--ag-warning-dark":w(z).dark,"--ag-warning-background":w(z).background,"--ag-warning-text":w(z).text,"--ag-info":w(L).base,"--ag-info-dark":w(L).dark,"--ag-info-background":w(L).background,"--ag-info-text":w(L).text},ve={"--ag-primary":G,"--ag-primary-dark":O(G,.1),"--ag-primary-fg":ea(G),"--ag-primary-background":c(_a.h,.4,.12),"--ag-primary-text":R(E(G,.1),c(_a.h,.4,.12),4.5,!1),"--ag-secondary":ca,"--ag-secondary-dark":O(ca,.1),"--ag-secondary-fg":ea(ca),"--ag-background-primary":ra,"--ag-background-secondary":fa,"--ag-background-tertiary":ue,"--ag-text-primary":Ra,"--ag-text-secondary":me,"--ag-border":Ta,"--ag-border-subtle":xe,"--ag-success":v(N).base,"--ag-success-dark":v(N).dark,"--ag-success-background":v(N).background,"--ag-success-text":v(N).text,"--ag-danger":v($).base,"--ag-danger-dark":v($).dark,"--ag-danger-background":v($).background,"--ag-danger-text":v($).text,"--ag-warning":v(z).base,"--ag-warning-dark":v(z).dark,"--ag-warning-background":v(z).background,"--ag-warning-text":v(z).text,"--ag-info":v(L).base,"--ag-info-dark":v(L).dark,"--ag-info-background":v(L).background,"--ag-info-text":v(L).text};return{light:we,dark:ve}}function ge(r,a){const e=[":where(html) {"];for(const[o,d]of Object.entries(r))e.push(`  ${o}: ${d};`);e.push("}");const g=['[data-theme="dark"] {'];for(const[o,d]of Object.entries(a))g.push(`  ${o}: ${d};`);return g.push("}"),e.join(`
`)+`

`+g.join(`
`)}return(r,a)=>(M(),D("div",Ee,[l("section",Ie,[a[6]||(a[6]=l("p",{class:"ptp-label"},[K("Skins "),l("span",{class:"ptp-label-hint"},"— click to apply instantly")],-1)),l("div",Ne,[(M(!0),D(na,null,Ia(n(De),e=>(M(),D("button",{key:e.id,class:ga(["ptp-swatch-btn",{active:S.value===e.id}]),title:e.label,"aria-label":e.label,"aria-pressed":S.value===e.id,onClick:g=>Ka(e.id)},[l("span",{class:"ptp-swatch",style:Na({backgroundColor:e.swatch})},null,4),l("span",Ge,$a(e.label),1)],10,$e))),128))])]),l("section",He,[a[10]||(a[10]=l("p",{class:"ptp-label"},"Extract theme from image",-1)),l("div",{class:ga(["ptp-drop-zone",{"drag-over":k.value,"has-palette":H.value.length>0}]),role:"button",tabindex:"0","aria-label":H.value.length>0?"Extracted palette — click Clear to reset":"Drop an image or click to upload for theme extraction",onDragover:a[1]||(a[1]=aa(e=>k.value=!0,["prevent"])),onDragleave:a[2]||(a[2]=e=>k.value=!1),onDrop:aa(Qa,["prevent"]),onClick:a[3]||(a[3]=e=>H.value.length===0&&ta()),onKeydown:[Ga(ta,["enter"]),Ga(aa(ta,["prevent"]),["space"])]},[l("input",{ref_key:"fileInputRef",ref:W,type:"file",accept:"image/png,image/jpeg,image/webp",class:"sr-only",tabindex:"-1","aria-hidden":"true",onChange:Ya},null,544),H.value.length===0?(M(),D(na,{key:0},[p(n(X),{size:"28","no-fill":"",class:"ptp-drop-icon"},{default:C(()=>[p(n(Fe),{size:28})]),_:1}),a[7]||(a[7]=l("p",{class:"ptp-drop-label"},"Drop an image to extract a theme",-1)),a[8]||(a[8]=l("p",{class:"ptp-drop-hint"},"PNG · JPG · WebP — or click to browse",-1))],64)):(M(),D("div",{key:1,class:"ptp-palette",onClick:a[0]||(a[0]=aa(()=>{},["stop"]))},[l("div",Oe,[(M(!0),D(na,null,Ia(H.value,e=>(M(),D("span",{key:e,class:"ptp-palette-swatch",style:Na({backgroundColor:e}),title:e},null,12,Ve))),128))]),p(n(q),{size:"small",variant:"monochrome",bordered:!0,shape:"rounded",onClick:aa(ha,["stop"])},{default:C(()=>[...a[9]||(a[9]=[K(" Clear image ",-1)])]),_:1})]))],42,je)]),l("section",Ue,[l("button",{class:"ptp-toggle-header","aria-expanded":V.value,onClick:a[4]||(a[4]=e=>V.value=!V.value)},[a[11]||(a[11]=l("p",{class:"ptp-label",style:{margin:"0"}},"Paste custom CSS vars",-1)),p(n(X),{size:"14","no-fill":"",class:ga(["ptp-chevron",{"ptp-chevron--open":V.value}])},{default:C(()=>[p(n(ze),{size:14})]),_:1},8,["class"])],8,Ke),Se(l("div",We,[a[16]||(a[16]=l("p",{class:"ptp-paste-hint"},[K(" When a skin is selected its vars appear here for reference. Edit them and hit "),l("strong",null,"Apply"),K(" to switch to fully custom theming. Or drop an image above to auto-generate a theme. Only "),l("code",null,"--ag-*"),K(" properties take effect. ")],-1)),p(n(_e),{value:u.value,"onUpdate:value":a[5]||(a[5]=e=>u.value=e),label:"Custom CSS vars",type:"textarea",rows:7,placeholder:`--ag-primary: #4a90d9;
--ag-primary-dark: #357abd;
--ag-background-primary: #f8fafc;`,"hide-label":!0,spellcheck:"false",class:"ptp-textarea-input"},null,8,["value"]),l("div",Xe,[p(n(q),{size:"small",variant:"primary",shape:"rounded",disabled:!u.value,onClick:Xa},{default:C(()=>[...a[12]||(a[12]=[K(" Apply ",-1)])]),_:1},8,["disabled"]),p(n(q),{size:"small",variant:"monochrome",bordered:!0,shape:"rounded",disabled:!u.value,onClick:Ja},{default:C(()=>[p(n(X),{size:"13","no-fill":""},{default:C(()=>[p(n(Le),{size:13})]),_:1}),a[13]||(a[13]=l("span",{class:"mis1"},"Copy",-1))]),_:1},8,["disabled"]),p(n(q),{size:"small",variant:"monochrome",bordered:!0,shape:"rounded",disabled:!u.value,onClick:Za},{default:C(()=>[p(n(X),{size:"13","no-fill":""},{default:C(()=>[p(n(Pe),{size:13})]),_:1}),a[14]||(a[14]=l("span",{class:"mis1"},"Download",-1))]),_:1},8,["disabled"]),p(n(q),{size:"small",variant:"monochrome",bordered:!0,shape:"rounded",disabled:!u.value,onClick:qa},{default:C(()=>[...a[15]||(a[15]=[K(" Clear ",-1)])]),_:1},8,["disabled"]),y.value?(M(),D("span",qe,$a(y.value),1)):da("",!0)])],512),[[Be,V.value]])])]))}},Ze=Va(Je,[["__scopeId","data-v-7050d867"]]),Qe={key:0},Ye={key:0,class:"pf-panel",role:"dialog","aria-label":"Theme Playground","aria-modal":"true"},ar={class:"pf-panel-header"},er={class:"pf-panel-title"},rr={class:"pf-panel-body"},gr=["aria-label","aria-expanded"],dr={__name:"PlaybookFab",setup(J){const S=Ce(),k=U(!1),H=Me(()=>S.path.startsWith("/playbooks"));function W(V){V.key==="Escape"&&k.value&&(k.value=!1)}return Ua(()=>document.addEventListener("keydown",W)),Re(()=>document.removeEventListener("keydown",W)),(V,u)=>(M(),pa(Te,{to:"body"},[H.value?(M(),D("div",Qe,[p(Ha,{name:"pf-backdrop"},{default:C(()=>[k.value?(M(),D("div",{key:0,class:"pf-backdrop","aria-hidden":"true",onClick:u[0]||(u[0]=y=>k.value=!1)})):da("",!0)]),_:1}),p(Ha,{name:"pf-panel"},{default:C(()=>[k.value?(M(),D("div",Ye,[l("div",ar,[l("span",er,[p(n(X),{size:"16","no-fill":"",class:"pf-panel-title-icon"},{default:C(()=>[p(n(ja),{size:16})]),_:1}),u[3]||(u[3]=K(" Theme Playground ",-1))]),p(n(q),{variant:"monochrome",size:"small",shape:"rounded",bordered:!1,"aria-label":"Close theme panel",onClick:u[1]||(u[1]=y=>k.value=!1)},{default:C(()=>[p(n(X),{size:"16","no-fill":""},{default:C(()=>[p(n(Oa),{size:16})]),_:1})]),_:1})]),l("div",rr,[p(Ze)])])):da("",!0)]),_:1}),l("button",{class:ga(["pf-fab",{"pf-fab--open":k.value}]),"aria-label":k.value?"Close theme panel":"Open theme panel","aria-expanded":k.value,onClick:u[2]||(u[2]=y=>k.value=!k.value)},[p(n(X),{size:"22","no-fill":""},{default:C(()=>[k.value?(M(),pa(n(Oa),{key:1,size:22})):(M(),pa(n(ja),{key:0,size:22}))]),_:1})],10,gr)])):da("",!0)]))}},vr=Va(dr,[["__scopeId","data-v-850a9f47"]]);export{vr as default};
