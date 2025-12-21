# AgCombobox Multi-Select Implementation Plan

## Objective
To extend the existing `AgCombobox` component to support multi-selection, allowing users to select multiple options from a dropdown list, display them as removable tags, and provide a clear all functionality.

## Initial Challenges & Analysis
Initially, the landscape for multi-select combobox accessibility and keyboard navigation appeared fragmented, with various implementations (e.g., Dequelabs Cauldron, shadcn-multi-select) employing different interaction patterns. The W3C ARIA APG provides guidance for single-select comboboxes but lacks specific patterns for complex multi-select scenarios. This led to a dilemma regarding the "standard" approach and the potential for significant implementation complexity and maintenance burden.

## Discovery of the Shoelace Model
A review of the Shoelace "Select" component (with `multiple` prop) revealed a highly effective and pragmatic pattern that addresses many of the initial concerns. Key observations from the Shoelace model include:
-   **Menu Stays Open:** When `multiple` is true, the dropdown menu remains open after an item is selected, facilitating rapid multiple selections.
-   **Stable Selection:** Selecting an item (via click, Space, or Enter) toggles a checkmark next to the option in the list and renders a removable tag in the input area. The UI remains stable.
-   **Contained Arrow Navigation:** Arrow keys (`Up`/`Down`) are strictly used for navigating options *within the open menu*. They do not navigate out of the menu into the input or tags.
-   **TAB Behavior:**
    -   `TAB` from an open menu moves focus to the next focusable element *outside* the component.
    -   `SHIFT+TAB` from outside brings focus back to the input.
-   **Tag Management:** Tags are managed implicitly. Removing a tag (via its 'x' button) or un-checking an item in the listbox both result in the item being deselected. There is no complex keyboard navigation *between* tags.
-   **Overflow Handling:** The component elegantly handles many selected items by displaying a summary tag (e.g., "+N more") when a `maxOptionsVisible` limit is exceeded.
-   **Clear All Button:** The Shoelace implementation's "Clear All" button was initially mouse-only. Our plan will rectify this by making it keyboard-focusable.

## Preferred Interaction Model
The Shoelace model is preferred due to its simplicity, predictability, and adherence to core ARIA principles by avoiding ambiguous arrow key overloading. It treats the component as a single tab stop (the input), with internal selection management primarily handled via the listbox. The "Clear All" button will be an additional, keyboard-focusable tab stop within the component.

## Refined Phased Implementation Plan for `AgCombobox`

### Phase 1: Core Multi-Select Logic & Checkbox Integration

1.  **Import `ag-checkbox`:** Add `import '../Checkbox/core/_Checkbox.js';` to `_Combobox.ts`.
2.  **Properties & State:**
    *   Add a `multiple: boolean` property to `AgCombobox`.
    *   Change the internal state `_selectedOption: ComboboxOption | null` to `_selectedOptions: ComboboxOption[] = []`. This array will hold all currently selected options.
3.  **Render Listbox Options:**
    *   When `multiple` is true, each option in the listbox will render an `<ag-checkbox>` component.
    *   The `<ag-checkbox>`'s `checked` property will be bound to whether the corresponding option's `value` is present in the `_selectedOptions` array.
    *   The `size` of the `<ag-checkbox>` will be dynamically set based on the `AgCombobox`'s `size` property (e.g., `combobox.size === 'small'` maps to `ag-checkbox.size === 'small'`).
    *   The `labelText` for the checkbox will be empty, as the option's label will be rendered separately alongside the checkbox.
4.  **Selection Logic:**
    *   The `@change` event on the `<ag-checkbox>` will be the primary trigger for toggling an option's selection state. The event handler will add or remove the corresponding option from the `_selectedOptions` array.
    *   A click handler on the entire option row will also be implemented to programmatically toggle the checkbox's state, providing a larger clickable area.
    *   When `multiple` is true, the listbox menu will *not* close after an option is selected.

### Phase 2: Tag Display & Removal

1.  **Tag Rendering Getter:** Create a new getter method (e.g., `_renderSelectedTags()`) in `AgCombobox`. This method will:
    *   Iterate over the `_selectedOptions` array.
    *   For each selected option, render an `<ag-tag removable>` component.
    *   Implement logic to handle `maxOptionsVisible`: display up to a certain number of tags, then show a summary tag (e.g., "+N more") for the remaining selected items.
2.  **Tag Removal:**
    *   The `tag-remove` event from an `<ag-tag>` will trigger a handler (e.g., `_handleTagRemove(option)`).
    *   This handler will remove the corresponding `option` from the `_selectedOptions` array, which will cause the tags to re-render and the removed tag to disappear.

### Phase 3: The "Clear All" Button

1.  **Render Condition:** Ensure the existing `<ag-close-button>` is rendered when `clearable` is true, `multiple` is true, and `_selectedOptions` is not empty.
2.  **Keyboard Accessibility:** Ensure the `<ag-close-button>` is keyboard-focusable (i.e., it should *not* have `tabindex="-1"`). It will naturally become the next tab stop after the combobox input.
3.  **Functionality:** The `_handleClearClick` method will simply set `this._selectedOptions = []`, clearing all selections and triggering a re-render.

This phased approach, leveraging existing `AgnosticUI` components and adopting the robust Shoelace interaction model, provides a clear and efficient path to a high-quality multi-select combobox.
