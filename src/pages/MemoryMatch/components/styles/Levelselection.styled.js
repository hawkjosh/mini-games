import styled from 'styled-components'

import { responsive } from '../../../../GlobalStyle.js'

const StyledMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border: 0.25rem solid hsl(210, 79%, 46%);
	border-radius: 1rem;
	width: 95%;
	padding: 1rem;

	${responsive.tablet`
		width: 85%;
		padding: 1.25rem;
	`}

	${responsive.laptop`
		width: 75%;
		padding: 1.5rem;
	`}
`

const StyledTitle = styled.div`
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	letter-spacing: 0.0625rem;
	line-height: 1.5;
	color: hsl(210, 79%, 46%);
	font-size: 1.5rem;

	${responsive.tablet`
		font-size: 2.125rem;
	`}

	${responsive.laptop`
		font-size: 2.25rem;
	`}
`

const StyledItemsGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const StyledItem = styled.button`
	width: 100%;
	font-size: 2rem;
	font-weight: 500;
	font-family: 'Open Sans', sans-serif;
	letter-spacing: 0.0625rem;
	line-height: 1.75;
	text-decoration: none;
	text-transform: uppercase;
	background-color: transparent;
	border: none;
	border-bottom: 0.0625rem solid hsla(210, 79%, 46%, 0.5);
	padding: 0.375rem 0.5rem;
	transition: background-color 0.25s ease-in-out;

	&:nth-of-type(3) {
		border-bottom: none;
	}

	&:nth-of-type(1):hover {
		cursor: pointer;
		background-color: hsla(123, 46%, 34%, 0.15);
	}

	&:nth-of-type(2):hover {
		cursor: pointer;
		background-color: hsla(27, 98%, 47%, 0.15);
	}

	&:nth-of-type(3):hover {
		cursor: pointer;
		background-color: hsla(0, 65%, 51%, 0.15);
	}
`

const StyledBonus = styled.a`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 2rem;
	background-color: hsl(211, 100%, 50%);
	border: none;
	border-radius: 5rem;
	padding: 0.5rem 1.25rem;
`

export { StyledMenu, StyledTitle, StyledItemsGroup, StyledItem, StyledBonus }
