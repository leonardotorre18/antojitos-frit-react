import React from 'react'
import { Product } from '../../types'


type Props = {
  product: Product,
  count: number
}

export default function ProductItem({ product, count }: Props) {
  return (
    <div className='flex justify-between py-1 px-3'>
      <div>
        <h4 className='font-semibold text-lg'>{ product.title }</h4>
        <p className=''>Cantidad en el carrito:  { count }</p>
      </div>
      <div className='h-24 w-40 rounded-lg overflow-hidden'>
        <img 
          className=' object-cover w-full h-full'
          src={ product.imgPath }
        ></img>
      </div>
      
    </div>
  )
}
