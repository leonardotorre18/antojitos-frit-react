import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Product } from '../types';
import { collection, doc, getDoc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';


export const saveInOnlineCart = (payload: Array<{ count: number, product: Product }>) => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      updateDoc(doc(getFirestore(), 'users', user.uid), { 
        cart: payload
      })
    }
  })
}