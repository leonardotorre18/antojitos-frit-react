import axios from "axios"
import { TProduct } from "../store/types"


type Callback = (data: TProduct[]) => void

export const getAllProducts = async (callback: Callback) => {
  axios.get('http://localhost:3000/products')
    .then(res => callback(res.data))
  
}