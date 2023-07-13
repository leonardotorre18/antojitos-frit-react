import React from 'react'
import Routes from './routes'
import { LoadProduct } from './services'
import { context } from './context/Context'
import { useUser } from './hooks/useUser'


function App() {
  const {state} = React.useContext(context)
  LoadProduct()
  React.useEffect(() => {
    console.log(state)
  },[state])
  useUser();

  return (
    <>
      <Routes />
    </>
  )
}

export default App
