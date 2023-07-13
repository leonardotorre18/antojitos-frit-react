
export type User = {
  name: string | null,
  email: string | null,
  id: string,
  num: number
}


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
  payload: null
}
export const signOut = (): TSignOut => ({
  type: ACTIONS_ENUM_USER.SIGN_IN,
  payload: null
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

