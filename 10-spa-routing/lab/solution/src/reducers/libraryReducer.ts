export function libraryReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, books: [...state.books, action.payload] };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter(
          (book) => book.title !== action.payload.title
        ),
      };
    case "ADD_FILM":
      return { ...state, films: [...state.films, action.payload] };
    case "REMOVE_FILM":
      return {
        ...state,
        films: state.films.filter((film) => film.name !== action.payload.name),
      };
    default:
      return state;
  }
}
