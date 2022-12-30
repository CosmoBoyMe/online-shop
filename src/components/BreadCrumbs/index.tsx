import { FC } from 'react'

import { SCREENS } from '../../routes/endpoints'
import * as S from './BreadCrumbsStyles'

const BreadCrumbs: FC = () => {
  return (
    <S.BreadCrumbs>
      <S.BreadCrumbsList>
        <S.BreadCrumbsItem>
          <S.BreadCrumbsLink to={SCREENS.MAIN}>Home</S.BreadCrumbsLink>
        </S.BreadCrumbsItem>
        <S.BreadCrumbsSymbol>{'>>'}</S.BreadCrumbsSymbol>
        <S.BreadCrumbsItem>Laptop</S.BreadCrumbsItem>
        <S.BreadCrumbsSymbol>{'>>'}</S.BreadCrumbsSymbol>
        <S.BreadCrumbsItem>Apple</S.BreadCrumbsItem>
        <S.BreadCrumbsSymbol>{'>>'}</S.BreadCrumbsSymbol>
        <S.BreadCrumbsItem>Macbook</S.BreadCrumbsItem>
      </S.BreadCrumbsList>
    </S.BreadCrumbs>
  )
}

export { BreadCrumbs }
