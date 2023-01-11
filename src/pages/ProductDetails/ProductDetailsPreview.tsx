import { MouseEvent } from 'react'

import styled from 'styled-components'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

import { data } from '../../data/data'

import { Button } from '../../components/Button'

const ProductDetailsPreview = () => {
  const imagePath = data.images[0]

  const onClickAddButton = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(1)
  }

  const onClickBuyButton = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(1)
  }

  return (
    <Preview>
      <PreviewImageWrapper>
        <PreviewImage src={imagePath} alt={data.name} />
      </PreviewImageWrapper>
      <PreviewInfo>
        <PreviewName>{data.name}</PreviewName>
        <PreviewRating></PreviewRating>
        <PreviewPrice>
          ${data.price}
          <PreviewDiscount></PreviewDiscount>
        </PreviewPrice>
        <PreviewStockCount>{data.stockCount}</PreviewStockCount>
        <PreviewButtons>
          <Button onClick={onClickAddButton}>Add to cart</Button>
          <Button onClick={onClickBuyButton} viewType='light'>
            buy now
          </Button>
        </PreviewButtons>
      </PreviewInfo>
    </Preview>
  )
}

export default ProductDetailsPreview

const Preview = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 350px 1fr;
  column-gap: 70px;
`

const PreviewImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
`

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const PreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const PreviewName = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`
const PreviewRating = styled.div``

const PreviewPrice = styled.div`
  font-size: 26px;
  font-weight: 500;
`
const PreviewDiscount = styled.span``
const PreviewStockCount = styled.span``
const PreviewButtons = styled.div`
  margin-top: auto;
  display: flex;
  column-gap: 50px;
`
