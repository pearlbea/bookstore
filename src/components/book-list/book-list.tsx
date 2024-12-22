"use client";

import { useState } from "react";
import { type Book, inventory } from "../../../data";
import { BookCard } from "../book/book";
import { Toggle } from "../ui/toggle";
import { X, LayoutGrid, List } from "lucide-react";
import { VisuallyHidden } from "../visually-hidden/visually-hidden";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import styles from "./book-list.module.css";
import { BookDetail } from "../book-detail/book-detail";
import { Search } from "../search/search";

export function BookList() {
  // grid or list
  const [view, setView] = useState("grid");
  const [books, setBooks] = useState(inventory);
  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState(false);

  function handleSearch(value: string) {
    const filteredBooks = inventory.filter((item) => {
      return (
        item.author.toLowerCase().includes(value.toLocaleLowerCase()) ||
        item.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    setBooks(filteredBooks);
    setFiltered(true);
  }

  function cancelSearch() {
    setBooks(inventory);
    setFiltered(false);
  }

  return (
    <div>
      <div className="flex justify-between gap-2">
        <Search
          onSubmitSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
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
      </div>
      <div className={filtered ? "bg-yellow-200 p-4" : ""}>
        {filtered ? (
          <div className="flex justify-between items-center pb-2">
            Search results:
            <Button variant="outline" size="icon" onClick={cancelSearch}>
              <X />
            </Button>
          </div>
        ) : null}
        {view === "grid" ? (
          <div className={`${styles.bookList}`}>
            {books.map((book: Book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div>
            <Table>
              <TableBody>
                {books.map((book: Book) => (
                  <TableRow>
                    <TableCell align="left" className="text-lg">
                      {book.title}
                    </TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell align="right">
                      <BookDetail book={book} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
