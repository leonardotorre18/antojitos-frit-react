import { Product } from "../../types"

export enum ACTIONS_ENUM_CART {
  ADD_TO_CART = 'ADD_TO_CART',
  CLEAR_CART = 'CLEAR_CART'
}
export type ACTIONS_CART = 
  TAddToCart |
  TClearCart


type TAddToCart = {
  type: ACTIONS_ENUM_CART.ADD_TO_CART,
  payload: {product: Product, count: number}
}
export const addToCart = (product: Product, count: number): TAddToCart => ({
  type: ACTIONS_ENUM_CART.ADD_TO_CART,
  payload: { product, count }
})

type TClearCart = {
  type: ACTIONS_ENUM_CART.CLEAR_CART
}
export const clearCart = (): TClearCart => ({
  type: ACTIONS_ENUM_CART.CLEAR_CART
})
