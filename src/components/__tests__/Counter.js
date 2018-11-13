import React from "react";
import { render, fireEvent } from "react-testing-library";
import Counter from "../Counter";

beforeEach(() => {
  window.localStorage.removeItem("count");
});

afterEach(() => {
  window.localStorage.removeItem("count");
});

test("counter increments the count", () => {
  const { container } = render(<Counter />);
  const button = container.firstChild;
  expect(button.textContent).toBe("0");
  fireEvent.click(button);
  expect(button.textContent).toBe("1");
});

test("read and update localStorage", () => {
  window.localStorage.setItem("count", 3);
  const { container } = render(<Counter />);
  const button = container.firstChild;
  expect(button.textContent).toBe("3");
  fireEvent.click(button);
  expect(button.textContent).toBe("4");
});
