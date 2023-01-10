import { memo } from 'react'

import * as S from './ProductCard.styles'

interface IProductCardProps {
  images: string[]
  brand: string
  title: string
  rating: number
  price: number
  discountPercentage: number
}

const ProductCard = memo(function ProductCard(props: IProductCardProps) {
  const { images, brand, title, rating, price, discountPercentage } = props
  return (
    <S.ProductCard>
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
      <S.Button>add to cart</S.Button>
    </S.ProductCard>
  )
})

export { ProductCard }
