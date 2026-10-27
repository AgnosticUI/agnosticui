import { escapeHtml } from "../../../utils/escape.js";

export type MarkVariant = 'warning' | 'info' | 'success' | 'error' | 'primary' | 'secondary' | 'monochrome';

export interface MarkFallbackProps {
  variant?: MarkVariant;
  search?: string;
  caseSensitive?: boolean | string;
  matchAll?: boolean | string;
  children?: string;
}

/**
 * Isomorphic Pure HTML String Engine for the Mark Component
 */
export function _MarkFallback(props: MarkFallbackProps = {}): string {
  const variant = props.variant || 'warning';
  const text = props.children || '';
  const search = props.search;
  
  const caseSensitive = props.caseSensitive !== undefined 
    ? (props.caseSensitive === true || props.caseSensitive === 'true' || props.caseSensitive === '') 
    : false;
    
  const matchAll = props.matchAll !== undefined 
    ? (props.matchAll === true || props.matchAll === 'true' || props.matchAll === '') 
    : false;

  const variantClassMap: Record<MarkVariant, string> = {
    warning: 'ag-mark-warning',
    info: 'ag-mark-info',
    success: 'ag-mark-success',
    error: 'ag-mark-error',
    primary: 'ag-mark-primary',
    secondary: 'ag-mark-secondary',
    monochrome: 'ag-mark-monochrome'
  };

  const activeVariantClass = variantClassMap[variant] || 'ag-mark-warning';

  if (!search) {
    return `<mark class="ag-mark ${activeVariantClass}">${escapeHtml(text)}</mark>`;
  }

  const escapedSearch = search.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
  if (!escapedSearch) {
    return escapeHtml(text);
  }

  let flags = matchAll ? 'g' : '';
  if (!caseSensitive) {
    flags += 'i';
  }

  try {
    const regex = new RegExp(escapedSearch, flags);
    
    if (matchAll) {
      const matches = [...text.matchAll(regex)];
      if (!matches.length) return escapeHtml(text);
      
      let lastIndex = 0;
      let result = '';
      
      for (const match of matches) {
        const matchIndex = match.index ?? 0;
        result += escapeHtml(text.substring(lastIndex, matchIndex));
        result += `<mark class="ag-mark ${activeVariantClass}">${escapeHtml(match[0])}</mark>`;
        lastIndex = matchIndex + match[0].length;
      }
      
      result += escapeHtml(text.substring(lastIndex));
      return result;
    } else {
      const match = text.match(regex);
      if (match && match.index !== undefined) {
        const pre = escapeHtml(text.substring(0, match.index));
        const highlighted = `<mark class="ag-mark ${activeVariantClass}">${escapeHtml(match[0])}</mark>`;
        const post = escapeHtml(text.substring(match.index + match[0].length));
        return `${pre}${highlighted}${post}`;
      }
      return escapeHtml(text);
    }
  } catch {
    return escapeHtml(text);
  }
}
