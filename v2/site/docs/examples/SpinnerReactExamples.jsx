import { ReactSpinner } from "agnosticui-core/spinner/react";

export default function SpinnerReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Default</h2>
        <ReactSpinner />
      </div>
      <div className="mbe4">
        <h2>Sizes</h2>
        <div
          className="flex flex-col items-center"
          style={{ gap: '24px' }}
        >
          <ReactSpinner size="small" />
          <ReactSpinner />
          <ReactSpinner size="large" />
          <ReactSpinner size="xlarge" />
        </div>
      </div>
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the spinner's appearance.
        </p>
        <ReactSpinner className="custom-spinner" />
      </div>
    </section>
  );
}
