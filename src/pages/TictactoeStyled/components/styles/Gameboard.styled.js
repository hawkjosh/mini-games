import styled from 'styled-components'

import { responsive } from '../../../../GlobalStyle.js'

const StyledContainer = styled.div`
	aspect-ratio: 1/1;
	border: solid hsl(0, 0%, 66%);
	border-radius: 1rem;

	${responsive.mobile`
    width: 100%;
    padding: 1rem;
  `}

	${responsive.tablet`
    width: 92.5%;
    padding: 1.25rem;
  `}

  ${responsive.laptop`
    width: 85%;
    padding: 1.5rem;
  `}
`

const StyledWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	place-content: center;

	${responsive.mobile`
    gap: 1rem;
  `}

	${responsive.tablet`
    gap: 1.25rem;
  `}

  ${responsive.laptop`
    gap: 1.5rem;
  `}
`

export { StyledContainer, StyledWrapper }
