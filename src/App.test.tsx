import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { logRoles } from "@testing-library/dom";
import { addSpacesBeforeCapitalLetters } from "./utils/functions";

describe("App", () => {
  const initialColor = "MediumVioletRed";
  const newColor = "MidnightBlue";

  test("button has an initial color", () => {
    const { container } = render(<App />);

    logRoles(container);

    const button = screen.getByRole("button", {
      name: `Change to ${addSpacesBeforeCapitalLetters(newColor)}`,
    });
    expect(button).toHaveStyle({
      "background-color": initialColor,
    });
  });

  test("button turns blue when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: `Change to ${addSpacesBeforeCapitalLetters(newColor)}`,
    });
    fireEvent.click(button);
    expect(button).toHaveStyle({
      "background-color": newColor,
    });
  });

  test("button turns text when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: `Change to ${addSpacesBeforeCapitalLetters(newColor)}`,
    });
    fireEvent.click(button);
    expect(button).toHaveTextContent(
      `Change to ${addSpacesBeforeCapitalLetters(initialColor)}`
    );
  });

  test("button is enabled by default", () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: `Change to ${addSpacesBeforeCapitalLetters(newColor)}`,
    });
    expect(button).toBeEnabled();
  });

  test("checkbox is unchecked by default", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "I have a boat" });
    expect(checkbox).not.toBeChecked();
  });

  test("button is disabled when checkbox is checked", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "I have a boat" });
    fireEvent.click(checkbox);
    const button = screen.getByRole("button", {
      name: `Change to ${addSpacesBeforeCapitalLetters(newColor)}`,
    });
    expect(button).toBeDisabled();
  });

  test("button is enabled after second change", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "I have a boat" });
    fireEvent.change(checkbox);
    fireEvent.change(checkbox);
    const button = screen.getByRole("button", {
      name: `Change to ${addSpacesBeforeCapitalLetters(newColor)}`,
    });
    expect(button).toBeEnabled();
  });

  test("button is greay when is disabled", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "I have a boat" });
    fireEvent.click(checkbox);
    const button = screen.getByRole("button", {
      name: `Change to ${addSpacesBeforeCapitalLetters(newColor)}`,
    });
    expect(button).toHaveStyle({
      "background-color": "gray",
    });
  });

  test("button is greay when is disabled after it was blue", () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: `Change to ${addSpacesBeforeCapitalLetters(newColor)}`,
    });
    fireEvent.click(button);
    const checkbox = screen.getByRole("checkbox", { name: "I have a boat" });
    fireEvent.click(checkbox);
    expect(button).toHaveStyle({
      "background-color": "gray",
    });
  });

  test("button is blue again", () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: `Change to ${addSpacesBeforeCapitalLetters(newColor)}`,
    });
    fireEvent.click(button);
    const checkbox = screen.getByRole("checkbox", { name: "I have a boat" });
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(button).toHaveStyle({
      "background-color": newColor,
    });
  });

  test("button is enabled again", () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: `Change to ${addSpacesBeforeCapitalLetters(newColor)}`,
    });
    fireEvent.click(button);
    const checkbox = screen.getByRole("checkbox", { name: "I have a boat" });
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });
});

describe("spaces befor capital cammel case letters", () => {
  it("works for names with no cappital letters", () => {
    const result = addSpacesBeforeCapitalLetters("Red");
    expect(result).toEqual("Red");
  });
  it("works for names with no one cappital letter", () => {
    expect(addSpacesBeforeCapitalLetters("CornflowerBlue")).toBe(
      "Cornflower Blue"
    );
  });
  it("works for names with multiple cappital letters", () => {
    expect(addSpacesBeforeCapitalLetters("DarkGoldenRod")).toBe(
      "Dark Golden Rod"
    );
  });
});
