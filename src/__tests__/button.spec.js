import React from "react";
import { render, screen } from "@testing-library/react";
import ComponentButton from "../component/button";

describe("Button Component", () => {
  test("Should be able to render a button", () => {
    render(<ComponentButton next={true} onclick={() => {}} />);
    expect(screen.getByText("Next Page")).toBeTruthy();
  });
});
