import { State } from ".";
import { ACTIONS } from "../actions";
import { ACTIONS_ENUM_CART } from "../actions/Cart";

export default function CartReducer(state: State, action: ACTIONS): State {
  switch (action.type) {
    case ACTIONS_ENUM_CART.ADD_TO_CART: {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItemIndex === -1) {
        // Item does not exist yet, add it to the cart
        const updatedCart = [...state.cart, action.payload];
        return { ...state, cart: updatedCart };
      } else {
        // Item already exists, increment its count
        const updatedItem = { ...state.cart[existingItemIndex] };
        updatedItem.count += action.payload.count;
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = updatedItem;
        return { ...state, cart: updatedCart };
      }
    }
      break;

    case ACTIONS_ENUM_CART.DELETE_TO_CART: 
      return {
        ...state,
        cart: state.cart.filter(p => p.product.id !== action.payload && p)
      }

    break;
  
    case ACTIONS_ENUM_CART.CLEAR_CART:

      return {
        ...state,
        cart: []
      }

      break;
    
    default:
      break;
  }
  return state
}