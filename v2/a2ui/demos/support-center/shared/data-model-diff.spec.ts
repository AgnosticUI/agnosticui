import { describe, expect, it } from 'vitest';
import {
  diffDataModelSnapshots,
  renderHighlightedJsonHtml,
} from './data-model-diff.js';

describe('DataModelDiff (Live @path JSON Diff Highlighter)', () => {
  it('detects added and updated RFC 6901 @path entries accurately', () => {
    console.log('\n--- START TEST: diffDataModelSnapshots ---');

    const prevSnapshot = {
      ownerEmail: 'ops@agnosticui.com',
      instantAlerts: false,
      routing: {
        channel: 'paid-search',
        maxQueue: 10,
      },
    };

    const nextSnapshot = {
      ownerEmail: 'vip-lead@agnosticui.com', // updated
      instantAlerts: false, // unchanged
      routing: {
        channel: 'paid-search', // unchanged
        maxQueue: 25, // updated
        escalateTo: 'manager@agnosticui.com', // added
      },
    };

    const changes = diffDataModelSnapshots(prevSnapshot, nextSnapshot);
    console.log('Detected @path diffs:', Object.fromEntries(changes.entries()));

    expect(changes.size).toBe(3);
    expect(changes.get('/ownerEmail')).toBe('updated');
    expect(changes.get('/routing/maxQueue')).toBe('updated');
    expect(changes.get('/routing/escalateTo')).toBe('added');
    expect(changes.has('/instantAlerts')).toBe(false);
    expect(changes.has('/routing/channel')).toBe(false);

    console.log('--- END TEST: diffDataModelSnapshots PASSED ---\n');
  });

  it('renders HTML-escaped JSON lines with highlight classes on changed @paths', () => {
    console.log('\n--- START TEST: renderHighlightedJsonHtml ---');

    const prev = {
      ownerEmail: 'old@agnosticui.com',
      note: 'Normal note',
    };

    const next = {
      ownerEmail: 'new@agnosticui.com',
      note: '<script>alert("xss")</script>',
      priority: true,
    };

    const changes = diffDataModelSnapshots(prev, next);
    const html = renderHighlightedJsonHtml(next, changes);

    console.log('Rendered highlighted HTML snippet:\n', html);

    // Changed paths must carry highlight classes and data-a2ui-path attributes
    expect(html).toContain('class="a2ui-json-line a2ui-json-line--updated" data-a2ui-path="/ownerEmail"');
    expect(html).toContain('class="a2ui-json-line a2ui-json-line--updated" data-a2ui-path="/note"');
    expect(html).toContain('class="a2ui-json-line a2ui-json-line--added" data-a2ui-path="/priority"');

    // Adversarial HTML characters must be escaped to prevent XSS
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;alert(\\&quot;xss\\&quot;)&lt;/script&gt;');

    console.log('--- END TEST: renderHighlightedJsonHtml PASSED ---\n');
  });
});
