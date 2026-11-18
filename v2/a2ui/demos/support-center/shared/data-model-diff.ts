/**
 * Describes how a specific JSON Pointer `@path` changed between two DataModel snapshots.
 */
export type PathChangeKind = 'added' | 'updated';

/**
 * Map of RFC 6901 JSON Pointer paths (e.g. `"/ownerEmail"`, `"/filters/0"`) to their change type.
 */
export type DataModelChangeMap = Map<string, PathChangeKind>;

/**
 * Escapes special HTML characters so untrusted user or LLM string values inside the
 * DataModel can never inject HTML/script markup into the Inspector `<pre>` block.
 */
export function escapeHtml(raw: string): string {
  return raw
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * Encodes a single property key or array index into an RFC 6901 JSON Pointer segment.
 * Per RFC 6901 Section 3: `~` becomes `~0` and `/` becomes `~1`.
 */
export function encodeJsonPointerSegment(segment: string): string {
  return segment.replaceAll('~', '~0').replaceAll('/', '~1');
}

/**
 * Helper type guard to distinguish plain key-value records from primitives and arrays.
 */
function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Recursively compares `previous` and `next` DataModel snapshots and returns a map of
 * every RFC 6901 JSON Pointer `@path` that was `added` or `updated`.
 *
 * @param previous - Prior DataModel snapshot (or `undefined`/`null` on initial boot).
 * @param next - Latest DataModel snapshot from `dataModel.get('')`.
 * @param basePath - Current JSON Pointer prefix during recursion (default `""`).
 * @param changes - Accumulator map passed through recursive calls.
 */
export function diffDataModelSnapshots(
  previous: unknown,
  next: unknown,
  basePath = '',
  changes: DataModelChangeMap = new Map(),
): DataModelChangeMap {
  // Identical references or primitives: nothing changed at this path
  if (Object.is(previous, next)) {
    return changes;
  }

  // Case 1: Both snapshots are plain objects -> compare key-by-key
  if (isPlainRecord(previous) && isPlainRecord(next)) {
    for (const key of Object.keys(next)) {
      const childPath = `${basePath}/${encodeJsonPointerSegment(key)}`;
      if (!(key in previous)) {
        // Brand-new property added to the DataModel
        changes.set(childPath, 'added');
      } else {
        // Existing property: recurse to find exact leaf paths that changed
        diffDataModelSnapshots(previous[key], next[key], childPath, changes);
      }
    }
    return changes;
  }

  // Case 2: Both snapshots are arrays -> compare element-by-element
  if (Array.isArray(previous) && Array.isArray(next)) {
    for (let i = 0; i < next.length; i++) {
      const itemPath = `${basePath}/${i}`;
      if (i >= previous.length) {
        changes.set(itemPath, 'added');
      } else {
        diffDataModelSnapshots(previous[i], next[i], itemPath, changes);
      }
    }
    return changes;
  }

  // Case 3: Primitive value changed (or type changed from null/primitive to object/array)
  const targetPath = basePath || '/';
  const kind: PathChangeKind = previous === undefined ? 'added' : 'updated';
  changes.set(targetPath, kind);

  return changes;
}

/**
 * Formats a DataModel snapshot as pretty-printed, HTML-safe lines where any line
 * belonging to a changed `@path` is wrapped in a highlight `<span>` with CSS classes
 * (`a2ui-json-line--added` or `a2ui-json-line--updated`) and `data-a2ui-path`.
 *
 * @param snapshot - Current DataModel object (`dataModel.get('')`).
 * @param changedPaths - Map produced by `diffDataModelSnapshots`.
 */
export function renderHighlightedJsonHtml(
  snapshot: unknown,
  changedPaths: DataModelChangeMap,
): string {
  const lines: string[] = [];

  /**
   * Formats a single line, wrapping it in a semantic highlight span if `path` (or an
   * ancestor path for newly added subtrees) appears in `changedPaths`.
   */
  const pushLine = (indent: string, contentHtml: string, path: string) => {
    const changeKind = findMatchingChangeKind(path, changedPaths);
    if (changeKind) {
      const safePath = escapeHtml(path);
      lines.push(
        `<span class="a2ui-json-line a2ui-json-line--${changeKind}" data-a2ui-path="${safePath}">${indent}${contentHtml}</span>`,
      );
    } else {
      lines.push(`<span class="a2ui-json-line">${indent}${contentHtml}</span>`);
    }
  };

  /**
   * Recursive pretty-printer that keeps track of each line's exact RFC 6901 JSON Pointer path.
   */
  const visit = (value: unknown, currentPath: string, depth: number, trailingComma: string) => {
    const indent = '  '.repeat(depth);
    const childIndent = '  '.repeat(depth + 1);

    if (isPlainRecord(value)) {
      const keys = Object.keys(value);
      if (keys.length === 0) {
        pushLine(indent, `{}${trailingComma}`, currentPath);
        return;
      }

      pushLine(indent, '{', currentPath);
      keys.forEach((key, idx) => {
        const isLast = idx === keys.length - 1;
        const comma = isLast ? '' : ',';
        const childPath = `${currentPath}/${encodeJsonPointerSegment(key)}`;
        const childVal = value[key];
        const safeKey = `<span class="a2ui-json-key">"${escapeHtml(key)}"</span>: `;

        if (isPlainRecord(childVal) || Array.isArray(childVal)) {
          const openBrace = Array.isArray(childVal) ? '[' : '{';
          const closeBrace = Array.isArray(childVal) ? ']' : '}';
          const isEmpty = Array.isArray(childVal)
            ? childVal.length === 0
            : Object.keys(childVal).length === 0;

          if (isEmpty) {
            pushLine(childIndent, `${safeKey}${openBrace}${closeBrace}${comma}`, childPath);
          } else {
            pushLine(childIndent, `${safeKey}${openBrace}`, childPath);
            visitNestedChildren(childVal, childPath, depth + 1);
            pushLine(childIndent, `${closeBrace}${comma}`, childPath);
          }
        } else {
          pushLine(
            childIndent,
            `${safeKey}${formatPrimitiveHtml(childVal)}${comma}`,
            childPath,
          );
        }
      });
      pushLine(indent, `}${trailingComma}`, currentPath);
      return;
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        pushLine(indent, `[]${trailingComma}`, currentPath);
        return;
      }
      pushLine(indent, '[', currentPath);
      visitNestedChildren(value, currentPath, depth);
      pushLine(indent, `]${trailingComma}`, currentPath);
      return;
    }

    pushLine(indent, `${formatPrimitiveHtml(value)}${trailingComma}`, currentPath || '/');
  };

  const visitNestedChildren = (
    container: Record<string, unknown> | unknown[],
    parentPath: string,
    depth: number,
  ) => {
    const childIndent = '  '.repeat(depth + 1);

    if (Array.isArray(container)) {
      container.forEach((item, idx) => {
        const comma = idx === container.length - 1 ? '' : ',';
        const itemPath = `${parentPath}/${idx}`;
        if (isPlainRecord(item) || Array.isArray(item)) {
          visit(item, itemPath, depth + 1, comma);
        } else {
          pushLine(childIndent, `${formatPrimitiveHtml(item)}${comma}`, itemPath);
        }
      });
    } else {
      const keys = Object.keys(container);
      keys.forEach((key, idx) => {
        const comma = idx === keys.length - 1 ? '' : ',';
        const childPath = `${parentPath}/${encodeJsonPointerSegment(key)}`;
        const childVal = container[key];
        const safeKey = `<span class="a2ui-json-key">"${escapeHtml(key)}"</span>: `;

        if (isPlainRecord(childVal) || Array.isArray(childVal)) {
          const openBrace = Array.isArray(childVal) ? '[' : '{';
          const closeBrace = Array.isArray(childVal) ? ']' : '}';
          const isEmpty = Array.isArray(childVal)
            ? childVal.length === 0
            : Object.keys(childVal).length === 0;

          if (isEmpty) {
            pushLine(childIndent, `${safeKey}${openBrace}${closeBrace}${comma}`, childPath);
          } else {
            pushLine(childIndent, `${safeKey}${openBrace}`, childPath);
            visitNestedChildren(childVal, childPath, depth + 1);
            pushLine(childIndent, `${closeBrace}${comma}`, childPath);
          }
        } else {
          pushLine(
            childIndent,
            `${safeKey}${formatPrimitiveHtml(childVal)}${comma}`,
            childPath,
          );
        }
      });
    }
  };

  visit(snapshot ?? {}, '', 0, '');
  return lines.join('\n');
}

