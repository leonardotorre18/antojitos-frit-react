import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice
  }
})

export type TState =  ReturnType<typeof store.getState>

export type TDispatch = typeof store.dispatch

export default store
