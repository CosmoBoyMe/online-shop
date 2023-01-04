import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IState, ICategory, IBrand, IPrice, IStock } from './types'
import { IProduct } from '../products/types'
import { setCurrentProducts } from '../products/slice'

const initialState: IState = {
  categories: [],
  brands: [],
  price: {
    min: 0,
    max: 1,
    currentValue: null,
  },
  stock: {
    min: 0,
    max: 1,
    currentValue: null,
  },
  status: 'idle',
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    syncFiltersWithProducts(state, action: PayloadAction<IProduct[]>) {
      const newState: IState = {
        categories: [],
        brands: [],
        price: {
          min: 0,
          max: 1,
          currentValue: null,
        },
        stock: {
          min: 0,
          max: 1,
          currentValue: null,
        },
        status: 'idle',
      }

      action.payload.reduce((prev, item) => {
        const { category, brand, price } = item
        const foundCategory = prev.categories.find((item) => item.name === category)
        if (foundCategory) {
          foundCategory.totalAmount += 1
        } else {
          prev.categories.push({
            name: category,
            isChecked: false,
            currentAmount: 0,
            totalAmount: 1,
          })
        }
        const foundBrand = prev.brands.find((item) => item.name === brand)
        if (foundBrand) {
          foundBrand.totalAmount += 1
        } else {
          prev.brands.push({ name: brand, isChecked: false, currentAmount: 0, totalAmount: 1 })
        }
        if (price > prev.price.max) {
          prev.price.max = price
        } else if (price < prev.price.min) {
          prev.price.min = price
        }
        return prev
      }, newState)

      return newState
    },

    updateFilters(state, action: PayloadAction<IProduct[]>) {
      const categories: Record<string, number> = {}
      const brands: Record<string, number> = {}

      action.payload.forEach(({ category, brand }) => {
        if (categories[category]) {
          categories[category] += 1
        } else {
          categories[category] = 1
        }
        if (brands[brand]) {
          brands[brand] += 1
        } else {
          brands[brand] = 1
        }
      })

      state.categories.forEach((item) => (item.currentAmount = categories[item.name] ?? 0))
      state.brands.forEach((item) => (item.currentAmount = brands[item.name] ?? 0))
      state.status = 'idle'
    },

    updateCategory(state, action: PayloadAction<string>) {
      const currentCategory = state.categories.find(({ name }) => name === action.payload)
      if (currentCategory) {
        currentCategory.isChecked = !currentCategory.isChecked
        state.status = 'change'
      }
    },

    updateBrand(state, action: PayloadAction<string>) {
      const currentBrand = state.brands.find(({ name }) => name === action.payload)
      if (currentBrand) {
        currentBrand.isChecked = !currentBrand.isChecked
        state.status = 'change'
      }
    },

    updatePrice(state, action: PayloadAction<IPrice>) {
      state.price = action.payload
    },

    updateStock(state, action: PayloadAction<IStock>) {
      state.stock = action.payload
    },
  },
})

export const {
  syncFiltersWithProducts,
  updateFilters,
  updateCategory,
  updateBrand,
  updatePrice,
  updateStock,
} = filterSlice.actions
export default filterSlice.reducer
