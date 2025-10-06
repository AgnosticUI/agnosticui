import { describe, it, expect } from "vitest";
import { render, waitFor } from "@testing-library/react";
import React from "react";
import { ReactDrawer } from "./ReactDrawer";

describe("ReactDrawer Wrapper", () => {
  it("should render without errors", async () => {
    render(<ReactDrawer open={false}>Test Drawer</ReactDrawer>);
    await waitFor(() => {
      const drawer = document.querySelector("ag-drawer");
      expect(drawer).toBeInTheDocument();
    });
  });

  it("should render children content", async () => {
    render(<ReactDrawer open={true}>Content</ReactDrawer>);
    await waitFor(() => {
      const drawer = document.querySelector("ag-drawer");
      expect(drawer).toHaveTextContent("Content");
    });
  });

  it("should pass open prop to web component", async () => {
    const { rerender } = render(<ReactDrawer open={false}>Drawer</ReactDrawer>);
    await waitFor(() => {
      const drawer = document.querySelector("ag-drawer") as HTMLElement & {
        open: boolean;
      };
      expect(drawer.open).toBe(false);
    });

    rerender(<ReactDrawer open={true}>Drawer</ReactDrawer>);
    await waitFor(() => {
      const drawer = document.querySelector("ag-drawer") as HTMLElement & {
        open: boolean;
      };
      expect(drawer.open).toBe(true);
    });
  });

  it("should pass heading prop to web component", async () => {
    render(
      <ReactDrawer open={true} heading="My Drawer">
        Drawer
      </ReactDrawer>
    );
    await waitFor(() => {
      const drawer = document.querySelector("ag-drawer") as HTMLElement & {
        heading: string;
      };
      expect(drawer.heading).toBe("My Drawer");
    });
  });

  it("should pass position prop to web component", async () => {
    render(
      <ReactDrawer open={true} position="start">
        Drawer
      </ReactDrawer>
    );
    await waitFor(() => {
      const drawer = document.querySelector("ag-drawer");
      expect(drawer).toHaveAttribute("position", "start");
    });
  });
});
