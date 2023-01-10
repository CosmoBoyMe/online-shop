import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
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

import {
  updateBrand,
  updateCategory,
  updatePrice,
  updateStock,
  resetFilters,
} from '../../store/filters/slice'
import { resetSortType } from '../../store/refinement/slice'
import { option } from 'yargs'

const Filter = memo(function Filter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const companies = useSelector(selectCategories)
  const brands = useSelector(selectBrands)
  const price = useSelector(selectPrice)
  const stock = useSelector(selectStock)
  const [copyButtonText, setCopyButtonText] = useState('copy-link')

  const onClickCategory = useCallback(
    (name: string) => {
      dispatch(updateCategory(name))
      const { category } = params
      const newCategoryParam = category ? category + '↕' + name.toLowerCase() : name.toLowerCase()
      if (category?.includes(name.toLowerCase())) {
        const newCategory = category
          ?.split('↕')
          .filter((item) => item !== name.toLowerCase())
          .join('↕')
        if (newCategory.length < 1) {
          searchParams.delete('category')
          setSearchParams(searchParams)
        } else {
          searchParams.set('category', newCategory)
          setSearchParams(searchParams)
        }
      } else {
        searchParams.set('category', newCategoryParam)
        setSearchParams(searchParams)
      }
    },
    [params],
  )

  const onClickBrand = useCallback(
    (name: string) => {
      dispatch(updateBrand(name))
      const { brand } = params
      const newBrandParam = brand ? brand + '↕' + name.toLowerCase() : name.toLowerCase()
      if (brand?.includes(name.toLowerCase())) {
        const newBrand = brand
          ?.split('↕')
          .filter((item) => item !== name.toLowerCase())
          .join('↕')
        if (newBrand.length < 1) {
          searchParams.delete('brand')
          setSearchParams(searchParams)
        } else {
          searchParams.set('brand', newBrand)
          setSearchParams(searchParams)
        }
      } else {
        searchParams.set('brand', newBrandParam)
        setSearchParams(searchParams)
      }
    },
    [params],
  )

  const onChangePrice = useCallback((newValues: { min: number; max: number }) => {
    searchParams.set('price', `${newValues.min}↕${newValues.max}`)
    setSearchParams(searchParams)

    dispatch(updatePrice(newValues))
  }, [])

  const onChangeStock = useCallback((newValues: { min: number; max: number }) => {
    dispatch(updateStock(newValues))
    searchParams.set('stock', `${newValues.min}↕${newValues.max}`)
    setSearchParams(searchParams)
  }, [])

  const handleClickResetFiltersButton = useCallback(() => {
    dispatch(resetFilters())
    dispatch(resetSortType())
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
