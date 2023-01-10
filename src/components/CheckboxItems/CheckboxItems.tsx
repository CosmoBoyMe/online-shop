import { memo } from 'react'
import { Amount } from '../Amount/Amount'
import { CheckboxItem } from '../CheckboxItem/CheckboxItem'
import * as S from './CheckboxItems.styles'

interface ICheckboxItems {
  title: string
  items: { name: string; isChecked: boolean; currentAmount: number; totalAmount: number }[]
  onClick: (name: string) => void
}

const CheckboxItems = memo(function CheckboxList({ title, items, onClick }: ICheckboxItems) {
  return (
    <S.CheckboxItems>
      <S.Title>{title}</S.Title>
      <S.List>
        {items.map(({ name, isChecked, currentAmount, totalAmount }, index) => (
          <S.ListItem key={name + index}>
            <CheckboxItem onClick={onClick} title={name} isChecked={isChecked} />
            <Amount currentAmount={currentAmount} totalAmount={totalAmount} />
          </S.ListItem>
        ))}
      </S.List>
    </S.CheckboxItems>
  )
})

export { CheckboxItems }
