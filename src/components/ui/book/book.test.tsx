import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BookComponent } from "./Book";

describe("Book", () => {
  const book = {
    id: "123",
    title: "Middlemarch",
    author: "George Eliot",
  };

  it("should display author and title", () => {
    render(<BookComponent book={book} />);
    expect(screen.getByText("Middlemarch")).toBeTruthy();
    expect(screen.getByText("George Eliot")).toBeTruthy();
  });
});
