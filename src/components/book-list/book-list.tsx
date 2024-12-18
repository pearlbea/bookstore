import { type Book, inventory } from "../../../data";
import { BookComponent } from "../book/book";
import styles from "./book-list.module.css";

export function BookList() {
  return (
    <div className={styles.bookList}>
      {inventory.map((book: Book) => (
        <BookComponent key={book.id} book={book} />
      ))}
    </div>
  );
}
