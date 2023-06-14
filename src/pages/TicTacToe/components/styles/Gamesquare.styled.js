import styled from 'styled-components'

import { responsive } from '../../../../GlobalStyle.js'

const StyledSquare = styled.div`
	display: flex;
	place-items: center;
	place-content: center;
	font-family: 'Fredoka', sans-serif;
	font-weight: bold;
	line-height: 0;
	background-color: hsl(360, 100%, 100%);
	border: none;
	border-radius: 1rem;
	box-shadow: 0 0 0.5rem hsl(0, 0%, 53%);
	aspect-ratio: 1/1;

	${responsive.mobile`
    font-size: 5rem;
  `}

	${responsive.tablet`
		font-size: 10rem;
  `}

  ${responsive.laptop`
		font-size: 11rem;
  `}

	&:hover {
		cursor: pointer;
		box-shadow: 0 0 1rem hsl(0, 1%, 18%);
	}
`

export { StyledSquare }
