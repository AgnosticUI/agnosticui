# Component Development Workflow

This document provides the complete, end-to-end workflow for creating a new component in AgnosticUI v2. It follows a hybrid model that uses an automated script for scaffolding and an LLM agent for implementation.

## Phase 1: Scaffolding (Automated Script)

The first step is to use the unified scaffolding script to create all the necessary boilerplate files for the new component. This eliminates manual setup and ensures consistency.

1.  **Run the Scaffolding Script**:
    From the `v2/lib` directory, run the following command, replacing `MyComponent` with the PascalCase name of your component:

    ```shell
    npm run scaffold -- MyComponent
    ```

2.  **Review the Output**:
    The script will create a comprehensive set of files across the project, including:
    -   Core component files in `v2/lib/src/components/MyComponent/`.
    -   A `specifications` directory with a `README.md` to guide the next step.
    -   Optionally, a `specifications/v1` directory containing reference implementations from AgnosticUI v1. When present, this directory typically includes:
        -   `.hbs` (Handlebars) template files showing the component's markup structure and variants
        -   `.css` files demonstrating styling patterns, variants (e.g., `.card-success`, `.card-error`), modifiers (e.g., `.card-animated`), and design token usage
        -   **Purpose**: These v1 files serve as inspiration for props, styling variants, and behavioral features. The LLM agent should analyze these files to identify missing features in the v2 implementation and ensure feature parity where appropriate.
    -   React and Vue wrapper skeletons.
    -   Boilerplate Storybook stories for Lit, React, and Vue.
    -   Boilerplate documentation pages for the Vitepress site (`.md` and `.vue` examples).
    -   It will also automatically update `package.json` exports and the Vitepress sidebar navigation.

## Phase 2: Specification (Human-in-the-Loop)

This phase is crucial for ensuring the component is built to be accessible from the start.

1.  **Gather Accessibility Documentation**:
    -   Find the relevant WAI-ARIA Authoring Practices Guide (APG) pattern, BBC GEL guide, or other accessibility source materials for your component.
    -   Save these files into the newly created `v2/lib/src/components/MyComponent/specifications/` directory.

## Phase 3: Synthesis & Implementation (LLM Agent)

Now, the LLM agent takes over to perform the context-aware implementation work.

### Step 1: Specification Synthesis

1.  **Instruct the Agent**:
    -   Ask the agent to read the source materials in the `specifications` directory.
    -   If a `specifications/v1` directory exists, instruct the agent to analyze it for feature inspiration.

2.  **Agent Creates SpecSheet**:
    -   The agent will first synthesize the source materials into a `SpecSheet.md` file, creating a clear blueprint for implementation and testing.
    -   **V1 Analysis** (if applicable): The agent should:
        -   Review v1 `.css` files to identify styling variants (e.g., color variants, modifiers like `animated`, `rounded`)
        -   Review v1 `.hbs` templates to understand markup patterns and prop usage
        -   Document any v1 features that should be ported to v2 for feature parity
        -   Update the `SpecSheet.md` to include these v1-inspired features

### Step 2: Core Component Implementation

Using the `SpecSheet.md`, the agent will:

1.  **Implement Core Component**:
    -   Implement the full logic of the core Lit web component in `_MyComponent.ts`, including all identified variants and props.
    -   Ensure all accessibility requirements are implemented (ARIA attributes, keyboard handling, focus management).
    -   **⚠️ CRITICAL**: Use correct CSS attribute selectors for boolean props:
        -   ✅ CORRECT: `:host([propname])` for boolean attributes
        -   ❌ WRONG: `:host([propname="true"])` will NOT work with Lit
        -   Lit reflects boolean props as present/absent, not as `="true"`/`="false"`
    -   **⚠️ CRITICAL**: Use correct design token patterns:
        -   ✅ CORRECT: Use core tokens directly
            -   Border: `border: var(--ag-border-width-1) solid var(--ag-border);`
            -   Spacing: `padding: var(--ag-space-3);`
            -   Radius: `border-radius: var(--ag-radius-md);`
        -   ❌ WRONG: Do NOT create component-specific tokens
            -   `--ag-alert-padding`, `--ag-card-border-width` (these should not exist)
        -   ❌ WRONG: These tokens do NOT exist:
            -   `--ag-border-width` (use `--ag-border-width-1`, `--ag-border-width-2`, etc.)
            -   `--ag-border-color` (use `--ag-border` or `--ag-border-subtle`)
    -   **⚠️ CRITICAL**: Expose CSS Shadow Parts for customization:
        -   Shadow Parts allow users to style internal elements of your component from outside the shadow DOM
        -   Add `part` attributes to key internal elements that users might want to customize
        -   **Naming Convention**: Use lowercase, hyphenated names (e.g., `part="card-wrapper"`, `part="alert-icon"`)
        -   **Which elements to expose**:
            -   ✅ Main wrapper/container elements
            -   ✅ Interactive elements (buttons, inputs, links)
            -   ✅ Visual indicator elements (icons, badges, status indicators)
            -   ✅ Structural elements (headers, footers, content wrappers)
            -   ❌ Skip internal implementation details that shouldn't be customized
        -   **Example patterns**:
            ```typescript
            // Card component
            render() {
              return html`
                <div class="card-wrapper" part="wrapper">
                  <slot name="header" part="header"></slot>
                  <div class="card-content" part="content">
                    <slot></slot>
                  </div>
                  <slot name="footer" part="footer"></slot>
                </div>
              `;
            }

            // Button component
            render() {
              return html`
                <button part="button" type=${this.type}>
                  <slot></slot>
                </button>
              `;
            }

            // Alert component
            render() {
              return html`
                <div class="alert" part="alert">
                  <div class="alert-content" part="content">
                    <slot></slot>
                  </div>
                </div>
              `;
            }
            ```
        -   **Documentation Required**: Every exposed part must be documented in:
            1. Component TypeScript interface (JSDoc comment)
            2. Storybook story showing customization example
            3. VitePress documentation Parts table (similar to Props table)

