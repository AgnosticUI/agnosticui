<template>
  <section>
    <!-- Note: Tables are CSS-only. No web component wrapper needed! -->

    <div class="mbe2">
      <h2>Default Variant</h2>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Clean, standard look with light header background and subtle borders.
      </p>
    </div>
    <div class="mbe4">
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
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">Total Employees</td>
            <td>3</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="mbe2">
      <h2>Striped Variant</h2>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Alternating row colors for easier scanning.
      </p>
    </div>
    <div class="mbe4">
      <table class="ag-table ag-table--striped">
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
      </table>
    </div>

    <div class="mbe2">
      <h2>Bordered + Hoverable</h2>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Clear cell separation with interactive hover effect.
      </p>
    </div>
    <div class="mbe4">
      <table class="ag-table ag-table--bordered ag-table--hoverable">
        <caption>Product Inventory</caption>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Widget A</td>
            <td>$29.99</td>
            <td>50</td>
            <td>In Stock</td>
          </tr>
          <tr>
            <td>Widget B</td>
            <td>$49.99</td>
            <td>25</td>
            <td>Low Stock</td>
          </tr>
          <tr>
            <td>Widget C</td>
            <td>$19.99</td>
            <td>100</td>
            <td>In Stock</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mbe2">
      <h2>All Modifiers Combined</h2>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Striped, bordered, and hoverable for maximum visual feedback.
      </p>
    </div>
    <div class="mbe4">
      <table class="ag-table ag-table--striped ag-table--bordered ag-table--hoverable">
        <caption>Team Performance</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Tasks</th>
            <th>Completion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Emma Wilson</td>
            <td>Engineering</td>
            <td>24</td>
            <td>95%</td>
          </tr>
          <tr>
            <td>James Lee</td>
            <td>Design</td>
            <td>18</td>
            <td>88%</td>
          </tr>
          <tr>
            <td>Olivia Martinez</td>
            <td>Product</td>
            <td>32</td>
            <td>92%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
// No imports needed - tables are pure CSS!
</script>
