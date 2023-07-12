import { State } from ".";
import { ACTIONS_ENUM_USER, ACTIONS_USER } from "../actions/User";

export default function UserReducer (state: State, action: ACTIONS_USER): State {

  switch (action.type) {

    case ACTIONS_ENUM_USER.SIGN_IN:
      return {
        ...state,
        user: action.paylad
      }
      break;
    
    case ACTIONS_ENUM_USER.SIGN_UP:
      return {
        ...state,
        user: action.paylad
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