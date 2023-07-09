import React from 'react'
import Card from '../pure/Card'

import { Product } from "../../types"
import { context } from '../../context/Context'
import { updateProducts } from '../../context/actions/Products'
import { getProducts } from '../../firebase'


export default function GridCard() {

  const [list, setList] = React.useState<Product[]>([])

  const { state, dispatch } = React.useContext(context)
  
  React.useEffect(()=> {
    const updateState = async () => {
      const response = await getProducts();
      dispatch(updateProducts(response))
    }
    updateState()
    setList(state.products)
  }, [state.products, dispatch])
  

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto' >
      {
        list.map((product: Product) => (
          <Card product={product} key={product.id} />
        ))
      }
    </div>
  )
}
