import { useState, useMemo } from "react";
import { ReactInput } from "agnosticui-core/input/react";
import { Globe, DollarSign, Percent, Search, User2 } from "lucide-react";

export default function InputReactExamples() {
  // Basic
  const [basicValue, setBasicValue] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  // Sizes
  const [sizeSmall, setSizeSmall] = useState("");
  const [sizeDefault, setSizeDefault] = useState("");
  const [sizeLarge, setSizeLarge] = useState("");

  // Shapes
  const [shapeDefault, setShapeDefault] = useState("");
  const [shapeRounded, setShapeRounded] = useState("");
  const [shapeCapsule, setShapeCapsule] = useState("");
  const [shapeUnderlined, setShapeUnderlined] = useState("");
  const [shapeUnderlinedBg, setShapeUnderlinedBg] = useState("");

  // States
  const [stateDefault, setStateDefault] = useState("");
  const [stateRequired, setStateRequired] = useState("");
  const [stateDisabled] = useState("Disabled value");
  const [stateReadonly] = useState("Read-only value");
  const [stateInvalid, setStateInvalid] = useState("");

  // Textarea
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaLarge, setTextareaLarge] = useState("");

  // Addons
  const [addonLeft, setAddonLeft] = useState("");
  const [addonRight, setAddonRight] = useState("");
  const [addonBoth, setAddonBoth] = useState("");
  const [addonPercent, setAddonPercent] = useState("");

  // Addons with style variants
  const [addonRounded, setAddonRounded] = useState("");
  const [addonCapsule, setAddonCapsule] = useState("");
  const [addonUnderlined, setAddonUnderlined] = useState("");
  const [addonUnderlinedBg, setAddonUnderlinedBg] = useState("");

  // Custom styles
  const [customGradient, setCustomGradient] = useState("");
  const [customMaterial, setCustomMaterial] = useState("");
  const [customTextarea, setCustomTextarea] = useState("");

  // Label positioning
  const [labelTop, setLabelTop] = useState("");
  const [labelStart, setLabelStart] = useState("");
  const [labelEnd, setLabelEnd] = useState("");
  const [labelBottom, setLabelBottom] = useState("");

  // Interactive event handling
  const [interactiveEmail, setInteractiveEmail] = useState("");
  const [lastInputTime, setLastInputTime] = useState("(none)");
  const [interactiveUsername, setInteractiveUsername] = useState("");
  const [confirmedUsername, setConfirmedUsername] = useState("");
  const [interactiveFocus, setInteractiveFocus] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [focusCount, setFocusCount] = useState(0);
  const [interactiveReactive, setInteractiveReactive] = useState("");
  const [interactiveTextarea, setInteractiveTextarea] = useState("");
  const [textareaStatus, setTextareaStatus] = useState("Ready");

  // Computed word count
  const wordCount = useMemo(() => {
    if (!interactiveTextarea.trim()) return 0;
    return interactiveTextarea.trim().split(/\s+/).length;
  }, [interactiveTextarea]);

  // Event handlers
  const handleInputEvent = (event) => {
    const now = new Date();
    setLastInputTime(now.toLocaleTimeString());
    console.log("Input event:", event);
  };

  const handleChangeEvent = (event) => {
    setConfirmedUsername(interactiveUsername);
    console.log("Change event:", event);
  };

  const handleFocus = (event) => {
    setIsFocused(true);
    setFocusCount((prev) => prev + 1);
    console.log("Focus event:", event);
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    console.log("Blur event:", event);
  };

  const handleTextareaInput = (event) => {
    setTextareaStatus("Typing...");
    console.log("Textarea input event:", event);
  };

  const handleTextareaChange = (event) => {
    setTextareaStatus("Changes saved");
    console.log("Textarea change event:", event);
  };

  const handleTextareaFocus = (event) => {
    setTextareaStatus("Focused");
    console.log("Textarea focus event:", event);
  };

  const handleTextareaBlur = (event) => {
    setTextareaStatus("Ready");
    console.log("Textarea blur event:", event);
  };

  return (
    <section>
      <style>{`
        /* Modern gradient input style */
        .custom-gradient-input::part(ag-input) {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
            linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .custom-gradient-input::part(ag-input):focus {
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          transform: translateY(-1px);
        }

        .custom-gradient-input::part(ag-input-label) {
          font-weight: 700;
          color: var(--ag-text-secondary);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }

        /* Material Design-inspired */
        .custom-material-input::part(ag-input) {
          border: none;
          border-bottom: 2px solid #e5e7eb;
          border-radius: 0;
          padding: 0.5rem 0;
          background: transparent;
          transition: border-color 0.2s ease;
        }

        .custom-material-input::part(ag-input):focus {
          border-bottom-color: #667eea;
          outline: none;
        }

        .custom-material-input::part(ag-input-label) {
          font-size: 0.875rem;
          color: var(--ag-text-secondary);
          margin-bottom: 0.25rem;
        }

        /* Textarea customization */
        .custom-textarea::part(ag-textarea) {
          border: 2px dashed #9ca3af;
          border-radius: 12px;
          background: #f9fafb;
          padding: 1rem;
          font-family: "Monaco", "Courier New", monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          transition: all 0.3s ease;
        }

        .custom-textarea::part(ag-textarea):focus {
          border-style: solid;
          border-color: #667eea;
          background: white;
        }

        .custom-textarea::part(ag-input-label) {
          font-weight: 700;
          color: var(--ag-text-secondary);
        }
      `}</style>

      <div className="mbe4">
        <h2>Basic Input</h2>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={basicValue}
          onChange={(e) => setBasicValue(e.target.value)}
          label="Email"
          type="email"
          placeholder="you@example.com"
          className="mbe2"
        />
        <ReactInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          placeholder="Enter password"
          className="mbe2"
        />
        <ReactInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Search"
          type="search"
          placeholder="Search..."
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>Sizes</h2>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={sizeSmall}
          onChange={(e) => setSizeSmall(e.target.value)}
          label="Small Input"
          size="small"
          placeholder="Small size"
          className="mbe2"
        />
        <ReactInput
          value={sizeDefault}
          onChange={(e) => setSizeDefault(e.target.value)}
          label="Default Input"
          size="default"
          placeholder="Default size"
          className="mbe2"
        />
        <ReactInput
          value={sizeLarge}
          onChange={(e) => setSizeLarge(e.target.value)}
          label="Large Input"
          size="large"
          placeholder="Large size"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>Shape Variants</h2>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={shapeDefault}
          onChange={(e) => setShapeDefault(e.target.value)}
          label="Default (rectangular)"
          placeholder="Default rectangular"
          className="mbe2"
        />
        <ReactInput
          value={shapeRounded}
          onChange={(e) => setShapeRounded(e.target.value)}
          label="Rounded"
          rounded={true}
          placeholder="Rounded corners"
          className="mbe2"
        />
        <ReactInput
          value={shapeCapsule}
          onChange={(e) => setShapeCapsule(e.target.value)}
          label="Capsule"
          capsule={true}
          placeholder="Capsule shape"
          className="mbe2"
        />
        <ReactInput
          value={shapeUnderlined}
          onChange={(e) => setShapeUnderlined(e.target.value)}
          label="Underlined"
          underlined={true}
          placeholder="Underlined only"
          className="mbe2"
        />
        <ReactInput
          value={shapeUnderlinedBg}
          onChange={(e) => setShapeUnderlinedBg(e.target.value)}
          label="Underlined with Background"
          underlinedWithBackground={true}
          placeholder="Underlined with background"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>States</h2>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={stateDefault}
          onChange={(e) => setStateDefault(e.target.value)}
          label="Normal"
          placeholder="Normal state"
          className="mbe2"
        />
        <ReactInput
          value={stateRequired}
          onChange={(e) => setStateRequired(e.target.value)}
          label="Required"
          required={true}
          placeholder="Required field"
          helpText="This field is required"
          className="mbe2"
        />
        <ReactInput
          value={stateDisabled}
          label="Disabled"
          disabled={true}
          placeholder="Disabled input"
          className="mbe2"
        />
        <ReactInput
          value={stateReadonly}
          label="Readonly"
          readonly={true}
          className="mbe2"
        />
        <ReactInput
          value={stateInvalid}
          onChange={(e) => setStateInvalid(e.target.value)}
          label="Invalid"
          invalid={true}
          placeholder="Invalid input"
          errorMessage="This field has an error"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>Textarea</h2>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          label="Comments"
          type="textarea"
          placeholder="Enter your comments..."
          rows={4}
          className="mbe2"
        />
        <ReactInput
          value={textareaLarge}
          onChange={(e) => setTextareaLarge(e.target.value)}
          label="Description"
          type="textarea"
          placeholder="Enter description..."
          rows={6}
          size="large"
          helpText="Provide a detailed description"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>With Addons (Automatic Detection)</h2>
        <p
          style={{
            marginTop: "0.5rem",
            color: "var(--ag-text-secondary)",
            fontSize: "0.875rem",
          }}
        >
          Addons are automatically detected when you provide slot content - no
          props needed!
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={addonLeft}
          onChange={(e) => setAddonLeft(e.target.value)}
          label="Website URL"
          placeholder="example.com"
          className="mbe2"
        >
          <div slot="addon-left">
            <Globe size={18} color="var(--ag-primary)" />
          </div>
        </ReactInput>

        <ReactInput
          value={addonRight}
          onChange={(e) => setAddonRight(e.target.value)}
          label="Price"
          placeholder="0.00"
          className="mbe2"
        >
          <div slot="addon-right">
            <DollarSign size={18} color="var(--ag-success)" />
          </div>
        </ReactInput>

        <ReactInput
          value={addonBoth}
          onChange={(e) => setAddonBoth(e.target.value)}
          label="Amount"
          placeholder="100"
          className="mbe2"
        >
          <div slot="addon-left">
            <DollarSign size={18} color="var(--ag-success)" />
          </div>
          <div slot="addon-right">
            <span>.00</span>
          </div>
        </ReactInput>

        <ReactInput
          value={addonPercent}
          onChange={(e) => setAddonPercent(e.target.value)}
          label="Discount"
          type="number"
          placeholder="10"
          className="mbe2"
        >
          <div slot="addon-right">
            <Percent size={18} />
          </div>
        </ReactInput>
      </div>

      <div className="mbe4">
        <h2>Addons with Style Variants</h2>
        <p
          style={{
            marginTop: "0.5rem",
            color: "var(--ag-text-secondary)",
            fontSize: "0.875rem",
          }}
        >
          Addons work seamlessly with all input styling variants
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={addonRounded}
          onChange={(e) => setAddonRounded(e.target.value)}
          label="Rounded with Addons"
          type="number"
          placeholder="0.00"
          rounded={true}
          className="mbe2"
        >
          <div slot="addon-left">
            <DollarSign size={18} color="var(--ag-primary)" />
          </div>
          <div slot="addon-right">
            <span style={{ fontWeight: 600 }}>USD</span>
          </div>
        </ReactInput>

        <ReactInput
          value={addonCapsule}
          onChange={(e) => setAddonCapsule(e.target.value)}
          label="Capsule with Addon"
          type="search"
          placeholder="Find products..."
          capsule={true}
          className="mbe2"
        >
          <div slot="addon-left">
            <Search size={18} color="var(--ag-secondary)" />
          </div>
        </ReactInput>

        <ReactInput
          value={addonUnderlined}
          onChange={(e) => setAddonUnderlined(e.target.value)}
          label="Underlined with Addon"
          type="number"
          placeholder="10"
          underlined={true}
          className="mbe2"
        >
          <div slot="addon-right">
            <Percent size={18} />
          </div>
        </ReactInput>

        <ReactInput
          value={addonUnderlinedBg}
          onChange={(e) => setAddonUnderlinedBg(e.target.value)}
          label="Underlined with Background"
          type="text"
          placeholder="Enter username"
          underlinedWithBackground={true}
          className="mbe2"
        >
          <div slot="addon-left">
            <User2 size={18} color="var(--ag-secondary)" />
          </div>
        </ReactInput>
      </div>

      <div className="mbe4">
        <h2>Interactive Event Handling</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Demonstrates event handling with onInput, onChange, onFocus, onBlur,
          and controlled value
        </p>
      </div>
      <div className="stacked mbe4">
        {/* Pattern 1: onInput event for real-time tracking */}
        <div>
          <ReactInput
            value={interactiveEmail}
            onChange={(e) => setInteractiveEmail(e.target.value)}
            onInput={handleInputEvent}
            label="Email (onInput event)"
            type="email"
            placeholder="you@example.com"
            className="mbe2"
          />
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--ag-text-secondary)",
            }}
          >
            Character count: <strong>{interactiveEmail.length}</strong> | Last
            input: <strong>{lastInputTime}</strong>
          </p>
        </div>

        {/* Pattern 2: onChange event for completed changes */}
        <div>
          <ReactInput
            value={interactiveUsername}
            onChange={(e) => {
              setInteractiveUsername(e.target.value);
              handleChangeEvent(e);
            }}
            label="Username (onChange event)"
            placeholder="Enter username"
            className="mbe2"
          />
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--ag-text-secondary)",
            }}
          >
            Last confirmed value:{" "}
            <strong>{confirmedUsername || "(none)"}</strong>
          </p>
        </div>

        {/* Pattern 3: Focus and Blur events */}
        <div>
          <ReactInput
            value={interactiveFocus}
            onChange={(e) => setInteractiveFocus(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            label="Focus Tracking (onFocus/onBlur)"
            placeholder="Click to focus"
            className="mbe2"
          />
          <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
            Status:{" "}
            <strong
              style={{
                color: isFocused
                  ? "var(--ag-success)"
                  : "var(--ag-text-secondary)",
              }}
            >
              {isFocused ? "Focused" : "Not focused"}
            </strong>
            {focusCount > 0
              ? ` (focused ${focusCount} time${focusCount > 1 ? "s" : ""})`
              : ""}
          </p>
        </div>

        {/* Pattern 4: Controlled value with reactive updates */}
        <div>
          <ReactInput
            value={interactiveReactive}
            onChange={(e) => setInteractiveReactive(e.target.value)}
            label="Two-way Binding (controlled value)"
            placeholder="Type here..."
            className="mbe2"
          />
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--ag-text-secondary)",
            }}
          >
            Current value: <strong>{interactiveReactive || "(empty)"}</strong>
          </p>
          <button
            onClick={() => setInteractiveReactive("Programmatically set!")}
            style={{
              marginTop: "0.5rem",
              padding: "0.25rem 0.75rem",
              border: "1px solid var(--ag-border)",
              borderRadius: "var(--ag-radius-sm)",
              cursor: "pointer",
            }}
          >
            Set value programmatically
          </button>
        </div>

        {/* Pattern 5: Textarea with all events */}
        <div>
          <ReactInput
            value={interactiveTextarea}
            onChange={(e) => setInteractiveTextarea(e.target.value)}
            onInput={handleTextareaInput}
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
            label="Textarea with Events"
            type="textarea"
            rows={3}
            placeholder="Try typing, then click outside..."
            className="mbe2"
          />
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              padding: "0.5rem",
              background: "var(--ag-background-secondary)",
              borderRadius: "4px",
            }}
          >
            <div>
              Words: <strong>{wordCount}</strong>
            </div>
            <div>
              Characters: <strong>{interactiveTextarea.length}</strong>
            </div>
            <div>
              Status: <strong>{textareaStatus}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Label Positioning</h2>
        <p
          style={{
            marginTop: "0.5rem",
            color: "var(--ag-text-secondary)",
            fontSize: "0.875rem",
          }}
        >
          Control label placement with the <code>labelPosition</code> prop:{" "}
          <code>top</code> (default), <code>start</code>, <code>end</code>, or{" "}
          <code>bottom</code>
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={labelTop}
          onChange={(e) => setLabelTop(e.target.value)}
          label="Top Position (Default)"
          labelPosition="top"
          placeholder="Label above input"
          helpText="Default vertical layout - best for mobile"
          className="mbe2"
        />
        <ReactInput
          value={labelStart}
          onChange={(e) => setLabelStart(e.target.value)}
          label="Name:"
          labelPosition="start"
          placeholder="Enter name"
          helpText="Horizontal layout - label before input"
          className="mbe2"
        />
        <ReactInput
          value={labelEnd}
          onChange={(e) => setLabelEnd(e.target.value)}
          label="Email:"
          labelPosition="end"
          placeholder="you@example.com"
          helpText="Horizontal layout - label after input"
          className="mbe2"
        />
        <ReactInput
          value={labelBottom}
          onChange={(e) => setLabelBottom(e.target.value)}
          label="Bottom Position"
          labelPosition="bottom"
          placeholder="Enter value"
          helpText="Vertical layout - label below input"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p
          style={{
            marginTop: "0.5rem",
            marginBottom: "1rem",
            color: "var(--vp-c-text-2)",
          }}
        >
          Input can be customized using CSS Shadow Parts:{" "}
          <code>::part(ag-input)</code>, <code>::part(ag-textarea)</code>,{" "}
          <code>::part(ag-input-label)</code>,{" "}
          <code>::part(ag-input-error)</code>,{" "}
          <code>::part(ag-input-help)</code>
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactInput
          value={customGradient}
          onChange={(e) => setCustomGradient(e.target.value)}
          className="custom-gradient-input mbe2"
          label="Modern Gradient Border"
          placeholder="you@example.com"
          type="email"
        />

        <ReactInput
          value={customMaterial}
          onChange={(e) => setCustomMaterial(e.target.value)}
          className="custom-material-input mbe2"
          label="Material Design Style"
          placeholder="John Doe"
        />

        <ReactInput
          value={customTextarea}
          onChange={(e) => setCustomTextarea(e.target.value)}
          className="custom-textarea mbe2"
          label="Styled Textarea"
          type="textarea"
          rows={4}
          placeholder="Paste your code here..."
          helpText="Monospace font with dashed border"
        />
      </div>
    </section>
  );
}
