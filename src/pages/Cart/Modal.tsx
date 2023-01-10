import { FC, useRef, useState } from 'react'
import styled from 'styled-components'

import { Input } from '../../components/Input/Input'

import {
  checkName,
  checkPhone,
  checkShip,
  checkEmail,
  checkCard,
  checkValid,
  checkCVV,
} from './Validation'

import visa from '../../assets/icons/visa.svg'
import master from '../../assets/icons/master.svg'
import aexpress from '../../assets/icons/aexpress.svg'

type TModal = {
  closeModal: (value: boolean) => void
}

const Modal: FC<TModal> = ({ closeModal }) => {
  const [cardImage, setCardImage] = useState('')
  const [cardAlt, setCardAlt] = useState('')

  const [validUntilValue, setValidUntilValue] = useState('')

  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [shipError, setShipError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [cardError, setCardError] = useState(false)
  const [validError, setValidError] = useState(false)
  const [cvvError, setCVVError] = useState(false)

  const nameInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)
  const shipInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const cardInput = useRef<HTMLInputElement>(null)
  const validInput = useRef<HTMLInputElement>(null)
  const cvvInput = useRef<HTMLInputElement>(null)

  const checkValidation = () => {
    if (!checkName(nameInput.current?.value)) {
      setNameError(true)
    } else {
      setNameError(false)
    }
    if (!checkPhone(phoneInput.current?.value)) {
      setPhoneError(true)
    } else {
      setPhoneError(false)
    }
    if (!checkShip(shipInput.current?.value)) {
      setShipError(true)
    } else {
      setShipError(false)
    }
    if (!checkEmail(emailInput.current?.value)) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
    if (!checkCard(cardInput.current?.value)) {
      setCardError(true)
    } else {
      setCardError(false)
    }
    if (!checkValid(validInput.current?.value)) {
      setValidError(true)
    } else {
      setValidError(false)
    }
    if (!checkCVV(cvvInput.current?.value)) {
      setCVVError(true)
    } else {
      setCVVError(false)
    }
  }

  const changeImage = (value: string): void => {
    if (Number.parseInt(value[0]) === 4) {
      setCardImage(visa)
      setCardAlt('Visa')
    } else if (Number.parseInt(value[0]) === 5) {
      setCardImage(master)
      setCardAlt('Master Card')
    } else if (Number.parseInt(value[0]) === 3) {
      setCardImage(aexpress)
      setCardAlt('American Express')
    } else {
      setCardImage('')
      setCardAlt('')
    }
  }

  const onValidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value
    if (date.length === 2) {
      const withSlash = date + '/'
      setValidUntilValue(withSlash)
    } else {
      setValidUntilValue(date)
    }
  }

  return (
    <GrayBg onClick={() => closeModal(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Title>checkout</Title>

        <ModalInput type='text' placeholder='NAME SURNAME' ref={nameInput} />
        {nameError && <ErrorMessage>Name should contain 2 words 3 chars length each</ErrorMessage>}

        <ModalInput type='text' placeholder='PHONE NUMBER' ref={phoneInput} pattern='^\+?\d*$' />
        {phoneError && (
          <ErrorMessage>Phone should start with &apos;+&apos; and contain 9 numbers</ErrorMessage>
        )}

        <ModalInput type='text' placeholder='SHIPPING' ref={shipInput} />
        {shipError && <ErrorMessage>Name should contain 3 words 5 chars length each</ErrorMessage>}

        <ModalInput type='email' placeholder='E_MAIL' ref={emailInput} />
        {emailError && <ErrorMessage>Wrong email format</ErrorMessage>}

        <CreditTitle>Credit card details</CreditTitle>

        <CardWrap>
          <ModalInput
            type='number'
            placeholder='CARD NUMBER'
            ref={cardInput}
            onChange={(e) => changeImage(e.target.value)}
          />
          <CardImage src={cardImage} alt={cardAlt} />
        </CardWrap>
        {cardError && <ErrorMessage>Card number must be 16 chars long</ErrorMessage>}

        <ShortWrap>
          <ShortInput
            type='text'
            placeholder='VALID UNTIL'
            ref={validInput}
            pattern='/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/'
            value={validUntilValue}
            onChange={(e) => onValidChange(e)}
          />
          <ShortInput type='number' placeholder='CVV' ref={cvvInput} />
        </ShortWrap>
        {validError && <ErrorMessage>Please provide correct date</ErrorMessage>}
        {cvvError && <ErrorMessage>CVV must be 3 chars long</ErrorMessage>}
        <Submit onClick={() => checkValidation()}>submit</Submit>
      </ModalContainer>
    </GrayBg>
  )
}

export default Modal

const GrayBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -50%;
  left: -50%;
  transform: translate(50%, 50%);
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div`
  background-color: white;
  width: 600px;
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.25);
`

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 2rem;
`

const ModalInput = styled(Input)`
  width: 100%;
  /* margin-bottom: 0.5rem; */
  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const CardWrap = styled.div`
  position: relative;
  width: 100%;
`

const CardImage = styled.img`
  width: 20px;
  position: absolute;
  right: 0;
  top: 0;
`

const ErrorMessage = styled.span`
  margin: 0 0 0.5rem;
  color: red;
`

const ShortWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ShortInput = styled(ModalInput)`
  width: 40%;
`

const CreditTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 2rem;
`

const Submit = styled.button`
  width: 100%;
  padding: 0.8rem 0;
  background-color: black;
  color: white;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.25);
`
