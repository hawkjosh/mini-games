import styled from 'styled-components'
import { respondTo } from './_respondTo.js'

const StyledContainer = styled.div`
	aspect-ratio: 1/1;
	border: solid hsl(0, 0%, 66%);
	border-radius: 1rem;

	${respondTo.mobile`
    width: 100%;
    padding: 1rem;
  `}

	${respondTo.tablet`
    width: 92.5%;
    padding: 1.25rem;
  `}

  ${respondTo.laptop`
    width: 85%;
    padding: 1.5rem;
  `}
`

const StyledWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	place-content: center;

	${respondTo.mobile`
    gap: 1rem;
  `}

	${respondTo.tablet`
    gap: 1.25rem;
  `}

  ${respondTo.laptop`
    gap: 1.5rem;
  `}
`

export { StyledContainer, StyledWrapper }
