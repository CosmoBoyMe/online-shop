import { memo } from 'react'
import * as S from './CheckboxItem.styles'

interface ICheckboxItem {
  title: string
  isChecked: boolean
  onClick: (name: string) => void
}

const CheckboxItem = memo(function CheckboxItem({ title, isChecked, onClick }: ICheckboxItem) {
  return (
    <S.CheckboxItem>
      <S.CheckboxInput type='checkbox' defaultChecked={isChecked} />
      <S.CheckboxBox></S.CheckboxBox>
      <S.CheckboxTitle onClick={() => onClick(title)}>{title}</S.CheckboxTitle>
    </S.CheckboxItem>
  )
})

export { CheckboxItem }
