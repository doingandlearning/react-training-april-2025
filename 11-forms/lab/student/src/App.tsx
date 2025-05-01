import Table from "./components/Table";
import ItemsList from "./components/ItemsList";
import LikePanel from "./components/LikePanel";
import { NavLink, Routes, Route } from "react-router-dom"

import "./App.css";
import { useLibrary } from "./hooks/useLibrary";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Book from "./book";
import Film from "./film";
import BookPage from "./components/BookPage";
import FilmPage from "./components/FilmPage";
import HomePage from "./components/HomePage";

export default function App() {
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
      <nav>
        <NavLink to="/books">Book page</NavLink>
        <NavLink to="/films">Film page</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/books" element={<BookPage tabularFormat={tabularFormat} />}></Route>

        <Route path="/films" element={<FilmPage tabularFormat={tabularFormat} />}></Route>

      </Routes>
      <LikePanel />
    </>
  );
}

