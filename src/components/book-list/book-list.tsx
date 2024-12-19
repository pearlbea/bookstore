"use client";

import { useState } from "react";
import { type Book, inventory } from "../../../data";
import { BookCard } from "../book/book";
import { Toggle } from "../ui/toggle";
import { LayoutGrid, List } from "lucide-react";
import { VisuallyHidden } from "../visually-hidden/visually-hidden";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import styles from "./book-list.module.css";

export function BookList() {
  // grid or list
  const [view, setView] = useState("grid");

  return (
    <div>
      <div className="flex justify-end gap-2 mb-4">
        <Toggle
          defaultPressed={true}
          onPressedChange={() => setView(view === "grid" ? "list" : "grid")}
          data-state={view === "grid" ? "on" : "off"}
          variant="outline"
          size="lg"
        >
          <LayoutGrid />
          <VisuallyHidden>Grid view</VisuallyHidden>
        </Toggle>
        <Toggle
          onPressedChange={() => setView(view === "list" ? "grid" : "list")}
          data-state={view === "list" ? "on" : "off"}
          variant="outline"
          size="lg"
        >
          <List />
          <VisuallyHidden>Grid view</VisuallyHidden>
        </Toggle>
      </div>

      {view === "grid" ? (
        <div className={styles.bookList}>
          {inventory.map((book: Book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div>
          <Table>
            <TableBody>
              {inventory.map((book: Book) => (
                <TableRow>
                  <TableCell align="left">{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
