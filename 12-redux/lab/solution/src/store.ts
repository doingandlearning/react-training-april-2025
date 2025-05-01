import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./librarySlice";
import likesReducer from "./likesSlice";

export const store = configureStore({
  reducer: {
    library: libraryReducer,
    likes: likesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
