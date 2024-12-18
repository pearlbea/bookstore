"use client";

import { useState } from "react";
import { type Book, inventory } from "../../../data";
import { BookComponent } from "../book/book";
import { Button } from "../ui/button";
import { LayoutGrid, List } from "lucide-react";
import { VisuallyHidden } from "../visually-hidden/visually-hidden";
import styles from "./book-list.module.css";

export function BookList() {
  const [view, setView] = useState("grid");

  return (
    <div>
      <div className="flex justify-end gap-2 mb-4">
        <Button
          className={view === "grid" ? "bg-zinc-100" : "bg-white"}
          variant="outline"
          size="icon"
          onClick={() => setView("grid")}
        >
          <LayoutGrid size="48" />
          <VisuallyHidden>Grid view</VisuallyHidden>
        </Button>
        <Button
          className={view === "list" ? "bg-zinc-100" : "bg-white"}
          variant="outline"
          size="icon"
          onClick={() => setView("list")}
        >
          <List size="48" />
          <VisuallyHidden>Grid view</VisuallyHidden>
        </Button>
      </div>
      <div className={styles.bookList}>
        {inventory.map((book: Book) => (
          <BookComponent key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
