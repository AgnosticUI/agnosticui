import { ReactProgress } from "agnosticui-core/progress/react";

export default function ProgressReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Indeterminate Progress</h2>
        <p className="mbs2 mbe3">
          When no <code>value</code> is provided, the progress bar is indeterminate.
        </p>
        <ReactProgress label="Loading..." />
      </div>
      <div className="mbe4">
        <h2>Progress with Value</h2>
        <p className="mbs2 mbe3">
          Set the <code>value</code> prop to a number to show progress.
        </p>
        <ReactProgress value={50} label="50% complete" />
      </div>
      <div className="mbe4">
        <h2>Progress with Custom Max</h2>
        <p className="mbs2 mbe3">
          Set the <code>max</code> prop to a number to define the maximum value.
        </p>
        <ReactProgress value={150} max={200} label="150 of 200" />
      </div>
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
        <ReactProgress
          value={75}
          label="Customized progress"
          className="custom-progress"
        />
      </div>
    </section>
  );
}
