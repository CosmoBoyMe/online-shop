import { memo } from 'react'
import * as S from './CheckboxItem.styles'

interface ICheckboxItem {
  title: string
  isChecked: boolean
}

const CheckboxItem = memo(function CheckboxItem({ title, isChecked }: ICheckboxItem) {
  return (
    <S.CheckboxItem>
      <S.CheckboxInput type='checkbox' checked={isChecked} />
      <S.CheckboxBox></S.CheckboxBox>
      <S.CheckboxTitle>{title}</S.CheckboxTitle>
    </S.CheckboxItem>
  )
})

export { CheckboxItem }
