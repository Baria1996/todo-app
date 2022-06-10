import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the main app", () => {
  render(<App />);
  const headerElement = screen.getByRole("heading", /to-do list/i);
  expect(headerElement).toBeInTheDocument();
});
