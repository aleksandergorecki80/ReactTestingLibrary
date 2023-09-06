import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {logRoles} from '@testing-library/dom'


describe("App", () => {

  test('button has an initial color', () => {
    const { container } = render(<App />);

    logRoles(container);

    const button = screen.getByRole("button", {name: "Change to blue"});
    expect(button).toHaveStyle({
      "background-color": "red"
    })
  });

  test('button turns blue when clicked', () => {
    render(<App />);
    const button = screen.getByRole("button", {name: "Change to blue"});
    fireEvent.click(button);
    expect(button).toHaveStyle({
      "background-color": "blue"
    })
  });

  test('button turns text when clicked', () => {
    render(<App />);
    const button = screen.getByRole("button", {name: "Change to blue"});
    fireEvent.click(button);
    expect(button).toHaveTextContent("Change to red");
  });

  test("button is enabled by default", () => {
    render(<App />);
    const button = screen.getByRole("button", {name: "Change to blue"});
    expect(button).toBeEnabled();
  });

  test("checkbox is unchecked by default", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", {name: "vehicle3"});
    expect(checkbox).not.toBeChecked()
  })

});


