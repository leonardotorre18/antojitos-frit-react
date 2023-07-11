import { Product } from "../types";

export const returnProductsById 
  = (list: Product[], id: string): Product => 
    list.filter(product => product.id === id)[0]