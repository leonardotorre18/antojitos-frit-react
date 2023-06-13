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
    <div className='grid grid-cols-4 gap-y-8 p-4'>
      {/* {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        .map(id => (
          <Card key={id} />
        ))
      } */}
      {
        products.map((product: TProduct) => (
          <Card product={product} />
        ))
      }
    </div>
  )
}
