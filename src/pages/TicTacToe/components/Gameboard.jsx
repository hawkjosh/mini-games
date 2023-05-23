import * as React from 'react'

import { Box, ThemeProvider } from '@mui/material'

import { Square } from './Square.jsx'

import { theme } from '../../theme.js'

import { gameboardContainerSX, gameboardWrapperSX } from './gameboardSX.js'

export const Gameboard = ({ board, onClick }) => {
	return (
		<ThemeProvider theme={theme}>
			<Box
				className='gameboard-container'
				sx={gameboardContainerSX}>
				<Box
					className='gameboard-wrapper'
					sx={gameboardWrapperSX}>
					{board.map((value, index) => {
						return (
							<Square
								key={index}
								value={value}
								onClick={() => value === null && onClick(index)}
							/>
						)
					})}
				</Box>
			</Box>
		</ThemeProvider>
	)
}
