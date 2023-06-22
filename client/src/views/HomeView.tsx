import Jumbotron from '../components/pure/Jumbotron'
import GridCard from '../components/containers/GridCard'
import SearchBar from '../components/pure/SearchBar'

export default function HomeView() {
  return (
    <>
      <Jumbotron />
      <SearchBar />
      <GridCard />
    </>
  )
}
