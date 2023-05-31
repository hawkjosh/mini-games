import styled from 'styled-components'
import { respondTo } from './_respondTo.js'

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	${respondTo.mobile`
    flex-direction: row;
    gap: 2rem;
  `}

	${respondTo.tablet`
    flex-direction: row;
    gap: 3rem;
  `}

  ${respondTo.laptop`
    flex-direction: column;
    gap: 4rem;
  `}
`

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	${respondTo.tablet`
    flex-direction: row;
    gap: 1.25rem;
  `}

	${respondTo.laptop`
    flex-direction: column;
    gap: 1.75rem;
  `}
`

const StyledText = styled.span`
	font-family: 'Fredoka', sans-serif;
	font-weight: bold;
`

const StyledScore = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: hsl(360, 100%, 100%);
	border: 0.25rem solid;
	border-radius: 0.5rem;
	box-shadow: 0 0 0.5rem hsl(0, 0%, 53%);

	${respondTo.mobile`
    gap: 0.5rem;
    font-size: 1.25rem;
    letter-spacing: 0.125rem;
    padding: 0.5rem;
  `}

	${respondTo.tablet`
    gap: 0.75rem;
    font-size: 1.75rem;
    letter-spacing: 0.25rem;
    padding: 0.75rem;
  `}

  ${respondTo.laptop`
    gap: 1rem;
    font-size: 2.5rem;
    letter-spacing: 0.625rem;
    padding: 1rem;
  `}
`

const StyledButton = styled.div`
	font-family: 'Fredoka', sans-serif;
	font-weight: 500;
	line-height: 1.75;
	letter-spacing: 0.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: hsl(0, 0%, 100%);
	background-color: hsl(0, 0%, 50%);
	border-radius: 0.25rem;
	transition: all 0.25s ease;
	cursor: pointer;

	${respondTo.mobile`
    font-size: 1rem;
    padding: 0.125rem 0.25rem;
  `}

	${respondTo.tablet`
    font-size: 1.125rem;
    padding: 0.25rem 0.375rem;
  `}

  ${respondTo.laptop`
    font-size: 1.25rem;
    padding: 0.375rem 0.5rem;
  `}

  &:hover {
		background-color: hsl(120, 100%, 25%);
		box-shadow: 0 0.25rem 0.25rem -0.25rem hsla(0, 0%, 0%, 0.25),
			0 0.25rem 0.5rem 0 hsla(0, 0%, 0%, 0.125),
			0 0.25rem 0.75rem 0 hsla(0, 0%, 0%, 0.125);
	}
`

export { StyledContainer, StyledWrapper, StyledText, StyledScore, StyledButton }
