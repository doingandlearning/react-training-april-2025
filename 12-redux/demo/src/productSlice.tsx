import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, SortedBy } from "./types.ts";

interface ProductState {
  products: Product[];
  sortBy: SortedBy;
}

let idCounter = 1000;

const initialState: ProductState = {
  products: [],
  sortBy: SortedBy.DESCRIPTION,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action: PayloadAction<Product>) {
        state.products.push(action.payload);
      },
      prepare(description: string, price: number) {
        return {
          payload: {
            id: idCounter++,
            description,
            price,
            likes: 0,
            mostRecentLike: null,
          } as Product,
        };
      },
    },
    likeProduct(state, action: PayloadAction<number>) {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.likes += 1;
        product.mostRecentLike = new Date();
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    sortProducts(state, action: PayloadAction<string>) {
      state.sortBy =
        action.payload === "description"
          ? SortedBy.DESCRIPTION
          : action.payload === "price"
            ? SortedBy.PRICE
            : SortedBy.LIKES;
    },
  },
});

export const {
  addProduct,
  likeProduct,
  removeProduct,
  sortProducts,
} = productSlice.actions;

export default productSlice.reducer;
