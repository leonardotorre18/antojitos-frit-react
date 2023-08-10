import { Product } from "../../types"

export enum ACTIONS_ENUM_PRODUCTS {
  UPDATE_PRODUCTS = 'UPDATE_PRODUCTS',
  DELETE_PRODUCTS = 'DELETE_PRODUCTS'
}
export type ACTIONS_PRODUCTS = 
  TUpdateProducts |
  TDeleteProduct


type TUpdateProducts = {
  type: ACTIONS_ENUM_PRODUCTS.UPDATE_PRODUCTS,
  payload: Product[]
}
export const updateProducts = (newProducts: Product[]): TUpdateProducts => ({
  type: ACTIONS_ENUM_PRODUCTS.UPDATE_PRODUCTS,
  payload: newProducts
})


type TDeleteProduct = {
  type: ACTIONS_ENUM_PRODUCTS.DELETE_PRODUCTS,
  payload: string
}
export const deleteProduct = (id: string): TDeleteProduct => ({
  type: ACTIONS_ENUM_PRODUCTS.DELETE_PRODUCTS,
  payload: id
})