import React from 'react'
import { ACTIONS_ENUM_CART } from '../actions/Cart'
import { Product } from '../../types'
import { ACTIONS } from '../actions'
import CartReducer from './Cart'
import { ACTIONS_ENUM_PRODUCTS } from '../actions/Products'
import ProductsReducer from './Products'
import { ACTIONS_ENUM_USER, User } from '../actions/User'
import UserReducer from './User'


export const initialState = { 
  products: [],
  cart: [],
  user: null
}

export type State = {
  products: Product[],
  cart: Array<{
    product: Product,
    count: number
  }>,
  user: User | null
}


const Reducer = (): [ State, React.Dispatch<ACTIONS> ] => {

  const reducer = (state: State, action: ACTIONS): State => {

    return action.type in ACTIONS_ENUM_CART 
      ?  CartReducer(state, action) 
      : action.type in ACTIONS_ENUM_PRODUCTS 
      ? ProductsReducer(state, action) 
      : action.type in ACTIONS_ENUM_USER 
      ? UserReducer(state, action)
      : state

  }
  const [ state, dispatch ] = React.useReducer(reducer, initialState)

  return [ state, dispatch ]

}

export default Reducer;
