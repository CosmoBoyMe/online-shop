import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IState } from './types'
import { IProduct } from '../products/types'

const initialState: IState = {
  categories: [],
  brands: [],
  price: {
    min: 0,
    max: 1,
    currentValueMin: 1,
    currentValueMax: 0,
  },
  stock: {
    min: 0,
    max: 1,
    currentValueMin: 0,
    currentValueMax: 1,
  },
  searchValue: '',
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
          currentValueMin: 0,
          currentValueMax: 1,
        },
        stock: {
          min: 0,
          max: 1,
          currentValueMin: 0,
          currentValueMax: 1,
        },
        searchValue: '',
        status: 'idle',
      }
      action.payload.reduce((prev, item) => {
        const { category, brand, price, stock } = item
        const foundCategory = prev.categories.find((item) => item.name === category.toLowerCase())
        if (foundCategory) {
          foundCategory.currentAmount += 1
          foundCategory.totalAmount += 1
        } else {
          prev.categories.push({
            name: category.toLowerCase(),
            isChecked: false,
            currentAmount: 1,
            totalAmount: 1,
          })
        }
        const foundBrand = prev.brands.find((item) => item.name === brand.toLowerCase())
        if (foundBrand) {
          foundBrand.currentAmount += 1
          foundBrand.totalAmount += 1
        } else {
          prev.brands.push({
            name: brand.toLowerCase(),
            isChecked: false,
            currentAmount: 1,
            totalAmount: 1,
          })
        }
        if (price > prev.price.max) {
          prev.price.max = price
          prev.price.currentValueMax = price
        } else if (price < prev.price.min) {
          prev.price.min = price
          prev.price.currentValueMin = price
        }
        if (stock > prev.stock.max) {
          prev.stock.max = stock
          prev.stock.currentValueMax = stock
        } else if (stock < prev.stock.min) {
          prev.stock.min = stock
          prev.stock.currentValueMin = stock
        }
        return prev
      }, newState)
      console.log(newState)
      return newState
    },

    updateFilters(state, action: PayloadAction<IProduct[]>) {
      const categories: Record<string, number> = {}
      const brands: Record<string, number> = {}

      action.payload.forEach(({ category, brand, price }) => {
        const categoryInLowerCase = category.toLowerCase()
        const brandInLowerCase = brand.toLowerCase()
        if (categories[categoryInLowerCase]) {
          categories[categoryInLowerCase] += 1
        } else {
          categories[categoryInLowerCase] = 1
        }
        if (brands[brandInLowerCase]) {
          brands[brandInLowerCase] += 1
        } else {
          brands[brandInLowerCase] = 1
        }
      })
      state.categories.forEach((item) => (item.currentAmount = categories[item.name] ?? 0))
      state.brands.forEach((item) => (item.currentAmount = brands[item.name] ?? 0))
      state.status = 'idle'
    },

    resetFilters(state) {
      state.categories.forEach((item) => (item.isChecked = false))
      state.brands.forEach((item) => (item.isChecked = false))
      state.price.currentValueMin = state.price.min
      state.price.currentValueMax = state.price.max
      state.stock.currentValueMin = state.stock.min
      state.stock.currentValueMin = state.stock.max
      state.status = 'change'
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

    updatePrice(state, action: PayloadAction<{ min: number; max: number }>) {
      state.price.currentValueMin = action.payload.min
      state.price.currentValueMax = action.payload.max
      state.status = 'change'
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
      state.status = 'change'
    },

    updateStock(state, action: PayloadAction<{ min: number; max: number }>) {
      state.stock.currentValueMin = action.payload.min
      state.stock.currentValueMax = action.payload.max
      state.status = 'change'
    },
  },
})

export const {
  setSearchValue,
  syncFiltersWithProducts,
  updateFilters,
  updateCategory,
  updateBrand,
  updatePrice,
  updateStock,
} = filterSlice.actions
export default filterSlice.reducer
