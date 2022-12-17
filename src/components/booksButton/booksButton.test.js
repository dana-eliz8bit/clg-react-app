import React from "react";
import { render, screen } from "@testing-library/react";
import BooksButton from "./index";
import userEvent from "@testing-library/user-event";

test("button should render", () => {
  render(<BooksButton />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});

// Test if the button is clickable

test("button should be clickable", () => {
  const mockClickFn = jest.fn();
  render(
    <BooksButton onCLick={mockClickFn} type="button">
      Click Me
    </BooksButton>
  );
  const btn = screen.getByRole("button");
  userEvent.click(btn);
  expect(mockClickFn.mock.calls.length).toEqual(1);
});
