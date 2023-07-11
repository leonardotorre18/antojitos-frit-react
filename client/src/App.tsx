
import Routes from './routes'
import { LoadProduct } from './services'


function App() {
  LoadProduct()

  return (
    <>
      <Routes />
    </>
  )
}

export default App
