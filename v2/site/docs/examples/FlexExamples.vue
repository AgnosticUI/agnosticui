<template>
  <section>
    <!-- Basic Row Layouts -->
    <div class="mbe4">
      <h3>Basic Row Layout</h3>
      <p class="mbs2">Items arranged horizontally with default flex-start alignment.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow gap="1rem">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </VueFlexRow>
    </div>

    <!-- Centered -->
    <div class="mbe4">
      <h3>Centered Content</h3>
      <p class="mbs2">Items centered on both axes.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow
        gap="1rem"
        justify="center"
        align="center"
        style="min-height: 150px; background: var(--ag-gray-100); border-radius: 3px;"
      >
        <div class="demo-box">Centered 1</div>
        <div class="demo-box">Centered 2</div>
      </VueFlexRow>
    </div>

    <!-- Space Between -->
    <div class="mbe4">
      <h3>Space Between</h3>
      <p class="mbs2">Items distributed with space between them.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow justify="space-between">
        <div class="demo-box">Start</div>
        <div class="demo-box">Middle</div>
        <div class="demo-box">End</div>
      </VueFlexRow>
    </div>

    <!-- Space Around -->
    <div class="mbe4">
      <h3>Space Around</h3>
      <p class="mbs2">Items with equal space around them.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow justify="space-around">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </VueFlexRow>
    </div>

    <!-- Space Evenly -->
    <div class="mbe4">
      <h3>Space Evenly</h3>
      <p class="mbs2">Items with equal space between and around them.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow justify="space-evenly">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </VueFlexRow>
    </div>

    <!-- Stretch Children -->
    <div class="mbe4">
      <h3>Equal Width Children</h3>
      <p class="mbs2">Using <code>stretch-children</code> to make all items equal width.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow
        gap="1rem"
        :stretch-children="true"
      >
        <div class="demo-box">Short</div>
        <div class="demo-box">Medium length</div>
        <div class="demo-box">Longer content here</div>
      </VueFlexRow>
    </div>

    <!-- Column Layout -->
    <div class="mbe4">
      <h3>Column Layout</h3>
      <p class="mbs2">Items stacked vertically using FlexCol.</p>
    </div>
    <div class="mbe4">
      <VueFlexCol gap="1rem">
        <div class="demo-box">Row 1</div>
        <div class="demo-box">Row 2</div>
        <div class="demo-box">Row 3</div>
      </VueFlexCol>
    </div>

    <!-- Wrap -->
    <div class="mbe4">
      <h3>Wrapping Layout</h3>
      <p class="mbs2">Items wrap to the next line when needed.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow
        gap="1rem"
        wrap="wrap"
        style="max-width: 600px;"
      >
        <div
          v-for="i in 8"
          :key="i"
          class="demo-box"
          style="min-width: 120px;"
        >
          Item {{ i }}
        </div>
      </VueFlexRow>
    </div>

    <!-- Reverse -->
    <div class="mbe4">
      <h3>Reverse Direction</h3>
      <p class="mbs2">Reverse the order of items.</p>
    </div>
    <div class="mbe4">
      <VueFlexRow
        gap="1rem"
        :reverse="true"
      >
        <div class="demo-box">First (1)</div>
        <div class="demo-box">Second (2)</div>
        <div class="demo-box">Third (3)</div>
      </VueFlexRow>
    </div>

    <!-- Align Items -->
    <div class="mbe4">
      <h3>Align Items (Cross Axis)</h3>
      <p class="mbs2">Different vertical alignments for items of varying heights.</p>
    </div>
    <div class="mbe4">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p class="mbe2"><strong>align="flex-start"</strong></p>
          <VueFlexRow
            gap="1rem"
            align="flex-start"
            style="min-height: 120px; background: var(--ag-gray-100); border-radius: 3px;"
          >
            <div class="demo-box">Item 1</div>
            <div
              class="demo-box"
              style="padding: 2rem 1rem;"
            >
              Tall Item 2
            </div>
            <div class="demo-box">Item 3</div>
          </VueFlexRow>
        </div>
        <div>
          <p class="mbe2"><strong>align="center"</strong></p>
          <VueFlexRow
            gap="1rem"
            align="center"
            style="min-height: 120px; background: var(--ag-gray-100); border-radius: 3px;"
          >
            <div class="demo-box">Item 1</div>
            <div
              class="demo-box"
              style="padding: 2rem 1rem;"
            >
              Tall Item 2
            </div>
            <div class="demo-box">Item 3</div>
          </VueFlexRow>
        </div>
        <div>
          <p class="mbe2"><strong>align="flex-end"</strong></p>
          <VueFlexRow
            gap="1rem"
            align="flex-end"
            style="min-height: 120px; background: var(--ag-gray-100); border-radius: 3px;"
          >
            <div class="demo-box">Item 1</div>
            <div
              class="demo-box"
              style="padding: 2rem 1rem;"
            >
              Tall Item 2
            </div>
            <div class="demo-box">Item 3</div>
          </VueFlexRow>
        </div>
      </div>
    </div>

    <!-- Nested Layouts -->
    <div class="mbe4">
      <h3>Nested Flex Containers</h3>
      <p class="mbs2">Combine flex containers to create complex layouts.</p>
    </div>
    <div class="mbe4">
      <VueFlexCol
        gap="1rem"
        style="padding: 1rem; background: var(--ag-gray-100); border-radius: 3px;"
      >
        <VueFlexRow justify="space-between">
          <div class="demo-box demo-box-primary">Header Left</div>
          <div class="demo-box demo-box-primary">Header Right</div>
        </VueFlexRow>

        <VueFlexRow gap="1rem">
          <VueFlexCol
            gap="0.5rem"
            style="flex: 1;"
          >
            <div class="demo-box demo-box-secondary">Sidebar Item 1</div>
            <div class="demo-box demo-box-secondary">Sidebar Item 2</div>
            <div class="demo-box demo-box-secondary">Sidebar Item 3</div>
          </VueFlexCol>

          <div
            class="demo-box"
            style="flex: 2; padding: 2rem;"
          >
            Main Content Area
          </div>
        </VueFlexRow>

        <VueFlexRow justify="center">
          <div class="demo-box demo-box-primary">Footer</div>
        </VueFlexRow>
      </VueFlexCol>
    </div>

    <!-- Stack and Group Aliases -->
    <div class="mbe4">
      <h3>Stack and Group (Aliases)</h3>
      <p class="mbs2">Convenient aliases familiar to Mantine and Chakra UI users.</p>
    </div>
    <div class="mbe4">
      <div style="display: flex; gap: 2rem;">
        <div style="flex: 1;">
          <p class="mbe2"><strong>Stack (FlexCol alias)</strong></p>
          <VueStack gap="1rem">
            <div class="demo-box">Stacked 1</div>
            <div class="demo-box">Stacked 2</div>
            <div class="demo-box">Stacked 3</div>
          </VueStack>
        </div>
        <div style="flex: 1;">
          <p class="mbe2"><strong>Group (FlexRow alias)</strong></p>
          <VueGroup gap="0.5rem">
            <button class="demo-button">Action 1</button>
            <button class="demo-button">Action 2</button>
            <button class="demo-button">Action 3</button>
          </VueGroup>
        </div>
      </div>
    </div>

    <!-- Inline Flex -->
    <div class="mbe4">
      <h3>Inline Flex</h3>
      <p class="mbs2">Inline flex containers that only take up as much width as needed.</p>
    </div>
    <div class="mbe4">
      <p class="mbe2">Multiple inline flex containers on the same line:</p>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <VueFlexInline
          gap="0.5rem"
          style="background: var(--ag-gray-100); padding: 0.5rem; border-radius: 3px;"
        >
          <span class="demo-tag">Tag 1</span>
          <span class="demo-tag">Tag 2</span>
        </VueFlexInline>
        <VueFlexInline
          gap="0.5rem"
          style="background: var(--ag-gray-100); padding: 0.5rem; border-radius: 3px;"
        >
          <span class="demo-tag">Tag 3</span>
          <span class="demo-tag">Tag 4</span>
        </VueFlexInline>
        <VueFlexInline
          gap="0.5rem"
          style="background: var(--ag-gray-100); padding: 0.5rem; border-radius: 3px;"
        >
          <span class="demo-tag">Tag 5</span>
          <span class="demo-tag">Tag 6</span>
        </VueFlexInline>
      </div>
    </div>

    <!-- Responsive Layouts -->
    <div class="mbe4">
      <h3>Responsive Layouts</h3>
      <p class="mbs2">Stack on mobile (≤640px), row on desktop (≥769px). <strong>Resize your browser to see the effect!</strong></p>
    </div>
    <div class="mbe4">
      <ag-flex-row style="--flex-direction: column; --flex-gap: 1rem;">
        <div class="demo-box">Item 1 (inline test)</div>
        <div class="demo-box">Item 2 (inline test)</div>
        <div class="demo-box">Item 3 (inline test)</div>
      </ag-flex-row>
    </div>
    <div class="mbe4">
      <ag-flex-row class="responsive-direction">
        <div class="demo-box">Item 1 (class test)</div>
        <div class="demo-box">Item 2 (class test)</div>
        <div class="demo-box">Item 3 (class test)</div>
      </ag-flex-row>
    </div>

    <!-- Responsive Gap -->
    <div class="mbe4">
      <h3>Responsive Gap</h3>
      <p class="mbs2">Different gap sizes per breakpoint: 0.5rem (mobile), 1rem (tablet), 2rem (desktop).</p>
    </div>
    <div class="mbe4">
      <ag-flex-row class="responsive-gap">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </ag-flex-row>
    </div>

    <!-- Responsive Justify -->
    <div class="mbe4">
      <h3>Responsive Justify</h3>
      <p class="mbs2">Center on mobile, space-between on desktop.</p>
    </div>
    <div class="mbe4">
      <ag-flex-row class="responsive-justify">
        <div class="demo-box">Start</div>
        <div class="demo-box">Middle</div>
        <div class="demo-box">End</div>
      </ag-flex-row>
    </div>

    <!-- Responsive Card Grid -->
    <div class="mbe4">
      <h3>Responsive Card Grid</h3>
      <p class="mbs2">Real-world example: column on mobile, wrapped row on desktop.</p>
    </div>
    <div class="mbe4">
      <ag-flex-row class="responsive-cards">
        <div
          v-for="i in 6"
          :key="i"
          class="demo-box card-item"
        >
          Card {{ i }}
        </div>
      </ag-flex-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  VueFlexRow,
  VueFlexCol,
  VueFlexInline,
  VueStack,
  VueGroup,
} from "../../../lib/src/components/Flex/vue";
// Also import raw web components for responsive examples
import "../../../lib/src/components/Flex/FlexRow";
</script>

