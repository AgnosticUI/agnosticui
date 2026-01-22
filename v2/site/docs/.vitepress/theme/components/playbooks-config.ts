/**
 * Configuration for playbook StackBlitz integration.
 *
 * Each playbook defines the files needed for each framework example.
 * Binary files (like images) are handled via URL replacement - they're
 * referenced from raw.githubusercontent.com instead of being fetched.
 */

// Base URL for raw GitHub content
export const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/AgnosticUI/agnosticui/master/v2/playbooks'

// Shared component files used across frameworks (core implementations)
const SHARED_CORE_FILES = [
  'src/components/ag/Button/core/Button.ts',
  'src/components/ag/Button/core/_Button.ts',
  'src/components/ag/Card/core/Card.ts',
  'src/components/ag/Card/core/_Card.ts',
  'src/components/ag/Checkbox/core/Checkbox.ts',
  'src/components/ag/Checkbox/core/_Checkbox.ts',
  'src/components/ag/Divider/core/Divider.ts',
  'src/components/ag/Divider/core/_Divider.ts',
  'src/components/ag/Divider/core/index.ts',
  'src/components/ag/Icon/core/Icon.ts',
  'src/components/ag/Icon/core/_Icon.ts',
  'src/components/ag/Image/core/Image.ts',
  'src/components/ag/Image/core/_Image.ts',
  'src/components/ag/Input/core/Input.ts',
  'src/components/ag/Input/core/_Input.ts',
  'src/components/ag/Link/core/Link.ts',
  'src/components/ag/Link/core/_Link.ts',
  'src/components/ag/shared/form-control-styles.ts',
  'src/components/ag/shared/form-control-utils.ts',
  'src/components/ag/styles/ag-tokens.css',
  'src/components/ag/styles/ag-tokens-dark.css',
  'src/components/ag/styles/motion.styles.ts',
  'src/components/ag/styles/nav-button-styles.ts',
  'src/components/ag/styles/nav-sublink-styles.ts',
  'src/components/ag/styles/table.css',
  'src/components/ag/types/fx.ts',
  'src/components/ag/utils/handleBackdropClick.ts',
  'src/components/ag/utils/isElementInContainer.ts',
  'src/components/ag/utils/positioning.ts',
  'src/components/ag/utils/slot.ts',
  'src/components/ag/utils/unique-id.ts',
]

// React wrapper files
const REACT_WRAPPER_FILES = [
  'src/components/ag/Button/react/ReactButton.tsx',
  'src/components/ag/Button/react/index.ts',
  'src/components/ag/Card/react/ReactCard.tsx',
  'src/components/ag/Card/react/index.ts',
  'src/components/ag/Checkbox/react/ReactCheckbox.tsx',
  'src/components/ag/Checkbox/react/index.ts',
  'src/components/ag/Divider/react/ReactDivider.tsx',
  'src/components/ag/Divider/react/index.ts',
  'src/components/ag/Icon/react/ReactIcon.tsx',
  'src/components/ag/Icon/react/index.ts',
  'src/components/ag/Image/react/ReactImage.tsx',
  'src/components/ag/Image/react/index.ts',
  'src/components/ag/Input/react/ReactInput.tsx',
  'src/components/ag/Input/react/index.ts',
  'src/components/ag/Link/react/ReactLink.tsx',
  'src/components/ag/Link/react/index.ts',
  'src/components/ag/types/vue.d.ts',
]

// Vue wrapper files
const VUE_WRAPPER_FILES = [
  'src/components/ag/Button/vue/VueButton.vue',
  'src/components/ag/Button/vue/index.ts',
  'src/components/ag/Card/vue/VueCard.vue',
  'src/components/ag/Card/vue/index.ts',
  'src/components/ag/Checkbox/vue/VueCheckbox.vue',
  'src/components/ag/Checkbox/vue/index.ts',
  'src/components/ag/Divider/vue/VueDivider.vue',
  'src/components/ag/Divider/vue/index.ts',
  'src/components/ag/Icon/vue/VueIcon.vue',
  'src/components/ag/Icon/vue/index.ts',
  'src/components/ag/Image/vue/VueImage.vue',
  'src/components/ag/Image/vue/index.ts',
  'src/components/ag/Input/vue/VueInput.vue',
  'src/components/ag/Input/vue/index.ts',
  'src/components/ag/Link/vue/VueLink.vue',
  'src/components/ag/Link/vue/index.ts',
  'src/components/ag/types/vue.d.ts',
]

export interface PlaybookConfig {
  /** Display title for the playbook */
  title: string
  /** Files for each framework, relative to the example folder */
  frameworks: {
    react?: string[]
    vue?: string[]
    lit?: string[]
  }
  /** Binary files that need URL replacement (local path -> raw GitHub URL) */
  binaryFiles?: Record<string, string>
}

export const playbooksConfig: Record<string, PlaybookConfig> = {
  login: {
    title: 'Login',
    frameworks: {
      react: [
        // Config files
        'index.html',
        'package.json',
        'vite.config.ts',
        'tsconfig.json',
        'tsconfig.app.json',
        'tsconfig.node.json',
        // Public assets
        'public/facebook-icon.svg',
        'public/google-icon.svg',
        'public/logo.svg',
        'public/vite.svg',
        // App files
        'src/App.css',
        'src/App.tsx',
        'src/index.css',
        'src/main.tsx',
        'src/assets/react.svg',
        // Component files
        ...SHARED_CORE_FILES,
        ...REACT_WRAPPER_FILES,
      ],
      vue: [
        // Config files
        'index.html',
        'package.json',
        'vite.config.ts',
        'tsconfig.json',
        'tsconfig.app.json',
        'tsconfig.node.json',
        // Public assets
        'public/facebook-icon.svg',
        'public/google-icon.svg',
        'public/logo.svg',
        'public/vite.svg',
        // App files
        'src/App.vue',
        'src/style.css',
        'src/main.ts',
        'src/assets/vue.svg',
        'src/components/HelloWorld.vue',
        // Component files
        ...SHARED_CORE_FILES,
        ...VUE_WRAPPER_FILES,
      ],
      lit: [
        // Config files
        'index.html',
        'package.json',
        'tsconfig.json',
        // Public assets
        'public/facebook-icon.svg',
        'public/google-icon.svg',
        'public/logo.svg',
        'public/vite.svg',
        // App files
        'src/index.css',
        'src/login-page.ts',
        'src/my-element.ts',
        'src/assets/lit.svg',
        // Component files (Lit uses core directly, no wrappers)
        ...SHARED_CORE_FILES,
      ],
    },
    binaryFiles: {
      '/login-bg.jpg': `${GITHUB_RAW_BASE}/login/react-example/public/login-bg.jpg`,
    },
  },
  // Add more playbooks here as needed:
  // checkout: { ... },
  // dashboard: { ... },
}
