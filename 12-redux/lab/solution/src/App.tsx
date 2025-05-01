import Table from "./components/Table";
import ItemsList from "./components/ItemsList";
import LikePanel from "./components/LikePanel";
import { faker } from "@faker-js/faker"
import { NavLink, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./store"
import { addBook, addFilm } from "./librarySlice"

import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Book from "./book";
import Film from "./film";
import BookPage from "./components/BookPage";
import FilmPage from "./components/FilmPage";
import HomePage from "./components/HomePage";

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.library);
  const [tabularFormat, setTabularFormat] = useLocalStorage('tabularFormatPreference', null);

  const toggleView = () => setTabularFormat(!tabularFormat);

  return (
    <>
      <h1>My Library</h1>

      <nav>
        <NavLink to="/books">Book page</NavLink>
        <NavLink to="/films">Film page</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/books" element={<BookPage tabularFormat={tabularFormat} />}></Route>
        <Route path="/films" element={<FilmPage tabularFormat={tabularFormat} />}></Route>
      </Routes>
      <div className="button-group">

        <button onClick={toggleView}>
          {tabularFormat ? "Show as List" : "Show as Table"}
        </button>
        <button onClick={() => dispatch(addBook(new Book(faker.commerce.productName(), faker.person.fullName())))}>Add Book</button>
        <button onClick={() => dispatch(addFilm(new Film(faker.music.songName(), faker.music.genre(), faker.commerce.productDescription())))}>Add Film</button>
      </div>
      <LikePanel />
    </>
  );
}

