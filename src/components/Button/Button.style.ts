import styled, { css } from 'styled-components'

const Button = styled.button<{ viewType?: 'light' | 'secondary' }>`
  padding: 17px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  font-weight: 300;
  font-family: 'Josefin Sans', Arial, sans-serif;
  /* border-radius: 5px; */

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
          box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.25);
        `
    }
  }}
`

export { Button }
