import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const auth = getAuth()

export const SignInWithGoogle = () => {
  const GoogleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, GoogleProvider)
}

const SignUpWithEmail = (email:string, password:string) => {
  createUserWithEmailAndPassword(auth, email, password)
}

export const SignInWithEmail = (email:string, password:string) => {
  signInWithEmailAndPassword(auth, email, password)
}