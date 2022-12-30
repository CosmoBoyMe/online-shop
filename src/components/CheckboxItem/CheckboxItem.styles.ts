import styled from 'styled-components'

const CheckboxItem = styled.label`
  display: flex;

  max-width: fit-content;

  cursor: pointer;

  line-height: 18px;

  column-gap: 18px;
`

const CheckboxBox = styled.span`
  position: relative;

  width: 20px;
  height: 20px;

  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 1) inset;
`

const CheckboxInput = styled.input`
  position: absolute;

  overflow: hidden;
  clip: rect(0 0 0 0);

  width: 1px;
  height: 1px;

  white-space: nowrap;
  clip-path: inset(50%);

  &:checked + ${CheckboxBox} {
    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      background-color: var(--black);
    }
  }
`

const CheckboxTitle = styled.span`
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 300;
  line-height: 20px;
`

export { CheckboxItem, CheckboxInput, CheckboxBox, CheckboxTitle }
