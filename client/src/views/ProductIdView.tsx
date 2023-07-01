import React from 'react'
import { useParams, Params } from 'react-router-dom'
import { TProduct } from '../types'
import { getProductsById } from '../firebase'

export default function ProductView() {

  const { idparam } = useParams()

  const id: string = idparam ? idparam : ''

  const [product, setProduct] = React.useState<TProduct | any>(null)

  React.useEffect(() => {
    getProductsById(id, (res) => {
      setProduct(res)
    })
  })
  return product ? 
    <div className='flex flex-nowrap max-w-7xl mx-auto mt-10'>

      <div className='w-1/2 overflow-hidden rounded-lg'>
        <img className='w-full' src={product.imgPath} alt="" />
      </div>

      <div className='w-1/2'>
        <div className='w-full flex justify-end'>
          <button className='bg-gray-300 px-3 py-1 rounded-xl text-white text-lg font-extrabold'>X</button>
        </div>
        <div className='pl-10'>
          <h2 className='text-3xl font-bold my-3'>{product.title}</h2>
          <p className='font-bold opacity-95 hidden'>{product.subtitle}</p>
          <p className='opacity-80 text-lg'>{product.description}</p>
        </div>

      </div>

    </div>
    : <></>
}
