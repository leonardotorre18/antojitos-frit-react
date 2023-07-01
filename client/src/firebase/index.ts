import { initializeApp } from "firebase/app";
import config from './config'
import { getFirestore, collection } from 'firebase/firestore'
import { getDocs, getDoc, doc } from "firebase/firestore";

initializeApp(config);


export const db = getFirestore()

export const getProducts = async (callback: (response: any) => void) => {

  const response: Array<any> = [];

  await getDocs(collection(db, 'products'))
    .then(
      res => res.forEach(res => {
        response.push({
        ...res.data(),
        id: res.id
        })
      })
    )

  callback(response)
}

export const getProductsById = async (id: string, callback: (response: any) => void) => {

  callback((await getDoc(doc(db, 'products', id))).data())
}