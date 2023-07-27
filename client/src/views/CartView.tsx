import React from 'react'
import { context } from '../context/Context'
import ProductItem from '../components/pure/ProductItem'
import { getTotalPrice } from '../utils'

export default function CartView() {

  const { state } = React.useContext(context)

  return (
    <div className='md:flex md:h-screen'>
      <div className='w-full h-full'>
        {
          state.user ? (
          <div className='p-4'>
            <h2 className='text-xl'>Bienvenid@
              <span className='font-bold ml-2'>{state.user?.name}</span>
            !</h2>

            
          </div>
          ) : <></>
        }
        <h2 className=' text-2xl font-bold p-4 flex justify-between'>
          Carrito de Compras
          <span className='text-xl opacity-60'>Productos { state.cart.length }</span>
        </h2>

        <hr className='flex-grow border-t border-secondColor w-11/12 mx-auto opacity-40' />

        <div className=' p-4 h-full overflow-y-auto'>
          {
            state.cart && state.cart.length > 0 ? 
            state.cart.map(item => <ProductItem product={item.product} count={item.count} />)
            : <span className='p-4'>No hay elementos en el carrito</span>
          }
        </div>

      </div>
      {/* Menú lateral */}
      <div className='bg-gray-100 md:w-1/3 py-8 px-5'>
        <h3 className='text-2xl font-bold my-6'>Resumen del pedido</h3>
        <div className='flex justify-between'>
          <p className='flex gap-2'>
            Productos: 
            <span className='font-semibold'>
              { state.cart.length }
            </span>
          </p>
          {/* <p className='flex gap-2'>
            $: 
            <span className='font-semibold'>
              { getTotalPrice(state.cart) }
            </span>
          </p> */}
        </div>
        <hr className='flex-grow border-t border-secondColor w-11/12 mx-auto opacity-40 my-4' />
        <p className='flex justify-between'>
          <span className='uppercase'>Costo Total</span>
          <span className='font-bold'>$: { getTotalPrice(state.cart) }</span>
        </p>
        <div className='w-full flex justify-center py-4'>
        <button
          type='button' 
          className='bg-gradient-to-b to-secondColor from-yellow-400 font-mainFont text-white font-semibold py-2 px-6 rounded-full'
        >
          Comprar mi Carrito
        </button>
      </div>
      </div>
    </div>
  )
}
