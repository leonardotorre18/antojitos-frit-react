import { initializeApp } from "firebase/app";
import config from './config'
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore'
import { getDocs } from "firebase/firestore";
import { Product } from "../types";

initializeApp(config);
export const db = getFirestore()


export const getProducts = async (): Promise<Product[]> => {

  const products: Product[] = []

  await getDocs(collection(db, 'products'))
    .then(res => res.forEach(
      res => {
        const document = res.data();
        products.push({
          id: res.id,
          title: document.title,
          subtitle: document.subtitle,
          description: document.description,
          imgPath: document.imgPath,
          price: document.price
        })
      }
    ))

    return products;
}


export const getProductById = async (id: string): Promise<Product> => {

  const response = (await getDoc(doc(db, 'products', id))).data()

  return {
    id: response?.id,
    title: response?.title,
    subtitle: response?.subtitle,
    description: response?.description,
    imgPath: response?.imgPath,
    price: response?.price
  }

}