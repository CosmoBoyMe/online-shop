import { memo } from 'react'
import { CheckboxItem } from '../CheckboxItem'
import * as S from './CheckboxList.styles'

interface ICheckboxList {
  title: string
  items: { title: string; isChecked: boolean }[]
}

const CheckboxList = memo(function CheckboxList({ title, items }: ICheckboxList) {
  return (
    <S.CheckboxList>
      <S.CheckboxListTitle>{title}</S.CheckboxListTitle>
      <S.CheckboxListItems>
        {items.map((item, index) => (
          <CheckboxItem key={item.title + index} title={item.title} isChecked={item.isChecked} />
        ))}
      </S.CheckboxListItems>
    </S.CheckboxList>
  )
})

export { CheckboxList }
