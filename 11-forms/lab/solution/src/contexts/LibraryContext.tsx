import React from "react";
import Book from "../book";
import Film from "../film";
import { libraryReducer } from "../reducers/libraryReducer";

export interface LibraryState {
  books: Book[];
  films: Film[];
}

export interface LibraryAction {
  type: string;
  payload?: any;
}

export interface ILibraryContext {
  state: LibraryState;
  dispatch: React.Dispatch<LibraryAction>;
}

export const LibraryContext = React.createContext<ILibraryContext | null>(null);

const initialState: LibraryState = {
  books: [],
  films: [],
};



export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(libraryReducer, initialState);

  return (
    <LibraryContext.Provider value={{ state, dispatch }}>
      {children}
    </LibraryContext.Provider>
  );
}


