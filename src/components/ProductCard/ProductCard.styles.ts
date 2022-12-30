<<<<<<< HEAD
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  height: 100%;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 200px;
  height: 100%;
  width: 100%;
`

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  min-height: 100%;
=======
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
>>>>>>> 242e0de... feat: create product card
`

const Discount = styled.span`
  bottom: 0;
<<<<<<< HEAD
  left: 0;
=======
>>>>>>> 242e0de... feat: create product card
  position: absolute;
  background-color: var(--red);
  color: white;
  padding: 1px;
  font-size: 14px;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  flex: 1;
=======
>>>>>>> 242e0de... feat: create product card
  padding: 10px;
`

const Brand = styled.p`
<<<<<<< HEAD
  font-size: 12px;
  text-transform: uppercase;
`
const Name = styled.h2`
  font-size: 20px;
`
=======
  text-transform: uppercase;
`
const Name = styled.h2``
>>>>>>> 242e0de... feat: create product card
const Rating = styled.ul``

const PriceWrapper = styled.div`
  display: flex;
<<<<<<< HEAD
  margin-top: auto;
=======
>>>>>>> 242e0de... feat: create product card
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
<<<<<<< HEAD
  margin-top: auto;
`

const ProductLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export {
  ProductLink,
=======
`

export {
>>>>>>> 242e0de... feat: create product card
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
