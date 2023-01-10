import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Filter } from '../../components/Filter/Filter'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { selectFilters } from '../../store/filters/selectors'
import { syncFiltersWithProducts, updateFilters } from '../../store/filters/slice'
import { loadProducts } from '../../store/products/asyncThunk'
import { selectProducts } from '../../store/products/selectors'
import { setCurrentProducts } from '../../store/products/slice'
import { RefinementBar } from '../../components/RefinementBar/RefinementBar'

import * as S from './Main.styles'
import { selectSortType } from '../../store/refinement/selectors'
import { SortTypes } from '../../constants/sortList'

const Main = () => {
  const filters = useSelector(selectFilters)
  const { products, currentProducts } = useSelector(selectProducts)
  const sortType = useSelector(selectSortType)
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length === 0) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      dispatch(loadProducts())
    }
  }, [])

  useEffect(() => {
    dispatch(syncFiltersWithProducts(products))
    dispatch(setCurrentProducts(products))
  }, [products])

  useEffect(() => {
    let filteredProducts = currentProducts
    if (filters.status === 'change') {
      let filteredProductsBySearchValue = products
      if (filters.searchValue.length) {
        filteredProductsBySearchValue = products.filter(
          ({ title, price, category, brand, stock }) => {
            if (title.includes(filters.searchValue)) {
              return true
            }
            if (price.toString().includes(filters.searchValue)) {
              return true
            }
            if (category.includes(filters.searchValue)) {
              return true
            }
            if (brand.includes(filters.searchValue)) {
              return true
            }
            if (stock.toString().includes(filters.searchValue)) {
              return true
            }

            return false
          },
        )
      }

      const checkedCategories = filters.categories.filter((item) => item.isChecked)
      const checkedBrands = filters.brands.filter((item) => item.isChecked)
      const newFilteredProducts = filteredProductsBySearchValue.filter(({ category, brand }) => {
        const isCategoryChecked = checkedCategories.find(
          (item) => item.name === category.toLowerCase(),
        )
        const shouldShowAllCategories = checkedCategories.length === 0

        if (shouldShowAllCategories || isCategoryChecked) {
          const isBrandChecked = checkedBrands.find((item) => item.name === brand.toLowerCase())
          const shouldShowAllBrands = checkedBrands.length === 0
          if (shouldShowAllBrands || isBrandChecked) {
            return true
          }
        }
        return false
      })
      filteredProducts = newFilteredProducts
    }

    if (sortType) {
      const [sortBy, order] = sortType.split('-')
      filteredProducts = [...filteredProducts].sort((a, b) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (order === 'acs') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore:next-line
          return a[sortBy] > b[sortBy] ? 1 : -1
        } else {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore:next-line
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore:next-line
          return a[sortBy] < b[sortBy] ? 1 : -1
        }
      })
    }
    dispatch(setCurrentProducts(filteredProducts))
    dispatch(updateFilters(filteredProducts))
  }, [filters, sortType])

  return (
    <S.Main>
      <Filter />
      <S.Content>
        <RefinementBar />
        <S.ProductList>
          {currentProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
        </S.ProductList>
      </S.Content>
    </S.Main>
  )
}

export { Main }
