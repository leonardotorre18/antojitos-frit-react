import { User } from "firebase/auth"


export enum ACTIONS_ENUM_USER {
  SIGN_OUT,
  SIGN_IN,
  SIGN_UP
}


export type ACTIONS_USER = 
  TSignIn |
  TSignOut |
  TSignUp


type TSignOut = {
  type: ACTIONS_ENUM_USER,
  payload: User
}
export const signOut = (user: User): TSignOut => ({
  type: ACTIONS_ENUM_USER.SIGN_IN,
  payload: user
})


type TSignIn = {
  type: ACTIONS_ENUM_USER,
  payload: User
}
export const signIn = (user: User): TSignIn => ({
  type: ACTIONS_ENUM_USER.SIGN_IN,
  payload: user
})


type TSignUp = {
  type: ACTIONS_ENUM_USER,
  payload: User
}
export const signUp = (user: User): TSignUp => ({
  type: ACTIONS_ENUM_USER.SIGN_UP,
  payload: user
})

