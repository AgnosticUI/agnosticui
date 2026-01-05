import { useState } from "react";
import { ReactCombobox } from "agnosticui-core/combobox/react";

export default function ComboboxReactExamples() {
  // State options
  const stateOptions = [
    { value: "al", label: "Alabama" },
    { value: "ak", label: "Alaska" },
    { value: "az", label: "Arizona" },
    { value: "ar", label: "Arkansas" },
    { value: "ca", label: "California" },
    { value: "co", label: "Colorado" },
    { value: "ct", label: "Connecticut" },
    { value: "de", label: "Delaware" },
    { value: "fl", label: "Florida" },
    { value: "ga", label: "Georgia" },
  ];

  // Options with some disabled
  const optionsWithDisabled = [
    { value: "ca", label: "California" },
    { value: "co", label: "Colorado", disabled: true },
    { value: "ct", label: "Connecticut" },
    { value: "fl", label: "Florida", disabled: true },
    { value: "ny", label: "New York" },
  ];

  // State values
  const [selectedState, setSelectedState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingOptions, setLoadingOptions] = useState([]);
  const [lastEvent, setLastEvent] = useState(null);

  const handleStateChange = (detail) => {
    setSelectedState(detail.value);
    console.log("State changed:", detail);
  };

  const toggleLoading = () => {
    setIsLoading(!isLoading);
    if (!isLoading) {
      setLoadingOptions([]);
      // Simulate async loading
      setTimeout(() => {
        setLoadingOptions(stateOptions);
        setIsLoading(false);
      }, 2000);
    } else {
      setLoadingOptions(stateOptions);
    }
  };

  const handleChange = (detail) => {
    const optionLabel = detail.option ? detail.option.label : "cleared";
    setLastEvent(`change (value: ${detail.value || "none"}, option: ${optionLabel})`);
  };

  const handleSelect = (detail) => {
    setLastEvent(`select (value: ${detail.value}, label: ${detail.option.label})`);
  };

  const handleSearch = (detail) => {
    setLastEvent(`search (searchTerm: "${detail.searchTerm}")`);
  };

  return (
    <section>
      {/* Basic Combobox */}
      <div className="mbe4">
        <h2>Basic Combobox</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select State"
          placeholder="Choose a state..."
          className="mbe2"
          onChange={handleStateChange}
        />
        <p className="text-sm text-secondary">Selected: {selectedState || 'None'}</p>
      </div>

      {/* Sizes */}
      <div className="mbe4">
        <h2>Sizes</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Small Combobox"
          size="small"
          placeholder="Small size"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Default Combobox"
          size="default"
          placeholder="Default size"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Large Combobox"
          size="large"
          placeholder="Large size"
          className="mbe2"
        />
      </div>

      {/* Filter Modes */}
      <div className="mbe4">
        <h2>Filter Modes</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Starts With Filter"
          filterMode="startsWith"
          placeholder="Type to filter..."
          helpText="Try typing 'Ca' to see California"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Contains Filter"
          filterMode="contains"
          placeholder="Type to search..."
          helpText="Try typing 'or' to see multiple matches"
          className="mbe2"
        />
      </div>

      {/* Clearable */}
      <div className="mbe4">
        <h2>Clearable</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Clearable Combobox"
          clearable
          placeholder="Select and clear..."
          helpText="Clear button appears when a value is selected"
          value="ca"
          className="mbe2"
        />
      </div>

      {/* States */}
      <div className="mbe4">
        <h2>States</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Disabled Combobox"
          disabled
          placeholder="This is disabled"
          value="ca"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Readonly Combobox"
          readonly
          placeholder="This is readonly"
          value="co"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Required Combobox"
          required
          placeholder="This is required"
          helpText="This field is required"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Invalid Combobox"
          invalid
          errorMessage="Please select a valid state"
          placeholder="This has an error"
          className="mbe2"
        />
      </div>

      {/* With Help Text */}
      <div className="mbe4">
        <h2>With Help Text</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="State of Residence"
          placeholder="Select your state..."
          helpText="Choose the state where you currently reside"
          className="mbe2"
        />
      </div>

      {/* Loading State */}
      <div className="mbe4">
        <h2>Loading State</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={loadingOptions}
          label="Loading Combobox"
          loading={isLoading}
          loadingText="Fetching states..."
          placeholder="Loading..."
          className="mbe2"
        />
        <button
          onClick={toggleLoading}
          className="btn btn-primary"
        >
          {isLoading ? 'Stop Loading' : 'Start Loading'}
        </button>
      </div>

      {/* With Disabled Options */}
      <div className="mbe4">
        <h2>With Disabled Options</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={optionsWithDisabled}
          label="Select State"
          placeholder="Some options are disabled..."
          helpText="Colorado and Florida are disabled"
          className="mbe2"
        />
      </div>

      {/* Custom No Results Text */}
      <div className="mbe4">
        <h2>Custom No Results Text</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Search States"
          placeholder="Type to search..."
          noResultsText="No states match your search"
          helpText="Try typing 'xyz' to see custom no results message"
          className="mbe2"
        />
      </div>

      {/* Hidden Label */}
      <div className="mbe4">
        <h2>Hidden Label</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="State (Hidden)"
          labelHidden
          placeholder="Label is visually hidden but accessible"
          helpText="The label is hidden visually but still accessible to screen readers"
          className="mbe2"
        />
      </div>

      {/* Monochrome Variant */}
      <div className="mbe4">
        <h2>Monochrome Variant (Single Select)</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select State"
          variant="monochrome"
          placeholder="Choose a state..."
          helpText="Monochrome variant with inverted colors for selected items"
          className="mbe2"
        />
      </div>

      {/* Multiple Select */}
      <div className="mbe4">
        <h2>Multiple Select</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select States"
          multiple
          closeOnSelect={false}
          placeholder="Choose one or more states..."
          helpText="Select multiple states with checkboxes"
          className="mbe2"
        />
      </div>

      {/* Multiple with Defaults */}
      <div className="mbe4">
        <h2>Multiple with Defaults</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Pre-selected States"
          multiple
          closeOnSelect={false}
          defaultValue={["ca", "fl"]}
          helpText="California and Florida are pre-selected"
          className="mbe2"
        />
      </div>

      {/* Multiple Clearable */}
      <div className="mbe4">
        <h2>Multiple Clearable</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select States"
          multiple
          clearable
          closeOnSelect={false}
          defaultValue={["ny", "co"]}
          placeholder="Select and clear multiple..."
          helpText="Clear button removes all selections"
          className="mbe2"
        />
      </div>

      {/* Multiple with Max Visible Tags */}
      <div className="mbe4">
        <h2>Multiple with Max Visible Tags</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select States"
          multiple
          closeOnSelect={false}
          defaultValue={["al", "ak", "az", "ar", "ca"]}
          maxOptionsVisible={2}
          helpText="Shows only 2 tags, with a +3 summary"
          className="mbe2"
        />
      </div>

      {/* Multiple Monochrome */}
      <div className="mbe4">
        <h2>Multiple Monochrome</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select States"
          multiple
          variant="monochrome"
          closeOnSelect={false}
          placeholder="Choose one or more states..."
          helpText="Multiple select with monochrome variant"
          className="mbe2"
        />
      </div>

      {/* Event Handling */}
      <div className="mbe4">
        <h2>Event Handling</h2>
      </div>
      <div className="stacked mbe4">
        <div className="flex-inline items-center" style={{ gap: "10px" }}>
          <ReactCombobox
            options={stateOptions}
            label="Event Test"
            placeholder="Type or select..."
            onChange={handleChange}
            onSelect={handleSelect}
            onSearch={handleSearch}
            className="mbe2"
          />
          {lastEvent && (
            <p>
              Last event: <strong>{lastEvent}</strong>
            </p>
          )}
        </div>
      </div>

      {/* External Label Support */}
      <div className="mbe4">
        <h2>External Label Support</h2>
        <p className="mbs2 mbe3">
          The Combobox component supports external labels with helper text, required fields, and validation states.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "600px" }}>
        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Favorite State"
            name="favorite"
            placeholder="Choose a state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Home State"
            helpText="Select the state where you currently reside"
            name="home"
            placeholder="Choose your home state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Required State"
            required
            helpText="This field is required"
            name="required"
            placeholder="Choose a state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="State Selection"
            required
            invalid
            errorMessage="Please select a valid state to continue"
            name="validation"
            placeholder="Choose a state..."
          />
        </div>
      </div>

      {/* Label Positioning */}
      <div className="mbe4">
        <h2>Label Positioning</h2>
        <p className="mbs2 mbe3">
          Control label position with <code>labelPosition</code>: 'top' (default), 'start', 'end', or 'bottom'.
          <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label when opened.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "600px" }}>
        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Top Label (Default)"
            labelPosition="top"
            name="pos-top"
            placeholder="Choose a state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Start Position"
            labelPosition="start"
            name="pos-start"
            placeholder="Choose a state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="End Position"
            labelPosition="end"
            name="pos-end"
            placeholder="Choose a state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Bottom Position (Not Recommended)"
            labelPosition="bottom"
            name="pos-bottom"
            helpText="The dropdown will cover this label when opened"
            placeholder="Choose a state..."
          />
        </div>
      </div>
    </section>
  );
}
