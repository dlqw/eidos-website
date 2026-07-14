import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axe from "axe-core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

const writeText = vi.fn().mockResolvedValue(undefined);

describe("Eidos website", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/");
    document.documentElement.dataset.theme = "dark";
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText }
    });
    writeText.mockClear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it("renders the English home page and its primary product sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: /typed native language/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Functional forms, systems boundaries, compile-time code." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "From source file to native artifact—and back to the editor." })).toBeInTheDocument();
    expect(screen.getAllByText("0.6.0-alpha.1", { selector: "dd" })).toHaveLength(2);
  });

  it("uses real locale paths for Simplified Chinese content", () => {
    window.history.replaceState({}, "", "/zh-CN/");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: /在运行前参与推理/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("href", import.meta.env.BASE_URL);
  });

  it("supports keyboard code-tab navigation and copy feedback", async () => {
    const user = userEvent.setup();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText }
    });
    render(<App />);

    const firstTab = screen.getByRole("tab", { name: /Data \+ patterns/ });
    firstTab.focus();
    await user.keyboard("{ArrowRight}");

    expect(screen.getByRole("tab", { name: /Traits \+ HKT/ })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Abstraction.eidos")).toBeInTheDocument();

    await user.click(screen.getAllByRole("button", { name: "Copy code" })[0]);
    await waitFor(() => expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument());
    expect(writeText).toHaveBeenCalled();
  });

  it("switches and persists the selected color theme", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Change color theme" }));
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("eidos-theme-v1")).toBe("light");
  });

  it("has no detectable automated accessibility violations", async () => {
    const { container } = render(<App />);
    const result = await axe.run(container, {
      rules: { "color-contrast": { enabled: false } }
    });
    expect(result.violations).toHaveLength(0);
  });
});
