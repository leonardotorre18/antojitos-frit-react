import React from 'react'
import { context } from '../context/Context'
import ValidationUser from '../components/errors/ValidationUser'

export default function CartView() {

  const { state } = React.useContext(context)

  return (
    <ValidationUser to='/login'>
      <div>
        <h2>Bienvenido: {state.user?.email}</h2>
        <h2>Tu nombre es : {state.user?.name}</h2>
      </div>
    </ValidationUser>
  )
}
