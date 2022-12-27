import styled, { css } from 'styled-components'

const Button = styled.button<{ viewType?: 'light' | 'secondary' }>`
  padding: 17px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  ${(props) => {
    switch (props.viewType) {
      case 'secondary':
        return css`
          background-color: var(--gray);
          color: black;
        `
      case 'light':
        return css`
          background-color: var(--red);
          color: white;
        `
      default:
        return css`
          color: var(--white);
          background-color: var(--black);
        `
    }
  }}
`

export { Button }
