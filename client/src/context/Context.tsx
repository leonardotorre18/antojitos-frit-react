import React, { Dispatch } from 'react'
import { State, initialState } from './reducers'
import { ACTIONS } from './actions'


type IContext = {
  state: State,
  dispatch: Dispatch<ACTIONS>,
}


export const context = React.createContext<IContext>({
  state: initialState,
  dispatch: () => initialState,
})
