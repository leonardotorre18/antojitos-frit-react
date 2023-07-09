import { Product } from "../../types"

export enum ACTIONS_ENUM_PRODUCTS {
  UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'
}
export type ACTIONS_PRODUCTS = 
  TUpdateProducts


type TUpdateProducts = {
  type: ACTIONS_ENUM_PRODUCTS.UPDATE_PRODUCTS,
  payload: Product[]
}
export const updateProducts = (newProducts: Product[]): TUpdateProducts => ({
  type: ACTIONS_ENUM_PRODUCTS.UPDATE_PRODUCTS,
  payload: newProducts
})