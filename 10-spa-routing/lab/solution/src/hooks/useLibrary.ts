import React from "react";
import { ILibraryContext, LibraryContext } from "../contexts/LibraryContext";
import { faker } from "@faker-js/faker";
import Book from "../book";
import Film from "../film";

export function useLibrary() {
  const context = React.useContext(LibraryContext);

  if (!context) {
    throw new Error("useLibrary must be used within a LibraryProvider");
  }

  const { state, dispatch } = context as ILibraryContext;

  const addBook = () => {
    dispatch({
      type: "ADD_BOOK",
      payload: new Book(faker.commerce.productName(), faker.person.fullName()),
    });
  };

  const addFilm = () => {
    dispatch({
      type: "ADD_FILM",
      payload: new Film(
        faker.commerce.productName(),
        faker.music.genre(),
        faker.commerce.productDescription()
      ),
    });
  };

  const handleRemove = (item: Book | Film) => {
    if ("title" in item) {
      dispatch({ type: "REMOVE_BOOK", payload: { title: item.title } });
    } else if ("name" in item) {
      dispatch({ type: "REMOVE_FILM", payload: { name: item.name } });
    }
  };

  return { state, addBook, addFilm, handleRemove };
}
