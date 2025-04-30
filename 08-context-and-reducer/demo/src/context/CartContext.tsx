import { createContext, useReducer } from "react";
import { cartReducer, IAction, IItem } from "../reducers/cartReducer";

interface ICartContext {
  state: { items: IItem[] },
  dispatch: React.Dispatch<IAction>
}

const CartContext = createContext<ICartContext | null>(null)

function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  return <CartContext.Provider value={{ state, dispatch }}>
    {children}
  </CartContext.Provider>
}

export type { ICartContext }
export { CartContext, CartProvider }

