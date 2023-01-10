import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import * as S from './RefinementBar.styles'
// eslint-disable-next-line no-duplicate-imports
import { sortList, SortTypes } from '../../constants/sortList'
import { setSortType } from '../../store/refinement/slice'
import { setSearchValue } from '../../store/filters/slice'
import { selectCurrentProducts } from '../../store/products/selectors'

const RefinementBar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const currentProducts = useSelector(selectCurrentProducts)
  const searchValue = useSelector((state: any) => state.filters.searchValue)
  const handleOnChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    if (Object.values(SortTypes).includes(value as SortTypes)) {
      dispatch(setSortType(value as SortTypes))
    }
    searchParams.set('sort', value)
    setSearchParams(searchParams)
  }

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    dispatch(setSearchValue(value))
    searchParams.set('search', value)
    setSearchParams(searchParams)
  }

  return (
    <S.RefinementBar>
      <select defaultValue='DEFAULT' onChange={handleOnChangeSelect}>
        <option value='DEFAULT' disabled>
          sort options:
        </option>
        {sortList.map(({ name, sortType }, index) => (
          <option key={sortType + index} value={sortType}>
            {name}
          </option>
        ))}
      </select>
      <div className='found'>found: {currentProducts.length}</div>
      <input onChange={handleOnChangeInput} type='text' value={searchValue} />
    </S.RefinementBar>
  )
}

export { RefinementBar }
