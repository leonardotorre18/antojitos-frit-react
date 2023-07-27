import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BsCartPlusFill } from 'react-icons/bs'
import { getProductById } from '../firebase'
import { Product } from '../types'
import { context } from '../context/Context'
import { addToCart } from '../context/actions/Cart'

export default function ProductView() {

  const navigate = useNavigate()
  const goBackNavigate = () => navigate(-1)
  const { idparam } = useParams()
  const id: string = idparam ? idparam : ''
  const { dispatch } = React.useContext(context)

  const [ count, setCount ] = React.useState<number>(1)

  const incrementCount = () => setCount(count+1)
  const decrementCount = () => setCount( count > 1 ? count - 1 : count)


  const [product, setProduct] = React.useState<Product>()


  const pushNewProduct = () => {
    product && dispatch(addToCart(product, count))
    setCount(1)
    navigate('/cart')
  }


  React.useEffect(()=> {
    const loadProduct = async (): Promise<void> => {
      const response = await getProductById(id)
      setProduct({...response, id})
    }
    loadProduct()
  }, [id])

  return product ? 
    <div className='max-w-7xl mx-auto mt-10 py-8 px-6'>
      <div className='sm:flex sm:flex-nowrap '>

        <div className='sm:w-1/2 mb-6 sm:mb-0 overflow-hidden rounded-lg'>
          <img className='w-full' src={product.imgPath} alt="" />
        </div>

        <div className='sm:w-1/2'>
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
                <button
                  onClick={decrementCount}
                  className='rounded-lg bg-secondColor text-2xl font-bold h-10 w-10 flex items-center justify-center text-white'
                >
                  -
                </button>
                <span className='mx-6 text-lg'>{ count }</span>
                <button
                  onClick={incrementCount}
                  className='rounded-lg bg-secondColor text-2xl font-bold h-10 w-10 flex items-center justify-center text-white'
                >
                  +
                </button>
              </div>
            </div>

            <p className=' text-right font-bold text-xl'>Total a pagar: {product.price}</p>

          </div>

        </div>

      </div>

      <div className='mt-10 flex w-full justify-center'>
        <button
          onClick={pushNewProduct}
          className='rounded-lg bg-secondColor text-xl flex items-center gap-4 py-2 px-5 justify-center text-white'
        >
          <BsCartPlusFill className='text-white text-3xl' />
          Agregar al carrito
        </button>
      </div>

    </div>
    : <></>
}
