# Tables

Table is provided as CSS-only utilities. No JavaScript required.

## Installation

```bash
npm install agnosticui-core
```

## Import Styles

```css
/* In your CSS/SCSS file */
@import "agnosticui-core/styles/table.css";
```

Or in your JavaScript:

```javascript
import "agnosticui-core/styles/table.css";
```

---

## Default Variant

Clean, standard look with light header background and subtle borders.

<table class="ag-table">
  <caption>Employee Directory</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Camilla Rodriguez</td>
      <td>camilla@enchilada.mx</td>
      <td>Designer</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Jonathan Chen</td>
      <td>jonathan@la-chispa.io</td>
      <td>Engineer</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Sarah Kim</td>
      <td>sarah@example.com</td>
      <td>Product Manager</td>
      <td>Away</td>
    </tr>
    <tr>
      <td>Marcus Johnson</td>
      <td>marcus@example.com</td>
      <td>Developer</td>
      <td>Active</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total Employees</td>
      <td>4</td>
    </tr>
  </tfoot>
</table>

::: details Show HTML

```html
<table class="ag-table">
  <caption>
    Employee Directory
  </caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Camilla Rodriguez</td>
      <td>camilla@enchilada.mx</td>
      <td>Designer</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Jonathan Chen</td>
      <td>jonathan@la-chispa.io</td>
      <td>Engineer</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Sarah Kim</td>
      <td>sarah@example.com</td>
      <td>Product Manager</td>
      <td>Away</td>
    </tr>
    <tr>
      <td>Marcus Johnson</td>
      <td>marcus@example.com</td>
      <td>Developer</td>
      <td>Active</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total Employees</td>
      <td>4</td>
    </tr>
  </tfoot>
</table>
```

:::

---

## Variants

### Stacked (Stronger Hierarchy)

Stronger hierarchy with darker header. Good for dense data or when you want clear separation.

<table class="ag-table ag-table--stacked">
  <caption>Q4 2024 Sales Report</caption>
  <thead>
    <tr>
      <th>Region</th>
      <th>Revenue</th>
      <th>Growth</th>
      <th>Target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>North America</td>
      <td>$2.4M</td>
      <td>+12%</td>
      <td>Met</td>
    </tr>
    <tr>
      <td>Europe</td>
      <td>$1.8M</td>
      <td>+8%</td>
      <td>Met</td>
    </tr>
    <tr>
      <td>Asia Pacific</td>
      <td>$3.1M</td>
      <td>+15%</td>
      <td>Exceeded</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$7.3M</td>
      <td>+11%</td>
      <td>-</td>
    </tr>
  </tfoot>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--stacked">
  <caption>
    Q4 2024 Sales Report
  </caption>
  <thead>
    <tr>
      <th>Region</th>
      <th>Revenue</th>
      <th>Growth</th>
      <th>Target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>North America</td>
      <td>$2.4M</td>
      <td>+12%</td>
      <td>Met</td>
    </tr>
    <tr>
      <td>Europe</td>
      <td>$1.8M</td>
      <td>+8%</td>
      <td>Met</td>
    </tr>
    <tr>
      <td>Asia Pacific</td>
      <td>$3.1M</td>
      <td>+15%</td>
      <td>Exceeded</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$7.3M</td>
      <td>+11%</td>
      <td>-</td>
    </tr>
  </tfoot>
</table>
```

:::

---

### Minimal (Ultra-light)

Ultra-light, airy feel. No header background, just a strong border. Great for dashboards.

<table class="ag-table ag-table--minimal">
  <caption>System Status</caption>
  <thead>
    <tr>
      <th>Service</th>
      <th>Status</th>
      <th>Uptime</th>
      <th>Response Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>API Gateway</td>
      <td>✓ Operational</td>
      <td>99.9%</td>
      <td>120ms</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>✓ Operational</td>
      <td>99.8%</td>
      <td>45ms</td>
    </tr>
    <tr>
      <td>Cache Server</td>
      <td>✓ Operational</td>
      <td>99.95%</td>
      <td>8ms</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--minimal">
  <caption>
    System Status
  </caption>
  <thead>
    <tr>
      <th>Service</th>
      <th>Status</th>
      <th>Uptime</th>
      <th>Response Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>API Gateway</td>
      <td>✓ Operational</td>
      <td>99.9%</td>
      <td>120ms</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>✓ Operational</td>
      <td>99.8%</td>
      <td>45ms</td>
    </tr>
    <tr>
      <td>Cache Server</td>
      <td>✓ Operational</td>
      <td>99.95%</td>
      <td>8ms</td>
    </tr>
  </tbody>
</table>
```

