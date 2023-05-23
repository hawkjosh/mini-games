import * as React from 'react'

import { Box, Card, ThemeProvider } from '@mui/material'

import { theme } from '../../theme.js'

import { cardWrapperSX, cardFrontSX, cardBackSX } from './singleCardSX.js'

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
					raised
					className={flipped ? 'flipped' : ''}
					sx={cardFrontSX}
					style={{
						backgroundImage: `url(${card.bgImg})`,
						backgroundSize: card.bgSize,
					}}
				/>
				<Card
					raised
					className={flipped ? 'flipped' : ''}
					sx={cardBackSX}
					onClick={handleClick}
				/>
			</Box>
		</ThemeProvider>
	)
}
