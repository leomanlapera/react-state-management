export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "INCREASE_QUANTITY"; payload: { id: string } }
  | { type: "DECREASE_QUANTITY"; payload: { id: string } }
  | { type: "SET_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "APPLY_DISCOUNT"; payload: { percent: number } }
  | { type: "CLEAR_CART" };

export interface CartState {
  items: CartItem[];
  discount: number;
}

export const initialCartState: CartState = {
  items: [],
  discount: 0,
};

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      const updatedItems = existing
        ? state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        : [...state.items, action.payload];
      return { ...state, items: updatedItems };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }

    case "INCREASE_QUANTITY": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    }

    case "DECREASE_QUANTITY": {
      return {
        ...state,
        items: state.items
          .map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return item;
          })
          .filter((item) => item.quantity > 0),
      };
    }

    case "SET_QUANTITY": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: Math.max(action.payload.quantity, 1),
            };
          }
          return item;
        }),
      };
    }

    case "APPLY_DISCOUNT": {
      return { ...state, discount: action.payload.percent };
    }

    case "CLEAR_CART":
      return { items: [], discount: 0 };

    default:
      return state;
  }
};
