import * as React from 'react'

import { Box, Card, ThemeProvider } from '@mui/material'

import { theme, sx } from './singleCardSX.js'

export const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
	const handleClick = () => {
		if (!disabled) {
			handleChoice(card)
		}
	}

	const SvgComponent = ({path}) => {
		return (
			<svg
				viewBox='0 0 100 100'
				width='75%'
				stroke='hsla(211, 100%, 35%, 1)'
				strokeWidth='4'
				strokeLinecap='round'
				strokeLinejoin='round'
				fill='hsla(36, 100%, 50%, 1)'
				style={{filter: 'drop-shadow(0.375rem 0.375rem 0.25rem hsla(0, 0%, 0%, 0.625))'}}>
				<path d={path} />
			</svg>
		)
	}

	return (
		<ThemeProvider theme={theme}>
			<Box sx={sx.card}>
				<Card
					sx={{
						...sx.card.front,
						transform: flipped ? 'rotateY(0deg)' : 'rotateY(90deg)',
						transitionDelay: flipped ? '0.25s' : '0s',
					}}
					raised>
						<SvgComponent path={card.svgPath} />
					</Card>
				<Card
					sx={{
						...sx.card.back,
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
