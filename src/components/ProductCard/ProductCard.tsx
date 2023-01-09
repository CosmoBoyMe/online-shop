import { memo } from 'react'

import * as S from './ProductCard.styles'

import { useDispatch } from 'react-redux'

import { addToCart } from '../../store/cart/slice'

import { IProduct } from '../../store/cart/types'

import { Link } from 'react-router-dom'

// interface IProductCardProps {
//   images: string[]
//   brand: string
//   name: string
//   rating: number
//   price: number
//   discount: number
// }

const ProductCard = function ProductCard(props: IProduct) {
  const { images, brand, title, rating, price, discountPercentage } = props

  const dispatch = useDispatch()

  const addToCartFn = (): void => {
    dispatch(
      addToCart({
        id: props.id,
        title: props.title,
        category: props.category,
        images: props.images,
        price: props.price,
        totalPrice: props.price,
        quantity: 1,
      }),
    )
  }
  return (
    <S.ProductCard>
      <S.ProductLink to={`/product-details/:${props.id}`}>
        <S.ImageWrapper>
          <S.Image src={images[0]} key={images[0]} alt={title} />
          <S.Discount>-{discountPercentage}%</S.Discount>
        </S.ImageWrapper>
        <S.Description>
          <S.Brand>{brand}</S.Brand>
          <S.Name>{title}</S.Name>
          {/* <S.Rating>{rating}</S.Rating> */}
          <S.PriceWrapper>
            {!!discountPercentage && <S.OldPrice>${price}</S.OldPrice>}
            <S.Price withDiscount={!!discountPercentage}>
              ${(price - (price / 100) * discountPercentage).toFixed(2)}
            </S.Price>
          </S.PriceWrapper>
        </S.Description>
        <S.Button
          type='button'
          onClick={(event) => {
            event.preventDefault()
            addToCartFn()
          }}
        >
          add to cart
        </S.Button>
      </S.ProductLink>
    </S.ProductCard>
  )
})

export { ProductCard }
