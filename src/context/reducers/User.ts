import { State } from ".";
import { ACTIONS } from "../actions";
import { ACTIONS_ENUM_USER } from "../actions/User";

export default function UserReducer (state: State, action: ACTIONS): State {

  switch (action.type) {

    case ACTIONS_ENUM_USER.SIGN_IN:
      return {
        ...state,
        user: action.payload
      }
      break;
    
    case ACTIONS_ENUM_USER.SIGN_UP:
      return {
        ...state,
        user: action.payload
      }
      break;
  
    case ACTIONS_ENUM_USER.SIGN_OUT:
      return {
        ...state,
        user: null
      }
      break;

    default:
      return state
      break;
  }
  return state
}