import { useState } from 'react'

import { Gameboard } from './components/Gameboard.jsx'
import { Scoreboard } from './components/Scoreboard.jsx'

import {
	StyledContainer,
	StyledEndMessage,
	StyledText,
	StyledButton,
} from './components/styles/Tictactoe.styled.js'

const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

export const TictactoeStyled = () => {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xPlaying, setXPlaying] = useState(true)
	const [score, setScore] = useState({ xScore: 0, oScore: 0 })
	const [gameOver, setGameOver] = useState(false)
	const [endMsgTxt, setEndMsgTxt] = useState('')
	const [endMsgColor, setEndMsgColor] = useState('')

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
				setEndMsgColor('hsl(9, 100%, 57%)')
			} else if (winner === 'O') {
				let { oScore } = score
				oScore += 1
				setScore({ ...score, oScore })
				setEndMsgTxt(`O's Win!`)
				setEndMsgColor('hsl(214, 100%, 59%)')
			}
		}
		if (!winner && updatedBoard.every(empty)) {
			console.log('no winner, its a draw!')
			setGameOver(true)
			setEndMsgTxt('Draw!')
			setEndMsgColor('hsl(0, 0%, 100%)')
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
		<>
			<StyledContainer>
				<Scoreboard
					score={score}
					xPlaying={xPlaying}
					resetGame={resetGame}
				/>
				<Gameboard
					board={board}
					onClick={gameOver ? resetBoard : handleBoxClick}
				/>
			</StyledContainer>

			{gameOver && (
				<StyledEndMessage>
					<StyledText style={{ color: endMsgColor }}>{endMsgTxt}</StyledText>
					<StyledButton onClick={resetBoard}>Play Again</StyledButton>
				</StyledEndMessage>
			)}
		</>
	)
}
