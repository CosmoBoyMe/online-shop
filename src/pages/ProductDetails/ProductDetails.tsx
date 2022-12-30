import { FC, MouseEvent } from 'react'
import { BreadCrumbs } from '../../components/BreadCrumbs'
import { Button } from '../../components/Button'

import ProductDetailTable from './ProductDetailsTable'
import ProductDetailsImages from './ProductDetailsImages'

import styled from 'styled-components'

import * as S from './ProductDetailsStyles'

import type { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

const mockData = {
  name: 'macbook pro',
  category: 'laptops',
  brand: 'apple',
  price: 999,
  discount: 3,
  rating: 5,
  stockCount: 35,
  images: [
    require('../../assets/images/macbook.jpg'),
    require('../../assets/images/macbook-2.jpg'),
    require('../../assets/images/macbook-3.jpg'),
  ],
  characters: [
    {
      type: 'Display',
      values: ['Retina display'],
    },
    {
      type: 'Charging and Expansion',
      values: ['Two Thunderbolt', 'DisplayPort', 'USB 4', 'USB 3.1 Gen 2 '],
    },
    {
      type: 'Battery and Power',
      values: ['Up to 15 hours wireless web', 'Up to 18 hours Apple TV app movie playback'],
    },
    {
      type: 'Memory',
      values: ['8GB'],
    },
    {
      type: 'Storage',
      values: ['256GB'],
    },
  ],
}

const ProductDetails: FC = () => {
  const imagePath = useSelector((state: RootState) => state.product.imagePath) || mockData.images[0]

  const onClickAddButton = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(1)
  }

  const onClickBuyButton = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(1)
  }

  return (
    <ProductDetailsStyled>
      <S.ProductDetailsContainer>
        <BreadCrumbs />
        <S.ProductDetailsContent>
          <ProductDetailsImages {...mockData} />
          <S.ProductDetailsAbout>
            <S.Preview>
              <S.PreviewImageWrapper>
                <S.PreviewImage src={imagePath} alt={mockData.name} />
              </S.PreviewImageWrapper>
              <S.PreviewInfo>
                <S.PreviewName>{mockData.name}</S.PreviewName>
                <S.PreviewRating></S.PreviewRating>
                <S.PreviewPrice>
                  ${mockData.price}
                  <S.PreviewDiscount></S.PreviewDiscount>
                </S.PreviewPrice>
                <S.PreviewStockCount>{mockData.stockCount}</S.PreviewStockCount>
                <S.PreviewButtons>
                  <Button onClick={onClickAddButton}>Add to cart</Button>
                  <Button onClick={onClickBuyButton} viewType='light'>
                    buy now
                  </Button>
                </S.PreviewButtons>
              </S.PreviewInfo>
            </S.Preview>
            <ProductDetailTable {...mockData} />
          </S.ProductDetailsAbout>
        </S.ProductDetailsContent>
      </S.ProductDetailsContainer>
    </ProductDetailsStyled>
  )
}

export { ProductDetails }

const ProductDetailsStyled = styled.section``
