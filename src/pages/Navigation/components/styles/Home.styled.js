import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

import { TicTacToeIcon } from '../../components/TicTacToeIcon.jsx'
import { HangmanIcon } from '../../components/HangmanIcon.jsx'
import { MemoryMatchIcon } from '../../components/MemoryMatchIcon.jsx'

import { responsive } from '../../../../GlobalStyle.js'

const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	padding-bottom: 2.5rem;
	margin-top: 2.5rem;
	row-gap: 1.5rem;

	${responsive.tablet`
    margin-top: 3.5rem;
    row-gap: 2.5rem;
  `}

  ${responsive.laptop`
    margin-top: 4.5rem;
    row-gap: 3.5rem;
  `}
`

const StyledLink = styled(NavLink)`
	text-decoration: none;
	border: 0.25rem solid #1976d2;
	border-radius: 0.75rem;
	box-shadow: 0 0 0.5rem #1976d2;
	padding: 2rem;

	&:hover {
		box-shadow: 0 0 1rem #1976d2;
	}
`

const StyledTictactoeIcon = styled(TicTacToeIcon)`
	transition: transform 0.5s ease;
	width: 12.5rem;

	&:hover {
		transform: scale(1.125);
	}

	${responsive.tablet`
    width: 14rem;
  `}

  ${responsive.laptop`
    width: 15.5rem;
  `}
`

const StyledHangmanIcon = styled(HangmanIcon)`
	transition: transform 0.5s ease;
	width: 12.5rem;

	&:hover {
		transform: scale(1.125);
	}

	${responsive.tablet`
  width: 14rem;
`}

${responsive.laptop`
  width: 15.5rem;
`}
`

const StyledMemorymatchIcon = styled(MemoryMatchIcon)`
	transition: transform 0.5s ease;
	width: 12.5rem;

	&:hover {
		transform: scale(1.125);
	}

	${responsive.tablet`
    width: 14rem;
  `}

  ${responsive.laptop`
    width: 15.5rem;
  `}
`

export {
	StyledContainer,
	StyledLink,
	StyledTictactoeIcon,
	StyledHangmanIcon,
	StyledMemorymatchIcon,
}
