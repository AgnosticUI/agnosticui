import { describe, it, expect } from 'vitest';
import { _TagFallback } from './_TagFallback';

describe('_TagFallback String Engine', () => {
  describe('Static Mode Server Generation', () => {
    it('outputs pure HTML wrapped in target namespaces and configurations', () => {
      const html = _TagFallback({ children: 'Beta Code', variant: 'info', shape: 'pill' });
      expect(html).toContain('ag-tag-wrapper');
      expect(html).toContain('ag-tag-variant-info');
      expect(html).toContain('ag-tag-shape-pill'); // Corrected from pills to pill
      expect(html).toContain('Beta Code');
    });

    it('sanitizes child node text values correctly', () => {
      const html = _TagFallback({ children: '<script>dangerous()</script>' });
      expect(html).toContain('&lt;script&gt;dangerous()&lt;/script&gt;');
    });

    it('emits remove buttons matching global configuration variables', () => {
      const html = _TagFallback({ children: 'Removable tag', removable: 'true' });
      expect(html).toContain('ag-tag-remove-button');
      expect(html).toContain('aria-label="Remove tag"');
    });

    it('parses loosely-typed configuration properties effectively', () => {
      const html = _TagFallback({ children: 'Upper tag', uppercase: '' });
      expect(html).toContain('ag-tag-uppercase');
    });
  });
});
