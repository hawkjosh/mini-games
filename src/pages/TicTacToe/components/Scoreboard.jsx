import * as React from 'react'

import { Box, Button, ThemeProvider } from '@mui/material'

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'

import { theme } from '../../theme.js'

import {
	scoreContainerSX,
	scoreWrapperSX,
	scoreSX,
	arrowIconSX,
	resetBtnSX,
} from './scoreboardSX.js'

import '../styles/TicTacToe.css'

export const Scoreboard = ({ score, xPlaying, resetGame }) => {
	const { xScore, oScore } = score

	return (
		<ThemeProvider theme={theme}>
			<Box
				className='score-container'
				sx={scoreContainerSX}>
				<Box
					className='score-wrapper'
					sx={scoreWrapperSX}>
					<Box
						className={`score x-score ${!xPlaying && 'inactive'}`}
						sx={scoreSX}>
						<span className='score-txt'>X's</span>
						<span className='score-txt'>‣</span>
						<span className='score-txt'>{xScore}</span>
					</Box>
					<ArrowCircleUpIcon
						className={`red ${!xPlaying && 'hide'}`}
						sx={arrowIconSX}
					/>
				</Box>
				<Button
					variant='contained'
					onClick={() => resetGame()}
					sx={resetBtnSX}>
					Reset
				</Button>
				<Box
					className='score-wrapper'
					sx={scoreWrapperSX}>
					<ArrowCircleDownIcon
						className={`blue ${xPlaying && 'hide'}`}
						sx={arrowIconSX}
					/>
					<Box
						className={`score o-score ${xPlaying && 'inactive'}`}
						sx={scoreSX}>
						<span className='score-txt'>O's</span>
						<span className='score-txt'>‣</span>
						<span className='score-txt'>{oScore}</span>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	)
}
