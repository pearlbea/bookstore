import "./App.css";
import { BookList } from "./components/ui/book-list/BookList";

function App() {
  return (
    <>
      <header>
        <h1>Fake Bookstore</h1>
        <p>You can pretend to buy as many as you like!</p>
      </header>
      <BookList />
    </>
  );
}

export default App;