import * as React from 'react'

import { Box, ThemeProvider, Typography } from '@mui/material'

import { theme } from '../../theme.js'

import { squareSX } from './squareSX.js'

import '../styles/TicTacToe.css'

export const Square = ({ value, onClick }) => {
	return (
		<ThemeProvider theme={theme}>
			<Box
				className={value === 'X' ? 'square red' : 'square blue'}
				component='button'
				onClick={onClick}>
				<Typography sx={squareSX}>{value}</Typography>
			</Box>
		</ThemeProvider>
	)
}