:::

---

### Monochrome (High Contrast)

High contrast, bold look. Inverted header colors for editorial/sophisticated feel.

<table class="ag-table ag-table--monochrome">
  <caption>Product Comparison</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Basic</th>
      <th>Pro</th>
      <th>Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Users</td>
      <td>5</td>
      <td>25</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>10GB</td>
      <td>100GB</td>
      <td>1TB</td>
    </tr>
    <tr>
      <td>Support</td>
      <td>Email</td>
      <td>Priority</td>
      <td>24/7 Dedicated</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--monochrome">
  <caption>
    Product Comparison
  </caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Basic</th>
      <th>Pro</th>
      <th>Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Users</td>
      <td>5</td>
      <td>25</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>10GB</td>
      <td>100GB</td>
      <td>1TB</td>
    </tr>
    <tr>
      <td>Support</td>
      <td>Email</td>
      <td>Priority</td>
      <td>24/7 Dedicated</td>
    </tr>
  </tbody>
</table>
```

:::

---

## Size Variants

### Small

Compact padding, ideal for dense data.

<table class="ag-table ag-table--small">
  <caption>Compact Data</caption>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Item A</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Item B</td>
      <td>Pending</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Item C</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--small">
  <caption>
    Compact Data
  </caption>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Item A</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Item B</td>
      <td>Pending</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Item C</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>
```

:::

---

### Medium (Default)

Standard padding for most use cases.

<table class="ag-table">
  <caption>Default Size</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Smith</td>
      <td>alice@example.com</td>
      <td>Developer</td>
    </tr>
    <tr>
      <td>Bob Jones</td>
      <td>bob@example.com</td>
      <td>Designer</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table">
  <caption>
    Default Size
  </caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Smith</td>
      <td>alice@example.com</td>
      <td>Developer</td>
    </tr>
    <tr>
      <td>Bob Jones</td>
      <td>bob@example.com</td>
      <td>Designer</td>
    </tr>
  </tbody>
</table>
```

:::

---

### Large

Generous padding for readability and emphasis.

<table class="ag-table ag-table--large">
  <caption>Spacious Layout</caption>
  <thead>
    <tr>
      <th>Category</th>
      <th>Value</th>
      <th>Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Revenue</td>
      <td>$2.4M</td>
      <td>+15%</td>
    </tr>
    <tr>
      <td>Expenses</td>
      <td>$1.2M</td>
      <td>-5%</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--large">
  <caption>
    Spacious Layout
  </caption>
  <thead>
    <tr>
      <th>Category</th>
      <th>Value</th>
      <th>Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Revenue</td>
      <td>$2.4M</td>
      <td>+15%</td>
    </tr>
    <tr>
      <td>Expenses</td>
      <td>$1.2M</td>
      <td>-5%</td>
    </tr>
  </tbody>
</table>
```

:::

---

## Modifiers

All modifiers can be combined freely with variants and sizes.

### Striped

Alternating row colors for easier scanning.

<table class="ag-table ag-table--striped">
  <caption>Striped rows for easier scanning</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Smith</td>
      <td>alice@example.com</td>
      <td>Developer</td>
    </tr>
    <tr>
      <td>Bob Jones</td>
      <td>bob@example.com</td>
      <td>Designer</td>
    </tr>
    <tr>
      <td>Carol White</td>
      <td>carol@example.com</td>
      <td>Manager</td>
    </tr>
    <tr>
      <td>David Brown</td>
      <td>david@example.com</td>
      <td>Engineer</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--striped">
  <caption>
    Striped rows for easier scanning
  </caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Smith</td>
      <td>alice@example.com</td>
      <td>Developer</td>
    </tr>
    <tr>
      <td>Bob Jones</td>
      <td>bob@example.com</td>
      <td>Designer</td>
    </tr>
    <tr>
      <td>Carol White</td>
      <td>carol@example.com</td>
      <td>Manager</td>
    </tr>
    <tr>
      <td>David Brown</td>
      <td>david@example.com</td>
      <td>Engineer</td>
    </tr>
  </tbody>
