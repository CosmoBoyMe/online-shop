import styled from 'styled-components'

const Header = styled.header`
  border-bottom: 1px solid #c7c7c7;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;
`

const HeaderLogo = styled.div`
  max-width: 85px;
`

const HeaderPrice = styled.p`
  font-weight: 700;
  font-size: 20px;
`

const HeaderPriceValue = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: var(--red);
`

const HeaderCart = styled.div`
  position: relative;
  max-width: 40px;
`

const HeaderCartImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`

const headerCartAmount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 20px;
  top: 15px;
  border: 1px solid white;
  border-radius: 9px;
  background-color: var(--red);
  color: white;
  font-size: 12px;
  font-weight: 400;
  height: 20px;
  min-width: 18px;
  padding: 0 5px;
`

export {
  Header,
  HeaderContainer,
  HeaderLogo,
  HeaderPrice,
  HeaderPriceValue,
  HeaderCart,
  HeaderCartImg,
  headerCartAmount,
}
