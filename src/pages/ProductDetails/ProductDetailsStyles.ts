import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductDetails = styled.main``

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

const Slides = styled.ul`
  display: grid;
  grid-auto-rows: 240px;
  max-width: 225px;
  row-gap: 15px;
  list-style: none;
`
const SlidesItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border: 1px solid transparent;
  &:hover {
    border-color: var(--gray);
    border-radius: 10px;
  }
`

const SlidesImage = styled.img`
  cursor: pointer;
  max-width: 100%;
  height: auto;
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

const Info = styled.div``

const InfoControls = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-bottom: 30px;
`
const InfoButton = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  background-color: transparent;
  text-transform: uppercase;
  border: none;
  border-bottom: 3px solid #c5c1c1;
  border-color: ${(props) => props.isActive && 'var(--black)'};
  padding: 10px;
  padding-bottom: 10px;
`

const InfoDetailsList = styled.ul<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  flex-direction: column;
  list-style: none;
  row-gap: 20px;
`

const InfoDetailsItem = styled.li`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 2px solid #c5c1c1;
`
const infoDetailsType = styled.p`
  min-width: 130px;
  max-width: 130px;
  font-weight: 700;
`
const InfoDetailsValues = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`
const InfoDetailsValuesItem = styled.li``

const InfoShipping = styled.p<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`
const InfoReturnsText = styled.p<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`

export {
  ProductDetails,
  ProductDetailsContainer,
  ProductDetailsContent,
  ProductDetailsAbout,
  Slides,
  SlidesItem,
  SlidesImage,
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
  Info,
  InfoControls,
  InfoButton,
  InfoDetailsList,
  InfoDetailsItem,
  infoDetailsType,
  InfoDetailsValues,
  InfoDetailsValuesItem,
  InfoShipping,
  InfoReturnsText,
}
