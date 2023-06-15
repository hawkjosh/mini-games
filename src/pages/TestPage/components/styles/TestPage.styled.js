import styled from 'styled-components'

import { responsive } from '../../../../GlobalStyle.js'

const StyledContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: lightgray;
	border: 0.25rem solid yellow;
	border-radius: 1.5rem;
	gap: 1.5rem;
	padding: 2rem;
	box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2),
		0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);

	${responsive.tablet`
    gap: 2rem;
    padding: 3rem;
  `}

	${responsive.laptop`
    gap: 2.5rem;
    padding: 4rem;
  `}
`

const StyledHeader = styled.div`
	display: flex;
	place-content: center;
`

const StyledTitle = styled.div`
	font-weight: bold;
	text-decoration: underline;
	color: hsl(250, 25%, 46%);
	font-size: 2rem;

	${responsive.tablet`
    font-size: 2.5rem;
  `}

  ${responsive.laptop`
    font-size: 3rem;
  `}
`

const StyledCardBody = styled.div`
	width: 100%;
	display: flex;
	place-content: center;
	gap: 0.75rem;

	${responsive.tablet`
    gap: 1.5rem;
  `}

  ${responsive.laptop`
    gap: 2.25rem;
  `}
`

const StyledCountBtn = styled.div`
	display: flex;
	place-items: center;
	border: 0.25rem solid hsl(250, 25%, 46%);
	border-radius: 1rem;
	background-color: white;
	cursor: pointer;
	padding: 0.25rem 0.5rem;

	${responsive.tablet`
    padding: 0.375rem 0.75rem;
  `}

  ${responsive.laptop`
    padding: 0.5rem 1rem;
  `}
`

const StyledCountBtnText = styled.div`
	font-weight: bold;
	font-size: 2rem;

	${responsive.tablet`
    font-size: 2.25rem;
  `}

  ${responsive.laptop`
    font-size: 2.5rem;
  `}
`

const StyledCountBadge = styled.div`
	border-radius: 1rem;
	border: 0.25rem solid white;
	background-color: hsl(250, 25%, 46%);
	pointer-events: none;
	padding: 0.5rem;

	${responsive.tablet`
    padding: 0.75rem;
  `}

  ${responsive.laptop`
    padding: 1rem;
  `}
`

const StyledCountBadgeText = styled.div`
	font-weight: bold;
	color: white;
	text-align: center;
	font-size: 1.5rem;

	${responsive.tablet`
    font-size: 2rem;
  `}

  ${responsive.laptop`
    font-size: 2.5rem;
  `}
`

const StyledFooter = styled.div`
	display: flex;
	place-content: center;
`

const StyledResetBtn = styled.div`
	display: flex;
	place-items: center;
	color: hsl(250, 25%, 46%);
	border: 0.25rem solid hsl(250, 25%, 46%);
	border-radius: 1rem;
	background-color: white;
	padding: 0.5rem 1rem;
	cursor: pointer;
	transition: all 0.375s ease;

	&:hover {
		color: white;
		background-color: hsl(250, 25%, 46%);
		border-color: white;
	}
`

const StyledResetBtnText = styled.div`
	font-weight: bold;
	text-transform: uppercase;
	transition: all 0.375s ease;
	font-size: 1.5rem;

	${responsive.tablet`
    font-size: 1.75rem;
  `}

  ${responsive.laptop`
    font-size: 2rem;
  `}
`

export {
	StyledContainer,
	StyledCard,
	StyledHeader,
	StyledTitle,
	StyledCardBody,
	StyledCountBtn,
	StyledCountBtnText,
	StyledCountBadge,
	StyledCountBadgeText,
	StyledFooter,
	StyledResetBtn,
	StyledResetBtnText,
}