</table>
```

:::

---

### Bordered

Clear cell separation with borders around all cells.

<table class="ag-table ag-table--bordered">
  <caption>Clear cell separation with borders</caption>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Widget A</td>
      <td>$29.99</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Widget B</td>
      <td>$49.99</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Widget C</td>
      <td>$19.99</td>
      <td>100</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--bordered">
  <caption>
    Clear cell separation with borders
  </caption>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Widget A</td>
      <td>$29.99</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Widget B</td>
      <td>$49.99</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Widget C</td>
      <td>$19.99</td>
      <td>100</td>
    </tr>
  </tbody>
</table>
```

:::

---

### Hoverable

Interactive rows with hover effect.

<table class="ag-table ag-table--hoverable">
  <caption>Interactive rows with hover effect</caption>
  <thead>
    <tr>
      <th>Task</th>
      <th>Assignee</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Update documentation</td>
      <td>Alice</td>
      <td>In Progress</td>
    </tr>
    <tr>
      <td>Review pull requests</td>
      <td>Bob</td>
      <td>Pending</td>
    </tr>
    <tr>
      <td>Deploy to production</td>
      <td>Carol</td>
      <td>Complete</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--hoverable">
  <caption>
    Interactive rows with hover effect
  </caption>
  <thead>
    <tr>
      <th>Task</th>
      <th>Assignee</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Update documentation</td>
      <td>Alice</td>
      <td>In Progress</td>
    </tr>
    <tr>
      <td>Review pull requests</td>
      <td>Bob</td>
      <td>Pending</td>
    </tr>
    <tr>
      <td>Deploy to production</td>
      <td>Carol</td>
      <td>Complete</td>
    </tr>
  </tbody>
</table>
```

:::

---

## Combination Examples

### Striped + Bordered + Hoverable

<table class="ag-table ag-table--striped ag-table--bordered ag-table--hoverable">
  <caption>All modifiers combined</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Department</th>
      <th>Salary</th>
      <th>Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Emma Wilson</td>
      <td>Engineering</td>
      <td>$95,000</td>
      <td>3</td>
    </tr>
    <tr>
      <td>James Lee</td>
      <td>Design</td>
      <td>$85,000</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Olivia Martinez</td>
      <td>Product</td>
      <td>$105,000</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Liam Chen</td>
      <td>Marketing</td>
      <td>$75,000</td>
      <td>1</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Average</td>
      <td>$90,000</td>
      <td>2.75</td>
    </tr>
  </tfoot>
</table>

::: details Show HTML

```html
<table
  class="ag-table ag-table--striped ag-table--bordered ag-table--hoverable"
>
  <caption>
    All modifiers combined
  </caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Department</th>
      <th>Salary</th>
      <th>Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Emma Wilson</td>
      <td>Engineering</td>
      <td>$95,000</td>
      <td>3</td>
    </tr>
    <tr>
      <td>James Lee</td>
      <td>Design</td>
      <td>$85,000</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Olivia Martinez</td>
      <td>Product</td>
      <td>$105,000</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Liam Chen</td>
      <td>Marketing</td>
      <td>$75,000</td>
      <td>1</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Average</td>
      <td>$90,000</td>
      <td>2.75</td>
    </tr>
  </tfoot>
