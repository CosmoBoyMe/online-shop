import { FC } from 'react'
import { Link } from 'react-router-dom'

import bagSvg from '../../assets/icons/shopping-bag.svg'
import { Logo } from '../Logo'
import * as S from './HeaderStyles'

const Header: FC = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderLogo>
          <Logo />
        </S.HeaderLogo>
        <S.HeaderPrice>
          Cart total: <S.HeaderPriceValue>$123,123,00</S.HeaderPriceValue>
        </S.HeaderPrice>
        <Link to='/cart'>
          <S.HeaderCart>
            <S.HeaderCartImg src={bagSvg} alt='cart' />
            <S.headerCartAmount>1</S.headerCartAmount>
          </S.HeaderCart>
        </Link>
      </S.HeaderContainer>
    </S.Header>
  )
}

export { Header }
