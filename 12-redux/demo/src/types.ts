export const enum ActionType {
  ADD_PRODUCT = "ADD",
  LIKE_PRODUCT = "LIKE",
  REMOVE_PRODUCT = "REMOVE",
  SORT_PRODUCTS = "SORT",
}

export const enum SortedBy {
  DESCRIPTION,
  PRICE,
  LIKES,
}

export interface Product {
  id: number;
  description: string;
  price: number;
  likes: number;
  mostRecentLike?: Date;
}

export interface RootState {
  products: Product[];
  sortBy: SortedBy;
}
