import {
  ReactFlexRow,
  ReactFlexCol,
  ReactFlexInline,
  ReactStack,
  ReactGroup,
} from "agnosticui-core/flex/react";

const FlexReactExamples = () => {
  return (
    <section>
      {/* Basic Row Layouts */}
      <div className="mbe4">
        <h2>Basic Row Layout</h2>
        <p className="mbs2">Items arranged horizontally with default flex-start alignment.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow style={{ "--flex-gap": "1rem" }}>
          <div className="demo-box">Item 1</div>
          <div className="demo-box">Item 2</div>
          <div className="demo-box">Item 3</div>
        </ReactFlexRow>
      </div>

      {/* Centered */}
      <div className="mbe4">
        <h2>Centered Content</h2>
        <p className="mbs2">Items centered on both axes.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow
          style={{
            "--flex-gap": "1rem",
            minHeight: "150px",
            background: "var(--ag-background-secondary)",
            borderRadius: "3px",
          }}
          justify="center"
          align="center"
        >
          <div className="demo-box">Centered 1</div>
          <div className="demo-box">Centered 2</div>
        </ReactFlexRow>
      </div>

      {/* Space Between */}
      <div className="mbe4">
        <h2>Space Between</h2>
        <p className="mbs2">Items distributed with space between them.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow justify="space-between">
          <div className="demo-box">Start</div>
          <div className="demo-box">Middle</div>
          <div className="demo-box">End</div>
        </ReactFlexRow>
      </div>

      {/* Space Around */}
      <div className="mbe4">
        <h2>Space Around</h2>
        <p className="mbs2">Items with equal space around them.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow justify="space-around">
          <div className="demo-box">Item 1</div>
          <div className="demo-box">Item 2</div>
          <div className="demo-box">Item 3</div>
        </ReactFlexRow>
      </div>

      {/* Space Evenly */}
      <div className="mbe4">
        <h2>Space Evenly</h2>
        <p className="mbs2">Items with equal space between and around them.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow justify="space-evenly">
          <div className="demo-box">Item 1</div>
          <div className="demo-box">Item 2</div>
          <div className="demo-box">Item 3</div>
        </ReactFlexRow>
      </div>

      {/* Stretch Children */}
      <div className="mbe4">
        <h2>Equal Width Children</h2>
        <p className="mbs2">
          Using <code>stretch-children</code> to make all items equal width.
        </p>
      </div>
      <div className="mbe4">
        <ReactFlexRow style={{ "--flex-gap": "1rem" }} stretchChildren={true}>
          <div className="demo-box">Short</div>
          <div className="demo-box">Medium length</div>
          <div className="demo-box">Longer content here</div>
        </ReactFlexRow>
      </div>

      {/* Column Layout */}
      <div className="mbe4">
        <h2>Column Layout</h2>
        <p className="mbs2">Items stacked vertically using FlexCol.</p>
      </div>
      <div className="mbe4">
        <ReactFlexCol style={{ "--flex-gap": "1rem" }}>
          <div className="demo-box">Row 1</div>
          <div className="demo-box">Row 2</div>
          <div className="demo-box">Row 3</div>
        </ReactFlexCol>
      </div>

      {/* Wrap */}
      <div className="mbe4">
        <h2>Wrapping Layout</h2>
        <p className="mbs2">Items wrap to the next line when needed.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow style={{ "--flex-gap": "1rem", maxWidth: "600px" }} wrap="wrap">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="demo-box" style={{ minWidth: "120px" }}>
              Item {i + 1}
            </div>
          ))}
        </ReactFlexRow>
      </div>

      {/* Reverse */}
      <div className="mbe4">
        <h2>Reverse Direction</h2>
        <p className="mbs2">Reverse the order of items.</p>
      </div>
      <div className="mbe4">
        <ReactFlexRow style={{ "--flex-gap": "1rem" }} reverse={true}>
          <div className="demo-box">First (1)</div>
          <div className="demo-box">Second (2)</div>
          <div className="demo-box">Third (3)</div>
        </ReactFlexRow>
      </div>

      {/* Align Items */}
      <div className="mbe4">
        <h2>Align Items (Cross Axis)</h2>
        <p className="mbs2">Different vertical alignments for items of varying heights.</p>
      </div>
      <div className="mbe4">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <p className="mbe2">
              <strong>align="flex-start"</strong>
            </p>
            <ReactFlexRow
              style={{
                "--flex-gap": "1rem",
                minHeight: "120px",
                background: "var(--ag-background-secondary)",
                borderRadius: "3px",
              }}
              align="flex-start"
            >
              <div className="demo-box">Item 1</div>
              <div className="demo-box" style={{ padding: "2rem 1rem" }}>
                Tall Item 2
              </div>
              <div className="demo-box">Item 3</div>
            </ReactFlexRow>
          </div>
          <div>
            <p className="mbe2">
              <strong>align="center"</strong>
            </p>
            <ReactFlexRow
              style={{
                "--flex-gap": "1rem",
                minHeight: "120px",
                background: "var(--ag-background-secondary)",
                borderRadius: "3px",
              }}
              align="center"
            >
              <div className="demo-box">Item 1</div>
              <div className="demo-box" style={{ padding: "2rem 1rem" }}>
                Tall Item 2
              </div>
              <div className="demo-box">Item 3</div>
            </ReactFlexRow>
          </div>
          <div>
            <p className="mbe2">
              <strong>align="flex-end"</strong>
            </p>
            <ReactFlexRow
              style={{
                "--flex-gap": "1rem",
                minHeight: "120px",
                background: "var(--ag-background-secondary)",
                borderRadius: "3px",
              }}
              align="flex-end"
            >
              <div className="demo-box">Item 1</div>
              <div className="demo-box" style={{ padding: "2rem 1rem" }}>
                Tall Item 2
              </div>
              <div className="demo-box">Item 3</div>
            </ReactFlexRow>
          </div>
        </div>
      </div>

      {/* Nested Layouts */}
      <div className="mbe4">
        <h2>Nested Flex Containers</h2>
        <p className="mbs2">Combine flex containers to create complex layouts.</p>
      </div>
      <div className="mbe4">
        <ReactFlexCol
          style={{
            "--flex-gap": "1rem",
            padding: "1rem",
            background: "var(--ag-background-secondary)",
            borderRadius: "3px",
          }}
        >
          <ReactFlexRow justify="space-between">
            <div className="demo-box demo-box-primary">Header Left</div>
            <div className="demo-box demo-box-primary">Header Right</div>
          </ReactFlexRow>

          <ReactFlexRow style={{ "--flex-gap": "1rem" }}>
            <ReactFlexCol style={{ "--flex-gap": "0.5rem", flex: "1" }}>
              <div className="demo-box demo-box-secondary">Sidebar Item 1</div>
              <div className="demo-box demo-box-secondary">Sidebar Item 2</div>
              <div className="demo-box demo-box-secondary">Sidebar Item 3</div>
            </ReactFlexCol>

            <div className="demo-box" style={{ flex: "2", padding: "2rem" }}>
              Main Content Area
            </div>
          </ReactFlexRow>

          <ReactFlexRow justify="center">
            <div className="demo-box demo-box-primary full-width">Footer</div>
          </ReactFlexRow>
        </ReactFlexCol>
      </div>

      {/* Stack and Group Aliases */}
      <div className="mbe4">
        <h2>Stack and Group (Aliases)</h2>
        <p className="mbs2">Convenient aliases familiar to Mantine and Chakra UI users.</p>
      </div>
      <div className="mbe4">
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ flex: "1" }}>
            <p className="mbe2">
              <strong>Stack (FlexCol alias)</strong>
            </p>
            <ReactStack style={{ "--flex-gap": "1rem" }}>
              <div className="demo-box">Stacked 1</div>
              <div className="demo-box">Stacked 2</div>
              <div className="demo-box">Stacked 3</div>
            </ReactStack>
          </div>
          <div style={{ flex: "1" }}>
            <p className="mbe2">
              <strong>Group (FlexRow alias)</strong>
            </p>
            <ReactGroup style={{ "--flex-gap": "0.5rem" }}>
              <button className="demo-button mie1">Action 1</button>
              <button className="demo-button mie1">Action 2</button>
              <button className="demo-button">Action 3</button>
            </ReactGroup>
          </div>
        </div>
      </div>

      {/* Inline Flex */}
      <div className="mbe4">
        <h2>Inline Flex</h2>
        <p className="mbs2">Inline flex containers that only take up as much width as needed.</p>
      </div>
      <div className="mbe4">
        <p className="mbe2">Multiple inline flex containers on the same line:</p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <ReactFlexInline
            style={{
              "--flex-gap": "0.5rem",
              background: "var(--ag-background-secondary)",
              padding: "0.5rem",
              borderRadius: "3px",
            }}
          >
            <span className="demo-tag">Tag 1</span>
            <span className="demo-tag">Tag 2</span>
          </ReactFlexInline>
          <ReactFlexInline
            style={{
              "--flex-gap": "0.5rem",
              background: "var(--ag-background-secondary)",
              padding: "0.5rem",
              borderRadius: "3px",
            }}
          >
            <span className="demo-tag">Tag 3</span>
            <span className="demo-tag">Tag 4</span>
          </ReactFlexInline>
          <ReactFlexInline
            style={{
              "--flex-gap": "0.5rem",
              background: "var(--ag-background-secondary)",
              padding: "0.5rem",
              borderRadius: "3px",
            }}
          >
            <span className="demo-tag">Tag 5</span>
            <span className="demo-tag">Tag 6</span>
          </ReactFlexInline>
        </div>
      </div>

      {/* Responsive Layouts */}
      <div className="mbe4">
        <h2>Responsive Layouts</h2>
        <p className="mbs2">
          Example using <code>.responsive-direction</code> CSS class to control{" "}
          <code>--flex-direction</code> via media queries.{" "}
          <strong>Resize your browser to see the effect!</strong>
        </p>
      </div>
      <div className="mbe4">
        <ReactFlexRow className="responsive-direction">
          <div className="demo-box">Item 1</div>
          <div className="demo-box">Item 2</div>
          <div className="demo-box">Item 3</div>
        </ReactFlexRow>
      </div>

      <div className="mbe4">
        <h2>Responsive Gap</h2>
        <p className="mbs2">
          Example using <code>.responsive-gap</code> CSS class to control{" "}
          <code>--flex-gap</code> at different viewport widths.
        </p>
      </div>
      <div className="mbe4">
        <ReactFlexRow className="responsive-gap">
          <div className="demo-box">Item 1</div>
          <div className="demo-box">Item 2</div>
          <div className="demo-box">Item 3</div>
        </ReactFlexRow>
      </div>

      <div className="mbe4">
        <h2>Responsive Justify</h2>
        <p className="mbs2">
          Example using <code>.responsive-justify</code> CSS class to control{" "}
          <code>--flex-justify</code> via media queries.
        </p>
      </div>
      <div className="mbe4">
        <ReactFlexRow className="responsive-justify">
          <div className="demo-box">Start</div>
          <div className="demo-box">Middle</div>
          <div className="demo-box">End</div>
        </ReactFlexRow>
      </div>

      <div className="mbe4">
        <h2>Responsive Card Grid</h2>
        <p className="mbs2">
          Example using <code>.responsive-cards</code> CSS class to create a responsive card grid
          with consumer-defined breakpoints.
        </p>
      </div>
      <div className="mbe4">
        <ReactFlexRow className="responsive-cards">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="demo-box card-item">
              Card {i + 1}
            </div>
          ))}
        </ReactFlexRow>
      </div>

      <style>{`
        /* Clean demo boxes inspired by the flexbox patterns site */
        .demo-box {
          padding: 1rem;
          margin-inline-end: var(--ag-space-2);
          margin-block-end: var(--ag-space-2);
          background: var(--ag-blue-100);
          border: 1px solid var(--ag-blue-300);
          border-radius: 3px;
          text-align: center;
          font-size: 0.875rem;
          color: var(--ag-neutral-900);
        }

        .demo-box-primary {
          background: var(--ag-blue-100);
          border-color: var(--ag-blue-300);
          color: var(--ag-neutral-900);
        }

        .demo-box-secondary {
          background: var(--ag-purple-100);
          border-color: var(--ag-purple-300);
          color: var(--ag-neutral-900);
        }

        .demo-tag {
          padding: 0.25rem 0.75rem;
          background: var(--ag-background-primary);
          border: 1px solid var(--ag-border);
          border-radius: 3px;
          font-size: 0.875rem;
          color: var(--ag-text-primary);
        }

        .demo-button {
          padding: 0.5rem 1rem;
          background: var(--ag-primary);
          color: var(--ag-white);
          border: none;
          border-radius: 3px;
          font-size: 0.875rem;
          cursor: pointer;
        }

        .demo-button:hover {
          background: var(--ag-primary-dark);
        }

        .full-width {
          width: 100%;
        }

        /* Responsive layouts using CSS custom properties - no !important needed! */
        .responsive-direction {
          --flex-direction: column;
          --flex-gap: 1rem;
        }

        .responsive-direction .demo-box {
          margin-block-end: var(--ag-space-2);
        }

        @media (min-width: 769px) {
          .responsive-direction {
            --flex-direction: row;
          }
          .responsive-direction .demo-box {
            margin-inline-end: var(--ag-space-3);
            padding-inline: var(--ag-space-8);
            white-space: nowrap;
          }
        }

        .responsive-gap {
          --flex-gap: 0.5rem;
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .responsive-gap {
            --flex-gap: 1rem;
          }
        }

        @media (min-width: 769px) {
          .responsive-gap {
            --flex-gap: 2rem;
          }
        }

        .responsive-justify {
          --flex-gap: 1rem;
          --flex-justify: center;
        }

        @media (min-width: 769px) {
          .responsive-justify {
            --flex-justify: space-between;
          }
        }

        .responsive-cards {
          --flex-direction: column;
          --flex-gap: 1rem;
        }

        @media (min-width: 769px) {
          .responsive-cards {
            --flex-direction: row;
            --flex-wrap: wrap;
            --flex-gap: 1.5rem;
          }
        }

        .card-item {
          flex: 1 1 calc(33.333% - 1rem);
          min-width: 200px;
        }
      `}</style>
    </section>
  );
};

export default FlexReactExamples;
