import * as React from 'react'

import { Link } from 'react-router-dom'

import { Box, ThemeProvider } from '@mui/material'

import { TicTacToeIcon } from '../pages/TicTacToe/images/TicTacToeIcon.jsx'
import { HangmanIcon } from '../pages/Hangman/images/HangmanIcon.jsx'
import { MemoryMatchIcon } from '../pages/MemoryMatch/images/MemoryMatchIcon.jsx'

import { theme } from './theme.js'

import {
	homeContainerSX,
	gameIconWrapperSX,
	gameIconSX,
	gameIconDisabledSX,
} from './homeSX.js'

export const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={homeContainerSX}>
				<Link to='/tic-tac-toe'>
					<Box sx={gameIconWrapperSX}>
						<Box sx={gameIconSX}>
							<TicTacToeIcon />
						</Box>
					</Box>
				</Link>

				<Link to='/hangman'>
					<Box sx={gameIconWrapperSX}>
						<Box sx={gameIconSX}>
							<HangmanIcon />
						</Box>
					</Box>
				</Link>

				{/* <Link
						to='/memory-match'> */}
				<Box sx={gameIconWrapperSX}>
					<Box sx={gameIconDisabledSX}>
						<MemoryMatchIcon />
					</Box>
				</Box>
				{/* </Link> */}
			</Box>
		</ThemeProvider>
	)
}
