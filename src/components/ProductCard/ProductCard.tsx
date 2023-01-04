import * as S from './ProductCard.styles'

interface IProductCardProps {
  images: string[]
  brand: string
  name: string
  rating: number
  price: number
  discount: number
}

const ProductCard = function ProductCard(props: IProductCardProps) {
  const { images, brand, name, rating, price, discount } = props
  return (
    <S.ProductCard>
      <S.ImageWrapper>
        <S.Image src={images[0]} alt={name} />
        <S.Discount>-{discount}%</S.Discount>
      </S.ImageWrapper>
      <S.Description>
        <S.Brand>{brand}</S.Brand>
        <S.Name>{name}</S.Name>
        {/* <S.Rating>{rating}</S.Rating> */}
        <S.PriceWrapper>
          {!!discount && <S.OldPrice>${price}</S.OldPrice>}
          <S.Price withDiscount={!!discount}>${price - (price / 100) * discount}</S.Price>
        </S.PriceWrapper>
      </S.Description>
      <S.Button>add to cart</S.Button>
    </S.ProductCard>
  )
}

export { ProductCard }
