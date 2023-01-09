import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'
import { selectCart } from '../../store/cart/selectors'

import CartProduct from './CartProduct'
import Pagination from '../../components/Pagination/Pagination'
import Modal from './Modal'

import { SuperText } from '../../styles/components/SuperText'
import { Input } from '../../components/Input/Input'

import plus from '../../assets/icons/plus.png'
import minus from '../../assets/icons/minus.png'

type TPromocode = {
  expand: boolean
}

const Cart = () => {
  const { productsInCart, cartPrice } = useSelector(selectCart)

  const [showModal, setShowModal] = useState(false)

  const [promoImage, setPromoImage] = useState(plus)
  const [expandPromo, setExpandPromo] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPrePage] = useState(3)
  const [showRsPromo, setShowRsPromo] = useState(false)
  const [showEpmPromo, setShowEpmPromo] = useState(false)

  const [rsPromoInUse, setRsPromoInUse] = useState(false)
  const [epmPromoInUse, setEpmPromoInUse] = useState(false)

  const [priceAfterPromo, setPriceAfterPromo] = useState(cartPrice)

  const indexOfLastPost = currentPage * productsPerPage
  const indexOfFirstPost = indexOfLastPost - productsPerPage
  const currentProducts = productsInCart.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    if (showModal) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  const changeLimit = (value: number) => setProductsPrePage(value)

  const checkPromoValue = (value: string) => {
    const promo = value.toLowerCase()
    switch (promo) {
      case 'rs':
        setShowRsPromo(true)
        break
      case 'epm':
        setShowEpmPromo(true)
        break
      default:
        setShowRsPromo(false)
        setShowEpmPromo(false)
        break
    }
  }

  const addPromo = (value: string) => {
    switch (value) {
      case 'rs':
        setPriceAfterPromo(priceAfterPromo - cartPrice * 0.1)
        setRsPromoInUse(true)
        setShowRsPromo(false)
        break
      case 'epm':
        setPriceAfterPromo(priceAfterPromo - cartPrice * 0.1)
        setEpmPromoInUse(true)
        setShowEpmPromo(false)
        break
    }
  }

  const removePromo = (value: string) => {
    switch (value) {
      case 'rs':
        setPriceAfterPromo(priceAfterPromo + cartPrice * 0.1)
        setRsPromoInUse(false)
        break
      case 'epm':
        setPriceAfterPromo(priceAfterPromo + cartPrice * 0.1)
        setEpmPromoInUse(false)
        break
    }
  }

  useEffect(() => {
    if (rsPromoInUse) {
      setPriceAfterPromo(cartPrice - cartPrice * 0.1)
    }
    if (epmPromoInUse) {
      setPriceAfterPromo(cartPrice - cartPrice * 0.1)
    }
  }, [cartPrice])

  return (
    <CartContainer>
      <CartHeader>
        <Title>Your cart</Title>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={productsInCart.length}
          changeLimit={changeLimit}
          decrementCurrentPage={() => setCurrentPage(currentPage - 1)}
          incrementCurrentPage={() => setCurrentPage(currentPage + 1)}
          currentPage={currentPage}
        />
      </CartHeader>
      {currentProducts.length !== 0 ? (
        currentProducts.map((item) => <CartProduct key={item.id} {...item} />)
      ) : (
        <Empty>Your cart is empty</Empty>
      )}
      <CheckoutPart>
        <Wrap>
          <Total>Total:</Total>
          <span>
            {priceAfterPromo.toFixed(2)}
            <SuperText>USD</SuperText>
          </span>
        </Wrap>
        <PromocodeContainer expand={expandPromo}>
          <PromocodeWrap
            onClick={() => {
              setPromoImage(promoImage === plus ? minus : plus)
              setExpandPromo(!expandPromo)
            }}
          >
            <Promocode>promocode</Promocode>
            <PlusMinus src={promoImage} alt='PlusMinus' />
          </PromocodeWrap>

          <PromoInput
            type='text'
            placeholder='Enter code'
            onChange={(e) => checkPromoValue(e.target.value)}
          />
          <TryPromo>Try &apos;RS&apos; or &apos;EPM&apos;</TryPromo>
          {rsPromoInUse && (
            <Promo>
              Rolling Scopes School - 10%
              <PromoButton onClick={() => removePromo('rs')}>remove</PromoButton>
            </Promo>
          )}
          {epmPromoInUse && (
            <Promo>
              EPAM Systems - 10%
              <PromoButton onClick={() => removePromo('epm')}>remove</PromoButton>
            </Promo>
          )}
          {showRsPromo && (
            <Promo>
              Rolling Scopes School - 10%
              <PromoButton color='green' onClick={() => addPromo('rs')}>
                add
              </PromoButton>
            </Promo>
          )}
          {showEpmPromo && (
            <Promo>
              EPAM Systems - 10%
              <PromoButton color='green' onClick={() => addPromo('epm')}>
                add
              </PromoButton>
            </Promo>
          )}
          {/* <ApplyButton>apply</ApplyButton> */}
        </PromocodeContainer>
        <CheckoutButtonWrap>
          <CheckoutButton onClick={() => setShowModal(true)}>checkout securely</CheckoutButton>
        </CheckoutButtonWrap>
      </CheckoutPart>
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </CartContainer>
  )
}

export { Cart }

const CartContainer = styled.div``

const CartHeader = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const Empty = styled.div`
  text-align: center;
  text-transform: uppercase;
  margin: 1rem 0;
`

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 22px;
`

const CheckoutPart = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Wrap = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const Total = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`

const PromocodeContainer = styled.div<TPromocode>`
  transition: all ease 1s;
  height: ${(props) => (props.expand ? '80px' : '240px')};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
`

const PromocodeWrap = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`

const Promocode = styled.span`
  text-transform: uppercase;
`

const PlusMinus = styled.img`
  width: 20px;
  height: 20px;
`

const PromoInput = styled(Input)`
  width: 100%;
  text-transform: uppercase;
`

const CheckoutButtonWrap = styled.div`
  height: 160px;
  background-color: white;
  z-index: 1;
  position: relative;
`

const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.8rem 0;
  background-color: black;
  color: white;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.25);
`

// const ApplyButton = styled(CheckoutButton)`
//   width: 50%;
//   text-align: center;
// `

const TryPromo = styled.span`
  margin-bottom: 1rem;
`

const Promo = styled.span`
  margin-bottom: 0.5rem;
`

const PromoButton = styled.button`
  padding: 0.4rem 0.2rem 0.2rem;
  margin-left: 0.5rem;
  background-color: unset;
  color: ${(props) => (props.color === 'green' ? 'green' : 'red')};
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  border: 2px solid ${(props) => (props.color === 'green' ? 'green' : 'red')};
`
