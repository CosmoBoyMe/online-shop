import { FC, useState } from 'react'
import styled from 'styled-components'

import { MockData } from './IProductDetails'

const ProductDetailTable: FC<MockData> = (mockData: MockData) => {
  const [activeControlsButtonIndex, setActiveControlsButtonIndex] = useState(0)

  const controlsNames = ['description', 'shipping', 'returns']

  return (
    <Info>
      <InfoControls>
        {controlsNames.map((name, index) => (
          <InfoButton
            onClick={() => setActiveControlsButtonIndex(index)}
            key={name}
            isActive={activeControlsButtonIndex === index}
          >
            {name}
          </InfoButton>
        ))}
      </InfoControls>
      <InfoDetailsList isActive={activeControlsButtonIndex === 0}>
        {mockData.characters.map(({ type, values }) => {
          return (
            <InfoDetailsItem key={type}>
              <InfoDetailsType>{type}</InfoDetailsType>
              <InfoDetailsValues>
                {values.map((value, index) => (
                  <InfoDetailsValuesItem key={value + index}>{value}</InfoDetailsValuesItem>
                ))}
              </InfoDetailsValues>
            </InfoDetailsItem>
          )
        })}
      </InfoDetailsList>
      <InfoShipping isActive={activeControlsButtonIndex === 1}>
        All orders are processed within 3 to 5 business days (excluding weekends and holidays) after
        receiving your order confirmation email. You will receive another notification when your
        order has shipped.
      </InfoShipping>
      <InfoReturnsText isActive={activeControlsButtonIndex === 2}>
        Thank you for acquiring {mockData.name}`s products. We hope that you are happy with your
        purchase. However, if you are not completely satisfied, for any reason, you can return it.
        Please read our return policy before you start the process in [return portal URL].
      </InfoReturnsText>
    </Info>
  )
}

export default ProductDetailTable

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
const InfoDetailsType = styled.p`
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
