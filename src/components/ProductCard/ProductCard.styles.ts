import styled from 'styled-components'

const ProductCard = styled.div`
  max-width: 100%;
`

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const Discount = styled.span`
  bottom: 0;
  position: absolute;
  background-color: var(--red);
  color: white;
  padding: 1px;
  font-size: 14px;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Brand = styled.p`
  text-transform: uppercase;
`
const Name = styled.h2``
const Rating = styled.ul``

const PriceWrapper = styled.div`
  display: flex;
`

const OldPrice = styled.span`
  font-size: 12px;
  text-decoration: line-through;
`

const Price = styled.span<{ withDiscount: boolean }>`
  margin-left: auto;
  font-weight: 500;
  color: ${({ withDiscount }) => (withDiscount ? 'red' : 'black')};
`
const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: var(--red);
  color: white;
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`

export {
  ProductCard,
  ImageWrapper,
  Image,
  Discount,
  Description,
  Brand,
  Name,
  Rating,
  PriceWrapper,
  OldPrice,
  Price,
  Button,
}
