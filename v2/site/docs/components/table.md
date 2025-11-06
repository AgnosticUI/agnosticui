# Tables

## The Honest Truth

Web Components and native HTML tables don’t mix well.

Tables are inherently **relational structures** — they rely on selectors like  
`thead th + td`, `tr:nth-child(even)`, and `<th scope="col">`, all of which break down when you introduce Shadow DOM boundaries.

Because AgnosticUI’s mission is _interoperability and simplicity across frameworks_, we’ve chosen **not** to ship a `<ag-table>` web component at this time.

Instead, we recommend using **native HTML tables** styled with AgnosticUI design tokens.  
This keeps your tables standards-based, accessible, and visually consistent with the rest of your design system.

::: info

AgnosticUI provides UI primitives. For complex data grids requiring sorting, filtering, virtual scrolling, and integrated pagination, we recommend specialized libraries like AG Grid, TanStack Table, or similar that are designed for this use case.

:::

## Quick Start: Token-Powered Base Table Styles

Here’s a minimal, theme-aware CSS snippet that leverages **AgnosticUI v2 design tokens**:

```css
.ag-table {
  border-collapse: collapse;
  width: 100%;
  font-size: var(--ag-font-size-base);
  color: var(--ag-text-primary);
  background-color: var(--ag-background-primary);
}

.ag-table th,
.ag-table td {
  padding: var(--ag-space-3) var(--ag-space-4);
  border-bottom: var(--ag-border-width-1) solid var(--ag-border);
  text-align: left;
  line-height: var(--ag-line-height-base);
}

.ag-table th {
  background-color: var(--ag-background-secondary);
  color: var(--ag-text-primary);
  font-weight: 600;
}

.ag-table tr:hover {
  background-color: var(--ag-blue-50);
}
```

### Example usage

```html
<table class="ag-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Camilla</td>
      <td>camilla@enchilada.mx</td>
      <td>Designer</td>
    </tr>
    <tr>
      <td>Jonathan</td>
      <td>jonathan@la-chispa.io</td>
      <td>Engineer</td>
    </tr>
  </tbody>
</table>
```

<table class="ag-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Camilla</td>
      <td>camilla@enchilada.mx</td>
      <td>Designer</td>
    </tr>
    <tr>
      <td>Jonathan</td>
      <td>jonathan@la-chispa.io</td>
      <td>Engineer</td>
    </tr>
  </tbody>
</table>

## Why This Approach

AgnosticUI aims to stay **lightweight, practical, and friction-free**.

If something is already well-served by native HTML, we don’t wrap it for parity’s sake.
Tables are one of those cases — encapsulation here causes more pain than value.

We’ll continue watching proposals like **Scoped Styles**, **Constructable Stylesheets**, and **Open Shadow DOM**,
but for now, _native tables + tokens_ is the best combination of simplicity and power.
