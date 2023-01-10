import { FC } from 'react'
import { Link } from 'react-router-dom'

import bagSvg from '../../assets/icons/shopping-bag.svg'
import { Logo } from '../Logo'
import * as S from './HeaderStyles'

import { useSelector } from 'react-redux'
import { selectCart } from '../../store/cart/selectors'

const Header: FC = () => {
  const { totalQuantity, cartPrice } = useSelector(selectCart)
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderLogo>
          <Logo />
        </S.HeaderLogo>
        <S.HeaderPrice>
          Cart total: <S.HeaderPriceValue>${cartPrice}</S.HeaderPriceValue>
        </S.HeaderPrice>
        <Link to='/cart'>
          <S.HeaderCart>
            <S.HeaderCartImg src={bagSvg} alt='cart' />
            <S.headerCartAmount>{totalQuantity}</S.headerCartAmount>
          </S.HeaderCart>
        </Link>
      </S.HeaderContainer>
    </S.Header>
  )
}

export { Header }
