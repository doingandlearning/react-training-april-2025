### 🏗 **Lab: Refactor Library App with Redux**

---

### 🔧 **Objective**
Replace the current context + reducer setup with Redux for global state management, using the official `@reduxjs/toolkit`.

---

### 🛠 **What You’ll Do**
✅ Set up Redux with the Redux Toolkit  
✅ Move the reducer logic into a Redux slice  
✅ Replace `useContext` + local reducer dispatch with Redux hooks  
✅ Verify the app still works (or improves!)

---

### 🗂 **Steps**

---

### 1️⃣ Install Redux Toolkit

In your Vite + React project:
```bash
npm install @reduxjs/toolkit react-redux
```

---

### 2️⃣ Create Redux Store

In `store.ts`:
```ts
import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./librarySlice";

export const store = configureStore({
  reducer: {
    library: libraryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

### 3️⃣ Create a Slice

In `librarySlice.ts`:
```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  title: string;
  author: string;
}

interface Film {
  name: string;
  director: string;
}

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
      state.books = state.books.filter((b) => b.title !== action.payload.title);
    },
    addFilm(state, action: PayloadAction<Film>) {
      state.films.push(action.payload);
    },
    removeFilm(state, action: PayloadAction<{ name: string }>) {
      state.films = state.films.filter((f) => f.name !== action.payload.name);
    },
  },
});

export const { addBook, removeBook, addFilm, removeFilm } = librarySlice.actions;
export default librarySlice.reducer;
```

---

### 4️⃣ Provide the Store

In `main.tsx`:
```tsx
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

### 5️⃣ Update Components to Use Redux

In components:
```tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addBook, removeBook } from "../librarySlice";

const dispatch = useDispatch();
const books = useSelector((state: RootState) => state.library.books);
```

Replace:
✅ `dispatch({ type: ... })` → `dispatch(addBook(...))`  
✅ `useContext(LibraryContext)` → `useSelector(...)`

---

### ✅ **Success Criteria**

- App runs with Redux instead of local reducer/context  
- Adding/removing books and films works  
- View toggle still functional (optional: can leave local or lift to Redux)

---

### 🏆 **Optional Stretch Goals**

- Add Redux DevTools and explore state changes  
- Create separate slices for books and films  
- Persist Redux state to localStorage
