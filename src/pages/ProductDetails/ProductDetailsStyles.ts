import styled from 'styled-components'

const ProductDetailsContainer = styled.div`
  max-width: 1400px;
  padding: 20px 20px 0 20px;
  margin: 0 auto;
`

const ProductDetailsContent = styled.div`
  display: flex;
  column-gap: 150px;
  padding-top: 50px;
  padding-bottom: 300px;
`

const ProductDetailsAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
`

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

export {
  ProductDetailsContainer,
  ProductDetailsContent,
  ProductDetailsAbout,
  Preview,
  PreviewImageWrapper,
  PreviewImage,
  PreviewInfo,
  PreviewName,
  PreviewRating,
  PreviewPrice,
  PreviewDiscount,
  PreviewStockCount,
  PreviewButtons,
}
