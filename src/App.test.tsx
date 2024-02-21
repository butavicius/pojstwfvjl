import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./category-tree/generateId.ts");

test("renders Category tree title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Category tree/i);
  expect(linkElement).toBeInTheDocument();
});
