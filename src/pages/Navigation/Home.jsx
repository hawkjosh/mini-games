import * as React from 'react'

import { Link } from 'react-router-dom'

import { Box, ThemeProvider } from '@mui/material'

import { TicTacToeIcon } from './components/TicTacToeIcon.jsx'
import { HangmanIcon } from './components/HangmanIcon.jsx'
import { MemoryMatchIcon } from './components/MemoryMatchIcon.jsx'

import {
	theme,
	homeContainerSX,
	gameIconWrapperSX,
	gameIconLinkSX,
	gameIconSX,
} from './homeSX.js'

export const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={homeContainerSX}>
				<Link
					to='/tic-tac-toe'
					style={gameIconLinkSX}>
					<Box sx={gameIconWrapperSX}>
						<Box sx={gameIconSX}>
							<TicTacToeIcon />
						</Box>
					</Box>
				</Link>

				<Link
					to='/hangman'
					style={gameIconLinkSX}>
					<Box sx={gameIconWrapperSX}>
						<Box sx={gameIconSX}>
							<HangmanIcon />
						</Box>
					</Box>
				</Link>

				<Link
					to='/memory-match'
					style={gameIconLinkSX}>
					<Box sx={gameIconWrapperSX}>
						<Box sx={gameIconSX}>
							<MemoryMatchIcon />
						</Box>
					</Box>
				</Link>
			</Box>
		</ThemeProvider>
	)
}