2.  **Write Unit Tests**:
    -   Write comprehensive unit tests in `_MyComponent.spec.ts` that verify:
        -   All props and variants
        -   Accessibility requirements
        -   Edge cases and error handling
        -   **⚠️ CRITICAL TEST**: CSS selectors use `[attrname]` not `[attrname="true"]` for boolean props
            ```typescript
            it('uses correct CSS attribute selectors for boolean props', () => {
              const styleContent = MyComponent.styles.toString();
              expect(styleContent).toContain(':host([propname])');
              expect(styleContent).not.toContain('[propname="true"]');
            });
            ```
    -   **Verify**: Run `npm run test -- MyComponent` to ensure all tests pass.

### Step 3: Framework Wrappers

The agent will implement framework-specific wrappers:

1.  **React Wrapper**:
    -   Complete the React wrapper in `v2/lib/src/components/react/MyComponent.tsx`
    -   Use `@lit/react` to create a proper React component wrapper
    -   Ensure TypeScript types are correctly exported

2.  **Vue Wrapper**:
    -   Complete the Vue wrapper in `v2/lib/src/components/vue/MyComponent.vue`
    -   **⚠️ CRITICAL**: Follow this complete Vue wrapper pattern:

        ```vue
        <template>
          <ag-mycomponent ref="agComponent">
            <slot name="header" slot="header" />
            <slot />
            <slot name="footer" slot="footer" />
          </ag-mycomponent>
        </template>

        <script lang="ts">
        import { defineComponent, onMounted, ref, watchEffect, nextTick, type PropType } from 'vue';
        import type { MyComponentProps, MyComponentVariant } from '../core/_MyComponent';
        import '../core/MyComponent'; // Registers the ag-mycomponent web component

        export default defineComponent({
          name: 'VueMyComponent',
          props: {
            propOne: { type: Boolean, default: false },
            propTwo: { type: String, default: '' },
            variant: {
              type: String as PropType<MyComponentVariant>,
              default: '' as MyComponentVariant,
            },
          },
          setup(props) {
            const agComponent = ref<HTMLElement & MyComponentProps | null>(null);

            const syncProps = () => {
              const webComponent = agComponent.value;
              if (!webComponent) return;

              webComponent.propOne = props.propOne;
              webComponent.propTwo = props.propTwo;
              webComponent.variant = props.variant;
            };

            onMounted(async () => {
              await customElements.whenDefined('ag-mycomponent');
              await nextTick();
              syncProps();
            });

            watchEffect(() => {
              if (agComponent.value) {
                syncProps();
              }
            });

            return { agComponent };
          },
        });
        </script>
        ```

    -   **Key Points**:
        - Template uses `ref="agComponent"` to get reference to web component
        - Slots are forwarded using `<slot name="header" slot="header" />` pattern
        - Import the core component to register it: `import '../core/MyComponent';`
        - Use `watchEffect` (NOT `watch(props, ...)`) for reactive prop syncing
        - Type the ref as `ref<HTMLElement & MyComponentProps | null>(null)`
        - Wait for custom element definition before initial sync
        - Type variant props with `PropType<MyComponentVariant>`

### Step 4: Storybook Stories (CRITICAL VERIFICATION STEP)

**This step is crucial**: The Storybook stories verify that the component works correctly in all three frameworks before documenting it.

The agent will create comprehensive Storybook stories showing all variants, states, and interactions:

1.  **Lit Stories** (`v2/playgrounds/lit/src/stories/MyComponent.stories.ts`):
    -   **IMPORTANT**: Set `title: 'AgnosticUI Lit/MyComponent'` (not 'AgnosticUI/MyComponent')
    -   **⚠️ CRITICAL**: Use property binding (`.propName`) consistently, NOT boolean attribute binding (`?propname`):
        ```typescript
        // ✅ CORRECT - use property binding for all props:
        html`<ag-card
          .isSkinned=${args.isSkinned}
          .isStacked=${args.isStacked}
          .variant=${args.variant}
        ></ag-card>`

        // ❌ WRONG - boolean attribute binding doesn't work for false values:
        html`<ag-card
          ?isskinned=${args.isSkinned}  // When false, removes attribute but property still true!
        ></ag-card>`
        ```
        **Why**: Boolean attribute binding (`?`) only adds/removes attributes but doesn't set the underlying property to false. Since Lit properties have default values and reflect, this causes the default (often `true`) to persist even when you pass `false`.
    -   Default story
    -   Stories for each variant (e.g., success, info, error, warning)
    -   Stories for each boolean prop (e.g., isShadow, isAnimated)
    -   Interactive stories demonstrating events and user interactions
    -   Combined prop examples

