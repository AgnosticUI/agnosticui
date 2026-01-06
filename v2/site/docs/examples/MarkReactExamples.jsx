import { useState } from "react";
import { ReactMark } from "agnosticui-core/mark/react";
import { ReactInput } from "agnosticui-core/input/react";
import { ReactToggle } from "agnosticui-core/toggle/react";

export default function MarkReactExamples() {
  const [searchTerm, setSearchTerm] = useState("fox");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [matchAll, setMatchAll] = useState(true);

  const handleSearchInput = (event) => {
    setSearchTerm(event.detail.value);
  };

  const handleCaseSensitiveChange = (event) => {
    setCaseSensitive(event.detail.checked);
  };

  const handleMatchAllChange = (event) => {
    setMatchAll(event.detail.checked);
  };

  return (
    <>
      <section className="mbe4">
        <h2>Mark Variants</h2>
        <div className="flex flex-wrap items-center">
          <div className="mis3 mie3">
            <ReactMark variant="warning">warning</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="info">info</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="success">success</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="error">error</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="primary">primary</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="secondary">secondary</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="monochrome">monochrome</ReactMark>
          </div>
        </div>
      </section>
      <section className="mbe4">
        <h2>Reactive Highlighting</h2>
        <div className="flex items-center mbe4">
          <ReactInput
            className="full-width"
            value={searchTerm}
            label="Enter text to highlight"
            type="text"
            onInput={handleSearchInput}
          />
        </div>
        <div className="flex items-center mbe3">
          <ReactToggle
            checked={caseSensitive}
            label="Case sensitive"
            onChange={handleCaseSensitiveChange}
          />
          <span className="mis2">Case sensitive</span>
        </div>
        <div className="flex items-center mbe3">
          <ReactToggle
            checked={matchAll}
            label="Match all"
            onChange={handleMatchAllChange}
          />
          <span className="mis2">Match all</span>
        </div>
        <div className="mbe4">
          <p>
            <ReactMark
              search={searchTerm}
              caseSensitive={caseSensitive}
              matchAll={matchAll}
              variant="warning"
            >
              The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.
            </ReactMark>
          </p>
        </div>
      </section>
    </>
  );
}
