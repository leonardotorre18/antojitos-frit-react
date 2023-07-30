import { Product } from "../types";

export const returnProductsById 
  = (list: Product[], id: string): Product => 
    list.filter(product => product.id === id)[0]



export function getTotalPrice(productos: Array<{ count: number, product: Product}>) {
  let precioTotal = 0;
  
  for (let i = 0; i < productos.length; i++) {
    precioTotal += productos[i].count * productos[i].product.price;
  }
  
  return precioTotal;
}


/**
 * Created a URL Message Whatsapp using Whatsapp API
 * @param {array} products products in listing to shopping cart
 * @param {number} finalPrice price to pay
 * @returns URL to send whastapp Message
 */
const newMessageWhatsapp = (products: Array<{ product: Product, count: number}>, finalPrice: number): string => {
  const urlStore = 'https://antojitos-frit.netlify.app/';

  let message = `https://api.whatsapp.com/send/?phone=573213232151&text=%C2%A1Hola%2C+Antojitos+Frit%21+👋🏼👋🏼👋🏼%0D%0A%0D%0AHice+este+pedido+desde+tu+tienda+online+${urlStore}%20📱💻%0D%0A%0D%0A`;

  products.forEach((item) => {
    // message += `${product.count}+${product.name}+Talla%3A+${product.size}%0D%0A`;
    message += `✅%20${item.count}%20*${item.product.title}*_%20%20$${item.product.price}%20c/u%0D%0A`;
  });

  // const discount = getDiscount(products);
  // if (discount > 0) message += `%0D%0A%0D%0A🎉🎉Gracias%20a%20nuestra%20promoción%20especial%20ahorras%20*$${discount}*%20en%20tu%20compra🎉🎉%0D%0A%0D%0A`;

  message += `%0D%0A____________________________%0D%0A%0D%0A%F0%9F%92%B0+Total+a+pagar%3A+%24+${finalPrice}+%F0%9F%92%B0%0D%0A%0D%0A%C2%A1Muchas+gracias%21+Quedo+pendiente+de+su+respuesta`;

  return message;
};

export default newMessageWhatsapp;