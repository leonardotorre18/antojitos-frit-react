import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Product } from '../types';
import { deleteDoc, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { db } from '.';


export const saveInOnlineCart = (payload: Array<{ count: number, product: Product }>) => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      updateDoc(doc(getFirestore(), 'users', user.uid), { 
        cart: payload
      })
    }
  })
}

export const deleteProductFirebase = async (id: string) => {
  await deleteDoc(doc(db, 'products', id))
}