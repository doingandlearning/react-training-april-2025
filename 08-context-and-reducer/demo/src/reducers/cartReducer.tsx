import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export interface IItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface IAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "CLEAR_CART";
  payload?: Partial<IItem>;
}

export interface IState {
  items: IItem[];
}

export function cartReducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload! as IItem],
      };
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.payload!.id),
      };
    case "CLEAR_CART":
      return {
        items: [],
      };
    default:
      return state;
  }
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("Cart Context must be used inside of a CartProvider");
  }

  const { state, dispatch } = context;

  function addToCart(item: IItem) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  function removeItem(id: string) {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  }

  return { state, addToCart, clearCart, removeItem };
}
