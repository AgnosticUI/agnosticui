import { useState } from "react";
import { ReactButton } from "agnosticui-core/button/react";
import { ReactIcon } from "agnosticui-core/icon/react";
import { ReactVisuallyHidden } from "agnosticui-core/visually-hidden/react";

export default function ButtonReactExamples() {
  const [isPressed, setIsPressed] = useState(false);

  const handleToggle = (event) => {
    setIsPressed(event.detail.pressed);
    console.log("Button toggled:", event.detail.pressed);
  };

  return (
    <section>
      {/* Default */}
      <div className="mbe4">
        <ReactButton className="mie2" title="Default">
          Default
        </ReactButton>
      </div>

      {/* Rounded Variants */}
      <div className="mbe2">
        <h2>Rounded Variants</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton shape="rounded" title="Default">
          Default
        </ReactButton>
        <ReactButton shape="rounded" variant="primary" title="Primary">
          Primary
        </ReactButton>
        <ReactButton shape="rounded" variant="secondary" title="Secondary">
          Secondary
        </ReactButton>
        <ReactButton shape="rounded" variant="success" title="Success">
          Success
        </ReactButton>
        <ReactButton shape="rounded" variant="warning" title="Warning">
          Warning
        </ReactButton>
        <ReactButton shape="rounded" variant="danger" title="Danger">
          Danger
        </ReactButton>
        <ReactButton shape="rounded" variant="monochrome" title="Monochrome">
          Monochrome
        </ReactButton>
      </div>

      {/* Shapes */}
      <div className="mbe2">
        <h2>Shapes</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton
          shape="rounded"
          variant="primary"
          bordered
          title="Rounded Button"
        >
          Rounded
        </ReactButton>
        <ReactButton
          shape="capsule"
          variant="success"
          bordered
          title="Capsule Button"
        >
          Capsule
        </ReactButton>
        <ReactButton shape="circle" bordered title="Circle Button">
          C
        </ReactButton>
        <ReactButton
          shape="square"
          variant="secondary"
          bordered
          title="Square Button"
        >
          S
        </ReactButton>
        <ReactButton
          shape="rounded-square"
          bordered
          variant="danger"
          title="Rounded Square Button"
        >
          RS
        </ReactButton>
      </div>

      {/* Bordered */}
      <div className="mbe2">
        <h2>Bordered</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton bordered shape="rounded" title="Default">
          Default
        </ReactButton>
        <ReactButton bordered shape="rounded" variant="primary" title="Primary">
          Primary
        </ReactButton>
        <ReactButton
          bordered
          shape="rounded"
          variant="secondary"
          title="Secondary"
        >
          Secondary
        </ReactButton>
        <ReactButton bordered shape="rounded" variant="success" title="Success">
          Success
        </ReactButton>
        <ReactButton bordered shape="rounded" variant="warning" title="Warning">
          Warning
        </ReactButton>
        <ReactButton bordered shape="rounded" variant="danger" title="Danger">
          Danger
        </ReactButton>
        <ReactButton
          bordered
          shape="rounded"
          variant="monochrome"
          title="Monochrome"
        >
          Monochrome
        </ReactButton>
      </div>

      {/* Sizes */}
      <div className="mbe2">
        <h2>Sizes</h2>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton size="x-sm" shape="rounded" title="Extra Small">
          Extra Small
        </ReactButton>
        <ReactButton size="sm" shape="rounded" title="Small">
          Small
        </ReactButton>
        <ReactButton size="md" shape="rounded" title="Medium">
          Medium
        </ReactButton>
        <ReactButton size="lg" shape="rounded" title="Large">
          Large
        </ReactButton>
        <ReactButton size="xl" shape="rounded" title="Extra Large">
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton bordered size="x-sm" shape="rounded" title="Extra Small">
          Extra Small
        </ReactButton>
        <ReactButton bordered size="sm" shape="rounded" title="Small">
          Small
        </ReactButton>
        <ReactButton bordered size="md" shape="rounded" title="Medium">
          Medium
        </ReactButton>
        <ReactButton bordered size="lg" shape="rounded" title="Large">
          Large
        </ReactButton>
        <ReactButton bordered size="xl" shape="rounded" title="Extra Large">
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton
          size="x-sm"
          variant="primary"
          shape="rounded"
          title="Extra Small"
        >
          Extra Small
        </ReactButton>
        <ReactButton size="sm" variant="primary" shape="rounded" title="Small">
          Small
        </ReactButton>
        <ReactButton size="md" variant="primary" shape="rounded" title="Medium">
          Medium
        </ReactButton>
        <ReactButton size="lg" variant="primary" shape="rounded" title="Large">
          Large
        </ReactButton>
        <ReactButton
          size="xl"
          variant="primary"
          shape="rounded"
          title="Extra Large"
        >
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton
          size="x-sm"
          variant="primary"
          bordered
          shape="rounded"
          title="Extra Small"
        >
          Extra Small
        </ReactButton>
        <ReactButton
          size="sm"
          variant="primary"
          bordered
          shape="rounded"
          title="Small"
        >
          Small
        </ReactButton>
        <ReactButton
          size="md"
          variant="primary"
          bordered
          shape="rounded"
          title="Medium"
        >
          Medium
        </ReactButton>
        <ReactButton
          size="lg"
          variant="primary"
          bordered
          shape="rounded"
          title="Large"
        >
          Large
        </ReactButton>
        <ReactButton
          size="xl"
          variant="primary"
          bordered
          shape="rounded"
          title="Extra Large"
        >
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton
          size="x-sm"
          variant="success"
          shape="rounded"
          title="Extra Small"
        >
          Extra Small
        </ReactButton>
        <ReactButton size="sm" variant="success" shape="rounded" title="Small">
          Small
        </ReactButton>
        <ReactButton size="md" variant="success" shape="rounded" title="Medium">
          Medium
        </ReactButton>
        <ReactButton size="lg" variant="success" shape="rounded" title="Large">
          Large
        </ReactButton>
        <ReactButton
          size="xl"
          variant="success"
          shape="rounded"
          title="Extra Large"
        >
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton
          size="x-sm"
          variant="success"
          bordered
          shape="rounded"
          title="Extra Small"
        >
          Extra Small
        </ReactButton>
        <ReactButton
          size="sm"
          variant="success"
          bordered
          shape="rounded"
          title="Small"
        >
          Small
        </ReactButton>
        <ReactButton
          size="md"
          variant="success"
          bordered
          shape="rounded"
          title="Medium"
        >
          Medium
        </ReactButton>
        <ReactButton
          size="lg"
          variant="success"
          bordered
          shape="rounded"
          title="Large"
        >
          Large
        </ReactButton>
        <ReactButton
          size="xl"
          variant="success"
          bordered
          shape="rounded"
          title="Extra Large"
        >
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton
          size="x-sm"
          variant="warning"
          shape="rounded"
          title="Extra Small"
        >
          Extra Small
        </ReactButton>
        <ReactButton size="sm" variant="warning" shape="rounded" title="Small">
          Small
        </ReactButton>
        <ReactButton size="md" variant="warning" shape="rounded" title="Medium">
          Medium
        </ReactButton>
        <ReactButton size="lg" variant="warning" shape="rounded" title="Large">
          Large
        </ReactButton>
        <ReactButton
          size="xl"
          variant="warning"
          shape="rounded"
          title="Extra Large"
        >
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton
          size="x-sm"
          variant="warning"
          bordered
          shape="rounded"
          title="Extra Small"
        >
          Extra Small
        </ReactButton>
        <ReactButton
          size="sm"
          variant="warning"
          bordered
          shape="rounded"
          title="Small"
        >
          Small
        </ReactButton>
        <ReactButton
          size="md"
          variant="warning"
          bordered
          shape="rounded"
          title="Medium"
        >
          Medium
        </ReactButton>
        <ReactButton
          size="lg"
          variant="warning"
          bordered
          shape="rounded"
          title="Large"
        >
          Large
        </ReactButton>
        <ReactButton
          size="xl"
          variant="warning"
          bordered
          shape="rounded"
          title="Extra Large"
        >
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton
          size="x-sm"
          variant="danger"
          shape="rounded"
          title="Extra Small"
        >
          Extra Small
        </ReactButton>
        <ReactButton size="sm" variant="danger" shape="rounded" title="Small">
          Small
        </ReactButton>
        <ReactButton size="md" variant="danger" shape="rounded" title="Medium">
          Medium
        </ReactButton>
        <ReactButton size="lg" variant="danger" shape="rounded" title="Large">
          Large
        </ReactButton>
        <ReactButton
          size="xl"
          variant="danger"
          shape="rounded"
          title="Extra Large"
        >
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton
          size="x-sm"
          bordered
          variant="danger"
          shape="rounded"
          title="Extra Small"
        >
          Extra Small
        </ReactButton>
        <ReactButton
          size="sm"
          bordered
          variant="danger"
          shape="rounded"
          title="Small"
        >
          Small
        </ReactButton>
        <ReactButton
          size="md"
          bordered
          variant="danger"
          shape="rounded"
          title="Medium"
        >
          Medium
        </ReactButton>
        <ReactButton
          size="lg"
          bordered
          variant="danger"
          shape="rounded"
          title="Large"
        >
          Large
        </ReactButton>
        <ReactButton
          size="xl"
          bordered
          variant="danger"
          shape="rounded"
          title="Extra Large"
        >
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton
          size="x-sm"
          variant="monochrome"
          shape="rounded"
          title="Extra Small"
        >
          Extra Small
        </ReactButton>
        <ReactButton
          size="sm"
          variant="monochrome"
          shape="rounded"
          title="Small"
        >
          Small
        </ReactButton>
        <ReactButton
          size="md"
          variant="monochrome"
          shape="rounded"
          title="Medium"
        >
          Medium
        </ReactButton>
        <ReactButton
          size="lg"
          variant="monochrome"
          shape="rounded"
          title="Large"
        >
          Large
        </ReactButton>
        <ReactButton
          size="xl"
          variant="monochrome"
          shape="rounded"
          title="Extra Large"
        >
          Extra Large
        </ReactButton>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactButton
          size="x-sm"
          bordered
          variant="monochrome"
          shape="rounded"
          title="Extra Small"
        >
          Extra Small
        </ReactButton>
        <ReactButton
          size="sm"
          bordered
          variant="monochrome"
          shape="rounded"
          title="Small"
        >
          Small
        </ReactButton>
        <ReactButton
          size="md"
          bordered
          variant="monochrome"
          shape="rounded"
          title="Medium"
        >
          Medium
        </ReactButton>
        <ReactButton
          size="lg"
          bordered
          variant="monochrome"
          shape="rounded"
          title="Large"
        >
          Large
        </ReactButton>
        <ReactButton
          size="xl"
          bordered
          variant="monochrome"
          shape="rounded"
          title="Extra Large"
        >
          Extra Large
        </ReactButton>
      </div>

      {/* Icons Small */}
      <div className="mbe2">
        <h2>Icons Small</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <div
          className="flex-inline"
          role="group"
          aria-label="Framework selection"
        >
          <ReactButton
            variant="primary"
            size="sm"
            shape="rounded"
            className="mie2"
            title="Invite Members"
          >
            <ReactIcon size="16" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </ReactIcon>
            <span className="mis1 mie2">Invite Members</span>
          </ReactButton>

          <ReactButton
            variant="primary"
            size="sm"
            shape="rounded"
            bordered
            className="mis1 mie2"
            title="Create New"
          >
            <ReactIcon size="16" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 5v14m-7-7h14" />
              </svg>
            </ReactIcon>
            <span>Create New</span>
          </ReactButton>

          <ReactButton variant="danger" size="sm" shape="rounded" title="Record">
            <ReactIcon size="16" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 1a3 3 0 003 3v8a3 3 0 11-6 0V4a3 3 0 003-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4m-4 0h8" />
              </svg>
            </ReactIcon>
            <span>Record</span>
          </ReactButton>
        </div>
      </div>

      {/* Icons Only */}
      <div className="mbe2">
        <h2>Icons Only</h2>
        <p>
          To create an accessible icon-only button, wrap the icon component with
          a <code>&lt;ReactButton&gt;</code> element and provide an accessible
          label using the <code>ReactVisuallyHidden</code> component.
        </p>
        <p>
          This ensures screen reader users understand the button's action
          without a visible text label. Ensure you also provide a clear{" "}
          <code>title</code> attribute for mouse users who hover over the icon.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <div
          className="flex-inline"
          role="group"
          aria-label="Framework selection"
        >
          <ReactButton
            variant="primary"
            size="sm"
            shape="rounded"
            title="Invite Members"
            className="mie2"
          >
            <ReactIcon size="16" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </ReactIcon>
            <ReactVisuallyHidden>Invite Members</ReactVisuallyHidden>
          </ReactButton>
        </div>
      </div>

      {/* Icons */}
      <div className="mbe2">
        <h2>Icons</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <div
          className="flex-inline"
          role="group"
          aria-label="Framework selection"
        >
          <ReactButton
            variant="primary"
            shape="rounded"
            title="Invite Members"
            className="mie2"
          >
            <ReactIcon size="18" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </ReactIcon>
            <span className="mis1 mie2">Invite Members</span>
          </ReactButton>
          <ReactButton
            variant="primary"
            shape="rounded"
            title="Create new"
            bordered
            className="mis1 mie2"
          >
            <ReactIcon size="18" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 5v14m-7-7h14" />
              </svg>
            </ReactIcon>
            <span>Create New</span>
          </ReactButton>
          <ReactButton variant="danger" title="Record" shape="rounded">
            <ReactIcon size="18" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 1a3 3 0 003 3v8a3 3 0 11-6 0V4a3 3 0 003-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4m-4 0h8" />
              </svg>
            </ReactIcon>
            <span>Record</span>
          </ReactButton>
        </div>
      </div>

      {/* Grouped */}
      <div className="mbe2">
        <h2>Grouped</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <div
          className="flex-inline"
          role="group"
          aria-label="Framework selection"
        >
          <ReactButton grouped title="React" bordered variant="secondary">
            React
          </ReactButton>
          <ReactButton grouped title="Vue" bordered variant="secondary">
            Vue
          </ReactButton>
          <ReactButton grouped title="Svelte" bordered variant="secondary">
            Svelte
          </ReactButton>
          <ReactButton grouped title="Lit" bordered variant="secondary">
            Lit
          </ReactButton>
        </div>
      </div>
      <div className="stacked-mobile mbe4">
        <div
          className="flex-inline"
          role="group"
          aria-label="Framework selection"
        >
          <ReactButton grouped title="React" bordered variant="primary">
            React
          </ReactButton>
          <ReactButton grouped title="Vue" bordered variant="primary">
            Vue
          </ReactButton>
          <ReactButton grouped title="Svelte" bordered variant="primary">
            Svelte
          </ReactButton>
          <ReactButton grouped title="Lit" bordered variant="primary">
            Lit
          </ReactButton>
        </div>
      </div>
      <div className="stacked-mobile mbe4">
        <div
          className="flex-inline"
          role="group"
          aria-label="Framework selection"
        >
          <ReactButton grouped title="React" bordered variant="monochrome">
            React
          </ReactButton>
          <ReactButton grouped title="Vue" bordered variant="monochrome">
            Vue
          </ReactButton>
          <ReactButton grouped title="Svelte" bordered variant="monochrome">
            Svelte
          </ReactButton>
          <ReactButton grouped title="Lit" bordered variant="monochrome">
            Lit
          </ReactButton>
        </div>
      </div>

      {/* Miscellaneous */}
      <div className="mbe2">
        <h2>Miscellaneous</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton ghost title="Ghost button" className="mie2">
          Ghost
        </ReactButton>
        <ReactButton link title="button link" className="mie2">
          Link
        </ReactButton>
        <ReactButton
          type="submit"
          bordered
          title="submit button"
          shape="rounded"
          variant="primary"
          className="mie2"
        >
          Submit
        </ReactButton>
        <ReactButton
          title="toggle button"
          toggle
          pressed={isPressed}
          onToggle={handleToggle}
          className="mie2"
        >
          Toggle
        </ReactButton>
        <ReactButton title="example disabled button" disabled className="mie2">
          Disabled
        </ReactButton>
      </div>

      {/* CSS Parts Customization */}
      <div className="mbe4">
        <h2>CSS Parts Customization</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Customize button appearance using CSS Shadow Parts without breaking
          encapsulation.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton title="Gradient Button" className="custom-gradient-button mie3">
          Gradient Button
        </ReactButton>
      </div>
    </section>
  );
}
