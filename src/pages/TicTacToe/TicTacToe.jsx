import * as React from 'react'

import { Box, Button, ThemeProvider } from '@mui/material'

import { Gameboard } from './components/Gameboard.jsx'
import { Scoreboard } from './components/Scoreboard.jsx'

import {
	theme,
	tictactoeContainerSX,
	endMsgContainerSX,
	endMsgTxtSX,
	resetBtnSX,
} from './tictactoeSX.js'

import { winCombos } from './tictactoeUtils.js'

export const TicTacToe = () => {
	const [board, setBoard] = React.useState(Array(9).fill(null))
	const [xPlaying, setXPlaying] = React.useState(true)
	const [score, setScore] = React.useState({ xScore: 0, oScore: 0 })
	const [gameOver, setGameOver] = React.useState(false)
	const [endMsgTxt, setEndMsgTxt] = React.useState('')
	const [endMsgColor, setEndMsgColor] = React.useState('')

	const handleBoxClick = (squareIndex) => {
		const updatedBoard = board.map((value, index) => {
			if (index === squareIndex) {
				return xPlaying === true ? 'X' : 'O'
			} else {
				return value
			}
		})

		const empty = (space) => space !== null
		const winner = checkWinner(updatedBoard)

		if (winner) {
			if (winner === 'X') {
				let { xScore } = score
				xScore += 1
				setScore({ ...score, xScore })
				setEndMsgTxt(`X's Win!`)
				setEndMsgColor('rgb(255, 70, 37)')
			} else if (winner === 'O') {
				let { oScore } = score
				oScore += 1
				setScore({ ...score, oScore })
				setEndMsgTxt(`O's Win!`)
				setEndMsgColor('rgb(44, 135, 255)')
			}
		}
		if (!winner && updatedBoard.every(empty)) {
			console.log('no winner, its a draw!')
			setGameOver(true)
			setEndMsgTxt('Draw!')
			setEndMsgColor('white')
		}

		setBoard(updatedBoard)

		setXPlaying(!xPlaying)
	}

	const checkWinner = (board) => {
		for (let i = 0; i < winCombos.length; i++) {
			const [x, y, z] = winCombos[i]
			if (board[x] && board[x] === board[y] && board[y] === board[z]) {
				setGameOver(true)
				return board[x]
			}
		}
	}

	const resetBoard = () => {
		setGameOver(false)
		setBoard(Array(9).fill(null))
		setEndMsgTxt('')
		setEndMsgColor('')
	}

	const resetGame = () => {
		setGameOver(false)
		setBoard(Array(9).fill(null))
		setScore({ xScore: 0, oScore: 0 })
		setXPlaying(true)
		setEndMsgTxt('')
		setEndMsgColor('')
	}

	return (
		<ThemeProvider theme={theme}>
			<Box sx={tictactoeContainerSX}>
				<Scoreboard
					score={score}
					xPlaying={xPlaying}
					resetGame={resetGame}
				/>
				<Gameboard
					board={board}
					onClick={gameOver ? resetBoard : handleBoxClick}
				/>
			</Box>

			{gameOver && (
				<Box sx={endMsgContainerSX}>
					<Box
						sx={{
							...endMsgTxtSX,
							color: endMsgColor,
						}}>
						{endMsgTxt}
					</Box>
					<Button
						sx={resetBtnSX}
						onClick={resetBoard}>
						Play Again
					</Button>
				</Box>
			)}
		</ThemeProvider>
	)
}
