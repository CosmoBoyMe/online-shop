import styled from 'styled-components'

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  max-width: 300px;
  width: 100%;
  min-width: 300px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
`

const Button = styled.button`
  padding: 10px;
  text-transform: uppercase;
  width: 100%;
`

const FilterCheckboxItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 310px;
`

export { Filter, Buttons, Button, FilterCheckboxItems }
