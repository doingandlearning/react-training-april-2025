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

// export function addToCart() {
//   dispatch({
//     type: "ADD_ITEM", payload: {
//       id: String(Date.now()),
//       name: faker.commerce.productName(),
//       price: faker.commerce.price(),
//       image: faker.image.url({ width: 100, height: 100 })

//     }
//   })
// }
