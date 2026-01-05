import { ReactTag } from "agnosticui-core/tag/react";

export default function TagReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Default</h2>
        <p className="mbs2 mbe3">Basic tag with neutral styling.</p>
        <div className="stacked-mobile">
          <ReactTag>
            Default Tag
          </ReactTag>
        </div>
      </div>
      <div className="mbe4">
        <h2>Variants</h2>
        <p className="mbs2 mbe3">Semantic color variants for status indication.</p>
        <div className="stacked">
          <ReactTag
            variant="info"
            className="mbe2"
          >Info Tag</ReactTag>
          <ReactTag
            variant="success"
            className="mbe2"
          >Success Tag</ReactTag>
          <ReactTag
            variant="warning"
            className="mbe2"
          >Warning Tag</ReactTag>
          <ReactTag
            variant="error"
            className="mbe2"
          >Error Tag</ReactTag>
          <ReactTag
            variant="monochrome"
            className="mbe2"
          >Monochrome Tag</ReactTag>
        </div>
      </div>
      <div className="mbe4">
        <h2>Shapes</h2>
        <p className="mbs2 mbe3">Different border-radius options for visual variety.</p>
        <div className="stacked">
          <ReactTag
            shape="pill"
            variant="info"
            className="mbe2"
          >Pill Tag</ReactTag>
          <ReactTag
            shape="round"
            variant="success"
            className="mbe2"
          >Round Tag</ReactTag>
          <ReactTag
            shape="circle"
            variant="error"
            className="mbe2"
          >!</ReactTag>
        </div>
      </div>
      <div className="mbe4">
        <h2>Uppercase Modifier</h2>
        <p className="mbs2 mbe3">Transforms text to uppercase with condensed typography.</p>
        <div className="stacked">
          <ReactTag
            uppercase
            variant="warning"
            className="mbe2"
          >Uppercase Tag</ReactTag>
          <ReactTag
            uppercase
            shape="pill"
            className="mbe2"
          >PILL LABEL</ReactTag>
        </div>
      </div>
      <div className="mbe4">
        <h2>With Close Slot</h2>
        <p className="mbs2 mbe3">Dismissible tags using the named close slot.</p>
        <div className="stacked">
          <ReactTag
            variant="error"
            className="mbe2"
          >
            Deletable
            <button
              slot="close"
              aria-label="close"
            >✕</button>
          </ReactTag>
          <ReactTag
            variant="success"
            shape="pill"
            className="mbe2"
          >
            Active
            <button
              slot="close"
              aria-label="close"
            >✕</button>
          </ReactTag>
          <ReactTag
            variant="warning"
            uppercase
            className="mbe2"
          >
            Pending
            <button
              slot="close"
              aria-label="close"
            >✕</button>
          </ReactTag>
        </div>
      </div>
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">Use CSS Shadow Parts to customize the tag's appearance without breaking encapsulation.</p>
        <div className="mbe4">
          <ReactTag className="custom-outline-tag">Outline Tag</ReactTag>
        </div>
      </div>
    </section>
  );
}
