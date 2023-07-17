import React from 'react'
import { context } from '../context/Context'
import ProductItem from '../components/pure/ProductItem'

export default function CartView() {

  const { state } = React.useContext(context)

  return (
    <>
    {
      state.user ? (
      <div className='p-4 '>
        <h2 className='text-xl'>Bienvenid@
          <span className='font-bold ml-2'>{state.user?.name}</span>
        !</h2>

        
      </div>
      ) : <></>
    }
    <div className='md:flex'>
      <div className='md:w-1/2 mt-10'>
        {
          state.cart.map(item => <ProductItem product={item.product} count={item.count} />)
        }
      </div>
      <div className='md:w-1/2 '>

        <p>Productos Totales:  { 'En construcción' }</p>

      </div>
    </div>
    </>
  )
}
