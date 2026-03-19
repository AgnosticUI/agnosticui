// Golden snapshot tests — Lit renderer
// Renders every fixtureBank variation through AgDynamicRenderer and commits
// the HTML output as a snapshot. A failing diff means the renderer's output
// changed for an existing fixture, which always requires a deliberate update.
//
// To update snapshots after an intentional change:
//   cd v2/renderers/lit && npx vitest run --update-snapshots

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import type { AgDynamicRenderer } from './AgDynamicRenderer.js';
import { fixtureBank } from '../../../demo/src/fixtures/index';

// Strip Lit's internal part-marker comments (<!--?lit$...-->). These contain
// a hash derived from the Lit version loaded, which changes when multiple test
// files share the same module registry. All other markup is deterministic.
function normalizeLitHtml(html: string): string {
  return html.replace(/<!--\?lit\$\d+\$-->/g, '<!--?lit-->');
}

type RendererEl = InstanceType<typeof AgDynamicRenderer>;

async function setup(): Promise<void> {
  await import('./AgDynamicRenderer.js');
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('AgDynamicRenderer Lit — golden snapshots', () => {
  beforeEach(async () => {
    await setup();
  });

  for (const [workflow, variations] of Object.entries(fixtureBank)) {
    describe(`workflow: ${workflow}`, () => {
      variations.forEach((nodes, i) => {
        it(`variation ${i + 1} matches snapshot`, async () => {
          const el = document.createElement('ag-dynamic-renderer') as RendererEl;
          el.nodes = nodes;
          document.body.appendChild(el);
          await el.updateComplete;
          expect(normalizeLitHtml(el.innerHTML)).toMatchSnapshot();
        });
      });
    });
  }
});
