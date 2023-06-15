import styled from 'styled-components'

import { responsive } from '../../../../GlobalStyle.js'

const StyledContainer = styled.div`
	max-width: 90rem;
	display: grid;
	place-items: center;
	place-content: center;
	margin: 1rem auto;
	grid-template-columns: 1fr;
	gap: 2.5rem;
	padding: 0 1rem;

	${responsive.tablet`
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1.5rem;
  `}

  ${responsive.laptop`
    grid-template-columns: 40% 60%;
    gap: 0.75rem;
    padding: 0 2rem;
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
	font-size: 4rem;

	${responsive.tablet`
    font-size: 6rem;
  `}

  ${responsive.laptop`
    font-size: 8rem;
  `}
`

const StyledButton = styled.button`
	font-family: 'Fredoka', sans-serif;
	font-weight: 500;
	line-height: 1.75;
	letter-spacing: 0.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: hsl(0, 0%, 100%);
	background-color: hsl(120, 100%, 30%);
	border: 0.25rem solid hsl(0, 0%, 100%);
	border-radius: 0.75rem;
	margin-top: 2.5rem;
	padding: 0.25rem 1rem;
	transition: all 0.25s ease;
	font-size: 1.5rem;

	&:hover {
		cursor: pointer;
		color: hsl(120, 100%, 30%);
		background-color: hsl(0, 0%, 100%);
		border-color: hsl(120, 100%, 30%);
	}

	${responsive.tablet`
    font-size: 2rem;
  `}

  ${responsive.laptop`
    font-size: 2.5rem;
  `}
`

export { StyledContainer, StyledEndMessage, StyledText, StyledButton }
