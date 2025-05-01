import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Book from "./book";
import Film from "./film";

interface LibraryState {
  books: Book[];
  films: Film[];
}

const initialState: LibraryState = {
  books: [],
  films: [],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.books.push(action.payload);
    },
    removeBook(state, action: PayloadAction<{ title: string }>) {
      state.books = state.books.filter(
        (b: Book) => b.title !== action.payload.title
      );
    },
    addFilm(state, action: PayloadAction<Film>) {
      state.films.push(action.payload);
    },
    removeFilm(state, action: PayloadAction<{ name: string }>) {
      state.films = state.films.filter(
        (f: Film) => f.name !== action.payload.name
      );
    },
  },
});

export const { addBook, removeBook, addFilm, removeFilm } =
  librarySlice.actions;
export default librarySlice.reducer;
