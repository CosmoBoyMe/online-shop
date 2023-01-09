import { FC } from 'react'
import styled from 'styled-components'

import { Input } from '../Input/Input'

import plus from '../../assets/icons/plus.png'
import minus from '../../assets/icons/minus.png'

type TPagination = {
  productsPerPage: number
  totalProducts: number
  changeLimit: (value: number) => void
  decrementCurrentPage: () => void
  incrementCurrentPage: () => void
  currentPage: number
}

const Pagination: FC<TPagination> = ({
  productsPerPage,
  totalProducts,
  changeLimit,
  decrementCurrentPage,
  incrementCurrentPage,
  currentPage,
}) => {
  const pageNumbers: number[] = []

  for (let i = 0; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  const decrementCurrentPageFn = () => {
    if (currentPage === 1) {
      return
    } else {
      decrementCurrentPage()
    }
  }

  const incrementCurrentPageFn = () => {
    if (currentPage === pageNumbers[pageNumbers.length - 1]) {
      return
    } else {
      incrementCurrentPage()
    }
  }
  return (
    <div>
      <span>
        Limit:
        <PaginInput
          value={productsPerPage}
          type='number'
          min={1}
          onChange={(e) => changeLimit(Math.abs(Number.parseInt(e.target.value)))}
        />
      </span>
      <span>Pages:</span>
      <span>
        <PaginButton>
          <PaginImage src={minus} alt='Minus' onClick={() => decrementCurrentPageFn()} />
        </PaginButton>
        <span>{currentPage}</span>
        <PaginButton>
          <PaginImage src={plus} alt='Plus' onClick={() => incrementCurrentPageFn()} />
        </PaginButton>
      </span>
    </div>
  )
}

export default Pagination

const PaginInput = styled(Input)`
  width: 35px;
  margin-right: 1rem;
`
const PaginButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin: 0 0.9rem;
`

const PaginImage = styled.img`
  width: 10px;
`