</table>
```

:::

---

### Stacked + Small + Striped

<table class="ag-table ag-table--stacked ag-table--small ag-table--striped">
  <caption>Compact stacked table with stripes</caption>
  <thead>
    <tr>
      <th>ID</th>
      <th>Task</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Fix login bug</td>
      <td>High</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Update docs</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Refactor API</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Add tests</td>
      <td>High</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--stacked ag-table--small ag-table--striped">
  <caption>
    Compact stacked table with stripes
  </caption>
  <thead>
    <tr>
      <th>ID</th>
      <th>Task</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Fix login bug</td>
      <td>High</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Update docs</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Refactor API</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Add tests</td>
      <td>High</td>
    </tr>
  </tbody>
</table>
```

:::

---

### Minimal + Large + Hoverable

<table class="ag-table ag-table--minimal ag-table--large ag-table--hoverable">
  <caption>Spacious minimal table with hover</caption>
  <thead>
    <tr>
      <th>Metric</th>
      <th>This Month</th>
      <th>Last Month</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Active Users</td>
      <td>12,450</td>
      <td>11,230</td>
    </tr>
    <tr>
      <td>Page Views</td>
      <td>89,340</td>
      <td>82,100</td>
    </tr>
    <tr>
      <td>Conversions</td>
      <td>1,234</td>
      <td>1,089</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--minimal ag-table--large ag-table--hoverable">
  <caption>
    Spacious minimal table with hover
  </caption>
  <thead>
    <tr>
      <th>Metric</th>
      <th>This Month</th>
      <th>Last Month</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Active Users</td>
      <td>12,450</td>
      <td>11,230</td>
    </tr>
    <tr>
      <td>Page Views</td>
      <td>89,340</td>
      <td>82,100</td>
    </tr>
    <tr>
      <td>Conversions</td>
      <td>1,234</td>
      <td>1,089</td>
    </tr>
  </tbody>
</table>
```

:::

---

### Monochrome + Bordered + Striped + Hoverable

<table class="ag-table ag-table--monochrome ag-table--bordered ag-table--striped ag-table--hoverable">
  <caption>Maximum combination example</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
      <th>Expenses</th>
      <th>Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$125,000</td>
      <td>$85,000</td>
      <td>$40,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$132,000</td>
      <td>$88,000</td>
      <td>$44,000</td>
    </tr>
    <tr>
      <td>March</td>
      <td>$148,000</td>
      <td>$92,000</td>
      <td>$56,000</td>
    </tr>
    <tr>
      <td>April</td>
      <td>$155,000</td>
      <td>$95,000</td>
      <td>$60,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$560,000</td>
      <td>$360,000</td>
      <td>$200,000</td>
    </tr>
  </tfoot>
</table>

::: details Show HTML

```html
<table
  class="ag-table ag-table--monochrome ag-table--bordered ag-table--striped ag-table--hoverable"
>
  <caption>
    Maximum combination example
  </caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
      <th>Expenses</th>
      <th>Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$125,000</td>
      <td>$85,000</td>
      <td>$40,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$132,000</td>
      <td>$88,000</td>
      <td>$44,000</td>
    </tr>
    <tr>
      <td>March</td>
      <td>$148,000</td>
      <td>$92,000</td>
      <td>$56,000</td>
    </tr>
    <tr>
      <td>April</td>
      <td>$155,000</td>
      <td>$95,000</td>
      <td>$60,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$560,000</td>
      <td>$360,000</td>
      <td>$200,000</td>
    </tr>
  </tfoot>
</table>
```

:::

---

## Accessibility

### Visually Hidden Caption

Caption is accessible to screen readers but hidden visually using the `.visually-hidden` utility class.

<table class="ag-table ag-table--minimal ag-table--hoverable">
  <caption class="visually-hidden">User account information</caption>
  <thead>
    <tr>
      <th>Username</th>
      <th>Email</th>
      <th>Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>john_doe</td>
      <td>john@example.com</td>
      <td>2 hours ago</td>
    </tr>
    <tr>
      <td>jane_smith</td>
      <td>jane@example.com</td>
      <td>5 minutes ago</td>
    </tr>
  </tbody>
</table>

::: details Show HTML

```html
<table class="ag-table ag-table--minimal ag-table--hoverable">
  <caption class="visually-hidden">
    User account information
  </caption>
  <thead>
    <tr>
      <th>Username</th>
      <th>Email</th>
      <th>Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>john_doe</td>
      <td>john@example.com</td>
      <td>2 hours ago</td>
    </tr>
    <tr>
      <td>jane_smith</td>
      <td>jane@example.com</td>
      <td>5 minutes ago</td>
    </tr>
  </tbody>
