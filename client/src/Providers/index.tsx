import React from 'react'
import Provider from '../context/Provider'

type Props = {
  children: React.ReactElement
}

export default function MainProvider({children}: Props) {
  return (
    <>
    <Provider>
      {children}
    </Provider>
    </>
  )
}
