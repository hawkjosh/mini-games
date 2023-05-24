import * as React from 'react'

import { Box, ThemeProvider } from '@mui/material'

import { theme, squareSX } from './squareSX.js'

export const Square = ({ value, onClick }) => {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					...squareSX,
					color: value === 'X' ? 'rgb(255, 70, 37)' : 'rgb(44, 135, 255)',
				}}
				component='button'
				onClick={onClick}>
				{value}
			</Box>
		</ThemeProvider>
	)
}
