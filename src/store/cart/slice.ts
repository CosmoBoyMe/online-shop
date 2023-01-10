import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICart, IProductInCart } from './types'

const initialState: ICart = {
  productsInCart: [],
  totalQuantity: 0,
  cartPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProductInCart>) {
      const newProduct = action.payload
      const existingProduct = state.productsInCart.find((item) => item.id === newProduct.id)

      if (existingProduct) {
        existingProduct.quantity++
        existingProduct.price += newProduct.price
        state.totalQuantity++
        state.cartPrice += newProduct.price
      } else {
        state.productsInCart.push(newProduct)
        state.totalQuantity++
        state.cartPrice += newProduct.price
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload
      const existingProduct = state.productsInCart.find((item) => item.id === id)
      if (existingProduct) {
        state.productsInCart = state.productsInCart.filter((item) => item.id !== id)
        state.totalQuantity -= existingProduct.quantity
        state.cartPrice -= existingProduct.price
      }
    },

    incrementQuantityAndPrice(state, action: PayloadAction<number>) {
      const product = state.productsInCart.find((item) => item.id === action.payload)
      if (product) {
        product.quantity++
        product.totalPrice += product.price
        state.totalQuantity++
        state.cartPrice += product.price
      }
    },
    decrementQuantityAndPrice(state, action: PayloadAction<number>) {
      const product = state.productsInCart.find((item) => item.id === action.payload)
      if (product && product.quantity === 1) {
        state.productsInCart = state.productsInCart.filter((item) => item.id !== action.payload)
        state.totalQuantity -= product.quantity
        state.cartPrice -= product.price
      } else if (product) {
        product.quantity--
        product.totalPrice -= product.price
        state.totalQuantity--
        state.cartPrice -= product.price
      }
    },
  },
})

export const { addToCart, removeFromCart, incrementQuantityAndPrice, decrementQuantityAndPrice } =
  cartSlice.actions
export default cartSlice.reducer
