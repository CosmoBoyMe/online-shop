import { configureStore } from '@reduxjs/toolkit'
import filters from './filters/slice'
import products from './products/slice'
import refinements from './refinement/slice'

export const store = configureStore({
  reducer: {
    filters,
    products,
    refinements,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
