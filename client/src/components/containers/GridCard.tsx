import React from 'react'
import Card from '../pure/Card'
import { Product } from "../../types"
import { context } from '../../context/Context'
import { RefreshProducts } from '../../services'

export default function GridCard() {

  const { state, dispatch } = React.useContext(context)
  
  const handlerButtonRefresh = () => RefreshProducts(dispatch)

  return (
    <>
    <button 
      onClick={handlerButtonRefresh}
      className='bg-neutral-900 text-white  py-2 px-6 rounded-lg shadow-lg my-10'
    >
        Actualizar Productos
    </button>

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto' >
      {
        state.products.map((product: Product) => (
          <Card product={product} key={product.id} />
        ))
      }
    </div>
    </>
  )
}
