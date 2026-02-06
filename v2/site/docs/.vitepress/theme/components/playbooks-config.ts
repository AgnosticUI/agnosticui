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
// Note: We only include components that are actually used in the login playbook
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
  'src/components/ag/Image/core/Image.ts',
  'src/components/ag/Image/core/_Image.ts',
  'src/components/ag/Input/core/Input.ts',
  'src/components/ag/Input/core/_Input.ts',
  'src/components/ag/Input/core/_Input.BACKUP.ts',
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
  'src/components/ag/types/vue.d.ts',
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
  'src/components/ag/Image/react/ReactImage.tsx',
  'src/components/ag/Image/react/index.ts',
  'src/components/ag/Input/react/ReactInput.tsx',
  'src/components/ag/Input/react/index.ts',
  'src/components/ag/Link/react/ReactLink.tsx',
  'src/components/ag/Link/react/index.ts',
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
  'src/components/ag/Image/vue/VueImage.vue',
  'src/components/ag/Image/vue/index.ts',
  'src/components/ag/Input/vue/VueInput.vue',
  'src/components/ag/Input/vue/index.ts',
  'src/components/ag/Link/vue/VueLink.vue',
  'src/components/ag/Link/vue/index.ts',
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

// Shared component files used by the onboarding playbook
const ONBOARDING_SHARED_CORE_FILES = [
  'src/components/ag/Alert/core/Alert.ts',
  'src/components/ag/Alert/core/_Alert.ts',
  'src/components/ag/Button/core/Button.ts',
  'src/components/ag/Button/core/_Button.ts',
  'src/components/ag/Icon/core/Icon.ts',
  'src/components/ag/Icon/core/_Icon.ts',
  'src/components/ag/SelectionButton/core/SelectionButton.ts',
  'src/components/ag/SelectionButton/core/_SelectionButton.ts',
  'src/components/ag/SelectionButtonGroup/core/SelectionButtonGroup.ts',
  'src/components/ag/SelectionButtonGroup/core/_SelectionButtonGroup.ts',
  'src/components/ag/SelectionCard/core/SelectionCard.ts',
  'src/components/ag/SelectionCard/core/_SelectionCard.ts',
  'src/components/ag/SelectionCardGroup/core/SelectionCardGroup.ts',
  'src/components/ag/SelectionCardGroup/core/_SelectionCardGroup.ts',
  'src/components/ag/Timeline/core/Timeline.ts',
  'src/components/ag/Timeline/core/_Timeline.ts',
  'src/components/ag/shared/CloseButton/CloseButton.ts',
  'src/components/ag/shared/CloseButton/_CloseButton.ts',
  'src/components/ag/shared/form-control-styles.ts',
  'src/components/ag/shared/form-control-utils.ts',
  'src/components/ag/styles/ag-tokens.css',
  'src/components/ag/styles/ag-tokens-dark.css',
  'src/components/ag/styles/motion.styles.ts',
  'src/components/ag/styles/nav-button-styles.ts',
  'src/components/ag/styles/nav-sublink-styles.ts',
  'src/components/ag/styles/table.css',
  'src/components/ag/types/fx.ts',
  'src/components/ag/types/vue.d.ts',
  'src/components/ag/utils/handleBackdropClick.ts',
  'src/components/ag/utils/isElementInContainer.ts',
  'src/components/ag/utils/positioning.ts',
  'src/components/ag/utils/slot.ts',
  'src/components/ag/utils/unique-id.ts',
]

