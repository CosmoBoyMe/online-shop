import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './Filter.styles'

import { CheckboxList } from '../CheckboxList/CheckboxList'
import { DualSlider } from '../DualSlider/DualSlider'

import {
  selectBrands,
  selectCategories,
  selectPrice,
  selectStock,
} from '../../store/filters/selectors'

import { updateBrand, updateCategory, updatePrice, updateStock } from '../../store/filters/slice'

const Filter = memo(function Filter() {
  const dispatch = useDispatch()
  const companies = useSelector(selectCategories)
  const brands = useSelector(selectBrands)
  const price = useSelector(selectPrice)
  const stock = useSelector(selectStock)

  const onClickCategory = useCallback((name: string) => {
    dispatch(updateCategory(name))
  }, [])

  const onClickBrand = (name: string) => {
    dispatch(updateBrand(name))
  }

  const onChangePrice = useCallback((newValues: { min: number; max: number }) => {
    // dispatch(updatePrice(newValues))
  }, [])

  const onChangeStock = () => {
    // dispatch(updateStock)
  }

  return (
    <S.Filter>
      <S.FilterCheckboxList>
        <CheckboxList title='Category' items={companies} onClick={onClickCategory} />
      </S.FilterCheckboxList>
      <S.FilterCheckboxList>
        <CheckboxList title='brand' items={brands} onClick={onClickBrand} />
      </S.FilterCheckboxList>
      <DualSlider
        min={price.min}
        max={price.max}
        title='brand'
        mark='usd'
        onChange={onChangePrice}
      />
      <DualSlider
        title='Category'
        min={stock.min}
        max={stock.max}
        mark='pcs'
        onChange={onChangeStock}
      />
    </S.Filter>
  )
})

export { Filter }
