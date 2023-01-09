import { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SCREENS } from '../../routes/endpoints'

import * as S from './Filter.styles'

import { CheckboxItems } from '../CheckboxItems/CheckboxItems'
import { DualSlider } from '../DualSlider/DualSlider'

import {
  selectBrands,
  selectCategories,
  selectPrice,
  selectStock,
} from '../../store/filters/selectors'

import { updateBrand, updateCategory, updatePrice, updateStock } from '../../store/filters/slice'

const Filter = memo(function Filter() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const companies = useSelector(selectCategories)
  const brands = useSelector(selectBrands)
  const price = useSelector(selectPrice)
  const stock = useSelector(selectStock)
  const [copyButtonText, setCopyButtonText] = useState('copy-link')

  const onClickCategory = useCallback((name: string) => {
    dispatch(updateCategory(name))
  }, [])

  const onClickBrand = (name: string) => {
    dispatch(updateBrand(name))
  }

  const onChangePrice = useCallback((newValues: { min: number; max: number }) => {
    dispatch(updatePrice(newValues))
  }, [])

  const onChangeStock = (newValues: { min: number; max: number }) => {
    dispatch(updateStock(newValues))
  }

  const handleClickResetFiltersButton = useCallback(() => {
    navigate(SCREENS.MAIN)
  }, [])

  const handleClickCopyButton = useCallback(() => {
    const currentHref = window.location.href
    navigator.clipboard.writeText(currentHref)
    setCopyButtonText('copied!')
    setTimeout(() => {
      setCopyButtonText('copy-link')
    }, 1000)
  }, [])
  return (
    <S.Filter>
      <S.Buttons>
        <S.Button onClick={handleClickResetFiltersButton}>reset filters</S.Button>
        <S.Button onClick={handleClickCopyButton}>{copyButtonText}</S.Button>
      </S.Buttons>
      <S.FilterCheckboxItems>
        <CheckboxItems title='Category' items={companies} onClick={onClickCategory} />
      </S.FilterCheckboxItems>
      <S.FilterCheckboxItems>
        <CheckboxItems title='brand' items={brands} onClick={onClickBrand} />
      </S.FilterCheckboxItems>
      <DualSlider
        min={price.min}
        max={price.max}
        currentMinValue={price.currentValueMin}
        currentMaxValue={price.currentValueMax}
        title='Price'
        mark='usd'
        onChange={onChangePrice}
      />
      <DualSlider
        title='Stock'
        min={stock.min}
        max={stock.max}
        currentMinValue={stock.currentValueMin}
        currentMaxValue={stock.currentValueMax}
        mark='pcs'
        onChange={onChangeStock}
      />
    </S.Filter>
  )
})

export { Filter }
