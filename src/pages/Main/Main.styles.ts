import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  margin: 0 auto;
  padding: 20px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  column-gap: 50px;
`

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 380px);
  gap: 30px 25px;
`

export { Main, Content, ProductList }
