import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./ToDoList";

test("renders the todo list component", () => {
  render(<TodoList />);
  screen.debug();
});

test("renders the new item input", () => {
  render(<TodoList />);
  const inputPlaceholder = screen.getByPlaceholderText(/add an item.../i);
  expect(inputPlaceholder).toBeInTheDocument();
});

test("renders the new item add button", () => {
  render(<TodoList />);
  const addItemButton = screen.getByRole("button", { name: /add/i });
  expect(addItemButton).toBeEnabled();
});

test("renders the empty todo list", () => {
  render(<TodoList />);
  const emptyListElement = screen.getByText(/theres nothing to do!/i);
  expect(emptyListElement).toBeInTheDocument();
});

test("if an item is added, it shows up in the list", () => {
  render(<TodoList />);
  userEvent.type(screen.getByPlaceholderText(/add an item.../i), "test item");
  userEvent.click(screen.getByRole("button", { name: /add/i }));
  const todolistItem = screen.getByText((content, element) => {
    return (
      element.tagName.toLowerCase() === "span" && content.includes("test item")
    );
  });
  expect(todolistItem).toBeInTheDocument();
});
