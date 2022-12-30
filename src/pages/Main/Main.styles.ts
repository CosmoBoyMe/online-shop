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
<<<<<<< HEAD
  grid-template-rows: repeat(4, 380px);
  gap: 30px 25px;
=======
  gap: 30px 50px;
>>>>>>> 8e88ef4... feat: create main page
`

export { Main, Content, ProductList }
