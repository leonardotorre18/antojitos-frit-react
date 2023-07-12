import React from 'react'
import Routes from './routes'
import { LoadProduct } from './services'
import { context } from './context/Context'


function App() {
  LoadProduct()
  const {state} = React.useContext(context)
  React.useEffect(() => {
    console.log(state)
  },[state])

  return (
    <>
      <Routes />
    </>
  )
}

export default App
