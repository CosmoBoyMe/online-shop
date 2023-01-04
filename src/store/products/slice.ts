import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loadProducts } from './asyncThunk'

import { IProductState, IProduct } from './types'

const initialState: IProductState = {
  products: [],
  currentProducts: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload
    },
    setCurrentProducts(state, action: PayloadAction<IProduct[]>) {
      state.currentProducts = action.payload
    },
  },
  extraReducers: {
    // [loadProducts.pending.type]: (state) => {
    //   console.log('pending')
    // },
    [loadProducts.fulfilled.type]: (state, action) => {
      productSlice.caseReducers.setProducts(state, action)
    },
    // [loadProducts.rejected.type]: (state, action) => {},
  },
})

export const { setProducts, setCurrentProducts } = productSlice.actions
export default productSlice.reducer
