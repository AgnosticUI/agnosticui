import { describe, it, expect } from 'vitest';
import { _MarkFallback } from './_MarkFallback';

describe('_MarkFallback String Engine', () => {
  describe('Static Mode Server Generation', () => {
    it('outputs pure HTML wrapped in target namespaces and variant configurations', () => {
      const html = _MarkFallback({ children: 'Static text server-side', variant: 'success' });
      expect(html).toBe('<mark class="ag-mark ag-mark-success">Static text server-side</mark>');
    });

    it('sanitizes input properties safely using local escaping rules', () => {
      const html = _MarkFallback({ children: '<script>alert("xss")</script>' });
      expect(html).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    });
  });

  describe('Reactive Mode Emulation', () => {
    const contextText = 'The quick brown fox jumps over the lazy dog. The.';

    it('isolates and highlights single case-insensitive matches cleanly', () => {
      const html = _MarkFallback({ children: contextText, search: 'quick' });
      expect(html).toContain('<mark class="ag-mark ag-mark-warning">quick</mark>');
    });

    it('respects global cascade rules and loops over all targets matching configuration criteria', () => {
      const html = _MarkFallback({ children: contextText, search: 'the', matchAll: true });
      expect(html.match(/<mark/g)?.length).toBe(3);
    });

    it('parses loosely typed meta-framework properties correctly during server string extraction', () => {
      const html = _MarkFallback({ children: contextText, search: 'The', matchAll: 'true', caseSensitive: 'true' });
      expect(html.match(/<mark/g)?.length).toBe(2);
    });
  });
});
