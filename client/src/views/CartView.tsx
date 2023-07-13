import React from 'react'
import { context } from '../context/Context'

export default function CartView() {

  const { state } = React.useContext(context)

  return (
    <div className='p-4 '>
      <h2 className='text-xl'>Bienvenid@
      <span className='font-bold ml-2'>{state.user?.name}</span>
      !</h2>
    </div>
  )
}
