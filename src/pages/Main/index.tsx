import { Filter } from '../../components/Filter'
import { ProductCard } from '../../components/ProductCard'
import * as S from './Main.styles'

const MockProductCard = [
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
  {
    imagePath: require('../../assets/macbook1.png'),
    brand: 'apple',
    name: 'macbook air',
    rating: 3,
    price: 999,
    discount: 49,
  },
]

const Main = () => {
  return (
    <S.Main>
      <S.Content>
        <Filter />
        <S.ProductList>
          {MockProductCard.map((item) => (
            <ProductCard key={item.name} data={item} />
          ))}
        </S.ProductList>
      </S.Content>
    </S.Main>
  )
}

export { Main }
