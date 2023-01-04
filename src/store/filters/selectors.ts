import { RootState } from '../index'

const selectFilters = (state: RootState) => state.filters
const selectCategories = (state: RootState) => state.filters.categories
const selectBrands = (state: RootState) => state.filters.brands
const selectPrice = (state: RootState) => state.filters.price
const selectStock = (state: RootState) => state.filters.stock

export { selectFilters, selectCategories, selectBrands, selectPrice, selectStock }
