import { Fragment, useState, useEffect, FC, MouseEvent } from 'react'
import { BreadCrumbs } from '../../components/BreadCrumbs'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import * as S from './ProductDetailsStyles'

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

const controlsNames = ['description', 'shipping', 'returns']

const ProductDetails: FC = () => {
  const [activeImagePath, setActiveImagePath] = useState(mockData.images[0])
  const [activeControlsButtonIndex, setActiveControlsButtonIndex] = useState(0)

  const onClickAddButton = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(1)
  }

  const onClickBuyButton = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(1)
  }

  return (
    <>
      <Header></Header>
      <S.ProductDetails>
        <S.ProductDetailsContainer>
          <BreadCrumbs></BreadCrumbs>
          <S.ProductDetailsContent>
            <S.Slides>
              {mockData.images.map((path, index) => (
                <S.SlidesItem key={index}>
                  <S.SlidesImage
                    onClick={() => setActiveImagePath(path)}
                    src={path}
                    alt={mockData.name}
                  />
                </S.SlidesItem>
              ))}
            </S.Slides>
            <S.ProductDetailsAbout>
              <S.Preview>
                <S.PreviewImageWrapper>
                  <S.PreviewImage src={activeImagePath} alt={mockData.name} />
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
              <S.Info>
                <S.InfoControls>
                  {controlsNames.map((name, index) => (
                    <S.InfoButton
                      onClick={() => setActiveControlsButtonIndex(index)}
                      key={name}
                      isActive={activeControlsButtonIndex === index}
                    >
                      {name}
                    </S.InfoButton>
                  ))}
                </S.InfoControls>
                <S.InfoDetailsList isActive={activeControlsButtonIndex === 0}>
                  {mockData.characters.map(({ type, values }) => {
                    return (
                      <S.InfoDetailsItem key={type}>
                        <S.infoDetailsType>{type}</S.infoDetailsType>
                        <S.InfoDetailsValues>
                          {values.map((value, index) => (
                            <S.InfoDetailsValuesItem key={value + index}>
                              {value}
                            </S.InfoDetailsValuesItem>
                          ))}
                        </S.InfoDetailsValues>
                      </S.InfoDetailsItem>
                    )
                  })}
                </S.InfoDetailsList>
                <S.InfoShipping isActive={activeControlsButtonIndex === 1}>
                  All orders are processed within 3 to 5 business days (excluding weekends and
                  holidays) after receiving your order confirmation email. You will receive another
                  notification when your order has shipped.
                </S.InfoShipping>
                <S.InfoReturnsText isActive={activeControlsButtonIndex === 2}>
                  Thank you for acquiring {mockData.name}’s products. We hope that you are happy
                  with your purchase. However, if you are not completely satisfied, for any reason,
                  you can return it. Please read our return policy before you start the process in
                  [return portal URL].
                </S.InfoReturnsText>
              </S.Info>
            </S.ProductDetailsAbout>
          </S.ProductDetailsContent>
        </S.ProductDetailsContainer>
      </S.ProductDetails>
    </>
  )
}

export { ProductDetails }
