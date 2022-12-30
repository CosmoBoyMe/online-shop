import styled from 'styled-components'

const Main = styled.main``

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  column-gap: 50px;
`

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 50px;
`

export { Main, Content, ProductList }