<style>
/* Clean demo boxes inspired by the flexbox patterns site */
.demo-box {
  padding: 1rem;
  background: var(--ag-primary-light, #e0f2fe);
  border: 1px solid var(--ag-primary, #0ea5e9);
  border-radius: 3px;
  text-align: center;
  font-size: 0.875rem;
}

.demo-box-primary {
  background: var(--ag-primary-light, #dbeafe);
  border-color: var(--ag-primary, #3b82f6);
}

.demo-box-secondary {
  background: var(--ag-secondary-light, #f3e8ff);
  border-color: var(--ag-secondary, #a855f7);
}

.demo-tag {
  padding: 0.25rem 0.75rem;
  background: white;
  border: 1px solid var(--ag-gray-300, #d1d5db);
  border-radius: 3px;
  font-size: 0.875rem;
}

.demo-button {
  padding: 0.5rem 1rem;
  background: var(--ag-primary, #3b82f6);
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 0.875rem;
  cursor: pointer;
}

.demo-button:hover {
  background: var(--ag-primary-dark, #2563eb);
}

code {
  background: var(--ag-gray-100, #f3f4f6);
  padding: 0.125rem 0.375rem;
  border-radius: 3px;
  font-size: 0.875em;
}

/* Responsive layouts using CSS custom properties - no !important needed! */
.responsive-direction {
  --flex-direction: column;
  --flex-gap: 1rem;
}

@media (min-width: 769px) {
  .responsive-direction {
    --flex-direction: row;
  }
}

.responsive-gap {
  --flex-gap: 0.5rem;
}

@media (min-width: 641px) and (max-width: 768px) {
  .responsive-gap {
    --flex-gap: 1rem;
  }
}

@media (min-width: 769px) {
  .responsive-gap {
    --flex-gap: 2rem;
  }
}

.responsive-justify {
  --flex-gap: 1rem;
  --flex-justify: center;
}

@media (min-width: 769px) {
  .responsive-justify {
    --flex-justify: space-between;
  }
}

.responsive-cards {
  --flex-direction: column;
  --flex-gap: 1rem;
}

@media (min-width: 769px) {
  .responsive-cards {
    --flex-direction: row;
    --flex-wrap: wrap;
    --flex-gap: 1.5rem;
  }
}

.card-item {
  flex: 1 1 calc(33.333% - 1rem);
  min-width: 200px;
}
</style>
