import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BreadCrumbs = styled.nav``

const BreadCrumbsList = styled.ul`
  display: flex;
  list-style: none;
  column-gap: 5px;
  color: var(--gray);
  cursor: default;
`

const BreadCrumbsItem = styled.li``

const BreadCrumbsLink = styled(Link)`
  color: var(--gray);
  cursor: pointer;
  text-decoration: none;
`

const BreadCrumbsSymbol = styled.span`
  color: var(--black);
`

export { BreadCrumbs, BreadCrumbsList, BreadCrumbsItem, BreadCrumbsLink, BreadCrumbsSymbol }
