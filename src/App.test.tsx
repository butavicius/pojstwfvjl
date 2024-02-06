import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// TODO: Write tests :)

test("renders Category tree title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Category tree/i);
  expect(linkElement).toBeInTheDocument();
});
