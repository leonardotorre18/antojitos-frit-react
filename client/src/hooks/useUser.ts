import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { context } from '../context/Context'
import { signIn, signOut } from '../context/actions/User'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

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
            num: 1,
            id: snapshot.id
          }))

        })

      } else dispatch(signOut())

    })
    return unSubcribe
  },[])
}