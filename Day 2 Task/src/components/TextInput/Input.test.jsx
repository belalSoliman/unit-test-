import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./Input";

describe("TextInput Component", () => {
  test("renders with the correct placeholder", () => {
    render(<TextInput placeholder="Enter text here" />);
    const inputElement = screen.getByPlaceholderText("Enter text here");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onChange when text is entered", () => {
    const handleChange = vi.fn();
    render(<TextInput value="" onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("displays the correct value", () => {
    render(<TextInput value="Test Value" />);
    const inputElement = screen.getByDisplayValue("Test Value");
    expect(inputElement).toBeInTheDocument();
  });

  test("is disabled when the disabled prop is true", () => {
    render(<TextInput disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  test("renders with default props when no props are passed", () => {
    render(<TextInput />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("");
    expect(inputElement).not.toBeDisabled();
    expect(inputElement).toHaveAttribute("placeholder", "");
  });
});
