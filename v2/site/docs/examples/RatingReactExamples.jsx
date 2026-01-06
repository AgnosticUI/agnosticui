import { useState } from "react";
import { ReactRating } from "agnosticui-core/rating/react";

export default function RatingReactExamples() {
  const [eventValue, setEventValue] = useState(3);
  const [hoverValue, setHoverValue] = useState(0);
  const [lastEvent, setLastEvent] = useState("");

  const handleRatingChange = (e) => {
    setEventValue(e.detail.newValue);
    setLastEvent(`rating-change: oldValue=${e.detail.oldValue}, newValue=${e.detail.newValue}`);
  };

  const handleRatingHover = (e) => {
    setHoverValue(e.detail.value);
    setLastEvent(`rating-hover: phase=${e.detail.phase}, value=${e.detail.value}`);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Default Rating</h2>
        <p className="mbs2 mbe3">A basic rating component.</p>
        <ReactRating value={3} />
      </div>

      <div className="mbe4">
        <h2>Half Precision</h2>
        <p className="mbs2 mbe3">Allows for half-star ratings.</p>
        <ReactRating value={2.5} precision="half" />
      </div>

      <div className="mbe4">
        <h2>Readonly</h2>
        <p className="mbs2 mbe3">A non-interactive rating display.</p>
        <ReactRating value={4} readonly={true} />
      </div>

      <div className="mbe4">
        <h2>Allow Clear</h2>
        <p className="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
        <ReactRating value={3} allowClear={true} />
      </div>

      <div className="mbe4">
        <h2>Sizes</h2>
        <p className="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
        <div
          className="mbe4"
          style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}
        >
          <ReactRating size="sm" value={3} />
          <ReactRating size="md" value={3} />
          <ReactRating size="lg" value={3} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Variants</h2>
        <p className="mbs2 mbe3">Color variants for different contexts.</p>
        <div
          className="mbe4"
          style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}
        >
          <ReactRating variant="primary" value={3} />
          <ReactRating variant="secondary" value={3} />
          <ReactRating variant="success" value={3} />
          <ReactRating variant="warning" value={3} />
          <ReactRating variant="danger" value={3} />
          <ReactRating variant="monochrome" value={3} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Event Handling</h2>
        <p className="mbs2 mbe3">
          Listen for <code>rating-change</code> and <code>rating-hover</code> events.
        </p>
        <div>
          <ReactRating
            value={eventValue}
            onRatingChange={handleRatingChange}
            onRatingHover={handleRatingHover}
          />
          <div style={{ marginTop: "1rem", fontFamily: "monospace", fontSize: "0.875rem" }}>
            <p>Current Value: {eventValue}</p>
            <p>Hover Value: {hoverValue}</p>
            <p>Last Event: {lastEvent}</p>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Form Control Features</h2>
        <p className="mbs2 mbe3">
          Rating supports labels, helper text, validation, and label positioning for form
          integration.
        </p>
        <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Basic label */}
          <ReactRating label="Product Rating" value={3} />

          {/* With help text */}
          <ReactRating
            label="Service Quality"
            helpText="Rate the quality of service you received"
            value={4}
          />

          {/* Required field */}
          <ReactRating
            label="Overall Experience"
            required={true}
            helpText="This rating is required to submit your feedback"
            value={0}
          />

          {/* With error validation */}
          <ReactRating
            label="Customer Support"
            required={true}
            invalid={true}
            errorMessage="Please provide a rating before submitting"
            value={0}
          />

          {/* Label positioning */}
          <ReactRating label="Start Position" labelPosition="start" value={3} />

          <ReactRating label="End Position" labelPosition="end" value={3} />
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
        <ReactRating value={4} className="custom-rating" />
      </div>
    </section>
  );
}
