import * as S from './ProductCard.styles'

interface IProductCardProps {
  data: {
    imagePath: string
    brand: string
    name: string
    rating: number
    price: number
    discount: number
  }
}

const ProductCard = function ProductCard(props: IProductCardProps) {
  const { imagePath, brand, name, rating, price, discount } = props.data
  return (
    <S.ProductCard>
      <S.ImageWrapper>
        <S.Image src={imagePath} alt={name} />
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
