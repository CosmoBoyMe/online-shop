import { memo } from 'react'
import { CheckboxItem } from '../CheckboxItem/CheckboxItem'
import * as S from './CheckboxList.styles'

interface ICheckboxList {
  title: string
  items: { name: string; isChecked: boolean; currentAmount: number; totalAmount: number }[]
  onClick: (name: string) => void
}

const CheckboxList = memo(function CheckboxList({ title, items, onClick }: ICheckboxList) {
  return (
    <S.CheckboxList>
      <S.CheckboxListTitle>{title}</S.CheckboxListTitle>
      <S.CheckboxListItems>
        {items.map(({ name, isChecked, currentAmount, totalAmount }, index) => (
          <>
            <CheckboxItem onClick={onClick} key={name + index} title={name} isChecked={isChecked} />
            <div className='currentAmount'>{currentAmount}</div>
            <div className='totalAmount'>{totalAmount}</div>
          </>
        ))}
      </S.CheckboxListItems>
    </S.CheckboxList>
  )
})

export { CheckboxList }
