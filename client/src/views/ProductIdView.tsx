import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BsCartPlusFill } from 'react-icons/bs'
import { TProduct } from '../types'
import { getProductsById } from '../firebase'

export default function ProductView() {

  const navigate = useNavigate()

  const goBackNavigate = () => navigate(-1)

  const { idparam } = useParams()

  const id: string = idparam ? idparam : ''

  const [product, setProduct] = React.useState<TProduct | any>(null)

  React.useEffect(() => {
    getProductsById(id, (res) => {
      setProduct(res)
    })
  })
  return product ? 
    <div className='max-w-7xl mx-auto mt-10'>
      <div className='flex flex-nowrap '>

        <div className='w-1/2 overflow-hidden rounded-lg'>
          <img className='w-full' src={product.imgPath} alt="" />
        </div>

        <div className='w-1/2'>
          <div className='w-full flex justify-end'>
            <button onClick={goBackNavigate} className='bg-gray-300 px-3 py-1 rounded-xl text-white text-lg font-extrabold'>X</button>
          </div>
          <div className='pl-10'>
            <div>
              <h2 className='text-3xl font-bold my-3'>{product.title}</h2>
              <p className='font-bold opacity-95 hidden'>{product.subtitle}</p>
              <p className='opacity-80 text-lg'>{product.description}</p>
            </div>

            <div className='flex justify-center w-full m-10'>
              <div className='flex items-center shadow-lg p-1'>
                <button className='rounded-lg bg-secondColor text-2xl font-bold h-10 w-10 flex items-center justify-center text-white'>-</button>
                <span className='mx-6 text-lg'>10</span>
                <button className='rounded-lg bg-secondColor text-2xl font-bold h-10 w-10 flex items-center justify-center text-white'>+</button>
              </div>
            </div>

            <p className=' text-right font-bold text-xl'>Total a pagar: {product.price}</p>

          </div>

        </div>

      </div>

      <div className='mt-10 flex w-full justify-center'>
        <button className='rounded-lg bg-secondColor text-xl flex items-center gap-4 py-2 px-5 justify-center text-white'>
          <BsCartPlusFill className='text-white text-3xl' />
          Agregar al carrito
        </button>
      </div>

    </div>
    : <></>
}
