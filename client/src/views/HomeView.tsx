import React from 'react'
import Jumbotron from '../components/pure/Jumbotron'
import GridCard from '../components/containers/GridCard'
import SearchBar from '../components/pure/SearchBar'
import CardFull from '../components/pure/CardFull'
import { returnProductsById } from '../utils'
import { context } from '../context/Context'

export default function HomeView() {

  const { state } = React.useContext(context)

  return (
    <>
      <Jumbotron />
      {/* <SearchBar /> */}

      <section className='p-4 pt-16'>
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
        { returnProductsById(state.products,'lUHmqcBSwllmra28O6e5') && <CardFull product={returnProductsById(state.products,'lUHmqcBSwllmra28O6e5')} /> }
        </h2>
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
