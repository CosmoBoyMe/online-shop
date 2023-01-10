import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IState } from './types'
import { IProduct } from '../products/types'

const initialState: IState = {
  categories: [],
  brands: [],
  price: {
    min: 0,
    max: 0,
    currentValueMin: 0,
    currentValueMax: 0,
  },
  stock: {
    min: 0,
    max: 1,
    currentValueMin: 0,
    currentValueMax: 1,
  },
  searchValue: '',
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
          max: 0,
          currentValueMin: 0,
          currentValueMax: 0,
        },
        stock: {
          min: 0,
          max: 1,
          currentValueMin: 0,
          currentValueMax: 1,
        },
        searchValue: '',
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
      return newState
    },

    updateFilters(state, action: PayloadAction<IProduct[]>) {
      const categories: Record<string, number> = {}
      const brands: Record<string, number> = {}

      action.payload.forEach(({ category, brand }) => {
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
    },

    resetFilters(state) {
      state.categories.forEach((item) => (item.isChecked = false))
      state.brands.forEach((item) => (item.isChecked = false))
      state.price.currentValueMin = 0
      state.price.currentValueMax = state.price.max
      state.stock.currentValueMin = 0
      state.stock.currentValueMax = state.stock.max
      state.searchValue = ''
    },

    updateCategory(state, action: PayloadAction<string>) {
      const currentCategory = state.categories.find(({ name }) => name === action.payload)
      if (currentCategory) {
        currentCategory.isChecked = !currentCategory.isChecked
      }
    },

    updateBrand(state, action: PayloadAction<string>) {
      const currentBrand = state.brands.find(({ name }) => name === action.payload)
      if (currentBrand) {
        currentBrand.isChecked = !currentBrand.isChecked
      }
    },

    updatePrice(state, action: PayloadAction<{ min: number; max: number }>) {
      state.price.currentValueMin = action.payload.min
      state.price.currentValueMax = action.payload.max
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },

    updateFiltersByQueryParams(state, action) {
      const { category, brands, price, stock } = action.payload

      const categoriesNames: string[] = category
        ?.split('↕')
        .forEach((item: string) => item.toLowerCase())
      if (categoriesNames?.length > 0) {
        state.categories.forEach((item) => {
          if (categoriesNames.includes(item.name)) {
            item.isChecked = true
          }
        })
      }

      const brandsNames: string = brands?.split('↕').forEach((item: string) => item.toLowerCase())
      if (brandsNames?.length) {
        state.brands.forEach((item) => {
          if (brandsNames.includes(item.name)) {
            item.isChecked
          }
        })
      }

      const priceValues: number[] = price?.split('↕').forEach((item: string) => Number(item))
      if (priceValues) {
        const [priceMin, priceMax] = priceValues
        if (priceMax > state.price.currentValueMax) {
          state.price.currentValueMax = priceMax
        } else if (priceMin < state.price.currentValueMin) {
          state.price.currentValueMin = priceMin
        }
      }

      const stockValues: number[] = stock?.split('↕').forEach((item: string) => Number(item))
      if (stockValues) {
        const [stockMin, stockMax] = stockValues
        if (stockMax > state.stock.currentValueMax) {
          state.stock.currentValueMax = stockMax
        } else if (stockMin < state.stock.currentValueMin) {
          state.stock.currentValueMin = stockMin
        }
      }
    },

    updateStock(state, action: PayloadAction<{ min: number; max: number }>) {
      state.stock.currentValueMin = 0
      state.stock.currentValueMax = action.payload.max
    },
  },
})

export const {
  setSearchValue,
  syncFiltersWithProducts,
  resetFilters,
  updateFilters,
  updateCategory,
  updateBrand,
  updatePrice,
  updateStock,
  updateFiltersByQueryParams,
} = filterSlice.actions
export default filterSlice.reducer
