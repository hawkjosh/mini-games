import * as React from 'react'

import { Box, Card, ThemeProvider } from '@mui/material'

import {
	theme,
	cardWrapperSX,
	cardFrontSX,
	cardBackSX,
} from './singleCardSX.js'

export const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
	const handleClick = () => {
		if (!disabled) {
			handleChoice(card)
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<Box sx={cardWrapperSX}>
				<Card
					sx={{
						...cardFrontSX,
						backgroundImage: `url(${card.img})`,
						transform: flipped ? 'rotateY(0deg)' : 'rotateY(90deg)',
						transitionDelay: flipped ? '0.25s' : '0s',
					}}
					raised
				/>
				<Card
					sx={{
						...cardBackSX,
						transform: flipped ? 'rotateY(90deg)' : 'rotateY(0deg)',
						transitionDelay: flipped ? '0s' : '0.25s',
					}}
					onClick={handleClick}
					raised
				/>
			</Box>
		</ThemeProvider>
	)
}
