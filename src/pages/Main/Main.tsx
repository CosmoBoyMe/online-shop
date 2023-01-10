import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { Filter } from '../../components/Filter/Filter'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { selectFilters } from '../../store/filters/selectors'
import {
  syncFiltersWithProducts,
  updateFilters,
  updateFiltersByQueryParams,
} from '../../store/filters/slice'
import { loadProducts } from '../../store/products/asyncThunk'
import { selectProducts } from '../../store/products/selectors'
import { setCurrentProducts } from '../../store/products/slice'
import { RefinementBar } from '../../components/RefinementBar/RefinementBar'

import * as S from './Main.styles'
import { selectSortType } from '../../store/refinement/selectors'
import { SortTypes } from '../../constants/sortList'

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams])
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
    dispatch(setCurrentProducts(products))
    dispatch(syncFiltersWithProducts(products))
    dispatch(updateFiltersByQueryParams(params))
  }, [products])

  useEffect(() => {
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
    filteredProductsBySearchValue = filteredProductsBySearchValue.filter((item) => {
      if (item.price > filters.price.currentValueMax) {
        return false
      } else if (item.price < filters.price.currentValueMin) {
        return false
      }
      return true
    })
    filteredProductsBySearchValue = filteredProductsBySearchValue.filter((item) => {
      if (item.stock > filters.stock.currentValueMax) {
        return false
      } else if (item.stock < filters.stock.currentValueMin) {
        return false
      }
      return true
    })

    const checkedCategories = filters.categories.filter((item) => item.isChecked)
    const checkedBrands = filters.brands.filter((item) => item.isChecked)
    filteredProductsBySearchValue = filteredProductsBySearchValue.filter(({ category, brand }) => {
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

    if (sortType) {
      const [sortBy, order] = sortType.split('-')
      filteredProductsBySearchValue = [...filteredProductsBySearchValue].sort((a, b) => {
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
    dispatch(setCurrentProducts(filteredProductsBySearchValue))
    dispatch(updateFilters(filteredProductsBySearchValue))
  }, [filters, sortType])

  return (
    <S.Main>
      <Filter />
      <S.Content>
        <RefinementBar />
        <S.ProductList>
          {currentProducts.length === 0 && <h3>product not found</h3>}
          {currentProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </S.ProductList>
      </S.Content>
    </S.Main>
  )
}

export { Main }
