import { ReactTooltip } from "agnosticui-core/tooltip/react";
import { ReactButton } from "agnosticui-core/button/react";
import { Pencil, Trash2, Download, Share2 } from "lucide-react";

export default function TooltipReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Basic Tooltip</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactTooltip content="This is a tooltip">
          <ReactButton>Hover me</ReactButton>
        </ReactTooltip>
        <ReactTooltip content="Tooltips provide helpful context">
          <ReactButton variant="primary">Primary button</ReactButton>
        </ReactTooltip>
        <ReactTooltip content="Additional information here">
          <ReactButton variant="success">Success button</ReactButton>
        </ReactTooltip>
      </div>

      <div className="mbe4">
        <h2>Placement Options</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactTooltip
          content="Tooltip on top"
          placement="top"
        >
          <ReactButton>Top</ReactButton>
        </ReactTooltip>
        <ReactTooltip
          content="Tooltip on bottom"
          placement="bottom"
        >
          <ReactButton>Bottom</ReactButton>
        </ReactTooltip>
        <ReactTooltip
          content="Tooltip on left"
          placement="left"
        >
          <ReactButton>Left</ReactButton>
        </ReactTooltip>
        <ReactTooltip
          content="Tooltip on right"
          placement="right"
        >
          <ReactButton>Right</ReactButton>
        </ReactTooltip>
      </div>

      <div className="mbe4">
        <h2>Trigger Options</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactTooltip
          content="Hover over me"
          trigger="hover"
        >
          <ReactButton>Hover trigger</ReactButton>
        </ReactTooltip>
        <ReactTooltip
          content="Click to toggle"
          trigger="click"
        >
          <ReactButton>Click trigger</ReactButton>
        </ReactTooltip>
        <ReactTooltip
          content="Hover or focus works"
          trigger="hover focus"
        >
          <ReactButton>Hover + Focus</ReactButton>
        </ReactTooltip>
      </div>

      <div className="mbe4">
        <h2>Icon-Only Buttons</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactTooltip content="Edit item">
          <ReactButton aria-label="Edit">
            <Pencil
              color="var(--ag-secondary)"
              size={18}
            />
          </ReactButton>
        </ReactTooltip>
        <ReactTooltip content="Delete item">
          <ReactButton
            variant="danger"
            aria-label="Delete"
          >
            <Trash2
              color="var(--ag-white)"
              size={18}
            />
          </ReactButton>
        </ReactTooltip>
        <ReactTooltip content="Download file">
          <ReactButton
            variant="success"
            aria-label="Download"
          >
            <Download
              color="var(--ag-white)"
              size={18}
            />
          </ReactButton>
        </ReactTooltip>
        <ReactTooltip content="Share content">
          <ReactButton
            variant="secondary"
            aria-label="Share"
          >
            <Share2
              color="var(--ag-neutral-700)"
              size={18}
            />
          </ReactButton>
        </ReactTooltip>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the tooltip's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in this example.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactTooltip
          className="custom-tooltip-gradient"
          content="Customized with CSS Shadow Parts!"
          placement="top"
        >
          <ReactButton variant="primary">Gradient Tooltip</ReactButton>
        </ReactTooltip>
      </div>
    </section>
  );
}
