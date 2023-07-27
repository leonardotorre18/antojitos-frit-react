import { State } from ".";
import { saveInOnlineCart } from "../../firebase/Products";
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
        const finalState = { ...state, cart: updatedCart };
        saveInOnlineCart(finalState.cart)
        return finalState;

      } else {
        // Item already exists, increment its count
        const updatedItem = { ...state.cart[existingItemIndex] };
        updatedItem.count += action.payload.count;
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = updatedItem;
        const finalState = { ...state, cart: updatedCart };
        saveInOnlineCart(finalState.cart)
        return finalState;
      }
    }
      break;

    case ACTIONS_ENUM_CART.DELETE_TO_CART: {
      const finalState = {
        ...state,
        cart: state.cart.filter(p => p.product.id !== action.payload && p)
      }
      saveInOnlineCart(finalState.cart)
      return finalState
    }

    break;
  
    case ACTIONS_ENUM_CART.CLEAR_CART: {
      saveInOnlineCart([])
      return {
        ...state,
        cart: []
      }
    }


      break;
      
    case ACTIONS_ENUM_CART.SET_TO_CART: {
      saveInOnlineCart(action.payload)
      return {
        ...state,
        cart: action.payload
      }
    }
  
  
      break;
    
    default:
      break;
  }
  return state
}