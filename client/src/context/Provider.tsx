import React from 'react'
import { context } from './Context';
import Reducers from './reducers'

interface Props {
  children: React.ReactElement
}

const Provider: React.FC<Props> = ({ children }) => {

  const { Provider } = context;
  const [ state, dispatch ] = Reducers();
  

  return ( 
    <Provider value={{ state, dispatch }}>

      {children}

    </Provider>
  )
}

export default Provider
