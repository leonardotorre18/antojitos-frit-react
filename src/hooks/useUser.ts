import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { context } from '../context/Context'
import { signIn, signOut } from '../context/actions/User'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { setToCart } from '../context/actions/Cart'

export const useUser = () => {
  const { dispatch } = React.useContext(context)
  React.useEffect(() => {
    const unSubcribe = onAuthStateChanged(getAuth(), (firebaseUser) => {

      if (firebaseUser) {
        getDoc( doc(db, 'users', firebaseUser.uid)).then( snapshot => {

          const doc = snapshot.data();

          // Esto sirve para crear sesión pero no para  iniciarla en caso de usar correo

          dispatch(signIn({
            email: doc?.email,
            name: doc?.name,
            cart: [],
            id: snapshot.id,
            privileges: doc?.privileges
          }))
          doc?.cart && dispatch(setToCart(doc.cart))

        })

      } else dispatch(signOut())

    })
    return unSubcribe
  },[])
}