import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Filter } from '../../components/Filter/Filter'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { selectFilters } from '../../store/filters/selectors'
import { syncFiltersWithProducts, updateFilters } from '../../store/filters/slice'
import { loadProducts } from '../../store/products/asyncThunk'
import { selectProducts } from '../../store/products/selectors'
import { setCurrentProducts } from '../../store/products/slice'
import * as S from './Main.styles'

const Main = () => {
  const filters = useSelector(selectFilters)
  const { products, currentProducts } = useSelector(selectProducts)
  const dispatch = useDispatch()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    dispatch(loadProducts())
  }, [])

  useEffect(() => {
    dispatch(syncFiltersWithProducts(products))
    dispatch(setCurrentProducts(products))
  }, [products])

  useEffect(() => {
    if (filters.status === 'change') {
      const checkedCategories = filters.categories.filter((item) => item.isChecked)
      const checkedBrands = filters.brands.filter((item) => item.isChecked)

      const filteredProducts = products.filter(({ category, brand }) => {
        const isCategoryChecked = checkedCategories.find((item) => item.name === category)
        if (isCategoryChecked) {
          // const isBrandChecked = checkedBrands.find((item) => item.name === brand)
          // if (isBrandChecked) {
          //   return true
          // }
        }
        return false
      })

      console.log(filteredProducts, 'status', filters.status)
      dispatch(setCurrentProducts(filteredProducts))
      dispatch(updateFilters(filteredProducts))
    }
  }, [filters])

  return (
    <S.Main>
      <S.Content>
        <Filter />
        <S.ProductList>
          {currentProducts.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </S.ProductList>
      </S.Content>
    </S.Main>
  )
}

export { Main }
