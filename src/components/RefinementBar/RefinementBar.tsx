import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './RefinementBar.styles'
// eslint-disable-next-line no-duplicate-imports
import { sortList, SortTypes } from '../../constants/sortList'
import { setSortType } from '../../store/refinement/slice'
import { setSearchValue } from '../../store/filters/slice'

const RefinementBar = () => {
  const dispatch = useDispatch()
  const handleOnChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    if (Object.values(SortTypes).includes(value as SortTypes)) {
      dispatch(setSortType(value as SortTypes))
    }
  }

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    dispatch(setSearchValue(value))
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
      <div className='found'></div>
      <input onChange={handleOnChangeInput} type='text' />
    </S.RefinementBar>
  )
}

export { RefinementBar }
