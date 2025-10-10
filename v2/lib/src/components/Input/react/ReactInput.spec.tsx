import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import React from "react";
import { ReactInput } from "./ReactInput";
// import { AgInput } from "../core/_Input";

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
  });

  describe("Props Pass-Through", () => {
    it("should pass ARIA attributes to web component", async () => {
      render(
        <ReactInput
          label="Input"
          aria-label="Custom input label"
          labelled-by="custom-label-id"
        />
      );

      await waitFor(() => {
        const input = document.querySelector("ag-input") as HTMLElement;
        expect(input.getAttribute("aria-label")).toBe("Custom input label");
        expect(input.getAttribute("labelled-by")).toBe("custom-label-id");
      });
    });
  });
});
