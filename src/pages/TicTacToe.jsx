import {useState} from 'react'

import Gameboard from '../components/TicTacToe/Gameboard.jsx'
import Scoreboard from '../components/TicTacToe/Scoreboard.jsx'

import '../assets/styles/TicTacToe/TicTacToe.css'

export default function TicTacToe() {

  const WIN_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const winningMessage = document.getElementById('winningMessage')
  const winningMessageText = document.querySelector('[data-winning-message-text]')
  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)
  const [score, setScore] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)

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
        let {xScore} = score
        xScore += 1
        setScore({ ...score, xScore })
        winningMessageText.innerText = `X's Win!`
        winningMessageText.classList.add('x-win')
        winningMessage.classList.add('x')
      } else if (winner === 'O') {
        let {oScore} = score
        oScore += 1
        setScore({ ...score, oScore })
        winningMessageText.innerText = `O's Win!`
        winningMessageText.classList.add('o-win')
        winningMessage.classList.add('o')
      }
    }
    if (updatedBoard.every(notNull)) {
      winningMessageText.innerText = 'Draw!'
      winningMessage.classList.add('draw')
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
    winningMessageText.classList.remove('x-win', 'o-win')
    winningMessage.classList.remove('draw', 'x', 'o')
  }

  return (
    <div>
      <div>
        <Scoreboard score={score} xPlaying={xPlaying} />
        <Gameboard board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      </div>
      <div className='winning-message' id='winningMessage'>
        <div data-winning-message-text></div>
        <button id="restartButton" onClick={resetBoard}>Play Again</button>
      </div>
    </div>
  )
}