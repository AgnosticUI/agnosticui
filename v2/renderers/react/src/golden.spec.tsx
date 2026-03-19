// Golden snapshot tests — React renderer
// Renders every fixtureBank variation through AgDynamicRenderer and commits
// the HTML output as a snapshot. A failing diff means the renderer's output
// changed for an existing fixture, which always requires a deliberate update.
//
// To update snapshots after an intentional change:
//   cd v2/renderers/react && npx vitest run --update-snapshots

import { describe, it, expect, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { AgDynamicRenderer } from './AgDynamicRenderer';
import { fixtureBank } from '../../../demo/src/fixtures/index';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('AgDynamicRenderer React — golden snapshots', () => {
  for (const [workflow, variations] of Object.entries(fixtureBank)) {
    describe(`workflow: ${workflow}`, () => {
      variations.forEach((nodes, i) => {
        it(`variation ${i + 1} matches snapshot`, () => {
          const { container } = render(<AgDynamicRenderer nodes={nodes} />);
          expect(container.innerHTML).toMatchSnapshot();
        });
      });
    });
  }
});
