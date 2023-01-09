import styled from 'styled-components'

const CheckboxItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  overflow-y: scroll;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  height: 100%;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.36);
  }
`

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 21px;
  font-weight: 500;
  line-height: 21px;
  margin-bottom: 24px;
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
`

export { CheckboxItems, List, Title, ListItem }
