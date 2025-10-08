import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import React from "react";
import { ReactInput } from "./ReactInput";
import { AgInput } from "../core/_Input";

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, "log").mockImplementation(() => {});

describe("ReactInput Wrapper", () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = "";
  });

  describe("Basic Rendering", () => {
    it("should render without errors", async () => {
      render(<ReactInput label="Test Input" />);

      await waitFor(() => {
        const input = document.querySelector("ag-input");
        expect(input).toBeInTheDocument();
      });
    });

    it("should render with label", async () => {
      render(<ReactInput label="Username" />);

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input).toBeInTheDocument();
        // Check that the label prop is passed (may be set as property or attribute)
        expect(
          input.getAttribute("label") || (input as AgInput).label === "Username"
        ).toBe(true);
        // Verify label is rendered in shadow DOM
        const label = input.shadowRoot?.querySelector("label");
        expect(label?.textContent?.trim()).toBe("Username");
      });
    });

    it("should render with children content", async () => {
      render(
        <ReactInput label="Input" hasLeftAddon>
          <span slot="addon-left">Icon</span>
        </ReactInput>
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        const leftAddon = input.shadowRoot?.querySelector(
          '.ag-input__addon--left slot[name="addon-left"]'
        );
        expect(leftAddon).toBeTruthy();
        // Check that the slot content is assigned
        const slotContent = input.querySelector('span[slot="addon-left"]');
        expect(slotContent?.textContent).toBe("Icon");
      });
    });
  });

  describe("Props Pass-Through", () => {
    it("should pass type prop to web component", async () => {
      render(<ReactInput label="Email" type="email" />);

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input).toBeInTheDocument();
        expect(
          input.getAttribute("type") || (input as AgInput).type === "email"
        ).toBe(true);
        // Verify the underlying input has the correct type
        const innerInput = input.shadowRoot?.querySelector("input");
        expect(innerInput?.getAttribute("type")).toBe("email");
      });
    });

    it("should pass value prop to web component", async () => {
      render(<ReactInput label="Input" value="test value" />);

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input).toBeInTheDocument();
        expect(
          input.getAttribute("value") || (input as AgInput).value === "test value"
        ).toBe(true);
        // Verify the underlying input has the correct value
        const innerInput = input.shadowRoot?.querySelector("input");
        expect(innerInput?.value).toBe("test value");
      });
    });

    it("should pass placeholder prop to web component", async () => {
      render(<ReactInput label="Input" placeholder="Enter text..." />);

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        const innerInput = input.shadowRoot?.querySelector("input");
        expect(innerInput?.getAttribute("placeholder")).toBe("Enter text...");
      });
    });

    it("should pass size prop to web component", async () => {
      render(<ReactInput label="Input" size="large" />);

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.getAttribute("size")).toBe("large");
        // Verify size class is applied
        const wrapper = input.shadowRoot?.querySelector(".ag-input");
        expect(wrapper?.classList.contains("ag-input--large")).toBe(true);
      });
    });

    it("should pass boolean props to web component", async () => {
      render(
        <ReactInput
          label="Input"
          required
          disabled
          readonly
          invalid
          rounded
          underlined
          capsule
          inline
          hasLeftAddon
          hasRightAddon
          underlinedWithBackground
        />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.hasAttribute("required")).toBe(true);
        expect(input.hasAttribute("disabled")).toBe(true);
        expect(input.hasAttribute("readonly")).toBe(true);
        expect(input.hasAttribute("invalid")).toBe(true);
        expect(input.hasAttribute("rounded")).toBe(true);
        expect(input.hasAttribute("underlined")).toBe(true);
        expect(input.hasAttribute("capsule")).toBe(true);
        expect(input.hasAttribute("inline")).toBe(true);
        expect(input.hasAttribute("has-left-addon")).toBe(true);
        expect(input.hasAttribute("has-right-addon")).toBe(true);
        expect(input.hasAttribute("underlined-with-background")).toBe(true);
      });
    });

    it("should pass ARIA attributes to web component", async () => {
      render(
        <ReactInput
          label="Input"
          ariaLabel="Custom input label"
          labelledBy="custom-label-id"
        />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.getAttribute("aria-label")).toBe("Custom input label");
        expect(input.getAttribute("labelled-by")).toBe("custom-label-id");
      });
    });

    it("should pass error and help text props to web component", async () => {
      render(
        <ReactInput
          label="Input"
          errorMessage="Field is required"
          helpText="Enter your username"
        />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.getAttribute("error-message")).toBe("Field is required");
        expect(input.getAttribute("help-text")).toBe("Enter your username");
        // Verify error and help text in shadow DOM
        const errorDiv = input.shadowRoot?.querySelector(".ag-input__error");
        const helpDiv = input.shadowRoot?.querySelector(".ag-input__help");
        expect(errorDiv?.textContent?.trim()).toBe("Field is required");
        expect(helpDiv?.textContent?.trim()).toBe("Enter your username");
      });
    });

    it("should pass textarea-specific props to web component", async () => {
      render(
        <ReactInput label="Comments" type="textarea" rows={8} cols={60} />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(
          input.getAttribute("type") || (input as AgInput).type === "textarea"
        ).toBe(true);
        expect(input.getAttribute("rows") || (input as AgInput).rows === 8).toBe(
          true
        );
        expect(input.getAttribute("cols") || (input as AgInput).cols === 60).toBe(
          true
        );
        // Verify textarea is rendered
        const textarea = input.shadowRoot?.querySelector("textarea");
        expect(textarea).toBeTruthy();
        expect(textarea?.getAttribute("rows")).toBe("8");
        expect(textarea?.getAttribute("cols")).toBe("60");
      });
    });

    it("should pass className and id props to web component", async () => {
      render(
        <ReactInput label="Input" className="custom-class" id="custom-id" />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.classList.contains("custom-class")).toBe(true);
        expect(input.id).toBe("custom-id");
      });
    });
  });

  describe("Event Handling", () => {
    it("should handle input events with target.value", async () => {
      const handleInput = vi.fn();

      render(
        <ReactInput label="Input" value="initial" onInput={handleInput} />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input).toBeInTheDocument();
      });

      const input = document.querySelector("ag-input") as HTMLElement;
      // Simulate value change
      input.setAttribute("value", "new value");
      const inputEvent = new Event("input", { bubbles: true, composed: true });
      input.dispatchEvent(inputEvent);

      await waitFor(() => {
        expect(handleInput).toHaveBeenCalledTimes(1);
        expect(handleInput).toHaveBeenCalledWith(
          expect.objectContaining({
            type: "input",
            bubbles: true,
            composed: true,
            target: expect.objectContaining({ value: "new value" }),
          })
        );
      });
    });

    it("should handle change events with target.value", async () => {
      const handleChange = vi.fn();

      render(
        <ReactInput label="Input" value="initial" onChange={handleChange} />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input).toBeInTheDocument();
      });

      const input = document.querySelector("ag-input") as HTMLElement;
      // Simulate value change
      input.setAttribute("value", "changed value");
      const changeEvent = new Event("change", {
        bubbles: true,
        composed: true,
      });
      input.dispatchEvent(changeEvent);

      await waitFor(() => {
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(
          expect.objectContaining({
            type: "change",
            bubbles: true,
            composed: true,
            target: expect.objectContaining({ value: "changed value" }),
          })
        );
      });
    });

    it("should handle focus events", async () => {
      const handleFocus = vi.fn();

      render(<ReactInput label="Input" onFocus={handleFocus} />);

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input).toBeInTheDocument();
      });

      const input = document.querySelector("ag-input") as HTMLElement;
      const focusEvent = new Event("focus", { bubbles: true, composed: true });
      input.dispatchEvent(focusEvent);

      await waitFor(() => {
        expect(handleFocus).toHaveBeenCalledTimes(1);
        expect(handleFocus).toHaveBeenCalledWith(
          expect.objectContaining({
            type: "focus",
            bubbles: true,
            composed: true,
          })
        );
      });
    });

    it("should handle blur events", async () => {
      const handleBlur = vi.fn();

      render(<ReactInput label="Input" onBlur={handleBlur} />);

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input).toBeInTheDocument();
      });

      const input = document.querySelector("ag-input") as HTMLElement;
      const blurEvent = new Event("blur", { bubbles: true, composed: true });
      input.dispatchEvent(blurEvent);

      await waitFor(() => {
        expect(handleBlur).toHaveBeenCalledTimes(1);
        expect(handleBlur).toHaveBeenCalledWith(
          expect.objectContaining({
            type: "blur",
            bubbles: true,
            composed: true,
          })
        );
      });
    });
  });

  describe("Label Variants", () => {
    it("should handle hidden label", async () => {
      render(<ReactInput label="Hidden" labelHidden />);

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.hasAttribute("label-hidden")).toBe(true);
        // Verify label is hidden in shadow DOM
        const label = input.shadowRoot?.querySelector("label");
        expect(label?.classList.contains("ag-input__label--hidden")).toBe(true);
      });
    });

    it("should handle no label mode", async () => {
      render(<ReactInput ariaLabel="No visible label" noLabel />);

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.hasAttribute("no-label")).toBe(true);
        // Verify no label is rendered in shadow DOM
        const label = input.shadowRoot?.querySelector("label");
        expect(label).toBeNull();
        // Verify aria-label is applied
        expect(input.getAttribute("aria-label")).toBe("No visible label");
      });
    });

    it("should handle external label via labelledBy", async () => {
      render(
        <>
          <label id="external-label">External Label</label>
          <ReactInput noLabel labelledBy="external-label" />
        </>
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.hasAttribute("no-label")).toBe(true);
        expect(input.getAttribute("labelled-by")).toBe("external-label");
        // Verify aria-labelledby is applied to inner input
        const innerInput = input.shadowRoot?.querySelector("input");
        expect(innerInput?.getAttribute("aria-labelledby")).toBe(
          "external-label"
        );
      });
    });
  });

  describe("Styling Variants", () => {
    it("should handle inline styling", async () => {
      render(<ReactInput label="Inline" inline />);

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.hasAttribute("inline")).toBe(true);
      });
    });

    it("should handle addon states", async () => {
      render(
        <ReactInput label="With Addons" hasLeftAddon hasRightAddon>
          <span slot="addon-left">Left</span>
          <span slot="addon-right">Right</span>
        </ReactInput>
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.hasAttribute("has-left-addon")).toBe(true);
        expect(input.hasAttribute("has-right-addon")).toBe(true);
        // Verify addons in shadow DOM
        const leftAddon = input.shadowRoot?.querySelector(
          ".ag-input__addon--left"
        );
        const rightAddon = input.shadowRoot?.querySelector(
          ".ag-input__addon--right"
        );
        expect(leftAddon).toBeTruthy();
        expect(rightAddon).toBeTruthy();
      });
    });

    it("should handle styling variants", async () => {
      render(
        <ReactInput
          label="Styled"
          capsule
          rounded
          underlined
          underlinedWithBackground
        />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.hasAttribute("capsule")).toBe(true);
        expect(input.hasAttribute("rounded")).toBe(true);
        expect(input.hasAttribute("underlined")).toBe(true);
        expect(input.hasAttribute("underlined-with-background")).toBe(true);
        // Verify classes in shadow DOM
        const wrapper = input.shadowRoot?.querySelector(".ag-input");
        expect(wrapper?.classList.contains("ag-input--rounded")).toBe(true);
        expect(wrapper?.classList.contains("ag-input--underlined")).toBe(true);
        expect(
          wrapper?.classList.contains("ag-input--underlined-with-background")
        ).toBe(true);
      });
    });
  });

  describe("Textarea Mode", () => {
    it("should handle input events for textarea", async () => {
      const handleInput = vi.fn();

      render(
        <ReactInput
          label="Textarea"
          type="textarea"
          value="initial"
          onInput={handleInput}
        />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input).toBeInTheDocument();
        const textarea = input.shadowRoot?.querySelector("textarea");
        expect(textarea).toBeTruthy();
      });

      const input = document.querySelector("ag-input") as HTMLElement;
      input.setAttribute("value", "new textarea value");
      const inputEvent = new Event("input", { bubbles: true, composed: true });
      input.dispatchEvent(inputEvent);

      await waitFor(() => {
        expect(handleInput).toHaveBeenCalledTimes(1);
        expect(handleInput).toHaveBeenCalledWith(
          expect.objectContaining({
            type: "input",
            bubbles: true,
            composed: true,
            target: expect.objectContaining({ value: "new textarea value" }),
          })
        );
      });
    });

    it("should handle change events for textarea", async () => {
      const handleChange = vi.fn();

      render(
        <ReactInput
          label="Textarea"
          type="textarea"
          value="initial"
          onChange={handleChange}
        />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input).toBeInTheDocument();
        const textarea = input.shadowRoot?.querySelector("textarea");
        expect(textarea).toBeTruthy();
      });

      const input = document.querySelector("ag-input") as HTMLElement;
      input.setAttribute("value", "changed textarea value");
      const changeEvent = new Event("change", {
        bubbles: true,
        composed: true,
      });
      input.dispatchEvent(changeEvent);

      await waitFor(() => {
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(
          expect.objectContaining({
            type: "change",
            bubbles: true,
            composed: true,
            target: expect.objectContaining({
              value: "changed textarea value",
            }),
          })
        );
      });
    });
  });
});
