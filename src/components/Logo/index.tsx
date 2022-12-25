import { FC } from 'react'
import { Link } from 'react-router-dom'

import logoSvg from '../../assets/icons/logo.svg'
import * as S from './LogoStyles'

const Logo: FC = () => {
  return (
    <Link to='/'>
      <S.LogoImage src={logoSvg} alt='logo' />
    </Link>
  )
}

export { Logo }
