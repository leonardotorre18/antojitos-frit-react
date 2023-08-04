import React from 'react'
import FormProduct from '../components/forms/FormProduct'
import { context } from '../context/Context'
import { deleteProductFirebase } from '../firebase/Products'
import { deleteProduct } from '../context/actions/Products'
import { RefreshProducts } from '../services'
import { deleteObject, ref } from 'firebase/storage'
import { db } from '../firebase'
import { deleteImage } from '../firebase/images'


export default function AdminView() {

  const { state, dispatch } = React.useContext(context)

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold'>Dashboard</h2>

      <div className='py-4 max-w-4xl mx-auto'>
        <h3 className='text-lg'>Formulario para nuevos productos</h3>
        <FormProduct />
      </div>


      <div>
        <h3 className='text-lg'>Lista de productos</h3>
        <div className='flex flex-col w-full gap-3 p-3'>
          {
            state.products.map( product => (
              <div key={product.id} className='flex w-full justify-between'>
                <h5>{product.title}</h5>
                <button 
                  onClick={async () => {
                    console.log(product.id)
                    dispatch(deleteProduct(product.id))
                    await deleteProductFirebase(product.id)
                    await deleteImage(product.imgPath)
                    RefreshProducts(dispatch)
                  }}
                  className=' bg-red-700 text-white py-1 px-4 rounded-lg'>Eliminar producto</button>
              </div>
            ))
          }
        </div>
      </div>






    </div>
  )
}
