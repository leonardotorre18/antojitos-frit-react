import React, { Dispatch } from "react"
import { context } from "../context/Context"
import { getProducts } from "../firebase"
import { updateProducts } from "../context/actions/Products"
import useStorage from "../hooks/useStorage"
import { Product } from "../types"
import { ACTIONS } from "../context/actions"

export const RefreshProducts = async (dispatch: Dispatch<ACTIONS>) => {
  console.log('Get Data To Firebase')
  const response = await getProducts();
  dispatch(updateProducts(response))
  return response
}

export const LoadProduct = () => {
  const { dispatch } = React.useContext(context)
  const [ storage, setStorage ] = useStorage<Product[]>('products', [])

  React.useEffect(()=> {

    if(storage.length > 0) dispatch(updateProducts(storage))
    else {
      const updateState = async () => {
        const response = await RefreshProducts(dispatch)
        setStorage(response)
      }
      updateState()
    }
  }, [])

}

