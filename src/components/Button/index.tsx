import * as S from './Button.style'
import { FC, MouseEvent, ReactNode } from 'react'

interface IButton {
  children?: ReactNode
  viewType?: 'light' | 'secondary'
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<IButton> = ({ onClick, children, viewType }) => {
  return (
    <S.Button onClick={onClick} viewType={viewType}>
      {children}
    </S.Button>
  )
}

export { Button }