2.  **React Stories** (`v2/playgrounds/react/src/stories/MyComponent.stories.tsx`):
    -   **IMPORTANT**: Set `title: 'AgnosticUI React/MyComponent'` (not 'AgnosticUI/MyComponent')
    -   Same coverage as Lit stories but using React component wrapper
    -   Ensure React-specific patterns work (e.g., event handlers, refs)

3.  **Vue Stories** (`v2/playgrounds/vue/src/stories/MyComponent.stories.ts`):
    -   **IMPORTANT**: Set `title: 'AgnosticUI Vue/MyComponent'` (not 'AgnosticUI/MyComponent')
    -   Same coverage as Lit stories but using Vue component
    -   Ensure Vue-specific patterns work (e.g., v-model, slots)

4.  **Verify Storybook**:
    -   Start each playground's Storybook to visually verify:
        ```shell
        # From v2/playgrounds/lit
        npm run storybook

        # From v2/playgrounds/react
        npm run storybook

        # From v2/playgrounds/vue
        npm run storybook
        ```
    -   Check that all stories render correctly
    -   Verify interactive examples work as expected
    -   Test accessibility features (keyboard navigation, screen reader compatibility)

### Step 5: Vitepress Documentation (AFTER Storybook Verification)

Only after the component is proven to work in all three Storybook playgrounds should the agent create the documentation:

1.  **Documentation Page** (`v2/site/docs/components/mycomponent.md`):
    -   Write comprehensive documentation with:
        -   Component overview and use cases
        -   Installation instructions
        -   Usage examples for Lit, React, and Vue
        -   API documentation (props, events, slots)
        -   Accessibility guidelines
        -   Examples inspired by the working Storybook stories

2.  **Example Component** (`v2/site/docs/examples/MyComponentExamples.vue`):
    -   Create rich, interactive examples showcasing:
        -   Basic usage
        -   All variants
        -   Common patterns and combinations
        -   Best practices

## Phase 4: Final Verification & Integration

**Objective**: Ensure the new component is fully integrated, tested across all playgrounds, and the project is stable.

### Step 1: Build & Test the Library

From the `v2/lib` directory:

1.  **Build the Library**:
    Generate the `dist` files for the new component.
    ```shell
    npm run build
    ```

2.  **Run Full Validation Suite**:
    ```shell
    npm run lint && npm run typecheck && npm run test
    ```
    All checks must pass before proceeding.

### Step 2: Verify All Storybook Playgrounds

Verify the component works correctly in all three framework playgrounds:

1.  **Lit Playground** (`v2/playgrounds/lit`):
    ```shell
    cd playgrounds/lit
    npm run storybook
    ```
    - Navigate to MyComponent stories
    - Test all variants and interactions
    - Verify accessibility (keyboard navigation, focus management)

2.  **React Playground** (`v2/playgrounds/react`):
    ```shell
    cd playgrounds/react
    npm run storybook
    ```
    - Verify React wrapper works correctly
    - Test React-specific patterns (event handlers, refs)
    - Ensure type safety in TypeScript

3.  **Vue Playground** (`v2/playgrounds/vue`):
    ```shell
    cd playgrounds/vue
    npm run storybook
    ```
    - Verify Vue integration works correctly
    - Test Vue-specific patterns (slots, events)
    - Check for any console warnings or errors

### Step 3: Verify Documentation Site

Navigate to the `v2/site` directory:

1.  **Reinstall Local Library**:
    ```shell
    cd site
    npm run reinstall:lib
    ```

2.  **Start Documentation Dev Server**:
    ```shell
    npm run docs:dev
    ```

3.  **Verify Documentation Page**:
    - Navigate to the new component's documentation page
    - Test all interactive examples
    - Verify code snippets are correct
    - Check that navigation sidebar includes the new component
    - Test responsive behavior

### Step 4: Final Checklist

Before marking the component as complete, verify:

- [ ] Core component tests pass (12+ tests recommended)
- [ ] Library builds without errors or warnings
- [ ] Lit Storybook stories render and work correctly
- [ ] React Storybook stories render and work correctly
- [ ] Vue Storybook stories render and work correctly
- [ ] Vitepress documentation page renders correctly
- [ ] All interactive examples in docs work as expected
- [ ] Component appears in navigation sidebar
- [ ] No TypeScript errors in any playground
- [ ] Accessibility features verified (keyboard, screen reader)
- [ ] No console errors or warnings in any environment

### Step 5: Await Human Approval

Announce that the task is complete and provide a summary:
- Number of tests passing
- List of Storybook stories created (Lit, React, Vue)
- Link to documentation page
- Any notes or caveats

Await final approval from the user.
