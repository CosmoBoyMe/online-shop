import styled from 'styled-components'
import { FC } from 'react'

import { Header } from '../components/Header'

const Wrapper = styled.div`
  max-width: 1110px;
  padding: 0 20px;
  margin: 195px auto 228px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 62px;
`

const Text = styled.p`
  font-size: 165px;
  line-height: 165px;
  font-weight: 100;
`

const Title = styled.h1`
  font-size: 165px;
  line-height: 165px;
  font-weight: 700;
  text-transform: uppercase;
`

const NotFound: FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Text>(404)</Text>
        <Title>Not found</Title>
      </Wrapper>
    </>
  )
}

export { NotFound }