/**
 * Checks if `path` itself changed, or if an ancestor subtree was newly `added`.
 */
function findMatchingChangeKind(
  path: string,
  changedPaths: DataModelChangeMap,
): PathChangeKind | undefined {
  if (!path) return undefined;

  const direct = changedPaths.get(path);
  if (direct) return direct;

  // If a parent object/array was newly added (e.g. "/routing"), highlight its nested lines too
  for (const [changedPath, kind] of changedPaths.entries()) {
    if (kind === 'added' && changedPath !== '/' && path.startsWith(`${changedPath}/`)) {
      return 'added';
    }
  }

  return undefined;
}

/**
 * Syntax-colors and HTML-escapes JSON primitive values (`string`, `number`, `boolean`, `null`).
 */
function formatPrimitiveHtml(value: unknown): string {
  if (value === null) {
    return `<span class="a2ui-json-null">null</span>`;
  }
  if (typeof value === 'string') {
    return `<span class="a2ui-json-string">"${escapeHtml(value)}"</span>`;
  }
  if (typeof value === 'number') {
    return `<span class="a2ui-json-number">${String(value)}</span>`;
  }
  if (typeof value === 'boolean') {
    return `<span class="a2ui-json-boolean">${String(value)}</span>`;
  }
  return escapeHtml(String(value));
}
