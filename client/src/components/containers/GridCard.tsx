import React from 'react'
import Card from '../pure/Card'

import { TProduct } from '../../store/types/index'
import { getProducts } from '../../firebase'

export default function GridCard() {

  const [products, setProducts] = React.useState<any>([])

  React.useEffect(()=> {
    getProducts(res => setProducts(res))
  }, [])

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto' >
      {
        products.map((product: TProduct) => (
          <Card product={product} key={product.id} />
        ))
      }
    </div>
  )
}
