import { memo } from 'react'

import * as S from './Amount.styles'

interface IAmount {
  currentAmount: number
  totalAmount: number
}

const Amount = memo(function Amount({ currentAmount, totalAmount }: IAmount) {
  return (
    <S.Amount>
      <S.AmountItem>{currentAmount}</S.AmountItem>
      {'/'}
      <S.AmountItem>{totalAmount}</S.AmountItem>
    </S.Amount>
  )
})

export { Amount }
