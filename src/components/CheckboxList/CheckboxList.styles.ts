import styled from 'styled-components'

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const CheckboxListItems = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  overflow-y: scroll;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.36);
  }
`

const CheckboxListTitle = styled.h3`
  text-transform: uppercase;
  font-size: 21px;
  font-weight: 500;
  line-height: 21px;
  margin-bottom: 24px;
`

const CheckboxListItem = styled.li``

export { CheckboxList, CheckboxListItems, CheckboxListTitle, CheckboxListItem }
