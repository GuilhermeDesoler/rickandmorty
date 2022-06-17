import React from "react";
import { render, screen } from "@testing-library/react";
import ComponentInput from "../component/input";

describe("Input Component", () => {
  test("Should be able to render and input", () => {
    render(<ComponentInput name="NameSearch" label="NameSearch" />);
    expect(screen.getByText("NameSearch")).toBeTruthy();
  });
});
