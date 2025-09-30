import "agnosticui-core";

// State management
let clickCount = 0;
let togglePressed = false;
let isLoading = false;

// Create and mount the vanilla button examples
export function mountButtonVanilla(container: HTMLElement) {
  container.innerHTML = `
    <div style="padding: 2rem;">
      <h1>Vanilla JS Button Examples</h1>

      <section style="margin-bottom: 2rem;">
        <h2>Basic Variants</h2>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-button id="btn-default">Default Button</ag-button>
          <ag-button id="btn-click">Clicked 0 times</ag-button>
        </div>
      </section>

      <section style="margin-bottom: 2rem;">
        <h2>Button Types</h2>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-button type="button">Button Type</ag-button>
          <ag-button type="submit">Submit Type</ag-button>
          <ag-button type="reset">Reset Type</ag-button>
        </div>
      </section>

      <section style="margin-bottom: 2rem;">
        <h2>Button States</h2>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-button disabled>Disabled Button</ag-button>
          <ag-button id="btn-async">Async Action</ag-button>
        </div>
      </section>

      <section style="margin-bottom: 2rem;">
        <h2>Toggle Functionality</h2>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-button id="btn-toggle" toggle>Toggle Button (Not Pressed)</ag-button>
        </div>
      </section>

      <section style="margin-bottom: 2rem;">
        <h2>With Icons</h2>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-button>
            <span style="margin-right: 0.5rem;">📥</span>
            Download
          </ag-button>
          <ag-button>⚙️</ag-button>
        </div>
      </section>
    </div>
  `;

  // Wait for web components to be defined
  customElements.whenDefined("ag-button").then(() => {
    // Click counter button
    const btnClick = container.querySelector("#btn-click");
    if (btnClick) {
      btnClick.addEventListener("click", () => {
        clickCount++;
        btnClick.textContent = `Clicked ${clickCount} times`;
        console.log("Vanilla button clicked:", clickCount);
      });
    }

    // Async action button
    const btnAsync = container.querySelector("#btn-async");
    if (btnAsync) {
      btnAsync.addEventListener("click", async () => {
        if (isLoading) return;

        isLoading = true;
        btnAsync.setAttribute("loading", "true");
        btnAsync.textContent = "Loading...";
        console.log("Async action started");

        await new Promise((resolve) => setTimeout(resolve, 2000));

        isLoading = false;
        btnAsync.removeAttribute("loading");
        btnAsync.textContent = "Async Action";
        console.log("Async action completed");
      });
    }

    // Toggle button
    const btnToggle = container.querySelector("#btn-toggle");
    if (btnToggle) {
      btnToggle.addEventListener("toggle", (event: Event) => {
        const detail = (event as CustomEvent).detail;
        togglePressed = detail.pressed;
        btnToggle.textContent = `Toggle Button ${
          togglePressed ? "(Pressed)" : "(Not Pressed)"
        }`;
        console.log("Toggle state:", detail);
      });
    }
  });
}

// Auto-mount if there's a container
const container = document.getElementById("button-vanilla-container");
if (container) {
  mountButtonVanilla(container);
}
