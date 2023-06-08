import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { TProduct } from '../types';

const initialState: TProduct[] = []

const slice =  createSlice({

  name: 'cart',

  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>): TProduct[] => 
      [
        ...state,
        action.payload
      ],
    
    clearCart: (): never[] => []
  }
})

export const { addToCart, clearCart } = slice.actions;

export default slice.reducer;