</table>
```

:::

---

## A Note on Web Components and Shadow DOM

It's important to note that by opting for a CSS-only solution, table styling will participate in the global CSS cascade. This design decision, however, allows us to fully leverage the native power and accessibility of the `<table>` element without the complexities and limitations that a Shadow DOM wrapper would impose.

You might wonder why `Table` is not provided as a web component, which is a common pattern for other components in this library. The short answer is that the benefits of Shadow DOM (style encapsulation) create significant, deal-breaking problems for styling complex, multi-part elements like tables.

This is a deliberate architectural choice, and the reasoning is shared by authors of other popular libraries like [Shoelace](https://github.com/shoelace-style/shoelace/issues/134#issuecomment-817848531).

### The Declarative Dream vs. The Styling Nightmare

Ideally, a table web component would let you write familiar, declarative HTML using `slots`:

```html
<!-- A hypothetical <ag-table> component -->
<ag-table variant="striped" size="large">
  <!-- The user declaratively provides the table structure -->
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</ag-table>
```

This looks great! However, the problem arises when the `<ag-table>` component tries to apply styles based on its properties (like `variant="striped"`). The component's internal stylesheet, encapsulated in its Shadow DOM, cannot reliably style the deeply nested `<tr>` or `<td>` elements that you've passed into the slot.

The `::slotted()` CSS selector is not powerful enough for this. It can only target top-level slotted elements and cannot reach their descendants. This means we could not style the inner parts of _your_ table from _our_ component.

### The Unacceptable Alternatives

To work around this styling limitation, we would be forced into one of two poor solutions:

1.  **A Massive API of CSS Parts**: We could require you to add a `part` attribute to every single element (`<tr part="row">`, `<td part="cell">`, etc.) so we could style them. This is extremely verbose and places a heavy burden on you, the consumer.
2.  **Abandoning Declarative Slots**: The other option is to abandon slots and force you to pass in your data as a JavaScript array (e.g., `items="..."`). The component would then render the table itself. This is inflexible, works poorly for server-rendered content, and prevents you from using the semantic `<table>` markup you know and love.

### The CSS-First Solution

Given these challenges, the best solution is to embrace CSS as a first-class citizen. By providing a suite of well-designed CSS classes that you can apply directly to a standard `<table>` element, we give you:

- **Total Flexibility**: Use standard, semantic HTML.
- **Unrestricted Styling**: Target any element with standard CSS selectors.
- **Framework Agnosticism**: It works everywhere, from vanilla HTML to any JavaScript framework.

This approach leverages the native power and accessibility of the `<table>` element without the unnecessary complexity and limitations that a Shadow DOM wrapper would impose.

---

## Design Tokens

All table styles use AgnosticUI design tokens for colors, spacing, and typography. Customize the look by overriding CSS variables:

```css
:root {
  --ag-background-secondary: #f3f4f6;
  --ag-space-3: 0.875rem;
  --ag-border-subtle: #d1d5db;
  --ag-text-primary: #111827;
}

[data-theme="dark"] {
  --ag-background-secondary: #212730;
  --ag-border-subtle: #656c76;
  --ag-text-primary: #f0f6fc;
}
```

---

## Class Reference

| Class                   | Description                      |
| ----------------------- | -------------------------------- |
| `.ag-table`             | Base table class (required)      |
| `.ag-table--stacked`    | Dark header variant              |
| `.ag-table--minimal`    | Light, borderless header         |
| `.ag-table--monochrome` | High contrast black/white header |
| `.ag-table--small`      | Compact padding                  |
| `.ag-table--large`      | Generous padding                 |
| `.ag-table--striped`    | Zebra striping on rows           |
| `.ag-table--bordered`   | Borders around all cells         |
| `.ag-table--hoverable`  | Hover effect on rows             |
