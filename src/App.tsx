import "./App.css";
import { BookList } from "./components/book-list/book-list";

function App() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="scroll-m-20 text-4xl lg:text-5xl">Fake Bookstore</h1>
        <p className="text-xl text-muted-foreground p-2">
          You can pretend to buy as many as you like!
        </p>
      </header>
      <BookList />
    </div>
  );
}

export default App;
