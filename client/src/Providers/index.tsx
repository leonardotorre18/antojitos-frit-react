import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../store'

type Props = {
  children: React.ReactNode
}

export default function MainProvider({children}: Props) {
  return (
    <>
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
    </>
  )
}
