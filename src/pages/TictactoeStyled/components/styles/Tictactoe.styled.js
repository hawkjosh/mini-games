import styled from 'styled-components'

import { responsive } from '../../../../GlobalStyle.js'

const StyledContainer = styled.div`
	max-width: 90rem;
	display: grid;
	place-items: center;
	place-content: center;
	margin: 1rem auto;

	${responsive.mobile`
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 1rem auto;
  `}

	${responsive.tablet`
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem auto;
  `}

  ${responsive.laptop`
    grid-template-columns: 40% 60%;
    gap: 0.75rem;
    padding: 2rem auto;
  `}
`

const StyledEndMessage = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: hsla(0, 0%, 0%, 0.75);
`

const StyledText = styled.div`
	font-family: 'Fredoka', sans-serif;
	font-weight: 600;
	letter-spacing: 1rem;

	${responsive.mobile`
    font-size: 4rem;
  `}

	${responsive.tablet`
    font-size: 6rem;
  `}

  ${responsive.laptop`
    font-size: 8rem;
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
	background-color: hsl(120, 100%, 25%);
	border: 0.25rem solid hsl(0, 0%, 100%);
	border-radius: 0.75rem;
	margin-top: 2.5rem;
	padding: 0.25rem 1rem;
	transition: all 0.25s ease;
	cursor: pointer;

	${responsive.mobile`
    font-size: 1.5rem;
  `}

	${responsive.tablet`
    font-size: 2rem;
  `}

  ${responsive.laptop`
    font-size: 2.5rem;
  `}

	&:hover {
		color: hsl(120, 100%, 25%);
		background-color: hsl(0, 0%, 100%);
		border-color: hsl(120, 100%, 25%);
	}
`

export { StyledContainer, StyledEndMessage, StyledText, StyledButton }
