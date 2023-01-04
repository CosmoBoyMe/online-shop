import { memo } from 'react'
import * as S from './CheckboxItem.styles'

interface ICheckboxItem {
  title: string
  isChecked: boolean
  onClick: (name: string) => void
}

const CheckboxItem = memo(function CheckboxItem({ title, isChecked, onClick }: ICheckboxItem) {
  return (
    <S.CheckboxItem onClick={() => onClick(title)}>
      <S.CheckboxInput
        onClick={(event) => event.stopPropagation()}
        type='checkbox'
        checked={isChecked}
      />
      <S.CheckboxBox></S.CheckboxBox>
      <S.CheckboxTitle onClick={() => onClick(title)}>{title}</S.CheckboxTitle>
    </S.CheckboxItem>
  )
})

export { CheckboxItem }
