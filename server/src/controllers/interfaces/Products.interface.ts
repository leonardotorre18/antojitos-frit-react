import { TProduct } from "../types/Product.type";

export interface IProductController {
  getAllProducts(): TProduct[]
}