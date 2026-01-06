import { ReactLink } from "agnosticui-core/link/react";

export default function LinkReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Basic Links</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link">Home</ReactLink>
          <ReactLink href="#link">About</ReactLink>
          <ReactLink href="#link">Contact</ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Variant Links</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" variant="primary">Primary Link</ReactLink>
          <ReactLink href="#link" variant="success">Success Link</ReactLink>
          <ReactLink href="#link" variant="warning">Warning Link</ReactLink>
          <ReactLink href="#link" variant="danger">Danger Link</ReactLink>
          <ReactLink href="#link" variant="monochrome">Monochrome Link</ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Button-Style Links</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" isButton={true}>Default Button</ReactLink>
          <ReactLink href="#link" isButton={true} variant="primary">Primary Button</ReactLink>
          <ReactLink href="#link" isButton={true} variant="success">Success Button</ReactLink>
          <ReactLink href="#link" isButton={true} variant="warning">Warning Button</ReactLink>
          <ReactLink href="#link" isButton={true} variant="danger">Danger Button</ReactLink>
          <ReactLink href="#link" isButton={true} variant="monochrome">Monochrome Button</ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Button Sizes</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" isButton={true} buttonSize="x-sm" variant="primary">
            Extra Small
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="sm" variant="primary">
            Small
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="md" variant="primary">
            Medium
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="lg" variant="primary">
            Large
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="xl" variant="primary">
            Extra Large
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Button Shapes</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" isButton={true} variant="primary">
            Default
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonShape="rounded" variant="primary">
            Rounded
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonShape="capsule" variant="primary">
            Capsule
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonShape="circle" variant="primary" ariaLabel="Add">
            +
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonShape="square" variant="primary" ariaLabel="Menu">
            ■
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonShape="rounded-square" variant="primary" ariaLabel="Settings">
            ▢
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Bordered Buttons</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" isButton={true} buttonBordered={true} variant="primary">
            Primary Outlined
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonBordered={true} variant="success">
            Success Outlined
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonBordered={true} variant="warning">
            Warning Outlined
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonBordered={true} variant="danger">
            Danger Outlined
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonBordered={true} variant="monochrome">
            Monochrome Outlined
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Complex Button Combinations</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" isButton={true} buttonSize="lg" buttonShape="capsule" variant="primary">
            Large Capsule Button
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="lg" buttonShape="capsule" buttonBordered={true} variant="success">
            Large Capsule Outlined
          </ReactLink>
          <ReactLink href="#link" isButton={true} buttonSize="sm" buttonShape="rounded" buttonBordered={true} variant="warning">
            Small Rounded Outlined
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>External Link</h2>
        <div className="stacked-mobile">
          <ReactLink href="https://github.com" external={true}>
            External Link →
          </ReactLink>
          <ReactLink href="https://github.com" external={true} isButton={true} variant="primary">
            External Button →
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Disabled Links</h2>
        <div className="stacked-mobile">
          <ReactLink href="#link" disabled={true}>
            Disabled Link
          </ReactLink>
          <ReactLink href="#link" disabled={true} isButton={true}>
            Disabled Button
          </ReactLink>
          <ReactLink href="#link" disabled={true} isButton={true} variant="success">
            Disabled Success Button
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Accessible Icon Links</h2>
        <div className="stacked-mobile">
          <ReactLink href="#download" ariaLabel="Download PDF report">
            📄
          </ReactLink>
          <ReactLink href="#settings" isButton={true} buttonShape="circle" variant="primary" ariaLabel="Settings">
            ⚙️
          </ReactLink>
          <ReactLink href="#add" isButton={true} buttonShape="circle" variant="success" ariaLabel="Add new item">
            +
          </ReactLink>
          <ReactLink href="#delete" isButton={true} buttonShape="circle" variant="danger" ariaLabel="Delete">
            ×
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Call-to-Action Pattern</h2>
        <div className="stacked-mobile">
          <ReactLink href="#signup" isButton={true} buttonSize="lg" buttonShape="capsule" variant="primary">
            Get Started Free
          </ReactLink>
          <ReactLink href="#learn-more" isButton={true} buttonSize="lg" buttonShape="capsule" buttonBordered={true} variant="primary">
            Learn More
          </ReactLink>
        </div>
      </div>

      <div className="mbe4">
        <h2>Action Bar Pattern</h2>
        <div className="stacked-mobile">
          <ReactLink href="#edit" isButton={true} buttonSize="sm" variant="primary">
            Edit
          </ReactLink>
          <ReactLink href="#duplicate" isButton={true} buttonSize="sm" buttonBordered={true}>
            Duplicate
          </ReactLink>
          <ReactLink href="#delete" isButton={true} buttonSize="sm" variant="danger">
            Delete
          </ReactLink>
        </div>
      </div>
    </section>
  );
}
