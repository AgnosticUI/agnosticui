<template>
  <section>
    <div class="mbe4">
      <VueButton
        class="mie2"
        title="Default"
      >
        Default
      </VueButton>
    </div>

    <!-- Rounded -->
    <div class="mbe2">
      <h2>Rounded Variants</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        shape="rounded"
        title="Default"
      >Default</VueButton>
      <VueButton
        shape="rounded"
        variant="primary"
        title="Primary"
      >Primary</VueButton>
      <VueButton
        shape="rounded"
        variant="secondary"
        title="Secondary"
      >Secondary</VueButton>
      <VueButton
        shape="rounded"
        variant="success"
        title="Success"
      >Success</VueButton>
      <VueButton
        shape="rounded"
        variant="warning"
        title="Warning"
      >Warning</VueButton>
      <VueButton
        shape="rounded"
        variant="danger"
        title="Danger"
      >Danger</VueButton>
      <VueButton
        shape="rounded"
        variant="monochrome"
        title="Monochrome"
      >Monochrome</VueButton>
    </div>

    <!-- Shapes -->
    <div class="mbe2">
      <h2>Shapes</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        shape="rounded"
        variant="primary"
        :bordered="true"
        title="Rounded Button"
      >Rounded</VueButton>

      <VueButton
        shape="capsule"
        variant="success"
        :bordered="true"
        title="Capsule Button"
      >Capsule</VueButton>

      <VueButton
        shape="circle"
        :bordered="true"
        title="Circle Button"
      >C</VueButton>

      <VueButton
        shape="square"
        variant="secondary"
        :bordered="true"
        title="Square Button"
      >S</VueButton>

      <VueButton
        shape="rounded-square"
        :bordered="true"
        variant="danger"
        title="Rounded Square Button"
      >RS</VueButton>
    </div>

    <!-- Bordered -->
    <div class="mbe2">
      <h2>Bordered</h2>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        :bordered="true"
        shape="rounded"
        title="Default"
      >Default</VueButton>

      <VueButton
        :bordered="true"
        shape="rounded"
        variant="primary"
        title="Primary"
      >Primary</VueButton>

      <VueButton
        :bordered="true"
        shape="rounded"
        variant="secondary"
        title="Secondary"
      >Secondary</VueButton>

      <VueButton
        :bordered="true"
        shape="rounded"
        variant="success"
        title="Success"
      >Success</VueButton>

      <VueButton
        :bordered="true"
        shape="rounded"
        variant="warning"
        title="Warning"
      >Warning</VueButton>

      <VueButton
        :bordered="true"
        shape="rounded"
        variant="danger"
        title="Danger"
      >Danger</VueButton>

      <VueButton
        :bordered="true"
        shape="rounded"
        variant="monochrome"
        title="Monochrome"
      >Monochrome</VueButton>
    </div>
    <!-- Sizes -->
    <div class="mbe2">
      <h2>Sizes</h2>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        :bordered="true"
        size="x-sm"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        :bordered="true"
        size="sm"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        :bordered="true"
        size="md"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        :bordered="true"
        size="lg"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        :bordered="true"
        size="xl"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="primary"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="primary"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="primary"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="primary"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="primary"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="primary"
        :bordered="true"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="primary"
        :bordered="true"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="primary"
        :bordered="true"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="primary"
        :bordered="true"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="primary"
        :bordered="true"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="success"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="success"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="success"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="success"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="success"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="success"
        :bordered="true"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="success"
        :bordered="true"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="success"
        :bordered="true"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="success"
        :bordered="true"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="success"
        :bordered="true"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="warning"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="warning"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="warning"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="warning"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="warning"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="warning"
        :bordered="true"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="warning"
        :bordered="true"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="warning"
        :bordered="true"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="warning"
        :bordered="true"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="warning"
        :bordered="true"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="danger"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="danger"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="danger"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="danger"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="danger"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        bordered
        variant="danger"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        :bordered="true"
        variant="danger"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        :bordered="true"
        variant="danger"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        :bordered="true"
        variant="danger"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        :bordered="true"
        variant="danger"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        variant="monochrome"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        variant="monochrome"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        variant="monochrome"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        variant="monochrome"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        variant="monochrome"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        bordered
        variant="monochrome"
        shape="rounded"
        title="Extra Small"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        :bordered="true"
        variant="monochrome"
        shape="rounded"
        title="Small"
      >Small</VueButton>
      <VueButton
        size="md"
        :bordered="true"
        variant="monochrome"
        shape="rounded"
        title="Medium"
      >Medium</VueButton>
      <VueButton
        size="lg"
        :bordered="true"
        variant="monochrome"
        shape="rounded"
        title="Large"
      >Large</VueButton>
      <VueButton
        size="xl"
        :bordered="true"
        variant="monochrome"
        shape="rounded"
        title="Extra Large"
      >Extra Large</VueButton>
    </div>

    <!-- Icons -->
    <!-- Icons Small -->
    <div class="mbe2">
      <h2>Icons Small</h2>
    </div>

    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          variant="primary"
          size="sm"
          shape="rounded"
          class="mie2"
          title="Invite Members"
        >
          <VueIcon size="16" :no-fill="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </VueIcon>
          <span class="mis1 mie2">Invite Members</span>
        </VueButton>

        <VueButton
          variant="primary"
          size="sm"
          shape="rounded"
          :bordered="true"
          class="mis1 mie2"
          title="Create New"
        >
          <VueIcon size="16" :no-fill="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M12 5v14m-7-7h14"/>
            </svg>
          </VueIcon>
          <span>Create New</span>
        </VueButton>

        <VueButton
          variant="danger"
          size="sm"
          shape="rounded"
          title="Record"
        >
          <VueIcon size="16" :no-fill="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M12 1a3 3 0 003 3v8a3 3 0 11-6 0V4a3 3 0 003-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4m-4 0h8"/>
            </svg>
          </VueIcon>
          <span>Record</span>
        </VueButton>
      </div>
    </div>

    <!-- Icons Only -->
    <div class="mbe2">
      <h2>Icons Only</h2>
      <p>To create an accessible icon-only button, wrap the icon component with a <code>&lt;ag-button&gt;</code> element and provide an accessible label using the <code>VisuallyHidden</code> component.</p>
      <p>This ensures screen reader users understand the button's action without a visible text label. Ensure you also provide a clear <code>title</code> attribute for mouse users who hover over the icon.</p>
    </div>

    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          variant="primary"
          size="sm"
          shape="rounded"
          title="Invite Members"
          class="mie2"
        >
          <VueIcon size="16" :no-fill="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </VueIcon>
          <VueVisuallyHidden>Invite Members</VueVisuallyHidden>
        </VueButton>
      </div>
    </div>

    <!-- Icons -->
    <div class="mbe2">
      <h2>Icons</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          variant="primary"
          shape="rounded"
          title="Invite Members"
          class="mie2"
        >
          <VueIcon size="18" :no-fill="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </VueIcon>
          <span class="mis1 mie2">Invite Members</span>
        </VueButton>
        <VueButton
          variant="primary"
          shape="rounded"
          title="Create new"
          :bordered="true"
          class="mis1 mie2"
        >
          <VueIcon size="18" :no-fill="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M12 5v14m-7-7h14"/>
            </svg>
          </VueIcon>
          <span>Create New</span>
        </VueButton>
        <VueButton
          variant="danger"
          title="Record"
          shape="rounded"
        >
          <VueIcon size="18" :no-fill="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M12 1a3 3 0 003 3v8a3 3 0 11-6 0V4a3 3 0 003-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4m-4 0h8"/>
            </svg>
          </VueIcon>
          <span>Record</span>
        </VueButton>
      </div>
    </div>

    <!-- Grouped -->
    <div class="mbe2">
      <h2>Grouped</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          grouped
          title="React"
          :bordered="true"
          variant="secondary"
        >React</VueButton>
        <VueButton
          grouped
          title="Vue"
          :bordered="true"
          variant="secondary"
        >Vue</VueButton>
        <VueButton
          grouped
          title="Svelte"
          :bordered="true"
          variant="secondary"
        >Svelte</VueButton>
        <VueButton
          grouped
          title="Lit"
          :bordered="true"
          variant="secondary"
        >Lit</VueButton>
      </div>
    </div>
    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          grouped
          title="React"
          :bordered="true"
          variant="primary"
        >React</VueButton>
        <VueButton
          grouped
          title="Vue"
          :bordered="true"
          variant="primary"
        >Vue</VueButton>
        <VueButton
          grouped
          title="Svelte"
          :bordered="true"
          variant="primary"
        >Svelte</VueButton>
        <VueButton
          grouped
          title="Lit"
          :bordered="true"
          variant="primary"
        >Lit</VueButton>
      </div>
    </div>
    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          grouped
          title="React"
          :bordered="true"
          variant="monochrome"
        >React</VueButton>
        <VueButton
          grouped
          title="Vue"
          :bordered="true"
          variant="monochrome"
        >Vue</VueButton>
        <VueButton
          grouped
          title="Svelte"
          :bordered="true"
          variant="monochrome"
        >Svelte</VueButton>
        <VueButton
          grouped
          title="Lit"
          :bordered="true"
          variant="monochrome"
        >Lit</VueButton>
      </div>
    </div>
    <!-- Misc -->
    <div class="mbe2">
      <h2>Miscellaneous</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        ghost
        title="Ghost button"
        class="mie2"
      >Ghost</VueButton>
      <VueButton
        link
        title="button link"
        class="mie2"
      >Link</VueButton>
      <VueButton
        type="submit"
        bordered
        title="submit button"
        shape="rounded"
        variant="primary"
        class="mie2"
      >Submit</VueButton>
      <VueButton
        title="toggle button"
        :toggle="true"
        class="mie2"
      >Toggle</VueButton>
      <VueButton
        title="example disabled button"
        disabled
        class="mie2"
      >Disabled</VueButton>
    </div>

    <!-- Disabled States - Comprehensive -->
    <div class="mbe2">
      <h2>Disabled States - Filled Buttons</h2>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Disabled buttons maintain their color identity using lighter background and text tokens.
        Each variant shows its tonal identity while clearly indicating the inactive state.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        shape="rounded"
        title="Default Disabled"
        disabled
      >Default</VueButton>
      <VueButton
        shape="rounded"
        variant="primary"
        title="Primary Disabled"
        disabled
      >Primary</VueButton>
      <VueButton
        shape="rounded"
        variant="secondary"
        title="Secondary Disabled"
        disabled
      >Secondary</VueButton>
      <VueButton
        shape="rounded"
        variant="success"
        title="Success Disabled"
        disabled
      >Success</VueButton>
      <VueButton
        shape="rounded"
        variant="warning"
        title="Warning Disabled"
        disabled
      >Warning</VueButton>
      <VueButton
        shape="rounded"
        variant="danger"
        title="Danger Disabled"
        disabled
      >Danger</VueButton>
      <VueButton
        shape="rounded"
        variant="monochrome"
        title="Monochrome Disabled"
        disabled
      >Monochrome</VueButton>
    </div>

    <div class="mbe2">
      <h2>Disabled States - Bordered Buttons</h2>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Bordered buttons use opacity when disabled, maintaining visual consistency.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        :bordered="true"
        shape="rounded"
        title="Default Bordered Disabled"
        disabled
      >Default</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="primary"
        title="Primary Bordered Disabled"
        disabled
      >Primary</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="secondary"
        title="Secondary Bordered Disabled"
        disabled
      >Secondary</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="success"
        title="Success Bordered Disabled"
        disabled
      >Success</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="warning"
        title="Warning Bordered Disabled"
        disabled
      >Warning</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="danger"
        title="Danger Bordered Disabled"
        disabled
      >Danger</VueButton>
      <VueButton
        :bordered="true"
        shape="rounded"
        variant="monochrome"
        title="Monochrome Bordered Disabled"
        disabled
      >Monochrome</VueButton>
    </div>

    <div class="mbe2">
      <h2>State Comparison - Normal vs Disabled</h2>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Side-by-side comparison of normal and disabled states for each variant.
      </p>
    </div>
    <div class="mbe4">
      <div class="stacked-mobile mbe2">
        <VueButton
          shape="rounded"
          variant="primary"
          title="Primary Normal"
        >Primary Normal</VueButton>
        <VueButton
          shape="rounded"
          variant="primary"
          title="Primary Disabled"
          disabled
        >Primary Disabled</VueButton>
      </div>
      <div class="stacked-mobile mbe2">
        <VueButton
          shape="rounded"
          variant="success"
          title="Success Normal"
        >Success Normal</VueButton>
        <VueButton
          shape="rounded"
          variant="success"
          title="Success Disabled"
          disabled
        >Success Disabled</VueButton>
      </div>
      <div class="stacked-mobile mbe2">
        <VueButton
          shape="rounded"
          variant="warning"
          title="Warning Normal"
        >Warning Normal</VueButton>
        <VueButton
          shape="rounded"
          variant="warning"
          title="Warning Disabled"
          disabled
        >Warning Disabled</VueButton>
      </div>
      <div class="stacked-mobile mbe2">
        <VueButton
          shape="rounded"
          variant="danger"
          title="Danger Normal"
        >Danger Normal</VueButton>
        <VueButton
          shape="rounded"
          variant="danger"
          title="Danger Disabled"
          disabled
        >Danger Disabled</VueButton>
      </div>
    </div>

    <div class="mbe2">
      <h2>State Comparison - Bordered Normal vs Disabled</h2>
    </div>
    <div class="mbe4">
      <div class="stacked-mobile mbe2">
        <VueButton
          :bordered="true"
          shape="rounded"
          variant="primary"
          title="Primary Bordered Normal"
        >Primary Normal</VueButton>
        <VueButton
          :bordered="true"
          shape="rounded"
          variant="primary"
          title="Primary Bordered Disabled"
          disabled
        >Primary Disabled</VueButton>
      </div>
      <div class="stacked-mobile mbe2">
        <VueButton
          :bordered="true"
          shape="rounded"
          variant="success"
          title="Success Bordered Normal"
        >Success Normal</VueButton>
        <VueButton
          :bordered="true"
          shape="rounded"
          variant="success"
          title="Success Bordered Disabled"
          disabled
        >Success Disabled</VueButton>
      </div>
      <div class="stacked-mobile mbe2">
        <VueButton
          :bordered="true"
          shape="rounded"
          variant="warning"
          title="Warning Bordered Normal"
        >Warning Normal</VueButton>
        <VueButton
          :bordered="true"
          shape="rounded"
          variant="warning"
          title="Warning Bordered Disabled"
          disabled
        >Warning Disabled</VueButton>
      </div>
      <div class="stacked-mobile mbe2">
        <VueButton
          :bordered="true"
          shape="rounded"
          variant="danger"
          title="Danger Bordered Normal"
        >Danger Normal</VueButton>
        <VueButton
          :bordered="true"
          shape="rounded"
          variant="danger"
          title="Danger Bordered Disabled"
          disabled
        >Danger Disabled</VueButton>
      </div>
    </div>

    <!-- CSS Parts Customization -->
    <div class="mbe4">
      <h2>CSS Parts Customization</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize button appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        title="Gradient Button"
        class="custom-gradient-button mie3"
      >
        Gradient Button
      </VueButton>
    </div>
  </section>
</template>
<script>
import VueButton from "agnosticui-core/button/vue";
import { VueVisuallyHidden } from "agnosticui-core/visually-hidden/vue";
import { VueIcon } from "agnosticui-core/icon/vue";

export default {
  name: "ButtonExamples",
  components: {
    VueButton,
    VueVisuallyHidden,
    VueIcon,
  },
};
</script>

<style scoped>
/* CSS Parts customization examples */

/* Gradient button style */
.custom-gradient-button::part(ag-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.custom-gradient-button::part(ag-button):hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.6);
}
</style>
