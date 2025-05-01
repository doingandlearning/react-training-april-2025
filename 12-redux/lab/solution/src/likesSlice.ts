import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LikesState {
  count: number;
}

const initialState: LikesState = {
  count: 0,
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    incrementLike(state) {
      state.count += 1;
    },
    clearLikes(state) {
      state.count = 0;
    },
    setLikes(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
  },
});

export const { incrementLike, clearLikes, setLikes } = likesSlice.actions;
export default likesSlice.reducer;
