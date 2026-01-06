import { ReactLoader } from "agnosticui-core/loader/react";

export default function LoaderReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Default</h2>
        <ReactLoader />
      </div>
      <div className="mbe4">
        <h2>Sizes</h2>
        <div className="flex flex-col items-center" style={{ gap: "24px" }}>
          <ReactLoader size="small" />
          <ReactLoader />
          <ReactLoader size="large" />
        </div>
      </div>
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the loader's appearance.
        </p>
        <ReactLoader className="custom-loader" />
      </div>
    </section>
  );
}
