import { FC } from 'react'
import { BreadCrumbs } from '../../components/BreadCrumbs'

import ProductDetailTable from './ProductDetailsTable'
import ProductDetailsImages from './ProductDetailsImages'
import ProductDetailsPreview from './ProductDetailsPreview'

import styled from 'styled-components'

import { data } from '../../data/data'

const ProductDetails: FC = () => {
  return (
    <ProductDetailsStyled>
      <ProductDetailsContainer>
        <BreadCrumbs />
        <ProductDetailsContent>
          <ProductDetailsImages {...data} />
          <ProductDetailsAbout>
            <ProductDetailsPreview />
            <ProductDetailTable {...data} />
          </ProductDetailsAbout>
        </ProductDetailsContent>
      </ProductDetailsContainer>
    </ProductDetailsStyled>
  )
}

export { ProductDetails }

const ProductDetailsStyled = styled.section``

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
