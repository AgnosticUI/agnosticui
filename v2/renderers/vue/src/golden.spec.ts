// Golden snapshot tests — Vue renderer
// Renders every fixtureBank variation through AgDynamicRenderer and commits
// the HTML output as a snapshot. A failing diff means the renderer's output
// changed for an existing fixture, which always requires a deliberate update.
//
// To update snapshots after an intentional change:
//   cd v2/renderers/vue && npx vitest run --update-snapshots

import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { AgDynamicRenderer } from './AgDynamicRenderer';
import { fixtureBank } from '../../../demo/src/fixtures/index';

const mountOptions = {
  global: {
    config: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag.startsWith('ag-'),
      },
    },
  },
};

afterEach(() => {
  document.body.innerHTML = '';
});

describe('AgDynamicRenderer Vue — golden snapshots', () => {
  for (const [workflow, variations] of Object.entries(fixtureBank)) {
    describe(`workflow: ${workflow}`, () => {
      variations.forEach((nodes, i) => {
        it(`variation ${i + 1} matches snapshot`, async () => {
          const wrapper = mount(AgDynamicRenderer, { props: { nodes }, ...mountOptions });
          await wrapper.vm.$nextTick();
          expect(wrapper.html()).toMatchSnapshot();
        });
      });
    });
  }
});
