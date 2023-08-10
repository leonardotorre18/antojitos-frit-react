import React from 'react'
import { Product } from '../../types'
import { context } from '../../context/Context'
import { deleteToCart } from '../../context/actions/Cart'
import { useNavigate } from 'react-router-dom'


type Props = {
  product: Product,
  count: number
}

export default function ProductItem({ product, count }: Props) {

  const { dispatch } = React.useContext(context)

  const deleteProduct = () => dispatch(deleteToCart(product.id))

  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate('/products/' + product.id)
  } 

  return (
    <div className='flex justify-between py-1 px-3' key={product.id}>

      <div className='h-24 w-40 rounded-lg overflow-hidden cursor-pointer' onClick={navigateToProduct}>
        <img 
          className=' object-cover w-full h-full'
          src={ product.imgPath }
        ></img>
      </div>

      <div className='w-full px-4'>
        <h4 className='font-semibold text-lg cursor-pointer' onClick={navigateToProduct}>{ product.title }</h4>
        <p className=''>Cantidad en el carrito:  <span className='font-bold'>{ count }</span></p>
        <p className=''>Precio por unidad:  <span className='font-bold'>{ product.price }</span></p>
      </div>

      <div>
        <button 
          onClick={deleteProduct}
          className=' bg-red-700 text-white py-1 px-4 rounded-lg'
        >
          Eliminar
        </button>
      </div>
      
    </div>
  )
}
