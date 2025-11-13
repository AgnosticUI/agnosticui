<template>
  <section>
    <!-- Default Table -->
    <div class="mbe2">
      <h3>Default Variant</h3>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Clean, standard look with light header background and subtle borders.
      </p>
    </div>
    <div class="mbe4">
      <VueTable>
        <table>
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
      </VueTable>
    </div>

    <!-- Stacked Variant -->
    <div class="mbe2">
      <h3>Stacked Variant</h3>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Stronger hierarchy with darker header. Good for dense data or when you want clear separation.
      </p>
    </div>
    <div class="mbe4">
      <VueTable variant="stacked">
        <table>
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
      </VueTable>
    </div>

    <!-- Minimal Variant -->
    <div class="mbe2">
      <h3>Minimal Variant</h3>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Ultra-light, airy feel. No header background, just a strong border. Great for dashboards.
      </p>
    </div>
    <div class="mbe4">
      <VueTable variant="minimal">
        <table>
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
      </VueTable>
    </div>

    <!-- Monochrome Variant -->
    <div class="mbe2">
      <h3>Monochrome Variant</h3>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        High contrast, bold look. Inverted header colors for editorial/sophisticated feel.
      </p>
    </div>
    <div class="mbe4">
      <VueTable variant="monochrome">
        <table>
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
      </VueTable>
    </div>

    <!-- Size Variants -->
    <div class="mbe2">
      <h3>Size Variants</h3>
    </div>

    <div class="mbe2">
      <h4>Small</h4>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Compact padding, ideal for dense data.
      </p>
    </div>
    <div class="mbe4">
      <VueTable size="small">
        <table>
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
      </VueTable>
    </div>

    <div class="mbe2">
      <h4>Large</h4>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Generous padding for readability and emphasis.
      </p>
    </div>
    <div class="mbe4">
      <VueTable size="large">
        <table>
          <caption>Spacious Layout</caption>
          <thead>
            <tr>
              <th>Category</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revenue</td>
              <td>$2.4M</td>
            </tr>
            <tr>
              <td>Expenses</td>
              <td>$1.2M</td>
            </tr>
          </tbody>
        </table>
      </VueTable>
    </div>

    <!-- Modifiers -->
    <div class="mbe2">
      <h3>Modifiers</h3>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        All modifiers can be combined freely.
      </p>
    </div>

    <div class="mbe2">
      <h4>Striped</h4>
    </div>
    <div class="mbe4">
      <VueTable :striped="true">
        <table>
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
      </VueTable>
    </div>

    <div class="mbe2">
      <h4>Bordered</h4>
    </div>
    <div class="mbe4">
      <VueTable :bordered="true">
        <table>
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
      </VueTable>
    </div>

    <div class="mbe2">
      <h4>Hoverable</h4>
    </div>
    <div class="mbe4">
      <VueTable :hoverable="true">
        <table>
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
      </VueTable>
    </div>

    <div class="mbe2">
      <h4>Combined: Striped + Bordered + Hoverable</h4>
    </div>
    <div class="mbe4">
      <VueTable
        :striped="true"
        :bordered="true"
        :hoverable="true"
      >
        <table>
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
      </VueTable>
    </div>

    <!-- Complete Example -->
    <div class="mbe2">
      <h3>Complete Example</h3>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Stacked variant with all modifiers and a footer.
      </p>
    </div>
    <div class="mbe4">
      <VueTable
        variant="stacked"
        :striped="true"
        :bordered="true"
        :hoverable="true"
      >
        <table>
          <caption>Monthly Performance Report</caption>
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Sales</th>
              <th scope="col">Expenses</th>
              <th scope="col">Profit</th>
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
      </VueTable>
    </div>

    <!-- Visually Hidden Caption -->
    <div class="mbe2">
      <h3>Visually Hidden Caption</h3>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Caption is accessible to screen readers but hidden visually.
      </p>
    </div>
    <div class="mbe4">
      <VueTable
        variant="minimal"
        :hoverable="true"
      >
        <table>
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
      </VueTable>
    </div>
  </section>
</template>

<script>
import { VueTable } from "agnosticui-core/table/vue";

export default {
  name: "TableExamples",
  components: {
    VueTable,
  },
};
</script>

<style scoped>
/* No custom styles needed - tables use design tokens */
</style>
