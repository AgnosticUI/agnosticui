import { LitElement, html } from 'lit';
import 'agnosticui-core/combobox';

export class ComboboxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();

    // State options
    this.stateOptions = [
      { value: 'al', label: 'Alabama' },
      { value: 'ak', label: 'Alaska' },
      { value: 'az', label: 'Arizona' },
      { value: 'ar', label: 'Arkansas' },
      { value: 'ca', label: 'California' },
      { value: 'co', label: 'Colorado' },
      { value: 'ct', label: 'Connecticut' },
      { value: 'de', label: 'Delaware' },
      { value: 'fl', label: 'Florida' },
      { value: 'ga', label: 'Georgia' },
    ];

    // Options with some disabled
    this.optionsWithDisabled = [
      { value: 'ca', label: 'California' },
      { value: 'co', label: 'Colorado', disabled: true },
      { value: 'ct', label: 'Connecticut' },
      { value: 'fl', label: 'Florida', disabled: true },
      { value: 'ny', label: 'New York' },
    ];

    // State values
    this.selectedState = '';
    this.isLoading = false;
    this.lastEvent = null;
  }

  firstUpdated() {
    // Set options on combobox elements
    const comboboxes = this.querySelectorAll('ag-combobox');
    comboboxes.forEach((combobox) => {
      const comboId = combobox.id;

      // Set appropriate options based on combobox ID
      if (comboId === 'disabled-options') {
        combobox.options = this.optionsWithDisabled;
      } else {
        combobox.options = this.stateOptions;
      }

      // Add event listeners
      combobox.addEventListener('change', (e) => {
        if (comboId === 'basic-combobox') {
          this.selectedState = e.detail.value;
          this.requestUpdate();
        }
      });
    });
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
    const loadingCombobox = this.querySelector('#loading-combobox');

    if (loadingCombobox) {
      if (this.isLoading) {
        loadingCombobox.options = [];
        setTimeout(() => {
          loadingCombobox.options = this.stateOptions;
          this.isLoading = false;
          this.requestUpdate();
        }, 2000);
      } else {
        loadingCombobox.options = this.stateOptions;
      }
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <section>
        <!-- Basic Combobox -->
        <div class="mbe4">
          <h2>Basic Combobox</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            id="basic-combobox"
            label="Select State"
            placeholder="Choose a state..."
            class="mbe2"
          ></ag-combobox>
          <p class="text-sm text-secondary">Selected: ${this.selectedState || 'None'}</p>
        </div>

        <!-- Sizes -->
        <div class="mbe4">
          <h2>Sizes</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Small Combobox"
            size="small"
            placeholder="Small size"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Default Combobox"
            size="default"
            placeholder="Default size"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Large Combobox"
            size="large"
            placeholder="Large size"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Filter Modes -->
        <div class="mbe4">
          <h2>Filter Modes</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Starts With Filter"
            filter-mode="startsWith"
            placeholder="Type to filter..."
            help-text="Try typing 'Ca' to see California"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Contains Filter"
            filter-mode="contains"
            placeholder="Type to search..."
            help-text="Try typing 'or' to see multiple matches"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Clearable -->
        <div class="mbe4">
          <h2>Clearable</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Clearable Combobox"
            clearable
            placeholder="Select and clear..."
            help-text="Clear button appears when a value is selected"
            value="ca"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- States -->
        <div class="mbe4">
          <h2>States</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Disabled Combobox"
            disabled
            placeholder="This is disabled"
            value="ca"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Readonly Combobox"
            readonly
            placeholder="This is readonly"
            value="co"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Required Combobox"
            required
            placeholder="This is required"
            help-text="This field is required"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Invalid Combobox"
            invalid
            error-message="Please select a valid state"
            placeholder="This has an error"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- With Help Text -->
        <div class="mbe4">
          <h2>With Help Text</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="State of Residence"
            placeholder="Select your state..."
            help-text="Choose the state where you currently reside"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Loading State -->
        <div class="mbe4">
          <h2>Loading State</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            id="loading-combobox"
            label="Loading Combobox"
            ?loading=${this.isLoading}
            loading-text="Fetching states..."
            placeholder="Loading..."
            class="mbe2"
          ></ag-combobox>
          <button
            @click=${this.toggleLoading}
            class="btn btn-primary"
          >
            ${this.isLoading ? 'Stop Loading' : 'Start Loading'}
          </button>
        </div>

        <!-- With Disabled Options -->
        <div class="mbe4">
          <h2>With Disabled Options</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            id="disabled-options"
            label="Select State"
            placeholder="Some options are disabled..."
            help-text="Colorado and Florida are disabled"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Custom No Results Text -->
        <div class="mbe4">
          <h2>Custom No Results Text</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Search States"
            placeholder="Type to search..."
            no-results-text="No states match your search"
            help-text="Try typing 'xyz' to see custom no results message"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Hidden Label -->
        <div class="mbe4">
          <h2>Hidden Label</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="State (Hidden)"
            label-hidden
            placeholder="Label is visually hidden but accessible"
            help-text="The label is hidden visually but still accessible to screen readers"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Monochrome Variant -->
        <div class="mbe4">
          <h2>Monochrome Variant (Single Select)</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select State"
            variant="monochrome"
            placeholder="Choose a state..."
            help-text="Monochrome variant with inverted colors for selected items"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple Select -->
        <div class="mbe4">
          <h2>Multiple Select</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            placeholder="Choose one or more states..."
            help-text="Select multiple states with checkboxes"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple with Defaults -->
        <div class="mbe4">
          <h2>Multiple with Defaults</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Pre-selected States"
            multiple
            default-value='["ca", "fl"]'
            help-text="California and Florida are pre-selected"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple Clearable -->
        <div class="mbe4">
          <h2>Multiple Clearable</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            clearable
            placeholder="Select and clear multiple..."
            help-text="Clear button removes all selections"
            default-value='["ny", "co"]'
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple with Max Visible Tags -->
        <div class="mbe4">
          <h2>Multiple with Max Visible Tags</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            default-value='["al", "ak", "az", "ar", "ca"]'
            max-options-visible="2"
            help-text="Shows only 2 tags, with a +3 summary"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple Monochrome -->
        <div class="mbe4">
          <h2>Multiple Monochrome</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            variant="monochrome"
            placeholder="Choose one or more states..."
            help-text="Multiple select with monochrome variant"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- External Label Support -->
        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            The Combobox component supports external labels with helper text, required fields, and validation states.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-combobox
              label="Favorite State"
              name="favorite"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Home State"
              help-text="Select the state where you currently reside"
              name="home"
              placeholder="Choose your home state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Required State"
              required
              help-text="This field is required"
              name="required"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="State Selection"
              required
              invalid
              error-message="Please select a valid state to continue"
              name="validation"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>
        </div>

        <!-- Label Positioning -->
        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
            <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label when opened.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-combobox
              label="Top Label (Default)"
              label-position="top"
              name="pos-top"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Start Position"
              label-position="start"
              name="pos-start"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="End Position"
              label-position="end"
              name="pos-end"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Bottom Position (Not Recommended)"
              label-position="bottom"
              name="pos-bottom"
              help-text="The dropdown will cover this label when opened"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('combobox-lit-examples', ComboboxLitExamples);
