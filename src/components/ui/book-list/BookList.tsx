import { type Book, inventory } from "../../../../data";
import { BookComponent } from "../book/Book";

export function BookList(): React.ReactElement {
  return (
    <div>
      {inventory.map((book: Book) => (
        <BookComponent key={book.id} book={book} />
      ))}
    </div>
  );
}
