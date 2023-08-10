import { doc, setDoc } from "firebase/firestore"
import {db} from './'
import { Privileges, User } from "../context/actions/User"

export const createUser = (user: User) => {
  setDoc(doc(db, 'users', user.id), user)
}

export const makeAdmin = (id: string) => {
  setDoc(doc(db, 'users', id), {
    privileges: Privileges.ADMIN
  })
}

export const blockAdmin = (id: string)=> {
  setDoc(doc(db, 'users', id), {
    privileges: Privileges.USER
  })
}