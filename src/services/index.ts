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
  dispatch(updateProducts(response));
  return response;
}

export const LoadProduct = () => {
  const { dispatch, state} = React.useContext(context)
  const [ storage, setStorage ] = useStorage<Product[]>('products', [])
  const [ lastFetchDate, setLastFetchDate ] = useStorage<string>("lastFetchDate", new Date().toISOString())

  
  React.useEffect(()=> {
    
    const updateState = async () => {
      console.log('Petición al servidor...')
      const response = await RefreshProducts(dispatch)
      setStorage(response)
    }

    if (
      lastFetchDate && new Date().getTime() - new Date(lastFetchDate).getTime() < 5 * 60 * 1000
      &&
      storage.length > 0
    ) dispatch(updateProducts(storage));

    else {
      updateState();
      setLastFetchDate(new Date().toISOString());
    }

  }, [])

}

