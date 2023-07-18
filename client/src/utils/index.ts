import { Product } from "../types";

export const returnProductsById 
  = (list: Product[], id: string): Product => 
    list.filter(product => product.id === id)[0]



export function getTotalPrice(productos: Array<{ count: number, product: Product}>) {
  let precioTotal = 0;
  
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i].product;
    const cantidad = productos[i].count;
    const precioProducto = producto.price;
    
    precioTotal += cantidad * precioProducto;
  }
  
  return precioTotal;
}