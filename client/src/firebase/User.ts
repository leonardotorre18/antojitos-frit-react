import { doc, setDoc } from "firebase/firestore"
import {db} from './'
import { User } from "../context/actions/User"


export const createUser = (user: User) => {
  setDoc(doc(db, 'users', user.id), user)
}

// export const getUser = () => {

// }