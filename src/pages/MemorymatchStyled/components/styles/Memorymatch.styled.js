import styled from 'styled-components'

import { responsive } from '../../../../GlobalStyle.js'

const StyledContainer = styled.div`
	width: 100%;
	max-width: 90rem;
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 1rem;

	${responsive.mobile`
		gap: 2rem;
  `}

	${responsive.tablet`
		gap: 1.75rem;
  `}

  ${responsive.laptop`
		gap: 1.5rem;
  `}
`

const StyledHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	${responsive.mobile`
		gap: 3rem;
	`}

	${responsive.tablet`
		gap: 6rem;
	`}

	${responsive.laptop`
		gap: 9rem;
	`}
`

const StyledButtonOne = styled.button`
	font-size: 1.25rem;
	font-weight: bold;
	font-family: 'Open Sans', sans-serif;
	letter-spacing: 0.0625rem;
	line-height: 1.75;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	color: hsl(360, 100%, 100%);
	background-color: hsl(211, 100%, 50%);
	border: none;
	border-radius: 0.5rem;
	padding: 0.75rem 1.25rem;
	transition: background-color 0.375s ease;

	&:hover {
		cursor: pointer;
		background-color: hsl(211, 100%, 35%);
	}

	&:active {
		background-color: hsl(211, 100%, 25%);
	}
`

const StyledBadge = styled.div`
	font-size: 1.125rem;
	font-weight: 700;
	font-family: 'Open Sans', sans-serif;
	letter-spacing: 0.0625rem;
	text-align: center;
	text-transform: uppercase;
	color: hsl(210, 79%, 46%);
	background-color: hsl(36, 100%, 50%);
	border: 0.125rem solid hsl(210, 79%, 46%);
	border-radius: 2rem;
	padding: 1rem;
	pointer-events: none;
`

const StyledAreaEasy = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	place-content: center;
	margin: auto;

	${responsive.mobile`
		width: 100%;
		gap: 0.625rem;
	`}

	${responsive.tablet`
		width: 95%;
		gap: 0.875rem;
	`}

	${responsive.laptop`
		width: 47.5%;
		gap: 0.75rem;
	`}
`

const StyledAreaMedium = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	place-content: center;
	margin: auto;

	${responsive.mobile`
		width: 95%;
		gap: 0.625rem;
	`}

	${responsive.tablet`
		width: 72.5%;
		gap: 0.625rem;
	`}

	${responsive.laptop`
		width: 70%;
		grid-template-columns: repeat(6, 1fr);
		gap: 0.875rem;
	`}
`

const StyledAreaHard = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	place-content: center;
	margin: auto;

	${responsive.mobile`
		width: 97.5%;
		gap: 0.625rem;
	`}

	${responsive.tablet`
		width: 75%;
		gap: 0.625rem;
	`}

	${responsive.laptop`
		width: 95%;
		grid-template-columns: repeat(8, 1fr);
		gap: 0.75rem;
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
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	color: hsl(360, 100%, 100%);

	${responsive.mobile`
    font-size: 1.5rem;
  `}

	${responsive.tablet`
    font-size: 2.5rem;
  `}

  ${responsive.laptop`
    font-size: 3.5rem;
  `}
`

const StyledButtonTwo = styled.button`
	font-family: 'Open Sans', sans-serif;
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
		cursor: pointer;
		color: hsl(120, 100%, 30%);
		background-color: hsl(360, 100%, 100%);
		border-color: hsl(120, 100%, 30%);
	}
`

export {
	StyledContainer,
	StyledHeader,
	StyledButtonOne,
	StyledBadge,
	StyledAreaEasy,
	StyledAreaMedium,
	StyledAreaHard,
	StyledEndMessage,
	StyledText,
	StyledButtonTwo,
}
