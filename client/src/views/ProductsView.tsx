import Jumbotron from '../components/pure/Jumbotron'
import React from 'react'
import GridCard from '../components/containers/GridCard'
import SearchBar from '../components/pure/SearchBar'
import { getProductsById } from '../firebase'

export default function HomeView() {

  const [mainProduct, setMainProduct] = React.useState<any>(null)

  React.useEffect(()=> {
    getProductsById(
      's1PjctXU4fIEOnFxPqIt',
      res => setMainProduct(res)
    )
  }, [])


  return (
    <>
      <Jumbotron />
      <SearchBar />

      <section className='p-4'>
        <GridCard />
      </section>

    </>
  )
}
