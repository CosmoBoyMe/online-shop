import * as S from './Filter.styles'

import { CheckboxList } from '../CheckboxList/CheckboxList'
import { DualSlider } from '../DualSlider/DualSlider'

const mockCategories = [
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: true },
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: true },
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: true },
  { title: 'laptops', isChecked: false },
  { title: 'laptops', isChecked: false },
]

const Filter = () => {
  return (
    <S.Filter>
      <S.FilterCheckboxList>
        <CheckboxList title='brand' items={mockCategories} />
      </S.FilterCheckboxList>
      <S.FilterCheckboxList>
        <CheckboxList title='Category' items={mockCategories} />
      </S.FilterCheckboxList>
      <DualSlider
        min={40}
        max={1004}
        title='brand'
        mark='usd'
        onChange={() => {
          console.log(1)
        }}
      />
      <DualSlider
        title='Category'
        min={4}
        max={54}
        mark='pcs'
        onChange={() => {
          console.log(1)
        }}
      />
    </S.Filter>
  )
}

export { Filter }
