import Jumbotron from '../components/pure/Jumbotron'
import React from 'react'
import GridCard from '../components/containers/GridCard'
import SearchBar from '../components/pure/SearchBar'
import { TProduct } from '../store/types'
import { getAllProducts } from '../services'
import CardFull from '../components/pure/CardFull'

export default function HomeView() {

  const [mainProduct, setMainProduct] = React.useState<TProduct | undefined>()

  React.useEffect(() => {
    getAllProducts((res) => {
      setMainProduct(res[0])
    })
  },[])

  return (
    <>
      <Jumbotron />
      <SearchBar />

      <section className='p-4'>
        <h2
          className='text-4xl pt-2 pb-4 font-extrabold font-mainFont'
        >
          Los más pedidos
        </h2>
        <GridCard />
      </section>

      <section className='p-4'>
        <h2
          className='text-4xl pt-2 pb-4 font-extrabold font-mainFont'
        >
          El especial de la semana
        </h2>
        { mainProduct && <CardFull product={mainProduct} /> }
      </section>

      <div className='w-full flex justify-center py-4'>
        <button
          type='button' 
          className='bg-gradient-to-b to-secondColor from-yellow-400 font-mainFont text-white font-semibold py-2 px-6 rounded-full'
        >
          Ver todo
        </button>
      </div>


    </>
  )
}
