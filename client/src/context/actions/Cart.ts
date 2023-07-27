import { Product } from "../../types"

export enum ACTIONS_ENUM_CART {
  ADD_TO_CART = 'ADD_TO_CART',
  DELETE_TO_CART = 'DELETE_TO_CART',
  CLEAR_CART = 'CLEAR_CART',
  SET_TO_CART = 'SET_TO_CART'
}
export type ACTIONS_CART = 
  TAddToCart |
  TClearCart |
  TDeleteToCart |
  TSetToCart

type TAddToCart = {
  type: ACTIONS_ENUM_CART.ADD_TO_CART,
  payload: {product: Product, count: number}
}
export const addToCart = (product: Product, count: number): TAddToCart => ({
  type: ACTIONS_ENUM_CART.ADD_TO_CART,
  payload: { product, count }
})

type TSetToCart = {
  type: ACTIONS_ENUM_CART.SET_TO_CART,
  payload: Array<{ count: number, product: Product }>
}
export const setToCart = (newState: Array<{ count: number, product: Product }>): TSetToCart => ({
  type: ACTIONS_ENUM_CART.SET_TO_CART,
  payload: newState
})

type TDeleteToCart = {
  type: ACTIONS_ENUM_CART.DELETE_TO_CART,
  payload: string
}
export const deleteToCart = (id: string): TDeleteToCart => ({
  type: ACTIONS_ENUM_CART.DELETE_TO_CART,
  payload: id
})

type TClearCart = {
  type: ACTIONS_ENUM_CART.CLEAR_CART
}
export const clearCart = (): TClearCart => ({
  type: ACTIONS_ENUM_CART.CLEAR_CART
})