// React wrapper files for onboarding
const ONBOARDING_REACT_WRAPPER_FILES = [
  'src/components/ag/Alert/react/ReactAlert.tsx',
  'src/components/ag/Alert/react/index.ts',
  'src/components/ag/Button/react/ReactButton.tsx',
  'src/components/ag/Button/react/index.ts',
  'src/components/ag/Icon/react/ReactIcon.tsx',
  'src/components/ag/Icon/react/index.ts',
  'src/components/ag/SelectionButton/react/ReactSelectionButton.tsx',
  'src/components/ag/SelectionButton/react/index.ts',
  'src/components/ag/SelectionButtonGroup/react/ReactSelectionButtonGroup.tsx',
  'src/components/ag/SelectionButtonGroup/react/index.ts',
  'src/components/ag/SelectionCard/react/ReactSelectionCard.tsx',
  'src/components/ag/SelectionCard/react/index.ts',
  'src/components/ag/SelectionCardGroup/react/ReactSelectionCardGroup.tsx',
  'src/components/ag/SelectionCardGroup/react/index.ts',
  'src/components/ag/Timeline/react/ReactTimeline.tsx',
  'src/components/ag/Timeline/react/index.ts',
]

// Vue wrapper files for onboarding
const ONBOARDING_VUE_WRAPPER_FILES = [
  'src/components/ag/Alert/vue/VueAlert.vue',
  'src/components/ag/Alert/vue/index.ts',
  'src/components/ag/Button/vue/VueButton.vue',
  'src/components/ag/Button/vue/index.ts',
  'src/components/ag/Icon/vue/VueIcon.vue',
  'src/components/ag/Icon/vue/index.ts',
  'src/components/ag/SelectionButton/vue/VueSelectionButton.vue',
  'src/components/ag/SelectionButton/vue/index.ts',
  'src/components/ag/SelectionButtonGroup/vue/VueSelectionButtonGroup.vue',
  'src/components/ag/SelectionButtonGroup/vue/index.ts',
  'src/components/ag/SelectionCard/vue/VueSelectionCard.vue',
  'src/components/ag/SelectionCard/vue/index.ts',
  'src/components/ag/SelectionCardGroup/vue/VueSelectionCardGroup.vue',
  'src/components/ag/SelectionCardGroup/vue/index.ts',
  'src/components/ag/Timeline/vue/Timeline.vue',
  'src/components/ag/Timeline/vue/TimelineItem.vue',
  'src/components/ag/Timeline/vue/index.ts',
]

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
        'eslint.config.js',
        // Public assets
        'public/facebook-icon.svg',
        'public/google-icon.svg',
        'public/logo.svg',
        // App files
        'src/App.tsx',
        'src/index.css',
        'src/main.tsx',
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
        // App files
        'src/App.vue',
        'src/style.css',
        'src/main.ts',
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
        // App files
        'src/index.css',
        'src/login-page.ts',
        // Component files (Lit uses core directly, no wrappers)
        ...SHARED_CORE_FILES,
      ],
    },
    binaryFiles: {
      '/login-bg.jpg': `${GITHUB_RAW_BASE}/login/react-example/public/login-bg.jpg`,
    },
  },
  onboarding: {
    title: 'Onboarding',
    frameworks: {
      react: [
        // Config files
        'index.html',
        'package.json',
        'vite.config.ts',
        'tsconfig.json',
        'tsconfig.app.json',
        'tsconfig.node.json',
        'eslint.config.js',
        // App files
        'src/App.tsx',
        'src/App.css',
        'src/index.css',
        'src/main.tsx',
        // Component files
        ...ONBOARDING_SHARED_CORE_FILES,
        ...ONBOARDING_REACT_WRAPPER_FILES,
      ],
      vue: [
        // Config files
        'index.html',
        'package.json',
        'vite.config.ts',
        'tsconfig.json',
        'tsconfig.app.json',
        'tsconfig.node.json',
        // App files
        'src/App.vue',
        'src/style.css',
        'src/main.ts',
        // Component files
        ...ONBOARDING_SHARED_CORE_FILES,
        ...ONBOARDING_VUE_WRAPPER_FILES,
      ],
      lit: [
        // Config files
        'index.html',
        'package.json',
        'tsconfig.json',
        // App files
        'src/index.css',
        'src/onboarding-wizard.ts',
        // Component files (Lit uses core directly, no wrappers)
        ...ONBOARDING_SHARED_CORE_FILES,
      ],
    },
  },
}
