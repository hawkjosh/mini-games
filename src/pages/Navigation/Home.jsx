import React from 'react'

import {
	StyledContainer,
	StyledLink,
	StyledTictactoeIcon,
	StyledHangmanIcon,
	StyledMemorymatchIcon,
} from './components/styles/Home.styled.js'

export const Home = () => {
	return (
		<StyledContainer>
			<StyledLink to='/tic-tac-toe'>
				<StyledTictactoeIcon />
			</StyledLink>

			<StyledLink to='/hangman'>
				<StyledHangmanIcon />
			</StyledLink>

			<StyledLink to='/memory-match'>
				<StyledMemorymatchIcon />
			</StyledLink>
		</StyledContainer>
	)
}
