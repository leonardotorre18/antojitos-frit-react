import React from 'react'
import { context } from '../context/Context'

export default function CartView() {

  const { state } = React.useContext(context)

  return (
    <div>
      <h2>Bienvenido: {state.user?.email}</h2>  
    </div>
  )
}
