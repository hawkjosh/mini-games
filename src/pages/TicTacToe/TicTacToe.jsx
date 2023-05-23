import * as React from 'react'

import { Box, Button, ThemeProvider } from '@mui/material'

import { Gameboard } from './components/Gameboard.jsx'
import { Scoreboard } from './components/Scoreboard.jsx'

import { theme } from '../theme.js'

import {
	tictactoeContainerSX,
	winningMessageTxtSX,
	playAgainBtnSX,
} from './tictactoeSX.js'

import './styles/TicTacToe.css'

export const TicTacToe = () => {
	const WIN_COMBOS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	const winningMessage = document.querySelector('[data-winning-message]')
	const winningMessageTxt = document.querySelector('[data-winning-message-txt]')

	const [board, setBoard] = React.useState(Array(9).fill(null))
	const [xPlaying, setXPlaying] = React.useState(true)
	const [score, setScore] = React.useState({ xScore: 0, oScore: 0 })
	const [gameOver, setGameOver] = React.useState(false)

	const handleBoxClick = (squareIndex) => {
		const updatedBoard = board.map((value, index) => {
			if (index === squareIndex) {
				return xPlaying === true ? 'X' : 'O'
			} else {
				return value
			}
		})

		const notNull = (space) => space !== null
		const winner = checkWinner(updatedBoard)

		if (winner) {
			if (winner === 'X') {
				let { xScore } = score
				xScore += 1
				setScore({ ...score, xScore })
				winningMessageTxt.innerText = `X's Win!`
				winningMessageTxt.style.setProperty('color', 'rgb(255, 70, 37)')
				winningMessage.style.setProperty('display', 'flex')
			} else if (winner === 'O') {
				let { oScore } = score
				oScore += 1
				setScore({ ...score, oScore })
				winningMessageTxt.innerText = `O's Win!`
				winningMessageTxt.style.setProperty('color', 'rgb(44, 135, 255)')
				winningMessage.style.setProperty('display', 'flex')
			}
		}
		if (!winner && updatedBoard.every(notNull)) {
			winningMessageTxt.innerText = 'Draw!'
			winningMessage.style.setProperty('display', 'flex')
		}

		setBoard(updatedBoard)

		setXPlaying(!xPlaying)
	}

	const checkWinner = (board) => {
		for (let i = 0; i < WIN_COMBOS.length; i++) {
			const [x, y, z] = WIN_COMBOS[i]
			if (board[x] && board[x] === board[y] && board[y] === board[z]) {
				setGameOver(true)
				return board[x]
			}
		}
	}

	const resetBoard = () => {
		setGameOver(false)
		setBoard(Array(9).fill(null))
		winningMessageTxt.style.setProperty('color', 'white')
		winningMessage.style.setProperty('display', 'none')
	}

	const resetGame = () => {
		setGameOver(false)
		setBoard(Array(9).fill(null))
		setScore({ xScore: 0, oScore: 0 })
		setXPlaying(true)
		winningMessageTxt.style.setProperty('color', 'white')
		winningMessage.style.setProperty('display', 'none')
	}

	return (
		<ThemeProvider theme={theme}>
			<Box
				className='tictactoe-container'
				sx={tictactoeContainerSX}>
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

			<Box
				className='winning-message'
				data-winning-message>
				<Box
					className='winning-message-txt'
					sx={winningMessageTxtSX}
					data-winning-message-txt
				/>
				<Button
					sx={playAgainBtnSX}
					onClick={resetBoard}>
					Play Again
				</Button>
			</Box>
		</ThemeProvider>
	)
}
