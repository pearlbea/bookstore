import "./App.css";
import { inventory, type Book } from "../data";
import { BookComponent } from "./Book/Book";

function App() {
  return (
    <>
      {inventory.map((book: Book) => (
        <BookComponent key={book.id} book={book} />
      ))}
    </>
  );
}

export default App;
