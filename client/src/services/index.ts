import axios from "axios"
import { TProduct } from "../store/types"

const url: string = import.meta.env.VITE_API_URL

type Callback = (data: TProduct[]) => void

export const getAllProducts = async (callback: Callback) => {
  axios.get(`${url}products`)
    .then(res => callback(res.data))
  
}