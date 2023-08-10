import { State } from ".";
import { ACTIONS } from "../actions";
import { ACTIONS_ENUM_PRODUCTS } from "../actions/Products";

export default function ProductsReducer (state: State, action: ACTIONS): State {

  switch (action.type) {
    case ACTIONS_ENUM_PRODUCTS.UPDATE_PRODUCTS:
    
      return {
        ...state,
        products: action.payload
      }

    case ACTIONS_ENUM_PRODUCTS.DELETE_PRODUCTS: 
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload)
      }


      break;
  
    default:
      return state
      break;
  }
  return state
}