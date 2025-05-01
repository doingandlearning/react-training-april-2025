import Table from "./components/Table";
import ItemsList from "./components/ItemsList";
import LikePanel from "./components/LikePanel";

import "./App.css";
import { useLibrary } from "./hooks/useLibrary";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Book from "./book";
import Film from "./film";

function App() {
  const { state, addBook, addFilm } = useLibrary();
  const { books, films } = state;

  const [tabularFormat, setTabularFormat] = useLocalStorage('tabularFormatPreference', null);

  const toggleView = () => setTabularFormat(!tabularFormat);

  return (
    <>
      <h1>My Library</h1>
      <button onClick={toggleView}>
        {tabularFormat ? "Show as List" : "Show as Table"}
      </button>
      <button onClick={addBook}>Add Book</button>
      <button onClick={addFilm}>Add Film</button>
      {tabularFormat ? (
        <TableView books={books} films={films} />
      ) : (
        <ListView books={books} films={films} />
      )}
      <LikePanel />
    </>
  );
}

function TableView({ books, films }: { books: Book[], films: Film[] }) {
  return (
    <div>
      <h2>Books</h2>
      <Table items={books} />
      <h2>Films</h2>
      <Table items={films} />
    </div>
  );
}

function ListView({ books, films }: { books: Book[], films: Film[] }) {
  return (
    <div>
      <h2>Books</h2>
      <ItemsList items={books} />
      <h2>Films</h2>
      <ItemsList items={films} />
    </div>
  );
}

export default App;
