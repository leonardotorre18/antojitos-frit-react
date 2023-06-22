import React from 'react'
import Card from '../pure/Card'
import { getAllProducts } from '../../services'
import { TProduct } from '../../store/types/index'

export default function GridCard() {

  const [products, setProducts] = React.useState<TProduct[]>([])

  React.useEffect(() => {
    getAllProducts(res => setProducts(res))
  },[])


  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-4 max-w-7xl mx-auto' >
      {
        products.map((product: TProduct) => (
          <Card product={product} />
        ))
      }
    </div>
  )
}
