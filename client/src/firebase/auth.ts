import React from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { context } from '../context/Context';
import { signUp } from '../context/actions/User';

const auth = getAuth()


export enum FirebaseError {
  PASSWORD_INVALID = 'auth/wrong-password',
  EMAIL_INVALID = 'auth/user-not-found',
  EMAIL_IN_USE = 'auth/email-already-in-use'
}

export const errorHandler = (err: any): string => {
  if (err.code === FirebaseError.EMAIL_INVALID) return 'El correo que ingresó no es correcto'
  else if (err.code === FirebaseError.PASSWORD_INVALID) return 'El contraseña que ingresó no es correcta'
  else if (err.code === FirebaseError.EMAIL_IN_USE) return 'El correo que ingresó ya se encuentra registrado en esta página'
  return ''
}


export const SignInWithGoogle = async () => {
  const GoogleProvider = new GoogleAuthProvider()
  const user = await signInWithPopup(auth, GoogleProvider)
  return user
}

export const SignUpWithEmail = async (email:string, password:string) => {
  const user = await createUserWithEmailAndPassword(auth, email, password)
  return user
}

export const SignInWithEmail = async (email:string, password:string) => {
  const user = await signInWithEmailAndPassword(auth, email, password)
  return user
}