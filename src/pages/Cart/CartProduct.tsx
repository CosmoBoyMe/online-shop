import styled from 'styled-components'
import { FC } from 'react'

import { IProductInCart } from '../../store/cart/types'

import { SuperText } from '../../styles/components/SuperText'

import plus from '../../assets/icons/plus.png'
import minus from '../../assets/icons/minus.png'
import trash from '../../assets/icons/trash.svg'

import { useDispatch } from 'react-redux'
import {
  removeFromCart,
  incrementQuantityAndPrice,
  decrementQuantityAndPrice,
} from '../../store/cart/slice'

const CartProduct: FC<IProductInCart> = (props: IProductInCart) => {
  const { images, title, category, totalPrice, quantity, id } = props

  const dispatch = useDispatch()

  return (
    <ProductContainer>
      <ProductImageWrap>
        <ProductImage src={images[0]} alt={title} />
      </ProductImageWrap>

      <ProductDetailsWrap>
        <ProductTitle>{title}</ProductTitle>
        <ProductCategory>{category}</ProductCategory>
        <div>
          <span>QTY</span>
          <span>
            <QTYButton>
              <QTYImage
                src={plus}
                alt='Plus'
                onClick={() => dispatch(incrementQuantityAndPrice(id))}
              />
            </QTYButton>

            <span>{quantity}</span>

            <QTYButton>
              <QTYImage
                src={minus}
                alt='Minus'
                onClick={() => dispatch(decrementQuantityAndPrice(id))}
              />
            </QTYButton>
          </span>
          <span>
            {totalPrice}
            <SuperText>USD</SuperText>
          </span>
        </div>
      </ProductDetailsWrap>
      <Trash>
        <img
          src={trash}
          alt='Trash'
          onClick={() => {
            dispatch(removeFromCart(id))
            console.log('removed')
          }}
        />
      </Trash>
    </ProductContainer>
  )
}

export default CartProduct

const ProductContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 140px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  /* padding: 0 5rem; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
const ProductImage = styled.img`
  width: 50%;
  border-radius: 1vh;
`
const ProductImageWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProductTitle = styled.span`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const ProductCategory = styled.span`
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.5);
  text-transform: capitalize;
`

const ProductDetailsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const QTYButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin: 0 0.9rem;
`
const QTYImage = styled.img`
  width: 10px;
`

const Trash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 12%;
    cursor: pointer;
  }
`
