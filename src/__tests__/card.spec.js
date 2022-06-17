import React from "react";
import { render, screen } from "@testing-library/react";
import ComponentCard from "../component/card";

const Character = {
  name: "Rick",
  species: "Humano",
  status: "Alive",
  location: { name: "Earth" },
};

describe("Card Component", () => {
  test("Should be able to render cards", () => {
    render(<ComponentCard character={Character} />);
    expect(screen.getByText("Rick")).toBeTruthy();
  });
});
